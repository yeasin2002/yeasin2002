"use client";


import Image from "next/image";
// import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { SubmitButton } from "./submit-button";
// import { SubmitButton } from "./submit-button";
// import { sendEmail } from "../actions/send-email"

export function ContactForm() {
  async function handleSubmit(formData: FormData) {
    //const result = await sendEmail(formData)
    const result = { success: "success", error: "error" };

    if (result.success) {
      toast.success("Success");
    } else {
      toast.error("Error");
    }
  }

  return (
    <form action={handleSubmit} className="space-y-12">
      <div className="space-y-4">
        <label htmlFor="email" className="block text-xl text-gray-400">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          className="w-full bg-[#111] rounded-xl p-4 text-xl border-0  placeholder:text-gray-600 ring-0 outline-none"
        />
      </div>

      <div className="space-y-4">
        <label htmlFor="message" className="block text-xl text-gray-400">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          required
          rows={6}
          className="w-full bg-[#111] rounded-xl p-4 text-xl border-0 ring-0 outline-none placeholder:text-gray-600 resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <SubmitButton />
      </div>
    </form>
  );
}
