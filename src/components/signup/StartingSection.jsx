import React from "react";

import { ReactComponent as KakaoIcon } from "../../assets/icons/kakao-logo.svg";
import { ReactComponent as NaverIcon } from "../../assets/icons/naver-logo.svg";

const StartingSection = () => {
  return (
    <div className="content-wrap">
      <span className="title">로그인/회원가입</span>
      <span className="sub-title">소셜로그인을 통해 로그인/회원가입 진행</span>
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
  );
};

export default StartingSection;
