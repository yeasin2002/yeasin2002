"use client";
import { HiMenuAlt2 } from "react-icons/hi";

const MobileNav = () => {
  return (
    <nav className=" xl:hidden flex justify-end px-5 pt-5">
      <div className="bg-sup inline-block p-3 rounded-full">
        <HiMenuAlt2 className="text-mastery" />
      </div>
    </nav>
  );
};

export default MobileNav;
