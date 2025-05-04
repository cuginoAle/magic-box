import { useLinear } from 'src/pages/hooks/feeders/useLinear';
import { feederOptions } from 'src/pages/hooks/feeders/feeder-options';
import { AnimatedTile } from '../animated-tile/animated-tile';
import { TileGrid } from '../tile-grid/tile-grid';
import { AnimType } from '../animations/types';

const LinearExample = ({ selectedAnim }: { selectedAnim: AnimType }) => {
  const { tiles, feeder } = useLinear({
    ...feederOptions.linear,
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

export { LinearExample };
