import Image, { StaticImageData } from 'next/image';
import { HiStar } from 'react-icons/hi2';

export interface HappyStudentsCardProps {
  rating?: number;
  reviewsCount?: number;
  totalStudents?: string;
  avatars?: (string | StaticImageData)[];
  className?: string;
}

const DEFAULT_AVATARS: string[] = [
  '/hero-assets/StudentAvatar1.png',
  '/hero-assets/StudentAvatar2.png',
  '/hero-assets/StudentAvatar3.png',
  '/hero-assets/StudentAvatar4.png',
  '/hero-assets/StudentAvatar5.png',
  '/hero-assets/StudentAvatar6.png',
  '/hero-assets/StudentAvatar7.png',
];

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
        <h4 className="text-gray-950 text-[16px] font-medium font-['Satoshi'] leading-[120%]">
          Happy Students
        </h4>
        <div className='inline-flex items-center gap-1.5 mt-0.5'>
          <span className="text-gray-950 text-[12px] font-normal font-['Satoshi'] leading-[160%]">
            {rating}{' '}
            <span className="text-gray-400 text-[12px] font-normal font-['Satoshi'] leading-[160%]">
              ({reviewsCount})
            </span>
          </span>
          <HiStar className='w-4 h-4 fill-electric-Lime-400 shrink-0' />
        </div>
      </div>

      {/* Avatar Stack & 2K+ Badge */}
      <div className='relative flex items-center -space-x-4 pt-0.5'>
        {avatars.map((src, index) => (
          <Image
            key={index}
            className='size-10.75 rounded-full  object-cover shrink-0 '
            src={src}
            alt={`Student Avatar ${index + 1}`}
            width={43}
            height={43}
          />
        ))}

        {/* 2K+ Pill Badge */}
        <div className='w-10.75 h-10.75 bg-electric-Lime-400 rounded-full  flex items-center justify-center shrink-0 z-10'>
          <span className="text-gray-950 text-[12px] font-bold font-['Satoshi'] leading-[150%]">
            {totalStudents}
          </span>
        </div>
      </div>
    </div>
  );
}
