import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/logo/logo.svg";

/* FIXME: 헤더 컴포넌트 (임시로 디자인 완료 후 수정 필요)
 * TODO:
 * [O] 로고 삽입
 * [ ] 홈 화면 이동 버튼 생성
 * [ ] 전시 페이지 이동 버튼 생성
 * [ ] 마이페이지 이동 버튼 생성
 * [ ] 로그인/로그라웃 버튼 생성
 *
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
        {location?.pathname === "/" ? (
          <PageBtn to="/" style={{ marginLeft: "5vw" }}>
            Home
          </PageBtn>
        ) : (
          <PageBlurBtn to="/" style={{ marginLeft: "5vw" }}>
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
`;
const HeaderWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: max;
  height: 60px;
  margin: 30px 30px 0 30px;
  background-color: #000;
  border-radius: 100px;
  padding-left: 20px;
  box-sizing: border-box;
`;

export default Header;
