import React from "react";
import { Code2, Palette, Cpu, Briefcase, TrendingUp, Shield, ArrowUpRight } from "lucide-react";

export default function Categories() {
  const categories = [
    {
      title: "Web & Software",
      count: "48 Courses",
      icon: Code2,
      color: "bg-[#D6FE04]",
    },
    {
      title: "UI/UX & Design",
      count: "32 Courses",
      icon: Palette,
      color: "bg-[#D6FE04]",
    },
    {
      title: "Data Science & AI",
      count: "38 Courses",
      icon: Cpu,
      color: "bg-[#D6FE04]",
    },
    {
      title: "Business & Management",
      count: "26 Courses",
      icon: Briefcase,
      color: "bg-[#D6FE04]",
    },
    {
      title: "Growth Marketing",
      count: "22 Courses",
      icon: TrendingUp,
      color: "bg-[#D6FE04]",
    },
    {
      title: "Cloud & Cyber Security",
      count: "19 Courses",
      icon: Shield,
      color: "bg-[#D6FE04]",
    },
  ];

  return (
    <section id="categories" className="w-full py-20 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#1852FE] bg-blue-100/60 px-3.5 py-1.5 rounded-full">
            Top Categories
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Explore Courses by Categories
          </h2>
          <p className="text-slate-600 text-base">
            Discover tailored career tracks taught by leading engineers, creators, and entrepreneurs.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 text-center border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#1852FE]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-between cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#D6FE04] flex items-center justify-center text-slate-950 mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#1852FE] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">{cat.count}</p>
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#1852FE]">
                  <ArrowUpRight className="w-4 h-4 mx-auto" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
