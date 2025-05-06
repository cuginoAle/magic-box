import { ReactNode, Children, HTMLAttributes } from 'react';
import styles from './styles.module.css';
type Props = HTMLAttributes<HTMLUListElement> & {
  children: ReactNode;
  rows?: number;
  cols?: number;
};

const TileGrid = ({ children, ...rest }: Props) => {
  const cssVars = {
    '--rows': rest.rows || 2,
    '--cols': rest.cols || 4,
  } as React.CSSProperties;
  return (
    <ul {...rest} className={styles.root} style={cssVars}>
      {Children.map(children, (c) => (
        <li>{c}</li>
      ))}
    </ul>
  );
};

export { TileGrid };
