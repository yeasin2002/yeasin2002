import skillDataTypes from "./skillData.d";

//  icons
import html from "@/assets/icons/html.svg";
import css from "@/assets/icons/css.svg";
import js from "@/assets/icons/js.svg";
import tailwind from "@/assets/icons/tailwind.svg";
import react from "@/assets/icons/react.svg";
import next from "@/assets/icons/next.svg";
import redux from "@/assets/icons/redux.svg";
import node from "@/assets/icons/Nodejs.svg";
import git from "@/assets/icons/git.svg";
import github from "@/assets/icons/github.svg";
import vsCode from "@/assets/icons/vsCode.svg";
import notion from "@/assets/icons/notion.svg";
import figma from "@/assets/icons/figma.svg";
import typeScript from "@/assets/icons/typescript.svg";
import openProps from "@/assets/icons/openProps.svg";
import postcss from "@/assets/icons/PostCSS.svg";
import unoCSS from "@/assets/icons/unoCSS.svg";
import Bootstrap from "@/assets/icons/Bootstrap.svg";
import SASS from "@/assets/icons/SASS.svg";
import jwt from "@/assets/icons/jwt.svg";
import vite from "@/assets/icons/vite.svg";
import express from "@/assets/icons/express.svg";
import MongoDB from "@/assets/icons/Mongo.png";
import mongoose from "@/assets/icons/mongoose.png";
import rtk from "@/assets/icons/rtk.jpg";

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
      title: "JavaScript / ECMAScript",
      icon: js,
      stage: "intermediate",
    },
    {
      title: "TypeScript",
      icon: typeScript,
      stage: "intermediate",
    },
  ],
  CssFramework: [
    {
      title: "TailwindCSS",
      icon: tailwind,
      stage: "advance",
      reference: "https://tailwindcss.com/",
    },
    {
      title: "Bootstrap",
      icon: Bootstrap,
      stage: "intermediate",
    },
    {
      title: "PostCSS",
      icon: postcss,
      stage: "intermediate",
    },
    {
      title: "unoCSS",
      icon: unoCSS,
      stage: "advance",
    },
    {
      title: "open-props",
      icon: openProps,
      stage: "intermediate",
    },
    {
      title: "SASS",
      icon: SASS,
      stage: "intermediate",
    },
  ],
  JSFramework: [
    {
      title: "React.js",
      icon: react,
      stage: "advance",
    },
    {
      title: "Redux, Redux Toolkit",
      icon: redux,
      stage: "advance",
    },
    {
      title: "Redux Thunk, RTK Query",
      icon: rtk,
      stage: "advance",
    },
    {
      title: "Next.js 13",
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
      stage: "beginner",
    },
    {
      title: "MongoDB",
      icon: MongoDB,
      stage: "beginner",
    },
    {
      title: "mongoose",
      icon: mongoose,
      stage: "beginner",
    },
    {
      title: "JWT",
      icon: jwt,
      stage: "beginner",
    },
  ],
  Tools: [
    {
      title: "Git ",
      icon: git,
      stage: "intermediate",
    },
    {
      title: "Github",
      icon: github,
      stage: "intermediate",
    },
    {
      title: "Vite",
      icon: vite,
      stage: "intermediate",
    },
    {
      title: "Figma",
      icon: figma,
      stage: "beginner",
    },
    {
      title: "VS Code",
      icon: vsCode,
      stage: "intermediate",
    },
    {
      title: "Notion",
      icon: notion,
      stage: "intermediate",
    },
  ],
};

export default skillData;
