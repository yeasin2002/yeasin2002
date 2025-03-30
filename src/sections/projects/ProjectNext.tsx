import Link from "next/link";


import Revel from "@/components/shared/Revel";
import OverText from "@/components/ui/Buttons/OverText/OverText";
import projectData from "@/data/projectData";

import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="sections-container grid grid-cols-1 gap-4  py-32  md:gap-x-6 lg:grid-cols-2  xl:gap-x-10 xl:gap-y-8  2xl:gap-10 "
    >
      <Revel
        className="px-4 py-8"
        customVariants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2
          className={` font-boldonse text-2xl font-extrabold 2xl:text-3xl text-main-yellow`}
        >
          All Creative Works
        </h2>
        <p
          className={`mb-6 text-xl text-gray-300 2xl:text-2xl font-primary font-medium`}
        >
          {"Here's"} some of my projects that I have worked on.
        </p>
        <Link href={"projects"} className="cursor-pointer">
          <OverText className="mt-5 !cursor-pointer" text="Explore_More" />
        </Link>
      </Revel>

      {projectData.slice(0, 3).map((value, index) => {
        return (
          <ProjectCard
            key={index}
            ProjectImage={value.ProjectImage}
            id={index}
            name={value.name}
            gitHubLink={value.gitHubLink}
            liveLink={value.liveLink}
            tag={value.tag}
            description={value.description}
            isTranslate={true}
          />
        );
      })}
    </section>
  );
};
