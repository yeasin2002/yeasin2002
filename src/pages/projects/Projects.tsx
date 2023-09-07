import React from "react";
import projectData from "@/data/Projects/projectData";

import ProjectCard from "./ProjectCard";
import SliderCard from "./SliderCard";

const Projects = () => {
  return (
    <section className="eachSections" id="projects">
      <h2 className="title">Projects</h2>

      <div>
        <div className="sm:grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-3 grid grid-cols-1 py-10">
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
