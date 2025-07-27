
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
  ArrowRight
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
  "Installation d'Équipements": {
    equipment: [
      "Ordinateurs de bureau (300€ - 1200€)",
      "Ordinateurs portables (400€ - 1800€)",
      "Imprimantes multifonctions (80€ - 400€)",
      "Routeurs Wi-Fi professionnels (60€ - 250€)",
      "Caméras de surveillance IP (45€ - 200€/unité)",
      "Disques durs externes et NAS (60€ - 500€)",
      "Écrans et périphériques (100€ - 600€)"
    ],
    options: [
      "Déballage et installation physique complète",
      "Configuration système et comptes utilisateurs",
      "Transfert de données depuis ancien matériel",
      "Installation des logiciels essentiels",
      "Formation pratique de 1h incluse",
      "Test de fonctionnement et optimisation",
      "Garantie installation 6 mois + SAV prioritaire"
    ],
    duration: "2-6 heures selon complexité",
    price: "80€ (installation seule) + prix matériel",
    target: "Particuliers, TPE et PME"
  },
  "Sécurité & Sauvegarde": {
    equipment: [
      "Antivirus professionnel (40€/an/poste)",
      "Pare-feu réseau entreprise (150€ - 800€)",
      "Serveurs NAS Synology/QNAP (200€ - 1500€)",
      "Disques de sauvegarde externes (60€ - 300€)",
      "Solutions cloud sécurisées (5€ - 25€/mois)",
      "Systèmes d'authentification 2FA",
      "Monitoring réseau professionnel"
    ],
    options: [
      "Audit complet des vulnérabilités existantes",
      "Configuration sauvegarde automatique 3-2-1",
      "Chiffrement AES-256 des données sensibles",
      "Tests de restauration mensuels programmés",
      "Surveillance proactive des menaces 24h/24",
      "Formation sécurité équipes (2h)",
      "Maintenance préventive trimestrielle"
    ],
    duration: "1-3 jours selon infrastructure",
    price: "150€/jour + solutions (à partir de 300€)",
    target: "PME, professions libérales, données sensibles"
  },
  "Installation de Programmes": {
    equipment: [
      "Microsoft Office 365 (7€/mois/utilisateur)",
      "Logiciels comptabilité Sage (300€ - 1200€)",
      "Suite Adobe Creative (24€/mois/utilisateur)",
      "Logiciels métier sur devis",
      "Navigateurs sécurisés et extensions",
      "Teams, Zoom Pro (5€ - 20€/mois)",
      "Outils collaboratifs (Slack, Notion, etc.)"
    ],
    options: [
      "Installation propre sans conflits logiciels",
      "Migration complète données anciennes versions",
      "Configuration personnalisée selon usage",
      "Formation approfondie aux nouvelles fonctions",
      "Création de modèles et templates métier",
      "Licences légales et conformité RGPD",
      "Support dédié 30 jours post-installation"
    ],
    duration: "1-4 heures selon nombre de logiciels",
    price: "60€/heure + coût licences",
    target: "Tous profils, débutants à experts"
  },
  "Email Professionnel": {
    equipment: [
      "Nom de domaine .fr/.com (12€ - 15€/an)",
      "Hébergement email professionnel (4€/mois/boîte)",
      "Serveurs français certifiés RGPD",
      "Certificats SSL Let's Encrypt inclus",
      "Anti-spam et antivirus intégrés",
      "Espace stockage 25GB/boîte extensible",
      "Synchronisation mobile tous OS"
    ],
    options: [
      "Configuration email @votreentreprise.fr illimitée",
      "Site web vitrine responsive inclus (5 pages)",
      "Synchronisation automatique mobile/PC",
      "Sauvegarde emails quotidienne 30 jours",
      "Protection anti-spam 99.9% efficacité",
      "Support technique prioritaire par chat",
      "Migration emails existants sans perte"
    ],
    duration: "24-72h (délégation DNS)",
    price: "120€/an/boîte (domaine + hébergement inclus)",
    target: "TPE, indépendants, professions libérales"
  },
  "Dépannage & Assistance": {
    equipment: [
      "Outils diagnostic matériel professionnels",
      "Logiciels récupération données spécialisés",
      "Solutions prise en main TeamViewer Pro",
      "Stock pièces détachées courantes",
      "Testeurs réseau et multimètres",
      "Stations récupération disques durs",
      "Équipements nettoyage composants"
    ],
    options: [
      "Intervention sur site sous 4h (urgence 2h)",
      "Diagnostic complet gratuit et devis détaillé",
      "Réparation sur place ou en atelier selon besoin",
      "Récupération données même disques endommagés",
      "Prêt matériel si réparation > 48h",
      "Garantie réparation 3 mois pièces et main d'œuvre",
      "Assistance téléphonique 7j/7 pour urgences"
    ],
    duration: "30min à 2 jours selon complexité",
    price: "Déplacement 50€ + 60€/h intervention",
    target: "Particuliers et entreprises, toutes urgences"
  },
  "Sites Web Simples": {
    equipment: [
      "Hébergement web français (48€/an)",
      "WordPress ou solution sur-mesure",
      "Templates premium responsive",
      "Outils SEO et Google Analytics",
      "Certificat SSL et sécurité renforcée",
      "Système de sauvegarde automatique",
      "Optimisation vitesse et performances"
    ],
    options: [
      "Design 100% personnalisé selon secteur d'activité",
      "Version mobile/tablette parfaitement adaptée",
      "Référencement Google local optimisé",
      "Formulaire contact avec anti-spam intégré",
      "Galerie photos/portfolio selon besoins",
      "Formation complète gestion contenu (3h)",
      "1 an de maintenance et mises à jour incluses"
    ],
    duration: "7-15 jours selon fonctionnalités",
    price: "450€ - 1200€ selon complexité + 48€/an hébergement",
    target: "Artisans, commerces, consultants, associations"
  }
};

export default function ServiceDetailModal({ service, children }: ServiceDetailProps) {
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
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center"
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
              <service.icon className="w-6 h-6"
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
            {service.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Description */}
          <p className="text-muted-foreground text-lg leading-relaxed">
            {service.description}
          </p>
          
          {/* Informations pratiques */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Clock className="w-6 h-6 mx-auto mb-2 text-labtek-blue" />
                <p className="font-semibold">Durée</p>
                <p className="text-sm text-muted-foreground">{details.duration}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Euro className="w-6 h-6 mx-auto mb-2 text-green-600" />
                <p className="font-semibold">Tarification</p>
                <p className="text-sm text-muted-foreground">{details.price}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Users className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                <p className="font-semibold">Clientèle cible</p>
                <p className="text-sm text-muted-foreground">{details.target}</p>
              </CardContent>
            </Card>
          </div>

          {/* Équipements et tarifs */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Équipements proposés avec tarifs indicatifs</h3>
            <div className="grid md:grid-cols-1 gap-3">
              {details.equipment.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services inclus détaillés */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services inclus dans la prestation</h3>
            <div className="space-y-3">
              {details.options.map((option, index) => (
                <Card key={index} className="border-l-4 border-l-labtek-blue bg-gradient-to-r from-labtek-blue/5 to-transparent">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-labtek-blue flex-shrink-0 mt-0.5" />
                      <p className="font-medium text-sm leading-relaxed">{option}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Avantages */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Pourquoi choisir ce service ?</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-2 px-3 bg-labtek-blue/10 text-labtek-blue border-labtek-blue/20">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-gradient-to-r from-labtek-blue/10 to-labtek-violet/10 rounded-lg p-6 text-center border border-labtek-blue/20">
            <h3 className="text-lg font-semibold mb-2">Intéressé par ce service ?</h3>
            <p className="text-muted-foreground mb-4">
              Obtenez un devis personnalisé gratuit en moins de 24h
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-labtek-blue hover:bg-labtek-blue/90">
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
