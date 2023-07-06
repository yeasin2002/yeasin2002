import { HiMenuAlt2 } from "react-icons/hi";

const MobileNav = () => {
  return (
    <nav className="xl:hidden block">
      <div>
        <HiMenuAlt2 className="text-white" />
        Mobile Nav
      </div>
    </nav>
  );
};

export default MobileNav;
