import React from "react";
import AboutCode from "./AboutCode";
import Image from "next/image";

//  image
import yeasin from "../../assets/avatar/yeasin.jpg";
type Props = {};

const AboutDetails = (props: Props) => {
  return (
    <div className="xl:grid-cols-2 gap-y-8 xl:gap-y-0  grid grid-cols-1 py-10">
      <AboutCode />
      <div className="justify-self-center xl:order-last self-center order-first">
        <Image src={yeasin} alt="Yeasin" className="w-60 h-60 rounded-full" />
      </div>
    </div>
  );
};

export default AboutDetails;
