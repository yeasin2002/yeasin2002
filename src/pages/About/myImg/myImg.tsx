"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

//? my Images
import me1 from "@/assets/avatar/me/clg.jpg";
import me2 from "@/assets/avatar/me/exam.jpg";
import me3 from "@/assets/avatar/me/kawsar.jpg";
import me4 from "@/assets/avatar/me/lackpar.jpeg";
import me5 from "@/assets/avatar/me/musium.jpg";
import me6 from "@/assets/avatar/me/sagufta.jpg";
import ContactVia from "../ConnectVia";

const Imageka = () => {
  return (
    <div className="md:order-last  cardWrapper ">
      <div id="cards">
        <div className="card" data-color="brown">
          <Image
            className="card-front-image card-image "
            src={me6}
            alt="Yeasin"
            loading="lazy"
            width={300}
            height={300}
          />
          <div className="card-faders ">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => {
              return (
                <>
                  <Image
                    key={img}
                    alt="Tetris"
                    className="card-fader card-image"
                    src={me6}
                    loading="lazy"
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>

      <ContactVia className="flex items-center justify-center  mt-3" />
    </div>
  );
};

export default Imageka;
