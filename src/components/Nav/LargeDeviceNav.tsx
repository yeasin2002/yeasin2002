"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { Roboto } from "next/font/google";

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
      <div className=" text-sup into-center justify-between flex-1 p-4 px-10">
        <Logo />

        {/* menus */}
        <div>
          <motion.ul className=" gap-x-2 flex">
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
