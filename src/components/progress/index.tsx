import style from './style.module.css';

interface Props {
  isRunning?: boolean;
  interval?: number;
  className?: string;
  onComplete: () => void;
  size?: number;
}
const Progress = ({
  isRunning = false,
  interval = 5000,
  className,
  size = 20,
  onComplete,
}: Props) => {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 20 20">
      <circle cx="50%" cy="50%" r="8" className={style.circle__progress__bg} />

      <circle
        onAnimationIteration={onComplete}
        style={{
          animationName: isRunning ? style.progress : 'none',
          animationDuration: interval + 'ms',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear',
        }}
        cx="50%"
        cy="50%"
        r="8"
        className={style.circle__progress}
      />
    </svg>
  );
};

export { Progress };
