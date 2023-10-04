import React from "react";
import "../styles/SignupPage.scss";

import { ReactComponent as KakaoIcon } from "../assets/icons/kakao-logo.svg";
import { ReactComponent as NaverIcon } from "../assets/icons/naver-logo.svg";

import BottomLicenseText from "../components/signup/BottomLicenseText";

/* TODO: 로그인/회원가입 페이지
 * [O] 소셜로그인 페이지 퍼블리싱
 * [ ] 소셜로그인 기능 구현 (인증코드와 Redirect URI 전송해 사이트 토큰 발급받기)
 * [ ] 관심 주제 선택 페이지 퍼블리싱
 * [ ] 관심 주제 선택 기능 구현 (선택한 관심 주제 백엔드로 전달)
 */

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="content-wrap">
        <span className="title">로그인/회원가입</span>
        <span className="sub-title">
          소셜로그인을 통해 로그인/회원가입 진행
        </span>
        <div className="signup-btn-wrap">
          <button className="signup-btn">
            <KakaoIcon width={24} height={24} />
            <span className="btn-text">카카오로 시작하기</span>
          </button>
          <button className="signup-btn">
            <NaverIcon width={24} height={24} />
            <span className="btn-text">네이버로 시작하기</span>
          </button>
        </div>
      </div>
      <BottomLicenseText />
    </div>
  );
};

export default SignupPage;
