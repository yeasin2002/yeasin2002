import React, { HtmlHTMLAttributes } from "react";

//  icons  & assets
import Threads from "@/components/Icons/Threads";
import Medium from "@/components/Icons/Medium";
import Showcase from "@/components/Icons/ShowCase";

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
    link: "facebook.com",
  },
  {
    name: "Github",
    components: <BiLogoGithub />,
    link: "",
  },
  {
    name: "Linkedin",
    components: <AiFillLinkedin />,
    link: "",
  },
  {
    name: "WhatsApp",
    components: <AiOutlineWhatsApp />,
    link: "",
  },
  {
    name: "Instagram",
    components: <AiOutlineInstagram />,
    link: "",
  },
  {
    name: "Twitter",
    components: <BiLogoTwitter />,
    link: "",
  },
  {
    name: "Medium",
    components: <Medium />,
    link: "",
  },
];
interface connections extends HtmlHTMLAttributes<HTMLDivElement> {}

const ContactVia = ({ ...props }: connections) => {
  return (
    <div {...props}>
      <h3>Connected Via </h3>

      <div className="gap-x-2 flex items-center">
        {contactList.map((val, index) => {
          return (
            <a href={val.link} target="_blank" className="text-2xl" key={index}>
              {val.components}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactVia;
