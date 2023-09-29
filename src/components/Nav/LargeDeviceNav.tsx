"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { SansitaFont } from "@/utils/GoogleFonts";

// ? Icons
import { BiHomeAlt2 as HomeIcon } from "react-icons/bi";
import { BsPersonCheckFill as AboutIcon } from "react-icons/bs";
import { CgWorkAlt as WorkIcon } from "react-icons/cg";
import { RiContactsLine as ContactIcon } from "react-icons/ri";

// ? components
// import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "../Globals/Logo";

type activeState = "Home" | "About" | "Contact" | "Projects";
interface navItemsTypes {
  name: activeState;
  link: string;
  Icon?: any;
}

export const navItems: navItemsTypes[] = [
  { name: "Home", link: "#home", Icon: HomeIcon },
  { name: "About", link: "#aboutMe", Icon: AboutIcon },
  { name: "Projects", link: "#projects", Icon: WorkIcon },
  { name: "Contact", link: "#contact", Icon: ContactIcon },
];

const LargeDeviceNav: React.FC = () => {
  const [activeNav, setActiveNav] = useState<activeState>("Home");
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollValue, setScrollValue] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollHandler = () => {
    setScrollValue(window.scrollY);
    if (scrollValue > window.scrollY) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return window.addEventListener("scroll", scrollHandler);
  }, [scrollHandler]);
  const navAnimationVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
      },
    },
    exit: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    <AnimatePresence>
      {isScrolling && (
        <motion.nav
          variants={navAnimationVariants}
          initial="hidden"
          animate="open"
          exit="exit"
          className="into-center md:flex bg-mastery/40 fixed top-0 left-0 z-50 hidden w-full select-none"
          style={{
            background: `hsla(0,0%,100%,.064)`,
            backdropFilter: `blur(10px)`,
          }}
        >
          <div
            className={
              " text-sup into-center justify-between flex-1 py-3 xl:py-4 2xl:py-6 px-10 " +
              SansitaFont.className
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
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
export default LargeDeviceNav;

//  how to add revel animation using framer motion
