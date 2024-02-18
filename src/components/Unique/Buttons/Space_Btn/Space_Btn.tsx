import classes from "./Space_Btn.module.css";

const Space_Btn = ({ title = "space", ...rest }: SpaceBtn) => {
  return (
    <a
      href={"/Yeasin2002.pdf"}
      download={"yeasin2002"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className={classes.btn} {...rest} type="button">
        <strong className={classes.title}>{title}</strong>
        <div id={classes.containerStars}>
          <div id={classes.stars}></div>
        </div>

        <div id={classes.glow}>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
        </div>
      </button>
    </a>
  );
};

export default Space_Btn;
