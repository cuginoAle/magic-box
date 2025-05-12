import { Picture, Portion } from '../picture';
import { TileGrid } from '../tile-grid/tile-grid';

import { AnimatedTile } from '../animated-tile/animated-tile';

import { useMemo } from 'react';

import { fishEye } from '../animations/fish-eye';

type Props = {
  imageUrl: string;
  rows: number;
  cols: number;
};

const MosaicExample = ({ imageUrl, rows, cols }: Props) => {
  const images = useMemo(() => {
    return [...Array(rows * cols)].map((_, index) => {
      const portion: Portion = {
        grid: { rows, cols },
        position: {
          row: Math.floor(index / cols),
          col: index % cols,
        },
      };
      return {
        id: imageUrl,
        content: (
          <Picture
            key={imageUrl}
            src={imageUrl.replace('w=400', 'w=600')}
            alt="img"
            portion={portion}
          />
        ),
      };
    });
  }, [imageUrl, rows, cols]);

  return (
    <div
      style={{
        backgroundColor: '#222',
        borderRadius: '0 5px 5px 0',
        overflow: 'hidden',
        height: '100%',
      }}
    >
      <TileGrid rows={rows} cols={cols}>
        {images.map((p, index) => {
          const delay = 20 * (Math.floor(index / rows) + (index % cols));

          return (
            <AnimatedTile
              key={index}
              animation={fishEye}
              delay={delay}
              tileId={p.id}
            >
              {p.content}
            </AnimatedTile>
          );
        })}
      </TileGrid>
    </div>
  );
};

export { MosaicExample };
