import React from "react";
import styles from "./Footer.module.css";
import { Link } from "../Link/Link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        Repository:{" "}
        <Link
          href="https://github.com/jaworek/ste-calculator"
          text="https://github.com/jaworek/ste-calculator"
        />
      </div>
      <div>
        Data source:{" "}
        <Link
          href="https://github.com/starterra/tools"
          text="https://github.com/starterra/tools"
        />
      </div>
    </footer>
  );
};

export { Footer };
