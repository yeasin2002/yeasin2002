import React from "react";
import { Tilt } from "react-tilt";

// assets
import bloods from "@/assets/bloobs/Rings.svg";
import Image from "next/image";

const AboutCode = () => {
  const tiltOptions = {
    reverse: false, // reverse the tilt direction
    max: 10, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 100, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99.5)", // Easing on enter/exit.
    glare: true,
    "max-glare": "1",
  };
  return (
    <Tilt
      options={tiltOptions}
      className=" relative rounded-lg"
      //  glass effect
      style={{
        background: `rgba(255,255,255,.1)`,
        boxShadow: "0 25px 45px rgba(0,0,0,.2)",
        backdropFilter: `blur(5px)`,
      }}
    >
      <pre>
        {`
  import { aboutType } from "./about.d";

  const AboutMe = (): aboutType => {
       return {
         name: "Md Kawsar Islam Yeasin",
         role: "Front End Web Developer",
         age: 20,
         gender: "male",
         address: "Dhaka, Cantonment,Dhaka-1206",
         phone: "01632227965",
         mail: "mdkawsarislam@gmail.com",
       };
  }; 
     `}
      </pre>

      <div>
        <Image
          src={bloods}
          alt="icons"
          className="text-paste  absolute bottom-0 right-0"
        />
      </div>
    </Tilt>
  );
};
export default AboutCode;
