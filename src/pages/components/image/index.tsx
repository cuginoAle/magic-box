import styles from "./styles.module.css";

const Image = ({ src }: { src: string }) => {
  return <img className={styles.img} src={src} />;
};

export { Image };
