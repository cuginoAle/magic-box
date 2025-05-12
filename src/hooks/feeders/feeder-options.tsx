import { ReactNode } from 'react';
import { dummyContent } from '../../data-stubs/content';

type ContentProps = {
  id: string;
  content: ReactNode;
};

type FeederProps = {
  content: ContentProps[];
  clusterSize?: number;
  interval: number;
  delayBeforeNextLoop?: number;
  onProgress?: (progress: number) => void;
};
type Feeders = 'linear' | 'wave' | 'random';
type ContentFeederProps = FeederProps & {
  type: Feeders;
};

const randomFeederOptions: ContentFeederProps = {
  content: dummyContent,
  interval: 1500,
  clusterSize: 8,
  type: 'random',
};

const linearFeederOptions: ContentFeederProps = {
  content: dummyContent,
  interval: 2000,
  clusterSize: 8,
  type: 'linear',
};

const waveFeederOptions: ContentFeederProps = {
  content: dummyContent,
  interval: 250,
  clusterSize: 8,
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
