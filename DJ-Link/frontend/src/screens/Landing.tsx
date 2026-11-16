import { useNavigate } from 'react-router-dom';
import { Abs, Img, Stage, T } from '../ui';
import LandingFigma from './LandingFigma';
import dotBlue from '../assets/svg/l-dot-blue.svg';
import dotPurple from '../assets/svg/l-dot-purple.svg';
import dotTeal from '../assets/svg/l-dot-teal.svg';
import dotAmber from '../assets/svg/l-dot-amber.svg';
import flag from '../assets/svg/flag-kr.svg';
import chevDown from '../assets/svg/chev-down-666.svg';

/** S8 서비스 기능 (Figma 3369:162) — 디자인 컨텍스트가 길이 제한으로 잘려 이 섹션은 데이터 기반으로 구현 */
const CATEGORIES: { name: string; bar: string; dot: string; gapX: number; cards: [string, string[]][] }[] = [
  {
    name: 'Smart A 10', bar: '#1c90fb', dot: dotBlue, gapX: 15, cards: [
      ['회계관리', ['전표입력/장부관리', '자동회계처리', '결산 재무제표관리', '고정자산관리', '부가가치세신고']],
      ['급여관리', ['근로소득/퇴직소득', '사업/기타소득', '원천세신고', '연말정산관리', '사회보험신고', '일자리안정자금관리']],
      ['인사관리', ['직원정보등록', '급여관리', '근로계약', '근무시간관리', '연말정산', '증명서관리']],
      ['물류관리', ['영업관리', '구매관리', '생산관리/외주관리', '재고관리', '채권채무현황', 'BI현황/전기이월']],
      ['법인조정', ['영리/비영리법인', '특정외국법인신고', '생공익법인세무신고', '성실신고확인사업자', '법인지방소득세신고', '법인세전자신고']],
      ['개인조정', ['종합소득세신고', '주택임대사업자신고', '종교인소득세신고', '성실신고확인사업자신고', '개인지방소득세신고', '종소세전자신고']],
      ['전자세금계산서', ['세금계산서발행', '매입/매출조회', '거래명세서 상태조회', '대량발행', '인쇄 및 변환']],
      ['수임처관리', ['수임고객관리', '기장업무', '신고업무', '컨설팅/비즈니스', '소통 및 협업', '업무관리']],
    ],
  },
  { name: '전문가연계\n서비스', bar: '#7a5cf5', dot: dotPurple, gapX: 0, cards: [['T edge', ['경영현황', '거래내역관리', '문서관리', '인사관리', '근무시간관리']]] },
  {
    name: '협업\n생산성', bar: '#14b8a6', dot: dotTeal, gapX: 15, cards: [
      ['메신저', ['그룹대화/ 1:1대화', '공개/비공개 설정', '메시지', '조직도', '화상회의', '마인드맵']],
      ['화상회의', ['발표중심/분할화면', '문서공유', '화면공유', '스케치 모드', '외부 참여자 초대', '회의실 주소/일정 공유']],
      ['일정관리', ['그룹/ 개인캘린더', '공유캘린더', '일정초대']],
      ['할일관리', ['업무통합관리', '공유프로젝트 관리', '진행상태 트래킹', '일정캘린더 연계', '업무시간 관리 (제공예정)']],
      ['노트', ['퀵노트', '지식관리', '공유지식공간', '버전관리']],
      ['메일', ['대화형메일', '보안메일', '외부메일연동', '회사도메인구매']],
      ['연락처', ['LINK기능', '중복연락처 정리', '연락처 통합']],
      ['거래처관리', ['거래처 등록', 'LINK기능', '최신정보 업데이트', '사업자상태조회']],
      ['WE드라이브', ['파일업로드/ 다운로드', '웹오피스기능', '문서생성', '동시편집', '기록관리']],
      ['팩스', ['대량발송', '실시간 발송상태 조회', '서비스 연결', '문자발송']],
      ['문자', ['메세지 전송', '전송결과 조회', '이미지 첨부 문자 전송', '일괄 문자 전송']],
      ['근태관리', ['근로제 설정', '실시간 근태현황', '출퇴근 기록', '전자결재 근태신청', '근로시간 모니터링']],
      ['전자결재', ['결재문서 자동생성', '결재내역관리', '결재정보 공유', '대리결재 등 부가기능']],
      ['게시판', ['타입별 게시판', '게시판 권한설정', '댓글 등 부가기능', '커스텀 기능']],
      ['내PC원격접속', ['웹뷰어 원격접속', '양방향 파일 전송 및 수신', '블라인드 모드', '다중 PC등록']],
    ],
  },
  {
    name: '부가\n서비스', bar: '#f59e0b', dot: dotAmber, gapX: 15, cards: [
      ['매출채권팩토링', ['매출채권 팩토링신청', '팩토링 신청동의', '팩토링 심사결과', '홈택스 세금계산서 조회', '홈택스 인증서 등록']],
      ['WE CRM', ['실시간 매출정보관리', '거래처관리', '수주성공률 분석', '영업관리 템플릿', '사업목표 설정 및 할당', '상담이력 관리']],
      ['WE PMS', ['프로젝트 관리', '프로젝트 리스크관리', '간트차트 관리', '예산관리', '실시간 집행금액관리', '프로젝트 자원관리']],
      ['법인카드', ['법인카드 등록', '경비청구', '사용내역 확인', '전표전송', '전자결재']],
      ['개인카드', ['경비청구', '카드별 통계제공', '카드외지출 경비청구', '전자결재']],
      ['경비현황분석', ['경비정보 연계', '부서별 통계자료', '기간별 리포트', '조직별 리포트', '용도별 리포트']],
    ],
  },
];

function S8() {
  return (
    <Abs x={0} y={6265} w={1920} h={2248} style={{ background: '#fff', overflow: 'hidden' }}>
      <T x={872} y={100} s={38} w="bold" ls={-1.52}>서비스 기능</T>
      <T x={772} y={164} s={18} c="#666" ls={-0.54}>WEHAGO에서 제공하는 다양한 서비스를 확인하세요</T>
      <Abs x={360} y={240} style={{ display: 'flex', flexDirection: 'column' }}>
        {CATEGORIES.map((cat) => (
          <div key={cat.name} style={{ display: 'flex', gap: 10, padding: '32px 0', borderBottom: '1px solid #e8ebf0' }}>
            <div style={{ width: 160, display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
              <div style={{ width: 28, height: 4, borderRadius: 2, background: cat.bar }} />
              <T s={20} w="bold" ls={-0.6} lh={28}>{cat.name}</T>
            </div>
            <div style={{ width: 1030, display: 'flex', flexWrap: 'wrap', columnGap: cat.gapX, rowGap: 15 }}>
              {cat.cards.map(([title, items]) => (
                <div key={title} style={{ width: 194, height: 196, borderRadius: 12, border: '1px solid #e5e8ee', background: '#fff', padding: '18px 14px 16px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Img src={cat.dot} w={8} h={8} />
                    <T s={16} w="bold" ls={-0.48}>{title}</T>
                  </div>
                  <T s={13} c="#666" ls={-0.39} lh={21}>{items.join('\n')}</T>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Abs>
    </Abs>
  );
}

/** S9 푸터 (3369:336) */
function S9() {
  const links: [string, boolean][] = [['이용약관', false], ['개인정보처리방침', true], ['다운로드센터', false], ['고객센터', false]];
  const select = (x: number, label: string, withFlag?: boolean) => (
    <Abs x={x} y={22} w={150} h={36} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 10px 0 12px', background: '#fff', border: '1px solid #d5d9e0', borderRadius: 4, overflow: 'hidden' }}>
      {withFlag && <Img src={flag} w={18} h={12} />}
      <T s={13} c="#444" ls={-0.39} style={{ flex: 1 }}>{label}</T>
      <Img src={chevDown} w={14} h={14} />
    </Abs>
  );
  return (
    <Abs x={0} y={8513} w={1920} h={215} style={{ background: '#fff' }}>
      <Abs x={0} y={0} w={1920} h={1} style={{ background: '#e3e6eb' }} />
      <Abs x={360} y={32} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        {links.map(([l, b], i) => (
          <div key={l} style={{ display: 'contents' }}>
            {i > 0 && <div style={{ width: 1, height: 12, background: '#ccc' }} />}
            <T s={14} c={b ? '#222' : '#555'} w={b ? 'bold' : 'regular'} ls={-0.42}>{l}</T>
          </div>
        ))}
      </Abs>
      {select(1250, '한국어', true)}
      {select(1410, 'Family Site')}
      <Abs x={0} y={80} w={1920} h={135} style={{ background: '#f7f8fa', overflow: 'hidden' }}>
        <T x={360} y={36} s={13} c="#888" lh={22}>{'DOUZONE BIZON Co.,Ltd.\nCopyright © DOUZONE BIZON. All rights reserved.'}</T>
        <Abs x={1336} y={30} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, background: '#dde3ee' }} />
          <T s={12} c="#888" ls={-0.36} lh={18}>{'클라우드서비스 보안인증\nwehago v (IaaS / SaaS 표준등급)\n2019-08-28~2024-08-27'}</T>
        </Abs>
      </Abs>
    </Abs>
  );
}

/** 01 랜딩 (1920 x 8728) */
export default function Landing() {
  const nav = useNavigate();
  return (
    <Stage height={8728} bg="#fff">
      <LandingFigma onLogin={() => nav('/login')}>
        <S8 />
        <S9 />
      </LandingFigma>
    </Stage>
  );
}
