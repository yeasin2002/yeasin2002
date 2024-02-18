"use client";
import { ImagesSlider } from "@/components/aceternity/images-slider";
import { motion } from "framer-motion";
import React from "react";

import me2 from "@/assets/avatar/me/exam.jpg";
import me4 from "@/assets/avatar/me/lastDayInClg.jpg";
import me3 from "@/assets/avatar/me/pp.png";
import me1 from "@/assets/avatar/me/sagufta.jpg";

export function BgImagesSlider() {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <ImagesSlider className="w-full h-full" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col items-center justify-center w-full h-full"
      >
        <motion.p className="py-4 text-xl font-bold text-center text-transparent md:text-6xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="relative px-4 py-2 mx-auto mt-4 text-center text-white border rounded-full backdrop-blur-sm bg-emerald-300/10 border-emerald-500/20">
          <span>Join now →</span>
          <div className="absolute inset-x-0 w-3/4 h-px mx-auto -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
