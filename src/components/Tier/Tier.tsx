import styles from "./Tier.module.css";
import { Faction } from "../../types/faction";

type Props = {
  steValue: number;
  faction: Faction;
};

const name = (faction: Faction) => {
  if (faction === "degens") {
    return "Degen";
  }

  if (faction === "interstellars") {
    return "Interstellar";
  }

  if (faction === "lunatics") {
    return "Lunatic";
  }
};

const tierNumber = (faction: Faction) => {
  if (faction === "degens") {
    return 4;
  }

  if (faction === "interstellars") {
    return 3;
  }

  if (faction === "lunatics") {
    return 2;
  }
};

const Tier = ({ steValue, faction }: Props) => {
  if (steValue >= 250 && steValue <= 2750) {
    return <div>You qualify for Tier 1 or Squardron.</div>;
  }

  if (steValue >= 250 && steValue < 3000) {
    return <div>You qualify for Tier 1.</div>;
  }

  if (steValue >= 3000) {
    return (
      <div>
        Congratulations! You qualify for Tier {tierNumber(faction)}.
        <div>
          You are a true <span className={styles.faction}>{name(faction)}</span>{" "}
          🔥🔥🔥
        </div>
      </div>
    );
  }

  return (
    <div>Unfortunately, you do not qualify for any Tier or Squadrons :(</div>
  );
};

export { Tier };
