import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Logo3d } from "../assets/logo/logo-3d.svg";

import "../styles/MainPage.scss";

/* TODO:
 * [O] 3D 로고 애니메이션 적용
 * [O] 이달의 전시회 버튼 컴포넌트 구현
 * [] 추천/인기/최신 전시회 목록 컴포넌트 구현
 */
const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="left-wrap">
        <div className="logo-wrap">
          <Logo3d style={{ width: "25vw" }} className="logo" />
        </div>
        <div className="monthly-exhibition-btn-wrap">
          <div className="btn-title">12월의 전시회 입장하기</div>
          <button
            className="monthly-exhibition-btn"
            onClick={() => {
              navigate("/mothly");
            }}
          >
            <div className="btn-text white">CHRISTMAS</div>
            <div className="btn-text green">CHRISTMAS</div>
            <div className="btn-text red">CHRISTMAS</div>
          </button>
        </div>
      </div>
      <div className="right-wrap"></div>
    </div>
  );
};

export default MainPage;
