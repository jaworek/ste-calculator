import styles from "./Disclaimer.module.css";

const Disclaimer = () => {
  return (
    <div className={styles.root}>
      <div>This tool does not check if you qualify for Whalecraft!</div>
      <div>Data presented here may be inaccurate!</div>
    </div>
  );
};

export { Disclaimer };
