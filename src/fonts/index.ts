import Local from "next/font/local";

const boldonse = Local({
  src: "./local/Boldonse.ttf",
  display: "swap",
  variable: "--font-boldonse",
  weight: "400",
});

const fontList = [boldonse];

export const fontVariables = fontList.map((font) => font.variable).join(" ");
