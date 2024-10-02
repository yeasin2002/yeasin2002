import type skillDataTypes from "./skillData.d";

//! front end
import next from "@/assets/icons/skill_icons/next2svg.svg";
import tanStackQuery from "@/assets/icons/skill_icons/react-query.svg";
import react from "@/assets/icons/skill_icons/react.svg";
import redux from "@/assets/icons/skill_icons/Redux.svg";
import tailwind from "@/assets/icons/skill_icons/tailwind.svg";
import typeScript from "@/assets/icons/skill_icons/TypeScript.svg";
import zustand from "@/assets/icons/skill_icons/zustand.svg";

//! back ends
import express from "@/assets/icons/skill_icons/ExpressJS-Dark.svg";
import mongodb from "@/assets/icons/skill_icons/MongoDB.svg";
import node from "@/assets/icons/skill_icons/NodeJS-Dark.svg";
import prisma from "@/assets/icons/skill_icons/prisma.svg";
import graphql from "@/assets/icons/skill_icons/graphql.svg";

//! tools
import figma from "@/assets/icons/skill_icons/Figma-Dark.svg";
import framerMotion from "@/assets/icons/skill_icons/framer-motion.svg";
import gitAndGithub from "@/assets/icons/skill_icons/gitAndGithubsvg.svg";
import notion from "@/assets/icons/skill_icons/notions.svg";
import linux from "@/assets/icons/skill_icons/Linux-Dark.svg";

//! Vision
import docker from "@/assets/icons/skill_icons/Docker.svg";
import go from "@/assets/icons/skill_icons/GoLang.svg";
import mysql from "@/assets/icons/skill_icons/MySQL.svg";

const skillData: skillDataTypes = {
  FrontEnd: [
    {
      title: "TypeScript",
      icon: typeScript,
      stage: "advance",
    },

    {
      title: "React.js",
      icon: react,
      stage: "advance",
    },
    {
      title: "Next.js ",
      icon: next,
      stage: "advance",
    },
    {
      title: "TailwindCSS",
      icon: tailwind,
      stage: "advance",
    },

    {
      title: "Redux Toolkit",
      icon: redux,
      stage: "intermediate",
    },

    {
      title: "Zustand",
      icon: zustand,
      stage: "intermediate",
    },
    {
      title: "TanStack Query",
      icon: tanStackQuery,
      stage: "advance",
    },
  ],
  BackEnd: [
    {
      title: "Node.js",
      icon: node,
      stage: "intermediate",
    },
    {
      title: "Express.js",
      icon: express,
      stage: "intermediate",
    },

    {
      title: "MongoDB",
      icon: mongodb,
      stage: "intermediate",
    },

    {
      title: "Graphql",
      icon: graphql,
      stage: "beginner",
    },
  ],
  Tools: [
    {
      title: "Git & Github",
      icon: gitAndGithub,
      stage: "intermediate",
    },

    {
      title: "Figma",
      icon: figma,
      stage: "beginner",
    },

    {
      title: "Notion",
      icon: notion,
      stage: "intermediate",
    },
    {
      title: "Linux",
      icon: linux,
      stage: "beginner",
    },
  ],
  Vision: [
    {
      title: "MySQL",
      icon: mysql,
      stage: "beginner",
    },
    {
      title: "GoLang",
      icon: go,
      stage: "beginner",
    },
    {
      title: "Docker",
      icon: docker,
      stage: "beginner",
    },
  ],
};

export default skillData;
