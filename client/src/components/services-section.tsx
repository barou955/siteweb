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
    title: "Installation de Systèmes",
    description:
      "Configuration et installation de vos équipements : ordinateurs, imprimantes, bornes Wi-Fi, caméras de sécurité, écrans connectés et plus encore.",
    features: ["Configuration complète", "Tests de fonctionnement", "Formation utilisateur"],
    color: "bg-labtek-blue",
  },
  {
    icon: Shield,
    title: "Infrastructure & Sécurité",
    description:
      "Mise en place et sécurisation de votre infrastructure réseau : routeurs, câblage, VPN, sauvegardes, pare-feux et serveurs.",
    features: ["Sécurité renforcée", "Réseau performant", "Sauvegarde automatique"],
    color: "bg-labtek-violet",
  },
  {
    icon: Download,
    title: "Déploiement de Logiciels",
    description:
      "Installation et configuration de vos outils de travail : Microsoft 365, Google Workspace, logiciels CRM et applications métier.",
    features: ["Configuration optimisée", "Migration de données", "Formation équipes"],
    color: "bg-blue-500",
  },
  {
    icon: Mail,
    title: "Emails & Hébergement Pro",
    description:
      "Solutions professionnelles complètes : adresses emails personnalisées, noms de domaine, messagerie sécurisée et hébergement web.",
    features: ["Emails professionnels", "Sécurité renforcée", "Support 24/7"],
    color: "bg-green-500",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description:
      "Assistance rapide sur site ou à distance, audits sécurité, conseils personnalisés et maintenance préventive de vos systèmes.",
    features: ["Intervention rapide", "Support à distance", "Conseils d'expert"],
    color: "bg-orange-500",
  },
  {
    icon: Globe,
    title: "Sites Web Vitrine",
    description:
      "Création de sites web professionnels et responsives pour présenter votre activité et attirer de nouveaux clients.",
    features: ["Design moderne", "Mobile-friendly", "SEO optimisé"],
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
