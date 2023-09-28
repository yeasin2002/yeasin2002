import { StaticImageData } from "next/image";

//  projects Images
import TaskHub from "@/assets/projects/taskHub.png";
import hooBankImg from "@/assets/projects/hooBank.png";
import twindCli from "@/assets/projects/twindCli.png";
import chainVers from "@/assets/projects/chiptoChainvers.png";
import kiyMovie from "@/assets/projects/kiyMovie.png";

export type projectTypes = {
  id: number;
  name: string;
  ProjectImage: StaticImageData;
  liveLink?: string;
  gitHubLink?: string;
  tag: string[];
  description?: string;
};

const projectData: projectTypes[] = [
  {
    id: 0,
    name: "TaskHub",
    ProjectImage: TaskHub,
    gitHubLink: "https://github.com/Mdkawsarislam2002/TaskHub",
    liveLink: "https://taskhub2002.netlify.app/",
    tag: ["React", "Redux", "Tailwindcss"],
    description:
      "A task management application with the ability to collaborate with others Todo-App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules",
  },
  {
    id: 1,
    name: "Twind-CLI (Alfa)",
    ProjectImage: twindCli,
    gitHubLink: "https://github.com/Mdkawsarislam2002/T_Wind-cli",
    liveLink: "",
    tag: ["nodejs", "TypeScript", "Tailwindcss", "CLI"],
    description:
      "Tailwind is the most popular CSS Framework but installing and using Tailwind CSS from scratch is a little bit complicated, So using twind-cli you can setup Tailwind within a second.",
  },
  {
    id: 2,
    name: "chiptoChainvers",
    ProjectImage: chainVers,
    liveLink: "https://crypto-chainverse.netlify.app/",
    gitHubLink: "",
    tag: ["React", "Tailwindcss"],
    description: "Landing Page of Crypto currency selling website",
  },

  {
    id: 4,
    name: "kiyMovie",
    ProjectImage: kiyMovie,
    liveLink: "https://crypto-chainverse.netlify.app/",
    gitHubLink: "https://github.com/Mdkawsarislam2002/kiy-movies",
    tag: ["React", "Tailwindcss", "firebase", "IMDB"],
    description:
      "Movie Showing website using IMDB API. You can search for any movie and see the details of the movie.",
  },
];

export default projectData;
