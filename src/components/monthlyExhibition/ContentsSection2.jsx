import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as WhiteArrowIcon } from "../../assets/icons/white-arrow.svg";
import { ReactComponent as FavoriteIcon } from "../../assets/icons/favorite.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/share.svg";

import CategorySelectMenu from "./CategorySelectMenu";

const HoverContents = () => {
  return (
    <div className="hover-contents">
      <div className="title-wrap">
        <div className="title">전시회 제목</div>
        <div className="topic">전시분야</div>
      </div>
      <div className="icon-wrap">
        <FavoriteIcon style={{ width: "0.8vw" }} />
        <div className="like-count">99</div>
        <ShareIcon style={{ width: "0.8vw" }} />
      </div>
    </div>
  );
};

const ContentsSection2 = () => {
  const navigate = useNavigate();

  // 분야 버튼 선택 관련 로직
  const [clickTimes, setClickTimes] = useState(0);
  const handleClick = useCallback(
    (e) => {
      const elmClassList = e.target.classList.value.split(" ");
      if (!elmClassList.includes("clicked")) {
        e.target.classList.add("clicked");
        setClickTimes(clickTimes + 1);
      } else if (elmClassList.includes("clicked")) {
        e.target.classList.remove("clicked");
        setClickTimes(clickTimes - 1);
      }
    },
    [clickTimes]
  );

  // 확장 버튼 클릭 여부 state
  const [onClickBtn, setClickBtn] = useState(false);

  const [hoverIdx, setHoverIdx] = useState(-1);

  const boxArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="section2-container">
      <WhiteArrowIcon
        className="arrow-icon"
        onClick={() => {
          navigate("/monthly");
        }}
      />
      <div className="radial-gradient-circle"></div>
      <div className="list-wrap">
        <div className="title">이달의 전시회</div>
        <CategorySelectMenu
          onClickBtn={onClickBtn}
          setClickBtn={setClickBtn}
          handleClick={handleClick}
        />
        <div className="middle-line"></div>
        <div className="content-box-wrap">
          {boxArr.map((box, idx) => (
            <div
              key={idx}
              className="content-box"
              onMouseOver={() => {
                setHoverIdx(idx);
              }}
              onMouseLeave={() => {
                setHoverIdx(-1);
              }}
            >
              <div className={`hover-wrap ${hoverIdx === idx && "active"}`}>
                <HoverContents />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentsSection2;
