import classes from "./KindCougarStyle.module.css";

const KindCougar = ({ children, title, ...rest }: KindCougar) => {
  return (
    <>
      <button className={classes.cougarBtn} {...rest}>
        <div>
          <div className={classes.svgWrapper}>{children}</div>
        </div>
        <span>{title}</span>
      </button>
    </>
  );
};

export default KindCougar;
