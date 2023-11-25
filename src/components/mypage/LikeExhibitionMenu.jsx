import React, { useState } from "react";

import ListHoverContents from "../common/ListHoverContents";

const LikeExhibitionMenu = () => {
  const [hoverIdx, setHoverIdx] = useState(-1);

  return (
    <div className="like-exhibition-wrap">
      {lists.map((list, index) => {
        return (
          <div
            key={index}
            className="list"
            onMouseOver={() => {
              setHoverIdx(index);
            }}
            onMouseLeave={() => {
              setHoverIdx(-1);
            }}
          >
            <div className={`hover-wrap ${hoverIdx === index && "active"}`}>
              <ListHoverContents />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LikeExhibitionMenu;

const lists = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
