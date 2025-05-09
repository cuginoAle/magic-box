import { AnimType } from './types';

const duration = 1000;

const fishEye_in = [
  { transform: 'scale(0)', transformOrigin: '0 0' },
  { transform: 'scale(1)', transformOrigin: '0 0' },
];

const fishEye_out = [
  { transform: 'scale(1)', transformOrigin: '100% 100%' },
  { transform: 'scale(0)', transformOrigin: '100% 100%' },
];

const timing = {
  duration,
  iterations: 1,
  easing: 'cubic-bezier(0.762, -0.014, 0.252, 0.988)',
  fill: 'forwards' as FillMode,
};

const fishEye: AnimType = (refs, delay = 0) => {
  const animation: Animation[] = [];

  if (refs?.[1]) {
    refs[1].style.transformOrigin = '100% 100%';
    refs[1].style.transform = 'scale(1)';
    animation.push(refs[1].animate(fishEye_out, { ...timing, delay }));
  }

  if (refs?.[0]) {
    refs[0].style.transformOrigin = '0 0';
    refs[0].style.transform = 'scale(0)';
    animation.push(refs[0].animate(fishEye_in, { ...timing, delay }));
  }

  return animation;
};

export { fishEye };
