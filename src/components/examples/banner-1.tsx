import { useLinear } from 'src/hooks/feeders/useLinear';
import { MosaicExample } from '../sub-components/mosaic-example';

import { steak } from 'src/data-stubs/content';
import { FeederProps } from 'src/hooks/feeders/feeder-options';
import { AnimatedTile } from '../animated-tile/animated-tile';
import { sliderL } from '../animations/slider-L';
import { fishEye } from '../animations/fish-eye';
import { sliderU } from '../animations/slider-U';

const rows = 5;
const cols = 5;

const options: FeederProps = {
  content: steak.map((item, index) => ({
    id: index.toString(),
    content: {
      image: item,
      title: `The Ultimate Barbecue Guide`,
      body: `Fire up the grill with our expert barbecuing tips from the M&S chefs, and discover this summer's grilling must-tries.`,
    },
  })),
  interval: 5000,
  onProgress: (progress: number) => {
    console.log('progress', progress);
  },
};

const Banner1 = () => {
  const { tiles, feeder } = useLinear(options);

  return (
    <div
      className="shadow"
      style={{
        maxWidth: '800px',
        display: 'flex',
        borderRadius: '5px',
        overflow: 'hidden',
      }}
      onMouseEnter={() => {
        feeder.clear();
      }}
      onMouseLeave={() => {
        feeder.play();
      }}
    >
      <div
        style={{
          display: 'flex',
          padding: '30px',
          flexDirection: 'column',
          backgroundColor: '#4a4a4a',
          background:
            'linear-gradient(122deg, rgba(74, 74, 74, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(94, 94, 94, 1) 100%)',
        }}
      >
        <AnimatedTile delay={500} animation={sliderU} tileId={tiles[0].id}>
          <h2 style={{ color: '#fff' }}>
            {(tiles[0]?.content as { title: string }).title}
          </h2>
        </AnimatedTile>
        <AnimatedTile delay={500} animation={sliderU} tileId={tiles[0].id}>
          <p style={{ color: '#ccc', lineHeight: '1.5' }}>
            {(tiles[0]?.content as { body: string }).body}
          </p>
        </AnimatedTile>
      </div>
      <div
        style={{
          width: `round(up, 50%, ${cols}px)`,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            height: `round(up, 100%, ${cols}px)`,
          }}
        >
          <MosaicExample
            rows={rows}
            cols={cols}
            imageUrl={(tiles[0]?.content as { image: string }).image}
          />
        </div>
      </div>
    </div>
  );
};

export { Banner1 };
