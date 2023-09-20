import styles from "./liyaxuInput.module.css";

const LiyaxuInput = () => {
  const textArr = [
    {
      text: "S",
      delay: 100,
    },
    {
      text: "e",
      delay: 150,
    },
    {
      text: "a",
      delay: 200,
    },
    {
      text: "r",
      delay: 250,
    },
    {
      text: "c",
      delay: 300,
    },
    {
      text: "h",
      delay: 350,
    },
  ];
  return (
    <div>
      <div className={styles.formControl}>
        <input type="value" required={true} />
        <label>
          {textArr.map((val) => {
            const delays = `${val.delay}ms`;
            return (
              <span
                key={val.text}
                style={{
                  transitionDelay: delays,
                }}
              >
                {val.text}
              </span>
            );
          })}
        </label>
      </div>
    </div>
  );
};

export default LiyaxuInput;
