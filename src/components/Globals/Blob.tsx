"use client";
import { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import React from "react";

const Blob = () => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <>
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        onMouseMove={handleMouseMove}
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
        blob
      </motion.div>
    </>
  );
};

export default Blob;
