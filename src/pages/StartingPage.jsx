import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as ArrowIcon } from "../assets/icons/arrow.svg";
import { ReactComponent as Logo } from "../assets/logo/logo.svg";

import "../styles/StartingPage.scss";

/* TODO:
 * [O] 마우스 따라다니는 원형 구현
 * [O] 그 외의 UI 구현
 * [O] 페이드 애니메이션 구현
 */

const StartingPage = () => {
  const navigate = useNavigate();

  // 마우스 x,y 좌표를 담는 state
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // 마우스 움직일 때 x,y 좌표 변경하는 함수
  const setMousePosition = useCallback((e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  }, []);

  return (
    <div className="starting-container" onMouseMove={setMousePosition}>
      <div
        className="circle"
        style={{
          top: mouseY,
          left: mouseX,
        }}
      ></div>
      <div className="hidden-text-wrap">
        <div className="main-text">WEB</div>
        <div className="main-text">PORTFOLIO &</div>
        <div className="main-text">EXHIBITION</div>
        <div className="sub-text">ARTWALK</div>
      </div>
      <div className="content-wrap">
        <div className="title-wrap">
          <Logo style={{ width: "6vw" }} />
          <span className="title">ArtWalk</span>
        </div>
        <div className="license-text">©Artwalk. All Rights Reserved.</div>
      </div>
      <ArrowIcon className="arrow-icon" onClick={() => navigate("main")} />
    </div>
  );
};

export default StartingPage;
