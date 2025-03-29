import type skillDataTypes from "./skillData.d";

//! front end
import next from "@/assets/icons/skill_icons/next2svg.svg";
import nuxt from "@/assets/icons/skill_icons/nuxt-logo.svg";
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

//! tools
import figma from "@/assets/icons/skill_icons/Figma-Dark.svg";
import framerMotion from "@/assets/icons/skill_icons/framer-motion.svg";
import gitAndGithub from "@/assets/icons/skill_icons/gitAndGithubsvg.svg";
import githubAction from "@/assets/icons/skill_icons/GitHubActions.svg";
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
      title: "React.js/Nextjs",
      icon: react,
      stage: "advance",
    },

    {
      title: "vue/nuxt ",
      icon: nuxt,
      stage: "beginner",
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
      title: "Github Action",
      icon: githubAction,
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
