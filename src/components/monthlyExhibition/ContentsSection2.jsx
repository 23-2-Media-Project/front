import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as WhiteArrowIcon } from "../../assets/icons/white-arrow.svg";

import CategorySelectMenu from "./CategorySelectMenu";

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
        <CategorySelectMenu
          onClickBtn={onClickBtn}
          setClickBtn={setClickBtn}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default ContentsSection2;
