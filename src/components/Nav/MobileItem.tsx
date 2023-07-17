import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileItem = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  return (
    <motion.aside
      animate={{
        left: isMenuOpen ? 0 : 1000,
      }}
      className="bg-lime-700 fixed top-0 right-0 z-50 w-screen h-full px-10 select-none"
    >
      <div className="flex justify-between">
        <span>logo</span>
        <span
          className=" text-mastery bg-yellow-200 rounded-full"
          onClick={() => setIsMenuOpen(false)}
        >
          menu
        </span>
      </div>
    </motion.aside>
  );
};
export default MobileItem;
