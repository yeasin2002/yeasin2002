//  icons  & assets
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoGithub, BiLogoTwitter } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";

const contactList = [
  {
    name: "Github",
    components: <BiLogoGithub className="hover:text-[#3CE3B3]" />,
    link: "https://github.com/Mdkawsarislam2002/",
    fillColor: "#3CE3B3",
  },
  {
    name: "Linkedin",
    components: <AiFillLinkedin className="hover:text-[#3CE3B3]" />,
    link: "https://www.linkedin.com/in/yeasin2002//",
    fillColor: "#3CE3B3",
  },
  {
    name: "Facebook",
    components: <BsFacebook className="hover:text-[#3CE3B3]" />,
    link: "https://www.facebook.com/mdkawsarislam2002/",
    fillColor: "#3CE3B3",
  },
  {
    name: "Twitter",
    components: <BiLogoTwitter className="hover:text-[#3CE3B3]" />,
    link: "https://twitter.com/mdkawsar2002",
    fillColor: "#3CE3B3",
  },
  {
    name: "Instagram",
    components: <AiOutlineInstagram className="hover:text-[#3CE3B3]" />,
    link: "https://www.instagram.com/mdkawsarislam2002/",
    fillColor: "#3CE3B3",
  },
];

export default contactList;
