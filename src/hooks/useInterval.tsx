import { useCallback, useEffect, useMemo, useRef } from 'react';

type IntervalType = {
  play: () => void;
  clear: () => void;
};

const useInterval = (fn: () => void, delay: number): IntervalType => {
  const startRef = useRef<number>(Date.now());
  const hndRef = useRef<number>(null);

  const loop = useCallback(() => {
    if (Date.now() - startRef.current >= delay) {
      startRef.current = Date.now();
      fn();
    }
    hndRef.current = requestAnimationFrame(loop);
  }, [delay, fn]);

  useEffect(() => {
    hndRef.current = requestAnimationFrame(loop);
    return () => {
      if (hndRef.current) cancelAnimationFrame(hndRef.current);
    };
  }, [loop]);

  const clear = useCallback(() => {
    if (hndRef.current) cancelAnimationFrame(hndRef.current);
  }, []);

  const play = useCallback(() => {
    hndRef.current = requestAnimationFrame(loop);
  }, [loop]);

  useEffect(() => {}, [play, clear]);

  return useMemo(
    () => ({
      play,

      clear,
    }),
    [play, clear],
  );
};
export { useInterval };
export type { IntervalType };
