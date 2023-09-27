//  icons  & assets
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoGithub, BiLogoTwitter } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";

const contactList = [
  {
    name: "Github",
    components: <BiLogoGithub className="  transition-all" />,
    link: "https://github.com/Mdkawsarislam2002/",

    bgGradient: ` linear-gradient(39deg, rgba(92,102,115,1) 0%, rgba(31,35,40,1) 100%)`,
  },
  {
    name: "Linkedin",
    components: <AiFillLinkedin className="  transition-all" />,
    link: "https://www.linkedin.com/in/yeasin2002/",

    bgGradient: `linear-gradient(39deg, rgba(66,175,231,1) 0%, rgba(1,118,178,1) 100%)`,
  },
  {
    name: "Facebook",
    components: <BsFacebook className="  transition-all" />,
    link: "https://www.facebook.com/mdkawsarislam2002/",

    bgGradient: `linear-gradient(39deg, rgba(64,125,201,1) 0%, rgba(23,119,242,1) 100%)`,
  },
  {
    name: "Twitter",
    components: <BiLogoTwitter className="  transition-all" />,
    link: "https://twitter.com/mdkawsar2002",

    bgGradient: `linear-gradient(39deg, rgba(48,204,242,1) 0%, rgba(2,162,201,1) 100%)`,
  },
  {
    name: "Instagram",
    components: <AiOutlineInstagram className="  transition-all" />,
    link: "https://www.instagram.com/mdkawsarislam2002/",

    bgGradient: `linear-gradient(45deg, #405de6 ,#5851db, #833ab4, #c13584, #e1306c, #fd1d1d)`,
  },
];

export default contactList;
