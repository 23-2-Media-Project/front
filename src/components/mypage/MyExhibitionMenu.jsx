import React, { useState } from "react";

import ListHoverContent from "../common/ListHoverContents";

const MyExhibitionMenu = () => {
  const [hoverIdx, setHoverIdx] = useState(-1);

  return (
    <div className="my-exhibition-wrap">
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
              <ListHoverContent />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyExhibitionMenu;

const lists = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
