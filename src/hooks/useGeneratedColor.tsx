"use client";

import { themeContext } from "@/context/ThemeProvider";
import { useContext } from "react";

interface returnValue {
  theStyles: string;
}

interface paramsProps {
  GreenishColorValue: {
    styles: string;
  };
  MidnightBlueColorValue: {
    styles: string;
  };
}

const useGEneratedColor = ({ GreenishColorValue, MidnightBlueColorValue }: paramsProps): returnValue => {
  const { theme } = useContext(themeContext);

  let userStyle = "";

  if (theme === "Greenish") {
    userStyle = GreenishColorValue.styles;
  } else if (theme === "Midnight-Blue") {
    userStyle = MidnightBlueColorValue.styles;
  }
  {
  }

  return { theStyles: userStyle };
};

export default useGEneratedColor;
