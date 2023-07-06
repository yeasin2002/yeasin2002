"use client";

import { themeContext } from "@/context/ThemeProvider";
import React, { useContext } from "react";

type Props = {};
const Hero = (props: Props) => {
  const { setTheme, theme } = useContext(themeContext);

  return (
    <div>
      <h1 className="text-lime-700 text-2xl font-bold">{theme}</h1>
      <div className="gap-x-4 flex">
        <div
          onClick={() => {
            setTheme("Midnight-Blue");
          }}
        >
          Midnight-Blue
        </div>
        <div
          onClick={() => {
            setTheme("Greenish");
          }}
        >
          Greenish
        </div>
      </div>
    </div>
  );
};

export default Hero;
