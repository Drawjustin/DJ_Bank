"""
기업마당 행사정보 API → 엑셀 정리 스크립트 (DJ Link팀)

행사정보 API의 응답 필드명을 확인하지 못해서, 받은 필드를 '그대로 전부' 엑셀에 담고
행사기간·지역처럼 자동으로 알아낼 수 있는 값만 추가로 계산하는 방식으로 만들었어요.

사용법
  1) 설치:  pip install requests pandas openpyxl
  2) 기업마당 '행사정보 API' 상세 페이지에서 '요청 URL'을 복사해 아래 EVENT_API_URL 에 붙여넣기
     (또는 실행할 때 물어보면 입력)
  3) 실행:  python bizinfo_event_to_excel.py
  4) 결과:  bizinfo_행사_YYYYMMDD.xlsx, bizinfo_event_raw_YYYYMMDD.json

엑셀 시트
  - 전체행사   : 받은 모든 필드 + (자동) 지역 · 행사시작 · 행사종료 · 상태 · D-day
  - 지역별요약 : 지역 × 상태 건수
  - 월별요약   : 행사 시작 월별 건수
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

# ▼ 기업마당 행사정보 API 요청 URL
#   지원사업 API(apiDetail.do?id=bizinfoApi → /uss/rss/bizinfoApi.do)와 같은 규칙으로 추정한 주소예요.
#   행사정보 API 상세 페이지(id=bizinfoEventApi)의 '요청 URL'과 다르면 여기를 고쳐 주세요.
EVENT_API_URL = "https://www.bizinfo.go.kr/uss/rss/bizinfoEventApi.do"

PAGE_UNIT = 100
MAX_PAGES = 200
SLEEP_SEC = 0.3


# ---------------------------------------------------------------- 수집
def extract_list(data):
    """응답 JSON에서 행사 목록(list)을 찾아 꺼냄. 구조가 달라도 동작하게."""
    if isinstance(data, list):
        return data
    if isinstance(data, dict):
        for k in ("jsonArray", "items", "item", "data", "list", "result"):
            v = data.get(k)
            if isinstance(v, list):
                return v
            if isinstance(v, dict):
                inner = extract_list(v)
                if inner:
                    return inner
        for v in data.values():          # 이름이 달라도 첫 번째 목록을 사용
            if isinstance(v, list) and v and isinstance(v[0], dict):
                return v
            if isinstance(v, dict):
                inner = extract_list(v)
                if inner:
                    return inner
    return []


def call_api(url, key, **params):
    q = {"crtfcKey": key, "dataType": "json", **params}
    r = requests.get(url, params=q, timeout=30, headers={"Accept": "application/json"})
    r.raise_for_status()
    try:
        data = r.json()
    except ValueError:
        sys.exit(f"[오류] JSON이 아닌 응답이 왔어요. 앞부분:\n{r.text[:500]}")
    if isinstance(data, dict) and data.get("reqErr"):
        sys.exit(f"[오류] 기업마당 API: {data['reqErr']}  (행사정보 API 인증키 승인 여부 확인)")
    return extract_list(data), data


def item_key(it):
    for k in it:
        if re.search(r"(Id|ID|Sn|No)$", k) and it[k]:
            return f"{k}={it[k]}"
    return json.dumps(it, ensure_ascii=False, sort_keys=True)


def fetch_all(url, key):
    print("▶ 행사정보 수집 시작")
    out, first_key = [], None
    for page in range(1, MAX_PAGES + 1):
        items, raw = call_api(url, key, pageUnit=PAGE_UNIT, pageIndex=page)
        if page == 1 and not items:
            print("  [확인] 1페이지 응답에서 목록을 찾지 못했어요. 응답 앞부분:")
            print("  " + json.dumps(raw, ensure_ascii=False)[:600])
            break
        if not items:
            break
        if page == 1:
            first_key = item_key(items[0])
        elif page == 2 and item_key(items[0]) == first_key:
            print("  페이지 넘김이 지원되지 않아 searchCnt 방식으로 한 번에 받을게요.")
            out, _ = call_api(url, key, searchCnt=10000)
            break
        out.extend(items)
        print(f"  {page}페이지: {len(items)}건 (누적 {len(out)})")
        if len(items) < PAGE_UNIT:
            break
        time.sleep(SLEEP_SEC)

    uniq = {item_key(it): it for it in out}
    print(f"▶ 수집 완료: 총 {len(out)}건 → 중복 제거 후 {len(uniq)}건")
    return list(uniq.values())


# ---------------------------------------------------------------- 정리
DATE_RE = re.compile(r"(20\d{2})[.\-/]?(\d{1,2})[.\-/]?(\d{1,2})")


def clean_text(s):
    if not isinstance(s, str):
        return s
    s = html.unescape(s)
    s = re.sub(r"<br\s*/?>", "\n", s, flags=re.I)
    s = re.sub(r"<[^>]+>", "", s)
    return re.sub(r"[ \t]+", " ", s).strip()


def to_date(t):
    try:
        return date(int(t[0]), int(t[1]), int(t[2]))
    except ValueError:
        return None


def find_col(df, patterns):
    for p in patterns:
        for c in df.columns:
            if re.search(p, c, flags=re.I):
                return c
    return None


def guess_period(df):
    """행사 시작/종료일 컬럼을 이름으로 추정. 못 찾으면 '기간' 문자열에서 파싱."""
    start_c = find_col(df, [r"(evnt|event).*(bgn|begin|strt|start)", r"(bgn|begin|strt|start).*(de|dt|date)$"])
    end_c = find_col(df, [r"(evnt|event).*(end)", r"end.*(de|dt|date)$"])
    starts, ends = [None] * len(df), [None] * len(df)

    if start_c or end_c:
        if start_c:
            starts = [to_date(m[0]) if (m := DATE_RE.findall(str(v))) else None for v in df[start_c]]
        if end_c:
            ends = [to_date(m[0]) if (m := DATE_RE.findall(str(v))) else None for v in df[end_c]]
        return starts, ends, f"{start_c} / {end_c}"

    # 'YYYY-MM-DD ~ YYYY-MM-DD' 형태가 들어있는 컬럼 찾기
    for c in df.columns:
        sample = df[c].astype(str).head(50)
        if sample.str.contains(r"20\d{2}.{0,3}\d{1,2}.{0,3}\d{1,2}\s*~").mean() > 0.5:
            for i, v in enumerate(df[c].astype(str)):
                ds = DATE_RE.findall(v)
                if ds:
                    starts[i] = to_date(ds[0])
                    ends[i] = to_date(ds[1]) if len(ds) > 1 else starts[i]
            return starts, ends, c
    return starts, ends, None


def guess_region(df):
    """지역 컬럼이 있으면 사용, 없으면 제목 앞의 [경기] 같은 표기에서 추출."""
    reg_c = find_col(df, [r"(area|region|rgn|ctprvn|sido|locplc)"])
    if reg_c:
        return df[reg_c].fillna("").astype(str).str.strip(), reg_c
    title_c = find_col(df, [r"(nm|title|sj)$", r"(evnt|event).*(nm|title|sj)"])
    if title_c:
        reg = df[title_c].astype(str).str.extract(r"^\s*\[([^\]]+)\]")[0].fillna("")
        return reg, f"{title_c} 앞 [ ] 표기"
    return pd.Series([""] * len(df)), None


def build_frames(items, today=None):
    today = today or date.today()
    raw = pd.DataFrame(items)
    df = raw.apply(lambda col: col.map(clean_text) if col.dtype == object else col)

    starts, ends, period_src = guess_period(df)
    region, region_src = guess_region(df)

    def status(s, e):
        if s is None and e is None:
            return "확인필요"
        if s and today < s:
            return "예정"
        if e and today > e:
            return "종료"
        return "진행중"

    auto = pd.DataFrame({
        "지역(자동)": region.values,
        "행사시작(자동)": starts,
        "행사종료(자동)": ends,
        "상태(자동)": [status(s, e) for s, e in zip(starts, ends)],
        "D-day(자동)": [(s - today).days if s and s >= today else None for s in starts],
    })
    auto["D-day(자동)"] = auto["D-day(자동)"].astype("Int64")
    df = pd.concat([auto, df.reset_index(drop=True)], axis=1)

    order = {"진행중": 0, "예정": 1, "확인필요": 2, "종료": 3}
    df["_o"] = df["상태(자동)"].map(order)
    df = df.sort_values(["_o", "행사시작(자동)"], na_position="last").drop(columns="_o")

    by_region = pd.crosstab(df["지역(자동)"].replace("", "미분류"), df["상태(자동)"],
                            margins=True, margins_name="합계")
    months = pd.Series([s.strftime("%Y-%m") if s else "날짜없음" for s in df["행사시작(자동)"]],
                       name="행사 시작 월")
    by_month = months.value_counts().sort_index().rename("건수").to_frame()

    return df, by_region, by_month, period_src, region_src


def save_excel(df, by_region, by_month, path):
    with pd.ExcelWriter(path, engine="openpyxl") as w:
        df.to_excel(w, sheet_name="전체행사", index=False)
        by_region.to_excel(w, sheet_name="지역별요약")
        by_month.to_excel(w, sheet_name="월별요약")
        ws = w.sheets["전체행사"]
        ws.freeze_panes = "F2"
        ws.auto_filter.ref = ws.dimensions
        for i, col in enumerate(df.columns, 1):
            letter = ws.cell(row=1, column=i).column_letter
            longest = df[col].astype(str).str.len().quantile(0.9) if len(df) else 10
            ws.column_dimensions[letter].width = max(10, min(60, int(longest) + 2))


# ---------------------------------------------------------------- 실행
def main():
    url = (os.environ.get("BIZINFO_EVENT_URL") or EVENT_API_URL
           or input("행사정보 API 요청 URL: ").strip())
    url = url.split("?")[0]  # 주소 뒤에 붙은 예시 파라미터는 제거
    key = (os.environ.get("BIZINFO_EVENT_KEY") or os.environ.get("BIZINFO_API_KEY")
           or input("행사정보 API 인증키: ").strip())
    if not url or not key:
        sys.exit("요청 URL과 인증키가 모두 필요해요.")

    print(f"요청 URL: {url}")
    try:
        items = fetch_all(url, key)
    except requests.HTTPError as e:
        sys.exit(f"[오류] {e}\n→ 요청 URL이 틀렸을 수 있어요. 행사정보 API 상세 페이지의 '요청 URL'을 "
                 f"스크립트 위쪽 EVENT_API_URL 에 넣어 주세요.")
    if not items:
        sys.exit("받은 행사가 0건이에요. 요청 URL·인증키(행사정보용 승인 여부)를 확인해 주세요.")
    if "pblancId" in items[0] or "pblancNm" in items[0]:
        sys.exit("[확인] 받은 데이터가 '지원사업 공고'예요(pblancId/pblancNm). 행사정보가 아니라 "
                 "지원사업 API 주소로 호출된 것 같아요. EVENT_API_URL 을 행사정보용 주소로 바꿔 주세요.")

    stamp = datetime.now().strftime("%Y%m%d")
    with open(f"bizinfo_event_raw_{stamp}.json", "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=1)

    df, by_region, by_month, period_src, region_src = build_frames(items)
    out = f"bizinfo_행사_{stamp}.xlsx"
    save_excel(df, by_region, by_month, out)

    print(f"\n✅ 저장 완료: {out}")
    print(df["상태(자동)"].value_counts().to_string())
    print(f"\n행사기간 인식 기준: {period_src or '찾지 못함 (원본 필드명을 보내주세요)'}")
    print(f"지역 인식 기준: {region_src or '찾지 못함'}")
    print(f"원본 필드 목록: {', '.join(pd.DataFrame(items).columns)}")


if __name__ == "__main__":
    main()
