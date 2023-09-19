import IconEffect from "@/components/Unique/Buttons/IconEffect/IconEffect";
import contactList from "@/data/contactInfo/contactInfo";
import React, { HtmlHTMLAttributes } from "react";

interface connections extends HtmlHTMLAttributes<HTMLDivElement> {}

const ContactVia = ({ ...props }: connections) => {
  return (
    <div {...props}>
      <div className="gap-x-4 flex items-center my-2">
        {contactList.map((val, index) => {
          return (
            <a
              href={val.link}
              key={index}
              target="_blank"
              className={`hover:scale-110 xl:text-2xl transition-all `}
            >
              <IconEffect bgColor={val.bgGradient}>{val.components}</IconEffect>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default ContactVia;
