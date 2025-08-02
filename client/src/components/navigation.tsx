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
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setTheme(systemTheme === "dark" ? "light" : "dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const scrollToSection = (sectionId: string) => {
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
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
            <div className="w-40 h-14 rounded-lg overflow-hidden mr-3 -ml-12">
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
                onClick={() => window.location.href = '/'}
                className="text-foreground/80 hover:text-labtek-blue transition-colors duration-200 px-3 py-2"
              >
                Accueil
              </button>
              <div 
                className="relative group"
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className="text-foreground/80 hover:text-labtek-blue transition-colors duration-200 px-3 py-2 flex items-center gap-1"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isServicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-0 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                  >
                    <button
                      onClick={() => {
                        scrollToSection("services");
                        setIsServicesOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      Tous nos services
                    </button>
                    <div className="border-t border-border my-2"></div>
                    <button
                      onClick={() => navigateToService("/services/installation-equipements")}
                      className="w-full text-left px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      Installation d'équipements
                    </button>
                    <button
                      onClick={() => navigateToService("/services/montage-pc-sur-mesure")}
                      className="w-full text-left px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      Montage PC sur mesure
                    </button>
                    <button
                      onClick={() => navigateToService("/services/sites-web")}
                      className="w-full text-left px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      Sites web professionnels
                    </button>
                    <button
                      onClick={() => navigateToService("/services/installation-programmes")}
                      className="w-full text-left px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      Installation de logiciels
                    </button>
                    <button
                      onClick={() => navigateToService("/services/email-professionnel")}
                      className="w-full text-left px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      Email professionnel
                    </button>
                    <button
                      onClick={() => navigateToService("/services/securite-sauvegarde")}
                      className="w-full text-left px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      Sécurité & Sauvegarde
                    </button>
                    <button
                      onClick={() => navigateToService("/services/depannage-assistance")}
                      className="w-full text-left px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      Dépannage & Assistance
                    </button>
                    <button
                      onClick={() => navigateToService("/services/infogerance-legere")}
                      className="w-full text-left px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      Infogérance légère
                    </button>
                    <button
                      onClick={() => navigateToService("/services/formation-accompagnement")}
                      className="w-full text-left px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      Formation & accompagnement
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={() => scrollToSection("processus")}
                className="text-foreground/80 hover:text-labtek-blue transition-colors duration-200 px-3 py-2"
              >
                Processus
              </button>
              <button
                onClick={() => scrollToSection("maintenance")}
                className="text-foreground/80 hover:text-labtek-blue transition-colors duration-200 px-3 py-2"
              >
                Maintenance
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground/80 hover:text-labtek-blue transition-colors duration-200 px-3 py-2"
              >
                Contact
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
              onClick={() => window.location.href = '/'}
              className="block px-3 py-2 text-foreground/80 hover:text-labtek-blue transition-colors duration-200 w-full text-left"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-foreground/80 hover:text-labtek-blue transition-colors duration-200 w-full text-left"
            >
              Tous nos services
            </button>
            <div className="ml-4 space-y-1">
              <button
                onClick={() => navigateToService("/services/installation-equipements")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-colors duration-200 w-full text-left"
              >
                Installation d'équipements
              </button>
              <button
                onClick={() => navigateToService("/services/montage-pc-sur-mesure")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-colors duration-200 w-full text-left"
              >
                Montage PC sur mesure
              </button>
              <button
                onClick={() => navigateToService("/services/sites-web")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-colors duration-200 w-full text-left"
              >
                Sites web professionnels
              </button>
              <button
                onClick={() => navigateToService("/services/installation-programmes")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-colors duration-200 w-full text-left"
              >
                Installation de logiciels
              </button>
              <button
                onClick={() => navigateToService("/services/email-professionnel")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-colors duration-200 w-full text-left"
              >
                Email professionnel
              </button>
              <button
                onClick={() => navigateToService("/services/securite-sauvegarde")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-colors duration-200 w-full text-left"
              >
                Sécurité & Sauvegarde
              </button>
              <button
                onClick={() => navigateToService("/services/depannage-assistance")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-colors duration-200 w-full text-left"
              >
                Dépannage & Assistance
              </button>
              <button
                onClick={() => navigateToService("/services/infogerance-legere")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-colors duration-200 w-full text-left"
              >
                Infogérance légère
              </button>
              <button
                onClick={() => navigateToService("/services/formation-accompagnement")}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-labtek-blue transition-colors duration-200 w-full text-left"
              >
                Formation & accompagnement
              </button>
            </div>
            <button
              onClick={() => scrollToSection("processus")}
              className="block px-3 py-2 text-foreground/80 hover:text-labtek-blue transition-colors duration-200 w-full text-left"
            >
              Processus
            </button>
            <button
              onClick={() => scrollToSection("maintenance")}
              className="block px-3 py-2 text-foreground/80 hover:text-labtek-blue transition-colors duration-200 w-full text-left"
            >
              Maintenance
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-foreground/80 hover:text-labtek-blue transition-colors duration-200 w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}