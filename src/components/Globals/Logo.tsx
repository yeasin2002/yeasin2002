import { Kurale } from "next/font/google";
const font = Kurale({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const Logo = () => {
  return (
    <>
      <p
        className={`text-paste md:text-2xl 2xl:text-3xl font-bold ${font.className}`}
      >
        {"<"}
        Yeasin
        {"/>"}
      </p>
    </>
  );
};

export default Logo;
