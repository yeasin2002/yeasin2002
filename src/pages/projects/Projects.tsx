import React from "react";
import SwiperSlider from "./SwiperSlider";
import { LiaHandPointer } from "react-icons/lia";
import classes from "./keyframe.module.css";

const Projects = () => {
  return (
    <section
      className="eachSections overflow-hidden w-full h-full  "
      id="projects"
    >
      <h2 className="title">Projects</h2>
      <div className="w-full h-full  px-10   py-40  rotate-12  ">
        <SwiperSlider />
      </div>

      {
        //! moving animation
      }
      <div
        className={`flex items-center justify-end xl:hidden ${classes.pointerMove}`}
      >
        <span>
          <LiaHandPointer />
        </span>
      </div>
    </section>
  );
};

export default Projects;
