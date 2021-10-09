import React, { MouseEventHandler } from "react";
import styles from "./Button.module.css";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ onClick }: Props) => {
  return (
    <button className={styles.root} onClick={onClick}>
      Check
    </button>
  );
};

export { Button };
