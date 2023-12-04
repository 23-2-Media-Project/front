import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ListHoverContents from "../common/ListHoverContents";

import { exhibitionListData } from "../../consts/exhibitionListData";

const LikeExhibitionMenu = () => {
  const [hoverIdx, setHoverIdx] = useState(-1);

  const navigate = useNavigate();

  return (
    <div className="like-exhibition-wrap">
      {exhibitionListData.map((list, index) => {
        return index === 0 ? (
          <div
            key={index}
            className="list"
            onMouseOver={() => {
              setHoverIdx(index);
            }}
            onMouseLeave={() => {
              setHoverIdx(-1);
            }}
            style={{
              backgroundImage: `url(${list.img})`,
              backgroundSize: "cover",
              backgroundPositionY: "center",
            }}
            onClick={() => navigate("/detail")}
          >
            <div className={`hover-wrap ${hoverIdx === index && "active"}`}>
              <ListHoverContents data={list} />
            </div>
          </div>
        ) : (
          <div
            key={index}
            className="list"
            onMouseOver={() => {
              setHoverIdx(index);
            }}
            onMouseLeave={() => {
              setHoverIdx(-1);
            }}
            style={{
              backgroundImage: `url(${list.img})`,
              backgroundSize: "cover",
              backgroundPositionY: "center",
            }}
          >
            <div className={`hover-wrap ${hoverIdx === index && "active"}`}>
              <ListHoverContents data={list} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LikeExhibitionMenu;
