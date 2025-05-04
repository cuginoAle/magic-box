import { useCallback, useEffect, useMemo, useRef } from 'react';

type TimeoutType = {
  clear: () => void;
};
const useTimeout = (fn: () => void, delay: number): TimeoutType => {
  const startRef = useRef<number>(Date.now());
  const hndRef = useRef<number>(null);

  const loop = useCallback(() => {
    if (Date.now() - startRef.current >= delay) {
      fn();
      startRef.current = Date.now();
    }
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

  return useMemo(
    () => ({
      clear,
    }),
    [clear],
  );
};
export { useTimeout };

export type { TimeoutType };
