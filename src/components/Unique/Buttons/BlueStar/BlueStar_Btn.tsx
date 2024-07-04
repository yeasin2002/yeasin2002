import { HiPencilAlt } from "react-icons/hi";
import classes from "./BlueStar.module.css";

const BlueStar_Btn = ({ children, ...res }: BlueStar) => {
  return (
    <>
      <button
        {...res}
        className={`  ${classes.sparkleButton} flex  w-full rounded-full  px-4 py-2  font-bold  2xl:px-20 2xl:py-7  items-center `}
      >
        <span className={classes.spark} />
        <span className={classes.backdrop} />
        <HiPencilAlt className="text-black" />
        <span className={`${classes.text} lg:text-2xl`}>{children}</span>
      </button>
    </>
  );
};

export default BlueStar_Btn;
//
