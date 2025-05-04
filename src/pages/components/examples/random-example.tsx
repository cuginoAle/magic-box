import { useRandom } from 'src/pages/hooks/feeders/useRandom';
import { feederOptions } from 'src/pages/hooks/feeders/feeder-options';
import { AnimatedTile } from '../animated-tile/animated-tile';
import { AnimType } from '../animations/types';
import { TileGrid } from '../tile-grid/tile-grid';

const RandomExample = ({ selectedAnim }: { selectedAnim: AnimType }) => {
  const { tiles, feeder } = useRandom({
    ...feederOptions.random,
    autoStart: true,
  });

  return (
    <TileGrid
      onMouseEnter={() => {
        feeder.pause();
      }}
      onMouseLeave={() => {
        feeder.play();
      }}
    >
      {tiles.map((p, index) => {
        return (
          <AnimatedTile key={index} animation={selectedAnim} tileId={p.id}>
            {p.content}
          </AnimatedTile>
        );
      })}
    </TileGrid>
  );
};

export { RandomExample };
