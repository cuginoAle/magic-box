import { useLinear } from 'src/hooks/feeders/useLinear';

import { steak } from 'src/data-stubs/content';
import { FeederProps } from 'src/hooks/feeders/feeder-options';
import { AnimatedTile } from '../animated-tile/animated-tile';
import { sliderU } from '../animations/slider-U';
import { Picture } from '../picture';
import { tarzan } from '../animations/tarzan';
import { sliderD } from '../animations/slider-D';
import { fade } from '../animations/fade';

const options: FeederProps = {
  content: steak.reverse().map((item, index) => ({
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

const BannerTarzan = () => {
  const { tiles, feeder } = useLinear(options);

  return (
    <div
      className="shadow"
      style={{
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
          width: '50%',
          position: 'relative',
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        <AnimatedTile animation={tarzan} tileId={tiles[0].id}>
          <div style={{ height: '100%', maxHeight: '100%' }}>
            <Picture
              src={(tiles[0]?.content as { image: string }).image.replace(
                'w=400',
                'w=600',
              )}
              alt="img"
              style={{ aspectRatio: 2 }}
            />
          </div>
        </AnimatedTile>
      </div>
      <div
        style={{
          overflow: 'hidden',
          display: 'flex',
          padding: '40px',
          flexDirection: 'column',
          gap: '20px',
          backgroundColor: '#4a4a4a',
          background:
            'linear-gradient(122deg, rgba(74, 74, 74, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(94, 94, 94, 1) 100%)',
        }}
      >
        <AnimatedTile delayOut={250} animation={sliderU} tileId={tiles[0].id}>
          <h2 style={{ color: '#fff' }}>
            {(tiles[0]?.content as { title: string }).title}
          </h2>
        </AnimatedTile>
        <AnimatedTile delayIn={0} animation={fade} tileId={tiles[0].id}>
          <p style={{ color: '#ccc', lineHeight: '1.5' }}>
            {(tiles[0]?.content as { body: string }).body}
          </p>
        </AnimatedTile>

        <AnimatedTile animation={sliderD} tileId={tiles[0].id}>
          <button>Read more</button>
        </AnimatedTile>
      </div>
    </div>
  );
};

export { BannerTarzan };
