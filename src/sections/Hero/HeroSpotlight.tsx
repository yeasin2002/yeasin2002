import Link from "next/link";
import React from "react";

import { Meteors, Spotlight } from "@/components/aceternity";
import { SubtitleFont, TitleFont } from "@/utils";
import { cn } from "@/utils/cn";

import BlueStar_Btn from "$components/Unique/Buttons/BlueStar/BlueStar_Btn";
import Space_Btn from "$components/Unique/Buttons/Space_Btn/Space_Btn";

export function HeroSpotlight() {
  return (
    <div className="bg-grid-white/[0.02] relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center         ">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className=" relative z-10  mx-auto w-full max-w-7xl  p-4 pt-20 md:pt-0 ">
        <h1
          className={cn(
            "silver-text text-center text-4xl font-bold md:text-6xl",
            TitleFont.className,
          )}
        >
          MD KAWSAR ISLAM YEASIN
        </h1>
        <p
          className={cn(
            "mx-auto mt-4 max-w-xl text-center text-base font-normal text-neutral-300 ",
            SubtitleFont.className,
          )}
        >
          A self-taught Front-end web developer, who loves to build things for
          the web with a passion for creating visually appealing web
          applications and a flair for TypeScript and Next.Js
        </p>
        <div className="mt-10  flex flex-col items-center justify-center gap-x-4 gap-y-3 sm:gap-y-0 md:flex-row  ">
          <Space_Btn title="Download CV" />
          <Link href={"/blogs"}>
            <BlueStar_Btn className="text-lg xl:text-xl 2xl:text-2xl">
              Blogs
            </BlueStar_Btn>
          </Link>
        </div>
      </div>
      <Meteors number={20} />
    </div>
  );
}
