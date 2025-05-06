import { useLinear } from 'src/hooks/feeders/useLinear';
import { Picture, Portion } from '../picture';
import { TileGrid } from '../tile-grid/tile-grid';

import { AnimatedTile } from '../animated-tile/animated-tile';

import { pictures } from 'src/data-stubs/content';

import { useMemo } from 'react';
import { tarzan } from '../animations/tarzan';

const MosaicExample = () => {
  const rows = 5;
  const cols = 5;

  const content = useMemo(() => {
    return pictures
      .map((p) => {
        return [...Array(rows * cols)].map((_, index) => {
          const portion: Portion = {
            grid: { rows, cols },
            position: {
              row: Math.floor(index / cols),
              col: index % cols,
            },
          };
          return (
            <Picture
              key={index}
              src={p.replace('w=400', 'w=800')}
              alt="img"
              portion={portion}
            />
          );
        });
      })
      .flat()
      .map((element, index) => ({
        id: 'c' + index,
        content: element,
      }));
  }, []);

  const options = useMemo(
    () => ({
      content: content,
      interval: 20,
      showTileCount: rows * cols,
      delayBeforeNextLoop: 3000,
      autoStart: true,
    }),
    [content],
  );

  const { tiles, feeder } = useLinear(options);

  return (
    <div style={{ maxWidth: '400px' }}>
      <TileGrid
        rows={rows}
        cols={cols}
        onMouseEnter={() => {
          feeder.clear();
        }}
        onMouseLeave={() => {
          feeder.play();
        }}
      >
        {tiles.map((p, index) => (
          <AnimatedTile key={index} animation={tarzan} tileId={p.id}>
            {p.content}
          </AnimatedTile>
        ))}
      </TileGrid>
    </div>
  );
};

export { MosaicExample };
