import { Montserrat, Quicksand } from "next/font/google";
import Local from "next/font/local";

const boldonse = Local({
  src: "./local/Boldonse.ttf",
  display: "swap",
  variable: "--font-boldonse",
  weight: "400",
});

const primary = Quicksand({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400", "500", "700"],
});

const secondary = Montserrat({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["400", "500", "700"],
});

const fontList = [boldonse, primary, secondary];

export const fontVariables = fontList.map((font) => font.variable).join(" ");
