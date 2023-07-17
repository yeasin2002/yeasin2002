"use client";
import React, { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import useColorTheme from "@/hooks/useColorTheme";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const { color, BgColor } = useColorTheme();

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`${BgColor}  ${color}   container  `}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        style={{
          background: useMotionTemplate`
      radial-gradient(
        650px circle at ${mouseX}px ${mouseY}px,
        rgba(14, 165, 233, 0.15),
        transparent 80%
      )
    `,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageWrapper;
