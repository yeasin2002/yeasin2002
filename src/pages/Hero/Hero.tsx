/* eslint-disable @next/next/no-img-element */

import React from "react";
import Image from "next/image";

//  assets
import man from "../../assets/avatar/Saly-13.svg";
import Parallax from "./Parallax";

type Props = {};
const Hero = (props: Props) => {
  return (
    <main className="h-5/6 relative z-50">
      <section className="body-font text-gray-600">
        <div className="md:flex-row container flex flex-col items-center px-5 py-24 mx-auto">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 flex flex-col items-center mb-16 text-center">
            <h1 className="title-font sm:text-4xl text-paste mb-4 text-3xl font-medium">
              Md Kawsar Islam Yeasin
            </h1>
            <p className="mb-8 leading-relaxed">
              Optimistic Learner, Programmer, Loves to talk about Technology,
              Software, Coding, And Ideas
            </p>
          </div>
          <div className="lg:max-w-lg md:w-1/2 relative w-5/6">
            <Image src={man} alt="man" className=" z-0 select-none" />
            {/* <Parallax /> */}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Hero;
