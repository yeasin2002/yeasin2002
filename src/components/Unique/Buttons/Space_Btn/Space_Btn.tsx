import classes from "./Space_Btn.module.css";
// import CV from '/public/Yeasin2002.pdf';


const Space_Btn = ({ title = "space", ...rest }: SpaceBtn) => {
  return (
    <a  href={"/Yeasin2002.pdf"} download={"yeasin2002"} target="_blank"     rel="noopener noreferrer" >
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


/*
In nextjs 14 I'm unable to import pdf file from assets folder.
I am creating a portfolio, and have one part where u need to download my CV, is it possible, and how if it is?

I want to download pdf file on button click. I tried this way :
```
 import CV from '../../../../assets/cv/Yeasin2002.pdf';
```
also I tried this : 

```
<a  href={"../../../../assets/cv/Yeasin2002.pdf"} download target="_blank"     rel="noopener noreferrer" type="file">
</a>
```

It's showing error while importing or downloading. How can I solve this problem?
*/