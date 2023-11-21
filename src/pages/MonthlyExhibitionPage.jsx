import React from "react";
import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";

import "../styles/MonthlyExhibitionPage.scss";

const MonthlyExhibitionPage = () => {
  const x = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <div className="monthly-container">
      <motion.div
        className="circle-background"
        style={{ x, scale }}
        drag="x"
        dragSnapToOrigin
      ></motion.div>
    </div>
  );
};

export default MonthlyExhibitionPage;
