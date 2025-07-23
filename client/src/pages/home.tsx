import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ProblemsSection from "@/components/problems-section";
import ProcessSection from "@/components/process-section";
import MaintenanceSection from "@/components/maintenance-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProblemsSection />
      <ProcessSection />
      <MaintenanceSection />
      <TestimonialsSection />
      <ContactSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
