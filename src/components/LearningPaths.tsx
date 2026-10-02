import Image from 'next/image';

const paths = [
  {
    label: 'Design',
    iconSrc: '/learning-paths/Design.svg',
  },
  {
    label: 'Development',
    iconSrc: '/learning-paths/Development.svg',
  },
  {
    label: 'IT & Software',
    iconSrc: '/learning-paths/ItSoftware.svg',
  },
  {
    label: 'Business',
    iconSrc: '/learning-paths/Business.svg',
  },
  {
    label: 'Marketing',
    iconSrc: '/learning-paths/Marketing.svg',
  },
  {
    label: 'Photography',
    iconSrc: '/learning-paths/Photography.svg',
  },
];

export default function LearningPaths() {
  return (
    <section className='w-full bg-white pb-16 md:pb-24 xl:pb-30'>
      <div className='container mx-auto flex flex-col items-center gap-8 px-4 md:gap-12 xl:gap-17'>
        {/* Section heading */}
        <div className='flex max-w-229.25 flex-col items-center gap-3 text-center md:gap-4'>
          <h2 className='text-balance font-poppins text-2xl font-medium leading-tight text-black md:text-3xl xl:text-[36px]'>
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className='font-satoshi text-base font-normal leading-7 text-gray-400 md:text-lg'>
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&rsquo;s something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Bordered path cards with lime icon container.
            2 cols (phone) → 3 cols (tablet / small laptop) → 6 cols (xl).
            Six columns only fit comfortably from xl; below that the longer
            labels like "Development" and "Photography" would overflow. */}
        <div className='grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6 xl:grid-cols-6 xl:gap-10'>
          {paths.map(({ label, iconSrc }) => (
            <div
              key={label}
              className='flex cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border border-gray-200 px-3 py-6 transition-colors hover:border-gray-300 sm:px-6 sm:py-9'
            >
              {/* Lime icon background pill */}
              <div className='flex items-center justify-center rounded-[40px] bg-lime-400 p-3'>
                <Image
                  src={iconSrc}
                  alt=''
                  aria-hidden
                  width={36}
                  height={36}
                  className='size-8 sm:size-9'
                />
              </div>
              <span className='text-center font-satoshi text-base font-medium text-neutral-800 sm:text-lg xl:text-xl'>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
