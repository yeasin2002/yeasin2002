import Image from "next/image";
import DownloadBtn from "@/components/Unique/Buttons/DownloadBtn/DownloadBtn";
//  Assets
import lws from "@/assets/avatar/Academy/lws.svg";

const Training = () => {
  return (
    <div
      className={`  my-4 p-1 flex sm:pl-3 sm:py-2 items-start lg:flex-row flex-col  justify-between lg:items-center  rounded-md   text-blue-100 `}
      style={{
        background: `linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85))`,
      }}
    >
      <div className="items-center flex sm:gap-x-4 gap-x-1 ">
        <Image
          src={lws}
          alt={"Learn with sumit"}
          className="w-16 h-16 xl:w-16 2xl:w-24 2xl:h-24 xl:h-16"
        />
        <div>
          <h3 className="text-sm sm:text-xl text-gray-200 xl:text-2xl font-semibold sm:font-bold">
            Think In A Redux Way
          </h3>
          <h4 className="text-xs sm:text-base text-gray-400 xl:text-lg font-medium sm:font-semibold">
            Learn with Sumit
          </h4>
        </div>
      </div>
      <div className="lg:mr-3 self-end lg:self-auto">
        <DownloadBtn>Certificates</DownloadBtn>
      </div>
    </div>
  );
};
export default Training;
