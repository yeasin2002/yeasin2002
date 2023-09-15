"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import projectData from "../../data/Projects/projectData";
import ProjectDetails from "./ProjectDetails";

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={40}
        className="w-full h-full  cursor-pointer "
        style={{
          padding: "2rem 2rem ",
        }}
        breakpoints={{
          1000: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
          },
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
                gitHubLink={val.gitHubLink}
                liveLink={val.liveLink}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
