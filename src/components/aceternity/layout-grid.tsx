"use client";
import { cn } from "@/utils/cn";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

type Card = {
  id: number;
  className: string;
  thumbnail: StaticImageData;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mx-auto grid h-full w-full max-w-7xl  grid-cols-1 sm:grid-cols-2 gap-4 p-10 md:grid-cols-3 ">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "min-h-40")}>
          <div
            className={cn(
              card.className,
              "relative overflow-hidden",
              "z-40 h-full w-full rounded-xl bg-white",
              "h-full w-full rounded-xl bg-white",
              selected?.id === card.id
                ? "absolute inset-0 z-50 m-auto flex h-1/2 w-full cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg md:w-1/2"
                : lastSelected?.id === card.id
            )}
          >
            <Image
              src={card.thumbnail}
              height="500"
              width="500"
              onLoad={() => setLoaded(true)}
              className={cn(
                "absolute inset-0 h-full w-full  object-cover object-top transition duration-200",
                loaded ? "blur-none" : "blur-md"
              )}
              alt="thumbnail"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
