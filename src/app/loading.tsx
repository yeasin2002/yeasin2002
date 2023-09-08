"use client";
import React from "react";
import star from "@/assets/not-foundAndErrorAndLoading/starLoading.svg";
import Image from "next/image";

const Loading = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <Image src={star} alt="Loading" className="w-52 h-52 animate-spin" />
    </section>
  );
};

export default Loading;
