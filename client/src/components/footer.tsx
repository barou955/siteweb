import { Laptop, MapPin, Clock, Globe, Mail } from "lucide-react";
import labtekLogo from "@assets/Labtek-logo_1753288270340.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-36 h-12 rounded-lg overflow-hidden">
                <img 
                  src={labtekLogo} 
                  alt="Labtek Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Solutions informatiques professionnelles pour particuliers et PME
              en Essonne et Île-de-France. Expertise, simplicité et confiance
              depuis plus de 10 ans.
            </p>
            <div className="text-sm text-gray-500">
              <p>SIRET : En cours d'immatriculation</p>
              <p>Micro-entreprise basée en Essonne (91)</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-labtek-blue transition-colors duration-200"
                >
                  Installation systèmes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-labtek-blue transition-colors duration-200"
                >
                  Infrastructure réseau
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-labtek-blue transition-colors duration-200"
                >
                  Déploiement logiciels
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-labtek-blue transition-colors duration-200"
                >
                  Emails professionnels
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-labtek-blue transition-colors duration-200"
                >
                  Maintenance & support
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-labtek-blue transition-colors duration-200"
                >
                  Sites web vitrine
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Zone */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact & Zone</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-labtek-blue" />
                Essonne & Île-de-France
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-labtek-blue" />
                Lun-Ven 9h-18h, Sam 9h-16h
              </li>
              <li className="flex items-center">
                <Globe className="w-4 h-4 mr-2 text-labtek-blue" />
                labtek.fr
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center text-labtek-blue hover:text-labtek-violet transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Nous contacter
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500">
            © 2024 Labtek. Tous droits réservés. |{" "}
            <a
              href="#"
              className="hover:text-labtek-blue transition-colors duration-200"
            >
              Mentions légales
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="hover:text-labtek-blue transition-colors duration-200"
            >
              CGV
            </a>
          </div>
          <div className="text-sm text-gray-500 mt-4 md:mt-0">
            Conçu avec ❤️ en Essonne
          </div>
        </div>
      </div>
    </footer>
  );
}
