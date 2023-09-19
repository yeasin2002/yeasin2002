import classes from "./OverText.module.css";

const OverText = ({ text }: OverText) => {
  return (
    <>
      <button data-text="Awesome" className={classes.button}>
        <span className="actual-text">&nbsp;{text}&nbsp;</span>
        <span className={classes.hoverText} aria-hidden="true">
          &nbsp;{text}&nbsp;
        </span>
      </button>
    </>
  );
};

export default OverText;
