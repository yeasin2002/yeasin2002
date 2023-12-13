import skillDataTypes from "./skillData.d";

//! front end
import css from "@/assets/icons/css.svg";
import html from "@/assets/icons/html.svg";
import js from "@/assets/icons/js.svg";
import next from "@/assets/icons/next2svg.svg";
import react from "@/assets/icons/react.svg";
import redux from "@/assets/icons/redux.svg";
import rtk from "@/assets/icons/rtk.png";
import styledComponents from "@/assets/icons/styled-components.jpg";
import tailwind from "@/assets/icons/tailwind.svg";
import tanStackQuery from "@/assets/icons/tankstackQuery.svg";
import typeScript from "@/assets/icons/typescript.svg";
import unoCSS from "@/assets/icons/unoCSS.svg";
import zustand from "@/assets/icons/zustand.png";

//! back ends
import MongoDB from "@/assets/icons/Mongo.png";
import node from "@/assets/icons/Nodejs.svg";
import express from "@/assets/icons/express.svg";
import mongoose from "@/assets/icons/mongoose.png";
import MySql from "@/assets/icons/mySQL.svg";
import sequelize from "@/assets/icons/sequelize.svg";
import sql from "@/assets/icons/sql.svg";

//! tools
import figma from "@/assets/icons/figma.svg";
import gitAndGithub from "@/assets/icons/gitAndGithubsvg.svg";
import notion from "@/assets/icons/notion2svg.svg";
import vite from "@/assets/icons/vite.svg";
import vsCode from "@/assets/icons/vsCode.svg";

const skillData: skillDataTypes = {
  Language: [
    {
      title: "HTML",
      icon: html,
      stage: "advance",
    },
    {
      title: "CSS",
      icon: css,
      stage: "advance",
    },

    {
      title: "JavaScript",
      icon: js,
      stage: "advance",
    },
    {
      title: "TypeScript",
      icon: typeScript,
      stage: "intermediate",
    },
  ],
  CssFramework: [
    // {
    //   title: "TailwindCSS",
    //   icon: tailwind,
    //   stage: "advance",
    //   reference: "https://tailwindcss.com/",
    // },
    // {
    //   title: "Bootstrap",
    //   icon: Bootstrap,
    //   stage: "intermediate",
    // },
    // {
    //   title: "SASS",
    //   icon: SASS,
    //   stage: "intermediate",
    // },
    // {
    //   title: "PostCSS",
    //   icon: postcss,
    //   stage: "intermediate",
    // },
    // {
    //   title: "Open-Props",
    //   icon: openProps,
    //   stage: "intermediate",
    // },
    // {
    //   title: "Styled-Components",
    //   icon: styledComponents,
    //   stage: "intermediate",
    // },
  ],
  JSFramework: [
    {
      title: "TailwindCSS",
      icon: tailwind,
      stage: "advance",
    },
    {
      title: "React.js",
      icon: react,
      stage: "advance",
    },
    {
      title: "Redux Toolkit",
      icon: redux,
      stage: "advance",
    },
   
    {
      title: "Zustand",
      icon: zustand,
      stage: "intermediate",
    },
    {
      title: "TanStack Query",
      icon: tanStackQuery,
      stage: "intermediate",
    },
    {
      title: "Next.js ",
      icon: next,
      stage: "beginner",
    },
  ],
  BackEnd: [
    {
      title: "Node.js",
      icon: node,
      stage: "beginner",
    },
    {
      title: "Express.js",
      icon: express,
      stage: "intermediate",
    },

    {
      title: "MongoDB",
      icon: MongoDB,
      stage: "beginner",
    },
  ],
  Tools: [
    {
      title: "Git & Github",
      icon: gitAndGithub,
      stage: "advance",
    },

    {
      title: "Figma",
      icon: figma,
      stage: "beginner",
    },
    {
      title: "VS Code",
      icon: vsCode,
      stage: "advance",
    },
    {
      title: "Notion",
      icon: notion,
      stage: "intermediate",
    },
    {
      title: "Vite",
      icon: vite,
      stage: "intermediate",
    },
  ],
};

export default skillData;
