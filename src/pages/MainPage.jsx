import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Logo3d } from "../assets/logo/logo-3d.svg";

import "../styles/MainPage.scss";

import ExhibitionList from "../components/main/ExhibitionList";

import {
  exhibitionData,
  exhibitionData2,
  exhibitionData3,
} from "../consts/exhibitionData";

/* TODO:
 * [O] 3D 로고 애니메이션 적용
 * [O] 이달의 전시회 버튼 컴포넌트 구현
 * [O] 추천/인기/최신 전시회 섹션 컴포넌트 구현
 * [] 추천/인기/최신 전시회 목록 클릭시 상세 페이지 이동 구현
 */
const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="left-wrap">
        <div className="logo-wrap">
          <Logo3d style={{ width: "350px" }} className="logo" />
        </div>
        <div className="monthly-exhibition-btn-wrap">
          <div className="btn-title">12월의 전시회 입장하기</div>
          <button
            className="monthly-exhibition-btn"
            onClick={() => {
              navigate("/monthly");
            }}
          >
            <div className="btn-text white">CHRISTMAS</div>
            <div className="btn-text green">CHRISTMAS</div>
            <div className="btn-text red">CHRISTMAS</div>
          </button>
        </div>
      </div>
      <div className="right-wrap">
        <ExhibitionList title={"추천 전시회"} data={exhibitionData} />
        <ExhibitionList title={"인기 전시회"} data={exhibitionData2} />
        <ExhibitionList title={"최신 전시회"} data={exhibitionData3} />
      </div>
    </div>
  );
};

export default MainPage;
