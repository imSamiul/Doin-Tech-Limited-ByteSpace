"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Clock, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";

interface Course {
  id: string;
  title: string;
  category: string;
  image: string;
  rating: number;
  reviewsCount: number;
  lessons: number;
  duration: string;
  price: string;
  originalPrice: string;
  instructor: {
    name: string;
    avatar: string;
  };
}

const COURSES: Course[] = [
  {
    id: "1",
    title: "Full-Stack Web Development Bootcamp",
    category: "Development",
    image: "/course-web-dev.jpg",
    rating: 4.9,
    reviewsCount: 2430,
    lessons: 36,
    duration: "48 hrs",
    price: "$69.99",
    originalPrice: "$129.99",
    instructor: {
      name: "Alex Rivera",
      avatar: "/avatar-1.jpg",
    },
  },
  {
    id: "2",
    title: "Modern UI/UX Design System with Figma",
    category: "Design",
    image: "/course-ui-ux.jpg",
    rating: 4.8,
    reviewsCount: 1850,
    lessons: 28,
    duration: "32 hrs",
    price: "$54.99",
    originalPrice: "$99.99",
    instructor: {
      name: "Elena Rostova",
      avatar: "/avatar-2.jpg",
    },
  },
  {
    id: "3",
    title: "Data Science & Machine Learning Masterclass",
    category: "Data Science",
    image: "/course-data-science.jpg",
    rating: 4.9,
    reviewsCount: 3120,
    lessons: 42,
    duration: "60 hrs",
    price: "$79.99",
    originalPrice: "$149.99",
    instructor: {
      name: "Dr. Marcus Vance",
      avatar: "/avatar-3.jpg",
    },
  },
  {
    id: "4",
    title: "Cross-Platform Mobile App Dev with Flutter",
    category: "Development",
    image: "/course-mobile-app.jpg",
    rating: 4.7,
    reviewsCount: 940,
    lessons: 24,
    duration: "28 hrs",
    price: "$49.99",
    originalPrice: "$89.99",
    instructor: {
      name: "Carlos Silva",
      avatar: "/avatar-1.jpg",
    },
  },
  {
    id: "5",
    title: "Cloud Architecture & Modern DevOps",
    category: "Cloud & DevOps",
    image: "/course-devops.jpg",
    rating: 4.9,
    reviewsCount: 1620,
    lessons: 30,
    duration: "35 hrs",
    price: "$64.99",
    originalPrice: "$119.99",
    instructor: {
      name: "Sarah Jenkins",
      avatar: "/avatar-3.jpg",
    },
  },
  {
    id: "6",
    title: "Digital Growth Marketing & Analytics",
    category: "Marketing",
    image: "/course-marketing.jpg",
    rating: 4.8,
    reviewsCount: 1150,
    lessons: 20,
    duration: "22 hrs",
    price: "$44.99",
    originalPrice: "$79.99",
    instructor: {
      name: "David Kim",
      avatar: "/avatar-2.jpg",
    },
  },
];

const CATEGORIES = ["All Categories", "Development", "Design", "Data Science", "Cloud & DevOps", "Marketing"];

export default function FeaturedCourses() {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const filteredCourses =
    activeCategory === "All Categories"
      ? COURSES
      : COURSES.filter((c) => c.category === activeCategory);

  return (
    <section id="courses" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#1852FE] bg-blue-50 px-3.5 py-1.5 rounded-full">
            Featured Curriculums
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Browse Our Popular Online Courses
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Choose from comprehensive, project-based video courses taught by industry veterans with continuous mentorship.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#D6FE04] text-slate-950 shadow-md scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Course Thumbnail */}
              <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                  {course.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Rating & Stats */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1 font-semibold text-slate-800">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>{course.rating}</span>
                      <span className="text-slate-400 font-normal">({course.reviewsCount.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                        {course.lessons} lessons
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {course.duration}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#1852FE] transition-colors leading-snug line-clamp-2">
                    {course.title}
                  </h3>

                  {/* Instructor */}
                  <div className="flex items-center gap-2.5 pt-1">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden">
                      <Image
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">{course.instructor.name}</span>
                  </div>
                </div>

                {/* Footer: Price & Enroll Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-slate-950">{course.price}</span>
                    <span className="text-xs text-slate-400 line-through">{course.originalPrice}</span>
                  </div>
                  <button className="bg-[#D6FE04] hover:bg-[#c6ee02] text-slate-950 font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-sm hover:shadow flex items-center gap-1 cursor-pointer">
                    Enroll Now
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <button className="inline-flex items-center gap-2 bg-[#1852FE] hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105 cursor-pointer">
            View All 100+ Courses
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
