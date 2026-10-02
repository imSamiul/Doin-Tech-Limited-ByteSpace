import Image from 'next/image';

const partners = [
  { src: '/partners-logo/Partner1.svg', width: 170, height: 41 },
  { src: '/partners-logo/Partner2.svg', width: 169, height: 42 },
  { src: '/partners-logo/Partner3.svg', width: 170, height: 41 },
  { src: '/partners-logo/Partner4.svg', width: 168, height: 41 },
  { src: '/partners-logo/Partner5.svg', width: 167, height: 41 },
];

export default function PartnerLogos() {
  return (
    <section className='w-full bg-neutral-100 py-8 md:py-10'>
      <div className=' px-4 sm:px-8 lg:px-12 xl:px-32'>
        <div className='flex flex-wrap items-center justify-center lg:justify-between gap-8 sm:gap-12 lg:gap-18'>
          {partners.map((partner, index) => (
            <Image
              key={partner.src}
              src={partner.src}
              alt={`Partner logo ${index + 1}`}
              width={partner.width}
              height={partner.height}
              className='w-24 sm:w-32 md:w-36 lg:w-41.75 h-auto object-contain opacity-70 hover:opacity-100 transition-opacity'
              style={{ height: 'auto' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
