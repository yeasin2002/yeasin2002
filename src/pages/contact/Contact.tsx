import React from "react";
import { Input } from "@/components/ui/input";

const Contact = () => {
  return (
    <section className="eachSections">
      <h3 className="title">Contact</h3>

      <div>
        <div className=" gap-x-2 flex my-4">
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
        </div>
        <div className=" gap-x-2 flex my-4">
          <Input type="number" placeholder="contact number" />
          <Input type="text" placeholder="Subject" />
        </div>
        <textarea
          name="userMessage"
          id="userMessage"
          className=" h-60 w-full block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        ></textarea>
      </div>
    </section>
  );
};

export default Contact;
