'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdOutlineShoppingBag } from 'react-icons/md';
import BackgroundGrid from './shared/BackgroundGrid';

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '#courses' },
  { label: 'Creators', href: '#categories' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className='relative isolate z-50 flex h-20 w-full items-center justify-between px-4 sm:px-8 md:h-28 md:px-12 lg:px-20 xl:px-30.5'>
      <BackgroundGrid />

      {/* ── 1. Left Flex Item: Brand / Logo ── */}
      <div className='flex items-center md:flex-1'>
        <Link
          href='/'
          className='flex items-center gap-3 transition-opacity hover:opacity-90'
          aria-label='ByteSpace home'
          onClick={() => setIsOpen(false)}
        >
          <Image
            src='/hero-icons/Logo.svg'
            alt='ByteSpace Logo'
            width={29}
            height={32}
            priority
          />
          <span className="font-['Clash_Display'] text-xl font-bold tracking-tight text-white sm:text-2xl">
            ByteSpace
          </span>
        </Link>
      </div>

      {/* ── 2. Center Flex Item: Navigation Links ── */}
      <nav
        className='hidden items-center justify-center gap-6 md:flex lg:gap-8'
        aria-label='Primary navigation'
      >
        {navigationItems.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            className={`font-satoshi text-base transition-colors hover:text-lime-400 ${
              index === 0 ? 'font-medium text-white' : 'text-white/80'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* ── 3. Right Flex Item: Actions & Mobile Controls ── */}
      <div className='flex items-center justify-end gap-5 md:flex-1 md:gap-6 lg:gap-7'>
        {/* Desktop-only action buttons */}
        <div className='hidden items-center gap-6 md:flex lg:gap-7'>
          <button
            className='cursor-pointer font-satoshi text-base text-white/90 transition-colors hover:text-white'
            type='button'
          >
            Sign In
          </button>
          <button
            className='cursor-pointer font-satoshi text-base text-white/90 transition-colors hover:text-white'
            type='button'
          >
            Join Us
          </button>
        </div>

        {/* Shopping bag icon (visible on both mobile and desktop) */}
        <MdOutlineShoppingBag className='w-4 h-5 text-white' />

        {/* Mobile Hamburger toggle button */}
        <button
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className='relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-lime-400 md:hidden'
        >
          <div className='flex h-5 w-5 flex-col items-center justify-between'>
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                isOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                isOpen ? '-translate-y-2.5 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden transition-all duration-300 md:hidden ${
          isOpen
            ? 'max-h-95 border-b border-white/15 bg-hero-blue/95 opacity-100 shadow-2xl backdrop-blur-md'
            : 'max-h-0 border-none opacity-0'
        }`}
      >
        <div className='flex flex-col gap-4 px-6 pt-3 pb-6'>
          {/* Mobile Navigation Links */}
          <nav className='flex flex-col gap-1' aria-label='Mobile navigation'>
            {navigationItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-3 py-2.5 font-satoshi text-base transition-colors hover:bg-white/10 hover:text-lime-400 ${
                  index === 0
                    ? 'font-medium text-white'
                    : 'font-normal text-white/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className='my-1 h-px w-full bg-white/10' />

          {/* Mobile Action Buttons */}
          <div className='flex flex-col gap-2.5'>
            <button
              type='button'
              onClick={() => setIsOpen(false)}
              className='w-full rounded-xl border border-white/20 py-2.5 text-center font-satoshi text-sm font-medium text-white transition-colors hover:bg-white/10'
            >
              Sign In
            </button>
            <button
              type='button'
              onClick={() => setIsOpen(false)}
              className='w-full rounded-xl bg-lime-400 py-2.5 text-center font-satoshi text-sm font-semibold text-neutral-900 transition-colors hover:bg-lime-300'
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
