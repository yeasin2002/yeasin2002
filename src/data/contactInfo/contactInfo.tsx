//  icons  & assets
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoGithub, BiLogoTwitter } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";

const contactList = [
  {
    name: "Github",
    components: (
      <BiLogoGithub className="hover:bg-white rounded-full hover:text-slate-950 transition-all" />
    ),
    link: "https://github.com/Mdkawsarislam2002/",
    fillColor: "#1F2328",
  },
  {
    name: "Linkedin",
    components: (
      <AiFillLinkedin className="hover:text-[#0176B2] transition-all" />
    ),
    link: "https://www.linkedin.com/in/yeasin2002/",
    fillColor: "#3CE3B3",
  },
  {
    name: "Facebook",
    components: <BsFacebook className="hover:text-[#1777F2] transition-all" />,
    link: "https://www.facebook.com/mdkawsarislam2002/",
    fillColor: "#1777F2",
  },
  {
    name: "Twitter",
    components: (
      <BiLogoTwitter className="hover:text-[#00C0EF] transition-all" />
    ),
    link: "https://twitter.com/mdkawsar2002",
    fillColor: "#00C0EF",
  },
  {
    name: "Instagram",
    components: (
      <AiOutlineInstagram className="hover:text-[#FE0288] transition-all" />
    ),
    link: "https://www.instagram.com/mdkawsarislam2002/",
    fillColor: "#FE0288",
  },
];

export default contactList;
