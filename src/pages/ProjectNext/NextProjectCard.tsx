import { projectTypes } from "@/data/Projects/projectData";
import Image from "next/image";
import React from "react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const NextProjectCard = ({
  id,
  name,
  ProjectImage,
  gitHubLink,
  liveLink,
  description,
  tag,
}: projectTypes) => {
  return (
    <div
      className={`w-full h-full  bg-[#080808] rounded-xl  p-4 
    ${id === 1 && "lg:-translate-y-40"}
    `}
    >
      <div className="h-72">
        <Image
          className="w-full  rounded-lg h-full "
          src={ProjectImage}
          alt={name}
        />
      </div>
      <div>
        <div className="flex items-center justify-between my-5 ">
          <h3 className="text-xl font-bold"> {name} </h3>
          <div className="flex items-center justify-center gap-x-2">
            <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white rounded-full p-1 "
            >
              <BsLink45Deg className="" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-x-3 ">
        {tag.map((tech) => {
          return <div key={tech}>{tech}</div>;
        })}
      </div>

      <hr />

      <div className="mt-3">{description}</div>
    </div>
  );
};

export default NextProjectCard;
