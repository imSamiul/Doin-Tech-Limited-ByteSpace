import React from "react";
import Image from "next/image";
import { CheckCircle2, Award, Users2, Sparkles, ArrowRight, Laptop, Briefcase } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="w-full py-24 bg-white overflow-hidden space-y-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Block 1: Instructors & Mentorship */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1852FE] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              Elite Mentorship
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Learn From The World&apos;s Best Tech Instructors
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              ByteSpace courses are developed and instructed by senior engineers, lead designers, and tech innovators working at top tech firms.
            </p>

            {/* Checklist */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-[#D6FE04] flex items-center justify-center text-slate-950 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Direct 1-on-1 Code Reviews</h4>
                  <p className="text-sm text-slate-500">Get detailed video feedback and suggestions on your code submissions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-[#D6FE04] flex items-center justify-center text-slate-950 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Flexible, Self-Paced Schedule</h4>
                  <p className="text-sm text-slate-500">Learn at your own pace with lifetime access to all course recordings and updates.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-[#D6FE04] flex items-center justify-center text-slate-950 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Recognized Industry Certifications</h4>
                  <p className="text-sm text-slate-500">Showcase accredited digital certificates directly on your LinkedIn profile.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-[#1852FE] hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-full transition-all shadow-md hover:scale-105 flex items-center gap-2 cursor-pointer">
                <span>Start Learning Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Visual Right */}
          <div className="relative flex justify-center items-center">
            {/* Soft decorative background glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#D6FE04]/30 filter blur-3xl -z-10"></div>
            <div className="relative w-full max-w-md h-[380px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/instructor-feature.jpg"
                alt="Student collaborating with mentor online"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating rating badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-4 bg-white/95 backdrop-blur-md text-slate-900 px-5 py-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#D6FE04] flex items-center justify-center text-slate-950 font-black">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base font-black text-slate-900">4.9 / 5.0</div>
                <div className="text-xs text-slate-500 font-semibold">Mentor Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Practical Skills & Career Transformation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-16">
          {/* Visual Left */}
          <div className="relative order-2 lg:order-1 flex justify-center items-center">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-100/60 filter blur-3xl -z-10"></div>
            <div className="relative w-full max-w-md h-[380px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/career-student.jpg"
                alt="Tech professional studying with tablet"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Card: Career Placement */}
            <div className="absolute -top-6 -right-2 sm:right-6 bg-white/95 backdrop-blur-md text-slate-900 px-5 py-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-[#1852FE] flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base font-black text-slate-900">94% Hired</div>
                <div className="text-xs text-slate-500 font-semibold">Within 6 Months</div>
              </div>
            </div>

            {/* Floating Card: Active Learners */}
            <div className="absolute -bottom-6 -left-2 sm:left-6 bg-[#D6FE04] text-slate-950 px-5 py-3 rounded-2xl shadow-xl border border-lime-400 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-950 text-[#D6FE04] flex items-center justify-center">
                <Users2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-black">12,400+ Active</div>
                <div className="text-xs text-slate-800 font-medium">Students Online Now</div>
              </div>
            </div>
          </div>

          {/* Content Right */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Laptop className="w-4 h-4 text-lime-800" />
              Career Outcomes
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Transform Your Career With Practical, Real-World Skills
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Say goodbye to passive lectures. We emphasize hands-on project building, interactive labs, and collaborative team sprints that mirror real engineering jobs.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-[#D6FE04] flex items-center justify-center text-slate-950 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Portfolio-Ready Capstones</h4>
                  <p className="text-sm text-slate-500">Deploy full-stack applications and publish live design case studies.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-[#D6FE04] flex items-center justify-center text-slate-950 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Resume & Interview Prep</h4>
                  <p className="text-sm text-slate-500">Mock technical interviews, salary negotiation coaching, and portfolio reviews.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-[#D6FE04] flex items-center justify-center text-slate-950 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Global Community & Network</h4>
                  <p className="text-sm text-slate-500">Join 50k+ alumni in exclusive Slack channels, hackathons, and job boards.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-[#D6FE04] hover:bg-[#c4ec00] text-slate-950 font-bold px-7 py-3.5 rounded-full transition-all shadow-md hover:scale-105 flex items-center gap-2 cursor-pointer">
                <span>Explore Career Tracks</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
