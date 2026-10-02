"use client";

import Link from "next/link";
import { useState } from "react";

const browseLinks = [
  "Featured Courses",
  "Featured Categories",
  "Business",
  "IT",
  "Design + Development",
  "Marketing",
  "Photography",
  "Finance",
  "Sport",
];

const platformLinks = [
  "Become a Creator",
  "Affiliate Program",
  "Contact",
  "Help",
  "About",
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full bg-white border-t border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-[120px] pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          {/* Brand + newsletter */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-7 h-8 bg-lime-400 shrink-0" />
              <span className="text-neutral-800 text-2xl font-bold font-['Clash_Display']">
                ByteSpace
              </span>
            </Link>

            <p className="text-gray-500 text-base font-normal font-['Satoshi'] leading-6 max-w-[280px]">
              Your platform to learn, grow, and teach. Join thousands of
              learners transforming their lives with ByteSpace.
            </p>

            {/* Newsletter */}
            <div className="flex flex-col gap-2">
              <label className="text-neutral-800 text-sm font-medium font-['Satoshi']">
                Get updates
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-11 px-4 bg-neutral-100 rounded-3xl text-neutral-800 text-sm font-['Satoshi'] outline-none focus:ring-2 focus:ring-blue-700"
                />
                <button className="px-5 py-2.5 bg-lime-400 rounded-3xl text-neutral-800 text-sm font-medium font-['Satoshi'] cursor-pointer hover:bg-lime-300 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-xs font-normal font-['Satoshi']">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Browse links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-neutral-800 text-base font-semibold font-['Satoshi']">
              Browse
            </h3>
            <ul className="flex flex-col gap-3">
              {browseLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-500 text-base font-normal font-['Satoshi'] hover:text-neutral-800 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-neutral-800 text-base font-semibold font-['Satoshi']">
              Platform
            </h3>
            <ul className="flex flex-col gap-3">
              {platformLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-500 text-base font-normal font-['Satoshi'] hover:text-neutral-800 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-100">
          <p className="text-gray-400 text-sm font-normal font-['Satoshi']">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-gray-500 text-sm font-normal font-['Satoshi'] hover:text-neutral-800"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 text-sm font-normal font-['Satoshi'] hover:text-neutral-800"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-500 text-sm font-normal font-['Satoshi'] hover:text-neutral-800"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
