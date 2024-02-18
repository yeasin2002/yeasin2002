import DownloadBtn from "@/components/Unique/Buttons/DownloadBtn/DownloadBtn";
import Image from "next/image";

//  Assets
import lws from "@/assets/avatar/Academy/lws.svg";
import Revel from "@/components/Globals/Revel";
import { AveriaLibreFont, Maiden_OrangeFont } from "@/utils/GoogleFonts";
// import myPdf from "../../../assets/doc/reduxCertificate.pdf";

const Training = () => {
  return (
    <Revel
      className={`  my-4 flex flex-col items-start justify-between rounded-md bg-gradient-to-r from-shine-0  to-shine-100 p-1  text-blue-100   sm:py-2 
      sm:pl-3 lg:flex-row lg:items-center
      `}
    >
      <div className="flex items-center gap-x-1 sm:gap-x-4 ">
        <Image
          src={lws}
          alt={"Learn with sumit"}
          className="h-16 w-16 xl:h-16 xl:w-16 2xl:h-24 2xl:w-24"
        />
        <div>
          <a
            href="https://www.youtube.com/@LearnwithSumit"
            target="_blank"
            rel="noreferrer"
            className={`text-sm font-semibold text-gray-200 sm:text-xl sm:font-bold xl:text-2xl ${AveriaLibreFont.className} `}
          >
            Think In A Redux Way
          </a>
          <br />
          <a
            href="https://learnwithsumit.com/"
            target="_blank"
            rel="noreferrer"
            className={`text-xs font-medium text-gray-400 sm:text-base sm:font-semibold  xl:text-lg ${Maiden_OrangeFont.className} transition-all hover:underline`}
          >
            Learn with Sumit
          </a>
        </div>
      </div>
      <div className="self-end lg:mr-3 lg:self-auto">
        <DownloadBtn>Certificates</DownloadBtn>
      </div>
    </Revel>
  );
};
export default Training;
