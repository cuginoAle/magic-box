import { ReactElement } from 'react';
import { dummyContent } from '../../data-stubs/content';

type ContentProps = {
  id: string;
  content: ReactElement;
};

type FeederProps = {
  content: ContentProps[];
  showTileCount: number;
  interval: number;
  delayBeforeNextLoop?: number;
  autoStart?: boolean;
};
type Feeders = 'linear' | 'wave' | 'random';
type ContentFeederProps = FeederProps & {
  type: Feeders;
};

const randomFeederOptions: ContentFeederProps = {
  content: dummyContent,
  interval: 1500,
  showTileCount: 8,
  type: 'random',
};

const linearFeederOptions: ContentFeederProps = {
  content: dummyContent,
  interval: 2000,
  showTileCount: 8,
  type: 'linear',
};

const waveFeederOptions: ContentFeederProps = {
  content: dummyContent,
  interval: 250,
  showTileCount: 8,
  delayBeforeNextLoop: 4000,
  type: 'linear',
};

const feederOptions = {
  random: randomFeederOptions,
  wave: waveFeederOptions,
  linear: linearFeederOptions,
};

type FeedersKey = keyof typeof feederOptions;

export { feederOptions };
export type { ContentFeederProps, FeederProps, ContentProps, FeedersKey };
