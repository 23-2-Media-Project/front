import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as WhiteArrowIcon } from "../../assets/icons/white-arrow.svg";
import { ReactComponent as FavoriteIcon } from "../../assets/icons/white-favorite.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/white-share.svg";

import { monthlyData } from "../../consts/monthlyData";

const RecommendedExhibition = ({ data }) => {
  return (
    <div className="recommended-wrap">
      <div
        className="img"
        style={{
          backgroundImage: `url(${data.img})`,
          backgroundSize: "contain",
        }}
      ></div>
      <div className="text-wrap">
        <div className="main-text-wrap">
          <div className="title">{data.title}</div>
          <div className="name">{data.artist}</div>
        </div>
        <div className="sub-text-wrap">
          <div className="category">{data.category}</div>
          <div className="desc">{data.desc}</div>
          <div className="icon-wrap">
            <FavoriteIcon style={{ width: "1vw", fill: "#fff" }} />
            <div className="like-count">{data.like}</div>
            <ShareIcon style={{ width: "0.8vw" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentsSection1 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="left-wrap">
        <WhiteArrowIcon
          className="arrow-icon"
          onClick={() => {
            navigate("/main");
          }}
        />
      </div>
      <div className="middle-wrap">
        <div className="middle-top-wrap">
          <div className="subtitle-text">12월의 전시회</div>
          <div className="title-wrap">
            <div className="title-text white">CHRISTMAS</div>
            <div className="title-text red">CHRISTMAS</div>
            <div className="title-text green">CHRISTMAS</div>
          </div>
          <div className="desc-wrap">
            <div className="vertical-line"></div>
            <div className="desc-text">
              12월, ‘크리스마스'를 주제로 하는 다양한 예술가들의 전시회를 접하며
              따뜻한 겨울을 보내보세요
            </div>
          </div>
        </div>
        <div className="middle-bottom-wrap">
          <RecommendedExhibition data={monthlyData[0]} />
          <RecommendedExhibition data={monthlyData[1]} />
        </div>
      </div>
      <div className="right-wrap">
        <WhiteArrowIcon
          className="arrow-icon rotate"
          onClick={() => navigate("/monthly/list")}
        />
      </div>
    </>
  );
};

export default ContentsSection1;
