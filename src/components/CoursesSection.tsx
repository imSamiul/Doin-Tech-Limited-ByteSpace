import { courses } from '@/data/courses';
import { filterRows } from '../data/course-filter';
import CourseCard from './shared/CourseCard';

export default function CoursesSection() {
  return (
    <div className='w-full py-12 md:py-14 xl:py-18'>
      {/* ── Heading ── */}
      <div className='mx-auto mb-8 flex max-w-[860px] flex-col items-center gap-3 px-4 text-center md:mb-10.5 md:gap-4 md:px-8'>
        <h2 className="text-balance text-center font-['Poppins'] text-3xl font-semibold leading-[120%] tracking-[-0.44px] text-slate-950 md:text-4xl xl:text-[44px]">
          Discover Your Passion, <br className='hidden sm:block' /> Build Your
          Skills
        </h2>
        <p className="text-center font-['Satoshi'] text-base font-normal leading-[160%] text-gray-400 md:text-[18px]">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </div>

      {/* Category pill word-cloud — 3 rows */}
      <div className='mx-auto mb-8 flex  flex-col items-center gap-2 px-4 md:mb-12 md:gap-4'>
        {filterRows.map((row, ri) => (
          <div
            key={ri}
            className='flex flex-wrap justify-center gap-2 md:gap-4'
          >
            {row.map(({ label, active, more }) => (
              <button
                key={label}
                className={[
                  "cursor-pointer rounded-3xl px-3 py-2 font-['Satoshi'] text-sm font-medium md:px-4 md:py-3 md:text-base",
                  active
                    ? 'bg-lime-400 text-gray-950'
                    : more
                      ? 'bg-white text-blue-800 hover:bg-blue-50'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                ].join(' ')}
              >
                {label}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Course cards grid — 1 col → 2 cols → 3 cols */}
      <div className='mx-auto mt-8 grid max-w-280 grid-cols-1 justify-items-center gap-6 px-3 sm:px-4 md:mt-12 md:grid-cols-2 md:gap-8 xl:mt-19.25 xl:grid-cols-3 xl:gap-10 xl:px-0'>
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
