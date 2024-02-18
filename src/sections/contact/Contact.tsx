import React from "react";

import { Input } from "@/components/ui/input";
import SubmitBtn from "@/components/Unique/Buttons/submitBtn/submitBtn";

const Contact = () => {
  return (
    <section className="eachSections sectionHolder" id="contact">
      <h3 className=" font-bold;  silver-text flex items-center justify-center text-2xl  font-bold">
        Get in Touch{" "}
      </h3>

      <form>
        <div className=" my-4 flex flex-col gap-x-2 gap-y-2 md:flex-row">
          <Input type="text" placeholder="Your Name" className="underBorder" />
          <Input
            type="email"
            placeholder="Your Email"
            className="underBorder"
          />
        </div>
        <div className=" my-4 mt-5 flex flex-col gap-x-2 gap-y-2 md:mt-0 md:flex-row">
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
          className={`underBorder block h-96  w-full rounded-lg bg-slate-800  p-2.5   text-sm   text-paste placeholder:text-gray-300 focus:bg-slate-700 md:h-60`}
        ></textarea>
        <SubmitBtn>submit</SubmitBtn>
      </form>
    </section>
  );
};
export default Contact;
