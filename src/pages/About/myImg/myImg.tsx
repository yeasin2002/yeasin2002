import React from "react";
import yeasin from "@/assets/avatar/me/Yeasin2002.jpg";
import Image from "next/image";

const Imageka = () => {
  return (
    <div className="md:order-last cardWrapper ">
      <div id="cards">
        <div className="card" data-color="brown">
          <Image
            className="card-front-image card-image"
            src={yeasin}
            alt="Yeasin"
            loading="lazy"
          />
          <div className="card-faders ">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => {
              return (
                <>
                  <Image
                    key={img}
                    alt="Tetris"
                    className="card-fader card-image"
                    src={yeasin}
                    loading="lazy"
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imageka;
