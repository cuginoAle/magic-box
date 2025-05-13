import { AnimType } from './types';

const fade_in = [
  { transform: 'translateX(20%)', opacity: 0 },
  { transform: 'translateX(0%)', opacity: 1 },
];

const fade_out = [
  { transform: 'translateX(0%)', opacity: 1 },
  { transform: 'translateX(-50%)', opacity: 0 },
];

const fade_in_timing = {
  duration: 1000,
  iterations: 1,
  easing: 'cubic-bezier(0.497, 0.41, 0.14, 1)',
  fill: 'forwards' as FillMode,
};

const fade_out_timing = {
  duration: 1000,
  iterations: 1,
  easing: 'cubic-bezier(0.762, -0.014, 0.252, 0.988)',
  fill: 'forwards' as FillMode,
};

const fade: AnimType = (refs, delayIn = 0, delayOut = 0) => {
  const animation: Animation[] = [];

  if (refs?.[1]) {
    animation.push(
      refs[1].animate(fade_out, { ...fade_out_timing, delay: delayOut }),
    );
  }

  if (refs?.[0]) {
    animation.push(
      refs[0].animate(fade_in, { ...fade_in_timing, delay: delayIn }),
    );
  }

  return animation;
};

export { fade };
