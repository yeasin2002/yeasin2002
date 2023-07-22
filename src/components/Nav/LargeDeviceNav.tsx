"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

//  components
import ThemeSwitcher from "./ThemeSwitcher";
import logo from "@/assets/icons/logo.jpg";

type activeState = "Home" | "About" | "Contact" | "Blogs" | "Projects";
interface navItemsTypes {
  name: activeState;
  link: string;
}

const navItems: navItemsTypes[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "#aboutMe" },
  { name: "Contact", link: "/" },
  { name: "Projects", link: "/" },
];

const LargeDeviceNav: React.FC = () => {
  // const [active, setActive] = useState<activeState>("home");
  return (
    <nav className="into-center md:flex hidden select-none">
      <div className=" text-sup into-center justify-between flex-1 p-4 px-10">
        <Image src={logo} alt="logo" className="w-16 h-16 rounded-full" />
        {/* menus */}
        <div className="">
          <motion.ul layoutId="navList" className="flex items-center gap-2">
            {navItems.map((val) => {
              return (
                <li
                  className="hover:text-mint-100 bg-paste text-mint-200 px-2 transition-all rounded-lg cursor-pointer"
                  key={val.name}
                >
                  <a href={val.link}> {val.name}</a>
                </li>
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
