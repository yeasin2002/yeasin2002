import contactList from "@/data/contactInfo/contactInfo";
import React, { HtmlHTMLAttributes } from "react";

interface connections extends HtmlHTMLAttributes<HTMLDivElement> {}

const ContactVia = ({ ...props }: connections) => {
  return (
    <div {...props}>
      <h3>Connected Via </h3>

      <div className="gap-x-4 flex items-center my-2">
        {contactList.map((val, index) => {
          return (
            <a
              href={val.link}
              key={index}
              target="_blank"
              className={`hover:scale-110 text-2xl transition-all `}
            >
              {val.components}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default ContactVia;
