/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.css';
import { CSSProperties } from 'react';

type Portion = {
  grid: { rows: number; cols: number };
  position: { row: number; col: number };
};

type Props = {
  src: string;
  alt: string;
  className?: string;
  portion?: Portion;
  style?: CSSProperties;
};

const Picture = ({ src, alt, portion, className, style }: Props) => {
  const cssVars = {
    '--rows': portion?.grid.rows,
    '--cols': portion?.grid.cols,
    '--position-row': portion?.position.row,
    '--position-col': portion?.position.col,
    ...style,
  } as CSSProperties;

  return portion ? (
    <div className={`${styles.wrapper} ${className || ''}`} style={cssVars}>
      <img alt={alt} className={styles.img} src={src} />
    </div>
  ) : (
    <img
      alt={alt}
      className={`${styles.img} ${className || ''}`}
      src={src}
      style={style}
    />
  );
};

export { Picture };
export type { Portion };
