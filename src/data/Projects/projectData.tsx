import type { StaticImageData } from "next/image";

//  projects Images
import amader_bazar from "@/assets/projects/amader_bazar.png";
import brightshift from "@/assets/projects/brightshift.png";
import chainVers from "@/assets/projects/chiptoChainvers.png";
import insurgency from "@/assets/projects/insurgency.png";
import kismatTravel from "@/assets/projects/kismat-travel.png";
import kiyMovie from "@/assets/projects/kiyMovie.png";
import rimasDental from "@/assets/projects/Rima-s-Dental.png";
import storyCraft from "@/assets/projects/storyCraft.png";
import TaskHub from "@/assets/projects/taskHub.png";
import twindCli from "@/assets/projects/twindCli.png";
import lokingForSortru from "@/assets/projects/lookingForSotru.jpg";

export type projectTypes = {
  name: string;
  notes?: string;
  ProjectImage: StaticImageData;
  liveLink?: string;
  gitHubLink?: string;
  tag: string[];
  description?: string;
};

const projectData: projectTypes[] = [
  {
    name: "Rima's Dental",
    ProjectImage: rimasDental,
    liveLink: "https://rimas-dental.vercel.app/",
    gitHubLink: "https://github.com/yeasin2002/Rimas-Dental",
    tag: ["Nextjs", "Prisma", "mongoDB"],
    description: `Rimas Dental is a user-friendly website for dental clinics to efficiently manage operations. It facilitates patient appointment scheduling and features an intuitive dashboard for users, doctors, and sales management, providing insightful analytics to streamline clinic workflows.`,
  },
  {
    name: "Amader bazar",
    ProjectImage: amader_bazar,
    liveLink: "https://amaderbazar.netlify.app/",
    gitHubLink: "https://github.com/yeasin2002/Amazer_Bazar-client",
    tag: ["React", "Tailwindcss", "tanstack-query", "node/express", "mongoDB"],
    description:
      "A full stack e-commerce website\n , The project is an online store that sells a variety of products and allows customers to browse, purchase, and track their orders. This repository contains only the code for the dashboard, which provides an interface for store administrators to manage products, view sales data, and track orders",
  },
  {
    name: "brightshift ",
    notes: "Under Development",
    ProjectImage: brightshift,
    liveLink: "",
    gitHubLink: "https://github.com/brightshift/brightshift-ui",
    tag: ["Go", "Wails", "Nextjs", "Hybrid application"],
    description:
      "A hybrid application for the job seeker, This website will show all the job circulars. And you can set your preference and get a notification when a job circular is published. \n Currently it's under development.",
  },
  {
    name: "brightshift ",
    notes: "",
    ProjectImage: lokingForSortru,
    liveLink: "https://looking-for-sotru.vercel.app/",
    gitHubLink: "https://github.com/yeasin2002/Looking-for-sotru",
    tag: ["Landing Page", "Tailwindcss", "Nextjs"],
    description: `I noticed many of you have been posting about him and he’s gone viral on social media, so I thought, why not create a portfolio about Babor? Just for fun, actually. It only took me a few hours to put together. If you spot any mistakes, I kindly ask for your understanding and forgiveness. Also, If you are looking for a Web Developer feel free to DM me. I’m also Open, Looking for clients.`,
  },
  {
    name: "Kismat Travels",
    ProjectImage: kismatTravel,
    gitHubLink: "https://github.com/yeasin2002/Kismat_Travels-OTA/tree/main",
    liveLink: "",
    tag: [
      "nextjs 12",
      "@tanstack/react-query",
      "zustand",
      "Tailwindcss",
      "shdcnui",
      "radix-ui",
    ],
    description:
      "An OTA (Online Travel Agency) website. This website is for booking flights from Bangladesh  ",
  },
  {
    name: "TaskHub",
    ProjectImage: TaskHub,
    gitHubLink: "https://github.com/Mdkawsarislam2002/TaskHub",
    liveLink: "https://taskhub2002.netlify.app/",
    tag: ["React", "Redux", "Tailwindcss"],
    description:
      "A task management application with the ability to collaborate with others Todo-App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules",
  },

  {
    name: "chiptoChainvers",
    ProjectImage: chainVers,
    liveLink: "https://crypto-chainverse.netlify.app/",
    gitHubLink: "",
    tag: ["React", "Tailwindcss"],
    description: "Landing Page of Crypto currency selling website",
  },

  {
    name: "kiyMovie",
    ProjectImage: kiyMovie,
    liveLink: "https://crypto-chainverse.netlify.app/",
    gitHubLink: "https://github.com/Mdkawsarislam2002/kiy-movies",
    tag: ["React", "Tailwindcss", "firebase", "IMDB"],
    description:
      "Movie Showing website using IMDB API. You can search for any movie and see the details of the movie.",
  },

  {
    name: "Story Craft - Blog",
    ProjectImage: storyCraft,
    liveLink: "",
    gitHubLink: "https://github.com/yeasin2002/StoryCraft",
    tag: ["nextjs 14", "Tailwindcss", "prisma", "notions Editor"],
    description: `Story Craft is a blog website. You can write your own blog and publish it. You can also read other's blog.`,
  },
  {
    name: "Insurantly - insurance agency",
    ProjectImage: insurgency,
    liveLink: "https://insurantly2023.netlify.app/",
    gitHubLink:
      "https://github.com/Mdkawsarislam2002/Insurantly-insurance_agency",
    tag: ["html", "Tailwindcss", "react", "Figma"],
    description: `
    Landing page, Figma to React. \n
    Insurantly   is an insurance agency website. You can buy insurance from this website.    `,
  },
  {
    name: "Twind-CLI (Alfa)",
    ProjectImage: twindCli,
    gitHubLink: "https://github.com/Mdkawsarislam2002/T_Wind-cli",
    liveLink: "",
    tag: ["nodejs", "TypeScript", "Tailwindcss", "CLI"],
    description:
      " [deprecated] Tailwind is the most popular CSS Framework but installing and using Tailwind CSS from scratch is a little bit complicated, So using twind-cli you can setup Tailwind within a second.",
  },
];

export default projectData;
