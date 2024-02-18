"use client";

import React from "react";

import { CodeBlocks } from "./CodeBlocks";
import { LayoutGridCard } from "./ImageGrid";
// import { BgImagesSlider } from "./bgImgSlidet";

const AboutDetails = () => {
  return (
    <div className="grid items-center grid-cols-1 gap-2 py-10 activeCardEffectContainer gap-y-8 md:grid-cols-2 md:gap-y-0">
      <CodeBlocks />
      <LayoutGridCard />
    </div>
  );
};

export default AboutDetails;
