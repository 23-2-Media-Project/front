import React, { useCallback, useState } from "react";
import "../styles/StartingPage.scss";

const StartingPage = () => {
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
    </div>
  );
};

export default StartingPage;
