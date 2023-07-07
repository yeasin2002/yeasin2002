"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

type activeState = "home" | "about" | "contact" | "blogs";
interface navItemsTypes {
  name: activeState;
  to: string;
}

const navItems: navItemsTypes[] = [
  { name: "home", to: "" },
  { name: "about", to: "" },
  { name: "contact", to: "" },
  { name: "blogs", to: "/blogs" },
];

const LargeDeviceNav: React.FC = () => {
  const [active, setActive] = useState<activeState>("home");
  return (
    <nav className=" text-sup xl:flex justify-between hidden p-4 px-10">
      <div>Logo </div>
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
    </nav>
  );
};
export default LargeDeviceNav;
