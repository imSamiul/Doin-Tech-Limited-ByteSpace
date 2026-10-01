/** Reusable white grid-line overlay for blue-700 sections (Hero, CTA Banner) */
export default function GridLines() {
  const verticals = [
    0, 120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, 1320, 1440, 1560,
    1680, 1800, 1920, 2040, 2160, 2280, 2400, 2520, 2640, 2760, 2880, 3000,
    3120, 3240, 3360, 3480, 3600, 3720, 3840, 3960, 4080,
  ];
  const horizontals = [
    0, 120, 240, 360, 480, 606, 720, 840, 960, 1080, 1200, 1320, 1440, 1560,
    1680, 1800, 1920, 2040, 2160, 2280, 2400, 2520, 2640, 2760, 2880, 3000,
    3120, 3240, 3360, 3480, 3600, 3720, 3840, 3960, 4080, 4200, 4320, 4440,
    4560, 4680, 4800,
  ];

  return (
    <div className='absolute inset-0 pointer-events-none overflow-hidden opacity-15'>
      {verticals.map((x) => (
        <div
          key={`v-${x}`}
          className='absolute top-0 bottom-0 w-0 border-l border-white'
          style={{ left: x }}
        />
      ))}
      {horizontals.map((y) => (
        <div
          key={`h-${y}`}
          className='absolute left-0 right-0 h-0 border-t border-white'
          style={{ top: y }}
        />
      ))}
    </div>
  );
}
