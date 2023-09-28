/* eslint-disable @next/next/no-img-element */

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

//  assets
import man from "../../assets/avatar/Saly-13.svg";
import Parallax from "./Parallax";
import BlueStar_Btn from "@/components/Unique/Buttons/BlueStar/BlueStar_Btn";
import Space_Btn from "@/components/Unique/Buttons/Space_Btn/Space_Btn";
import Link from "next/link";
import {
  CalistogaFont,
  KellySlabFont,
  PragatiNarrowFont,
  SubtitleFont,
  TitleFont,
} from "@/utils/GoogleFonts";
import Revel from "@/components/Globals/Revel";

const Hero = () => {
  return (
    <main
      className=" xl:py-8 2xl:py-40  2xl:px-10 eachSections relative h-full "
      id="home"
    >
      <div className="body-font text-gray-600">
        <div className="md:flex-row flex flex-col items-center py-32">
          <div className="lg:flex-grow xl:mr-10 2xl:mr-52 md:w-1/2 lg:pr-24 md:items-start md:text-left md:mb-0 flex flex-col items-center flex-1 mb-16 text-center">
            <Revel
              customVariants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h1
                className={`title-font sm:text-5xl md:text-3xl text-paste first-letter xl:text-6xl 2xl:text-7xl mb-8 text-2xl font-medium ${TitleFont.className} `}
              >
                MD KAWSAR ISLAM YEASIN
              </h1>
            </Revel>

            <div className="flex flex-col items-start">
              <p className=" lg:text-xl text-left   sm:text-2xl  2xl:text-3xl xl:my-7 2xl:my-10 mb-4 text-lg text-blue-200 ">
                <span className={KellySlabFont.className}>
                  Optimistic Learner, Programmer, Open For work
                </span>
                <br />
                <span className={PragatiNarrowFont.className}>
                  Loves to talk about &nbsp;
                </span>
                <span className={CalistogaFont.className}>
                  <Typewriter
                    words={[
                      "Technology",
                      "Software",
                      "Coding",
                      "Business",
                      "Finance",
                      "Ideas",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={20}
                    delaySpeed={1000}
                    // onLoopDone={
                    // onType={
                  />
                </span>
              </p>
              <p
                className={`text-md   text-left   xl:text-xl 2xl:text-3xl mb-8 leading-relaxed text-blue-100  sm:px-0 ${SubtitleFont.className}`}
              >
                A self-taught web application developer, Love to build front end
                and think that how would user interact wth the application. want
                to build Tools for Developer and contribute to open source.
              </p>
            </div>
            <div className="md:flex-row justify-start w-full items-start gap-y-4 md:gap-y-0  md:gap-x-3  md:items-center  flex flex-col ">
              <Space_Btn title="Download CV" />
              <Link href={"/blogs"}>
                <BlueStar_Btn className="2xl:text-2xl xl:text-xl text-lg">
                  Blogs
                </BlueStar_Btn>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg md:w-1/2 lg:w-full 2xl:h-1/2 2xl:ml-20 relative">
            <Image
              src={man}
              alt="man"
              priority={true}
              className=" 2xl:w-[50rem]  w-full h-full pointer-events-none select-none"
            />
            <Parallax />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Hero;
