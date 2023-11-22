import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/logo/logo.svg";

/* TODO:
 * [O] 로고 삽입
 * [O] 홈 화면 이동 버튼 생성
 * [O] 전시 페이지 이동 버튼 생성
 * [O] 마이페이지 이동 버튼 생성
 * [O] 로그인/로그아웃 버튼 생성
 */

const Header = () => {
  // 현재 경로 확인 변수
  let location = useLocation();

  return (
    <HeaderWrap>
      <Link to="/">
        <Logo style={{ width: "50px" }} />
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
      <SignupBtn to="signup">LogIn</SignupBtn>
    </HeaderWrap>
  );
};

const SignupBtn = styled(Link)`
  position: absolute;
  right: 30px;
  width: max-content;
  text-decoration: none;
  cursor: pointer;
  color: #a88bf7;
  font-size: 14px;
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
  font-size: 14px;
`;
const HeaderWrap = styled.div`
  position: absolute;
  z-index: 100;
  display: flex;
  align-items: center;
  width: calc(100vw - 60px);
  height: 60px;
  margin: 30px;
  background-color: #000;
  border-radius: 100px;
  padding-left: 20px;
  box-sizing: border-box;
`;

export default Header;
