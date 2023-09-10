import React from "react";
import projectData from "@/data/Projects/projectData";

import ProjectCard from "./ProjectCard";
import ProjectSlider from "./ProjectSlider";
import SwiperSlider from "./SwiperSlider";

const Projects = () => {
  return (
    <section
      className="eachSections overflow-hidden w-full h-full "
      id="projects"
    >
      <h2 className="title">Projects</h2>

      <div className="w-full h-full  px-10   py-40  rotate-12  ">
        {
          //! classic way
        }
        {/* <div className="sm:grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-3 grid grid-cols-1 py-10">
          {projectData.map((val) => {
            return (
              <ProjectCard
                key={val.id}
                name={val.name}
                ProjectImage={val.ProjectImage}
                id={val.id}
              />
            );
          })}
        </div> */}

        {
          //! unfinished - there is a bug exist
        }
        {/* <ProjectSlider /> */}

        {
          // ! swiper way
        }
        <SwiperSlider />
      </div>
    </section>
  );
};

export default Projects;
