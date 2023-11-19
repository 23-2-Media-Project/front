import React, { useState } from "react";

import { ReactComponent as FavoriteIcon } from "../../assets/icons/favorite.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/share.svg";

const HoverContents = () => {
  return (
    <div className="hover-contents">
      <div className="title-wrap">
        <div className="title">전시회 제목</div>
        <div className="topic">전시분야</div>
      </div>
      <div className="icon-wrap">
        <FavoriteIcon style={{ width: "22px" }} />
        <div className="like-count">99</div>
        <ShareIcon style={{ width: "22px" }} />
      </div>
    </div>
  );
};
const ExhibitionList = ({ title }) => {
  // 마우스 hover 여부 state
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const interests = [
    "인터렉티브",
    "감각적인",
    "우주",
    "기술",
    "사랑",
    "미디어",
  ];

  return (
    <div className="list-wrap">
      <div className="title-wrap">
        <div className="title">{title}</div>
        {title === "추천 전시회" && (
          <div className="interests-btn-wrap">
            {interests.map((interest, idx) => {
              if (idx !== 5) {
                return <div className="interest-btn">{interest}</div>;
              }
            })}
          </div>
        )}
      </div>
      <div className="exhibition-imgs-wrap">
        <div
          className="exhibition-img-wrap"
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <div className={`exhibition-img`}></div>
          <div className={`hover-wrap ${hover && "active"}`}>
            <HoverContents />
          </div>
        </div>
        <div
          className="exhibition-img-wrap"
          onMouseOver={() => {
            setHover2(true);
          }}
          onMouseLeave={() => {
            setHover2(false);
          }}
        >
          <div className={`exhibition-img`}></div>
          <div className={`hover-wrap ${hover2 && "active"}`}>
            <HoverContents />
          </div>
        </div>
        <div
          className="exhibition-img-wrap"
          onMouseOver={() => {
            setHover3(true);
          }}
          onMouseLeave={() => {
            setHover3(false);
          }}
        >
          <div className={`exhibition-img`}></div>
          <div className={`hover-wrap ${hover3 && "active"}`}>
            <HoverContents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionList;