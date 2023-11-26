import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/MyPage.scss";

import UserInfoBox from "../components/mypage/UserInfoBox";
import TabMenu from "../components/mypage/TabMenu";
import MyExhibitionMenu from "../components/mypage/MyExhibitionMenu";
import LikeExhibitionMenu from "../components/mypage/LikeExhibitionMenu";
import GuestBookMenu from "../components/mypage/GuestBookMenu";
import WishListMenu from "../components/mypage/WishListMenu";
import PurchaseHistoryMenu from "../components/mypage/PurchaseHistoryMenu";

/* TODO:
 * [O] 사용자 정보 박스 구현
 * [O] 메뉴 탭바 구현
 * [O] 나의 전시회 메뉴 구현
 * [O] 좋아요한 전시회 메뉴 구현
 * [O] 방명록 전시회 메뉴 구현
 * [O] 위시리스트 메뉴 구현
 * [] 구매내역 메뉴 구현
 */

const MyPage = () => {
  // 현재 선택된 메뉴 index를 가지는 state
  const [currentTab, setTab] = useState(0);
  // 탭바 메뉴에 대한 배열
  const menuArr = [
    { name: "나의 전시회", content: <MyExhibitionMenu /> },
    { name: "좋아요한 전시회", content: <LikeExhibitionMenu /> },
    { name: "방명록", content: <GuestBookMenu /> },
    { name: "위시리스트", content: <WishListMenu /> },
    { name: "구매내역", content: <PurchaseHistoryMenu /> },
  ];

  return (
    <div className="mypage-container">
      <UserInfoBox />
      {/* <Link to={"/writing"}>
        <button className="writing-btn">전시회 작성</button>
      </Link> */}
      <div className="right-wrap">
        <TabMenu menuArr={menuArr} setTab={setTab} currentTab={currentTab} />
        <div className="menu-contents-wrap">{menuArr[currentTab].content}</div>
      </div>
    </div>
  );
};

export default MyPage;
