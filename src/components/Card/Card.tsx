import type { ReactNode } from "react";
import styles from "./Card.module.css";

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => {
  return <div className={styles.root}>{children}</div>;
};

export default Card;
