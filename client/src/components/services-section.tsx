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
      "Besoin d'un nouvel ordinateur ? D'une imprimante ? D'internet plus rapide ? Nous choisissons le bon matériel pour vous et l'installons chez vous. Ordinateurs, imprimantes, Wi-Fi, tout est configuré et prêt à utiliser !",
    features: ["Je vous aide à choisir", "J'installe tout chez vous", "Je vous explique comment ça marche"],
    color: "bg-labtek-blue",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=250&fit=crop&auto=format&q=80",
    imageAlt: "Installation d'ordinateur et équipements informatiques"
  },
  {
    icon: Globe,
    title: "Sites Web Simples",
    description:
      "Vous voulez être trouvé sur internet ? Je crée votre site web pour présenter votre activité. Vos clients pourront voir vos services, vous contacter facilement et vous trouver sur Google.",
    features: ["Site moderne et beau", "Vos clients vous trouvent sur Google", "Vous pouvez le modifier vous-même"],
    color: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop&auto=format&q=80",
    imageAlt: "Création de site web professionnel"
  },
  {
    icon: Download,
    title: "Installation de Programmes",
    description:
      "Vous avez besoin de Word, Excel, un logiciel de comptabilité ? Je trouve et installe les programmes qu'il vous faut. Vos anciens fichiers sont récupérés et tout fonctionne parfaitement.",
    features: ["Les bons logiciels pour votre travail", "Vos anciens fichiers sauvegardés", "Je vous montre comment les utiliser"],
    color: "bg-blue-500",
    image: "/microsoft-office-apps.png",
    imageAlt: "Suite Microsoft Office - Word, Excel, PowerPoint, Teams et autres logiciels professionnels"
  },
  {
    icon: Mail,
    title: "Email Professionnel",
    description:
      "Fini les adresses @gmail.com ! Avec votre email @votre-nom.fr, vous paraissez plus professionnel. Ça marche sur votre téléphone, tablette et ordinateur automatiquement.",
    features: ["Email à votre nom d'entreprise", "Ça marche partout (téléphone, PC...)", "Vos emails sont sauvegardés"],
    color: "bg-green-500",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop&auto=format&q=80",
    imageAlt: "Email professionnel et messagerie"
  },
  {
    icon: Shield,
    title: "Sécurité & Sauvegarde",
    description:
      "Peur de perdre vos photos de famille ? Que des virus abîment votre ordinateur ? Je protège tout : vos photos, documents importants et votre navigation internet sont en sécurité.",
    features: ["Vos photos et documents protégés", "Plus de virus sur votre PC", "Internet en toute sécurité"],
    color: "bg-labtek-violet",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&auto=format&q=80",
    imageAlt: "Sécurité informatique et sauvegarde de données"
  },
  {
    icon: Settings,
    title: "Dépannage & Assistance",
    description:
      "Votre ordinateur rame ? L'imprimante ne marche plus ? Internet est coupé ? J'arrive rapidement pour tout remettre en ordre. Disponible même le weekend pour les urgences !",
    features: ["Je répare rapidement", "Aide par téléphone possible", "Disponible weekend et soirs"],
    color: "bg-orange-500",
    image: "/depannage-assistance-repair.png",
    imageAlt: "Technicien en train de réparer un ordinateur - service de dépannage informatique"
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
                className="group hover:shadow-xl transition-all duration-300 border-border hover:scale-105 hover:-translate-y-2 flex flex-col overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300" 
                       style={{
                         backgroundColor: (() => {
                           const colorMap: Record<string, string> = {
                             'bg-labtek-blue': '#4F6FEF90',
                             'bg-labtek-violet': '#A855F790', 
                             'bg-blue-500': '#3B82F690',
                             'bg-green-500': '#10B98190',
                             'bg-orange-500': '#F59E0B90',
                             'bg-purple-500': '#8B5CF690'
                           };
                           return colorMap[service.color] || '#4F6FEF90';
                         })()
                       }}>
                    <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
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