import classes from "./OverText.module.css";
interface Props extends React.ComponentProps<"button"> {
  text: string;
}

const OverText = ({ text, className }: Props) => {
  const size = "text-xl 2xl:text-5xl";
  return (
    <>
      <button data-text="Awesome" className={classes.button + " " + className}>
        <span className={classes.actualText}>&nbsp;{text}&nbsp;</span>
        <span className={classes.hoverText} aria-hidden="true">
          &nbsp;{text}&nbsp;
        </span>
      </button>
    </>
  );
};

export default OverText;
