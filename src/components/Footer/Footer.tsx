import React from "react";
import styles from "./Footer.module.css";
import { Link } from "../Link/Link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://github.com/jaworek/ste-calculator"
        content="Repository"
      />
      <Link href="https://github.com/starterra/tools" content="Data source" />
    </footer>
  );
};

export { Footer };
