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
import Space_Btn from "@/components/Unique/Buttons/Space_Btn/Space_Btn";

const Hero = () => {
  return (
    <main className="xl:py-8 2xl:py-20 2xl:px-10 relative h-full" id="home">
      <div className="body-font text-gray-600">
        <div className="md:flex-row flex flex-col items-center py-32">
          <div className="lg:flex-grow xl:mr-10 2xl:mr-52 md:w-1/2 lg:pr-24 md:items-start md:text-left md:mb-0 flex flex-col items-center flex-1 mb-16 text-center">
            <h1 className="title-font md:text-3xl text-paste first-letter xl:text-6xl 2xl:text-7xl mb-8 text-2xl font-medium">
              MD KAWSAR ISLAM YEASIN
              {/* linear-gradient(39deg, rgba(78,186,153,1) 0%, rgba(54,200,156,1) 14%, rgba(33,156,118,1) 62%, rgba(5,119,84,1) 100%) */}
            </h1>
            <p className=" lg:text-xl 2xl:text-3xl xl:my-7 2xl:my-10 mb-4 text-lg leading-relaxed text-blue-200">
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
                // onLoopDone={
                // onType={
              />
            </p>
            <p className="text-md xl:text-xl 2xl:text-3xl mb-8 leading-relaxed text-blue-200">
              A self-taught web application developer, Love to build front end
              and think that how would user interact wth the application. want
              to build Tools for Developer and contribute to open source.
            </p>

            <div className="gap-x-5 gap-y-6 lg:flex-row lg:gap-y-0 lg:gap-x-4 flex flex-col mt-4">
              {/* <KindCougar title="Download CV">
                <BsDownload />
              </KindCougar> */}
              <Space_Btn title="Download CV" />
              <BlueStar_Btn className="2xl:text-2xl xl:text-xl text-lg">
                Blogs
              </BlueStar_Btn>
            </div>
          </div>
          <div className="lg:max-w-lg 2xl:h-1/2 2xl:ml-20 relative">
            <Image
              src={man}
              alt="man"
              priority={true}
              className=" 2xl:w-[50rem] w-full h-full pointer-events-none select-none"
            />
            <Parallax />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Hero;
