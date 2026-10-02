const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace transformed the way I learn. The courses are practical, engaging, and perfectly structured. I've gained skills that directly boosted my career.",
    avatar: "/avatar-1.jpg",
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "The platform is intuitive and the content quality is outstanding. I completed three courses and already applied everything I learned in real projects.",
    avatar: "/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace gave me all the tools I needed to build and monetize my own courses. The community support is incredible.",
    avatar: "/avatar-3.jpg",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400 fill-yellow-400"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-neutral-50 py-20 overflow-hidden">
      {/* Background gradient blob */}
      <div
        aria-hidden="true"
        className="absolute size-[600px] bg-blue-700 rounded-full blur-[200px] opacity-[0.07] pointer-events-none -left-32"
        style={{ top: "auto" }}
      />

      <div className="max-w-[1440px] mx-auto px-[120px] relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-14">
          <h2 className="max-w-[440px] text-black text-5xl font-semibold font-['Poppins'] leading-tight">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[360px] text-gray-500 text-lg font-normal font-['Satoshi'] leading-7 lg:pt-4">
            Real stories from learners and creators who found their path on
            ByteSpace.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ id, name, role, quote }) => (
            <div
              key={id}
              className="p-8 bg-white rounded-3xl flex flex-col gap-6 shadow-sm"
            >
              {/* Quote mark */}
              <svg
                className="w-8 h-8 text-blue-700 opacity-30"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <p className="text-neutral-700 text-base font-normal font-['Satoshi'] leading-7">
                {quote}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                {/* Avatar placeholder */}
                <div className="size-[52px] rounded-full bg-neutral-200 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-neutral-800 text-base font-semibold font-['Poppins']">
                    {name}
                  </span>
                  <span className="text-blue-700 text-sm font-normal font-['Satoshi']">
                    {role}
                  </span>
                </div>
                <div className="ml-auto">
                  <StarRating />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
