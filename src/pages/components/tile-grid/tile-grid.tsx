import { ReactNode, Children, HTMLAttributes } from "react";
import styles from "./styles.module.css";
type Props = HTMLAttributes<HTMLUListElement> & { children: ReactNode };

const TileGrid = ({ children, ...rest }: Props) => {
  return (
    <ul {...rest} className={styles.root}>
      {Children.map(children, (c) => (
        <li>{c}</li>
      ))}
    </ul>
  );
};

export { TileGrid };
