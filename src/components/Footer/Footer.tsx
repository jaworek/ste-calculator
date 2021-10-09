import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        Repository:{" "}
        <a
          href="https://github.com/jaworek/ste-calculator"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/jaworek/ste-calculator
        </a>
      </div>
      <div>
        Data source:{" "}
        <a
          href="https://github.com/starterra/tools"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/starterra/tools
        </a>
      </div>
    </footer>
  );
};

export { Footer };
