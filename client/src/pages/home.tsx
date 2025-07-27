import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemsSection from "@/components/problems-section";
import ServicesSection from "@/components/services-section";
import QuoteCalculator from "@/components/quote-calculator";
import ProcessSection from "@/components/process-section";
import TestimonialsSection from "@/components/testimonials-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import MaintenanceSection from "@/components/maintenance-section";
import SeoMeta from "@/components/seo-meta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SeoMeta />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <QuoteCalculator />
      <ProblemsSection />
      <ProcessSection />
      <MaintenanceSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}