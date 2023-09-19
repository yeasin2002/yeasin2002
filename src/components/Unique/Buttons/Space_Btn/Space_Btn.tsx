import classes from "./Space_Btn.module.css";

const Space_Btn = ({ title = "space" }: SpaceBtn) => {
  return (
    <>
      <button className={classes.btn} type="button">
        <strong className={classes.title}>{title}</strong>
        <div id={classes.containerStars}>
          <div id={classes.stars}></div>
        </div>

        <div id={classes.glow}>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
        </div>
      </button>
    </>
  );
};

export default Space_Btn;
