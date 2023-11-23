import React, { useCallback, useState } from "react";

import "../styles/ExhibitionPage.scss";

import ListHoverContents from "../components/common/ListHoverContents";
import TopicCategorySelectMenu from "../components/exhibition/TopicCategorySelectMenu";

/* TODO:
 * [] 최신순, 인기순, 필터링 버튼 및 툴팁 구현
 * [] 주제 및 분야 선택 아코디언 메뉴 구현
 * [] 전시회 목록 구현
 */

const ExhibitionPage = () => {
  const boxArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

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

  return (
    <div className="exhibition-container">
      <div className="list-wrap">
        <div className="title">전시회 목록</div>
        <TopicCategorySelectMenu
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
                <ListHoverContents />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExhibitionPage;
