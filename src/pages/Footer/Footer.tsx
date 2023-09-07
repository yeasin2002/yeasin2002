import React from "react";
import contactList from "@/data/contactInfo/contactInfo";
import Logo from "@/components/Globals/Logo";

const Footer = () => {
  return (
    <footer className="eachSections pb-14 mt-20">
      <div className="flex justify-between">
        <Logo />

        <div>
          <div className=" gap-x-4 flex">
            {contactList.map((val) => {
              return (
                <a
                  href={val.link}
                  key={val.name}
                  target="_blank"
                  className={`hover:scale-110 text-2xl transition-all `}
                >
                  {val.components}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="into-center gap-x-2 mt-5">
        <p>All Right Reserved </p>
        <p>@yeasin2002.dev</p>
      </div>
    </footer>
  );
};

export default Footer;
