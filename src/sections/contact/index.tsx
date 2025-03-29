import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";

export const Contact = () => {
  return (
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
  );
};
