"use client";

import { createContext, useState } from "react";
import React from "react";

interface contextTypes {
  theme: "default" | "warmFlame";
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const themeContext = createContext<contextTypes>({
  theme: "default",
  setTheme: () => {},
});
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("default");

  return (
    <themeContext.Provider
      value={{
        theme: "default",
        setTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
