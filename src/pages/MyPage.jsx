import React from "react";
import { Link } from "react-router-dom";

import "../styles/MyPage.scss";

const MyPage = () => {
  return (
    <div className="mypage-container">
      {/* FIXME: 임시버튼으로 수정 필요 */}
      <Link to={"/writing"}>
        <button className="writing-btn">전시회 작성</button>
      </Link>
    </div>
  );
};

export default MyPage;
