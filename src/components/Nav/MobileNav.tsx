"use client";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";
import MobileItem from "./MobileItem";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="md:hidden block">
      <nav className=" flex justify-end px-5 pt-5 cursor-pointer">
        <div
          className="bg-sup inline-block p-3 rounded-full"
          onClick={() => setIsMenuOpen((pre) => !pre)}
        >
          <HiMenuAlt2 className="text-mastery" />
        </div>
      </nav>
      <MobileItem isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default MobileNav;
