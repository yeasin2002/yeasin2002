import Image from "next/image";
import React from "react";

import BlueStar_Btn from "@/components/Unique/Buttons/BlueStar/BlueStar_Btn";
import Space_Btn from "@/components/Unique/Buttons/Space_Btn/Space_Btn";
import Parallax from "./Parallax";
import Title from "./Title";

import man from "@/assets/avatar/Saly-13.svg";
import { PragatiNarrowFont, salsa } from "@/utils/GoogleFonts";
import Link from "next/link";
import TypeEffect from "./TypeEffect";

const Hero = () => {
  return (
    <main
      className=" eachSections relative  h-full xl:py-8 2xl:px-10 2xl:py-40 "
      id="home"
    >
      <div className="body-font text-gray-600">
        <div className="flex flex-col items-center py-32 md:flex-row">
          <div className="mb-16 flex flex-1 flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:text-left lg:flex-grow lg:pr-24 xl:mr-10 2xl:mr-52">
            <Title />

            <div className="mb-8 flex flex-col items-start space-y-2 text-center md:text-left">
              <p
                className={`text-md    xl:text-x  l leading-relaxed  text-blue-100 sm:px-0  2xl:text-3xl ${salsa.className}`}
              >
                A self-taught web application developer, who loves to build
                things for the web.
              </p>
              <p className="   mb-4    text-center text-lg text-blue-200 xl:my-7 2xl:my-10 ">
                <span className={PragatiNarrowFont.className}>
                  Loves to talk about &nbsp;
                </span>
                <TypeEffect />
              </p>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-y-4  md:flex-row  md:items-center  md:gap-x-3 md:gap-y-0 ">
              <Space_Btn title="Download CV" />
              <Link href={"/blogs"}>
                <BlueStar_Btn className="text-lg xl:text-xl 2xl:text-2xl">
                  Blogs
                </BlueStar_Btn>
              </Link>
            </div>
          </div>
          <div className="relative md:w-1/2 lg:w-full lg:max-w-lg 2xl:ml-20 2xl:h-1/2">
            <Image
              src={man}
              alt="man"
              priority={true}
              className=" pointer-events-none  h-full w-full select-none 2xl:w-[50rem]"
            />
            <Parallax />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Hero;
