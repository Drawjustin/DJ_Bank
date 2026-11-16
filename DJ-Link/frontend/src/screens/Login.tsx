import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Abs, Img, Logo, Stage, T } from '../ui';
import AiWeFloat from '../components/AiWeFloat';
import shield from '../assets/svg/icon-shield.svg';
import flag from '../assets/svg/flag-kr.svg';
import chevDown from '../assets/svg/chev-down-333.svg';

const input: React.CSSProperties = {
  position: 'absolute', left: 75, width: 520, height: 48, border: '1px solid #c9c9c9', background: '#fff',
  padding: '0 14px 0 17px', fontSize: 17, letterSpacing: 0.51, color: '#222', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box',
};

/** 02 로그인 — 시연용: 입력값은 어디에도 저장·전송하지 않고, 버튼을 누르면 메인으로 이동 */
export default function Login() {
  const nav = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [save, setSave] = useState(false);

  const submit = (e?: FormEvent) => {
    e?.preventDefault();
    nav('/main?popup=news');
  };

  return (
    <Stage height={955} bg="#fafafa">
      <Abs x={0} y={0} w={1920} h={81} style={{ background: '#333846' }}>
        <Logo x={35} y={24} f={27.82} onClick={() => nav('/')} />
        <T x={1731} y={31} s={16} c="#fff" w="light" ls={-0.48} onClick={() => nav('/')}>서비스소개</T>
        <T x={1832} y={31} s={16} c="#fff" w="light" ls={-0.48}>회원가입</T>
      </Abs>

      <form onSubmit={submit}>
        <Abs x={624} y={131} w={672} h={608} style={{ background: '#fff', border: '1px solid #b8b8b8', overflow: 'hidden', boxSizing: 'border-box' }}>
          <T x={292} y={78} s={31} w="medium">로그인</T>
          <T x={335} y={132} s={16} c="#222" ls={-0.64} lh={23} center>{'WEHAGO에서 제공하는 다양한 서비스로 더 스마트해진\n업무환경을 경험하세요.'}</T>
          <input style={{ ...input, top: 210 }} placeholder="아이디를 입력하세요." value={id} onChange={(e) => setId(e.target.value)} autoComplete="username" />
          <input style={{ ...input, top: 268, paddingRight: 40 }} placeholder="비밀번호를 입력하세요." type="password" value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="current-password" />
          <Img src={shield} x={580 - 14} y={268 + 16} w={15} h={15} />
          <button type="submit" style={{ position: 'absolute', left: 75, top: 355, width: 520, height: 66, background: '#1e8ffb', border: 0, color: '#fff', fontSize: 22, fontWeight: 300, fontFamily: 'inherit', cursor: 'pointer' }}>
            로그인
          </button>
          <Abs x={507} y={427} onClick={() => setSave(!save)} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <span style={{ width: 13, height: 13, border: '1px solid #9a9a9a', background: save ? '#1e8ffb' : '#fff', boxSizing: 'border-box', display: 'block' }} />
            <T s={14} c="#333">아이디 저장</T>
          </Abs>
          <Abs x={75} y={492} w={520} h={1} style={{ background: '#e3e3e3' }} />
          <Abs x={75} y={504} style={{ display: 'flex', gap: 8 }}>
            <T s={14} c="#8a8a8a">아이디 찾기</T>
            <T s={14} c="#bbb">|</T>
            <T s={14} c="#8a8a8a">비밀번호 찾기</T>
          </Abs>
          <T x={539} y={502} s={14} c="#8a8a8a">회원가입</T>
        </Abs>
      </form>

      <Abs x={0} y={829} w={1920} h={1} style={{ background: '#e0e0e0' }} />
      <T x={625} y={849} s={11} c="#222">
        Copyright © <span style={{ fontWeight: 500 }}>DOUZONE BIZON.</span> All rights reserved.
      </T>
      <Abs x={1176} y={839} w={120} h={27} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 8px', background: '#fff', border: '1px solid #ccc', boxSizing: 'border-box' }}>
        <Img src={flag} w={16} h={11} />
        <T s={12} c="#666" style={{ flex: 1 }}>한국어</T>
        <Img src={chevDown} w={14} h={14} />
      </Abs>
      <AiWeFloat x={1738} y={842} />
    </Stage>
  );
}
