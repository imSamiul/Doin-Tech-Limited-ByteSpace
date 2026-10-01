import { courses } from '@/data/courses';
import { filterRows } from '../data/course-filter';
import CourseCard from './shared/CourseCard';

export default function CoursesSection() {
  return (
    <div className='w-full py-18'>
      <div className='mx-65.25 flex flex-col items-center gap-4 text-center mb-10.5'>
        <h2 className="text-slate-950 text-center text-[44px] font-semibold font-['Poppins'] leading-[120%] tracking-[-0.44px]">
          Discover Your Passion, <br></br> Build Your Skills
        </h2>
        <p className="text-center text-gray-400 text-[18px] font-normal font-['Satoshi'] leading-[160%]">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </div>

      {/* Category pill word-cloud — 3 rows */}
      <div className='flex flex-col items-center gap-4 mb-12'>
        {filterRows.map((row, ri) => (
          <div key={ri} className='flex flex-wrap justify-center gap-4'>
            {row.map(({ label, active, more }) => (
              <button
                key={label}
                className={[
                  "px-4 py-3 rounded-3xl text-base font-medium font-['Satoshi'] cursor-pointer",
                  active
                    ? 'bg-lime-400 text-gray-950'
                    : more
                      ? ' text-blue-800 bg-white hover:bg-blue-50'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                ].join(' ')}
              >
                {label}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Course cards grid — 3 × 2 */}
      <div className='max-w-280 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-19.25 justify-center gap-10'>
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
