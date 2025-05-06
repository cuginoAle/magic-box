/* eslint-disable react-hooks/exhaustive-deps */

import {
  ReactElement,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styles from './styles.module.css';

type TileProps = {
  children: ReactElement;
  animation?: (nodes: HTMLDivElement[]) => Animation[];
  tileId: string;
};

const AnimatedTile = ({ children, animation, tileId }: TileProps) => {
  const [removePrevItem, setRemovePrevItem] = useState(false);

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const childrenStackRef = useRef<ReactElement[]>([]);
  const tileIdRef = useRef<string>(null);
  const shouldAnimate = useRef(false);

  if (tileId !== tileIdRef.current) {
    shouldAnimate.current = true;
    tileIdRef.current = tileId;
    childrenStackRef.current.unshift(children);
  }

  childrenStackRef.current.length =
    childrenStackRef.current.length > 2 ? 2 : childrenStackRef.current.length;

  const onAnimationEnd = useCallback(() => {
    if (shouldAnimate.current) {
      setRemovePrevItem(true);
      shouldAnimate.current = false;
    }
  }, []);

  useLayoutEffect(() => {
    if (ref1.current && ref2.current && shouldAnimate.current) {
      setRemovePrevItem(false);
      const anim =
        animation?.(
          [ref2.current, ref1.current].slice(
            0,
            childrenStackRef.current.length,
          ),
        ) || [];

      if (anim[0]) anim[0].onfinish = onAnimationEnd;

      return () => {
        if (anim[0]) anim[0].onfinish = null;
      };
    }
  }, [
    childrenStackRef.current[0],
    childrenStackRef.current[1],
    ref1.current,
    ref2.current,
    shouldAnimate.current,
    onAnimationEnd,
    animation,
  ]);

  return (
    <section className={styles.root}>
      <div ref={ref1}>{!removePrevItem && childrenStackRef.current[1]}</div>
      <div ref={ref2}>{childrenStackRef.current[0]}</div>
    </section>
  );
};

export { AnimatedTile };
