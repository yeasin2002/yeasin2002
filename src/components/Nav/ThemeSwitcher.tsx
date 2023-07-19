"use client";

import { themeContext } from "@/context/ThemeProvider";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const ThemeSwitcher = (props: Props) => {
  const { theme, setTheme } = useContext(themeContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="into-center gap-x-2 ml-10">
      <Link className="btn bg-paste text-conf " href={"/blogs"}>
        Blogs
      </Link>
      <div className="relative top-0 left-0">
        <span
          className=" into-center bg-fog text-mastery p-3 rounded-full cursor-pointer select-none"
          onClick={() => setIsOpen((pre) => !pre)}
        >
          <BiSearch />
        </span>
        {isOpen && (
          <div className="bg-sup hover:bg-gray-500 text-mastery top-12 -z-0 absolute right-0 inline-block w-32 p-1 transition-all rounded-sm">
            <p
              className="inline-block my-1 border-b border-gray-600 cursor-pointer"
              onClick={() => {
                setTheme("Greenish");
                setIsOpen(false);
              }}
            >
              Greenish
            </p>
            <p
              className="inline-block my-1 border-b border-gray-600 cursor-pointer"
              onClick={() => {
                setTheme("Midnight-Blue");
                setIsOpen(false);
              }}
            >
              Midnight Blue
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default ThemeSwitcher;
