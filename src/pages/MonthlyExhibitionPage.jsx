import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";

import "../styles/MonthlyExhibitionPage.scss";

import MonthlyContentsSection from "../components/monthlyExhibition/MonthlyContentsSection";

/* TODO:
 * [O] 배경 linear-gradient 적용
 * [O] 스크롤시 커지는 검은색 원형 구현
 * [O] 스크롤 완료시 가운데 radial 그라디언트 생성
 * [O] 스크롤 완료시 이달의 전시회 내용 및 추천 전시회 구현
 */
const MonthlyExhibitionPage = () => {
  // 스크롤시 크기 변형되는 애니메이션 관련
  const x = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  // 스크롤시 이달의 전시회 제목과 추천 전시회 등 상세 요소들 보이게 하는 코드
  const scrollRef = useRef();
  const [position, setPosition] = useState(0); // 현재 스크롤 위치를 담는 state
  const [isShow, setIsShow] = useState(false); // 스크롤시 true가 되며 요소를 보이게 하는 state
  // 스크롤 핸들러 함수
  function onScroll() {
    setPosition(window.scrollY);
  }
  // 스크롤 이벤트 리스너
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  // 현재 스크롤 위치가 0보다 크면 isShow state true 아니면 false
  useEffect(() => {
    if (position > 0.5) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [position]);

  return (
    <div className="monthly-container" ref={scrollRef}>
      <motion.div
        className="circle-background"
        style={{ x, scale }}
        drag="x"
        dragSnapToOrigin
      ></motion.div>
      <div
        className="circle-inner-wrap"
        style={{ opacity: `${isShow ? "1" : "0"}` }}
      >
        <MonthlyContentsSection />
        <div className="radial-gradient-circle"></div>
      </div>
    </div>
  );
};

export default MonthlyExhibitionPage;
