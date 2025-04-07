"use client";

import { sendEmail } from "@/actions/send-email";
import { ArrowRight, Loader2 } from "lucide-react";

import { useState } from "react";
import toast from "react-hot-toast";

export function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);

    try {
      const result = await sendEmail({ email, message });

      if (result.success) {
        toast.success("Success");
      } else {
        throw new Error(result.error, { cause: result });
      }
    } catch (error) {
      console.log("Error", error);
      toast.error("Error");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form className="space-y-12" onSubmit={handleSubmit}>
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
          className="w-full bg-[#111] rounded-xl p-4 text-xl   placeholder:text-gray-600 ring-0 outline-none border border-main-yellow/10 "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          className="w-full bg-[#111] rounded-xl p-4 text-xl  ring-0 outline-none placeholder:text-gray-600 resize-none  border border-main-yellow/10 "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <button
          type="submit"
          disabled={isPending}
          className="btn BoldStockBtn  inline-flex items-center justify-center gap-2 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:hover:bg-gray-200 w-full sm:w-auto"
        >
          {isPending ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <>
              <span>Send Message</span>
              <ArrowRight className="w-6 h-6" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
