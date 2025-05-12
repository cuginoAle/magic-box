import { useCallback, useRef, useState } from 'react';
import { useInterval } from '../useInterval';
import { ContentProps, FeederProps } from './feeder-options';

import { FeederType } from './types';

const useLinear = ({
  content,
  clusterSize = 1,
  interval,
  onProgress,
}: FeederProps): FeederType => {
  const [index, setIndex] = useState(0);
  const clustersRef = useRef(
    content.reduce((acc, value, index) => {
      const clusterIndex = Math.floor(index / clusterSize);
      if (!acc[clusterIndex]) {
        acc[clusterIndex] = [];
      }
      acc[clusterIndex].push(value);
      return acc;
    }, [] as ContentProps[][]),
  );

  const tick = useCallback(() => {
    setIndex(index + 1 === clustersRef.current.length ? 0 : index + 1);
    onProgress?.(((index + 1) / clustersRef.current.length) * 100);
  }, [index, onProgress]);

  const feeder = useInterval(tick, interval);

  return { tiles: clustersRef.current[index], feeder };
};

export { useLinear };
