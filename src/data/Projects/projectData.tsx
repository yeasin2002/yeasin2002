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
};

const projectData: projectTypes[] = [
  {
    id: 0,
    name: "TaskHub",
    ProjectImage: TaskHub,
    gitHubLink: "https://github.com/Mdkawsarislam2002/TaskHub",
    liveLink: "https://taskhub2002.netlify.app/",
  },
  {
    id: 1,
    name: "Twind-CLI",
    ProjectImage: twindCli,
    gitHubLink: "https://github.com/Mdkawsarislam2002/T_Wind-cli",
    liveLink: "",
  },
  {
    id: 2,
    name: "HooBank",
    ProjectImage: hooBankImg,
    gitHubLink: "https://github.com/Mdkawsarislam2002/project_hoobank",
    liveLink: "",
  },
  {
    id: 3,
    name: "chiptoChainvers",
    ProjectImage: chainVers,
    liveLink: "https://crypto-chainverse.netlify.app/",
    gitHubLink: "",
  },
  {
    id: 4,
    name: "kiyMovie",
    ProjectImage: kiyMovie,
    liveLink: "https://crypto-chainverse.netlify.app/",
    gitHubLink: "",
  },
];

export default projectData;
