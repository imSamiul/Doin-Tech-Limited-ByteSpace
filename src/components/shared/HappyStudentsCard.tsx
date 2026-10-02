import { StaticImageData } from 'next/image';
import { HiStar } from 'react-icons/hi2';
import AvatarStack, { DEFAULT_AVATARS } from './AvatarStack';

export interface HappyStudentsCardProps {
  rating?: number;
  reviewsCount?: number;
  totalStudents?: string;
  avatars?: (string | StaticImageData)[];
  className?: string;
}

export default function HappyStudentsCard({
  rating = 4.5,
  reviewsCount = 240,
  totalStudents = '2K+',
  avatars = DEFAULT_AVATARS,
  className = '',
}: HappyStudentsCardProps) {
  return (
    <div
      data-layer='Happy_Students_Card'
      className={`w-65 bg-[#FFFDE8] rounded-2xl p-4 shadow-xl z-20 flex flex-col gap-2 ${className}`}
    >
      {/* Title & Rating */}
      <div className='flex flex-col'>
        <h4 className='text-gray-950 text-[16px] font-medium font-satoshi leading-[120%]'>
          Happy Students
        </h4>
        <div className='inline-flex items-center gap-1.5 mt-0.5'>
          <span className='text-gray-950 text-[12px] font-normal font-satoshi leading-[160%]'>
            {rating}{' '}
            <span className='text-gray-400 text-[12px] font-normal font-satoshi leading-[160%]'>
              ({reviewsCount})
            </span>
          </span>
          <HiStar className='w-4 h-4 fill-electric-Lime-400 shrink-0' />
        </div>
      </div>

      {/* Reusable Avatar Stack & Pill Badge */}
      <AvatarStack avatars={avatars} badgeText={totalStudents} size='lg' />
    </div>
  );
}
