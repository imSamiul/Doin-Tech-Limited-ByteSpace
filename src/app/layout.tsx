import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'ByteSpace — Get Access to Hundreds of Courses',
  description:
    'Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full'>
      <body className='min-h-full'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
