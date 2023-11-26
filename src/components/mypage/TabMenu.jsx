import React from "react";
import { Link } from "react-router-dom";

const TabMenu = ({ menuArr, setTab, currentTab }) => {
  // 탭바 메뉴 클릭 handler 함수
  const selectMenuHandler = (index) => {
    setTab(index);
  };

  return (
    <div className="menu-wrap">
      <div className="menu">
        {menuArr.map((tap, index) => {
          return (
            <div
              key={index}
              onClick={() => selectMenuHandler(index)}
              className={
                currentTab === index ? "menu-text focused" : "menu-text"
              }
            >
              {tap.name}
            </div>
          );
        })}
      </div>
      <Link to={"/writing"} className="writing-btn">
        작품 업로드하기
      </Link>
    </div>
  );
};

export default TabMenu;
