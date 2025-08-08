interface Item {
  title: string;
  icon: any;
  reference?: string;
}
interface skillDataTypes {
  Language?: Item[];
  CssFramework?: Item[];
  FrontEnd: Item[];
  BackEnd: Item[];
  Tools: Item[];
  Vision: Item[];
}

//! front end
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
    },

    {
      title: "React.js/Nextjs",
      icon: react,
    },

    {
      title: "vue/nuxt ",
      icon: nuxt,
    },
    {
      title: "TailwindCSS",
      icon: tailwind,
    },

    {
      title: "Redux Toolkit",
      icon: redux,
    },

    {
      title: "Zustand",
      icon: zustand,
    },
    {
      title: "TanStack Query",
      icon: tanStackQuery,
    },
  ],
  BackEnd: [
    {
      title: "Node.js",
      icon: node,
    },
    {
      title: "Express.js",
      icon: express,
    },

    {
      title: "MongoDB",
      icon: mongodb,
    },
    {
      title: "Prisma",
      icon: prisma,
    },
  ],
  Tools: [
    {
      title: "Git & Github",
      icon: gitAndGithub,
    },

    {
      title: "Figma",
      icon: figma,
    },

    {
      title: "Github Action",
      icon: githubAction,
    },
    {
      title: "Linux",
      icon: linux,
    },
  ],
  Vision: [
    {
      title: "MySQL",
      icon: mysql,
    },
    {
      title: "GoLang",
      icon: go,
    },
    {
      title: "Docker",
      icon: docker,
    },
  ],
};

export default skillData;
