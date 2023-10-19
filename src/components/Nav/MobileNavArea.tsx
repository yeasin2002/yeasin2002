"use client";

import React, { Dispatch, SetStateAction } from "react";
import Logo from "../Globals/Logo";
import Revel from "../Globals/Revel";
import { navItems } from "./LargeDeviceNav";

import { Variants, motion } from "framer-motion";
import FreePalestine from "../Globals/FreePalestine";
import Cross from "../Icons/Cross";
// import { GiCrossMark } from "react-icons/gi";

type mobileAre = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};
const menuAnimation: Variants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const LinkAnimation: Variants = {
  initial: {
    y: "-30vh",
    transition: {
      duration: 0.5,
    },
  },
  open: (index) => ({
    y: "0",
    transition: {
      duration: 0.5 * index,
    },
  }),
};

const MobileNavArea = ({ isVisible, setIsVisible }: mobileAre) => {
  return (
    <motion.section
      className="fixed top-0 origin-top left-0 bg-black w-full h-full z-50   "
      variants={menuAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Revel
        className="flex items-center justify-between px-4 py-8"
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        customVariants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Logo />
        <div
          className="cursor-pointer p-3  rounded-full "
          onClick={() => setIsVisible(false)}
          style={{
            background: `rgba(71,85,105,.2)`,
            color: `hsla(0,0%,100%,.85)`,
          }}
        >
          <Cross />
        </div>
      </Revel>

      {/*  body  */}
      <div className="flex items-center justify-center  flex-col gap-y-10 mt-10">
        {navItems.map((val, index) => {
          return (
            <motion.a
              variants={LinkAnimation}
              initial="initial"
              animate="open"
              href={val.link}
              key={val.name}
              custom={index}
              onClick={() => setIsVisible(false)}
              className="flex items-center gap-x-3 text-2xl font-bold text-gray-400 "
            >
              <val.Icon />
              <p> {val.name}</p>
            </motion.a>
          );
        })}
      </div>
      <FreePalestine className="bottom-4 absolute left-0  w-full flex items-center justify-center  gap-x-2" />
    </motion.section>
  );
};

export default MobileNavArea;
