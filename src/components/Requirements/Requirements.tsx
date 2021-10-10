import { Card } from "../Card/Card";
import styles from "./Requirements.module.css";

const Requirements = () => {
  return (
    <Card className={styles.root}>
      <div className={styles.title}>Requirements</div>
      <div className={styles.grid}>
        <div>Squadrons:</div>
        <div> 250-2750 STE (single asset staking only)</div>
        <div>Tier 1:</div>
        <div> 250-2999 STE</div>
        <div>Tier 2, 3, 4:</div>
        <div> 3000+ STE</div>
      </div>
    </Card>
  );
};

export { Requirements };
