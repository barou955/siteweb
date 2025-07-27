import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceDetailModal from "./service-detail-modal";
import {
  Laptop,
  Shield,
  Download,
  Mail,
  Settings,
  Globe,
  Check,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Installation d'Équipements",
    description:
      "Nous installons et configurons tous vos appareils informatiques. Que vous ayez besoin d'un ordinateur pour la bureautique, d'une imprimante familiale ou d'un réseau Wi-Fi performant, nous choisissons et installons le matériel adapté à votre usage et votre budget.",
    features: ["Conseil sur le matériel adapté", "Installation et configuration complète", "Formation à l'utilisation"],
    color: "bg-labtek-blue",
  },
  {
    icon: Globe,
    title: "Sites Web Simples",
    description:
      "Créez votre présence en ligne avec un site web professionnel adapté à votre activité. Site vitrine pour présenter vos services, portfolio pour vos créations, ou page de contact pour être trouvé facilement par vos clients.",
    features: ["Design professionnel et moderne", "Visible sur Google", "Facile à mettre à jour"],
    color: "bg-purple-500",
  },
  {
    icon: Download,
    title: "Installation de Programmes",
    description:
      "Nous installons et configurons tous vos logiciels de travail selon vos besoins : suite bureautique pour les documents, logiciel de comptabilité, messagerie, retouche photo, ou outils spécialisés à votre métier.",
    features: ["Logiciels adaptés à votre activité", "Récupération de vos anciennes données", "Formation à l'utilisation"],
    color: "bg-blue-500",
  },
  {
    icon: Mail,
    title: "Email Professionnel",
    description:
      "Créez votre image professionnelle avec des adresses email personnalisées (@votre-entreprise.fr). Nous configurons votre messagerie sur tous vos appareils et vous accompagnons dans la gestion de vos contacts professionnels.",
    features: ["Adresse email à votre nom", "Configuration sur tous vos appareils", "Sauvegarde automatique"],
    color: "bg-green-500",
  },
  {
    icon: Shield,
    title: "Sécurité & Sauvegarde",
    description:
      "Nous protégeons vos données importantes contre les virus, les pannes et les pirates. Sauvegarde automatique de vos photos, documents et emails, plus sécurisation de votre réseau internet pour naviguer en toute sécurité.",
    features: ["Protection antivirus efficace", "Sauvegarde automatique de vos données", "Navigation internet sécurisée"],
    color: "bg-labtek-violet",
  },
  {
    icon: Settings,
    title: "Dépannage & Assistance",
    description:
      "Ordinateur lent, problème d'imprimante, internet qui ne marche plus ? Nous intervenons rapidement pour diagnostiquer et résoudre tous vos problèmes informatiques. Support disponible 7j/7 pour les urgences.",
    features: ["Diagnostic et réparation rapide", "Assistance à distance", "Support urgence 7j/7"],
    color: "bg-orange-500",
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
                className="group hover:shadow-xl transition-all duration-300 border-border hover:scale-105 hover:-translate-y-2 flex flex-col"
              >
                <CardContent className="p-8 flex flex-col flex-1">
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
                  <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <ServiceDetailModal service={service}>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-labtek-blue group-hover:text-white transition-colors duration-300"
                      >
                        Voir les détails
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </ServiceDetailModal>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
