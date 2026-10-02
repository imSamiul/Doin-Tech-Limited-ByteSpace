export default function Squiggle({ className = '' }) {
  return (
    <svg className={`squiggle absolute ${className}`} viewBox="0 0 130 170" aria-hidden="true">
      <path d="M30 20 C 90 5, 105 35, 60 50 C 20 62, 20 85, 80 80 C 115 78, 110 110, 55 125 C 30 132, 40 150, 85 150" />
    </svg>
  );
}
