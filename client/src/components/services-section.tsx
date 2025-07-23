import { Card, CardContent } from "@/components/ui/card";
import {
  Laptop,
  Shield,
  Download,
  Mail,
  Settings,
  Globe,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Installation d'Équipements",
    description:
      "Nous installons et configurons tous vos appareils informatiques : ordinateurs, imprimantes, Wi-Fi, caméras. Tout fonctionne dès le premier jour !",
    features: ["Installation rapide", "Tout configuré", "Vous apprenez à utiliser"],
    color: "bg-labtek-blue",
  },
  {
    icon: Shield,
    title: "Sécurité & Sauvegarde",
    description:
      "Nous protégeons vos données importantes avec des sauvegardes automatiques et sécurisons votre réseau contre les pirates informatiques.",
    features: ["Données protégées", "Internet sécurisé", "Sauvegarde automatique"],
    color: "bg-labtek-violet",
  },
  {
    icon: Download,
    title: "Installation de Programmes",
    description:
      "Nous installons tous vos logiciels de travail : Office, messagerie, outils spécialisés. Nous transférons aussi vos anciennes données.",
    features: ["Programmes installés", "Données récupérées", "Formation incluse"],
    color: "bg-blue-500",
  },
  {
    icon: Mail,
    title: "Email Professionnel",
    description:
      "Créez votre image professionnelle avec des adresses email à votre nom (@votreentreprise.fr) et un site web pour présenter votre activité.",
    features: ["Email à votre nom", "Site web inclus", "Support continu"],
    color: "bg-green-500",
  },
  {
    icon: Settings,
    title: "Dépannage & Assistance",
    description:
      "Problème informatique ? Nous intervenons rapidement sur place ou à distance pour réparer et vous conseiller. Disponibles 7j/7 pour les urgences.",
    features: ["Réparation rapide", "Aide à distance", "Urgences 7j/7"],
    color: "bg-orange-500",
  },
  {
    icon: Globe,
    title: "Sites Web Simples",
    description:
      "Créez votre présence en ligne avec un site web professionnel qui présente votre entreprise et attire de nouveaux clients sur Google.",
    features: ["Design professionnel", "Visible sur Google", "Facile à utiliser"],
    color: "bg-purple-500",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nos Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions informatiques complètes adaptées à vos besoins,
            expliquées simplement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" 
                       style={{
                         backgroundColor: (() => {
                           const colorMap: Record<string, string> = {
                             'bg-labtek-blue': '#4F6FEF20',
                             'bg-labtek-violet': '#A855F720', 
                             'bg-blue-500': '#3B82F620',
                             'bg-green-500': '#10B98120',
                             'bg-orange-500': '#F59E0B20',
                             'bg-purple-500': '#8B5CF620'
                           };
                           return colorMap[service.color] || '#4F6FEF20';
                         })()
                       }}>
                    <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" 
                          style={{
                            color: (() => {
                              const colorMap: Record<string, string> = {
                                'bg-labtek-blue': '#4F6FEF',
                                'bg-labtek-violet': '#A855F7',
                                'bg-blue-500': '#3B82F6', 
                                'bg-green-500': '#10B981',
                                'bg-orange-500': '#F59E0B',
                                'bg-purple-500': '#8B5CF6'
                              };
                              return colorMap[service.color] || '#4F6FEF';
                            })()
                          }} />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
