import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Abs, Dim, Img, Stage, T } from '../ui';
import TopBar from '../components/TopBar';
import NewsPopup from './NewsPopup';
import { POLICY_SUMMARY as P } from '../data/demo';
import searchEllipse from '../assets/svg/search-ellipse.svg';
import iconSearch from '../assets/svg/icon-search-white.svg';
import iconGrid from '../assets/svg/icon-grid-white.svg';
import iconCart from '../assets/svg/icon-cart-white.svg';
import gearWhite from '../assets/svg/icon-gear-white.svg';
import gear666 from '../assets/svg/icon-gear-666.svg';
import chevsLeft from '../assets/svg/chevs-left-666.svg';
import chevLeft from '../assets/svg/chev-left-666.svg';
import chevRight from '../assets/svg/chev-right-666.svg';
import chevsRight from '../assets/svg/chevs-right-666.svg';
import calMark from '../assets/svg/cal-mark.svg';
import plus888 from '../assets/svg/icon-plus-888.svg';
import emptyCircle from '../assets/svg/empty-circle.svg';
import calEmpty from '../assets/svg/icon-cal-empty.svg';
import chevLeft20 from '../assets/svg/chev-left-777-20.svg';
import chevRight20 from '../assets/svg/chev-right-777-20.svg';
import dotGray from '../assets/svg/dot-c9d1db.svg';
import dotBlue from '../assets/svg/dot-2f7bf5.svg';
import dotPurple from '../assets/svg/dot-6b4df5.svg';
import dotGray2 from '../assets/svg/dot-c9cedc.svg';
import mascot58 from '../assets/svg/mascot-58.svg';
import mascot44 from '../assets/svg/mascot-44.svg';
import close10 from '../assets/svg/close-white-10.svg';
import chevW14 from '../assets/svg/chev-right-white-14.svg';
import chevW12 from '../assets/svg/chev-right-white-12.svg';
import moneyBag from '../assets/money-bag-3d.png';

type Tile = { g: string; bg: string; label: string; fs?: number; fg?: string; to?: string };
const PANELS: { x: number; title: string; tiles: Tile[] }[] = [
  {
    x: 413, title: 'ERP', tiles: [
      { g: 'A', bg: '#ef4b5c', label: '회계관리' }, { g: 'H', bg: '#22c1d6', label: '급여관리' },
      { g: '₩', bg: '#f2a632', label: '매출채권팩토링' }, { g: 'e', bg: '#ee4b57', label: '전자세금계산서' },
      { g: 'B', bg: '#2f7bf5', label: '거래처관리' }, { g: 'cv', bg: '#2a6cf0', label: '기업신용평가', fs: 18 },
      { g: 'D', bg: '#fff', fg: '#2f5bea', label: 'DJ Bank', to: '/djbank' },
    ],
  },
  {
    x: 779, title: '소통/협업', tiles: [
      { g: '…', bg: '#7b4cf5', label: '메신저' }, { g: '@', bg: '#2ab9c8', label: '메일' },
      { g: '≡', bg: '#f7b92d', label: '게시판' }, { g: 'SMS', bg: '#1bb5c9', label: '문자', fs: 13 },
      { g: 'F', bg: '#2c7bf2', label: '팩스' },
    ],
  },
  {
    x: 1146, title: '나하고', tiles: [
      { g: '31', bg: '#f59a2b', label: '일정관리', fs: 18 }, { g: '☏', bg: '#6a62f2', label: '연락처' },
      { g: 'W', bg: '#2e8bf5', label: 'WE드라이브' }, { g: '▶', bg: '#f5a623', label: '법정교육' },
    ],
  },
];
const COL = [17, 95, 173, 251];
const ROW = [56, 152];

/** 2026년 11월 달력 (일요일 시작, 11/1 = 일요일). 마커·오늘 위치는 Figma 그대로 */
const MARKS = new Set([2, 10, 16, 20, 25, 30]);
const TODAY = 7;

function Calendar() {
  const cells: { d: number; muted: boolean }[] = [];
  for (let i = 0; i < 35; i++) cells.push(i < 30 ? { d: i + 1, muted: false } : { d: i - 29, muted: true });
  return (
    <Abs x={413} y={536} w={689} h={294} style={{ background: '#fff', border: '1px solid #e3e6ea', borderRadius: 10, overflow: 'hidden', boxSizing: 'border-box' }}>
      <Abs x={-1} y={47} w={689} h={1} style={{ background: '#e8eaee' }} />
      <Abs x={300} y={-1} w={1} h={294} style={{ background: '#e8eaee' }} />
      <Img src={chevsLeft} x={19} y={16} w={14} h={14} />
      <Img src={chevLeft} x={44} y={16} w={14} h={14} />
      <T x={120} y={15} s={15} w="bold">2026.11</T>
      <Img src={chevRight} x={240} y={16} w={14} h={14} />
      <Img src={chevsRight} x={265} y={16} w={14} h={14} />
      {['일', '월', '화', '수', '목', '금', '토'].map((d, i) => (
        <T key={d} x={23 + 40 * i} y={69} s={12} c={i === 0 ? '#e23b3b' : '#333'}>{d}</T>
      ))}
      {cells.map(({ d, muted }, i) => {
        const col = i % 7, row = Math.floor(i / 7);
        const x = (d >= 10 ? 22 : 26) + 40 * col, y = 106 + 31 * row;
        const today = !muted && d === TODAY;
        return (
          <div key={i}>
            {today && <Abs x={255} y={103} w={28} h={20} style={{ background: '#1c90fb', borderRadius: 2 }} />}
            <T x={x} y={y} s={12} c={muted ? '#bbb' : today ? '#fff' : col === 0 ? '#e23b3b' : '#333'}>{d}</T>
            {!muted && MARKS.has(d) && <Img src={calMark} x={37 + 40 * col} y={103 + 31 * row} w={5} h={5} />}
          </div>
        );
      })}
      <T x={316} y={15} s={15} w="medium">2026.11.07(토) 일정</T>
      <Img src={plus888} x={647} y={13} w={20} h={20} />
      <Img src={emptyCircle} x={458} y={92} w={72} h={72} />
      <Img src={calEmpty} x={477} y={111} w={34} h={34} />
      <T x={384} y={188} s={14} c="#333">2026.11.07에 등록된 일정이 없습니다</T>
      <T x={424} y={208} s={13} c="#9a9a9a">새로운 일정을 등록하세요.</T>
    </Abs>
  );
}

function Dots({ on, onSrc, offSrc }: { on: number; onSrc: string; offSrc: string }) {
  return <>{Array.from({ length: 7 }, (_, i) => <Img key={i} src={i === on ? onSrc : offSrc} x={263 + 12 * i} y={11} w={7} h={7} />)}</>;
}

/** 04 메인 대시보드 / 07 정책자금 알림 상태 / 03 소식 팝업(쿼리 popup=news) */
export default function Dashboard() {
  const nav = useNavigate();
  const [params, setParams] = useSearchParams();
  const showNews = params.get('popup') === 'news';
  // 07: ?alert=1 로 바로 보거나, 04를 본 뒤 잠시 후 정책자금 알림이 도착하는 연출
  const [alert, setAlert] = useState(params.get('alert') === '1');
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => {
    if (alert || showNews) return;
    const t = setTimeout(() => setAlert(true), 2500);
    return () => clearTimeout(t);
  }, [alert, showNews]);

  const closeNews = () => { params.delete('popup'); setParams(params, { replace: true }); };
  const openFunds = () => nav('/djbank');

  return (
    <Stage height={955} bg="#f3f4f6">
      {/* Hero Band */}
      <Abs x={0} y={51} w={1920} h={463} style={{ background: '#1633a8', overflow: 'hidden' }}>
        <Abs x={265} y={110} w={560} h={560} style={{ borderRadius: '50%', background: 'linear-gradient(#2a4fcb, #1a38b0)' }} />
        <Abs x={1050} y={60} w={620} h={620} style={{ borderRadius: '50%', background: 'linear-gradient(#2246c6, #1631a3)' }} />
        <Abs x={960} y={100} w={175} h={175} style={{ borderRadius: '50%', background: '#1d44e0' }} />
        <Abs x={540} y={280} w={240} h={240} style={{ borderRadius: '50%', background: 'rgba(42,85,216,0.6)' }} />
        <Abs x={1420.99} y={170} w={245.292} h={407.041} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 170, height: 380, borderRadius: '50%', transform: 'rotate(12deg)', background: 'linear-gradient(90deg, #5b33c9, #8a4ee8)', flex: 'none' }} />
        </Abs>

        <Abs x={743} y={50} w={420} h={48} style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid #5c7ae0', borderRadius: 24, overflow: 'hidden', boxSizing: 'border-box' }}>
          <Img src={searchEllipse} x={6} y={8} w={30} h={30} />
          <T x={47} y={13} s={17} c="#fff" w="medium" ls={-0.68}>검색어를 입력하세요.</T>
          <T x={357} y={17} s={9} c="#fff">▼</T>
          <Img src={iconSearch} x={376} y={10} w={26} h={26} />
        </Abs>
        <Img src={iconGrid} x={415} y={117} w={21} h={21} />
        <Img src={iconCart} x={451} y={117} w={21} h={21} />
        <Img src={gearWhite} x={1470} y={116} w={21} h={21} />

        {PANELS.map((p) => (
          <Abs key={p.title} x={p.x} y={156} w={346} h={257} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 10, overflow: 'hidden' }}>
            <T x={30} y={22} s={15} c="#fff" w="bold">{p.title} <span style={{ color: '#7fb5ff' }}>{p.tiles.length}</span></T>
            {p.tiles.map((t, i) => (
              <Abs key={t.label} x={COL[i % 4]} y={ROW[Math.floor(i / 4)]} w={80} onClick={t.to ? () => nav(t.to!) : undefined}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 9 }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: t.bg, boxShadow: '0 2px 4px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <T s={t.fs ?? 22} c={t.fg ?? '#fff'} w="bold">{t.g}</T>
                </div>
                <T s={12} c="#fff" w="medium" ls={-0.6} style={{ textAlign: 'center' }}>{t.label}</T>
              </Abs>
            ))}
            {alert && p.title === 'ERP' && (
              <Abs x={229} y={146} onClick={() => nav('/djbank')} style={{ background: '#ff4d5e', borderRadius: 9, padding: '1px 5px' }}>
                <T s={11} c="#fff" w="bold">{P.newCount}</T>
              </Abs>
            )}
          </Abs>
        ))}

        {alert && (
          <Abs x={633} y={110} onClick={openFunds} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 14px', background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 18, animation: 'djl-drop .45s ease-out' }}>
            <div style={{ width: 22, height: 22, borderRadius: 11, background: 'linear-gradient(#ffd84d, #f5a623)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <T s={12.1} c="#8a5a00" w="bold">₩</T>
            </div>
            <T s={14} c="#fff" w="medium" ls={-0.42}>
              우리 회사가 받을 수 있는 정책자금 <span style={{ fontWeight: 700, color: '#ffe066' }}>{P.matchCount}건 · 최대 {P.maxAmountLong}</span>
            </T>
            <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.4)' }} />
            <div style={{ background: '#ff4d5e', borderRadius: 9, padding: '2px 6px' }}><T s={10} c="#fff" w="bold">NEW {P.newCount}</T></div>
            <T s={13} c="rgba(255,255,255,0.9)" ls={-0.39}>새 공고가 올라왔어요</T>
            <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <T s={13} c="#fff" w="bold" ls={-0.39}>확인하기</T>
              <Img src={chevW14} w={14} h={14} />
            </div>
          </Abs>
        )}
      </Abs>

      <TopBar variant="dash" bellBadge={alert} />

      <Calendar />

      {/* 게시판 */}
      <Abs x={413} y={852} w={689} h={150} style={{ background: '#fff', border: '1px solid #e3e6ea', borderRadius: 10, overflow: 'hidden', boxSizing: 'border-box' }}>
        <T x={15} y={14} s={16} w="medium">게시판</T>
        <Img src={chevRight} x={62} y={16} w={14} h={14} />
        <Abs x={79} y={16} w={1} h={14} style={{ background: '#ccc' }} />
        <Img src={gear666} x={84} y={14} w={18} h={18} />
        <Abs x={-1} y={47} w={689} h={1} style={{ background: '#e8eaee' }} />
        <Abs x={608} y={-1} w={1} h={48} style={{ background: '#e8eaee' }} />
        <Abs x={648} y={-1} w={1} h={48} style={{ background: '#e8eaee' }} />
        <Img src={chevLeft20} x={618} y={13} w={20} h={20} />
        <Img src={chevRight20} x={658} y={13} w={20} h={20} />
        <Abs x={19} y={67} w={649} h={70} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 6, boxSizing: 'border-box' }} />
      </Abs>

      {/* 우측 배너: 04 = ESG 설문, 07 = AI 정책자금 알림 */}
      {alert ? (
        <Abs x={1123} y={536} w={370} h={181} style={{ background: 'linear-gradient(90deg, #eef2ff, #f3ecff)', border: '1px solid #d9ddf7', borderRadius: 10, overflow: 'hidden', boxSizing: 'border-box' }}>
          <Img src={moneyBag} x={233} y={49} w={124} h={108} style={{ objectFit: 'contain' }} />
          <Abs x={23} y={19} style={{ background: '#6b4df5', borderRadius: 9, padding: '2px 7px' }}><T s={10} c="#fff" w="bold">AI 정책자금 알림</T></Abs>
          <T x={23} y={45} s={14} c="#333" w="bold">받을 수 있는 정책자금</T>
          <T x={22} y={65} s={26} c="#2f5bea" w="black" ls={-1.04}>{P.matchCount}건 · 최대 {P.maxAmountShort}</T>
          <T x={23} y={103} s={12} c="#555">새 공고 {P.newCount}건 · <span style={{ fontWeight: 500, color: '#e5484d' }}>마감 임박 {P.urgentCount}건 (D-{P.urgentDday})</span></T>
          <Abs x={23} y={133} onClick={openFunds} style={{ display: 'flex', alignItems: 'center', gap: 2, padding: '6px 14px', background: '#1f232b', borderRadius: 15 }}>
            <T s={12} c="#fff" w="medium" ls={-0.36}>맞춤 공고 보기</T>
            <Img src={chevW12} w={12} h={12} />
          </Abs>
          <Dots on={0} onSrc={dotPurple} offSrc={dotGray2} />
        </Abs>
      ) : (
        <Abs x={1123} y={536} w={370} h={181} style={{ background: 'linear-gradient(90deg, #eaf8f2, #e5f3fb)', border: '1px solid #d6ede5', borderRadius: 10, overflow: 'hidden', boxSizing: 'border-box' }}>
          <Abs x={231} y={29} w={122} h={136} style={{ background: '#cfe6f5', borderRadius: 6 }} />
          <T x={24} y={25} s={13} c="#333" ls={-0.39}>ESG 업무 실태 조사 · 더존 고객 대상</T>
          <T x={23} y={47} s={22} c="#12a37a" w="bold" ls={-0.88}>거래처 ESG 자료 요청</T>
          <T x={23} y={75} s={22} c="#222" w="bold" ls={-0.88}>어떻게 대응하고 계신가요?</T>
          <Abs x={24} y={126} w={118} h={30} style={{ background: '#1f232b', borderRadius: 15, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <T s={13} c="#fff" w="medium">{'설문 참여하기  ›'}</T>
          </Abs>
          <Dots on={3} onSrc={dotBlue} offSrc={dotGray} />
        </Abs>
      )}

      {/* 타임라인 */}
      <Abs x={1123} y={738} w={370} h={240} style={{ background: '#fff', border: '1px solid #e3e6ea', borderRadius: 10, overflow: 'hidden', boxSizing: 'border-box' }}>
        <Abs x={-1} y={-1} w={370} h={48} style={{ background: '#eef3fa' }} />
        <T x={15} y={14} s={16} w="medium">타임라인</T>
        <Img src={gear666} x={336} y={14} w={18} h={18} />
      </Abs>

      {/* 03: 딤과 소식 팝업 (Figma에서도 오른쪽 플로팅·AI 툴팁은 딤 위에 있음) */}
      {showNews && (
        <>
          <Dim opacity={0.45} />
          <NewsPopup x={428} y={111} onClose={closeNews} />
        </>
      )}

      {/* 오른쪽 플로팅 */}
      <Abs x={1801} y={377} w={84} h={302} style={{ background: '#2b2f3a', borderRadius: 10, overflow: 'hidden' }}>
        <Img src={mascot58} x={13} y={10} w={58} h={58} />
        <T x={42.5} y={75} s={10} c="#fff" w="medium" ls={-0.5} lh={13} center>{'세법/노무도우미\n자세히 보기'}</T>
        <Abs x={0} y={108} w={84} h={1} style={{ background: '#454a57' }} />
        <Abs x={26} y={122} w={32} h={30} style={{ background: '#20b39a', borderRadius: 6 }} />
        <T x={42.5} y={170} s={10} c="#fff" w="medium" ls={-0.5} lh={13} center>{'세법/노무도우미\n구독하기'}</T>
        <Abs x={0} y={205} w={84} h={1} style={{ background: '#454a57' }} />
        <Abs x={22} y={213} w={40} h={14} style={{ background: '#5a6cf7', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <T s={8} c="#fff" w="bold">무료체험</T>
        </Abs>
        <Abs x={26} y={230} w={32} h={28} style={{ background: '#3c8cf0', borderRadius: 6 }} />
        <T x={42} y={265} s={10} c="#fff" w="medium" ls={-0.5} lh={13} center>{'AI Edition\n체험해보기'}</T>
      </Abs>

      {tooltip && (
        <Abs x={1497} y={614} w={293} h={63} style={{ background: 'linear-gradient(90deg, #3b7bff, #8a5cff)', borderRadius: 10 }}>
          <T x={14} y={13} s={13} c="#fff" w="medium" ls={-0.52}>✦ 오늘 할 일을 먼저 알려주는 AI</T>
          <Abs x={208} y={13} w={48} h={16} style={{ background: '#2b2a8c', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <T s={10} c="#fff" w="bold">1분 체험</T>
          </Abs>
          <T x={14} y={36} s={11} c="rgba(255,255,255,0.9)" ls={-0.55}>AI Edition으로 달라지는 업무를 직접 확인해 보세요.</T>
          <Img src={mascot44} x={247} y={20} w={44} h={44} />
          <Img src={close10} x={278} y={4} w={10} h={10} onClick={() => setTooltip(false)} />
        </Abs>
      )}

    </Stage>
  );
}
