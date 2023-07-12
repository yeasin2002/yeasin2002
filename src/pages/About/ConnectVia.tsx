import React from "react";

//  icons  & assets
import Threads from "@/components/Icons/Threads";
import Medium from "@/components/Icons/Medium";

import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiLogoGithub, BiLogoTwitter } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";

const contactList = [
  {
    name: "Facebook",
    components: <BsFacebook />,
  },
  {
    name: "Github",
    components: <BiLogoGithub />,
  },
  {
    name: "Linkedin",
    components: <AiFillLinkedin />,
  },
  {
    name: "WhatsApp",
    components: <AiOutlineWhatsApp />,
  },
  {
    name: "Instagram",
    components: <AiOutlineInstagram />,
  },
  {
    name: "Twitter",
    components: <BiLogoTwitter />,
  },
  {
    name: "Medium",
    components: <Medium />,
  },
  {
    name: "Threads",
    components: <Threads />,
  },
];

const ContactVia = () => {
  return (
    <div>
      <h3>Connected Via </h3>

      <div className="gap-x-2 flex items-center">
        {contactList.map((val, index) => {
          return (
            <span className="" key={index}>
              {val.components}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ContactVia;
