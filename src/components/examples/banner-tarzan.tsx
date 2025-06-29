import { useLinear } from 'src/hooks/feeders/useLinear';

import { steak } from 'src/data-stubs/content';
import { FeederProps } from 'src/hooks/feeders/feeder-options';
import { AnimatedTile } from '../animated-tile/animated-tile';
import { sliderU } from '../animations/slider-U';
import { Picture } from '../picture';
import { tarzan } from '../animations/tarzan';
import { sliderD } from '../animations/slider-D';
import { fade } from '../animations/fade';
import { useCallback, useRef, useState } from 'react';
import { Progress } from '../progress';

const options: FeederProps = {
  content: steak.reverse().map((item, index) => ({
    id: index.toString(),
    content: {
      image: item,
      title: `The Ultimate Barbecue Guide`,
      body: `Fire up the grill with our expert barbecuing tips from our chefs, and discover this summer's grilling must-tries.`,
    },
  })),
  interval: 5000,
  onProgress: (progress: number) => {
    console.log('progress', progress);
  },
};

const BannerTarzan = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev + 1 >= options.content.length) {
        return 0;
      }
      return prev + 1;
    });
  }, []);

  const previous = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev - 1 < 0) {
        return options.content.length - 1;
      }
      return prev - 1;
    });
  }, []);

  return (
    <div
      className="shadow"
      style={{
        display: 'flex',
        borderRadius: '5px',
        overflow: 'hidden',
        position: 'relative',
      }}
      onMouseEnter={() => {
        setIsPaused(true);
      }}
      onMouseLeave={() => {
        setIsPaused(false);
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
        <AnimatedTile
          animation={tarzan}
          tileId={options.content[currentIndex].id}
        >
          <div style={{ height: '100%', maxHeight: '100%' }}>
            <Picture
              src={(
                options.content[currentIndex]?.content as { image: string }
              ).image.replace('w=400', 'w=600')}
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
        <AnimatedTile
          delayOut={250}
          animation={sliderU}
          tileId={options.content[currentIndex].id}
        >
          <h2 style={{ color: '#fff' }}>
            {
              (options.content[currentIndex]?.content as { title: string })
                .title
            }
          </h2>
        </AnimatedTile>
        <AnimatedTile
          delayIn={0}
          animation={fade}
          tileId={options.content[currentIndex].id}
        >
          <p style={{ color: '#ccc', lineHeight: '1.5' }}>
            {(options.content[currentIndex]?.content as { body: string }).body}
          </p>
        </AnimatedTile>

        <AnimatedTile
          animation={sliderD}
          tileId={options.content[currentIndex].id}
        >
          <button>Read more</button>
        </AnimatedTile>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '5px',
          right: '5px',
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
        }}
      >
        <button className="navButton" onClick={previous}>
          &#8249;
        </button>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            marginLeft: '-10px',
            marginTop: '-10px',
          }}
        >
          <Progress
            isRunning={!isPaused}
            interval={options.interval}
            size={20}
            onComplete={next}
          />
        </div>
        <button className="navButton" onClick={next}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export { BannerTarzan };
