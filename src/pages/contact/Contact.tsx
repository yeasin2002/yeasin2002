import React from "react";
import { Input } from "@/components/ui/input";

const Contact = () => {
  return (
    <section className="eachSections">
      <h3 className="title">Contact</h3>

      <form>
        <div className=" gap-x-2 md:flex-row gap-y-2 flex flex-col my-4">
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
        </div>
        <div className=" gap-x-2 md:flex-row gap-y-2 md:mt-0 flex flex-col my-4 mt-5">
          <Input type="number" placeholder="contact number" />
          <Input type="text" placeholder="Subject" />
        </div>
        <textarea
          name="userMessage"
          id="userMessage"
          placeholder="Write your message"
          className="md:h-60 h-96  w-full block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
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
