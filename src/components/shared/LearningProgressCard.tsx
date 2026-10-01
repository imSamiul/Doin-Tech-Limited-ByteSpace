interface LearningProgressCardProps {
  progress?: number; // e.g., 55 for 55%
  title?: string;
  className?: string; // For custom positioning like `absolute left-[842px] top-[630px] z-20`
}

export default function LearningProgressCard({
  progress = 55,
  title = 'Learning Progress',
  className = '',
}: LearningProgressCardProps) {
  // Clamp percentage between 0 and 100
  const percentage = Math.min(Math.max(progress, 0), 100);

  return (
    <div
      className={`w-57.5           rounded-2xl p-5 flex flex-col gap-2 justify-start bg-[#FFF] ${className}`}
    >
      {/* Title */}
      <span className="text-gray-950 text-[14px] font-medium font-['Satoshi'] leading-[120%]">
        {title}
      </span>

      {/* Percentage Display */}
      <span className="text-gray-950 text-[48px] font-semibold font-['Poppins'] leading-[120%] tracking-[-0.48px] ">
        {percentage}%
      </span>

      {/* Progress Bar */}
      <div className=' h-2 bg-neutral-100 rounded-3xl '>
        <div
          className='h-full bg-electric-Lime-400 rounded-3xl transition-all duration-300 ease-in-out'
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
