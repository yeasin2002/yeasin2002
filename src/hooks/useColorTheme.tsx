import React, { useContext } from "react";
import { themeContext } from "@/context/ThemeProvider";

const useColorTheme = () => {
  const { theme, setTheme } = useContext(themeContext);
  return { theme, setTheme };
};

export default useColorTheme;
