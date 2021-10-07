import styles from "../pages/Home.module.css";

const Disclaimer = () => {
  return (
    <div className={styles.disclaimer}>
      <div>This tool does not check if you qualify for Whalecraft!</div>
      <div>Data presented here may be inaccurate!</div>
    </div>
  );
};

export { Disclaimer };
