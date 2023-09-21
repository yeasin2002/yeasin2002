import { GirassolFont } from "@/utils/GoogleFonts";
import styles from "./submitBtn.module.css";
const SubmitBtn = ({ children, ...rest }: OnlyChild) => {
  return (
    <>
      <button
        className={styles.btn + " px-3 py-2 mt-6 2xl:px-5 2xl:py-3"}
        {...rest}
      >
        <div className={styles.svgWrapper1}>
          <div className={styles.svgWrapper}>
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <span className={GirassolFont.className}>{children}</span>
      </button>
    </>
  );
};

export default SubmitBtn;
