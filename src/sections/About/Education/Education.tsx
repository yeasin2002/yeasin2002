import React from "react";
import Academic from "./Academic";
import Training from "./Training";

const Education = () => {
  return (
    <div className="mt-20">
      <h3 className="SubTitle silver-text my-6 font-bold">
        Education & Training
      </h3>
      <div className=" grid grid-cols-1 gap-x-2 md:grid-cols-2">
        <Academic />
        <Training />
      </div>
    </div>
  );
};

export default Education;
