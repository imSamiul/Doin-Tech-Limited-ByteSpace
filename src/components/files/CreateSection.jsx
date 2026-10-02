import { FaCheckCircle, FaStar } from 'react-icons/fa';
import Squiggle from './Squiggle';

const features = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

const avatars = [12, 5, 15, 33, 52, 68];

export default function CreateSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-[120px] py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">
      {/* Visual */}
      <div className="relative mx-auto w-full max-w-[540px] h-[580px] order-2 lg:order-1">
        {/* Person (dummy image) */}
        <div className="cutout absolute left-[60px] top-[-5px] w-[320px] h-[560px] rounded-[28px] overflow-hidden bg-gradient-to-b from-rose-100 to-indigo-100">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Creator"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Total revenue */}
        <div className="absolute left-0 top-0 w-[280px] rounded-xl bg-brand text-white p-4 shadow-card">
          <div className="font-medium">Total Revenue</div>
          <div className="text-[10px] text-white/70">July 1-28</div>
          <div className="mt-3 text-2xl font-semibold">$120.29</div>
          <div className="mt-3 h-1.5 w-[130px] rounded-full bg-white/30 overflow-hidden">
            <div className="h-full w-4/5 bg-lime rounded-full" />
          </div>
        </div>

        {/* Year to date */}
        <div className="absolute left-0 top-[150px] w-[134px] rounded-xl bg-brand text-white p-4 shadow-card">
          <div className="font-medium">Year to Date</div>
          <div className="text-[10px] text-white/70">2023</div>
          <div className="mt-3 text-2xl font-semibold">$1,200.38</div>
          <span className="mt-3 inline-block rounded-full bg-lime px-2.5 py-0.5 text-[10px] font-semibold text-ink">
            +12$
          </span>
        </div>

        <Squiggle className="left-[300px] top-[115px] w-[130px] h-[150px] -rotate-12" />

        {/* Happy students */}
        <div className="absolute left-[185px] bottom-[10px] w-[258px] rounded-2xl bg-white p-4 shadow-card">
          <div className="text-[15px]">Happy Students</div>
          <div className="mt-1 flex items-center gap-1 text-[10px]">
            <b>4.5</b>
            <span className="text-neutral-400">(240)</span>
            <FaStar className="text-lime text-sm" />
          </div>
          <div className="mt-2 flex items-center">
            {avatars.map((id, i) => (
              <img
                key={id}
                src={`https://i.pravatar.cc/60?img=${id}`}
                alt=""
                className={`w-9 h-9 rounded-full border-2 border-white ${i ? '-ml-2' : ''}`}
              />
            ))}
            <span className="-ml-2 grid h-9 w-9 place-items-center rounded-full bg-lime text-xs font-semibold border-2 border-white">
              2K+
            </span>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="order-1 lg:order-2">
        <h2 className="text-4xl lg:text-[44px] leading-[1.2] font-bold tracking-tight">
          Create &amp; Manage Courses Easily.
        </h2>
        <p className="mt-8 max-w-[540px] text-[17px] leading-8 text-neutral-600">
          <b className="text-ink font-semibold">ByteSpace</b> supports individuals or entities in the
          creation, publication, and administration of educational courses.
        </p>

        <ul className="mt-8 space-y-4">
          {features.map((item) => (
            <li key={item} className="flex items-center gap-3 text-[17px]">
              <FaCheckCircle className="text-brand text-[22px]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
