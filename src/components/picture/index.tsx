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
};

const Picture = ({ src, alt, portion, className }: Props) => {
  const cssVars = {
    '--rows': portion?.grid.rows,
    '--cols': portion?.grid.cols,
    '--position-row': portion?.position.row,
    '--position-col': portion?.position.col,
  } as CSSProperties;

  return portion ? (
    <div className={`${styles.wrapper} ${className || ''}`} style={cssVars}>
      <img alt={alt} className={styles.img} src={src} />
    </div>
  ) : (
    <img alt={alt} className={`${styles.img} ${className || ''}`} src={src} />
  );
};

export { Picture };
export type { Portion };
