import React from "react";
import ArrowLeft from "./arrows/ArrowLeft";
import Arrow_Forward from "./arrows/Arrow_Forward";
import Line from "./arrows/Line";
import AboutDetails from "./AboutDetails";

const About = () => {
  return (
    <section className="w-full">
      <div className="flex justify-center">
        <h3 className="text-paste flex items-center text-4xl font-bold">
          <ArrowLeft />
          About me
          <Line />
          <Arrow_Forward />
        </h3>
      </div>

      <AboutDetails />
    </section>
  );
};

export default About;
