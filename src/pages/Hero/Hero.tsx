/* eslint-disable @next/next/no-img-element */

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

//  assets
import man from "../../assets/avatar/Saly-13.svg";
import Parallax from "./Parallax";
// import Button_Primary from "@/components/Buttons/Button_Primary";

const Hero = () => {
  return (
    <main className="h-5/6 relative" id="home">
      <section className="body-font text-gray-600">
        <div className="md:flex-row container flex flex-col items-center px-5 py-32 mx-auto">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 flex flex-col items-center mb-16 text-center">
            <h1 className="title-font sm:text-4xl text-paste first-letter mb-4 text-3xl font-medium">
              Md Kawsar Islam Yeasin
            </h1>
            <p className=" mb-4 leading-relaxed text-blue-200">
              Optimistic Learner, Programmer, Loves to talk about &nbsp;
              <Typewriter
                words={["Technology", "Software", "Coding", "Ideas"]}
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

            <div className="gap-x-3 flex">
              <button className="border-paste px-4 py-2 border rounded-sm">
                Download CV
              </button>

              <button className="px-4 py-2 border border-blue-400 rounded-sm">
                Blogs
              </button>
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
