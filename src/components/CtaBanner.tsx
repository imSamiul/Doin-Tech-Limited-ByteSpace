import GridLines from './shared/GridLines';

export default function CtaBanner() {
  return (
    <section className='w-full bg-blue-700 relative overflow-hidden py-28'>
      {/* Grid lines */}
      <div aria-hidden='true'>
        <GridLines />
      </div>

      {/* Decorative lime blobs */}
      <div
        aria-hidden='true'
        className='absolute size-96 bg-lime-400 rounded-full blur-3xl opacity-20 -top-20 -left-20'
      />
      <div
        aria-hidden='true'
        className='absolute size-72 bg-lime-400 rounded-full blur-3xl opacity-20 -bottom-16 -right-10'
      />

      {/* Centered content */}
      <div className='relative z-10 max-w-[1440px] mx-auto px-[120px] flex flex-col items-center gap-8 text-center'>
        <h2 className="max-w-[700px] text-white text-6xl font-semibold font-['Poppins'] leading-tight">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="max-w-[540px] text-zinc-200 text-lg font-normal font-['Satoshi'] leading-7">
          Turn your knowledge into impact. Create courses, reach learners
          worldwide, and earn on your own terms.
        </p>
        <button className="px-8 py-4 bg-lime-400 rounded-3xl text-neutral-800 text-lg font-medium font-['Satoshi'] cursor-pointer hover:bg-lime-300 transition-colors">
          Join as Creator
        </button>
      </div>
    </section>
  );
}
