import { Abs, Img, T } from '../ui';
import close24 from '../assets/svg/close-555-24.svg';
import tileDoc from '../assets/svg/tile-doc.svg';
import tileBank from '../assets/svg/tile-bank.svg';
import stepOn from '../assets/svg/step-on.svg';
import stepOff from '../assets/svg/step-off.svg';
import moneyBag from '../assets/money-bag-3d.png';

const gradText: React.CSSProperties = { background: 'linear-gradient(90deg, #3b5bf5, #6d53f2 50%, #a04df0)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' };
const card: React.CSSProperties = { background: '#fff', boxShadow: '0 4px 14px rgba(51,64,128,0.15)', overflow: 'hidden' };
const STEPS = ['심사 중', '실행 완료', '상환 예정', '상환 완료'];

/** 05 Popup/DJ Bank 출시 (960x660) */
export default function LaunchPopup({ x, y, onClose }: { x: number; y: number; onClose: () => void }) {
  return (
    <Abs x={x} y={y} w={960} h={660} style={{ background: 'linear-gradient(#f7f8ff, #fff 50%, #f4f2ff)', borderRadius: 28, overflow: 'hidden', boxShadow: '0 10px 40px rgba(51,64,128,0.25)' }}>
      <Abs x={-120} y={380} w={420} h={420} style={{ borderRadius: '50%', background: 'rgba(233,236,255,0.6)' }} />
      <Abs x={700} y={-160} w={420} h={420} style={{ borderRadius: '50%', background: 'rgba(238,240,255,0.7)' }} />
      <Img src={close24} x={909} y={26} w={24} h={24} onClick={onClose} />
      <T x={298} y={53} s={33} c="#111" w="bold" ls={-1.32}>ERP와 인터넷뱅킹을 하나로</T>
      <T x={224} y={95} s={33} w="bold" ls={-1.32} style={gradText}>All-in-One 뱅킹 서비스 DJ Bank 출시!</T>
      <T x={128} y={144} s={18} c="#333" ls={-0.72}>Smart A 10의 회계·급여 데이터와 금융 서비스를 연계해 기업 금융 업무를 더욱 편리하게 제공합니다.</T>
      <Abs x={404} y={188} w={152} h={45} onClick={onClose} style={{ background: 'linear-gradient(90deg, #2f5bf5, #7a4df2)', borderRadius: 23, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <T s={14} c="#fff" w="bold">{'이용가이드 보기  ›'}</T>
      </Abs>

      <Abs x={158} y={262} w={644} h={420} style={{ background: '#1c1d22', borderRadius: 24, overflow: 'hidden' }}>
        <Abs x={12} y={12} w={620} h={400} style={{ background: '#f5f6fa', borderRadius: 14 }} />
      </Abs>

      <Abs x={89} y={338} style={{ ...card, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8, padding: '9px 10px 9px 14px' }}>
        <T s={12} c="#222" w="medium">우리회사 대출현황</T>
        <div style={{ background: '#e2ebff', borderRadius: 3, padding: '2px 6px' }}><T s={11} c="#2f5bea" w="bold">심사중</T></div>
      </Abs>
      <Abs x={58} y={404} w={180} h={70} style={{ ...card, borderRadius: 10 }}>
        <Img src={moneyBag} x={8} y={13} w={50} h={44} style={{ objectFit: 'contain' }} />
        <T x={72} y={17} s={12} c="#222" w="medium" ls={-0.36} lh={18}>{'계좌개설이\n완료되었습니다.'}</T>
      </Abs>
      {/* 타일 SVG에는 그림자 여백(좌 12, 상 8)이 포함되어 있음 */}
      <Img src={tileDoc} x={781 - 12} y={320 - 8} w={70} h={70} />
      <Img src={tileBank} x={824 - 12} y={365 - 8} w={80} h={80} />
      <Abs x={658} y={462} style={{ ...card, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px' }}>
        {STEPS.map((s, i) => (
          <div key={s} style={{ display: 'contents' }}>
            {i > 0 && <T s={14} c="#bbb">›</T>}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <Img src={i === 0 ? stepOn : stepOff} w={16} h={16} />
              <T s={10} c={i === 0 ? '#222' : '#888'} w={i === 0 ? 'bold' : 'regular'}>{s}</T>
            </div>
          </div>
        ))}
      </Abs>

      <Abs x={0} y={559} w={960} h={101} style={{ background: 'linear-gradient(rgba(255,255,255,0.85), #fff 35%, #fff)', overflow: 'hidden' }}>
        <T x={145} y={28} s={16} c="#222" ls={-0.64}>
          <b style={{ color: '#2f5bea' }}>DJ Bank</b>는 <b>더존비즈온과 제주은행(신한금융그룹 계열사로 1금융권)</b>이 함께하는 <b>디지털 뱅킹 서비스</b>입니다.
        </T>
        <T x={136} y={54} s={16} c="#222" w="bold" ls={-0.64}>기업의 자금 조달과 자금 집행 업무를 지원하며, 회계 모듈 또는 급여 모듈 이용하는 고객을 대상으로 제공합니다.</T>
      </Abs>
    </Abs>
  );
}
