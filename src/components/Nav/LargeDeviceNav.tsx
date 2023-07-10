"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

//  components
import ThemeSwitcher from "./ThemeSwitcher";
import logo from "@/assets/icons/logo.jpg";

type activeState = "home" | "about" | "contact" | "blogs" | "projects";
interface navItemsTypes {
  name: activeState;
}

const navItems: navItemsTypes[] = [
  { name: "home" },
  { name: "about" },
  { name: "contact" },
  { name: "projects" },
];

const LargeDeviceNav: React.FC = () => {
  const [active, setActive] = useState<activeState>("home");
  return (
    <nav className="into-center xl:flex hidden select-none">
      <div className=" text-sup into-center justify-between flex-1 p-4 px-10">
        <Image src={logo} alt="logo" className="w-16 h-16 rounded-full" />
        {/* menus */}
        <div className="">
          <motion.ul layoutId="navList" className="flex items-center gap-2">
            {navItems.map((val) => {
              return (
                <div key={val.name} className="relative">
                  <li
                    onClick={() => setActive(val.name)}
                    className="navList"
                    onMouseEnter={() => {
                      console.log("fired");
                    }}
                  >
                    {val.name}
                  </li>
                  {active === val.name && "navActive" && (
                    <motion.span
                      layoutId="bump"
                      className=" bg-light-blue-700 absolute top-0 left-0 inline-block w-full h-full rounded-md"
                    ></motion.span>
                  )}
                  <span
                    onClick={() => setActive(val.name)}
                    className="navList absolute top-0 left-0 z-10 text-white"
                  >
                    {val.name}
                  </span>
                </div>
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
