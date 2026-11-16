import { useNavigate } from 'react-router-dom';
import { Abs, Img, Logo, T } from '../ui';
import badgeDot from '../assets/svg/badge-dot.svg';
import play from '../assets/svg/icon-play.svg';
import bell from '../assets/svg/icon-bell.svg';
import pCircle from '../assets/svg/icon-p-circle.svg';
import help from '../assets/svg/icon-help.svg';
import org from '../assets/svg/icon-org.svg';
import avatar from '../assets/svg/avatar.svg';
import chevDown from '../assets/svg/chev-down-555.svg';
import profile from '../assets/svg/profile.svg';
import bellBadge from '../assets/svg/bell-badge.svg';

/** WEHAGO 상단 바. dash = 메인 대시보드(04·07), dj = DJ Bank(05·06) — 좌표는 Figma 그대로 */
const LAYOUT = {
  dash: { x: 0, w: 1920, h: 51, f: 24.96, logo: [413, 10], badge: [535, 11], ai: [1040, 12], icons: 13, bell: 1132, p: 1178, help: 1223, org: 1268, av: [1310, 9], name: [1368, 17], chev: [1434, 19], prof: [1452, 9] },
  dj: { x: 47, w: 1873, h: 55, f: 24.18, logo: [20, 13], badge: [142, 14], ai: [1411, 16], icons: 16, bell: 1502, p: 1548, help: 1593, org: 1638, av: [1679, 12], name: [1738, 20], chev: [1804, 22], prof: [1822, 12] },
} as const;

export default function TopBar({ variant, bellBadge: showBadge }: { variant: 'dash' | 'dj'; bellBadge?: boolean }) {
  const L = LAYOUT[variant];
  const nav = useNavigate();
  return (
    <Abs x={L.x} y={0} w={L.w} h={L.h} style={{ background: '#fff', overflow: 'hidden' }}>
      <Abs x={0} y={L.h - 1} w={L.w} h={1} style={{ background: '#e5e7eb' }} />
      <Logo x={L.logo[0]} y={L.logo[1]} f={L.f} dark onClick={() => nav('/main')} />
      <Abs x={L.badge[0]} y={L.badge[1]} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '3px 10px 3px 9px', background: '#fff', border: '1px solid #dadde3', borderRadius: 13 }}>
        <Img src={badgeDot} w={5} h={5} />
        <T s={13} c="#444">제주은행</T>
      </Abs>
      <Abs x={L.ai[0]} y={L.ai[1]} style={{ display: 'flex', alignItems: 'center', gap: 3, padding: '3px 8px', background: '#fff', border: '1.5px solid #3d86ff', borderRadius: 12 }}>
        <Img src={play} w={12} h={12} />
        <T s={11} c="#222" w="bold">ONE AI</T>
      </Abs>
      <Img src={bell} x={L.bell} y={L.icons} w={22} h={22} />
      {showBadge && <Img src={bellBadge} x={L.bell + 16} y={L.icons - 1} w={8} h={8} />}
      <Img src={pCircle} x={L.p} y={L.icons} w={22} h={22} />
      <Img src={help} x={L.help} y={L.icons} w={22} h={22} />
      <Img src={org} x={L.org} y={L.icons} w={22} h={22} />
      <Img src={avatar} x={L.av[0]} y={L.av[1]} w={32} h={32} />
      <T x={L.name[0]} y={L.name[1]} s={13} c="#555">유현종 사원</T>
      <Img src={chevDown} x={L.chev[0]} y={L.chev[1]} w={12} h={12} />
      <Img src={profile} x={L.prof[0]} y={L.prof[1]} w={32} h={32} />
    </Abs>
  );
}
