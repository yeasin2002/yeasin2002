import classes from "./OverText.module.css";

const OverText = ({ text }: OverText) => {
  const size = "text-xl 2xl:text-5xl";
  return (
    <>
      <button data-text="Awesome" className={classes.button}>
        <span className={classes.actualText}>&nbsp;{text}&nbsp;</span>
        <span className={classes.hoverText} aria-hidden="true">
          &nbsp;{text}&nbsp;
        </span>
      </button>
    </>
  );
};

export default OverText;
