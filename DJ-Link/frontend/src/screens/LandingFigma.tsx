// 자동 생성 파일: figma/convert_landing.py 가 Figma 01 랜딩(3359:2) 디자인 코드를 변환해 만든 것. 직접 고치지 말 것.
import React from 'react';
import imgDot from '../assets/svg/l-dot-blue.svg';
import imgMascot from '../assets/svg/mascot-float.svg';
import imgE from '../assets/svg/logo-e-white.svg';
import imgO from '../assets/svg/logo-o.svg';
import imgIconChevDown from '../assets/svg/l-chev-down-white-34.svg';
import imgIconDownload from '../assets/svg/l-download.svg';
import imgIconPhone from '../assets/svg/l-phone-white.svg';
import imgPagerDots from '../assets/svg/l-pager-dots.svg';
import imgIconChat from '../assets/svg/l-chat-36.svg';
import imgIconBrief from '../assets/svg/l-brief-36.svg';
import imgIconLink from '../assets/svg/l-link-36.svg';
import imgIconZap from '../assets/svg/l-zap-36.svg';
import imgIconShieldc from '../assets/svg/l-shield-36.svg';
import imgIconPhone1 from '../assets/svg/l-phone-36.svg';
import imgIconArrow from '../assets/svg/l-arrow-222.svg';
import imgTri from '../assets/svg/l-tri.svg';
import imgIconArrow1 from '../assets/svg/l-arrow-blue.svg';
import imgIconChevLeft from '../assets/svg/l-chev-left-24.svg';
import imgIconChevRight from '../assets/svg/l-chev-right-24.svg';
import imgIconChevLeft1 from '../assets/svg/l-chev-left-20.svg';
import imgIconChevRight1 from '../assets/svg/l-chev-right-20.svg';
import imgIconChat1 from '../assets/svg/l-chat-30.svg';
import imgIconPlus from '../assets/svg/l-plus-blue.svg';
import imgIconCalc from '../assets/svg/l-calc-30.svg';
import imgIconPlus1 from '../assets/svg/l-plus-red.svg';
import imgIconGrid from '../assets/svg/l-grid-30.svg';
import imgIconPlus2 from '../assets/svg/l-plus-teal.svg';
import imgIconCheck from '../assets/svg/l-check-blue.svg';
import imgIconCheck1 from '../assets/svg/l-check-teal.svg';
import imgLogo from '../assets/svg/l-logo-gplay.svg';
import imgLogo1 from '../assets/svg/l-logo-apple.svg';

type LandingFeatureCardProps = {
  style?: React.CSSProperties;
  items?: string;
  title?: string;
};

function LandingFeatureCard({ style, items = "전표입력/장부관리\n자동회계처리", title = "회계관리" }: LandingFeatureCardProps) {
  return (
    <div style={style || {backgroundColor: "#fff", borderWidth: "1px", borderColor: "#e5e8ee", borderStyle: "solid", display: "flex", flexDirection: "column", gap: "12px", height: "196px", alignItems: "flex-start", paddingBottom: "16px", paddingLeft: "18px", paddingRight: "14px", paddingTop: "18px", position: "relative", borderRadius: "12px", width: "194px"}} data-node-id="3369:157" data-name="Landing/Feature Card">
      <div style={{display: "flex", gap: "8px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3369:158" data-name="Header">
        <div style={{position: "relative", flexShrink: 0, width: "8px", height: "8px"}} data-node-id="3369:159" data-name="Dot">
          <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgDot} />
        </div>
        <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#111", fontSize: "16px", letterSpacing: "-0.48px", whiteSpace: "nowrap"}} data-node-id="3369:160">
          {title}
        </p>
      </div>
      <div style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "0", position: "relative", flexShrink: 0, color: "#666", fontSize: "13px", letterSpacing: "-0.39px", whiteSpace: "nowrap"}} data-node-id="3369:161">
        {items ? (
          <p style={{lineHeight: "21px", marginBottom: 0}}>{items}</p>
        ) : (
          <>
            <p style={{lineHeight: "21px", marginBottom: 0}}>전표입력/장부관리</p>
            <p style={{lineHeight: "21px"}}>자동회계처리</p>
          </>
        )}
      </div>
    </div>
  );
}

function FloatAiWe({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={style || {height: "72px", position: "relative", width: "130px"}} data-node-id="3358:23" data-name="Float/AI WE봇 상담">
      <div style={{position: "absolute", left: "66px", width: "58px", height: "58px", top: "14px"}} data-node-id="3358:24" data-name="Mascot (이미지 자리)">
        <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgMascot} />
      </div>
      <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "normal", left: "82px", color: "#333", fontSize: "26px", top: "30px", whiteSpace: "nowrap"}} data-node-id="3358:25">
        🙂
      </p>
      <div style={{position: "absolute", backgroundColor: "#fff", borderWidth: "1px", borderColor: "#d5dae6", borderStyle: "solid", display: "flex", alignItems: "flex-start", left: 0, overflow: "hidden", paddingLeft: "7px", paddingRight: "7px", paddingTop: "1px", paddingBottom: "1px", borderRadius: "9px", top: 0}} data-node-id="3358:26" data-name="Label">
        <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#3b55e6", fontSize: "11px", whiteSpace: "nowrap"}} data-node-id="3358:27">
          AI WE봇 상담
        </p>
      </div>
      <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "normal", left: "112px", color: "#8e7cff", fontSize: "14px", top: "4px", whiteSpace: "nowrap"}} data-node-id="3358:28">
        ✦
      </p>
    </div>
  );
}

export default function LandingFigma({ children, onLogin }: { children?: React.ReactNode; onLogin: () => void }) {
  return (
    <div style={{backgroundColor: "#fff", position: "relative", width: "100%", height: "100%"}} data-node-id="3359:2" data-name="01 랜딩">
      <div style={{position: "absolute", height: "706px", left: 0, overflow: "hidden", top: 0, width: "1920px", backgroundImage: "linear-gradient(90deg, #a27148, #7c5434 50%, #5e3e26)"}} data-node-id="3359:3" data-name="이미지 자리 / 히어로 배경 사진 (책상 위 손·노트·시계)">
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 500, lineHeight: "normal", left: "12px", color: "#f3e6d8", fontSize: "11px", top: "600px", whiteSpace: "nowrap"}} data-node-id="3359:4">
          IMG · 히어로 배경 사진 (책상 위 손·노트·시계)
        </p>
      </div>
      <div style={{position: "absolute", backgroundColor: "rgba(0,0,0,0.35)", height: "63px", left: 0, overflow: "hidden", top: 0, width: "1920px"}} data-node-id="3359:5" data-name="GNB">
        <div style={{position: "absolute", display: "flex", gap: "1.12px", alignItems: "center", left: "403px", top: "14px"}} data-node-id="3359:6" data-name="Logo/White">
          <p style={{wordBreak: "break-word", fontWeight: 300, lineHeight: "normal", position: "relative", flexShrink: 0, fontSize: "29.12px", color: "#fff", whiteSpace: "nowrap"}} data-node-id="I3359:6;3358:4">
            W
          </p>
          <div style={{height: "21.28px", position: "relative", flexShrink: 0, width: "16.8px"}} data-node-id="I3359:6;3358:5" data-name="E">
            <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgE} />
          </div>
          <p style={{wordBreak: "break-word", fontWeight: 300, lineHeight: "normal", position: "relative", flexShrink: 0, fontSize: "29.12px", color: "#fff", letterSpacing: "1.1648px", whiteSpace: "nowrap"}} data-node-id="I3359:6;3358:9">
            HAG
          </p>
          <div style={{position: "relative", flexShrink: 0, width: "24.64px", height: "24.64px"}} data-node-id="I3359:6;3358:10" data-name="O">
            <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgO} />
          </div>
        </div>
        <p style={{textUnderlinePosition: "from-font", wordBreak: "break-word", position: "absolute", fontWeight: 500, lineHeight: "normal", left: "868px", fontSize: "15px", color: "#fff", top: "22px", letterSpacing: "-0.45px", textDecoration: "underline", whiteSpace: "nowrap"}} data-node-id="3359:14">
          HOME
        </p>
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 300, lineHeight: "normal", left: "956px", fontSize: "15px", color: "#fff", top: "22px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3359:15">
          ONE AI
        </p>
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 300, lineHeight: "normal", left: "1044px", fontSize: "15px", color: "#fff", top: "22px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3359:16">
          서비스소개
        </p>
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 300, lineHeight: "normal", left: "1153px", fontSize: "15px", color: "#fff", top: "22px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3359:17">
          요금안내
        </p>
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 300, lineHeight: "normal", left: "1249px", fontSize: "15px", color: "#fff", top: "22px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3359:18">
          모바일
        </p>
        <div style={{position: "absolute", borderWidth: "1px", borderStyle: "solid", borderColor: "#fff", display: "flex", height: "29px", alignItems: "center", justifyContent: "center", left: "1335px", overflow: "hidden", top: "17px", width: "82px"}} data-node-id="3359:19" onClick={onLogin} role="button" data-name="Button/회원가입">
          <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "normal", position: "relative", flexShrink: 0, fontSize: "14px", color: "#fff", whiteSpace: "nowrap"}} data-node-id="3359:20">
            회원가입
          </p>
        </div>
        <div style={{position: "absolute", borderWidth: "1px", borderStyle: "solid", borderColor: "#fff", display: "flex", height: "29px", alignItems: "center", justifyContent: "center", left: "1421px", overflow: "hidden", top: "17px", width: "82px"}} data-node-id="3359:21" onClick={onLogin} role="button" data-name="Button/로그인">
          <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "normal", position: "relative", flexShrink: 0, fontSize: "14px", color: "#fff", whiteSpace: "nowrap"}} data-node-id="3359:22">
            로그인
          </p>
        </div>
      </div>
      <div style={{position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", left: "597px", overflow: "hidden", top: "282px"}} data-node-id="3359:23" data-name="Hero Copy">
        <p style={{wordBreak: "break-word", fontWeight: 300, lineHeight: "normal", position: "relative", flexShrink: 0, fontSize: "31px", color: "#fff", letterSpacing: "-0.93px", whiteSpace: "nowrap"}} data-node-id="3359:24">
          기업에 필요한 다양한 업무환경을 제공하는 비즈니스 플랫폼
        </p>
        <p style={{wordBreak: "break-word", fontWeight: 900, lineHeight: "84px", position: "relative", flexShrink: 0, fontSize: "68px", color: "#fff", letterSpacing: "-1.36px", whiteSpace: "nowrap"}} data-node-id="3359:25">
          WEHAGO
        </p>
        <div style={{height: "8px", position: "relative", flexShrink: 0, width: "10px"}} data-node-id="3359:26" data-name="Frame" />
        <div style={{wordBreak: "break-word", fontWeight: 300, lineHeight: "0", position: "relative", flexShrink: 0, fontSize: "16px", textAlign: "center", color: "#fff", letterSpacing: "-0.48px", whiteSpace: "nowrap"}} data-node-id="3359:27">
          <p style={{lineHeight: "24px", marginBottom: 0}}>업무에 필요한 모든 서비스를 한 공간에서!</p>
          <p style={{lineHeight: "24px"}}>Smart A 10으로 전문적인 경영관리와 쉽고 편리한 협업을 경험해보세요.</p>
        </div>
      </div>
      <div style={{position: "absolute", left: "936px", width: "34px", height: "34px", top: "622px"}} data-node-id="3359:28" data-name="icon/chevDown">
        <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconChevDown} />
      </div>
      <div style={{position: "absolute", display: "flex", height: "374.428px", alignItems: "center", justifyContent: "center", left: "1590px", top: "322.17px", width: "246.764px"}} data-node-id="3359:30">
        <div style={{flex: "none", transform: "rotate(-8deg)"}}>
          <div style={{backgroundColor: "#1e1e22", height: "350px", overflow: "hidden", position: "relative", borderRadius: "28px", width: "200px"}} data-name="이미지 자리 / 모바일 앱 화면">
            <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 500, lineHeight: "normal", left: "51px", color: "#bbb", fontSize: "11px", top: "169px", whiteSpace: "nowrap"}} data-node-id="3359:31">
              IMG · 모바일 앱 화면
            </p>
          </div>
        </div>
      </div>
      <div style={{position: "absolute", height: "225px", left: "1823px", overflow: "hidden", borderRadius: "31px", top: "305px", width: "62px"}} data-node-id="3359:32" data-name="Quick Float">
        <div style={{position: "absolute", backgroundColor: "#2a2a2e", height: "97px", left: 0, overflow: "hidden", top: 0, width: "62px"}} data-node-id="3359:33" data-name="소개자료">
          <div style={{position: "absolute", left: "21px", width: "20px", height: "20px", top: "26px"}} data-node-id="3359:34" data-name="icon/download">
            <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconDownload} />
          </div>
          <div style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "0", left: "31px", fontSize: "10px", textAlign: "center", color: "#fff", top: "58px", letterSpacing: "-0.4px", whiteSpace: "nowrap", transform: "translateX(-50%)"}} data-node-id="3359:38">
            <p style={{lineHeight: "12px", marginBottom: 0}}>소개자료</p>
            <p style={{lineHeight: "12px"}}>다운로드</p>
          </div>
        </div>
        <div style={{position: "absolute", backgroundColor: "#3e6cf2", height: "128px", left: 0, overflow: "hidden", top: "97px", width: "62px"}} data-node-id="3359:39" data-name="도입문의">
          <div style={{position: "absolute", left: "21px", width: "20px", height: "20px", top: "16px"}} data-node-id="3359:40" data-name="icon/phone">
            <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconPhone} />
          </div>
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "normal", left: "13px", fontSize: "10px", color: "#fff", top: "49px", letterSpacing: "-0.4px", whiteSpace: "nowrap"}} data-node-id="3359:42">
            도입문의
          </p>
          <div style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "0", left: "31.5px", fontSize: "17px", textAlign: "center", color: "#fff", top: "65px", whiteSpace: "nowrap", transform: "translateX(-50%)"}} data-node-id="3359:43">
            <p style={{lineHeight: "19px", marginBottom: 0}}>1688</p>
            <p style={{lineHeight: "19px"}}>5000</p>
          </div>
        </div>
      </div>
      <div style={{position: "absolute", height: "249px", left: 0, overflow: "hidden", top: "706px", width: "1920px", backgroundImage: "linear-gradient(90deg, rgb(18, 14, 78) 0%, rgb(36, 25, 138) 33.333%, rgb(26, 20, 104) 66.667%, rgb(14, 11, 64) 100%)"}} data-node-id="3359:44" data-name="AI Edition 요금제 배너">
        <div style={{position: "absolute", backgroundColor: "rgba(255,255,255,0.06)", height: "249px", left: "1110px", overflow: "hidden", top: 0, width: "400px"}} data-node-id="3359:45" data-name="이미지 자리 / 3D 아이콘 일러스트">
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 500, lineHeight: "normal", left: "139px", color: "#b9b3ff", fontSize: "11px", top: "118px", whiteSpace: "nowrap"}} data-node-id="3359:46">
            IMG · 3D 아이콘 일러스트
          </p>
        </div>
        <div style={{position: "absolute", backgroundColor: "#5b3df5", display: "flex", height: "27px", alignItems: "center", justifyContent: "center", left: "322px", overflow: "hidden", borderRadius: "3px", top: "40px", width: "198px"}} data-node-id="3359:47" data-name="Button/WEHAGO AI Edition 요금제">
          <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "normal", position: "relative", flexShrink: 0, fontSize: "15px", color: "#fff", whiteSpace: "nowrap"}} data-node-id="3359:48">
            WEHAGO AI Edition 요금제
          </p>
        </div>
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "normal", left: "322px", fontSize: "35px", color: "#fff", top: "79px", letterSpacing: "-1.05px", whiteSpace: "nowrap"}} data-node-id="3359:49">
          ONE AI와 Smart A 10, 필수서비스를
        </p>
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "0", left: "322px", fontSize: "35px", color: "#fff", top: "126px", letterSpacing: "-1.05px", whiteSpace: "nowrap"}} data-node-id="3359:50">
          <span style={{WebkitBackgroundClip: "text", backgroundClip: "text", lineHeight: "normal", color: "transparent", backgroundImage: "linear-gradient(90deg, #9c8cff, #c7b8ff)"}}>하나의 통합 요금제</span>
          <span style={{lineHeight: "normal"}}>로 이용해 보세요</span>
        </p>
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "normal", left: "322px", fontSize: "17px", color: "#fff", top: "185px", letterSpacing: "-0.51px", whiteSpace: "nowrap"}} data-node-id="3359:51">
          개별 서비스 이용 대비 부담을 줄이고, 업무에 필요한 주요 기능을 통합 구성으로 제공해드립니다.
        </p>
        <div style={{position: "absolute", display: "flex", height: "37px", alignItems: "center", justifyContent: "center", left: "1443px", overflow: "hidden", borderRadius: "19px", top: "167px", width: "149px", backgroundImage: "linear-gradient(90deg, #3d86ff, #8b4bff)"}} data-node-id="3359:52" data-name="Button/요금제 자세히 보기">
          <p style={{wordBreak: "break-word", fontWeight: 500, lineHeight: "normal", position: "relative", flexShrink: 0, fontSize: "13px", color: "#fff", whiteSpace: "nowrap"}} data-node-id="3359:53">
            요금제 자세히 보기
          </p>
        </div>
        <div style={{position: "absolute", height: "8px", left: "916px", top: "226px", width: "88px"}} data-node-id="3367:157" data-name="Pager dots">
          <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgPagerDots} />
        </div>
      </div>
      <FloatAiWe style={{position: "absolute", height: "72px", left: "1722px", top: "838px", width: "130px"}} />
      <div style={{position: "absolute", backgroundColor: "#fff", borderWidth: "1px", borderColor: "#d9dde4", borderStyle: "solid", left: "1828px", overflow: "hidden", borderRadius: "26px", boxShadow: "0px 2px 8px 0px rgba(26,51,102,0.1)", width: "52px", height: "52px", top: "540px"}} data-node-id="3367:164" data-name="TOP 버튼">
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "normal", left: "14px", color: "#333", fontSize: "11px", top: "19px", whiteSpace: "nowrap"}} data-node-id="3367:165">
          TOP
        </p>
      </div>
      <div style={{position: "absolute", backgroundColor: "#fff", height: "640px", left: 0, overflow: "hidden", top: "955px", width: "1920px"}} data-node-id="3367:166" data-name="S2 서비스 소개">
        <div style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "0", left: "960px", color: "#333", fontSize: "30px", textAlign: "center", top: "110px", letterSpacing: "-0.9px", width: "1200px", transform: "translateX(-50%)"}} data-node-id="3367:167">
          <p style={{lineHeight: "46px", marginBottom: 0}}>기업의 다양한 업무환경에 필요한 온라인 비즈니스 플랫폼</p>
          <p>
            <span style={{lineHeight: "46px"}}>{`WEHAGO 웹/모바일로 `}</span>
            <span style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "46px", color: "#1c90fb"}}>언제 어디서나 편리한 업무</span>
            <span style={{lineHeight: "46px"}}>를 경험하세요.</span>
          </p>
        </div>
        <div style={{position: "absolute", display: "flex", alignItems: "flex-start", left: "360px", overflow: "hidden", top: "250px"}} data-node-id="3367:168" data-name="service_list">
          <div style={{display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0, width: "200px"}} data-node-id="3367:169" data-name="Service/원활한 소통">
            <div style={{backgroundColor: "#eef6ff", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "44px", flexShrink: 0, width: "88px", height: "88px"}} data-node-id="3367:170" data-name="Icon">
              <div style={{position: "relative", flexShrink: 0, width: "36px", height: "36px"}} data-node-id="3367:171" data-name="icon/chat">
                <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconChat} />
              </div>
            </div>
            <div style={{height: "6px", position: "relative", flexShrink: 0, width: "10px"}} data-node-id="3367:173" data-name="Frame" />
            <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "16px", position: "relative", flexShrink: 0, color: "#1c90fb", fontSize: "11px", textAlign: "center", letterSpacing: "0.66px", whiteSpace: "nowrap"}} data-node-id="3367:174">
              COMMUNICATION
            </p>
            <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "28px", position: "relative", flexShrink: 0, color: "#222", fontSize: "20px", textAlign: "center", letterSpacing: "-0.6px", whiteSpace: "nowrap"}} data-node-id="3367:175">
              원활한 소통
            </p>
            <div style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "0", position: "relative", flexShrink: 0, color: "#777", fontSize: "14px", textAlign: "center", letterSpacing: "-0.42px", whiteSpace: "nowrap"}} data-node-id="3367:176">
              <p style={{lineHeight: "22px", marginBottom: 0}}>그룹 대화 및 1:1대화</p>
              <p style={{lineHeight: "22px", marginBottom: 0}}>화상회의, 문서공유, 화면공유</p>
              <p style={{lineHeight: "22px"}}>댓글기능</p>
            </div>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0, width: "200px"}} data-node-id="3367:177" data-name="Service/효율적인 업무관리">
            <div style={{backgroundColor: "#eef6ff", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "44px", flexShrink: 0, width: "88px", height: "88px"}} data-node-id="3367:178" data-name="Icon">
              <div style={{position: "relative", flexShrink: 0, width: "36px", height: "36px"}} data-node-id="3367:179" data-name="icon/brief">
                <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconBrief} />
              </div>
            </div>
            <div style={{height: "6px", position: "relative", flexShrink: 0, width: "10px"}} data-node-id="3367:182" data-name="Frame" />
            <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "16px", position: "relative", flexShrink: 0, color: "#1c90fb", fontSize: "11px", textAlign: "center", letterSpacing: "0.66px", whiteSpace: "nowrap"}} data-node-id="3367:183">
              EFFECTIVE WORK
            </p>
            <div style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "0", position: "relative", flexShrink: 0, color: "#222", fontSize: "20px", textAlign: "center", letterSpacing: "-0.6px", whiteSpace: "nowrap"}} data-node-id="3367:184">
              <p style={{lineHeight: "28px", marginBottom: 0}}>효율적인</p>
              <p style={{lineHeight: "28px"}}>업무관리</p>
            </div>
            <div style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "0", position: "relative", flexShrink: 0, color: "#777", fontSize: "14px", textAlign: "center", letterSpacing: "-0.42px", whiteSpace: "nowrap"}} data-node-id="3367:185">
              <p style={{lineHeight: "22px", marginBottom: 0}}>연락처/거래처관리 공유</p>
              <p style={{lineHeight: "22px", marginBottom: 0}}>WE드라이브 폴더 공유</p>
              <p style={{lineHeight: "22px"}}>업무할당 및 트래킹</p>
            </div>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0, width: "200px"}} data-node-id="3367:186" data-name="Service/서비스 연동">
            <div style={{backgroundColor: "#eef6ff", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "44px", flexShrink: 0, width: "88px", height: "88px"}} data-node-id="3367:187" data-name="Icon">
              <div style={{position: "relative", flexShrink: 0, width: "36px", height: "36px"}} data-node-id="3367:188" data-name="icon/link">
                <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconLink} />
              </div>
            </div>
            <div style={{height: "6px", position: "relative", flexShrink: 0, width: "10px"}} data-node-id="3367:191" data-name="Frame" />
            <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "16px", position: "relative", flexShrink: 0, color: "#1c90fb", fontSize: "11px", textAlign: "center", letterSpacing: "0.66px", whiteSpace: "nowrap"}} data-node-id="3367:192">
              SERVICE INTERWORKING
            </p>
            <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "28px", position: "relative", flexShrink: 0, color: "#222", fontSize: "20px", textAlign: "center", letterSpacing: "-0.6px", whiteSpace: "nowrap"}} data-node-id="3367:193">
              서비스 연동
            </p>
            <div style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "0", position: "relative", flexShrink: 0, color: "#777", fontSize: "14px", textAlign: "center", letterSpacing: "-0.42px", whiteSpace: "nowrap"}} data-node-id="3367:194">
              <p style={{lineHeight: "22px", marginBottom: 0}}>연락처/캘린더 가져오기</p>
              <p style={{lineHeight: "22px"}}>외부 메일 연동</p>
            </div>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0, width: "200px"}} data-node-id="3367:195" data-name="Service/신속한 업무처리">
            <div style={{backgroundColor: "#eef6ff", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "44px", flexShrink: 0, width: "88px", height: "88px"}} data-node-id="3367:196" data-name="Icon">
              <div style={{position: "relative", flexShrink: 0, width: "36px", height: "36px"}} data-node-id="3367:197" data-name="icon/zap">
                <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconZap} />
              </div>
            </div>
            <div style={{height: "6px", position: "relative", flexShrink: 0, width: "10px"}} data-node-id="3367:199" data-name="Frame" />
            <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "16px", position: "relative", flexShrink: 0, color: "#1c90fb", fontSize: "11px", textAlign: "center", letterSpacing: "0.66px", whiteSpace: "nowrap"}} data-node-id="3367:200">
              QUICK JOB
            </p>
            <div style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "0", position: "relative", flexShrink: 0, color: "#222", fontSize: "20px", textAlign: "center", letterSpacing: "-0.6px", whiteSpace: "nowrap"}} data-node-id="3367:201">
              <p style={{lineHeight: "28px", marginBottom: 0}}>신속한</p>
              <p style={{lineHeight: "28px"}}>업무처리</p>
            </div>
            <div style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "0", position: "relative", flexShrink: 0, color: "#777", fontSize: "14px", textAlign: "center", letterSpacing: "-0.42px", whiteSpace: "nowrap"}} data-node-id="3367:202">
              <p style={{lineHeight: "22px", marginBottom: 0}}>공유캘린더 일정공유</p>
              <p style={{lineHeight: "22px", marginBottom: 0}}>회의일정 공유, 참석여부</p>
              <p style={{lineHeight: "22px"}}>경비청구 전자결재</p>
            </div>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0, width: "200px"}} data-node-id="3367:203" data-name="Service/안전한 데이터관리">
            <div style={{backgroundColor: "#eef6ff", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "44px", flexShrink: 0, width: "88px", height: "88px"}} data-node-id="3367:204" data-name="Icon">
              <div style={{position: "relative", flexShrink: 0, width: "36px", height: "36px"}} data-node-id="3367:205" data-name="icon/shieldc">
                <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconShieldc} />
              </div>
            </div>
            <div style={{height: "6px", position: "relative", flexShrink: 0, width: "10px"}} data-node-id="3367:208" data-name="Frame" />
            <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "16px", position: "relative", flexShrink: 0, color: "#1c90fb", fontSize: "11px", textAlign: "center", letterSpacing: "0.66px", whiteSpace: "nowrap"}} data-node-id="3367:209">
              SECURE DATA
            </p>
            <div style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "0", position: "relative", flexShrink: 0, color: "#222", fontSize: "20px", textAlign: "center", letterSpacing: "-0.6px", whiteSpace: "nowrap"}} data-node-id="3367:210">
              <p style={{lineHeight: "28px", marginBottom: 0}}>안전한</p>
              <p style={{lineHeight: "28px"}}>데이터관리</p>
            </div>
            <div style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "0", position: "relative", flexShrink: 0, color: "#777", fontSize: "14px", textAlign: "center", letterSpacing: "-0.42px", whiteSpace: "nowrap"}} data-node-id="3367:211">
              <p style={{lineHeight: "22px", marginBottom: 0}}>안전한 파일 보관</p>
              <p style={{lineHeight: "22px"}}>보안메일 및 보안메시지 발송</p>
            </div>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0, width: "200px"}} data-node-id="3367:212" data-name="Service/스마트한 모바일 연동">
            <div style={{backgroundColor: "#eef6ff", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "44px", flexShrink: 0, width: "88px", height: "88px"}} data-node-id="3367:213" data-name="Icon">
              <div style={{position: "relative", flexShrink: 0, width: "36px", height: "36px"}} data-node-id="3367:214" data-name="icon/phone">
                <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconPhone1} />
              </div>
            </div>
            <div style={{height: "6px", position: "relative", flexShrink: 0, width: "10px"}} data-node-id="3367:217" data-name="Frame" />
            <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "16px", position: "relative", flexShrink: 0, color: "#1c90fb", fontSize: "11px", textAlign: "center", letterSpacing: "0.66px", whiteSpace: "nowrap"}} data-node-id="3367:218">
              MOBILE INTERLINK
            </p>
            <div style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "0", position: "relative", flexShrink: 0, color: "#222", fontSize: "20px", textAlign: "center", letterSpacing: "-0.6px", whiteSpace: "nowrap"}} data-node-id="3367:219">
              <p style={{lineHeight: "28px", marginBottom: 0}}>스마트한</p>
              <p style={{lineHeight: "28px"}}>모바일 연동</p>
            </div>
            <div style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "0", position: "relative", flexShrink: 0, color: "#777", fontSize: "14px", textAlign: "center", letterSpacing: "-0.42px", whiteSpace: "nowrap"}} data-node-id="3367:220">
              <p style={{lineHeight: "22px", marginBottom: 0}}>실시간 알림</p>
              <p style={{lineHeight: "22px"}}>PC와 100% 데이터 동기화</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{position: "absolute", backgroundColor: "#fafdff", height: "1040px", left: 0, overflow: "hidden", top: "1595px", width: "1920px"}} data-node-id="3367:221" data-name="S3 영상 - 쉽게 편리하게">
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "normal", left: "360px", color: "#111", fontSize: "38px", top: "110px", letterSpacing: "-1.52px", whiteSpace: "nowrap"}} data-node-id="3367:222">
          쉽게, 편리하게, 다함께 WEHAGO
        </p>
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "normal", left: "360px", color: "#666", fontSize: "18px", top: "172px", letterSpacing: "-0.54px", whiteSpace: "nowrap"}} data-node-id="3367:223">
          WEHAGO에 대해 자세히 알아보세요!
        </p>
        <div style={{position: "absolute", backgroundColor: "#fff", borderWidth: "1px", borderColor: "#222", borderStyle: "solid", display: "flex", gap: "10px", alignItems: "center", left: "1347px", overflow: "hidden", paddingLeft: "26px", paddingRight: "22px", paddingTop: "13px", paddingBottom: "13px", borderRadius: "26px", top: "122px"}} data-node-id="3367:224" data-name="btn_linked/더 많은 영상 보러가기">
          <p style={{wordBreak: "break-word", fontWeight: 500, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#222", fontSize: "15px", whiteSpace: "nowrap"}} data-node-id="3367:225">
            더 많은 영상 보러가기
          </p>
          <div style={{position: "relative", flexShrink: 0, width: "18px", height: "18px"}} data-node-id="3367:226" data-name="icon/arrow">
            <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconArrow} />
          </div>
        </div>
        <div style={{position: "absolute", backgroundColor: "rgba(27,34,51,0.25)", height: "321px", left: "1440px", overflow: "hidden", borderRadius: "16px", top: "260px", width: "570px"}} data-node-id="3367:228" data-name="다음 슬라이드 (미리보기)">
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 500, lineHeight: "normal", left: "12px", color: "#8c96aa", fontSize: "11px", top: "10px", whiteSpace: "nowrap"}} data-node-id="3367:229">
            IMG · 다음 영상
          </p>
        </div>
        <div style={{position: "absolute", backgroundColor: "#1b2233", height: "321px", left: "360px", overflow: "hidden", borderRadius: "16px", top: "260px", width: "570px"}} data-node-id="3367:230" data-name="이미지 자리 / 유튜브 영상 · 수많은 거래처 정보 완벽하게 관리하기">
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 500, lineHeight: "normal", left: "12px", color: "#8c96aa", fontSize: "11px", top: "10px", whiteSpace: "nowrap"}} data-node-id="3367:231">
            IMG · 유튜브 영상 · 수많은 거래처 정보 완벽하게 관리하기
          </p>
          <div style={{position: "absolute", backgroundColor: "#f03", height: "48px", left: "251px", overflow: "hidden", borderRadius: "12px", top: "136.5px", width: "68px"}} data-node-id="3367:232" data-name="Play">
            <div style={{position: "absolute", height: "22px", left: "26px", top: "13px", width: "20px"}} data-node-id="3367:233" data-name="tri">
              <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgTri} />
            </div>
          </div>
        </div>
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 300, lineHeight: "normal", left: "990px", color: "#555", fontSize: "18px", top: "296px", whiteSpace: "nowrap"}} data-node-id="3367:235">
          [WEHAGO]
        </p>
        <div style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "0", left: "990px", color: "#111", fontSize: "34px", top: "330px", letterSpacing: "-1.36px", whiteSpace: "nowrap"}} data-node-id="3367:236">
          <p style={{lineHeight: "48px", marginBottom: 0}}>수많은 거래처</p>
          <p style={{lineHeight: "48px"}}>정보 완벽하게 관리하기</p>
        </div>
        <div style={{position: "absolute", display: "flex", gap: "8px", alignItems: "center", left: "990px", overflow: "hidden", top: "540px"}} data-node-id="3367:237" data-name="더 많은 영상 보러가기">
          <p style={{wordBreak: "break-word", fontWeight: 500, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#1c90fb", fontSize: "15px", whiteSpace: "nowrap"}} data-node-id="3367:238">
            더 많은 영상 보러가기
          </p>
          <div style={{position: "relative", flexShrink: 0, width: "18px", height: "18px"}} data-node-id="3367:239" data-name="icon/arrow">
            <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconArrow1} />
          </div>
        </div>
        <div style={{position: "absolute", backgroundColor: "#fff", borderWidth: "1px", borderColor: "#e1e5ec", borderStyle: "solid", left: "290px", opacity: 0.4, overflow: "hidden", borderRadius: "24px", boxShadow: "0px 2px 8px 0px rgba(26,51,102,0.08)", width: "48px", height: "48px", top: "396px"}} data-node-id="3367:241" data-name="Arrow/chevLeft">
          <div style={{position: "absolute", left: "11px", width: "24px", height: "24px", top: "11px"}} data-node-id="3367:242" data-name="icon/chevLeft">
            <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconChevLeft} />
          </div>
        </div>
        <div style={{position: "absolute", backgroundColor: "#fff", borderWidth: "1px", borderColor: "#e1e5ec", borderStyle: "solid", left: "1582px", overflow: "hidden", borderRadius: "24px", boxShadow: "0px 2px 8px 0px rgba(26,51,102,0.08)", width: "48px", height: "48px", top: "396px"}} data-node-id="3367:244" data-name="Arrow/chevRight">
          <div style={{position: "absolute", left: "11px", width: "24px", height: "24px", top: "11px"}} data-node-id="3367:245" data-name="icon/chevRight">
            <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconChevRight} />
          </div>
        </div>
        <div style={{position: "absolute", display: "flex", gap: "8px", alignItems: "center", left: "916px", overflow: "hidden", top: "620px"}} data-node-id="3367:247" data-name="Pagination">
          <div style={{backgroundColor: "#1c90fb", height: "8px", position: "relative", borderRadius: "4px", flexShrink: 0, width: "24px"}} data-node-id="3367:248" data-name="Rectangle" />
          <div style={{backgroundColor: "#cbd3de", position: "relative", borderRadius: "4px", flexShrink: 0, width: "8px", height: "8px"}} data-node-id="3367:249" data-name="Rectangle" />
          <div style={{backgroundColor: "#cbd3de", position: "relative", borderRadius: "4px", flexShrink: 0, width: "8px", height: "8px"}} data-node-id="3367:250" data-name="Rectangle" />
          <div style={{backgroundColor: "#cbd3de", position: "relative", borderRadius: "4px", flexShrink: 0, width: "8px", height: "8px"}} data-node-id="3367:251" data-name="Rectangle" />
          <div style={{backgroundColor: "#cbd3de", position: "relative", borderRadius: "4px", flexShrink: 0, width: "8px", height: "8px"}} data-node-id="3367:252" data-name="Rectangle" />
        </div>
        <div style={{position: "absolute", backgroundColor: "#2a3346", height: "195px", left: "410px", overflow: "hidden", borderRadius: "20px", top: "690px", width: "347px"}} data-node-id="3367:253" data-name="이미지 자리 / 썸네일 · 수많은 거래처 정보 완벽하게 관리하기">
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 500, lineHeight: "normal", left: "12px", color: "#9aa4b8", fontSize: "11px", top: "10px", whiteSpace: "nowrap"}} data-node-id="3367:254">
            IMG · 썸네일 · 수많은 거래처 정보 완벽하게 관리하기
          </p>
        </div>
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 500, lineHeight: "normal", left: "410px", color: "#333", fontSize: "16px", top: "902px", letterSpacing: "-0.48px", width: "347px"}} data-node-id="3367:255">
          [WEHAGO] 수많은 거래처 정보 완벽하게 관리하기
        </p>
        <div style={{position: "absolute", backgroundColor: "#2a3346", borderWidth: "3px", borderColor: "#1c90fb", borderStyle: "solid", height: "195px", left: "787px", overflow: "hidden", borderRadius: "20px", top: "690px", width: "347px"}} data-node-id="3367:256" data-name="이미지 자리 / 썸네일 · 빠르고 간편하게 연말정산하기">
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 500, lineHeight: "normal", left: "9px", color: "#9aa4b8", fontSize: "11px", top: "7px", whiteSpace: "nowrap"}} data-node-id="3367:257">
            IMG · 썸네일 · 빠르고 간편하게 연말정산하기
          </p>
        </div>
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "normal", left: "787px", color: "#1c90fb", fontSize: "16px", top: "902px", letterSpacing: "-0.48px", width: "347px"}} data-node-id="3367:258">
          [WEHAGO] 빠르고 간편하게 연말정산하기
        </p>
        <div style={{position: "absolute", backgroundColor: "#2a3346", height: "195px", left: "1164px", overflow: "hidden", borderRadius: "20px", top: "690px", width: "347px"}} data-node-id="3367:259" data-name="이미지 자리 / 썸네일 · 일정관리로 꼼꼼한 팀원되기">
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 500, lineHeight: "normal", left: "12px", color: "#9aa4b8", fontSize: "11px", top: "10px", whiteSpace: "nowrap"}} data-node-id="3367:260">
            IMG · 썸네일 · 일정관리로 꼼꼼한 팀원되기
          </p>
        </div>
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 500, lineHeight: "normal", left: "1164px", color: "#333", fontSize: "16px", top: "902px", letterSpacing: "-0.48px", width: "347px"}} data-node-id="3367:261">
          [WEHAGO] 일정관리로 꼼꼼한 팀원되기
        </p>
        <div style={{position: "absolute", backgroundColor: "#fff", borderWidth: "1px", borderColor: "#e1e5ec", borderStyle: "solid", left: "1536px", overflow: "hidden", borderRadius: "24px", boxShadow: "0px 2px 8px 0px rgba(26,51,102,0.08)", width: "48px", height: "48px", top: "764px"}} data-node-id="3367:262" data-name="Arrow/chevRight">
          <div style={{position: "absolute", left: "11px", width: "24px", height: "24px", top: "11px"}} data-node-id="3367:263" data-name="icon/chevRight">
            <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconChevRight} />
          </div>
        </div>
      </div>
      <div style={{position: "absolute", backgroundColor: "#fff", height: "990px", left: 0, overflow: "hidden", top: "2635px", width: "1920px"}} data-node-id="3367:265" data-name="S4 영상 - 고객사 스토리">
        <div style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "0", left: "360px", color: "#111", fontSize: "38px", top: "110px", letterSpacing: "-1.52px", whiteSpace: "nowrap"}} data-node-id="3367:266">
          <p style={{lineHeight: "52px", marginBottom: 0}}>다양한 업무 환경에도</p>
          <p style={{lineHeight: "52px"}}>유연한 WEHAGO!</p>
        </div>
        <div style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "0", left: "360px", color: "#666", fontSize: "18px", top: "228px", letterSpacing: "-0.54px", whiteSpace: "nowrap"}} data-node-id="3367:267">
          <p style={{lineHeight: "28px", marginBottom: 0}}>위하고 하고 안하고의 차이,</p>
          <p style={{lineHeight: "28px"}}>실제 사용 고객사의 스토리를 만나보세요.</p>
        </div>
        <div style={{position: "absolute", backgroundColor: "#fff", borderWidth: "1px", borderColor: "#222", borderStyle: "solid", display: "flex", gap: "10px", alignItems: "center", left: "1347px", overflow: "hidden", paddingLeft: "26px", paddingRight: "22px", paddingTop: "13px", paddingBottom: "13px", borderRadius: "26px", top: "122px"}} data-node-id="3367:268" data-name="btn_linked/더 많은 영상 보러가기">
          <p style={{wordBreak: "break-word", fontWeight: 500, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#222", fontSize: "15px", whiteSpace: "nowrap"}} data-node-id="3367:269">
            더 많은 영상 보러가기
          </p>
          <div style={{position: "relative", flexShrink: 0, width: "18px", height: "18px"}} data-node-id="3367:270" data-name="icon/arrow">
            <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconArrow} />
          </div>
        </div>
        <div style={{position: "absolute", backgroundColor: "rgba(27,34,51,0.15)", height: "396px", left: "1300px", overflow: "hidden", borderRadius: "16px", top: "420px", width: "700px"}} data-node-id="3367:272" data-name="커버플로우 3">
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 500, lineHeight: "normal", left: "12px", color: "#8c96aa", fontSize: "11px", top: "10px", whiteSpace: "nowrap"}} data-node-id="3367:273">{`IMG · `}</p>
        </div>
        <div style={{position: "absolute", backgroundColor: "rgba(27,34,51,0.3)", height: "442px", left: "1160px", overflow: "hidden", borderRadius: "16px", top: "390px", width: "780px"}} data-node-id="3367:274" data-name="커버플로우 2">
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 500, lineHeight: "normal", left: "12px", color: "#8c96aa", fontSize: "11px", top: "10px", whiteSpace: "nowrap"}} data-node-id="3367:275">{`IMG · `}</p>
        </div>
        <div style={{position: "absolute", backgroundColor: "#1b2233", height: "504px", left: "515px", overflow: "hidden", borderRadius: "16px", top: "350px", width: "890px"}} data-node-id="3367:276" data-name="이미지 자리 / 유튜브 영상 · 소르테크에게 WEHAGO 란?">
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 500, lineHeight: "normal", left: "12px", color: "#8c96aa", fontSize: "11px", top: "10px", whiteSpace: "nowrap"}} data-node-id="3367:277">
            IMG · 유튜브 영상 · 소르테크에게 WEHAGO 란?
          </p>
          <div style={{position: "absolute", backgroundColor: "#f03", height: "48px", left: "411px", overflow: "hidden", borderRadius: "12px", top: "228px", width: "68px"}} data-node-id="3367:278" data-name="Play">
            <div style={{position: "absolute", height: "22px", left: "26px", top: "13px", width: "20px"}} data-node-id="3367:279" data-name="tri">
              <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgTri} />
            </div>
          </div>
        </div>
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "normal", left: "515px", color: "#111", fontSize: "22px", top: "884px", letterSpacing: "-0.66px", whiteSpace: "nowrap"}} data-node-id="3367:281">
          [WEHAGO] 소르테크에게 WEHAGO 란?
        </p>
        <div style={{position: "absolute", display: "flex", gap: "12px", alignItems: "center", left: "1269px", overflow: "hidden", top: "878px"}} data-node-id="3367:282" data-name="swiper-module-box">
          <p style={{wordBreak: "break-word", fontWeight: 500, lineHeight: "0", position: "relative", flexShrink: 0, color: "#333", fontSize: "16px", whiteSpace: "nowrap"}} data-node-id="3367:283">
            <span style={{lineHeight: "normal", color: "#1c90fb"}}>1</span>
            <span style={{lineHeight: "normal"}}>{` / 6`}</span>
          </p>
          <div style={{backgroundColor: "#fff", borderWidth: "1px", borderColor: "#d9dde4", borderStyle: "solid", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.4, overflow: "hidden", position: "relative", borderRadius: "20px", flexShrink: 0, width: "40px", height: "40px"}} data-node-id="3367:284" data-name="Arrow/chevLeft">
            <div style={{position: "relative", flexShrink: 0, width: "20px", height: "20px"}} data-node-id="3367:285" data-name="icon/chevLeft">
              <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconChevLeft1} />
            </div>
          </div>
          <div style={{backgroundColor: "#fff", borderWidth: "1px", borderColor: "#d9dde4", borderStyle: "solid", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "20px", flexShrink: 0, width: "40px", height: "40px"}} data-node-id="3367:287" data-name="Arrow/chevRight">
            <div style={{position: "relative", flexShrink: 0, width: "20px", height: "20px"}} data-node-id="3367:288" data-name="icon/chevRight">
              <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconChevRight1} />
            </div>
          </div>
        </div>
      </div>
      <div style={{position: "absolute", backgroundColor: "#f4f7fb", height: "640px", left: 0, overflow: "hidden", top: "3625px", width: "1920px"}} data-node-id="3368:157" data-name="S5 서비스 구분">
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "normal", left: "872px", color: "#111", fontSize: "38px", top: "100px", letterSpacing: "-1.52px", whiteSpace: "nowrap"}} data-node-id="3368:158">
          서비스 구분
        </p>
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "28px", left: "960px", color: "#666", fontSize: "18px", textAlign: "center", top: "164px", letterSpacing: "-0.54px", width: "1000px", transform: "translateX(-50%)"}} data-node-id="3368:159">
          경영자를 위하고, 관리자를 위하고, 직원을 위한 온라인 비즈니스 플랫폼
        </p>
        <div style={{position: "absolute", backgroundColor: "#fff", height: "310px", left: "360px", overflow: "hidden", borderRadius: "16px", boxShadow: "0px 6px 24px 0px rgba(26,51,102,0.08)", top: "240px", width: "380px"}} data-node-id="3368:160" data-name="Card/협업서비스">
          <div style={{position: "absolute", backgroundColor: "rgba(28,144,251,0.12)", left: "36px", borderRadius: "30px", width: "60px", height: "60px", top: "36px"}} data-node-id="3368:161" data-name="Icon bg" />
          <div style={{position: "absolute", left: "51px", width: "30px", height: "30px", top: "51px"}} data-node-id="3368:162" data-name="icon/chat">
            <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconChat1} />
          </div>
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "normal", left: "36px", color: "#111", fontSize: "24px", top: "116px", letterSpacing: "-0.72px", whiteSpace: "nowrap"}} data-node-id="3368:164">
            협업서비스
          </p>
          <div style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "0", left: "36px", color: "#666", fontSize: "14.5px", top: "162px", letterSpacing: "-0.725px", width: "320px"}} data-node-id="3368:165">
            <p style={{lineHeight: "24px", marginBottom: 0}}>업무에 필요한 소통기능을 담은</p>
            <p style={{lineHeight: "24px", marginBottom: 0}}>메신저, 일정관리, 메일 등</p>
            <p style={{lineHeight: "24px"}}>협업서비스를 통해 원활한 소통을 경험해보세요.</p>
          </div>
          <div style={{position: "absolute", display: "flex", gap: "4px", alignItems: "center", left: "36px", overflow: "hidden", top: "262px"}} data-node-id="3368:166" data-name="lnk_more">
            <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#1c90fb", fontSize: "14px", whiteSpace: "nowrap"}} data-node-id="3368:167">
              more
            </p>
            <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:168" data-name="icon/plus">
              <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconPlus} />
            </div>
          </div>
        </div>
        <div style={{position: "absolute", backgroundColor: "#fff", height: "310px", left: "770px", overflow: "hidden", borderRadius: "16px", boxShadow: "0px 6px 24px 0px rgba(26,51,102,0.08)", top: "240px", width: "380px"}} data-node-id="3368:170" data-name="Card/Smart A 10">
          <div style={{position: "absolute", backgroundColor: "rgba(240,72,90,0.12)", left: "36px", borderRadius: "30px", width: "60px", height: "60px", top: "36px"}} data-node-id="3368:171" data-name="Icon bg" />
          <div style={{position: "absolute", left: "51px", width: "30px", height: "30px", top: "51px"}} data-node-id="3368:172" data-name="icon/calc">
            <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCalc} />
          </div>
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "normal", left: "36px", color: "#111", fontSize: "24px", top: "116px", letterSpacing: "-0.72px", whiteSpace: "nowrap"}} data-node-id="3368:175">
            Smart A 10
          </p>
          <div style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "0", left: "36px", color: "#666", fontSize: "14.5px", top: "162px", letterSpacing: "-0.725px", width: "320px"}} data-node-id="3368:176">
            <p style={{lineHeight: "24px", marginBottom: 0}}>한층 더 편리해진 국내 대표 회계프로그램 SmartA!</p>
            <p style={{lineHeight: "24px", marginBottom: 0}}>세무데이터 확인과 스마트한 자동전표처리 기능을</p>
            <p style={{lineHeight: "24px"}}>언제 어디서나 설치 없이 사용해보세요.</p>
          </div>
          <div style={{position: "absolute", display: "flex", gap: "4px", alignItems: "center", left: "36px", overflow: "hidden", top: "262px"}} data-node-id="3368:177" data-name="lnk_more">
            <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#f0485a", fontSize: "14px", whiteSpace: "nowrap"}} data-node-id="3368:178">
              more
            </p>
            <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:179" data-name="icon/plus">
              <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconPlus1} />
            </div>
          </div>
        </div>
        <div style={{position: "absolute", backgroundColor: "#fff", height: "310px", left: "1180px", overflow: "hidden", borderRadius: "16px", boxShadow: "0px 6px 24px 0px rgba(26,51,102,0.08)", top: "240px", width: "380px"}} data-node-id="3368:181" data-name="Card/부가서비스">
          <div style={{position: "absolute", backgroundColor: "rgba(20,184,166,0.12)", left: "36px", borderRadius: "30px", width: "60px", height: "60px", top: "36px"}} data-node-id="3368:182" data-name="Icon bg" />
          <div style={{position: "absolute", left: "51px", width: "30px", height: "30px", top: "51px"}} data-node-id="3368:183" data-name="icon/grid">
            <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconGrid} />
          </div>
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "normal", left: "36px", color: "#111", fontSize: "24px", top: "116px", letterSpacing: "-0.72px", whiteSpace: "nowrap"}} data-node-id="3368:188">
            부가서비스
          </p>
          <div style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "0", left: "36px", color: "#666", fontSize: "14.5px", top: "162px", letterSpacing: "-0.725px", width: "320px"}} data-node-id="3368:189">
            <p style={{lineHeight: "24px", marginBottom: 0}}>법인/개인카드 관리, 경비현황분석 등</p>
            <p style={{lineHeight: "24px", marginBottom: 0}}>다양한 전문적인 부가서비스로</p>
            <p style={{lineHeight: "24px"}}>기업의 생산성을 높여보세요.</p>
          </div>
          <div style={{position: "absolute", display: "flex", gap: "4px", alignItems: "center", left: "36px", overflow: "hidden", top: "262px"}} data-node-id="3368:190" data-name="lnk_more">
            <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#14b8a6", fontSize: "14px", whiteSpace: "nowrap"}} data-node-id="3368:191">
              more
            </p>
            <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:192" data-name="icon/plus">
              <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconPlus2} />
            </div>
          </div>
        </div>
      </div>
      <div style={{position: "absolute", backgroundColor: "#fff", height: "1240px", left: 0, overflow: "hidden", top: "4265px", width: "1920px"}} data-node-id="3368:194" data-name="S6 플랜안내">
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "normal", left: "810px", color: "#111", fontSize: "38px", top: "100px", letterSpacing: "-1.52px", whiteSpace: "nowrap"}} data-node-id="3368:195">
          WEHAGO 플랜안내
        </p>
        <div style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "0", left: "960px", color: "#666", fontSize: "18px", textAlign: "center", top: "164px", letterSpacing: "-0.54px", width: "1000px", transform: "translateX(-50%)"}} data-node-id="3368:196">
          <p style={{lineHeight: "28px", marginBottom: 0}}>WEHAGO는 기업의 규모와 특성에 맞는 다양한 플랜을 제공합니다.</p>
          <p style={{lineHeight: "28px"}}>우리회사에 맞는 기본플랜을 선택하고 부가적인 서비스는 추가로 구매할 수 있습니다.</p>
        </div>
        <div style={{position: "absolute", backgroundColor: "#f1f3f7", display: "flex", alignItems: "flex-start", left: "726px", overflow: "hidden", padding: "4px", borderRadius: "30px", top: "262px"}} data-node-id="3368:197" data-name="plan_btn_wrap">
          <div style={{backgroundColor: "#1c90fb", display: "flex", height: "50px", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "25px", flexShrink: 0, width: "230px"}} data-node-id="3368:198" data-name="Tab/WEHAGO 패키지플랜">
            <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "normal", position: "relative", flexShrink: 0, fontSize: "16px", color: "#fff", whiteSpace: "nowrap"}} data-node-id="3368:199">
              WEHAGO 패키지플랜
            </p>
          </div>
          <div style={{display: "flex", height: "50px", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "25px", flexShrink: 0, width: "230px"}} data-node-id="3368:200" data-name="Tab/WEHAGO 기본플랜">
            <p style={{wordBreak: "break-word", fontWeight: 500, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#777", fontSize: "16px", whiteSpace: "nowrap"}} data-node-id="3368:201">
              WEHAGO 기본플랜
            </p>
          </div>
        </div>
        <div style={{position: "absolute", backgroundColor: "#fff", borderWidth: "1px", borderColor: "#e3e7ee", borderStyle: "solid", height: "780px", left: "360px", overflow: "hidden", borderRadius: "20px", boxShadow: "0px 6px 24px 0px rgba(26,51,102,0.06)", top: "360px", width: "580px"}} data-node-id="3368:202" data-name="Plan/CLUB">
          <div style={{position: "absolute", backgroundColor: "#5ca8f2", height: "96px", left: "-1px", top: "-1px", width: "580px"}} data-node-id="3368:203" data-name="titbx" />
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 900, lineHeight: "normal", left: "244px", fontSize: "32px", color: "#fff", top: "28px", letterSpacing: "1.28px", whiteSpace: "nowrap"}} data-node-id="3368:204">
            CLUB
          </p>
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 500, lineHeight: "0", left: "172.5px", color: "#222", fontSize: "0px", top: "123px", whiteSpace: "nowrap"}} data-node-id="3368:205">
            <span style={{lineHeight: "normal", fontSize: "20px"}}>{`사용자당 월 `}</span>
            <span style={{fontWeight: 700, lineHeight: "normal", color: "#5ca8f2", fontSize: "42px"}}>3,000</span>
            <span style={{lineHeight: "normal", fontSize: "20px"}}>원</span>
          </p>
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "normal", left: "194px", color: "#888", fontSize: "14px", top: "189px", whiteSpace: "nowrap"}} data-node-id="3368:206">
            월 기본료 20,000원 (부가세별도)
          </p>
          <div style={{position: "absolute", backgroundColor: "#e8ebf0", height: "1px", left: "39px", top: "231px", width: "500px"}} data-node-id="3368:207" data-name="Rectangle" />
          <div style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "0", left: "289px", color: "#555", fontSize: "15px", textAlign: "center", top: "251px", letterSpacing: "-0.6px", width: "500px", transform: "translateX(-50%)"}} data-node-id="3368:208">
            <p style={{lineHeight: "24px", marginBottom: 0}}>더 많은 협업 및 공유 기능과 저장공간이 제공됩니다.</p>
            <p style={{lineHeight: "24px"}}>1인~30인 규모의 기업에서 사용하시기에 적합한 플랜입니다.</p>
          </div>
          <div style={{position: "absolute", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start", left: "69px", overflow: "hidden", top: "333px"}} data-node-id="3368:209" data-name="plan_info_list">
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:210" data-name="li">
              <div style={{backgroundColor: "rgba(92,168,242,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:211" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:212" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:214">
                기본 서비스 포함
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:215" data-name="li">
              <div style={{backgroundColor: "rgba(92,168,242,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:216" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:217" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "0", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:219">
                <span style={{lineHeight: "normal"}}>{`회사저장공간 `}</span>
                <span style={{fontWeight: 700, lineHeight: "normal", color: "#5ca8f2"}}>100GB</span>
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:220" data-name="li">
              <div style={{backgroundColor: "rgba(92,168,242,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:221" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:222" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "0", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:224">
                <span style={{lineHeight: "normal"}}>{`메신저 `}</span>
                <span style={{fontWeight: 700, lineHeight: "normal", color: "#5ca8f2"}}>무제한</span>
                <span style={{lineHeight: "normal"}}>{` 대화 보관`}</span>
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:225" data-name="li">
              <div style={{backgroundColor: "rgba(92,168,242,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:226" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:227" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "0", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:229">
                <span style={{lineHeight: "normal"}}>{`화상회의 `}</span>
                <span style={{fontWeight: 700, lineHeight: "normal", color: "#5ca8f2"}}>무제한 제공</span>
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:230" data-name="li">
              <div style={{backgroundColor: "rgba(92,168,242,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:231" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:232" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "0", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:234">
                <span style={{lineHeight: "normal"}}>{`팩스 `}</span>
                <span style={{fontWeight: 700, lineHeight: "normal", color: "#5ca8f2"}}>(회선구매 필요)</span>
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:235" data-name="li">
              <div style={{backgroundColor: "rgba(92,168,242,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:236" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:237" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:239">
                메일 1GB(사용자당)
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:240" data-name="li">
              <div style={{backgroundColor: "rgba(92,168,242,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:241" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:242" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:244">
                문서/이미지 미리보기
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:245" data-name="li">
              <div style={{backgroundColor: "rgba(92,168,242,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:246" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:247" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:249">
                WE드라이브 공유기능
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:250" data-name="li">
              <div style={{backgroundColor: "rgba(92,168,242,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:251" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:252" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:254">
                내 PC 원격접속
              </p>
            </div>
          </div>
        </div>
        <div style={{position: "absolute", backgroundColor: "#fff", borderWidth: "1px", borderColor: "#e3e7ee", borderStyle: "solid", height: "780px", left: "980px", overflow: "hidden", borderRadius: "20px", boxShadow: "0px 6px 24px 0px rgba(26,51,102,0.06)", top: "360px", width: "580px"}} data-node-id="3368:255" data-name="Plan/PRO">
          <div style={{position: "absolute", backgroundColor: "#3d63d9", height: "96px", left: "-1px", top: "-1px", width: "580px"}} data-node-id="3368:256" data-name="titbx" />
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 900, lineHeight: "normal", left: "253px", fontSize: "32px", color: "#fff", top: "28px", letterSpacing: "1.28px", whiteSpace: "nowrap"}} data-node-id="3368:257">
            PRO
          </p>
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 500, lineHeight: "0", left: "172.5px", color: "#222", fontSize: "0px", top: "123px", whiteSpace: "nowrap"}} data-node-id="3368:258">
            <span style={{lineHeight: "normal", fontSize: "20px"}}>{`사용자당 월 `}</span>
            <span style={{fontWeight: 700, lineHeight: "normal", color: "#3d63d9", fontSize: "42px"}}>6,000</span>
            <span style={{lineHeight: "normal", fontSize: "20px"}}>원</span>
          </p>
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "normal", left: "194px", color: "#888", fontSize: "14px", top: "189px", whiteSpace: "nowrap"}} data-node-id="3368:259">
            월 기본료 30,000원 (부가세별도)
          </p>
          <div style={{position: "absolute", backgroundColor: "#e8ebf0", height: "1px", left: "39px", top: "231px", width: "500px"}} data-node-id="3368:260" data-name="Rectangle" />
          <div style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "0", left: "289px", color: "#555", fontSize: "15px", textAlign: "center", top: "251px", letterSpacing: "-0.6px", width: "500px", transform: "translateX(-50%)"}} data-node-id="3368:261">
            <p style={{lineHeight: "24px", marginBottom: 0}}>온라인에서 문서보관, 업무공유 등 활동이 잦은 기업이라면</p>
            <p style={{lineHeight: "24px"}}>별도 제약없이 자유롭게 사용하기 적합한 플랜입니다.</p>
          </div>
          <div style={{position: "absolute", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start", left: "69px", overflow: "hidden", top: "333px"}} data-node-id="3368:262" data-name="plan_info_list">
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:263" data-name="li">
              <div style={{backgroundColor: "rgba(104,163,176,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:264" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:265" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck1} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:267">
                기본 서비스 포함
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:268" data-name="li">
              <div style={{backgroundColor: "rgba(104,163,176,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:269" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:270" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck1} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "0", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:272">
                <span style={{lineHeight: "normal"}}>{`회사저장공간 `}</span>
                <span style={{fontWeight: 700, lineHeight: "normal", color: "#3d63d9"}}>500GB</span>
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:273" data-name="li">
              <div style={{backgroundColor: "rgba(104,163,176,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:274" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:275" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck1} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "0", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:277">
                <span style={{lineHeight: "normal"}}>{`메신저 `}</span>
                <span style={{fontWeight: 700, lineHeight: "normal", color: "#3d63d9"}}>무제한</span>
                <span style={{lineHeight: "normal"}}>{` 대화 보관`}</span>
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:278" data-name="li">
              <div style={{backgroundColor: "rgba(104,163,176,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:279" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:280" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck1} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "0", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:282">
                <span style={{lineHeight: "normal"}}>{`화상회의 `}</span>
                <span style={{fontWeight: 700, lineHeight: "normal", color: "#3d63d9"}}>무제한</span>
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:283" data-name="li">
              <div style={{backgroundColor: "rgba(104,163,176,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:284" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:285" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck1} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "0", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:287">
                <span style={{lineHeight: "normal"}}>{`팩스 `}</span>
                <span style={{fontWeight: 700, lineHeight: "normal", color: "#3d63d9"}}>(회선구매 필요)</span>
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:288" data-name="li">
              <div style={{backgroundColor: "rgba(104,163,176,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:289" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:290" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck1} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:292">
                메일 1GB(사용자당)
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:293" data-name="li">
              <div style={{backgroundColor: "rgba(104,163,176,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:294" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:295" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck1} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:297">
                문서/이미지 미리보기
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:298" data-name="li">
              <div style={{backgroundColor: "rgba(104,163,176,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:299" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:300" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck1} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:302">
                WE드라이브 공유기능
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:303" data-name="li">
              <div style={{backgroundColor: "rgba(104,163,176,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:304" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:305" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck1} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#3d63d9", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:307">
                웹오피스 기능제공
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:308" data-name="li">
              <div style={{backgroundColor: "rgba(104,163,176,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:309" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:310" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck1} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#3d63d9", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:312">
                지식관리 기능 (노트)
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:313" data-name="li">
              <div style={{backgroundColor: "rgba(104,163,176,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:314" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:315" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck1} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#3d63d9", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:317">
                게시판 기능
              </p>
            </div>
            <div style={{display: "flex", gap: "12px", alignItems: "center", overflow: "hidden", position: "relative", flexShrink: 0}} data-node-id="3368:318" data-name="li">
              <div style={{backgroundColor: "rgba(104,163,176,0.15)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "6px", flexShrink: 0, width: "22px", height: "22px"}} data-node-id="3368:319" data-name="ico">
                <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:320" data-name="icon/check">
                  <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconCheck1} />
                </div>
              </div>
              <p style={{wordBreak: "break-word", fontWeight: 400, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#333", fontSize: "15px", letterSpacing: "-0.45px", whiteSpace: "nowrap"}} data-node-id="3368:322">
                내 PC 원격접속
              </p>
            </div>
          </div>
        </div>
        <div style={{position: "absolute", backgroundColor: "#fff", borderWidth: "1px", borderColor: "#222", borderStyle: "solid", display: "flex", height: "52px", alignItems: "center", justifyContent: "center", left: "860px", overflow: "hidden", borderRadius: "26px", top: "1162px", width: "200px"}} data-node-id="3368:323" data-name="Button/자세히보기">
          <p style={{wordBreak: "break-word", fontWeight: 500, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#222", fontSize: "15px", whiteSpace: "nowrap"}} data-node-id="3368:324">
            자세히보기
          </p>
        </div>
      </div>
      <div style={{position: "absolute", height: "760px", left: 0, overflow: "hidden", top: "5505px", width: "1920px", backgroundImage: "linear-gradient(90deg, #eef5ff, #e2edff)"}} data-node-id="3368:325" data-name="S7 모바일">
        <div style={{position: "absolute", backgroundColor: "#d2e1f8", height: "580px", left: "380px", overflow: "hidden", borderRadius: "24px", top: "90px", width: "500px"}} data-node-id="3368:326" data-name="이미지 자리 / WEHAGO 모바일 앱 화면 (휴대폰)">
          <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 500, lineHeight: "normal", left: "12px", color: "#7a8499", fontSize: "11px", top: "10px", whiteSpace: "nowrap"}} data-node-id="3368:327">
            IMG · WEHAGO 모바일 앱 화면 (휴대폰)
          </p>
        </div>
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "normal", left: "980px", color: "#111", fontSize: "40px", top: "104px", letterSpacing: "-1.6px", whiteSpace: "nowrap"}} data-node-id="3368:328">
          WEHAGO 모바일
        </p>
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "normal", left: "980px", color: "#555", fontSize: "20px", top: "168px", letterSpacing: "-0.6px", whiteSpace: "nowrap"}} data-node-id="3368:329">
          WEHAGO를 더 스마트하게 사용하는 방법
        </p>
        <div style={{position: "absolute", display: "flex", gap: "12px", alignItems: "center", left: "980px", overflow: "hidden", top: "230px"}} data-node-id="3368:330" data-name="store_lnk">
          <div style={{backgroundColor: "#111", display: "flex", gap: "10px", height: "54px", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "10px", flexShrink: 0, width: "180px"}} data-node-id="3368:331" data-name="Store/Google Play">
            <div style={{height: "22px", position: "relative", flexShrink: 0, width: "20px"}} data-node-id="3368:332" data-name="logo">
              <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgLogo} />
            </div>
            <p style={{wordBreak: "break-word", fontWeight: 500, lineHeight: "normal", position: "relative", flexShrink: 0, fontSize: "16px", color: "#fff", whiteSpace: "nowrap"}} data-node-id="3368:337">
              Google Play
            </p>
          </div>
          <div style={{backgroundColor: "#111", display: "flex", gap: "10px", height: "54px", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "10px", flexShrink: 0, width: "180px"}} data-node-id="3368:338" data-name="Store/App Store">
            <div style={{height: "22px", position: "relative", flexShrink: 0, width: "18px"}} data-node-id="3368:339" data-name="logo">
              <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgLogo1} />
            </div>
            <p style={{wordBreak: "break-word", fontWeight: 500, lineHeight: "normal", position: "relative", flexShrink: 0, fontSize: "16px", color: "#fff", whiteSpace: "nowrap"}} data-node-id="3368:342">
              App Store
            </p>
          </div>
          <div style={{backgroundColor: "#fff", borderWidth: "1px", borderColor: "#1c90fb", borderStyle: "solid", display: "flex", gap: "4px", height: "54px", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", borderRadius: "27px", flexShrink: 0, width: "110px"}} data-node-id="3368:343" data-name="btn_lnk more">
            <p style={{wordBreak: "break-word", fontWeight: 700, lineHeight: "normal", position: "relative", flexShrink: 0, color: "#1c90fb", fontSize: "15px", whiteSpace: "nowrap"}} data-node-id="3368:344">
              more
            </p>
            <div style={{position: "relative", flexShrink: 0, width: "14px", height: "14px"}} data-node-id="3368:345" data-name="icon/plus">
              <img alt="" style={{position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", width: "100%", height: "100%"}} src={imgIconPlus} />
            </div>
          </div>
        </div>
        <div style={{position: "absolute", backgroundColor: "#1c90fb", height: "3px", left: "980px", top: "356px", width: "24px"}} data-node-id="3368:347" data-name="bar" />
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "normal", left: "980px", color: "#111", fontSize: "20px", top: "370px", letterSpacing: "-0.8px", whiteSpace: "nowrap"}} data-node-id="3368:348">
          실시간 알림
        </p>
        <div style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "0", left: "980px", color: "#666", fontSize: "15px", top: "406px", letterSpacing: "-0.6px", whiteSpace: "nowrap"}} data-node-id="3368:349">
          <p style={{lineHeight: "24px", marginBottom: 0}}>각 서비스 알림을 즉시 받아</p>
          <p style={{lineHeight: "24px", marginBottom: 0}}>신속한 업무진행이</p>
          <p style={{lineHeight: "24px"}}>가능합니다.</p>
        </div>
        <div style={{position: "absolute", backgroundColor: "#1c90fb", height: "3px", left: "1280px", top: "356px", width: "24px"}} data-node-id="3368:350" data-name="bar" />
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "normal", left: "1280px", color: "#111", fontSize: "20px", top: "370px", letterSpacing: "-0.8px", whiteSpace: "nowrap"}} data-node-id="3368:351">
          언제 어디서나 사무실처럼
        </p>
        <div style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "0", left: "1280px", color: "#666", fontSize: "15px", top: "406px", letterSpacing: "-0.6px", whiteSpace: "nowrap"}} data-node-id="3368:352">
          <p style={{lineHeight: "24px", marginBottom: 0}}>WEHAGO 모바일을 통해</p>
          <p style={{lineHeight: "24px", marginBottom: 0}}>외근중에도 편리하게</p>
          <p style={{lineHeight: "24px"}}>소통할 수 있습니다.</p>
        </div>
        <div style={{position: "absolute", backgroundColor: "#1c90fb", height: "3px", left: "980px", top: "526px", width: "24px"}} data-node-id="3368:353" data-name="bar" />
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "normal", left: "980px", color: "#111", fontSize: "20px", top: "540px", letterSpacing: "-0.8px", whiteSpace: "nowrap"}} data-node-id="3368:354">
          WEHAGO 컨텐츠 공유
        </p>
        <div style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "0", left: "980px", color: "#666", fontSize: "15px", top: "576px", letterSpacing: "-0.6px", whiteSpace: "nowrap"}} data-node-id="3368:355">
          <p style={{lineHeight: "24px", marginBottom: 0}}>연락처, 거래처 등</p>
          <p style={{lineHeight: "24px", marginBottom: 0}}>WEHAGO 서비스 컨텐츠를</p>
          <p style={{lineHeight: "24px"}}>공유하며 협업할 수 있습니다.</p>
        </div>
        <div style={{position: "absolute", backgroundColor: "#1c90fb", height: "3px", left: "1280px", top: "526px", width: "24px"}} data-node-id="3368:356" data-name="bar" />
        <p style={{wordBreak: "break-word", position: "absolute", fontWeight: 700, lineHeight: "normal", left: "1280px", color: "#111", fontSize: "20px", top: "540px", letterSpacing: "-0.8px", whiteSpace: "nowrap"}} data-node-id="3368:357">
          모바일만의 쉬운 사용환경
        </p>
        <div style={{wordBreak: "break-word", position: "absolute", fontWeight: 400, lineHeight: "0", left: "1280px", color: "#666", fontSize: "15px", top: "576px", letterSpacing: "-0.6px", whiteSpace: "nowrap"}} data-node-id="3368:358">
          <p style={{lineHeight: "24px", marginBottom: 0}}>사용이 쉬운 모바일로</p>
          <p style={{lineHeight: "24px", marginBottom: 0}}>WEHAGO를 더 스마트하게</p>
          <p style={{lineHeight: "24px"}}>사용할 수 있습니다.</p>
        </div>
      </div>
      {children}
    </div>
  );
}
