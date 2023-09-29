"use client";
import { RiMenu4Fill } from "react-icons/ri";
import Logo from "../Globals/Logo";
import { useState } from "react";
import MobileNavArea from "./MobileNavArea";
import { AnimatePresence } from "framer-motion";
import Revel from "../Globals/Revel";

const MobileNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <nav>
      <Revel
        className="md:hidden sticky top-0 left-0 items-center flex justify-between px-4 pt-7 "
        customVariants={{
          hidden: { y: "50", opacity: 0 },
          visible: { y: "0", opacity: 1 },
        }}
      >
        <Logo />

        <div
          style={{
            background: `rgba(71,85,105,.2)`,
            color: `hsla(0,0%,100%,.85)`,
          }}
          className="inline sm:p-4 p-2  rounded-full cursor-pointer "
          onClick={() => setIsVisible((pre) => !pre)}
        >
          <RiMenu4Fill />
        </div>
      </Revel>
      {/*  open box  */}
      <AnimatePresence>
        {isVisible && (
          <MobileNavArea isVisible={isVisible} setIsVisible={setIsVisible} />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
