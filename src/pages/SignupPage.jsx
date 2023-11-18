import React, { useEffect, useState } from "react";
import "../styles/SignupPage.scss";

import BottomLicenseText from "../components/signup/BottomLicenseText";
import StartingSection from "../components/signup/StartingSection";
import InterestsSection from "../components/signup/InterestsSection";

/* TODO: 로그인/회원가입 페이지
 * [O] 소셜로그인 페이지 퍼블리싱
 * [ ] 관심 주제 선택 페이지 퍼블리싱
 */

const SignupPage = () => {
  // 카카오 네이버 버튼 눌림 여부 state
  const [isClickBtn, setClickBtn] = useState(false);

  useEffect(() => {
    setClickBtn(false);
  }, []);

  console.log(isClickBtn);
  return (
    <div className="signup-container">
      {isClickBtn ? (
        <InterestsSection />
      ) : (
        <StartingSection setClickBtn={setClickBtn} />
      )}
      <BottomLicenseText />
    </div>
  );
};

export default SignupPage;
