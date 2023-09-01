"use client";
import React from "react";
import Image from "next/image";

//  components
// import ThemeSwitcher from "./ThemeSwitcher";
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

const LargeDeviceNav: React.FC = () => {
  return (
    <nav className="into-center md:flex bg-mastery fixed top-0 left-0 z-50 hidden w-full select-none">
      <div className=" text-sup into-center justify-between flex-1 p-4 px-10">
        <Image src={logo} alt="logo" className="w-16 h-16 rounded-full" />

        {/* menus */}
        <div>
          <ul className=" gap-x-2 flex">
            {navItems.map((value, index) => {
              return (
                <div key={index}>
                  <li className="">
                    <a className={"no-underline"} href={value.link}>
                      {value.name}
                    </a>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <ThemeSwitcher /> */}
    </nav>
  );
};
export default LargeDeviceNav;
