import type { ReactNode } from "react";
import styles from "./Card.module.css";
import cx from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: Props) => {
  return <div className={cx(styles.root, className)}>{children}</div>;
};

export { Card };
