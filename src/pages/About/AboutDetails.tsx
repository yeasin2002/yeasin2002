import React from "react";
import AboutCode from "./AboutCode";
import Image from "next/image";

//  image
import yeasin from "../../assets/avatar/yeasin.jpg";
type Props = {};

const AboutDetails = (props: Props) => {
  return (
    <div className="grid grid-cols-2">
      <AboutCode />
      <div className="justify-self-center self-center">
        <Image src={yeasin} alt="Yeasin" className="w-60 h-60 rounded-full" />
      </div>
    </div>
  );
};

export default AboutDetails;
