import BlueStar_Btn from "$components/Unique/Buttons/BlueStar/BlueStar_Btn";
import Space_Btn from "$components/Unique/Buttons/Space_Btn/Space_Btn";
import { Spotlight } from "@/components/aceternity";
import { SubtitleFont, TitleFont } from "@/utils";
import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

export function HeroSpotlight() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 ">
        <h1
         className={cn("text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50" , TitleFont.className )}
         >
          MD KAWSAR ISLAM YEASIN
        </h1>
        <p 
        className={cn("mt-4 font-normal text-base text-neutral-300 max-w-xl text-center mx-auto ", SubtitleFont.className )}
        >
        A self-taught Front-end web developer, who loves to build things for the web     with a passion for creating visually appealing web applications and a flair for TypeScript and Next.Js
        </p>

        <div className="flex  items-center gap-x-4 justify-center mt-10 ">
              <Space_Btn
                title="Download CV" />
              <Link href={"/blogs"}>
                <BlueStar_Btn className="2xl:text-2xl xl:text-xl text-lg">Blogs</BlueStar_Btn>
              </Link>
            </div>
      </div>
    </div>
  );
}
