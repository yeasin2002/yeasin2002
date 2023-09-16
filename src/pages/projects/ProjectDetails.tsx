import React from "react";
import Image from "next/image";
import { projectTypes } from "@/data/Projects/projectData";

const ProjectDetails = ({
  ProjectImage,
  id,
  name,
  gitHubLink,
  liveLink,
}: projectTypes) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <Image
          src={ProjectImage}
          alt={name}
          loading="lazy"
          className="w-full h-full  bg-center bg-cover rounded-lg shadow-md pointer-events-none"
        ></Image>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 ">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase ">
            {name}
          </h3>

          <div className=" flex items-center justify-around gap-3 px-3 py-2 bg-gray-200 ">
            <a
              href={liveLink}
              className="font-bold text-blue-400 "
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            <a
              href={gitHubLink}
              className="font-bold text-blue-500 "
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
