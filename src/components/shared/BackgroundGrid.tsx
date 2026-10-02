import GridLines from './GridLines';

type BackgroundGridProps = {
  className?: string;
};

export default function BackgroundGrid({
  className = '',
}: BackgroundGridProps) {
  return (
    <div
      aria-hidden='true'
      className={`pointer-events-none absolute inset-0 -z-10 bg-blue-700 ${className}`}
    >
      <GridLines />
    </div>
  );
}
