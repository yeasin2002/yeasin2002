import { contactList } from "@/data/contactInfo";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const ContactInfo = () => {
  return (
    <div className=" text-white p-8 md:p-12 flex flex-col items-end">
      <div className="mb-16 text-end">
        <p className="text-4xl md:text-5xl  mb-2 font-primary font-bold">
          {`Les't`} talk on <br /> something
          <span className="text-secondary mx-2">great</span>
        </p>
      </div>

      <div className="space-y-8 mt-auto mb-16">
        <div className="flex items-center gap-4">
          <Mail className=" size-6 text-secondary" />
          <span> @mdkawsarislam2002gmail.com </span>
        </div>
        <div className="flex items-center gap-4">
          <Phone className=" size-6 text-secondary" />
          <span> 01632227965</span>
        </div>
        <div className="flex items-center gap-4">
          <MapPin className=" size-6 text-secondary" />
          <span>Dhaka Cantonment</span>
        </div>
      </div>

      <div className="flex items-center  gap-2 mt-auto">
        {contactList.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.link}
              className="hover:text-white transition-colors"
              target="_blank"
            >
              <item.components className="size-7 text-secondary" />
              <span className="sr-only">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
