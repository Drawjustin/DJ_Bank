import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Abs, Dim, Img, Stage, T } from '../ui';
import TopBar from '../components/TopBar';
import LaunchPopup from './LaunchPopup';
import leftRail from '../assets/svg/left-rail.svg';
import home from '../assets/svg/icon-home-blue.svg';
import table from '../assets/svg/icon-table-333.svg';
import doc from '../assets/svg/icon-doc-333.svg';
import chevUp from '../assets/svg/chev-up-888.svg';
import gear15 from '../assets/svg/icon-gear-333-15.svg';
import djMark from '../assets/svg/dj-mark.svg';
import chevRight12 from '../assets/svg/chev-right-777-12.svg';
import dotGray from '../assets/svg/dot-c9d1db.svg';
import dotBlue from '../assets/svg/dot-2f6bf0.svg';
import moneyBag from '../assets/money-bag-3d.png';

const NAV = [
  { title: '계좌관리', icon: table, y: 72, items: ['비대면계좌개설', '계좌이체', '급여이체', '이체결과조회', '계좌조회'] },
  { title: '자금조달 · 투자', icon: doc, y: 255, items: ['비대면대출신청', '금융업무진행현황', '대출상환', '채권담보대출', '기업금융상품'] },
];
const QUICK = [
  ['계좌이체', '#4c7bf5'], ['급여이체', '#5b6cf0'], ['계좌조회', '#b169e8'], ['이체결과조회', '#5a8deb'],
  ['비대면계좌개설', '#22b5b0'], ['비대면대출신청', '#4c7bf5'], ['채권담보대출', '#1bb5a8'],
];
const LAUNCH_SEEN = 'djlink.djbank.launchSeen';

/** 06 DJ Bank 홈 / 05 첫 방문 시 출시 팝업 */
export default function DjBankHome() {
  const nav = useNavigate();
  const [params] = useSearchParams();
  const [popup, setPopup] = useState(() => {
    const q = params.get('popup');
    if (q === 'none') return false;
    return q === 'launch' || !sessionStorage.getItem(LAUNCH_SEEN);
  });
  const [slide, setSlide] = useState(1);
  const closePopup = () => { sessionStorage.setItem(LAUNCH_SEEN, '1'); setPopup(false); };

  return (
    <Stage height={955} bg="#fff">
      <Img src={leftRail} x={0} y={0} w={47} h={955} onClick={() => nav('/main')} />
      <TopBar variant="dj" />
      <Abs x={47} y={55} w={1873} h={47} style={{ background: '#fff' }}>
        <Abs x={0} y={46} w={1873} h={1} style={{ background: '#e5e7eb' }} />
        <T x={29} y={11} s={20} w="bold" ls={-0.6}>DJ Bank</T>
      </Abs>

      {/* Side Nav */}
      <Abs x={47} y={102} w={221} h={853} style={{ background: '#fff', overflow: 'hidden' }}>
        <Abs x={220} y={0} w={1} h={853} style={{ background: '#e5e7eb' }} />
        <Abs x={13} y={19} w={194} h={31} style={{ background: '#e9eefb', borderRadius: 4 }}>
          <Img src={home} x={10} y={8} w={15} h={15} />
          <T x={32} y={7} s={14} c="#2f5bea" w="medium">홈</T>
        </Abs>
        <Abs x={13} y={58} w={194} h={1} style={{ background: '#e5e7eb' }} />
        {NAV.map((g) => (
          <div key={g.title}>
            <Img src={g.icon} x={20} y={g.y} w={16} h={16} />
            <T x={42} y={g.y} s={14} w="bold" ls={-0.42}>{g.title}</T>
            <Img src={chevUp} x={186} y={g.y + 1} w={14} h={14} />
            {g.items.map((it, i) => <T key={it} x={21} y={g.y + 33 + 28 * i} s={12} c="#555" ls={-0.36}>{`└  ${it}`}</T>)}
          </div>
        ))}
        <Abs x={13} y={246} w={194} h={1} style={{ background: '#e5e7eb' }} />
        <Img src={gear15} x={20} y={810} w={15} h={15} />
        <T x={41} y={810} s={14} w="bold" ls={-0.42}>서비스 관리</T>
      </Abs>

      {/* Hero */}
      <Abs x={268} y={102} w={1652} h={312} style={{ background: 'linear-gradient(90deg, #f1f3fc, #e8ebfa 50%, #e4e7f8)', overflow: 'hidden' }}>
        <Abs x={900} y={-80} w={420} h={420} style={{ borderRadius: '50%', background: 'rgba(255,255,255,0.35)' }} />
        <Abs x={1170} y={40} w={340} h={240} style={{ background: '#d7dcf5', borderRadius: 12 }} />
        <Abs x={36} y={40} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Img src={djMark} w={12} h={16} />
          <T s={14} c="#2f5bea" w="bold">DJBank</T>
        </Abs>
        <T x={36} y={73} s={26} c="#222" w="bold" ls={-1.04} lh={37}>{'자금 관리의 새로운 기준!\nDJ Bank안에서 은행 업무를 처리하는'}</T>
        <T x={36} y={145} s={26} w="bold" ls={-1.04} lh={37} style={{ background: 'linear-gradient(90deg, #3f5bf2, #8a4df0)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>ALL-in-One 뱅킹 서비스</T>
        <T x={36} y={188} s={12} c="#555" ls={-0.36} lh={18}>{'비대면계좌개설, 비대면대출신청, 이체, 입출금 내역관리까지\n한 곳에서 처리하여 스마트한 자금 운영을 제공합니다.\n차세대 금융 서비스를 만나보세요.'}</T>
        <T x={36} y={260} s={11} c="#777" ls={-0.33}>준법감시인 심의필 제2026-02-0922호 [심의일자 2026.07.28 / 유효기간 2026.07.28 ~ 2027.12.31]</T>
      </Abs>

      {/* Quick Menu */}
      <Abs x={304} y={450} w={969} h={119} style={{ background: '#f3f5fa', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 26px', boxSizing: 'border-box' }}>
        {QUICK.map(([label, bg]) => (
          <div key={label} style={{ width: 110, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
            <div style={{ width: 28, height: 24, borderRadius: 5, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><T s={11} c="#fff" w="bold">₩</T></div>
            <T s={12} c="#222" w="medium" ls={-0.48}>{label}</T>
          </div>
        ))}
      </Abs>

      {/* Banner/연동 계좌이체 */}
      <Abs x={304} y={587} w={969} h={258} style={{ background: 'linear-gradient(90deg, #eef3fe, #e9effd)', borderRadius: 12, overflow: 'hidden' }}>
        <Abs x={760} y={90} w={160} h={130} style={{ background: '#d3defa', borderRadius: 12 }} />
        <T x={38} y={42} s={21} c="#222" w="bold" ls={-0.84}>DJ Bank 기업 인터넷 뱅킹,<span style={{ color: '#2f6bf0' }}> 연동 계좌이체 </span>서비스</T>
        <T x={38} y={78} s={14} c="#333" w="medium" ls={-0.56} lh={21}>{'번거로운 파일 업로드와 중복 입력 없이\n하나로 연결된 DJ Bank 계좌이체를 이용해보세요.'}</T>
        <T x={38} y={130} s={11} c="#777" ls={-0.33}>준법감시인 심의필 제2026-02-0919호 [심의일자 2026.07.28 / 유효기간 2026.07.28 ~ 2027.12.31]</T>
        <Abs x={38} y={166} w={136} h={35} style={{ background: '#1561f5', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <T s={13} c="#fff" w="bold">계좌이체 바로가기</T>
        </Abs>
        {[0, 1, 2, 3].map((i) => <Img key={i} src={i === slide ? dotBlue : dotGray} x={902 + 13 * i} y={19} w={8} h={8} onClick={() => setSlide(i)} />)}
      </Abs>

      {/* 공지사항 */}
      <Abs x={1290} y={450} w={578} h={226} style={{ background: '#fff', border: '1px solid #d9dce2', borderRadius: 12, overflow: 'hidden', boxSizing: 'border-box' }}>
        <T x={20} y={24} s={16} w="bold">공지사항</T>
        <T x={510} y={25} s={13} c="#777">더보기</T>
        <Img src={chevRight12} x={550} y={27} w={12} h={12} />
        <T x={20} y={71} s={14} c="#222" ls={-0.42}>DJBank 이용하고 ONE AI 혜택을 받아보세요.</T>
      </Abs>

      {/* 이용가이드 */}
      <Abs x={1290} y={693} w={578} h={152} style={{ background: 'linear-gradient(90deg, #eef1ff, #f1ecff)', borderRadius: 12, overflow: 'hidden' }}>
        <Img src={moneyBag} x={420} y={22} w={130} h={113} style={{ objectFit: 'contain' }} />
        <T x={31} y={26} s={17} w="bold" ls={-0.51}>DJ Bank 이용가이드</T>
        <T x={31} y={53} s={13} c="#555" ls={-0.52} lh={19}>{'DJ Bank의 주요기능\n이용 방법을 한눈에 확인해보세요!'}</T>
        <Abs x={31} y={102} w={115} h={28} onClick={() => setPopup(true)} style={{ background: '#1561f5', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <T s={12} c="#fff" w="bold">{'이용가이드 보기  ›'}</T>
        </Abs>
        <Abs x={152} y={102} w={81} h={28} style={{ background: '#fff', border: '1px solid #1561f5', borderRadius: 3, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <T s={12} c="#1561f5" w="medium">{'체험하기  ›'}</T>
        </Abs>
      </Abs>

      <Abs x={304} y={882} w={1564} h={1} style={{ background: '#e5e7eb' }} />
      <T x={316} y={905} s={12} c="#777">이용약관</T>
      <Abs x={369} y={906} w={1} h={12} style={{ background: '#ccc' }} />
      <T x={379} y={905} s={12} c="#444" w="bold">개인정보처리방침</T>

      {popup && (
        <>
          <Dim opacity={0.4} />
          <LaunchPopup x={479} y={149} onClose={closePopup} />
        </>
      )}
    </Stage>
  );
}
