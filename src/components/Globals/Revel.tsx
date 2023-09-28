"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  Variants,
  Transition,
} from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};
const transitionValue = { duration: 0.5, delay: 0.2 };
interface revelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onceAnimation?: boolean;
  customVariants?: Variants;
  transition?: Transition;
}

const Revel = ({
  children,
  className = "",
  customVariants = defaultVariants,
  onceAnimation = false,
  transition = transitionValue,
}: revelProps) => {
  const reveler = useRef(null);
  const InView = useInView(reveler, { once: onceAnimation });
  const mainController = useAnimation();
  useEffect(() => {
    if (InView) {
      mainController.start("visible");
    }
  }, [InView, mainController]);

  return (
    <motion.div
      ref={reveler}
      className={className}
      variants={customVariants}
      initial="hidden"
      animate={mainController}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Revel;
