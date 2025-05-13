import { AnimType } from './types';

const slider_in = [
  { transform: 'translateX(-100%)' },
  { transform: 'translateX(0)' },
];

const slider_out = [
  { transform: 'translateX(0) scale(1)', opacity: 1 },
  { transform: 'translateX(-100%) scale(0.8)', opacity: 0 },
];

const slider_in_timing = {
  duration: 1500,
  iterations: 1,
  easing: 'cubic-bezier(0.497, 0.41, 0.14, 1)',
  fill: 'forwards' as FillMode,
};

const slider_out_timing = {
  duration: 1000,
  iterations: 1,
  easing: 'cubic-bezier(0.762, -0.014, 0.252, 0.988)',
  fill: 'forwards' as FillMode,
};

const sliderL: AnimType = (refs, delayIn = 0, delayOut = 0) => {
  const animation: Animation[] = [];

  if (refs?.[1]) {
    refs[1].style.transform = 'translateX(0) scale(1)';
    animation.push(
      refs[1].animate(slider_out, { ...slider_out_timing, delay: delayOut }),
    );
  }

  if (refs?.[0]) {
    refs[0].style.transform = 'translateX(-100%)';
    animation.push(
      refs[0].animate(slider_in, { ...slider_in_timing, delay: delayIn }),
    );
  }

  return animation;
};

export { sliderL };
