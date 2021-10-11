import styles from "./Progress.module.css";
import { useEffect, useState } from "react";

type Props = {
  steValue: number;
};

const percentage = (steValue: number) => {
  if (steValue > 3000) {
    return 100;
  }

  return (steValue / 3000) * 100;
};

const Progress = ({ steValue }: Props) => {
  const [x, setX] = useState(0);

  useEffect(() => {
    setX(percentage(steValue));
  }, [steValue]);

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.edek}
        style={{
          backgroundColor: "red",
          width: `${x}%`,
          borderRadius: "22px",
        }}
      />
      <div className={styles.ste250}>*</div>
      <div className={styles.ste3000}>*</div>
    </div>
  );
};

export { Progress };
