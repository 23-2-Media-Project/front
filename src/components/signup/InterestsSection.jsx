import React, { useState, useCallback, useEffect } from "react";
import "../../styles/SignupPage.scss";
import { useNavigate } from "react-router-dom";

const interestsList = [
  "예술",
  "문화",
  "다양성",
  "교육",
  "음식 및 음료",
  "여행",
  "자연",
  "스토리",
  "미디어",
  "플랫폼",
  "미래지향",
  "인터랙티브",
  "기념적인",
  "감성적인",
  "자연친화적인",
  "공익적인",
  "지속가능성",
  "기술",
  "우주",
  "사랑",
  "게임",
  "캐릭터",
  "사진",
  "취미",
];

const InterestsSection = () => {
  const [clickTimes, setClickTimes] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  const handleClick = useCallback(
    (e) => {
      // 3개까지만 선택 가능
      const elmClassList = e.target.classList.value.split(" ");
      if (clickTimes < 3 && !elmClassList.includes("clicked-element")) {
        e.target.classList.add("clicked-element");
        setClickTimes(clickTimes + 1);
      } else if (elmClassList.includes("clicked-element")) {
        e.target.classList.remove("clicked-element");
        setClickTimes(clickTimes - 1);
      }
    },
    [clickTimes]
  );

  const handleIsActive = () => {
    if (clickTimes > 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    handleIsActive();
  }, [clickTimes]);

  const GoToMainPage = () => {
    navigate("/main");
  };
  return (
    <section className="interests-wrap">
      <span className="title">관심 있는 주제를 선택하시오.</span>
      <div className="interest-wrap">
        {interestsList.map((interest) => {
          return (
            <div
              key={interest}
              className="interest-element"
              onClick={handleClick}
            >
              {interest}
            </div>
          );
        })}
      </div>
      {isActive ? (
        <button
          className="interest-submit-btn active-submit-btn"
          onClick={GoToMainPage}
        >
          확인
        </button>
      ) : (
        <button className="interest-submit-btn" onClick={GoToMainPage}>
          확인
        </button>
      )}
    </section>
  );
};

export default InterestsSection;
