import Image from 'next/image';
import { BsBarChartFill } from 'react-icons/bs';
import { HiStar } from 'react-icons/hi2';
import AvatarStack from './AvatarStack';

type CourseCardProps = {
  title: string;
  author: string;
  level: string;
  lessons: number;
  duration: string;
  comments: number;
  price: string;
  rating: number | string;
  image: string;
};

export default function CourseCard({
  title,
  author,
  level,
  lessons,
  duration,
  comments,
  price,
  rating,
  image,
}: CourseCardProps) {
  return (
    <div className='flex flex-col w-full max-w-93.25 p-4  gap-4 rounded-3xl  border border-gray-200 '>
      {/* ── Thumbnail Section (Using CSS Grid for Layering) ── */}
      <div className='relative overflow-hidden rounded-xl'>
        {/* Layer 1: Image */}
        <Image
          src={image}
          alt={title}
          width={400}
          height={210}
          className='h-52.5 w-full object-cover'
        />

        {/* Layer 2: Overlay pills (Positioned absolute to bottom-left) */}
        <div className='absolute bottom-[19.4px] left-3 z-10 flex flex-wrap items-center gap-3'>
          <span className="rounded-full bg-[#F6F6F699]/60 px-3 py-1.5 text-[12px] font-medium text-black-700 backdrop-blur-md font-['Satoshi']">
            {lessons} Lessons
          </span>
          <span className="rounded-full bg-[#F6F6F699]/60 px-3 py-1.5 text-[12px] font-medium text-black-700 backdrop-blur-md font-['Satoshi']">
            {duration}
          </span>
          <span className="rounded-full bg-[#F6F6F699]/60 px-3 py-1.5 text-[12px] font-medium text-black-700 backdrop-blur-md font-['Satoshi']">
            {comments} Comments
          </span>
        </div>
      </div>

      {/* ── Content Section (Standard Flexbox) ── */}
      <div className='flex flex-col gap-4'>
        {/* Title & Rating Row */}
        <div className='flex items-start justify-between'>
          <div className='flex-1 min-w-0'>
            <h3 className="truncate text-[20px] font-semibold leading-tight text-black-950 font-['Poppins']">
              {title}
            </h3>
            {/* Author */}
            <p className="text-[12px] font-normal font-['Satoshi']">
              by{' '}
              <span className=' text-blue-700 hover:underline cursor-pointer'>
                {author}
              </span>
            </p>
          </div>
          <div className='flex shrink-0 items-center gap-1'>
            <span className="text-[18px] text-neutral-700 font-['Satoshi']">
              {rating}
            </span>
            <HiStar className='h-6 w-6 fill-yellow-400' />
          </div>
        </div>

        {/* Level + Avatars Row */}
        <div className='flex items-center gap-3'>
          {/* Level Pill */}
          <div className='flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 font-["Satoshi"]'>
            <BsBarChartFill />
            <span className="font-['Satoshi']">{level}</span>
          </div>

          {/* Avatar Stack (4 avatars + 26+ badge, total 5) */}
          <AvatarStack limit={4} badgeText='26+' size='md' />
        </div>

        {/* Price Row */}
        <div>
          <span className="text-xl font-semibold text-blue-700 font-['Poppins']">
            {price}
          </span>
          <span className="text-sm font-normal text-neutral-500 font-['Satoshi']">
            /lifetime
          </span>
        </div>
      </div>
    </div>
  );
}
