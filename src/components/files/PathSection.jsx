import { BsBarChartFill } from 'react-icons/bs';
import Squiggle from './Squiggle';

const stats = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
];

export default function PathSection() {
  return (
    <section className='max-w-314.5 mx-auto grid lg:grid-cols-2 gap-15.75 items-center'>
      {/* Text */}
      <div>
        <h2 className='text-[44px] font-semibold leading-[120%] tracking-[-0.44px]  text-gray-950 font-["Poppins"]'>
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className='my-8 max-w-119.25 font-satoshi text-[18px] font-normal leading-[160%] text-gray-700'>
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or embark
          on a new career path entirely, we have the resources you need.
        </p>

        <div className='mt-12 flex gap-10'>
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className='text-4xl font-semibold text-brand'>{value}</div>
              <div className='mt-1 text-neutral-600'>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual */}
      <div className='relative mx-auto w-full max-w-[520px] h-[520px]'>
        {/* Course card */}
        <div className='absolute left-0 top-0 w-[340px] rounded-[28px] bg-white/80 border border-neutral-200 p-3.5 shadow-card'>
          <div className='relative h-[195px] rounded-2xl overflow-hidden'>
            <img
              src='https://picsum.photos/seed/figma-desk/600/400'
              alt='Course preview'
              className='w-full h-full object-cover'
            />
            <div className='absolute bottom-3 left-3 flex gap-2 text-xs text-neutral-700'>
              <span className='px-3 py-1.5 rounded-full bg-white/70 backdrop-blur'>
                17 Lessons
              </span>
              <span className='px-3 py-1.5 rounded-full bg-white/70 backdrop-blur'>
                2 hours 16 mins
              </span>
            </div>
          </div>
          <h3 className='mt-4 text-[19px] font-semibold'>
            Learn Figma from Basics
          </h3>
          <p className='mt-1 text-xs text-neutral-500'>
            by <span className='text-brand'>purepearl studio</span>
          </p>
          <div className='mt-4 flex items-center gap-2'>
            <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 text-xs font-medium'>
              <BsBarChartFill className='text-neutral-700' />
              Beginner
            </span>
            <img
              src='https://i.pravatar.cc/60?img=47'
              alt=''
              className='w-8 h-8 rounded-full'
            />
          </div>
          <div className='mt-4 text-xl font-semibold text-brand'>
            $25
            <span className='text-xs font-normal text-neutral-500'>
              /lifetime
            </span>
          </div>
        </div>

        {/* Person (dummy image) */}
        <div className='cutout absolute right-0 bottom-0 w-[300px] h-[430px] rounded-[28px] overflow-hidden bg-gradient-to-b from-sky-100 to-indigo-100'>
          <img
            src='https://randomuser.me/api/portraits/men/32.jpg'
            alt='Student'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Progress card */}
        <div className='absolute right-0 top-[205px] w-[232px] rounded-2xl bg-white p-4 shadow-card'>
          <div className='text-sm'>Learning Progress</div>
          <div className='mt-1 text-5xl font-semibold'>55%</div>
          <div className='mt-3 h-2 rounded-full bg-neutral-100 overflow-hidden'>
            <div className='h-full w-[55%] rounded-full bg-lime' />
          </div>
        </div>

        <Squiggle className='right-[-10px] top-[90px] w-[130px] h-[170px]' />
      </div>
    </section>
  );
}
