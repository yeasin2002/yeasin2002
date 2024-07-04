import Link from "next/link";
import React from "react";

import { Meteors, Spotlight } from "@/components/aceternity";
import { SubtitleFont, TitleFont } from "@/utils";
import { cn } from "@/utils/cn";

import { HireMe } from "$components/Buttons/HireMe";

import Space_Btn from "$components/Unique/Buttons/Space_Btn/Space_Btn";

export function HeroSpotlight() {
  return (
    <div className="bg-grid-white/[0.02] relative flex  w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center h-screen         ">
      <Spotlight
        className="left-0 -top-40 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 w-full p-4 pt-20 mx-auto max-w-7xl md:pt-0">
        <h1
          className={cn(
            "silver-text text-center text-4xl font-bold md:text-6xl "
          )}
        >
          MD KAWSAR ISLAM YEASIN
        </h1>
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-center text-base font-normal text-neutral-300 ",
            SubtitleFont.className
          )}
        >
          Hello, I am yeasin form Dhaka and I am 21 year old. {`I'm`} a
          self-taught front-end focused Full Stack Web Developer. TypeScript and
          Nextjs enthusiast. I have been doing freelance project from last 1
          year and working with teams to make good projects.
          <br />
          {`Let's`} build something amazing together! 🖤
        </p>
        <div className="flex flex-col items-center justify-center mt-10 gap-x-4 gap-y-3 sm:gap-y-0 md:flex-row ">
          <Space_Btn title="Download CV" />
          <HireMe />
        </div>
      </div>
      <Meteors number={20} />
    </div>
  );
}
