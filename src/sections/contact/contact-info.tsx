import { contactList } from "@/data/contactInfo";
import { cn } from "@/lib";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
interface Props extends React.ComponentProps<"div"> {}

export const ContactInfo = ({ className }: Props) => {
  return (
    <div
      className={cn(
        " text-white p-8 md:p-12 flex flex-col items-center md:items-end",
        className
      )}
    >
      <div className="mb-16 text-center lg:text-end">
        <p className="text-4xl md:text-5xl  mb-2 font-primary font-bold  text-main-yellow">
          {`Les't`} talk on <br /> something
          <span className="text-secondary mx-2">great</span>
        </p>
      </div>

      <div className="space-y-8 mt-auto mb-16">
        <Link
          href="mailto:mdkawsarislam2002@gmail.com"
          className="flex items-center gap-4"
        >
          <Mail className=" size-6 text-secondary" />
          <span>mdkawsarislam2002@gmail.com</span>
        </Link>
        <Link href="tel:+880163227965" className="flex items-center gap-4">
          <Phone className=" size-6 text-secondary" />
          <span>+880163227965</span>
        </Link>
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
