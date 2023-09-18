/* eslint-disable @next/next/no-img-element */

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { BsDownload } from "react-icons/bs";

//  assets
import man from "../../assets/avatar/Saly-13.svg";
import Parallax from "./Parallax";
import BlueStar_Btn from "@/components/Unique/Buttons/BlueStar/BlueStar_Btn";
import KindCougar from "@/components/Unique/Buttons/kindCougar/KindCougar";

const Hero = () => {
  return (
    <main className="h-full relative" id="home">
      <section className="body-font text-gray-600">
        <div className="md:flex-row  flex flex-col items-center   py-32 ">
          <div className="lg:flex-grow flex-1 md:w-1/2 lg:pr-24  md:items-start md:text-left md:mb-0 flex flex-col items-center mb-16 text-center">
            <h1 className="title-font md:text-4xl text-paste first-letter mb-8  font-medium text-2xl  xl:text-6xl 2xl:text-7xl">
              Md Kawsar Islam Yeasin
            </h1>
            <p className=" mb-4 leading-relaxed text-blue-200">
              Optimistic Learner, Programmer,
              <br />
              Loves to talk about &nbsp;
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
                // onLoopDone={handleDone}
                // onType={handleType}
              />
            </p>
            <p className="mb-8 leading-relaxed text-blue-200">
              A self-taught web application developer, Love to build front end
              and think that how would user interact wth the application. want
              to build Tools for Developer and contribute to open source.
            </p>

            <div className="gap-x-5 flex mt-4">
              <KindCougar title="Download CV">
                <BsDownload />
              </KindCougar>

              <BlueStar_Btn>Blogs</BlueStar_Btn>
            </div>
          </div>
          <div className="lg:max-w-lg md:w-1/2 relative w-5/6">
            <Image
              src={man}
              alt="man"
              className=" pointer-events-none select-none"
            />
            <Parallax />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Hero;
