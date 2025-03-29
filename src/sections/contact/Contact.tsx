"use client";

import React from "react";

import { InputCombo as Input } from "@/components/ui/InputCombo";
// import SubmitBtn from "@/components/Unique/Buttons/submitBtn/submitBtn";

import { cn } from "@/utils";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

type Inputs = {
  name: string;
  email: string;
  contact: number;
  subject: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (userData) => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("contact", userData.contact.toString());
      formData.append("subject", userData.subject);
      formData.append("message", userData.message);
      formData.append(
        "access_key",
        process?.env?.NEXT_PUBLIC_WEB3FORMS_API_KEY as string
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) return toast.success("Message sent successfully");

      throw new Error("Unable to send message");
    } catch (error: any) {
      console.log("Error Contact", error);
      toast.error("Unable to send message. ");
      toast.error("Please try again later.");
    }
  };

  return (
    <section className="eachSections sectionHolder" id="contact">
      <h3 className=" font-bold;  silver-text flex items-center justify-center text-2xl  font-bold 2xl:text-4xl">
        Get in Touch
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className=" contact-input-wrapper">
          <Input
            label="Name"
            type="text"
            placeholder="Your Name"
            className="underBorder"
            register={register("name", {
              required: { value: true, message: "Name is required" },
            })}
            error={errors.name?.message}
          />
          <Input
            label="Email"
            register={register("email", {
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            error={errors.email?.message}
            type="email"
            placeholder="Your Email"
            className="underBorder"
          />
        </div>
        <div className=" contact-input-wrapper">
          <Input
            type="number"
            placeholder="contact number"
            className="underBorder"
            label="Contact Number"
            error={errors.contact?.message}
            register={register("contact", {
              required: { value: true, message: "Contact number is required" },
            })}
          />
          <Input
            type="text"
            placeholder="Subject"
            className="underBorder"
            label="Subject"
            register={register("subject", {
              required: { value: true, message: "Subject is required" },
            })}
            error={errors.subject?.message}
          />
        </div>
        <textarea
          id="userMessage"
          placeholder="Write your message"
          className={cn(
            `underBorder block h-96  w-full rounded-lg bg-slate-800  p-2.5   text-sm   text-zinc-200 placeholder:text-gray-300 focus:bg-slate-700 md:h-60`,
            { "border-red-500 border-2": errors.message }
          )}
          {...register("message", { required: true })}
        />
        <button type="submit">submit</button>
      </form>
    </section>
  );
};
export default Contact;
