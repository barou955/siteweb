import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="relative bg-gradient-to-br from-labtek-blue via-labtek-violet to-labtek-dark-blue py-20 lg:py-32"
    >
      <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Solutions Informatiques
            <br />
            <span className="text-blue-200">Professionnelles</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Services informatiques sur mesure pour particuliers et PME en
            Essonne et Île-de-France. Simplicité, sécurité et expertise
            technique à votre service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-white text-labtek-blue font-semibold hover:bg-blue-50 hover:text-labtek-dark-blue transition-all duration-200 transform hover:scale-105"
            >
              Demander un devis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              size="lg"
              className="bg-labtek-blue/20 border-2 border-white text-white font-semibold hover:bg-white hover:text-labtek-blue transition-all duration-200 transform hover:scale-105"
            >
              Découvrir nos services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
