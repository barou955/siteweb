import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Laptop, Sun, Moon, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-labtek-blue rounded-lg flex items-center justify-center">
                <Laptop className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-labtek-dark-blue dark:text-labtek-blue">
                Labtek
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-foreground/80 hover:text-labtek-blue transition-colors duration-200"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground/80 hover:text-labtek-blue transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("processus")}
                className="text-foreground/80 hover:text-labtek-blue transition-colors duration-200"
              >
                Processus
              </button>
              <button
                onClick={() => scrollToSection("maintenance")}
                className="text-foreground/80 hover:text-labtek-blue transition-colors duration-200"
              >
                Maintenance
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground/80 hover:text-labtek-blue transition-colors duration-200"
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
              onClick={() => scrollToSection("accueil")}
              className="block px-3 py-2 text-foreground/80 hover:text-labtek-blue transition-colors duration-200 w-full text-left"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-foreground/80 hover:text-labtek-blue transition-colors duration-200 w-full text-left"
            >
              Services
            </button>
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
