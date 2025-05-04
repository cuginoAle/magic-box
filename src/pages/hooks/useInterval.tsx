import { useCallback, useEffect, useMemo, useRef } from 'react';

type IntervalType = {
  play: () => void;
  pause: () => void;
  clear: () => void;
};

const useInterval = (
  fn: () => void,
  delay: number,
  autoStart: boolean = false,
): IntervalType => {
  const startRef = useRef<number>(Date.now());
  const hndRef = useRef<number>(null);
  const paused = useRef(!autoStart);

  const loop = useCallback(() => {
    hndRef.current = requestAnimationFrame(loop);

    if (!paused.current && Date.now() - startRef.current >= delay) {
      fn();
      startRef.current = Date.now();
    }
  }, [delay, fn]);

  useEffect(() => {
    hndRef.current = requestAnimationFrame(loop);
    return () => {
      if (hndRef.current) cancelAnimationFrame(hndRef.current);
    };
  }, [delay, loop]);

  const pause = useCallback(() => {
    paused.current = true;
    if (hndRef.current) cancelAnimationFrame(hndRef.current);
  }, []);

  const clear = useCallback(() => {
    if (hndRef.current) cancelAnimationFrame(hndRef.current);
  }, []);

  const play = useCallback(() => {
    paused.current = false;
    hndRef.current = requestAnimationFrame(loop);
  }, [loop]);

  return useMemo(
    () => ({
      play,
      pause,
      clear,
    }),
    [play, pause, clear],
  );
};
export { useInterval };
export type { IntervalType };
