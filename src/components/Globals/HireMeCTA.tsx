"use client";

import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./AnimatedModal";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/utils";

// my image
import img1 from "@/assets/yeasin/1.jpg";
import img2 from "@/assets/yeasin/Edited by mily.jpg";
import img3 from "@/assets/yeasin/FB_IMG_1660926888079.jpg";
import img4 from "@/assets/yeasin/hero-min.jpg";

// contact icons
import fb from "@/assets/icons/contact/facebook.svg";
import github from "@/assets/icons/contact/Github-Dark.svg";
import linkedin from "@/assets/icons/contact/LinkedIn.svg";
import tel from "@/assets/icons/contact/Telegram.svg";
import handShake from "@/assets/icons/contact/handshake.svg";

const contactList = [
  {
    icon: fb,
    url: "https://www.facebook.com/yeasin2002.dev",
  },
  {
    icon: github,
    url: "https://github.com/yeasin2002",
  },
  {
    icon: linkedin,
    url: "https://www.linkedin.com/in/yeasin2002/",
  },
  {
    icon: tel,
    url: "https://t.me/yeasin2002",
  },
];

interface Props extends React.ComponentPropsWithoutRef<"div"> {}

export function HireMeCTA({ className }: Props) {
  const images = [img2, img1, img4, img3];
  return (
    <div className={cn("flex items-center justify-center")}>
      <Modal>
        <ModalTrigger
          className={cn(
            "group/modal-btn flex justify-center whitespace-nowrap bg-[#39bab5] text-[#FFFFFF] hover:bg-[#39bab5]/90",
            "flex items-end justify-center  rounded-full  px-4   py-2 gap-x-2 ring ring-[#83f6c7]",
            className
          )}
        >
          <span className="text-center transition duration-500 group-hover/modal-btn:translate-x-40">
            Hire Me
          </span>
          <div className="absolute inset-0 z-20 flex -translate-x-40 items-center justify-center text-white transition duration-500 group-hover/modal-btn:translate-x-0">
            <Image src={handShake} alt="handShake" className="size-8" />
          </div>
        </ModalTrigger>

        <ModalBody className="bg-neutral-950 text-neutral-100">
          <ModalContent>
            <div className="mb-8">
              <h4 className="text-center text-lg font-bold text-neutral-100 md:text-2xl">
                Md Kawsar Islam Yeasin
              </h4>
              <p className="text-center text-sm font-bold text-neutral-100 md:text-sm">
                Front End Web Developer
              </p>
            </div>
            <div className="flex items-center justify-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="-mr-4 mt-4 flex-shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="h-20 w-20 flex-shrink-0 rounded-lg object-cover md:h-40 md:w-40"
                  />
                </motion.div>
              ))}
            </div>

            <div className="mx-auto py-10">
              <p className="mb-5 text-center text-lg font-bold text-neutral-600 dark:text-neutral-100 md:text-2xl">
                Contact Me Via
              </p>

              <div className="flex max-w-sm flex-wrap items-start justify-start gap-x-4 gap-y-6">
                {contactList.map((item) => (
                  <a key={item.url} href={item.url} target="_blank">
                    <Image src={item.icon} alt="icon" className="size-12" />
                  </a>
                ))}
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4 bg-neutral-900">
            <a
              className="w-28 rounded-md border border-black px-2 py-1 text-sm  bg-white text-black"
              href="mailto:mdkawsarislam2002@gmail.com"
            >
              Email Me
            </a>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
