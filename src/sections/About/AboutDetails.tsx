"use client";

import React from "react";

import { CodeBlocks } from "./CodeBlocks";
import { LayoutGridCard } from "./ImageGrid";

const AboutDetails = () => {
  return (
    <div className="activeCardEffectContainer grid grid-cols-1 items-center gap-y-8 py-10 md:grid-cols-2 md:gap-y-0">
      <CodeBlocks />
      <LayoutGridCard />
    </div>
  );
};

export default AboutDetails;
