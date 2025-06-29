import { AnimatedTile } from '../animated-tile/animated-tile';
import { TileGrid } from '../tile-grid/tile-grid';
import { AnimType } from '../animations/types';

import { useLinear } from 'src/hooks/feeders/useLinear';
import React, { useEffect } from 'react';
import { pictures } from 'src/data-stubs/content';
import { Picture } from '../picture';

const WaveExample = ({
  selectedAnim,
  rows = 2,
  cols = 4,
  delay = 2000,
  animDelay = 100,
}: {
  selectedAnim: AnimType;
  rows?: number;
  cols?: number;
  delay?: number;
  animDelay?: number;
}) => {
  const firstRun = React.useRef(true);
  const tileCount = rows * cols;

  const { tiles, feeder } = useLinear({
    content: pictures.slice(0, tileCount * 2).map((item, index) => ({
      id: index.toString(),
      content: (
        <Picture
          style={{ aspectRatio: 1 }}
          key={item}
          src={item.replace('w=400', 'w=300')}
          alt="img"
        />
      ),
    })),
    interval: firstRun.current ? 0 : animDelay * tileCount + delay,
    clusterSize: tileCount,
  });

  useEffect(() => {
    firstRun.current = false;
  }, [tiles]);

  return (
    <TileGrid
      onMouseEnter={() => {
        feeder.clear();
      }}
      onMouseLeave={() => {
        feeder.play();
      }}
      rows={rows}
      cols={cols}
    >
      {tiles.map((p, index) => {
        return (
          <AnimatedTile
            delayIn={(firstRun.current ? 0 : animDelay) * index}
            delayOut={(firstRun.current ? 0 : animDelay) * index}
            key={index}
            animation={selectedAnim}
            tileId={p.id}
          >
            {p.content as React.ReactElement}
          </AnimatedTile>
        );
      })}
    </TileGrid>
  );
};

export { WaveExample };
