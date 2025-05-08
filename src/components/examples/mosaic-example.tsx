import { useLinear } from 'src/hooks/feeders/useLinear';
import { Picture, Portion } from '../picture';
import { TileGrid } from '../tile-grid/tile-grid';

import { AnimatedTile } from '../animated-tile/animated-tile';

import { steak } from 'src/data-stubs/content';

import { useMemo } from 'react';
// import { tarzan } from '../animations/tarzan';
import { slider } from '../animations/sliders';
import { tarzan } from '../animations/tarzan';
import { fishEye } from '../animations/fish-eye';

const MosaicExample = () => {
  const rows = 5;
  const cols = 5;

  const content = useMemo(() => {
    return steak
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
              src={p.replace('w=400', 'w=600')}
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
      interval: 4000,
      showTileCount: rows * cols,
    }),
    [content],
  );

  const { tiles, feeder } = useLinear(options);

  return (
    <div
      style={{
        maxWidth: '400px',
        backgroundColor: '#ccc',
        borderRadius: '0 5px 5px 0',
        overflow: 'hidden',
      }}
      className="shadow"
    >
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
          <AnimatedTile
            key={index}
            animation={fishEye}
            delay={0 * index}
            tileId={p.id}
          >
            {p.content}
          </AnimatedTile>
        ))}
      </TileGrid>
    </div>
  );
};

export { MosaicExample };
