import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/* FIXME: 헤더 컴포넌트 (임시로 디자인 완료 후 수정 필요)
 * TODO:
 * [ ] 로고 삽입
 * [ ] 홈 화면 이동 버튼 생성
 * [ ] 전시 페이지 이동 버튼 생성
 * [ ] 파트너 페이지 이동 버튼 생성
 * [ ] 마이페이지 이동 버튼 생성
 * [ ] 우측 로그인 전 : 로그인/회원가입 버튼 생성
 * [ ] 우측 로그인 후 : 프로필 사진 및 드롭다운
 *
 */
const Header = () => {
  return (
    <HeaderWrap>
      <PageBtnWrap>
        <PageBtn to="/">홈</PageBtn>
        <PageBtn>전시</PageBtn>
        <PageBtn>마이페이지</PageBtn>
      </PageBtnWrap>
      <SignupBtn to="signup">로그인/회원가입</SignupBtn>
    </HeaderWrap>
  );
};

const SignupBtn = styled(Link)`
  position: absolute;
  right: 2%;
  width: max-content;
  text-decoration: none;
  cursor: pointer;
  color: #000;
`;
const PageBtn = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #000;
`;
const PageBtnWrap = styled.div`
  display: flex;
  gap: 8vw;
`;
const HeaderWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80px;
  background-color: red;
  padding: 0 2%;
  box-sizing: border-box;
`;

export default Header;
