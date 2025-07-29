import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ProcessSection from "@/components/process-section";
import MaintenanceSection from "@/components/maintenance-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import SeoMeta from "@/components/seo-meta";

export default function Home() {
  useEffect(() => {
    // Gérer le défilement automatique vers la section si il y a un hash dans l'URL
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <SeoMeta />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <MaintenanceSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}