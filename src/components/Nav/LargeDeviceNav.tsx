"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";

const RobotoFont = Roboto({
  weight: "400",
  subsets: ["latin"],
});

// ? components
// import ThemeSwitcher from "./ThemeSwitcher";
import logo from "@/assets/icons/logo.jpg";
import Logo from "../Globals/Logo";

type activeState = "Home" | "About" | "Contact" | "Projects";
interface navItemsTypes {
  name: activeState;
  link: string;
}

const navItems: navItemsTypes[] = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#aboutMe" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const LargeDeviceNav: React.FC = () => {
  const [activeNav, setActiveNav] = useState<activeState>("Home");
  return (
    <nav className="into-center md:flex bg-mastery/40 fixed top-0 left-0 z-50 hidden w-full select-none">
      <div
        className={
          " text-sup into-center justify-between flex-1 p-4 px-10 " +
          RobotoFont.className
        }
      >
        <Logo />

        {/* menus */}
        <div>
          <motion.ul className=" gap-x-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl flex text-sm font-medium tracking-wider text-white uppercase">
            {navItems.map((value, index) => {
              return (
                <motion.div key={index}>
                  <li onClick={() => setActiveNav(value.name)}>
                    <a className={"no-underline"} href={value.link}>
                      {value.name}
                    </a>
                  </li>
                  {value.name === activeNav && (
                    <motion.span
                      layoutId="motionNavPill"
                      className="bg-paste inline-block w-full h-1"
                    ></motion.span>
                  )}
                </motion.div>
              );
            })}
          </motion.ul>
        </div>
      </div>
      {/* <ThemeSwitcher /> */}
    </nav>
  );
};
export default LargeDeviceNav;
