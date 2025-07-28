import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Laptop,
  Shield,
  Download,
  Mail,
  Settings,
  Globe,
  Check,
  Clock,
  Euro,
  Users,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

interface ServiceDetailProps {
  service: {
    icon: any;
    title: string;
    description: string;
    features: string[];
    color: string;
  };
  children: React.ReactNode;
}

const serviceDetails = {
  "Montage PC sur Mesure": {
    equipment: [
      "Configuration Bureautique (450€) : AMD Ryzen 5 5600G, 16GB RAM, SSD 500GB, parfaite pour navigation web, emails et bureautique quotidienne.",
      "Configuration Gaming (1200€) : AMD Ryzen 7 5800X, RTX 4060 Ti, 32GB RAM, SSD 1TB + HDD 2TB, pour jouer aux derniers jeux en haute qualité.",
      "Configuration Workstation (2500€) : AMD Ryzen 9 5950X, RTX 4080, 64GB RAM ECC, SSD 2TB NVMe Gen4, pour création 3D et montage vidéo professionnel.",
      "Processeurs Intel ou AMD : Du Core i5 pour bureautique au Core i9 pour création, choix selon vos besoins de performance.",
      "Cartes graphiques : De l'intégrée pour bureautique aux RTX 4090 pour gaming et workstation, optimisation selon l'usage.",
      "Mémoire vive : 16GB minimum en DDR4/DDR5, jusqu'à 128GB pour workstations, fréquences optimisées pour chaque configuration.",
      "Stockage : SSD NVMe rapides pour le système, HDD ou SSD supplémentaires pour le stockage, sauvegarde et redondance.",
      "Alimentation : 80+ Bronze minimum, modulaires et certifiées, dimensionnées selon la consommation avec marge de sécurité."
    ],
    options: [
      "Conseil personnalisé selon vos besoins et budget",
      "Sélection des meilleurs composants rapport qualité/prix",
      "Montage professionnel avec gestion des câbles",
      "Tests complets de stabilité et performances",
      "Installation et configuration du système d'exploitation",
      "Installation des pilotes et logiciels essentiels",
      "Formation à l'utilisation et maintenance",
      "Garantie 2 ans sur le montage et assemblage"
    ],
    duration: "3-5 jours selon configuration",
    price: "450€ - 3000€ selon configuration",
    target: "Gamers, créateurs, professionnels"
  },
  "Installation d'Équipements": {
    equipment: [
      "Ordinateurs de bureau (unité centrale, écran, clavier, souris) : Modèles entrée de gamme (300€) pour bureautique et navigation web, modèles milieu de gamme (700€) pour usage polyvalent, stations de travail (1200€) pour création et jeux.",
      "Ordinateurs portables : Ultraportables (400€) pour mobilité, polyvalents (800€) avec écran 15 pouces, modèles gamers (1800€) avec carte graphique dédiée et SSD.",
      "Imprimantes multifonctions : Jet d'encre couleur (80€) pour impressions occasionnelles, laser monochrome (150€) pour gros volumes de texte, modèles avec scanner et Wi-Fi (400€) pour télétravail.",
      "Routeurs Wi-Fi professionnels : Routeurs bibande (60€) pour petits appartements, modèles Mesh (150€) pour grande surface, routeurs avec contrôle parental et sécurité renforcée (250€).",
      "Caméras de surveillance IP : Caméras HD (45€) pour intérieur, modèles motorisées (120€) avec vision nocturne, caméras extérieures (200€) résistantes aux intempéries et alertes de mouvement.",
      "Disques durs externes et NAS : Disques 1To (60€) pour sauvegarde basique, SSD externes (150€) pour rapidité, serveurs NAS (500€) pour partage de fichiers sécurisé en réseau.",
      "Écrans et périphériques : Écrans 24 pouces (100€) pour bureautique, écrans incurvés (300€) pour immersion, claviers mécaniques (80€) pour confort de frappe, souris ergonomiques (50€) pour usage prolongé.",
    ],
    options: [
      "Déballage et installation physique complète",
      "Configuration système et comptes utilisateurs",
      "Transfert de données depuis ancien matériel",
      "Installation des logiciels essentiels",
      "Formation pratique de 1h incluse",
      "Test de fonctionnement et optimisation",
      "Garantie installation 6 mois + SAV prioritaire",
    ],
    duration: "2-6 heures selon complexité",
    price: "80€ (installation seule) + prix matériel",
    target: "Particuliers, TPE et PME",
  },
  "Sites Web Simples": {
    equipment: [
      "Hébergement web français (48€/an)",
      "WordPress ou solution sur-mesure",
      "Templates premium responsive",
      "Outils SEO et Google Analytics",
      "Certificat SSL et sécurité renforcée",
      "Système de sauvegarde automatique",
      "Optimisation vitesse et performances",
    ],
    options: [
      "Design 100% personnalisé selon secteur d'activité",
      "Version mobile/tablette parfaitement adaptée",
      "Référencement Google local optimisé",
      "Formulaire contact avec anti-spam intégré",
      "Galerie photos/portfolio selon besoins",
      "Formation complète gestion contenu (3h)",
      "1 an de maintenance et mises à jour incluses",
    ],
    duration: "7-15 jours selon fonctionnalités",
    price: "450€ - 1200€ selon complexité + 48€/an hébergement",
    target: "Artisans, commerces, consultants, associations",
  },
  "Installation de Programmes": {
    equipment: [
      "Microsoft Office 365 (7€/mois/utilisateur)",
      "Logiciels comptabilité Sage (300€ - 1200€)",
      "Suite Adobe Creative (24€/mois/utilisateur)",
      "Logiciels métier sur devis",
      "Navigateurs sécurisés et extensions",
      "Teams, Zoom Pro (5€ - 20€/mois)",
      "Outils collaboratifs (Slack, Notion, etc.)",
    ],
    options: [
      "Installation propre sans conflits logiciels",
      "Migration complète données anciennes versions",
      "Configuration personnalisée selon usage",
      "Formation approfondie aux nouvelles fonctions",
      "Création de modèles et templates métier",
      "Licences légales et conformité RGPD",
      "Support dédié 30 jours post-installation",
    ],
    duration: "1-4 heures selon nombre de logiciels",
    price: "60€/heure + coût licences",
    target: "Tous profils, débutants à experts",
  },
  "Email Professionnel": {
    equipment: [
      "Nom de domaine .fr/.com (12€ - 15€/an)",
      "Hébergement email professionnel (4€/mois/boîte)",
      "Serveurs français certifiés RGPD",
      "Certificats SSL Let's Encrypt inclus",
      "Anti-spam et antivirus intégrés",
      "Espace stockage 25GB/boîte extensible",
      "Synchronisation mobile tous OS",
    ],
    options: [
      "Configuration email @votreentreprise.fr illimitée",
      "Site web vitrine responsive inclus (5 pages)",
      "Synchronisation automatique mobile/PC",
      "Sauvegarde emails quotidienne 30 jours",
      "Protection anti-spam 99.9% efficacité",
      "Support technique prioritaire par chat",
      "Migration emails existants sans perte",
    ],
    duration: "24-72h (délégation DNS)",
    price: "120€/an/boîte (domaine + hébergement inclus)",
    target: "TPE, indépendants, professions libérales",
  },
  "Sécurité & Sauvegarde": {
    equipment: [
      "Antivirus professionnel (40€/an/poste)",
      "Pare-feu réseau entreprise (150€ - 800€)",
      "Serveurs NAS Synology/QNAP (200€ - 1500€)",
      "Disques de sauvegarde externes (60€ - 300€)",
      "Solutions cloud sécurisées (5€ - 25€/mois)",
      "Systèmes d'authentification 2FA",
      "Monitoring réseau professionnel",
    ],
    options: [
      "Audit complet des vulnérabilités existantes",
      "Configuration sauvegarde automatique 3-2-1",
      "Chiffrement AES-256 des données sensibles",
      "Tests de restauration mensuels programmés",
      "Surveillance proactive des menaces 24h/24",
      "Formation sécurité équipes (2h)",
      "Maintenance préventive trimestrielle",
    ],
    duration: "1-3 jours selon infrastructure",
    price: "150€/jour + solutions (à partir de 300€)",
    target: "PME, professions libérales, données sensibles",
  },
  "Dépannage & Assistance": {
    equipment: [
      "Diagnostic à distance : connexion sécurisée, résolution immédiate 70% des cas (30€)",
      "Intervention sur site : déplacement dans un rayon de 50 km (40€ + 0,50€/km)",
      "Réparation matérielle : remplacement composants défaillants (pièces + main d'œuvre)",
      "Récupération de données : disques endommagés, fichiers supprimés (80€ - 300€)",
      "Nettoyage système : suppression virus, optimisation performances (50€)",
      "Mise à jour sécurisée : système, pilotes, logiciels (40€)",
      "Formation dépannage : gestes de premiers secours informatiques (60€/h)",
    ],
    options: [
      "Diagnostic gratuit avec devis détaillé sous 24h",
      "Intervention d'urgence sous 4h (supplément 50€)",
      "Réparation sur site ou en atelier selon problème",
      "Sauvegarde préventive avant toute intervention",
      "Test complet après réparation",
      "Conseils personnalisés pour éviter la récidive",
      "Garantie 3 mois sur toutes nos interventions",
    ],
    duration: "30 min - 4h selon complexité",
    price: "30€ - 300€ selon type d'intervention",
    target: "Particuliers et professionnels",
  },
};

export default function ServiceDetailModal({
  service,
  children,
}: ServiceDetailProps) {
  const [isOpen, setIsOpen] = useState(false);
  const details = serviceDetails[service.title as keyof typeof serviceDetails];

  if (!details) return <>{children}</>;

  const scrollToContact = () => {
    setIsOpen(false); // Fermer le modal d'abord
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Délai pour permettre la fermeture du modal
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-full max-w-md sm:max-w-4xl max-h-[90vh] p-0 overflow-hidden mx-auto my-6 rounded-lg">
        <div className="p-4 sm:p-6 border-b flex-shrink-0">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-xl sm:text-2xl">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: (() => {
                    const colorMap: Record<string, string> = {
                      "bg-labtek-blue": "#4F6FEF20",
                      "bg-labtek-violet": "#A855F720",
                      "bg-blue-500": "#3B82F620",
                      "bg-green-500": "#10B98120",
                      "bg-orange-500": "#F59E0B20",
                      "bg-purple-500": "#8B5CF620",
                    };
                    return colorMap[service.color] || "#4F6FEF20";
                  })(),
                }}
              >
                <service.icon
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  style={{
                    color: (() => {
                      const colorMap: Record<string, string> = {
                        "bg-labtek-blue": "#4F6FEF",
                        "bg-labtek-violet": "#A855F7",
                        "bg-blue-500": "#3B82F6",
                        "bg-green-500": "#10B981",
                        "bg-orange-500": "#F59E0B",
                        "bg-purple-500": "#8B5CF6",
                      };
                      return colorMap[service.color] || "#4F6FEF";
                    })(),
                  }}
                />
              </div>
              <span className="line-clamp-2">{service.title}</span>
            </DialogTitle>
            <DialogDescription className="sr-only">
              Détails complets du service {service.title} avec équipements,
              options et tarification
            </DialogDescription>
          </DialogHeader>
        </div>

        <ScrollArea className="flex-1 max-h-[calc(90vh-140px)]">
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* Description */}
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {service.description}
            </p>

            {/* Informations pratiques */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <Card>
                <CardContent className="p-3 sm:p-4 text-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-labtek-blue" />
                  <p className="font-semibold text-sm sm:text-base">Durée</p>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                    {details.duration}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-3 sm:p-4 text-center">
                  <Euro className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-green-600" />
                  <p className="font-semibold text-sm sm:text-base">
                    Tarification
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                    {details.price}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-3 sm:p-4 text-center">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-purple-600" />
                  <p className="font-semibold text-sm sm:text-base">
                    Clientèle cible
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                    {details.target}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Équipements et tarifs */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                <div className="w-2 h-6 bg-labtek-blue rounded-full"></div>
                Équipements proposés avec tarifs indicatifs
              </h3>
              <div className="grid gap-4">
                {details.equipment.map((item, index) => {
                  const [title, description] = item.split(" : ");
                  return (
                    <div key={index} className="group">
                      <Card className="border border-gray-200 hover:border-labtek-blue/40 hover:shadow-md transition-all duration-200">
                        <CardContent className="p-3 sm:p-5">
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-labtek-blue to-labtek-violet rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base line-clamp-2">
                                {title}
                              </h4>
                              {description && (
                                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">
                                  {description}
                                </p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Services inclus détaillés */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                <div className="w-2 h-6 bg-labtek-violet rounded-full"></div>
                Services inclus dans la prestation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {details.options.map((option, index) => (
                  <Card
                    key={index}
                    className="group border border-gray-200 hover:border-labtek-violet/40 hover:shadow-md transition-all duration-200"
                  >
                    <CardContent className="p-3 sm:p-5">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-labtek-violet to-labtek-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground text-xs sm:text-sm leading-relaxed">
                            {option}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Avantages */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Pourquoi choisir ce service ?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {service.features.map((feature, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs sm:text-sm py-1.5 sm:py-2 px-2 sm:px-3 bg-labtek-blue/10 text-labtek-blue border-labtek-blue/20 justify-start"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Contrats de maintenance pour tous les services */}
            <div className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-950/20 dark:via-orange-950/20 dark:to-red-950/20 rounded-xl p-3 sm:p-6 lg:p-8 border-2 border-orange-200 dark:border-orange-800 shadow-lg">
              {/* Badge promotionnel */}
              <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-full max-w-xs sm:max-w-none sm:w-auto">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 sm:px-6 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-md animate-pulse text-center">
                  <span className="block sm:hidden">
                    {(() => {
                      const shortBadges = {
                        "Installation d'Équipements":
                          "🔧 MAINTENANCE ÉQUIPEMENTS",
                        "Sites Web Simples": "🌐 PROTECTION SITE",
                        "Installation de Programmes": "💾 LOGICIELS À JOUR",
                        "Email Professionnel": "✉️ EMAIL SÉCURISÉ",
                        "Sécurité & Sauvegarde": "🛡️ SÉCURITÉ +",
                        "Dépannage & Assistance": "🔧 ÉVITEZ LES PANNES",
                      };
                      return (
                        shortBadges[
                          service.title as keyof typeof shortBadges
                        ] || "🔧 MAINTENANCE"
                      );
                    })()}
                  </span>
                  <span className="hidden sm:block">
                    {(() => {
                      const badges = {
                        "Installation d'Équipements":
                          "🔧 MAINTENEZ VOS ÉQUIPEMENTS !",
                        "Sites Web Simples": "🌐 PROTÉGEZ VOTRE SITE !",
                        "Installation de Programmes":
                          "💾 GARDEZ VOS LOGICIELS À JOUR !",
                        "Email Professionnel": "✉️ SÉCURISEZ VOS EMAILS !",
                        "Sécurité & Sauvegarde":
                          "🛡️ RENFORCEZ VOTRE SÉCURITÉ !",
                        "Dépannage & Assistance": "🔧 ÉVITEZ LES PANNES !",
                      };
                      return (
                        badges[service.title as keyof typeof badges] ||
                        "🔧 MAINTENEZ VOTRE SYSTÈME !"
                      );
                    })()}
                  </span>
                </div>
              </div>

              <div className="text-center mb-4 sm:mb-6 mt-4 sm:mt-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-orange-800 dark:text-orange-200">
                  🛡️ Contrats de Maintenance Préventive
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-orange-700 dark:text-orange-300 font-medium px-2">
                  {(() => {
                    const descriptions = {
                      "Installation d'Équipements":
                        "Préservez la durée de vie de vos équipements",
                      "Sites Web Simples":
                        "Assurez la disponibilité et sécurité de votre site web",
                      "Installation de Programmes":
                        "Maintenez vos logiciels à jour et sécurisés",
                      "Email Professionnel":
                        "Garantissez la continuité de vos communications",
                      "Sécurité & Sauvegarde":
                        "Renforcez votre protection contre les cybermenaces",
                      "Dépannage & Assistance":
                        "Protégez votre matériel et évitez les interruptions coûteuses",
                    };
                    return (
                      descriptions[
                        service.title as keyof typeof descriptions
                      ] || "Optimisez les performances de votre système"
                    );
                  })()}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-2">
                  {(() => {
                    const benefits = {
                      "Installation d'Équipements":
                        "Surveillance proactive de vos équipements pour éviter les pannes matérielles",
                      "Sites Web Simples":
                        "Mises à jour automatiques, sauvegardes et monitoring 24/7 de votre site",
                      "Installation de Programmes":
                        "Mises à jour de sécurité, maintenance des licences et support technique",
                      "Email Professionnel":
                        "Surveillance anti-spam, sauvegarde des emails et support prioritaire",
                      "Sécurité & Sauvegarde":
                        "Audit continu des vulnérabilités et renforcement des protections",
                      "Dépannage & Assistance":
                        "Nos contrats de maintenance préventive vous garantissent tranquillité d'esprit et performances optimales",
                    };
                    return (
                      benefits[service.title as keyof typeof benefits] ||
                      "Solutions de maintenance adaptées à vos besoins spécifiques"
                    );
                  })()}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mb-4 sm:mb-8">
                <Card className="border-2 border-gray-300 hover:border-orange-300 transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-2 sm:p-4 lg:p-6 text-center">
                    <div className="text-xl sm:text-2xl mb-2 sm:mb-3">💼</div>
                    <h4 className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 text-gray-800 dark:text-gray-200">
                      Essentiel
                    </h4>
                    <p className="text-xs sm:text-sm text-orange-600 dark:text-orange-400 font-medium mb-2 sm:mb-3">
                      Particuliers & TPE
                    </p>
                    <ul className="text-xs sm:text-sm space-y-1 sm:space-y-2 text-left">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-1 sm:mr-2 text-sm">
                          ✓
                        </span>
                        <span className="flex-1">Support à distance</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-1 sm:mr-2 text-sm">
                          ✓
                        </span>
                        <span className="flex-1">
                          Interventions sur demande
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-4 border-orange-400 bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 shadow-xl sm:transform sm:scale-105">
                  <CardContent className="p-2 sm:p-4 lg:p-6 text-center relative">
                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-orange-500 text-white px-2 sm:px-4 py-1 rounded-full text-xs font-bold">
                        ⭐ POPULAIRE
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl mb-2 sm:mb-3 mt-2 sm:mt-0">
                      🚀
                    </div>
                    <h4 className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 text-orange-800 dark:text-orange-200">
                      Professionnel
                    </h4>
                    <p className="text-xs sm:text-sm text-orange-600 dark:text-orange-400 font-medium mb-2 sm:mb-3">
                      PME en croissance
                    </p>
                    <ul className="text-xs sm:text-sm space-y-1 sm:space-y-2 text-left">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-1 sm:mr-2 text-sm">
                          ✓
                        </span>
                        <span className="flex-1">Maintenance préventive</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-1 sm:mr-2 text-sm">
                          ✓
                        </span>
                        <span className="flex-1">Support étendu 8h-20h</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-1 sm:mr-2 text-sm">
                          ✓
                        </span>
                        <span className="flex-1">Intervention prioritaire</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-300 hover:border-orange-300 transition-all duration-300 hover:shadow-md sm:col-span-2 lg:col-span-1">
                  <CardContent className="p-2 sm:p-4 lg:p-6 text-center">
                    <div className="text-xl sm:text-2xl mb-2 sm:mb-3">🏢</div>
                    <h4 className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 text-gray-800 dark:text-gray-200">
                      Entreprise
                    </h4>
                    <p className="text-xs sm:text-sm text-orange-600 dark:text-orange-400 font-medium mb-2 sm:mb-3">
                      Grandes structures
                    </p>
                    <ul className="text-xs sm:text-sm space-y-1 sm:space-y-2 text-left">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-1 sm:mr-2 text-sm">
                          ✓
                        </span>
                        <span className="flex-1">Support 24/7</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-1 sm:mr-2 text-sm">
                          ✓
                        </span>
                        <span className="flex-1">Ingénieur dédié</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 border-2 border-orange-200 dark:border-orange-700">
                <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 text-orange-800 dark:text-orange-200 px-2">
                  💡 Pourquoi associer un contrat de maintenance à ce service ?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm">
                  {(() => {
                    const benefits = {
                      "Installation d'Équipements": [
                        { icon: "⚡", text: "Durée de vie matériel +50%" },
                        { icon: "💰", text: "Économies sur les réparations" },
                        { icon: "🛡️", text: "Garantie étendue équipements" },
                        { icon: "📈", text: "Performances constantes" },
                      ],
                      "Sites Web Simples": [
                        { icon: "🌐", text: "Disponibilité 99.9%" },
                        { icon: "🔒", text: "Sécurité renforcée" },
                        { icon: "⚡", text: "Vitesse optimisée" },
                        { icon: "💾", text: "Sauvegardes automatiques" },
                      ],
                      "Installation de Programmes": [
                        { icon: "🔄", text: "Mises à jour automatiques" },
                        { icon: "🛡️", text: "Sécurité logicielle" },
                        { icon: "💰", text: "Gestion centralisée licences" },
                        { icon: "🚀", text: "Support technique prioritaire" },
                      ],
                      "Email Professionnel": [
                        { icon: "✉️", text: "Zéro perte d'emails" },
                        { icon: "🛡️", text: "Protection anti-spam 99.9%" },
                        { icon: "💾", text: "Sauvegarde quotidienne" },
                        { icon: "⚡", text: "Performance serveur optimale" },
                      ],
                      "Sécurité & Sauvegarde": [
                        { icon: "🔍", text: "Surveillance 24/7" },
                        { icon: "🛡️", text: "Protection proactive" },
                        { icon: "🔒", text: "Audit sécurité régulier" },
                        { icon: "📊", text: "Reporting détaillé" },
                      ],
                      "Dépannage & Assistance": [
                        { icon: "⚡", text: "Réduction de 80% des pannes" },
                        { icon: "💰", text: "Économies sur les interventions" },
                        { icon: "🛡️", text: "Sécurité renforcée" },
                        { icon: "📈", text: "Performances optimisées" },
                      ],
                    };

                    const serviceBenefits =
                      benefits[service.title as keyof typeof benefits] ||
                      benefits["Dépannage & Assistance"];

                    return serviceBenefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center sm:justify-start"
                      >
                        <span className="text-green-500 text-sm sm:text-lg mr-1 sm:mr-2 flex-shrink-0">
                          {benefit.icon}
                        </span>
                        <span className="flex-1 text-left">{benefit.text}</span>
                      </div>
                    ));
                  })()}
                </div>

                <Button
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById("maintenance");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 300);
                  }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 text-xs sm:text-sm lg:text-base"
                  size="lg"
                >
                  <span className="block sm:hidden">🔍 Voir les contrats</span>
                  <span className="hidden sm:block">
                    🔍 Découvrir tous les contrats de maintenance
                  </span>
                  <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </div>

            {/* Call to action */}
            <div className="bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 rounded-lg p-4 sm:p-6 text-center border border-labtek-blue/20">
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Intéressé par ce service ?
              </h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                Obtenez un devis personnalisé gratuit en moins de 24h
              </p>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-labtek-blue hover:bg-labtek-blue/90 w-full sm:w-auto"
              >
                <span className="text-sm sm:text-base">
                  Demander un devis gratuit
                </span>
                <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
