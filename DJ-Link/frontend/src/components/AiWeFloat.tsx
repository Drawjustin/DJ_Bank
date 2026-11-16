import { Abs, Img, T } from '../ui';
import mascot from '../assets/svg/mascot-float.svg';

/** Float/AI WE봇 상담 (130x72) — 로그인·랜딩 우하단 */
export default function AiWeFloat({ x, y }: { x: number; y: number }) {
  return (
    <Abs x={x} y={y} w={130} h={72}>
      <Img src={mascot} x={66} y={14} w={58} h={58} />
      <T x={82} y={30} s={26} c="#333">🙂</T>
      <Abs x={0} y={0} style={{ background: '#fff', border: '1px solid #d5dae6', borderRadius: 9, padding: '1px 7px' }}>
        <T s={11} c="#3b55e6" w="bold">AI WE봇 상담</T>
      </Abs>
      <T x={112} y={4} s={14} c="#8e7cff" w="bold">✦</T>
    </Abs>
  );
}
