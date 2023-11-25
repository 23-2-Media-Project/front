import React from "react";
import { Link } from "react-router-dom";

import "../styles/MyPage.scss";

import UserInfoBox from "../components/mypage/UserInfoBox";

/* TODO:
 * [O] 사용자 정보 박스 구현
 * [] 메뉴 탭바 구현
 * [] 나의 전시회 메뉴 구현
 * [] 좋아요한 전시회 메뉴 구현
 * [] 방명록 전시회 메뉴 구현
 * [] 위시리스트 메뉴 구현
 * [] 구매내역 메뉴 구현
 */
const MyPage = () => {
  return (
    <div className="mypage-container">
      {/* FIXME: 임시버튼으로 수정 필요 */}
      <UserInfoBox />
      <Link to={"/writing"}>
        <button className="writing-btn">전시회 작성</button>
      </Link>
    </div>
  );
};

export default MyPage;
