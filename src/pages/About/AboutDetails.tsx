import React from "react";
import AboutCode from "./AboutCode";

//  image
import MyAvatar from "./MyAvatar";

const AboutDetails = () => {
  return (
    <>
      <div className="md:grid-cols-2 gap-y-8 md:gap-y-0 grid grid-cols-1 py-10">
        <MyAvatar />
        <AboutCode />
      </div>
    </>
  );
};

export default AboutDetails;
