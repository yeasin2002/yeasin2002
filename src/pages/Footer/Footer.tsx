import contactList from "@/data/contactInfo/contactInfo";
import Logo from "@/components/Globals/Logo";
import WaterWave from "./WaterWave";

const Footer = () => {
  return (
    <>
      {/* <WaterWave /> */}
      <footer className="eachSections pb-14 ">
        <div className="flex justify-between">
          <Logo />

          <div>
            <div className=" gap-x-4 flex">
              {contactList.map((val) => {
                return (
                  <a
                    href={val.link}
                    key={val.name}
                    target="_blank"
                    className={`hover:scale-110 text-2xl transition-all `}
                  >
                    {val.components}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="into-center gap-x-2 mt-5 sm:text-xl 2xl:text-2xl">
          <p>All Right Reserved </p>
          <p>@yeasin2002.dev</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
