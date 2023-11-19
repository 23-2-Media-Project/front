import React from "react";

const ExhibitionList = ({ title }) => {
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
      <div className="exhibition-img-wrap">
        <div className="exhibition-img"></div>
        <div className="exhibition-img"></div>
        <div className="exhibition-img"></div>
      </div>
    </div>
  );
};

export default ExhibitionList;

export const interests = [
  "인터렉티브",
  "감각적인",
  "우주",
  "기술",
  "사랑",
  "미디어",
];
