import { MouseEventHandler } from "react";
import cx from "classnames";
import styles from "./Button.module.css";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
};

const Button = ({ onClick, disabled }: Props) => {
  return (
    <button
      className={cx(styles.root, disabled ? styles.disabled : null)}
      disabled={disabled}
      onClick={onClick}
    >
      Check
    </button>
  );
};

export { Button };
