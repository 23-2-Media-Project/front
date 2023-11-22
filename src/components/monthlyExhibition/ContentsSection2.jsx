import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as WhiteArrowIcon } from "../../assets/icons/white-arrow.svg";
import { ReactComponent as ExpandIcon } from "../../assets/icons/expand.svg";

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
  console.log(onClickBtn);
  return (
    <div className="section2-container">
      <WhiteArrowIcon
        className="arrow-icon"
        onClick={() => {
          navigate("/monthly");
        }}
      />
      <div className="list-wrap">
        <div className="title">이달의 전시회</div>
        <div className="category-wrap">
          <div className="sub-title">분야</div>
          <div
            className="interests-wrap"
            style={{ height: `${onClickBtn ? "max-content" : "2vw"}` }}
          >
            {interestsList.map((interest) => (
              <div
                key={interest}
                className="interest-btn"
                onClick={handleClick}
              >
                {interest}
              </div>
            ))}
          </div>
          <ExpandIcon
            className="expand-btn"
            style={{
              transform: `${onClickBtn ? "rotate(180deg)" : "rotate(0deg)"}`,
            }}
            onClick={() => setClickBtn(!onClickBtn)}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentsSection2;

const interestsList = [
  "예술",
  "문화",
  "다양성",
  "교육",
  "음식 및 음료",
  "여행",
  "자연",
  "스토리",
  "미디어",
  "플랫폼",
  "미래지향",
  "인터랙티브",
  "기념적인",
  "감성적인",
  "자연친화적인",
  "공익적인",
  "지속가능성",
  "기술",
  "우주",
  "사랑",
  "게임",
  "캐릭터",
  "사진",
  "취미",
];
