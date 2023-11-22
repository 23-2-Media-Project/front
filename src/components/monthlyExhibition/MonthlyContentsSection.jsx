import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as WhiteArrowIcon } from "../../assets/icons/white-arrow.svg";

const MonthlyContentsSection = () => {
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
      <div className="middle-wrap"></div>
      <div className="right-wrap">
        <WhiteArrowIcon className="arrow-icon rotate" />
      </div>
    </>
  );
};

export default MonthlyContentsSection;
