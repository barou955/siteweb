import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ServiceDetailModal from "./service-detail-modal";
import {
  Laptop,
  Settings,
  Globe,
  Download,
  Mail,
  Shield,
  Wrench,
  Monitor,
  GraduationCap,
  ArrowRight,
  ExternalLink,
  Check
} from "lucide-react";
import { useImages } from "@/hooks/use-images";

const services = [
  {
    icon: Laptop,
    title: "Installation d'Équipements",
    description:
      "Besoin d'un nouvel ordinateur ? D'une imprimante ? D'internet plus rapide ? Nous choisissons le bon matériel pour vous et l'installons chez vous. Ordinateurs, imprimantes, Wi-Fi, tout est configuré et prêt à utiliser !",
    features: ["Nous vous aidons à choisir", "Nous installons tout chez vous", "Nous vous expliquons comment ça marche"],
    color: "bg-labtek-blue",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=250&fit=crop&auto=format&q=80",
    imageAlt: "Installation d'ordinateur et équipements informatiques",
    link: "/services/installation-equipements"
  },
  {
    icon: Settings,
    title: "Montage PC sur Mesure",
    description:
      "Configuration personnalisée selon vos besoins : gaming, bureautique, workstation. Nous sélectionnons les meilleurs composants et assemblons votre PC idéal. Garantie 2 ans sur le montage et formation incluse.",
    features: ["Configuration personnalisée", "Composants de qualité", "Garantie 2 ans sur le montage"],
    color: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=250&fit=crop&auto=format&q=80",
    imageAlt: "PC gaming assemblé avec éclairage RGB",
    link: "/services/montage-pc-sur-mesure"
  },
  {
    icon: Globe,
    title: "Sites Web Simples",
    description:
      "Vous voulez être trouvé sur internet ? Nous créons votre site web pour présenter votre activité. Vos clients pourront voir vos services, vous contacter facilement et vous trouver sur Google.",
    features: ["Site moderne et beau", "Vos clients vous trouvent sur Google", "Vous pouvez le modifier vous-même"],
    color: "bg-green-500",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop&auto=format&q=80",
    imageAlt: "Création de site web professionnel",
    link: "/services/sites-web"
  },
  {
    icon: Download,
    title: "Installation de Logiciels",
    description:
      "Vous avez besoin de Word, Excel, un logiciel de comptabilité ? Nous trouvons et installons les programmes qu'il vous faut. Vos anciens fichiers sont récupérés et tout fonctionne parfaitement.",
    features: ["Les bons logiciels pour votre travail", "Vos anciens fichiers sauvegardés", "Nous vous montrons comment les utiliser"],
    color: "bg-blue-500",
    image: "https://i.ibb.co/PBPhNhB/outil-collaboratif.png",
    imageAlt: "Outils collaboratifs et logiciels professionnels",
    link: "/services/installation-programmes"
  },
  {
    icon: Mail,
    title: "Email Professionnel",
    description:
      "Fini les adresses @gmail.com ! Avec votre email @votre-nom.fr, vous paraissez plus professionnel. Ça marche sur votre téléphone, tablette et ordinateur automatiquement.",
    features: ["Email à votre nom d'entreprise", "Ça marche partout (téléphone, PC...)", "Plus crédible pour vos clients"],
    color: "bg-green-500",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop&auto=format&q=80",
    imageAlt: "Email professionnel sur ordinateur et smartphone",
    link: "/services/email-professionnel"
  },
  {
    icon: Shield,
    title: "Sécurité & Sauvegarde",
    description:
      "Peur de perdre vos photos de famille ? Que des virus abîment votre ordinateur ? Nous protégeons tout : vos photos, documents importants et votre navigation internet sont en sécurité.",
    features: ["Vos photos et documents protégés", "Plus de virus sur votre PC", "Internet en toute sécurité"],
    color: "bg-labtek-violet",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&auto=format&q=80",
    imageAlt: "Sécurité informatique et sauvegarde de données",
    link: "/services/securite-sauvegarde"
  },
  {
    icon: Wrench,
    title: "Dépannage & Assistance",
    description:
      "Votre ordinateur rame ? L'imprimante ne marche plus ? Internet est coupé ? Nous arrivons rapidement pour tout remettre en ordre. Disponibles même le weekend pour les urgences !",
    features: ["Nous réparons rapidement", "Aide par téléphone possible", "Disponibles weekend et soirs"],
    color: "bg-orange-500",
    image: "https://i.ibb.co/k62Mb2sf/Nouveau-projet-2025-04-19-T003114-991.webp",
    imageAlt: "Technicien en train de réparer un ordinateur - service de dépannage informatique",
    link: "/services/depannage-assistance"
  },
  {
    icon: Monitor,
    title: "Infogérance légère",
    description:
      "Confiez-nous la surveillance et la maintenance de votre infrastructure informatique. Notre service d'infogérance légère vous garantit sérénité et performance au quotidien avec une surveillance proactive.",
    features: ["Surveillance 24h/24", "Maintenance préventive", "Support prioritaire"],
    color: "bg-teal-500",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format&q=80",
    imageAlt: "Centre de surveillance informatique",
    link: "/services/infogerance-legere"
  },
  {
    icon: GraduationCap,
    title: "Formation & Accompagnement",
    description:
      "Développez vos compétences numériques avec nos formations personnalisées. De la bureautique aux outils collaboratifs, nous vous accompagnons dans votre montée en compétences digitales.",
    features: ["Formation sur mesure", "Accompagnement personnalisé", "Certification"],
    color: "bg-indigo-500",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&auto=format&q=80",
    imageAlt: "Formation informatique en groupe",
    link: "/services/formation-accompagnement"
  }
];

export default function ServicesSection() {
  const { getImage } = useImages();

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nos Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions informatiques adaptées à tous : particuliers, professionnels et entreprises,
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
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (service.title === "Installation de Programmes" && target.src.includes('microsoft-office-suite.png')) {
                        target.src = "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&auto=format&q=80";
                      } else if (service.title === "Dépannage & Assistance" && target.src.includes('depannage-assistance.png')) {
                        target.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format&q=80";
                      }
                    }}
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
                             'bg-purple-500': '#8B5CF690',
                             'bg-teal-500': '#00808090',
                             'bg-indigo-500': '#4B008290'
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
                    {service.link ? (
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-labtek-blue group-hover:text-white transition-colors duration-300"
                        onClick={() => window.location.href = service.link}
                      >
                        Voir les détails
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    ) : (
                      <ServiceDetailModal service={service}>
                        <Button 
                          variant="outline" 
                          className="w-full group-hover:bg-labtek-blue group-hover:text-white transition-colors duration-300"
                        >
                          Voir les détails
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </ServiceDetailModal>
                    )}
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
