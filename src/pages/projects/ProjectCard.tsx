import Image, { StaticImageData } from "next/image";
import React from "react";
import { projectTypes } from "@/data/Projects/projectData";

// interface valueProps {
//   name: string;
//   Image: StaticImageData;
// }

const ProjectCard = ({ name, ProjectImage, id }: projectTypes) => {
  return (
    <div className=" group relative">
      <div className=" h-72 inline-block w-full">
        <Image
          src={ProjectImage}
          alt={name}
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
};
export default ProjectCard;
