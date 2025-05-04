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
  duration: 1000,
  iterations: 1,
  easing: 'cubic-bezier(0.762, -0.014, 0.252, 0.988)',
  fill: 'forwards' as FillMode,
};

const slider_out_timing = {
  duration: 600,
  iterations: 1,
  easing: 'cubic-bezier(0.762, -0.014, 0.252, 0.988)',
  fill: 'forwards' as FillMode,
};

const slider: AnimType = (refs) => {
  const animation: Animation[] = [];

  // if (refs.length === 1) {
  //   if (refs?.[0]) {
  //     refs[0].style.transformOrigin = '50%';
  //     animation.push(refs[0].animate(slider_in, slider_in_timing));
  //   }
  // } else {
  if (refs?.[1]) {
    refs[1].style.transformOrigin = '50%';
    animation.push(refs[1].animate(slider_out, slider_out_timing));
  }

  if (refs?.[0]) {
    refs[0].style.transformOrigin = '50%';
    animation.push(refs[0].animate(slider_in, slider_in_timing));
  }
  // }

  return animation;
};

export { slider };
