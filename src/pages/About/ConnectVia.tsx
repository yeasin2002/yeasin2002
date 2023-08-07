import React, { HtmlHTMLAttributes } from "react";

//  icons  & assets
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
    name: "Github",
    components: <BiLogoGithub />,
    link: "https://github.com/Mdkawsarislam2002/",
  },
  {
    name: "Linkedin",
    components: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/md-kawsar-islam-yeasin-8bb808222/",
  },
  {
    name: "Facebook",
    components: <BsFacebook />,
    link: "https://www.facebook.com/mdkawsarislam2002/",
  },
  {
    name: "Twitter",
    components: <BiLogoTwitter />,
    link: "https://twitter.com/mdkawsar2002",
  },
  {
    name: "Instagram",
    components: <AiOutlineInstagram />,
    link: "https://www.instagram.com/mdkawsarislam2002/",
  },

  // {
  //   name: "Medium",
  //   components: <Medium />,
  //   link: "https://medium.com/@mdkawsarislamyeasin",
  // },
  // {
  //   name: "WhatsApp",
  //   components: <AiOutlineWhatsApp />,
  //   link: "",
  // },
];
interface connections extends HtmlHTMLAttributes<HTMLDivElement> {}

const ContactVia = ({ ...props }: connections) => {
  return (
    <div {...props}>
      <h3>Connected Via </h3>

      <div className="gap-x-4 flex items-center my-2">
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
