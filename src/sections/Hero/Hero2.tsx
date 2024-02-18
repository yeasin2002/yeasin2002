import Link from "next/link";
import React from "react";

import { Spotlight } from "$components/aceternity";
import BlueStar_Btn from "@/components/Unique/Buttons/BlueStar/BlueStar_Btn";
import Space_Btn from "@/components/Unique/Buttons/Space_Btn/Space_Btn";
import { cn } from "@/lib/utils";
import { SubtitleFont, TitleFont } from "@/utils/GoogleFonts";

const Hero2 = () => {
  return (
    <main
      id="home"
      className={cn(
        "eachSections flex   min-h-screen flex-col items-center justify-center ",
        "h-full py-32  xl:py-8 2xl:px-10 2xl:py-40 ",
      )}
    >
      <Spotlight />
      <div className="mb-8 flex flex-col items-start space-y-2 text-center md:text-left  ">
        <h1
          //  className={cn("TitleGradientText text-5xl font-extrabold ", TitleFont.className)}
          className={cn(
            "bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl",
            TitleFont.className,
          )}
        >
          MD KAWSAR ISLAM YEASIN
        </h1>
        <p
          className={cn(
            "text-md w-full  text-center text-gray-200",
            SubtitleFont.className,
          )}
        >
          A self-taught web application developer, who loves to build things for
          the web.
        </p>
      </div>
      <div className="flex  items-center gap-x-4 ">
        <Space_Btn title="Download CV" />
        <Link href={"/blogs"}>
          <BlueStar_Btn className="text-lg xl:text-xl 2xl:text-2xl">
            Blogs
          </BlueStar_Btn>
        </Link>
      </div>
    </main>
  );
};
export default Hero2;
