import React from "react";
import AboutCode from "./AboutCode";

//  image
import MyAvatar from "./MyAvatar";

const AboutDetails = () => {
  return (
    <>
      <div className="xl:grid-cols-2 gap-y-8 xl:gap-y-0 grid grid-cols-1 py-10">
        <AboutCode />
        <MyAvatar />
      </div>
    </>
  );
};

export default AboutDetails;
