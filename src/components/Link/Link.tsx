import styles from "./Link.module.css";
import { ReactNode } from "react";
import cx from "classnames";

type Props = {
  href: string;
  content: ReactNode;
  className?: string;
};

const Link = ({ href, content, className }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cx(styles.root, className)}
    >
      {content}
    </a>
  );
};

export { Link };
