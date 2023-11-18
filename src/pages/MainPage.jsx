import React from "react";

import { ReactComponent as Logo3d } from "../assets/logo/logo-3d.svg";

import "../styles/MainPage.scss";
/* TODO:
 * [] 3D 로고 애니메이션 적용
 * [] 이달의 전시회 버튼 컴포넌트 구현
 * [] 추천/인기/최신 전시회 목록 컴포넌트 구현
 */
const MainPage = () => {
  return (
    <div className="main-container">
      <div className="left-wrap">
        <Logo3d style={{ width: "25vw" }} className="logo" />
      </div>
      <div className="right-wrap"></div>
    </div>
  );
};

export default MainPage;
