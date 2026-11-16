import { useState } from 'react';
import { Abs, Img, Logo, T } from '../ui';
import close22 from '../assets/svg/close-333-22.svg';
import close12 from '../assets/svg/close-white-12.svg';
import upgrade from '../assets/svg/upgrade-badge.svg';
import mascot48 from '../assets/svg/mascot-48.svg';

const NEWS = [
  { title: '새로운 서비스 소식', tag: '서비스', tagBg: '#eaf0fe', tagFg: '#2f6bf0', icon: '#3d6bff', body: '새롭게 제공되는 서비스와 주요 기능을 확인해 보세요.', date: '2026.09.30' },
  { title: 'ESG 설문조사 참여 안내', tag: '중요', tagBg: '#fdecec', tagFg: '#e5484d', icon: '#22b07d', body: 'ESG 업무 현황과 실무의 어려움에 대한 의견을 들려주세요.', date: '2026.10.30' },
  { title: '법정교육, 이수 완료?', tag: '서비스', tagBg: '#eaf0fe', tagFg: '#2f6bf0', icon: '#f5a623', body: '아직 남은 2026년 법정의무교육, 지금 신청하고 연말 부담을 덜어보세요.', date: '2026.10.21' },
  { title: 'DJ Bank 이용 혜택', tag: '이벤트', tagBg: '#fef3e2', tagFg: '#e8890c', icon: '#2f5bea', body: 'DJ Bank 대상 금융상품 이용하고, ONE AI 혜택을 최대 6개월 간 받아보세요.', date: '2026.09.30' },
];
const TABS = ['전체 4', '중요 1', '서비스 2', '이벤트 1'];
const FEATURES = [
  { title: '오늘 할 업무를\n미리 준비했습니다.', tile: 'rgba(127,182,245,0.85)', desc: '업무 일정과 경영 현황을 분석해\n놓치기 쉬운 업무를 먼저 안내합니다.', bullets: ['수금·지급예정 거래내역', '급여 지급 전 미작성 자료', '만기 예정 어음·차입금 목록 작성', '전월 채권·채무 대체 분개 작성'] },
  { title: '신고서류 AI가\n먼저 작성했습니다.', tile: 'rgba(111,168,240,0.85)', desc: '신고 일정을 확인해\n필요한 신고서를 미리 작성합니다.', bullets: ['원천징수이행상황신고서 자동 작성', '간이지급명세서 자동 작성', '사회보험 신고서 자동 작성', '법인세신고서 자동 작성'] },
  { title: '증명서 요청도\n이미 발급 준비!', tile: 'rgba(76,141,240,0.85)', desc: '임·직원이 요청한 증명서류를\nAI가 자동으로 확인하고 작성합니다.', bullets: ['증명서류 요청 자동 판단', '유형별 서식 자동 발급', '증명서 발급 내용 자동 작성', '생성 완료 후 전송 대기'] },
];

function Check({ on, light, onClick, label }: { on: boolean; light?: boolean; onClick: () => void; label: string }) {
  return (
    <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
      <span style={{ width: 13, height: 13, borderRadius: 2, boxSizing: 'border-box', border: `1px solid ${light ? '#fff' : '#9a9a9a'}`, background: on ? '#1e6bff' : '#fff', display: 'block' }} />
      <T s={12} c={light ? '#fff' : '#333'} w={light ? 'medium' : 'regular'}>{label}</T>
    </div>
  );
}

/** 03 Popup/WEHAGO 소식 (1060x730) */
export default function NewsPopup({ x, y, onClose }: { x: number; y: number; onClose: () => void }) {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState(0);
  const [today, setToday] = useState(false);
  const [week, setWeek] = useState(false);

  const close = () => {
    if (today) localStorage.setItem('djlink.news.hideUntil', String(Date.now() + 24 * 3600e3));
    if (week) localStorage.setItem('djlink.news.hideUntil', String(Date.now() + 7 * 24 * 3600e3));
    onClose();
  };

  return (
    <Abs x={x} y={y} w={1060} h={730} style={{ background: '#f4f5f8', borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.25)' }}>
      <T x={20} y={13} s={18} w="bold" ls={-0.54}>WEHAGO 소식</T>
      <Img src={close22} x={1020} y={13} w={22} h={22} onClick={close} />
      <Abs x={20} y={49} style={{ display: 'flex', gap: 6 }}>
        {TABS.map((t, i) => (
          <div key={t} onClick={() => setTab(i)} style={{ padding: '3px 9px', borderRadius: 11, cursor: 'pointer', background: i === tab ? '#2f3340' : '#fff', border: i === tab ? '1px solid #2f3340' : '1px solid #dadde3' }}>
            <T s={11} c={i === tab ? '#fff' : '#666'} w={i === tab ? 'bold' : 'regular'}>{t}</T>
          </div>
        ))}
      </Abs>
      <Abs x={20} y={84} style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {NEWS.map((n, i) => (
          <div key={n.title} onClick={() => setActive(i)} style={{ position: 'relative', width: 224, height: 98, borderRadius: 6, background: '#fff', boxSizing: 'border-box', border: i === active ? '1.5px solid #2f3340' : '1px solid #e6e8ec', overflow: 'hidden', cursor: 'pointer' }}>
            <Abs x={10.5} y={11.5} w={20} h={20} style={{ background: n.icon, borderRadius: 5 }} />
            <T x={38.5} y={13.5} s={13} w="bold" ls={-0.52}>{n.title}</T>
            <Abs x={210 - (n.tag.length === 2 ? 34 : 45)} y={13.5} w={n.tag.length === 2 ? 34 : 45} h={17} style={{ background: n.tagBg, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <T s={10} c={n.tagFg} w="medium">{n.tag}</T>
            </Abs>
            <T x={10.5} y={38.5} s={10.5} c="#7a7f8a" ls={-0.42} lh={15} style={{ width: 200, whiteSpace: 'normal', wordBreak: 'keep-all' }}>{n.body}</T>
            <T x={10.5} y={72.5} s={10} c="#555">{n.date}</T>
          </div>
        ))}
      </Abs>

      <Abs x={260} y={48} w={780} h={626} style={{ background: '#fff', borderRadius: 12, overflow: 'hidden' }}>
        <Abs x={0} y={0} w={780} h={130} style={{ background: 'linear-gradient(90deg, #0e0f3a, #1b1660 50%, #2a1f86)', overflow: 'hidden' }}>
          <Abs x={560} y={8} w={170} h={118} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 10 }} />
          <Img src={upgrade} x={675} y={12} w={66} h={66} />
          <T x={708} y={32} s={12} c="#fff" w="black" lh={13} center>{'UP\nGRADE'}</T>
          <Abs x={22} y={30} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Logo f={18.72} inline />
            <div style={{ width: 70, height: 18, borderRadius: 2, background: '#3d6bff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><T s={12} c="#fff" w="medium">AI Edition</T></div>
            <T s={24} c="#fff" w="bold" ls={-0.96}>이 반복 업무는 줄이고,</T>
          </Abs>
          <T x={20} y={70} s={26} c="#fff" w="bold" ls={-1.04}>필요한 업무는 <span style={{ color: '#b9a2ff' }}>먼저 준비</span>합니다.</T>
        </Abs>
        <Img src={mascot48} x={20} y={148} w={48} h={48} />
        <T x={80} y={152} s={14} c="#222" ls={-0.56}>하루의 시작이 달라집니다.</T>
        <T x={80} y={175} s={14} w="bold" ls={-0.56}>출근하면 오늘 처리할 업무가 이미 준비되어 있습니다.</T>
        <Abs x={603} y={154} w={157} h={32} style={{ background: '#6b3df5', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <T s={13} c="#fff" w="medium">{'▶  AI Edition 체험하기'}</T>
        </Abs>
        {FEATURES.map((f, i) => (
          <Abs key={i} x={20 + 250 * i} y={206} w={238} h={208} style={{ background: '#f2f4f8', borderRadius: 10, overflow: 'hidden' }}>
            <T x={16} y={12} s={15} w="bold" ls={-0.6} lh={22}>{f.title}</T>
            <Abs x={186} y={12} w={38} h={38} style={{ background: f.tile, borderRadius: 8 }} />
            <T x={16} y={66} s={11.5} c="#444" ls={-0.575} lh={17}>{f.desc}</T>
            <Abs x={14} y={106} w={210} h={90} style={{ background: '#fff', borderRadius: 6, padding: '10px 0 0 12px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 2 }}>
              {f.bullets.map((b) => <T key={b} s={11.5} c="#333" ls={-0.575}>{`•  ${b}`}</T>)}
            </Abs>
          </Abs>
        ))}
        <Abs x={20} y={428} w={740} h={78} style={{ background: 'linear-gradient(90deg, #f1f0ff, #edf2ff)', border: '1px solid #b9b2ff', borderRadius: 6, boxSizing: 'border-box' }}>
          <T x={213} y={17} s={15} c="#222" w="bold" ls={-0.6}><span style={{ color: '#6b4df5' }}>✦ AI Edition으</span>로 더 편리해진 업무를 확인해 보세요.</T>
          <T x={176} y={41} s={15} c="#222" w="bold" ls={-0.6}>업무 일정부터 신고·증명서류까지 AI가 먼저 확인하고 준비합니다.</T>
        </Abs>
        <T x={20} y={522} s={10.5} c="#666" ls={-0.42}>※ WEHAGO AI Edition은 ONE AI 구독 고객에게 기본 제공되며 질문에 응답하는 단계를 넘어 해야할 업무를 먼저 선별해 준비해 주는 실행형 AI 입니다.</T>
        <Abs x={229} y={554} w={163} h={36} style={{ background: '#fff', border: '1px solid #c9cdd5', borderRadius: 2, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <T s={14} c="#333">AI Edition 자세히 보기</T>
        </Abs>
        <Abs x={400} y={554} w={147} h={36} style={{ background: '#1e6bff', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <T s={14} c="#fff" w="medium">AI Edition 전환하기</T>
        </Abs>
        <Abs x={633} y={600}><Check on={week} onClick={() => setWeek(!week)} label="일주일 동안 보지 않기" /></Abs>
      </Abs>

      <Abs x={0} y={690} w={1060} h={40} style={{ background: '#2e2f33' }}>
        <Abs x={20} y={12}><Check on={today} light onClick={() => setToday(!today)} label="오늘 하루 보지 않기" /></Abs>
        <Abs x={1002} y={12} onClick={close} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Img src={close12} w={12} h={12} />
          <T s={12} c="#fff" w="medium">닫기</T>
        </Abs>
      </Abs>
    </Abs>
  );
}
