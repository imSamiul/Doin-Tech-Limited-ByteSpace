import CoursesSection from '@/components/CoursesSection';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LearningPaths from '@/components/LearningPaths';
import PartnerLogos from '@/components/PartnerLogos';
import ProfessionalGrowth from '@/components/ProfessionalGrowth';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className='flex flex-col'>
      <Hero />
      <PartnerLogos />
      <CoursesSection />
      <LearningPaths />
      <ProfessionalGrowth />
      <CtaBanner />
      <Testimonials />
      <Footer />
    </main>
  );
}
