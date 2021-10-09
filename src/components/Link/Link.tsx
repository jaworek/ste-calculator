import styles from "./Link.module.css";

type Props = {
  href: string;
  text: string;
};

const Link = ({ href, text }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.root}>
      {text}
    </a>
  );
};

export { Link };
