import { AnimType } from './types';

const duration = 1000;

const tarzan_in = [
  { transform: 'rotate(90deg)', transformOrigin: '0 0' },
  { transform: 'rotate(0deg)', transformOrigin: '0 0' },
];

const tarzan_out = [
  { transform: 'rotate(0deg)', transformOrigin: '100% 0' },
  { transform: 'rotate(-90deg)', transformOrigin: '100% 0' },
];

const timing = {
  duration,
  iterations: 1,
  easing: 'cubic-bezier(0.762, -0.014, 0.252, 0.988)',
  fill: 'forwards' as FillMode,
};

const tarzan: AnimType = (refs, delayIn = 0, delayOut = 0) => {
  const animation: Animation[] = [];

  if (refs?.[1]) {
    refs[1].style.transformOrigin = '100% 0';
    refs[1].style.transform = 'rotate(0deg)';
    animation.push(refs[1].animate(tarzan_out, { ...timing, delay: delayOut }));
  }

  if (refs?.[0]) {
    refs[0].style.transformOrigin = '0 0';
    refs[0].style.transform = 'rotate(90deg)';
    animation.push(refs[0].animate(tarzan_in, { ...timing, delay: delayIn }));
  }

  return animation;
};

export { tarzan };
