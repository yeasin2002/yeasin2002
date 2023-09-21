import { LogoFont } from "@/utils/GoogleFonts";

const Logo = () => {
  return (
    <>
      <p
        className={`text-paste md:text-2xl 2xl:text-3xl font-bold ${LogoFont.className}`}
      >
        {"<"}
        Yeasin
        {"/>"}
      </p>
    </>
  );
};

export default Logo;
