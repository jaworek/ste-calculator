import { Data } from "../../types/data";
import styles from "./Statistics.module.css";
import CountUp from "react-countup";

const Statistics = ({ data }: { data: Data }) => {
  return (
    <div>
      <div>Address: {data.address}</div>
      <div className={styles.root}>
        <div className={styles.lp}>{data.lp_amount?.toFixed(2)} LP * 1.25</div>
        <div className={styles.stt}>+ {data.stt_amount} STT</div>
        <div className={styles.stt}>=</div>
        <div className={styles.ste}>
          <CountUp end={data.ste_value} duration={1} decimals={2} /> STE
        </div>
      </div>
    </div>
  );
};

export { Statistics };
