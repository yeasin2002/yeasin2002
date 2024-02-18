import Logo from "@/components/Globals/Logo";
import { contactList3D } from "@/data/contactInfo/contactInfo";
import { DangrekFont, MetalFont } from "@/utils/GoogleFonts";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="eachSections mt-20 pb-14 ">
        <div className="flex flex-wrap justify-between">
          <Logo />

          <div>
            <div className=" flex flex-wrap gap-x-1 sm:gap-x-4">
              {contactList3D.map((val) => {
                return (
                  <a
                    style={{
                      background: val.bgGradient,
                    }}
                    href={val.link}
                    key={val.name + val.link}
                    target="_blank"
                    className={`rounded-full p-1 text-2xl transition-all hover:scale-110`}
                  >
                    <Image
                      src={val.img}
                      alt={val.name}
                      width={30}
                      height={30}
                      className="rounded-full"
                    ></Image>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="into-center mt-10 flex-col">
          <p className={`${DangrekFont.className}`}>
            Created with <span className="text-red-500">❤</span> by Yeasin
          </p>
          <div
            className={` into-center mt-5 gap-x-2 sm:text-xl 2xl:text-2xl ${MetalFont.className}`}
          >
            <p>All Right Reserved </p>
            <p>@yeasin2002.dev</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
