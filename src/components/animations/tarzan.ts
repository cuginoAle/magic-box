import { AnimType } from './types';

const tarzan_in = [
  { transform: 'rotate(90deg) translateX(0)', opacity: 1 },
  { transform: 'rotate(0deg)' },
];

const tarzan_out = [
  { transform: 'rotate(0deg) translateX(0)', opacity: 1 },
  { transform: 'rotate(-90deg)' },
];

const timing = {
  duration: 1000,
  iterations: 1,
  easing: 'cubic-bezier(0.762, -0.014, 0.252, 0.988)',
  fill: 'forwards' as FillMode,
};

const tarzan: AnimType = (refs, delay = 0) => {
  const animation: Animation[] = [];

  if (refs?.[1]) {
    refs[1].style.transformOrigin = '100% 0';
    animation.push(refs[1].animate(tarzan_out, { ...timing, delay }));
  }

  if (refs?.[0]) {
    refs[0].style.transformOrigin = '0 0';
    animation.push(refs[0].animate(tarzan_in, { ...timing, delay }));
  }

  return animation;
};

export { tarzan };
