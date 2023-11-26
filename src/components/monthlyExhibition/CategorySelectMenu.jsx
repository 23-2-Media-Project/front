import React from "react";

import { ReactComponent as ExpandIcon } from "../../assets/icons/expand.svg";

const CategorySelectMenu = ({ onClickBtn, setClickBtn, handleClick }) => {
  return (
    <div className="category-wrap">
      <div className="sub-title">분야</div>
      <div
        className="interests-wrap"
        style={{ height: `${onClickBtn ? "max-content" : "2vw"}` }}
      >
        {interestsList.map((interest) => (
          <div key={interest} className="interest-btn" onClick={handleClick}>
            {interest}
          </div>
        ))}
      </div>
      <ExpandIcon
        className="expand-btn"
        style={{
          transform: `${onClickBtn ? "rotate(0deg)" : "rotate(180deg)"}`,
        }}
        onClick={() => setClickBtn(!onClickBtn)}
      />
    </div>
  );
};

export default CategorySelectMenu;

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
