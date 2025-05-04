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
}: FeederProps): FeederType => {
  const randomImageIndices = useRef(
    shuffle(
      new Array(showTileCount).fill('').map((_, index) => index),
    ) as number[],
  );

  const imgIndex = useRef(0);
  const cursor = useRef(showTileCount);

  const [tiles, setTiles] = useState<ContentProps[]>(
    content.slice(0, showTileCount),
  );

  const tick = useCallback(() => {
    tiles.splice(
      randomImageIndices.current[imgIndex.current],
      1,
      content[cursor.current],
    );
    setTiles([...tiles]);
    cursor.current =
      cursor.current + 1 === content.length ? 0 : cursor.current + 1;

    imgIndex.current =
      imgIndex.current + 1 === showTileCount ? 0 : imgIndex.current + 1;
  }, [content, showTileCount, tiles]);

  const feeder = useInterval(tick, interval, autoStart);

  return { tiles, feeder };
};

export { useRandom };
