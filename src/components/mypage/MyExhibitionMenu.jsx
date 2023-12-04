import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ListHoverContent from "../common/ListHoverContents";

import { exhibitionListData } from "../../consts/exhibitionListData";

const MyExhibitionMenu = () => {
  const [hoverIdx, setHoverIdx] = useState(-1);

  const navigate = useNavigate();

  return (
    <div className="my-exhibition-wrap">
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
              <ListHoverContent data={list} />
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
              <ListHoverContent data={list} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyExhibitionMenu;
