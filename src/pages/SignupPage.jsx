import React, { useEffect, useState } from "react";
import "../styles/SignupPage.scss";

import BottomLicenseText from "../components/signup/BottomLicenseText";
import StartingSection from "../components/signup/StartingSection";
import InterestsSection from "../components/signup/InterestsSection";

/* TODO: 로그인/회원가입 페이지
 * [O] 소셜로그인 페이지 퍼블리싱
 * [ ] 소셜로그인 기능 구현 (인증코드와 Redirect URI 전송해 사이트 토큰 발급받기)
 * [ ] 관심 주제 선택 페이지 퍼블리싱
 * [ ] 관심 주제 선택 기능 구현 (선택한 관심 주제 백엔드로 전달)
 */

const SignupPage = () => {
  //FIXME: 카카오 네이버 버튼 눌림 여부 state (추후 첫 유저인지 기존 유저인지 구분에 따라 관심사 설정 페이지가 보일지 말지 결정)
  const [isClickBtn, setClickBtn] = useState(false);

  //FIXME: 수정 후 삭제 필요
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
