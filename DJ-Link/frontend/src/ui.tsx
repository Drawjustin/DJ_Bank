import { CSSProperties, ReactNode, useEffect, useState } from 'react';
import eWhite from './assets/svg/logo-e-white.svg';
import eDark from './assets/svg/logo-e-dark.svg';
import oRing from './assets/svg/logo-o.svg';

/** Figma 디자인은 1920px 캔버스 기준의 절대 좌표라서, 화면 폭에 맞춰 통째로 축소·확대한다. */
export const CANVAS_W = 1920;

export const FW = { light: 300, regular: 400, medium: 500, bold: 700, black: 900 } as const;
export type Weight = keyof typeof FW;

type BoxProps = {
  x: number;
  y: number;
  w?: number;
  h?: number;
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: () => void;
  title?: string;
};

/** 절대 위치 박스 (Figma frame의 left/top/width/height 그대로) */
export function Abs({ x, y, w, h, style, children, onClick, title }: BoxProps) {
  return (
    <div
      title={title}
      onClick={onClick}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: w,
        height: h,
        cursor: onClick ? 'pointer' : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

type TextProps = {
  x?: number;
  y?: number;
  s: number; // font-size
  c?: string; // color
  w?: Weight;
  ls?: number; // letter-spacing(px)
  lh?: number | string; // line-height
  center?: boolean; // x를 가운데 기준으로 (Figma의 -translate-x-1/2)
  style?: CSSProperties;
  children: ReactNode;
  onClick?: () => void;
};

/** 텍스트. x/y를 주면 절대 위치, 안 주면 흐름(inline) 배치 */
export function T({ x, y, s, c = '#111', w = 'regular', ls, lh = 'normal', center, style, children, onClick }: TextProps) {
  const positioned = x !== undefined && y !== undefined;
  return (
    <p
      onClick={onClick}
      style={{
        margin: 0,
        position: positioned ? 'absolute' : 'relative',
        left: x,
        top: y,
        transform: center ? 'translateX(-50%)' : undefined,
        textAlign: center ? 'center' : undefined,
        fontSize: s,
        color: c,
        fontWeight: FW[w],
        letterSpacing: ls,
        lineHeight: typeof lh === 'number' ? `${lh}px` : lh,
        whiteSpace: 'pre',
        flexShrink: 0,
        cursor: onClick ? 'pointer' : undefined,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

/** Figma에서 내보낸 SVG/PNG 에셋 */
export function Img({ src, x, y, w, h, style, onClick, alt = '' }: { src: string; x?: number; y?: number; w: number; h: number; style?: CSSProperties; onClick?: () => void; alt?: string }) {
  const positioned = x !== undefined && y !== undefined;
  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      draggable={false}
      style={{
        position: positioned ? 'absolute' : 'relative',
        left: x,
        top: y,
        width: w,
        height: h,
        display: 'block',
        flexShrink: 0,
        cursor: onClick ? 'pointer' : undefined,
        ...style,
      }}
    />
  );
}

/** 1920 캔버스를 브라우저 폭에 맞게 스케일 */
export function Stage({ height, bg = '#fff', children }: { height: number; bg?: string; children: ReactNode }) {
  const [scale, setScale] = useState(() => window.innerWidth / CANVAS_W);
  useEffect(() => {
    const onResize = () => setScale(window.innerWidth / CANVAS_W);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return (
    <div style={{ width: '100%', height: height * scale, overflow: 'hidden', background: bg }}>
      <div style={{ width: CANVAS_W, height, position: 'relative', transform: `scale(${scale})`, transformOrigin: '0 0', background: bg, overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}

/** WEHAGO 로고 (W + E + HAG + O). f = W 글자 크기, 나머지는 Figma 비율 그대로 */
export function Logo({ x = 0, y = 0, f, dark, onClick, inline }: { x?: number; y?: number; f: number; dark?: boolean; onClick?: () => void; inline?: boolean }) {
  const color = dark ? '#222' : '#fff';
  const gap = f * 0.0385;
  return (
    <Abs x={x} y={y} onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap, ...(inline ? { position: 'relative', left: 0, top: 0 } : null) }}>
      <T s={f} c={color} w="light">W</T>
      <Img src={dark ? eDark : eWhite} w={f * 0.577} h={f * 0.7308} />
      <T s={f} c={color} w="light" ls={f * 0.04}>HAG</T>
      <Img src={oRing} w={f * 0.846} h={f * 0.846} />
    </Abs>
  );
}

/** 화면 전체를 덮는 딤 + 가운데 팝업 */
export function Dim({ opacity, onClick }: { opacity: number; onClick?: () => void }) {
  return <Abs x={0} y={0} w={1920} h={955} onClick={onClick} style={{ background: `rgba(0,0,0,${opacity})`, cursor: 'default' }} />;
}
