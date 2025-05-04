import { useLinear } from 'src/pages/hooks/feeders/useLinear';
import { Picture, Portion } from '../picture';
import { TileGrid } from '../tile-grid/tile-grid';

import { AnimatedTile } from '../animated-tile/animated-tile';
import { tarzan } from '../animations/tarzan';
import { pictures } from 'src/pages/data-stubs/content';
import { useEffect, useMemo } from 'react';

const MosaicExample = () => {
  const rows = 3;
  const cols = 3;

  const content = useMemo(() => {
    return pictures.map((p) => {
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
            src={p.replace('w=400', 'w=1200')}
            alt="img"
            portion={portion}
          />
        );
      });
    });
  }, []);

  useEffect(() => {
    console.log('content', content);
  }, [content]);

  const options = useMemo(
    () => ({
      content: content.flat().map((element, index) => ({
        id: 'c' + index,
        content: element,
      })),
      interval: 50,
      showTileCount: rows * cols,
      delayBeforeNextLoop: 2000,
      autoStart: true,
    }),
    [content],
  );

  useEffect(() => {
    console.log('options', options);
  }, [options]);

  const { tiles, feeder } = useLinear(options);

  useEffect(() => {
    console.log('feeder');
    // feeder.play();
    // const hnd = setTimeout(feeder.play, 1000);
    return () => {
      // clearTimeout(hnd);
      feeder.clear();
    };
  }, []);

  return (
    <div style={{ maxWidth: '400px' }}>
      <TileGrid
        rows={rows}
        cols={cols}
        onMouseEnter={() => {
          feeder.pause();
        }}
        onMouseLeave={() => {
          feeder.play();
        }}
      >
        {tiles.map((p, index) => {
          return (
            <AnimatedTile key={index} animation={tarzan} tileId={p.id}>
              {p.content}
            </AnimatedTile>
          );
        })}
      </TileGrid>
    </div>
  );
};

export { MosaicExample };
