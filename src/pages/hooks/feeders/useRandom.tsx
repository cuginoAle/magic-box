import { useCallback, useRef, useState } from 'react';
import { useInterval } from '../useInterval';
import { ContentProps, FeederProps } from './feeder-options';

import { FeederType } from './types';

const shuffle = (arr: unknown[]) =>
  arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

const useRandom = ({
  content,
  showTileCount,
  interval,
  autoStart,
  delayBeforeNextLoop = interval,
}: FeederProps): FeederType => {
  const randomImageIndices = useRef(
    shuffle(
      new Array(showTileCount).fill('').map((_, index) => index),
    ) as number[],
  );

  const contentIndex = useRef(0);
  const cursor = useRef(showTileCount);
  const firstRun = useRef(true);

  const [tiles, setTiles] = useState<ContentProps[]>(
    content.slice(0, showTileCount),
  );

  const tick = useCallback(() => {
    setTiles((prevTiles) => {
      prevTiles.splice(
        randomImageIndices.current[contentIndex.current],
        1,
        content[cursor.current],
      );
      return [...prevTiles];
    });

    cursor.current =
      cursor.current + 1 === content.length ? 0 : cursor.current + 1;

    contentIndex.current =
      contentIndex.current + 1 === showTileCount ? 0 : contentIndex.current + 1;

    firstRun.current = false;
  }, [content, showTileCount]);

  const delay =
    contentIndex.current === 0 && !firstRun.current
      ? delayBeforeNextLoop
      : interval;

  const feeder = useInterval(tick, delay, autoStart);

  return { tiles, feeder };
};

export { useRandom };
