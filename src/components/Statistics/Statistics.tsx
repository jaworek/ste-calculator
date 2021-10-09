import { Data } from "../../types/data";
import styles from "./Statistics.module.css";
import CountUp from "react-countup";

const Statistics = ({ data }: { data: Data }) => {
  return (
    <div>
      <div>Address: {data.address}</div>
      <div className={styles.root}>
        <div>{data.lp_amount.toFixed(2)} LP * 1.25</div>
        <div>+ {data.stt_amount} STT</div>
        <div>=</div>
        <div className={styles.ste}>
          <CountUp end={data.ste_value} duration={1} decimals={2} /> STE
        </div>
      </div>
    </div>
  );
};

export { Statistics };
