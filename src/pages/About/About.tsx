import React from "react";
import ArrowLeft from "./arrows/ArrowLeft";
import Arrow_Forward from "./arrows/Arrow_Forward";
import Line from "./arrows/Line";
import AboutDetails from "./AboutDetails";
import Education from "./Education/Education";
import ContactVia from "./ConnectVia";

const About = () => {
  return (
    <section className="eachSections">
      <div className="flex justify-center">
        <h3 className="title">
          <ArrowLeft />
          About me
          <Line />
          <Arrow_Forward />
        </h3>
      </div>

      <AboutDetails />
      <ContactVia />
      <Education />
    </section>
  );
};

export default About;
