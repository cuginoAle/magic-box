import { useCallback, useRef, useState } from 'react';
import { useInterval } from '../useInterval';
import { ContentProps, FeederProps } from './feeder-options';

import { FeederType } from './types';

const useLinear = ({
  content,
  showTileCount,
  interval,
  delayBeforeNextLoop = interval,
}: FeederProps): FeederType => {
  const contentIndex = useRef(0);
  const cursor = useRef(0);
  const delayRef = useRef(delayBeforeNextLoop);
  const clustersRef = useRef(
    content.reduce((acc, value, index) => {
      const clusterIndex = Math.floor(index / showTileCount);
      if (!acc[clusterIndex]) {
        acc[clusterIndex] = [];
      }
      acc[clusterIndex].push(value);
      return acc;
    }, [] as ContentProps[][]),
  );

  const [tiles, setTiles] = useState<ContentProps[]>(
    content.slice(0, showTileCount),
  );

  const tick = useCallback(() => {
    delayRef.current =
      contentIndex.current + 1 === showTileCount
        ? delayBeforeNextLoop
        : interval;

    const newContent = [...clustersRef.current[cursor.current]];
    const nextContent = [
      ...clustersRef.current[
        cursor.current + 1 === clustersRef.current.length
          ? 0
          : cursor.current + 1
      ],
    ];

    newContent.splice(
      0,
      contentIndex.current + 1,
      ...nextContent.slice(0, contentIndex.current + 1),
    );

    setTiles(newContent);

    if (contentIndex.current + 1 === showTileCount) {
      cursor.current =
        cursor.current + 1 === clustersRef.current.length
          ? 0
          : cursor.current + 1;
    }

    contentIndex.current =
      contentIndex.current + 1 === showTileCount ? 0 : contentIndex.current + 1;
  }, [showTileCount, delayBeforeNextLoop, interval]);

  const feeder = useInterval(tick, delayRef.current);

  return { tiles, feeder };
};

export { useLinear };
