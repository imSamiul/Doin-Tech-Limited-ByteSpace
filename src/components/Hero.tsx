'use client';

import Image from 'next/image';
import { MdOutlineSearch } from 'react-icons/md';
import StudentWithLaptop from '../../public/hero-assets/StudentWithLaptop.png';
import BackgroundGrid from './BackgroundGrid';
import HappyStudentsCard from './shared/HappyStudentsCard';
import LearningProgressCard from './shared/LearningProgressCard';

export default function Hero() {
  return (
    <section className='relative isolate flex w-full justify-center overflow-hidden'>
      <BackgroundGrid />
      <div className='relative mx-auto h-225.75 w-360 shrink-0 overflow-hidden bg-transparent select-none'>
        {/* ── Hero Headings & Search Bar Container ── */}
        <div className=' w-full top-11.75 absolute flex flex-col items-center z-20'>
          {/* Main Title (2 Lines) */}
          <h1 className='w-full text-center text-[#FFF] font-poppins text-[72px] font-semibold leading-[120%] tracking-[-0.72px]'>
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>

          {/* Subtitle */}
          <p className="mt-9 text-center text-(--Shuttle-Gray-100,#E5E6E8) font-['Satoshi'] text-[18px] font-normal leading-[160%]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
          {/* Search Bar Container */}
          <div className=' mt-15 flex justify-center items-center gap-3.75'>
            {/* Input Pill */}

            <div className='flex w-115.25 h-13 px-6 py-3 items-center gap-2 rounded-3xl bg-[#FFF]'>
              <MdOutlineSearch className='w-5 h-5 shrink-0 fill-[#82868E]' />
              <span className="text-[#82868E] text-[15px] font-normal font-['Satoshi']">
                Course, topic, creator
              </span>
            </div>

            {/* Search Button Pill */}
            <button
              data-layer='Search'
              className="flex px-6 py-3 justify-center items-center gap-2 rounded-3xl bg-electric-Lime-400 text-neutral-900 font-medium text-[15px] font-['Satoshi'] cursor-pointer hover:bg-lime-300 transition-colors shadow-sm"
            >
              Search
            </button>
          </div>
        </div>
        {/* ── Giant Neon Lime Cutout Ring / Arch ── */}
        <div
          data-layer='Ellipse 7'
          className='Ellipse7 absolute left-1/2 top-116.75 size-287.25 -translate-x-1/2 rounded-full border-320 border-lime-400 pointer-events-none z-0'
        />

        {/* ── Center Student Cutout Holding Laptop ── */}
        <Image
          data-layer='Image'
          src={StudentWithLaptop}
          alt='Student with headphones and laptop'
          width={578}
          height={541}
          className=' w-144.5 h-135.25 left-112.5 top-99.75 absolute z-10 pointer-events-none object-cover bg-lightgray '
        />

        {/* ── Floating Badge 1: UI/UX Design (Left of Student Head) ── */}
        <div className='absolute left-101 top-131 z-20 c flex flex-col justify-center items-start  p-4 rounded-2xl bg-white backdrop-blur-[10px]'>
          <div className="font-medium text-base font-['Satoshi'] leading-tight">
            UI/UX Design
          </div>
          <div className="text-gray-400 text-xs font-['Satoshi']">
            200 Courses • 1000+ Students
          </div>
        </div>

        {/* ── Floating Badge 2: Learning Progress (Right of Student Head) ── */}
        <LearningProgressCard
          progress={55}
          title='Learning Progress'
          className='absolute left-215.5 top-132.75 z-20'
        />

        {/* ── Floating Badge 3: Happy Students (Bottom Left of Student) ── */}
        <HappyStudentsCard
          rating={4.5}
          reviewsCount={240}
          totalStudents='2K+'
          className='absolute left-82 top-179.25 z-20'
        />
      </div>
      {/* ── 3D Floating Memphis Abstract Shapes ── */}
      {/* Top-Left: Lime-Yellow Spring / Coil */}
      <Image
        src='/hero-assets/Spring1.png'
        alt='Electric Lime Spring Decor'
        width={387}
        height={387}
        className='absolute -left-29.5 top-25.25 auto pointer-events-none z-0 filter-[brightness(0)_invert(88%)_sepia(54%)_saturate(786%)_hue-rotate(24deg)_brightness(108%)]'
      />
      {/* Mid-Left: White Squiggle Spring */}
      <Image
        src='/hero-assets/Spring1.png'
        alt=' White Squiggle Spring Decor'
        width={175}
        height={175}
        className='absolute left-46 top-89.25 w-43.75 h-43.75 pointer-events-none rotate-12 z-0 drop-shadow-md -scale-x-100 filter-[brightness(0)_invert(100%)]'
      />

      {/* Bottom-Left: Cream / Off-White Donut Torus */}
      <Image
        src='/hero-assets/Cone1.png'
        alt='Cone Decor'
        width={342}
        height={342}
        className='absolute left-4.5 top-140.5 w-85.5 h-85.5 pointer-events-none -rotate-15 z-20 drop-shadow-2xl filter-[brightness(0)_invert(98%)_sepia(1%)_saturate(222%)_hue-rotate(202deg)_brightness(103%)]'
      />
      {/* Top-Right: Lime-Yellow Cylinder / Cone */}
      <Image
        src='/hero-assets/Cone2.png'
        alt='Lime-Yellow Cylinder / Cone Decor'
        width={371}
        height={371}
        className='absolute -right-40.25 top-25.25  pointer-events-none rotate-6 z-0 filter-[brightness(0)_invert(88%)_sepia(54%)_saturate(786%)_hue-rotate(24deg)_brightness(108%)]'
      />
      {/* Mid-Right: White Pyramid / Tetrahedron */}
      <Image
        src='/hero-assets/Cone3.png'
        alt=''
        width={188}
        height={188}
        className='absolute right-36.5 top-86 pointer-events-none z-0  drop-shadow-md filter-[brightness(0)_invert(100%)]'
      />
      {/* Bottom-Right: Cream Squiggle / Ribbon */}
      <Image
        src='/hero-assets/Spring2.png'
        alt=''
        width={331}
        height={331}
        className='absolute -right-3.75 top-138 pointer-events-none z-0 drop-shadow-xl filter-[brightness(0)_invert(98%)_sepia(1%)_saturate(222%)_hue-rotate(202deg)_brightness(103%)]'
      />
    </section>
  );
}
