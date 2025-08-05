import cube from "@/assets/images/dark-cube.svg";
import Image from "next/image";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";

export const Contact = () => {
  return (
    <div className="relative overflow-x-hidden">
      <section
        id="contact"
        className=" grid grid-cols-1 lg:grid-cols-2  container mx-auto min-h-[70vh]  pb-24"
      >
        <div className="  flex items-center justify-center px-3">
          <div className="w-full max-w-3xl">
            <h1 className="text-4xl md:text-5xl/relaxed font-bold text-yellow-vibe  font-boldonse text-main-yellow my-8 text-center lg:text-start">
              Get in touch
            </h1>
            <ContactForm />
          </div>
        </div>
        <ContactInfo className="order-first lg:order-last" />
      </section>
      <Image
        src={cube}
        alt="cube"
        className="absolute bottom-1/12 -right-10 -z-10 size-56 object-cover opacity-20 blur-xs select-none spin"
      />
    </div>
  );
};
