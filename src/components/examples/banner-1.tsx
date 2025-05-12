import { useLinear } from 'src/hooks/feeders/useLinear';
import { MosaicExample } from '../sub-components/mosaic-example';

import { steak } from 'src/data-stubs/content';
import { FeederProps } from 'src/hooks/feeders/feeder-options';

const rows = 5;
const cols = 5;

const options: FeederProps = {
  content: steak.map((item, index) => ({
    id: index.toString(),
    content: item,
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
        <h2 style={{ color: '#fff' }}>THE ULTIMATE BARBECUE GUIDE</h2>
        <p style={{ color: '#ccc', lineHeight: '1.5' }}>
          Fire up the grill with our expert barbecuing tips from the M&S chefs,
          and discover this summer&apos;s grilling must-tries.
        </p>
      </div>
      <div style={{ width: `round(nearest, 50%, ${cols}px)`, flexShrink: 0 }}>
        <MosaicExample
          rows={rows}
          cols={cols}
          imageUrl={tiles[0].content as string}
        />
      </div>
    </div>
  );
};

export { Banner1 };
