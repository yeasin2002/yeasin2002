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
    <nav className="flex justify-between px-10 warmFlame p-4  text-sup">
      <div>Logo </div>
      {/* menus */}
      <div className="">
        <motion.ul layoutId="navList" className="flex gap-2  items-center">
          {navItems.map((val) => {
            return (
              <div key={val.name} className="relative">
                <li onClick={() => setActive(val.name)} className="navList">
                  {val.name}
                </li>
                {active === val.name && "navActive" && (
                  <motion.span
                    // transition={{
                    //   duration: 5,
                    // }}
                    layoutId="bump"
                    className=" inline-block absolute top-0 left-0 w-full h-full rounded-md bg-light-blue-700   "
                  ></motion.span>
                )}
                <span
                  onClick={() => setActive(val.name)}
                  className="absolute top-0 left-0  z-10 text-white navList  "
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
