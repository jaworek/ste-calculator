import styles from "./Tier.module.css";

const Tier = ({ steValue }: { steValue: number }) => {
  if (steValue >= 250 && steValue <= 2750) {
    return <div>You qualify for Tier 1 or Squardron.</div>;
  }

  if (steValue >= 250 && steValue < 3000) {
    return <div>You qualify for Tier 1.</div>;
  }

  if (steValue >= 3000) {
    return <div>Congratulations! You qualify for Tier 2, 3, and 4.</div>;
  }

  return (
    <div>Unfortunately, you do not qualify for any Tier or Squadrons :(</div>
  );
};

export { Tier };
