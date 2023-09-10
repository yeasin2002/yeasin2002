"use client";

//!  failed to work,It is not working as expected, I will fix it later
//!  Issue: end of the scroll is not workings

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import projectData from "../../data/Projects/projectData";
import Image from "next/image";

const ProjectSlider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<any>(null);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <>
      <div
        ref={carousel}
        id="carousel"
        className="border w-full h-full border-red-800 px-6 overflow-x-hidden py-2"
      >
        <motion.div
          id="inner-slider"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-x-5 w-full h-full"
        >
          {projectData.map((pro) => {
            return (
              <Image
                key={pro.id}
                src={pro.ProjectImage}
                alt={pro.name}
                className="w-60 h-60 pointer-events-none"
                loading="lazy"
              />
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default ProjectSlider;
