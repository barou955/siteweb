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
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-black mb-6">
            Solutions Informatiques
            <br />
            <span className="dark:text-blue-200 text-[#3366cc]">Sur Mesure</span>
          </h1>
          <p className="text-xl md:text-2xl dark:text-blue-100 text-[#333333] mb-8 max-w-3xl">
            Services informatiques personnalisés pour particuliers, 
            auto-entrepreneurs et PME en Essonne et Île-de-France. 
            De l'aide ponctuelle aux solutions complètes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("contact")}
              className="bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-8 py-3 text-lg font-semibold"
            >
              Contactez-nous
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              onClick={() => scrollToSection("services")}
              className="bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-8 py-3 text-lg font-semibold"
            >
              Nos Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}