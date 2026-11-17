interface CurveDividerProps {
  fromColor: string;
  toColor: string;
  variant?: 'arch' | 'wave' | 'sweep';
  className?: string;
}

export function CurveDivider({
  fromColor,
  toColor,
  variant = 'wave',
  className = '',
}: CurveDividerProps) {
  const paths: Record<string, string> = {
    arch: 'M0,72 L0,24 Q720,88 1440,20 L1440,72 Z',
    wave: 'M0,72 L0,34 C380,82 1040,-4 1440,30 L1440,72 Z',
    sweep: 'M0,72 L0,18 Q680,84 1440,28 L1440,72 Z',
  };

  return (
    <div
      className={`pointer-events-none -mt-px block w-full overflow-hidden leading-none ${className}`}
      style={{ backgroundColor: fromColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        className="block h-[42px] w-full md:h-[68px]"
      >
        <path d={paths[variant]} fill={toColor} />
      </svg>
    </div>
  );
}
