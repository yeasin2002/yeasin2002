"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

//  components
import ThemeSwitcher from "./ThemeSwitcher";
import logo from "@/assets/icons/logo.jpg";

type activeState = "Home" | "About" | "Contact" | "Projects";
interface navItemsTypes {
  name: activeState;
  link: string;
}

const navItems: navItemsTypes[] = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#aboutMe" },
  { name: "Contact", link: "#contact" },
  { name: "Projects", link: "#projects" },
];

type activeStatus = "Home" | "About" | "Contact" | "Projects";

const LargeDeviceNav: React.FC = () => {
  const [activeBar, setActiveBar] = useState<activeStatus>("Home");
  // const [active, setActive] = useState<activeState>("home");
  return (
    <nav className="into-center md:flex bg-mastery fixed top-0 left-0 z-50 hidden w-full select-none">
      <div className=" text-sup into-center justify-between flex-1 p-4 px-10">
        <Image src={logo} alt="logo" className="w-16 h-16 rounded-full" />
        {/* menus */}
        <div className="">
          <motion.ul layoutId="navList" className=" flex items-center gap-2">
            {navItems.map((val) => {
              return (
                <>
                  <li
                    onClick={() => setActiveBar(val.name)}
                    className="text-sup  relative z-0 transition-all"
                    key={val.name}
                  >
                    <a href={val.link} className="px-2 cursor-pointer">
                      {" "}
                      {val.name}
                    </a>
                    {activeBar === val.name && (
                      <motion.div
                        layoutId="active-pill"
                        className="bg-paste text-conf absolute bottom-0 left-0 w-full h-1 px-2 rounded-full"
                      ></motion.div>
                    )}
                  </li>
                </>
              );
            })}
          </motion.ul>
        </div>
      </div>
      <ThemeSwitcher />
    </nav>
  );
};
export default LargeDeviceNav;
