"use client";

import React from "react";

import { CodeBlocks } from "./CodeBlocks";
import { LayoutGridCard } from "./ImageGrid";

const AboutDetails = () => {
  return (
      <div className="md:grid-cols-2 gap-y-8 md:gap-y-0 items-center grid grid-cols-1 py-10 activeCardEffectContainer">
        <CodeBlocks /> 
        <LayoutGridCard/>
      </div>
    
  );
};

export default AboutDetails;
