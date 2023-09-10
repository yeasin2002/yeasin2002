"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import projectData from "../../data/Projects/projectData";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        slidesPerGroup={2}
        slidesPerView={2}
        spaceBetween={40}
        className="w-full h-full  "
        style={{
          padding: "2rem 2rem ",
        }}
      >
        {projectData.map((val) => {
          return (
            <SwiperSlide
              key={val.id}
              style={{
                rotate: "-12deg",
              }}
            >
              <ProjectDetails
                name={val.name}
                ProjectImage={val.ProjectImage}
                id={val.id}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
