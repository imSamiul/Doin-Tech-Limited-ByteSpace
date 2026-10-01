'use client';

import Image from 'next/image';
import { MdOutlineSearch } from 'react-icons/md';
import StudentWithLaptop from '../../public/hero-assets/StudentWithLaptop.png';
import BackgroundGrid from './BackgroundGrid';
import HappyStudentsCard from './shared/HappyStudentsCard';
import LearningProgressCard from './shared/LearningProgressCard';

/**
 * Layout strategy
 * ───────────────
 * 1. Header (title, subtitle, search) is in normal document flow, so it can
 *    wrap to any number of lines without colliding with the artwork below.
 * 2. The "stage" (ring + student + 3 cards) has a fixed height per breakpoint
 *    and everything inside is anchored to the horizontal centre (left-1/2 or
 *    calc(50% ± Npx)), so it stays balanced at any width.
 * 3. Decorative 3D shapes are sized/positioned in `cqw` (container-query
 *    width units) so they scale with the 1440px design container, and are
 *    hidden below `lg` where there isn't room for them.
 */
export default function Hero() {
  return (
    <section className='relative isolate flex w-full justify-center overflow-hidden'>
      <BackgroundGrid />

      {/* ── Main Container (also the container-query root for the decor) ── */}
      <div className='@container relative mx-auto w-full max-w-360 select-none bg-transparent'>
        {/* ── Header: title, subtitle, search ── */}
        <div className='relative z-20 flex flex-col items-center px-4 pt-6 md:pt-8 xl:pt-11.75'>
          <h1 className='w-full text-balance text-center font-poppins text-4xl font-semibold leading-[120%] tracking-[-0.72px] text-[#FFF] md:text-5xl lg:text-6xl xl:text-[72px]'>
            Get Access to Hundreds
            <br className='hidden sm:block' /> Courses Available
          </h1>

          <p className="mt-4 max-w-190 px-2 text-center font-['Satoshi'] text-sm font-normal leading-[160%] text-(--Shuttle-Gray-100,#E5E6E8) md:mt-6 md:text-base xl:mt-9 xl:text-[18px]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <div className='mt-6 flex w-full max-w-125 items-center justify-center gap-2 px-2 md:mt-10 md:gap-3.75 xl:mt-15'>
            {/* Input Pill */}
            <div className='flex h-11 min-w-0 flex-1 items-center gap-2 rounded-3xl bg-[#FFF] px-4 py-2 shadow-md md:h-13 md:px-6 md:py-3'>
              <MdOutlineSearch className='h-5 w-5 shrink-0 fill-[#82868E]' />
              <span className="truncate font-['Satoshi'] text-xs font-normal text-[#82868E] md:text-[15px]">
                Course, topic, creator
              </span>
            </div>

            {/* Search Button Pill */}
            <button
              data-layer='Search'
              className="flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-3xl bg-electric-Lime-400 px-5 py-2.5 font-['Satoshi'] text-xs font-medium text-neutral-900 shadow-sm transition-colors hover:bg-lime-300 md:px-6 md:py-3 md:text-[15px]"
            >
              Search
            </button>
          </div>
        </div>

        {/* ── Stage: ring + student + floating cards ── */}
        <div className='relative mt-8 h-107.5 w-full overflow-hidden md:mt-6 md:h-120 lg:mt-4 lg:h-117.5 xl:-mt-4 xl:h-126'>
          {/* Giant Neon Lime Ring / Arch */}
          <div
            data-layer='Ellipse 7'
            className='Ellipse7 pointer-events-none absolute left-1/2 top-10 z-0 size-160 -translate-x-1/2 rounded-full border-160 border-lime-400 md:top-12.5 md:size-215 md:border-240 lg:top-15 lg:size-250 lg:border-280 xl:top-17 xl:size-287.25 xl:border-320'
          />

          {/* Student holding laptop */}
          <Image
            data-layer='Image'
            src={StudentWithLaptop}
            alt='Student with headphones and laptop'
            width={578}
            height={541}
            priority
            className='bg-lightgray pointer-events-none absolute left-1/2 top-0 z-10 h-auto w-[min(330px,88%)] -translate-x-1/2 object-cover md:w-110 lg:w-127.5 xl:w-144.5'
          />

          {/* Badge 1: UI/UX Design (left of student's head) */}
          <div className='absolute left-3 top-22.5 z-20 flex origin-left scale-85 flex-col items-start justify-center whitespace-nowrap rounded-2xl bg-white p-3 shadow-xl backdrop-blur-[10px] md:left-[calc(50%-220px)] md:top-27.5 md:scale-95 md:p-4 lg:left-[calc(50%-270px)] lg:top-30 xl:left-[calc(50%-316px)] xl:top-31.25 xl:scale-100'>
            <div className="font-['Satoshi'] text-sm font-medium leading-tight md:text-base">
              UI/UX Design
            </div>
            <div className="font-['Satoshi'] text-[11px] text-gray-400 md:text-xs">
              200 Courses • 1000+ Students
            </div>
          </div>

          {/* Badge 2: Learning Progress (right of student's head) */}
          <LearningProgressCard
            progress={55}
            title='Learning Progress'
            className='absolute right-3 top-25 z-20 origin-right scale-85 shadow-xl md:right-auto md:left-[calc(50%+85px)] md:top-30 md:origin-left md:scale-95 lg:left-[calc(50%+120px)] lg:top-31.25 xl:left-[calc(50%+142px)] xl:top-33 xl:scale-100'
          />

          {/* Badge 3: Happy Students (bottom-left of student) */}
          <HappyStudentsCard
            rating={4.5}
            reviewsCount={240}
            totalStudents='2K+'
            className='absolute left-3 top-70 z-20 origin-left scale-85 shadow-xl md:left-[calc(50%-240px)] md:top-72.5 md:scale-95 lg:left-[calc(50%-310px)] lg:top-75 xl:left-[calc(50%-392px)] xl:top-79.5 xl:scale-100'
          />
        </div>

        {/* ── 3D floating Memphis shapes (lg and up) ──
            Sizes and positions use cqw so they scale with the container. */}

        {/* Top-left: lime spring */}
        <Image
          src='/hero-assets/Spring1.png'
          alt=''
          aria-hidden
          width={387}
          height={387}
          className='pointer-events-none absolute left-[-8.2cqw] top-[7cqw] z-0 hidden h-auto w-[26.9cqw] lg:block filter-[brightness(0)_invert(88%)_sepia(54%)_saturate(786%)_hue-rotate(24deg)_brightness(108%)]'
        />
        {/* Mid-left: white squiggle spring */}
        <Image
          src='/hero-assets/Spring1.png'
          alt=''
          aria-hidden
          width={175}
          height={175}
          className='pointer-events-none absolute left-[12.8cqw] top-[24.8cqw] z-0 hidden h-auto w-[12.15cqw] rotate-12 -scale-x-100 drop-shadow-md lg:block filter-[brightness(0)_invert(100%)]'
        />
        {/* Bottom-left: cream cone */}
        <Image
          src='/hero-assets/Cone1.png'
          alt=''
          aria-hidden
          width={342}
          height={342}
          className='pointer-events-none absolute bottom-0 left-[1.25cqw] z-10 hidden h-auto w-[23.75cqw] -rotate-15 drop-shadow-2xl lg:block xl:z-20 filter-[brightness(0)_invert(98%)_sepia(1%)_saturate(222%)_hue-rotate(202deg)_brightness(103%)]'
        />
        {/* Top-right: lime cone */}
        <Image
          src='/hero-assets/Cone2.png'
          alt=''
          aria-hidden
          width={371}
          height={371}
          className='pointer-events-none absolute right-[-11.2cqw] top-[7cqw] z-0 hidden h-auto w-[25.8cqw] rotate-6 lg:block filter-[brightness(0)_invert(88%)_sepia(54%)_saturate(786%)_hue-rotate(24deg)_brightness(108%)]'
        />
        {/* Mid-right: white pyramid */}
        <Image
          src='/hero-assets/Cone3.png'
          alt=''
          aria-hidden
          width={188}
          height={188}
          className='pointer-events-none absolute right-[10.1cqw] top-[23.9cqw] z-0 hidden h-auto w-[13.05cqw] drop-shadow-md lg:block filter-[brightness(0)_invert(100%)]'
        />
        {/* Bottom-right: cream ribbon */}
        <Image
          src='/hero-assets/Spring2.png'
          alt=''
          aria-hidden
          width={331}
          height={331}
          className='pointer-events-none absolute right-[-1cqw] bottom-[1.4cqw] z-0 hidden h-auto w-[23cqw] drop-shadow-xl lg:block filter-[brightness(0)_invert(98%)_sepia(1%)_saturate(222%)_hue-rotate(202deg)_brightness(103%)]'
        />
      </div>
    </section>
  );
}
