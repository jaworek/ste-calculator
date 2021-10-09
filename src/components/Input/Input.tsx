import styles from "./Input.module.css";
import { ChangeEventHandler } from "react";

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Input = ({ value, onChange }: Props) => {
  return <input className={styles.root} value={value} onChange={onChange} />;
};

export default Input;
