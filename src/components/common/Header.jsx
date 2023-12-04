import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import { ReactComponent as ShoppingCartSvg } from "../../assets/icons/shopping_cart.svg";

/* TODO:
 * [O] 로고 삽입
 * [O] 홈 화면 이동 버튼 생성
 * [O] 전시 페이지 이동 버튼 생성
 * [O] 마이페이지 이동 버튼 생성
 * [O] 로그인/로그아웃 버튼 생성
 */

const Header = () => {
  const [isLogin, setLogin] = useState(false);

  // 현재 경로 확인 변수
  let location = useLocation();

  return (
    <HeaderWrap>
      <Link to="/">
        <Logo style={{ width: "2.6vw" }} />
      </Link>
      <PageBtnWrap>
        {location?.pathname === "/main" ? (
          <PageBtn to="main" style={{ marginLeft: "5vw" }}>
            Home
          </PageBtn>
        ) : (
          <PageBlurBtn to="/main" style={{ marginLeft: "5vw" }}>
            Home
          </PageBlurBtn>
        )}
        {location?.pathname === "/exhibition" ? (
          <PageBtn to="exhibition">Exhibition</PageBtn>
        ) : (
          <PageBlurBtn to="exhibition">Exhibition</PageBlurBtn>
        )}
        {location?.pathname === "/mypage" ? (
          <PageBtn to="mypage">MyPage</PageBtn>
        ) : (
          <PageBlurBtn to="mypage">MyPage</PageBlurBtn>
        )}
      </PageBtnWrap>
      <RightBtnWrap>
        <PurchaseBtn to="purchase">
          <ShoppingCartSvg style={{ width: "1.5vw" }} />
        </PurchaseBtn>
        <SignupBtn to="signup" onClick={() => setLogin(!isLogin)}>
          {isLogin ? "LogIn" : "LogOut"}
        </SignupBtn>
      </RightBtnWrap>
    </HeaderWrap>
  );
};

const PurchaseBtn = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  cursor: pointer;
  color: #a88bf7;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;
const SignupBtn = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #a88bf7;
  font-size: 0.8vw;
`;
const RightBtnWrap = styled.div`
  position: absolute;
  right: 30px;
  width: max-content;
  display: flex;
  align-items: center;
  gap: 1vw;
`;
const PageBtn = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #a88bf7;
`;
const PageBlurBtn = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #a88bf7;
  filter: blur(1.2px);
  transition: 0.5s;
  &:hover {
    filter: blur(0);
  }
`;
const PageBtnWrap = styled.div`
  display: flex;
  gap: 5vw;
  font-size: 0.8vw;
`;
const HeaderWrap = styled.div`
  position: absolute;
  z-index: 100;
  display: flex;
  align-items: center;
  width: calc(100vw - 60px);
  height: 3.5vw;
  margin: 30px;
  background-color: #000;
  border-radius: 100px;
  padding-left: 1.3vw;
  box-sizing: border-box;
`;

export default Header;
