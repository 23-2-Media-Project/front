import React from "react";

import { ReactComponent as ExpandIcon } from "../../assets/icons/expand-black.svg";

const FilterWrap = ({ title, list, handleClick }) => {
  return (
    <div className="filter-wrap">
      <div className="sub-title">{title}</div>
      <div className="contents-wrap">
        {list.map((element) => (
          <div key={element} className="content-btn" onClick={handleClick}>
            {element}
          </div>
        ))}
      </div>
    </div>
  );
};
const TopicCategorySelectMenu = ({ onClickBtn, setClickBtn, handleClick }) => {
  return (
    <div
      className="select-menu-wrap"
      style={{ height: `${onClickBtn ? "max-content" : "2vw"}` }}
    >
      <div className="filters-wrap">
        <FilterWrap
          title={"주제"}
          list={interestsList}
          handleClick={handleClick}
        />
        <FilterWrap
          title={"분야"}
          list={topicsList}
          handleClick={handleClick}
        />
      </div>
      <ExpandIcon
        className="expand-btn"
        style={{
          transform: `${onClickBtn ? "rotate(0)" : "rotate(180deg)"}`,
        }}
        onClick={() => setClickBtn(!onClickBtn)}
      />
    </div>
  );
};

export default TopicCategorySelectMenu;

const topicsList = [
  "그래픽디자인",
  "3D디자인",
  "영상디자인",
  "제품디자인",
  "공간디자인",
  "앱/웹디자인",
  "게임디자인",
  "사운드디자인",
  "패션디자인",
];
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
