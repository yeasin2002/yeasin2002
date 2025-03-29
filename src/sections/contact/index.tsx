"use client";

import { ContactForm } from "./contact-form";

export const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="  flex items-center justify-center p-6">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl md:text-5xl/relaxed font-bold text-yellow-vibe  font-boldonse text-main-yellow my-8">
            Get in touch
          </h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
