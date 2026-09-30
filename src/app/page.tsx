import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import CoursesSection from "@/components/CoursesSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import LearningPaths from "@/components/LearningPaths";
import ProfessionalGrowth from "@/components/ProfessionalGrowth";
import CtaBanner from "@/components/CtaBanner";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <PartnerLogos />
      <CoursesSection />
      <FeaturedCategories />
      <LearningPaths />
      <ProfessionalGrowth />
      <CtaBanner />
      <Testimonials />
      <Footer />
    </main>
  );
}
