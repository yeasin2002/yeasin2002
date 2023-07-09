import skillDataTypes from "./skillData.d";
import { AiFillAlipayCircle } from "react-icons/ai";

const skillData: skillDataTypes = {
  FrontEnd: [
    {
      title: "html",
      icon: AiFillAlipayCircle,
      stage: "advance",
    },
    {
      title: "CSS",
      icon: AiFillAlipayCircle,
      stage: "advance",
    },
    {
      title: "TailwindCSS",
      icon: AiFillAlipayCircle,
      stage: "advance",
    },
    {
      title: "JavaScript",
      icon: AiFillAlipayCircle,
      stage: "intermediate",
    },
  ],
  backEnd: [
    {
      title: "Node.js",
      icon: AiFillAlipayCircle,
      stage: "beginner",
    },
    {
      title: "Express.js",
      icon: AiFillAlipayCircle,
      stage: "beginner",
    },
  ],
  tools: [
    {
      title: "vite",
      icon: AiFillAlipayCircle,
      stage: "intermediate",
    },
    {
      title: "Figma",
      icon: AiFillAlipayCircle,
      stage: "intermediate",
    },
  ],
};

export default skillData;
