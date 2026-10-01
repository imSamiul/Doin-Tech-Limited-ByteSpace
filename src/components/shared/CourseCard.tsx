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

const pillClass =
  'whitespace-nowrap rounded-full bg-white/70 px-2 py-1 text-[10.5px] font-medium tracking-tight text-neutral-800 backdrop-blur-md font-satoshi sm:px-2.5 sm:text-[11px]';

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
    <div className='flex w-full max-w-93.25 flex-col gap-3 rounded-3xl border border-gray-200 p-3 sm:gap-4 sm:p-4'>
      {/* ── Thumbnail ── */}
      <div className='relative overflow-hidden rounded-2xl'>
        <Image
          src={image}
          alt={title}
          width={400}
          height={210}
          sizes='(min-width: 1024px) 373px, (min-width: 768px) 45vw, 100vw'
          className='aspect-400/210 h-auto w-full object-cover'
        />

        {/* Overlay pills — evenly distributed across the bottom within thumbnail bounds */}
        <div className='absolute bottom-2.5 inset-x-2 z-10 flex items-center justify-between sm:bottom-3 sm:inset-x-2.5'>
          <span className={pillClass}>{lessons} Lessons</span>
          <span className={pillClass}>{duration}</span>
          <span className={pillClass}>{comments} Comments</span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className='flex flex-col gap-3 sm:gap-4'>
        {/* Title & Rating Row */}
        <div className='flex items-start justify-between gap-2'>
          <div className='min-w-0 flex-1'>
            <h3 className='truncate font-poppins text-lg font-semibold leading-tight text-black-950 sm:text-[20px]'>
              {title}
            </h3>
            <p className='font-satoshi text-[12px] font-normal text-neutral-500'>
              by{' '}
              <span className='cursor-pointer text-blue-700 hover:underline'>
                {author}
              </span>
            </p>
          </div>
          <div className='flex shrink-0 items-center gap-1'>
            <span className='font-satoshi text-base text-neutral-700 sm:text-[18px]'>
              {rating}
            </span>
            <HiStar className='h-5 w-5 fill-neutral-300 sm:h-6 sm:w-6' />
          </div>
        </div>

        {/* Level + Avatars Row */}
        <div className='flex flex-wrap items-center gap-2 sm:gap-3'>
          <div className='flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1.5 font-satoshi text-xs font-medium text-gray-700'>
            <BsBarChartFill />
            <span className='font-satoshi '>{level}</span>
          </div>

          <AvatarStack limit={4} badgeText='26+' size='md' />
        </div>

        {/* Price Row */}
        <div>
          <span className='font-poppins text-xl font-semibold text-blue-700'>
            {price}
          </span>
          <span className='font-satoshi text-sm font-normal text-neutral-500'>
            /lifetime
          </span>
        </div>
      </div>
    </div>
  );
}
