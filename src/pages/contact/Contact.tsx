import React from "react";
import { Input } from "@/components/ui/input";

import useGEneratedColor from "@/hooks/useGeneratedColor";

const Contact = () => {
  return (
    <section className="eachSections" id="contact">
      <h3 className="title">Get in Touch </h3>

      <form>
        <div className=" gap-x-2 md:flex-row gap-y-2 flex flex-col my-4">
          <Input type="text" placeholder="Your Name" className="underBorder" />
          <Input
            type="email"
            placeholder="Your Email"
            className="underBorder"
          />
        </div>
        <div className=" gap-x-2 md:flex-row gap-y-2 md:mt-0 flex flex-col my-4 mt-5">
          <Input
            type="number"
            placeholder="contact number"
            className="underBorder"
          />
          <Input type="text" placeholder="Subject" className="underBorder" />
        </div>
        <textarea
          name="userMessage"
          id="userMessage"
          placeholder="Write your message"
          className={`md:h-60 h-96 underBorder  w-full block p-2.5  text-sm   rounded-lg   focus:bg-slate-700 bg-slate-800 placeholder:text-gray-300 text-paste`}
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 mt-4 border border-blue-700 rounded-lg"
        >
          submit
        </button>
      </form>
    </section>
  );
};
export default Contact;
