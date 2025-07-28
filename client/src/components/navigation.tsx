import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Laptop, Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import labtekLogo from "@assets/Labtek-logo_1753288270340.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [location, setLocation] = useLocation();

  const toggleTheme = () => {
    if (theme === "system") {
      // Détecter le thème système actuel et basculer vers l'opposé
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setTheme(systemTheme === "dark" ? "light" : "dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const scrollToSection = (sectionId: string) => {
    // Si nous ne sommes pas sur la page d'accueil, rediriger d'abord
    if (location !== '/') {
      setLocation('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      setIsMenuOpen(false);
      return;
    }
    
    // Si nous sommes sur la page d'accueil, faire défiler vers la section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navigateToService = (servicePath: string) => {
    setLocation(servicePath);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
    // S'assurer que l'utilisateur arrive en haut de la nouvelle page
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-40 h-14 rounded-lg overflow-hidden mr-3">
              <img
                src={labtekLogo}
                alt="Labtek Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col -ml-14">
              <h1 className="text-xl font-bold text-labtek-blue">LABTEK</h1>
              <p className="text-xs text-muted-foreground">
                Services Informatiques
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-foreground/80 hover:text-labtek-blue transition-all duration-300 ease-in-out hover:scale-105 hover:bg-labtek-blue/5 px-3 py-2 rounded-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Accueil</span>
                <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
              </button>
              <div 
                className="relative group"
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className="text-foreground/80 hover:text-labtek-blue transition-all duration-300 ease-in-out hover:scale-105 hover:bg-labtek-blue/5 px-3 py-2 rounded-lg relative overflow-hidden group flex items-center gap-1"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span className="relative z-10">Services</span>
                  <ChevronDown className="w-4 h-4 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
                </button>
                
                {isServicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50 animate-in fade-in-0 zoom-in-95 duration-200"
                  >
                    <button
                      onClick={() => {
                        scrollToSection("services");
                        setIsServicesOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-labtek-blue/5 transition-all duration-200 hover:translate-x-1 hover:text-labtek-blue group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"></div>
                      <span className="relative z-10">Tous nos services</span>
                    </button>
                    <div className="border-t border-border my-2"></div>
                    <button
                      onClick={() => navigateToService("/services/installation-equipements")}
                      className="w-full text-left px-4 py-2 hover:bg-labtek-blue/5 transition-all duration-200 hover:translate-x-1 hover:text-labtek-blue group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"></div>
                      <span className="relative z-10">Installation d'équipements</span>
                    </button>
                    <button
                      onClick={() => navigateToService("/services/montage-pc-sur-mesure")}
                      className="w-full text-left px-4 py-2 hover:bg-labtek-blue/5 transition-all duration-200 hover:translate-x-1 hover:text-labtek-blue group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"></div>
                      <span className="relative z-10">Montage PC sur mesure</span>
                    </button>
                    <button
                      onClick={() => navigateToService("/services/sites-web")}
                      className="w-full text-left px-4 py-2 hover:bg-labtek-blue/5 transition-all duration-200 hover:translate-x-1 hover:text-labtek-blue group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"></div>
                      <span className="relative z-10">Sites web professionnels</span>
                    </button>
                    <button
                      onClick={() => navigateToService("/services/installation-programmes")}
                      className="w-full text-left px-4 py-2 hover:bg-labtek-blue/5 transition-all duration-200 hover:translate-x-1 hover:text-labtek-blue group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"></div>
                      <span className="relative z-10">Installation de programmes</span>
                    </button>
                    <button
                      onClick={() => navigateToService("/services/email-professionnel")}
                      className="w-full text-left px-4 py-2 hover:bg-labtek-blue/5 transition-all duration-200 hover:translate-x-1 hover:text-labtek-blue group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"></div>
                      <span className="relative z-10">Email professionnel</span>
                    </button>
                    <button
                      onClick={() => navigateToService("/services/securite-sauvegarde")}
                      className="w-full text-left px-4 py-2 hover:bg-labtek-blue/5 transition-all duration-200 hover:translate-x-1 hover:text-labtek-blue group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"></div>
                      <span className="relative z-10">Sécurité & Sauvegarde</span>
                    </button>
                    <button
                      onClick={() => navigateToService("/services/depannage-assistance")}
                      className="w-full text-left px-4 py-2 hover:bg-labtek-blue/5 transition-all duration-200 hover:translate-x-1 hover:text-labtek-blue group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"></div>
                      <span className="relative z-10">Dépannage & Assistance</span>
                    </button>
                    <button
                      onClick={() => navigateToService("/services/infogerance-legere")}
                      className="w-full text-left px-4 py-2 hover:bg-labtek-blue/5 transition-all duration-200 hover:translate-x-1 hover:text-labtek-blue group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"></div>
                      <span className="relative z-10">Infogérance légère</span>
                    </button>
                    <button
                      onClick={() => navigateToService("/services/formation-accompagnement")}
                      className="w-full text-left px-4 py-2 hover:bg-labtek-blue/5 transition-all duration-200 hover:translate-x-1 hover:text-labtek-blue group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"></div>
                      <span className="relative z-10">Formation & accompagnement</span>
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={() => scrollToSection("processus")}
                className="text-foreground/80 hover:text-labtek-blue transition-all duration-300 ease-in-out hover:scale-105 hover:bg-labtek-blue/5 px-3 py-2 rounded-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Processus</span>
                <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
              </button>
              <button
                onClick={() => scrollToSection("maintenance")}
                className="text-foreground/80 hover:text-labtek-blue transition-all duration-300 ease-in-out hover:scale-105 hover:bg-labtek-blue/5 px-3 py-2 rounded-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Maintenance</span>
                <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
              </button>
              <button
                onClick={() => scrollToSection("temoignages")}
                className="text-foreground/80 hover:text-labtek-blue transition-all duration-300 ease-in-out hover:scale-105 hover:bg-labtek-blue/5 px-3 py-2 rounded-lg relative overflow-hidden group hidden"
              >
                <span className="relative z-10">Témoignages</span>
                <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground/80 hover:text-labtek-blue transition-all duration-300 ease-in-out hover:scale-105 hover:bg-labtek-blue/5 px-3 py-2 rounded-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
              </button>
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("accueil")}
              className="block px-3 py-2 text-foreground/80 hover:text-labtek-blue transition-all duration-300 ease-in-out w-full text-left rounded-lg hover:bg-labtek-blue/5 hover:translate-x-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Accueil</span>
              <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-foreground/80 hover:text-labtek-blue transition-all duration-300 ease-in-out w-full text-left rounded-lg hover:bg-labtek-blue/5 hover:translate-x-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Tous nos services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
            </button>
            <div className="ml-4 space-y-1">
              <button
                onClick={() => navigateToService("/services/installation-equipements")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-all duration-300 ease-in-out w-full text-left rounded-lg hover:bg-labtek-blue/5 hover:translate-x-2"
              >
                Installation d'équipements
              </button>
              <button
                onClick={() => navigateToService("/services/montage-pc-sur-mesure")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-all duration-300 ease-in-out w-full text-left rounded-lg hover:bg-labtek-blue/5 hover:translate-x-2"
              >
                Montage PC sur mesure
              </button>
              <button
                onClick={() => navigateToService("/services/sites-web")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-all duration-300 ease-in-out w-full text-left rounded-lg hover:bg-labtek-blue/5 hover:translate-x-2"
              >
                Sites web professionnels
              </button>
              <button
                onClick={() => navigateToService("/services/installation-programmes")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-all duration-300 ease-in-out w-full text-left rounded-lg hover:bg-labtek-blue/5 hover:translate-x-2"
              >
                Installation de programmes
              </button>
              <button
                onClick={() => navigateToService("/services/email-professionnel")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-all duration-300 ease-in-out w-full text-left rounded-lg hover:bg-labtek-blue/5 hover:translate-x-2"
              >
                Email professionnel
              </button>
              <button
                onClick={() => navigateToService("/services/securite-sauvegarde")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-all duration-300 ease-in-out w-full text-left rounded-lg hover:bg-labtek-blue/5 hover:translate-x-2"
              >
                Sécurité & Sauvegarde
              </button>
              <button
                onClick={() => navigateToService("/services/depannage-assistance")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-all duration-300 ease-in-out w-full text-left rounded-lg hover:bg-labtek-blue/5 hover:translate-x-2"
              >
                Dépannage & Assistance
              </button>
              <button
                onClick={() => navigateToService("/services/infogerance-legere")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-all duration-300 ease-in-out w-full text-left rounded-lg hover:bg-labtek-blue/5 hover:translate-x-2"
              >
                Infogérance légère
              </button>
              <button
                onClick={() => navigateToService("/services/formation-accompagnement")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-all duration-300 ease-in-out w-full text-left rounded-lg hover:bg-labtek-blue/5 hover:translate-x-2"
              >
                Formation & accompagnement
              </button>
            </div>
            <button
              onClick={() => scrollToSection("processus")}
              className="block px-3 py-2 text-foreground/80 hover:text-labtek-blue transition-all duration-300 ease-in-out w-full text-left rounded-lg hover:bg-labtek-blue/5 hover:translate-x-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Processus</span>
              <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
            </button>
            <button
              onClick={() => scrollToSection("maintenance")}
              className="block px-3 py-2 text-foreground/80 hover:text-labtek-blue transition-all duration-300 ease-in-out w-full text-left rounded-lg hover:bg-labtek-blue/5 hover:translate-x-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Maintenance</span>
              <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-foreground/80 hover:text-labtek-blue transition-all duration-300 ease-in-out w-full text-left rounded-lg hover:bg-labtek-blue/5 hover:translate-x-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
            </button>
            <button
              onClick={() => scrollToSection("temoignages")}
              className="block px-3 py-2 text-foreground/80 hover:text-labtek-blue transition-all duration-300 ease-in-out w-full text-left rounded-lg hover:bg-labtek-blue/5 hover:translate-x-2 relative overflow-hidden group hidden"
            >
              <span className="relative z-10">Témoignages</span>
              <div className="absolute inset-0 bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
