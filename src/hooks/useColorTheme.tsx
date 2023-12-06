"use client";

import React, { useContext } from "react";
import { themeContext } from "@/context/ThemeProvider";

type themeColor = {
  color: string;
  BgColor: string;
};

//  colors types
type colorReturn = "text-sup" | "";
type bgColorReturn = "" | "bg-gradient-to-r from-mint-100 to-mint-200" | "bg-gradient-to-r from-conf to-mastery";

const useColorTheme = (): themeColor => {
  let color: colorReturn = "";
  let BgColor: bgColorReturn = "";
  const { theme, setTheme } = useContext(themeContext);
  if (theme === "Greenish") {
    color = "text-sup";
    BgColor = "bg-gradient-to-r from-mint-100 to-mint-200";
  } else if (theme === "Midnight-Blue") {
    color = "text-sup";
    BgColor = "bg-gradient-to-r from-conf to-mastery";
  }

  return { color, BgColor };
};

export default useColorTheme;
