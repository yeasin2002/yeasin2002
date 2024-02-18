import Image, { StaticImageData } from "next/image";
import quotes from "../../assets/3d/quotes.svg";
import {
  IM_Fell_Great_PrimerFont,
  Modern_AntiquaFont,
  ShipporiAntiqueFont,
} from "@/utils/GoogleFonts";

interface feedbackInterface {
  content: string;
  name: string;
  title: string;
  img: StaticImageData;
}

const FeedbackCard = ({ content, name, title, img }: feedbackInterface) => (
  <div className="feedback-card my-5 mr-0 flex w-full flex-col justify-between   rounded-[20px] px-10 py-12 sm:mr-5 md:mr-10">
    <Image
      src={quotes}
      alt="double_quotes"
      className="h-[27.6px] w-[42.6px] object-contain"
    />
    <p
      className={`font-poppins my-10 text-[18px] font-normal leading-[32.4px] text-white 2xl:text-2xl ${ShipporiAntiqueFont.className}`}
    >
      {content}
    </p>

    <div className="flex flex-row">
      <Image src={img} alt={name} className="h-[48px] w-[48px] rounded-full" />
      <div className="ml-4 flex flex-col">
        <h4
          className={`font-poppins text-[20px] font-semibold leading-[32px] text-white 2xl:text-4xl ${Modern_AntiquaFont.className}`}
        >
          {name}
        </h4>
        <p
          className={`font-poppins text-dimWhite text-[16px] font-normal leading-[24px] 2xl:text-2xl ${IM_Fell_Great_PrimerFont.className}`}
        >
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
