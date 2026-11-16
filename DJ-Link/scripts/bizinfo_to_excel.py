"""
기업마당 지원사업정보 API → 엑셀 정리 스크립트 (DJ Link팀)

사용법
  1) 설치:   pip install requests pandas openpyxl
  2) 실행:   python bizinfo_to_excel.py
             (인증키를 물어보면 입력. 또는 환경변수 BIZINFO_API_KEY 에 넣어두기)
  3) 결과:   같은 폴더에 bizinfo_공고_YYYYMMDD.xlsx, bizinfo_raw_YYYYMMDD.json 생성

엑셀 시트
  - 전체공고        : 모든 공고 (주요 필드 한글 컬럼 + 접수상태 계산)
  - 분야별요약      : 지원분야 × 접수상태 건수
  - 자격조건표_양식 : 가인/정빈이 채울 빈 양식 (공고ID·공고명·링크는 미리 채움)
  - 원본전체필드    : API가 준 모든 필드 그대로 (명세에 없는 필드 확인용)
"""

import os
import re
import sys
import json
import time
import html
from datetime import datetime, date

import requests
import pandas as pd

API_URL = "https://www.bizinfo.go.kr/uss/rss/bizinfoApi.do"
PAGE_UNIT = 100          # 한 번에 받을 건수
MAX_PAGES = 200          # 안전장치 (100 x 200 = 2만 건)
SLEEP_SEC = 0.3          # 호출 간격 (서버 부담 줄이기)

# 기업마당 지원분야 코드 (페이지 넘김이 안 될 때 분야별로 나눠 받기용)
CATEGORIES = {
    "금융": "PLD0001", "기술": "PLD0002", "인력": "PLD0003", "수출": "PLD0004",
    "내수": "PLD0005", "창업": "PLD0006", "경영": "PLD0007", "기타": "PLD0008",
}

# API 필드 → 엑셀 한글 컬럼 (명세에 없는 필드는 '원본전체필드' 시트에 그대로 남음)
FIELD_KO = {
    "pblancId": "공고ID",
    "pblancNm": "공고명",
    "pldirSportRealmLclasCodeNm": "지원분야(대)",
    "pldirSportRealmMlsfcCodeNm": "지원분야(중)",
    "jrsdInsttNm": "소관부처·지자체",
    "excInsttNm": "수행기관",
    "reqstBeginEndDe": "신청기간(원문)",
    "trgetNm": "지원대상",
    "hashtags": "해시태그",
    "bsnsSumryCn": "사업개요",
    "reqstMthPapersCn": "신청방법·서류",
    "refrncNm": "문의처",
    "rceptEngnHmpgUrl": "접수처 URL",
    "pblancUrl": "공고 URL",
    "creatPnttm": "등록일시",
    "inqireCo": "조회수",
    "fileNm": "첨부파일명",
    "flpthNm": "첨부파일 경로",
    "printFileNm": "본문출력파일명",
    "printFlpthNm": "본문출력파일 경로",
}


# ---------------------------------------------------------------- 수집
def call_api(key, **params):
    q = {"crtfcKey": key, "dataType": "json", **params}
    r = requests.get(API_URL, params=q, timeout=30,
                     headers={"Accept": "application/json"})
    r.raise_for_status()
    try:
        data = r.json()
    except ValueError:
        sys.exit(f"[오류] JSON이 아닌 응답이 왔어요. 앞부분:\n{r.text[:500]}")
    if isinstance(data, dict) and data.get("reqErr"):
        sys.exit(f"[오류] 기업마당 API: {data['reqErr']}  (인증키 승인 여부 확인)")
    items = data.get("jsonArray", []) if isinstance(data, dict) else data
    return items or []


def fetch_paged(key, extra=None):
    """pageIndex로 끝까지 넘기며 받기. 페이지 넘김이 안 먹으면 None 반환."""
    extra = extra or {}
    out, seen_first = [], None
    for page in range(1, MAX_PAGES + 1):
        items = call_api(key, pageUnit=PAGE_UNIT, pageIndex=page, **extra)
        if not items:
            break
        first_id = items[0].get("pblancId")
        if page == 2 and first_id == seen_first:
            return None  # 2페이지가 1페이지와 같음 → 페이지 넘김 미지원
        if page == 1:
            seen_first = first_id
        out.extend(items)
        print(f"  {page}페이지: {len(items)}건 (누적 {len(out)})")
        if len(items) < PAGE_UNIT:
            break
        time.sleep(SLEEP_SEC)
    return out


def fetch_all(key):
    print("▶ 전체 공고 수집 시작")
    items = fetch_paged(key)
    if items is None:
        print("  페이지 넘김이 지원되지 않아 searchCnt + 분야별 방식으로 다시 받을게요.")
        items = []
        for name, code in CATEGORIES.items():
            got = call_api(key, searchCnt=5000, searchLclasId=code)
            print(f"  {name}: {len(got)}건")
            items.extend(got)
            time.sleep(SLEEP_SEC)

    # 중복 제거 (공고ID 기준)
    uniq = {}
    for it in items:
        uniq[it.get("pblancId") or json.dumps(it, ensure_ascii=False)] = it
    print(f"▶ 수집 완료: 총 {len(items)}건 → 중복 제거 후 {len(uniq)}건")
    return list(uniq.values())


# ---------------------------------------------------------------- 정리
def clean_text(s):
    if not isinstance(s, str):
        return s
    s = html.unescape(s)
    s = re.sub(r"<br\s*/?>", "\n", s, flags=re.I)
    s = re.sub(r"<[^>]+>", "", s)
    return re.sub(r"[ \t]+", " ", s).strip()


def parse_period(raw):
    """'20261101 ~ 20261130' 형태 → (시작일, 마감일). 상시/소진 등은 None."""
    if not isinstance(raw, str):
        return None, None
    ds = re.findall(r"(\d{4})[.\-]?(\d{2})[.\-]?(\d{2})", raw)
    to_d = lambda t: date(int(t[0]), int(t[1]), int(t[2]))
    try:
        if len(ds) >= 2:
            return to_d(ds[0]), to_d(ds[1])
        if len(ds) == 1:
            return to_d(ds[0]), None
    except ValueError:
        pass
    return None, None


def status_of(start, end, raw, today):
    if isinstance(raw, str) and any(k in raw for k in ("상시", "소진", "수시")):
        return "상시"
    if start and today < start:
        return "접수예정"
    if end and today > end:
        return "마감"
    if start or end:
        return "접수중"
    return "확인필요"


def build_frames(items, today=None):
    today = today or date.today()
    raw_df = pd.DataFrame(items)

    df = pd.DataFrame()
    for k, ko in FIELD_KO.items():
        df[ko] = raw_df[k].map(clean_text) if k in raw_df.columns else ""

    se = raw_df.get("reqstBeginEndDe", pd.Series([None] * len(raw_df)))
    periods = se.map(parse_period)
    df.insert(7, "접수시작", periods.map(lambda p: p[0]))
    df.insert(8, "접수마감", periods.map(lambda p: p[1]))
    df.insert(9, "접수상태", [status_of(s, e, r, today)
                             for (s, e), r in zip(periods, se)])
    df.insert(10, "D-day", [(e - today).days if e and e >= today else None
                            for _, e in periods])
    df["D-day"] = df["D-day"].astype("Int64")
    order = {"접수중": 0, "접수예정": 1, "상시": 2, "확인필요": 3, "마감": 4}
    df["_o"] = df["접수상태"].map(order)
    df = df.sort_values(["_o", "접수마감"], na_position="last").drop(columns="_o")

    summary = pd.crosstab(df["지원분야(대)"].fillna("").replace("", "미분류"),
                          df["접수상태"], margins=True, margins_name="합계")

    form_cols = ["공고ID", "공고명", "지원분야(대)", "소관부처·지자체", "수행기관",
                 "접수상태", "접수마감", "공고 URL"]
    form = df[form_cols].copy()
    for c in ["구분(보조금/정책자금)", "지원방식(융자/보증/이차보전/바우처/출연)",
              "지역", "업력 조건", "업종 조건", "규모(매출·인원) 조건",
              "대표자 조건(나이·성별 등)", "필수 보유(연구소·인증·수출실적 등)",
              "제외 조건", "지원 규모", "자부담 비율", "예년 공고일(최근 3년)",
              "제출 서류", "확인자", "메모"]:
        form[c] = ""

    return df, summary, form, raw_df


def save_excel(df, summary, form, raw_df, path):
    with pd.ExcelWriter(path, engine="openpyxl") as w:
        df.to_excel(w, sheet_name="전체공고", index=False)
        summary.to_excel(w, sheet_name="분야별요약")
        form.to_excel(w, sheet_name="자격조건표_양식", index=False)
        raw_df.to_excel(w, sheet_name="원본전체필드", index=False)

        widths = {"공고명": 60, "사업개요": 80, "지원대상": 30, "신청방법·서류": 60,
                  "공고 URL": 40, "해시태그": 30}
        for name, frame in [("전체공고", df), ("자격조건표_양식", form)]:
            ws = w.sheets[name]
            ws.freeze_panes = "C2"
            ws.auto_filter.ref = ws.dimensions
            for i, col in enumerate(frame.columns, 1):
                letter = ws.cell(row=1, column=i).column_letter
                ws.column_dimensions[letter].width = widths.get(col, 16)


# ---------------------------------------------------------------- 실행
def main():
    key = os.environ.get("BIZINFO_API_KEY") or input("기업마당 API 인증키: ").strip()
    if not key:
        sys.exit("인증키가 없어요.")

    items = fetch_all(key)
    if not items:
        sys.exit("받은 공고가 0건이에요. 인증키 승인 상태를 확인해 주세요.")

    stamp = datetime.now().strftime("%Y%m%d")
    with open(f"bizinfo_raw_{stamp}.json", "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=1)

    df, summary, form, raw_df = build_frames(items)
    out = f"bizinfo_공고_{stamp}.xlsx"
    save_excel(df, summary, form, raw_df, out)

    print(f"\n✅ 저장 완료: {out}")
    print(df["접수상태"].value_counts().to_string())
    print(f"\n원본 필드 목록: {', '.join(raw_df.columns)}")


if __name__ == "__main__":
    main()
