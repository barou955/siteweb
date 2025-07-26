import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Calculator, Download, Plus, Minus, FileText, Clock, Shield, Users, AlertCircle } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  basePrice: number;
  unit: string;
  description: string;
  details: string[];
  options?: ServiceOption[];
}

interface ServiceOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface MaintenanceContract {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

interface SelectedService extends Service {
  quantity: number;
  selectedOptions: string[];
}

const services: Service[] = [
  {
    id: 'computer-setup',
    name: 'Achat et Installation d\'Ordinateur',
    basePrice: 850,
    unit: 'par ordinateur',
    description: 'PC de bureau complet avec installation, configuration et formation personnalisée',
    details: [
      'Processeur 6 cœurs à 2,5 GHz (vitesse rapide pour toutes tâches)',
      'Mémoire 8 GB (idéal pour navigation, bureautique, photos)',
      'Stockage SSD 256 GB (démarrage ultra-rapide en 10 secondes)',
      'Écran 24" haute définition avec caméra et micro intégrés',
      'Clavier et souris sans fil inclus',
      'Windows 11 dernière version installé et configuré',
      'Suite bureautique complète (Word, Excel, PowerPoint)',
      'Protection antivirus premium configurée',
      'Transfert de toutes vos données depuis ancien PC',
      'Formation personnalisée 2h pour apprendre à utiliser',
      'Installation à votre domicile incluse',
      'Garantie fabricant 3 ans sur tout le matériel'
    ],
    options: [
      { id: 'ssd-upgrade', name: 'Stockage SSD 512 GB (double capacité)', price: 80, description: 'Deux fois plus d\'espace pour vos photos, documents et programmes' },
      { id: 'ram-upgrade', name: 'Mémoire 16 GB (performance optimale)', price: 120, description: 'Utilisation simultanée de nombreux programmes sans ralentissement' },
      { id: 'gaming-config', name: 'Carte graphique dédiée gaming', price: 350, description: 'Processeur graphique haute performance pour jeux et montage vidéo' },
      { id: 'professional-monitor', name: 'Écran 27" ultra-haute définition 4K', price: 280, description: 'Affichage professionnel pour graphisme et confort visuel' },
      { id: 'backup-drive', name: 'Disque de sauvegarde externe 1 TB', price: 75, description: 'Protection automatique de tous vos fichiers importants' },
      { id: 'printer-setup', name: 'Imprimante multifonction sans fil', price: 180, description: 'Impression, numérisation et copie via Wi-Fi depuis tous appareils' },
      { id: 'webcam-upgrade', name: 'Caméra haute définition professionnelle', price: 120, description: 'Qualité vidéo supérieure pour visioconférences' },
      { id: 'speakers-upgrade', name: 'Haut-parleurs stéréo haute fidélité', price: 90, description: 'Son de qualité pour musique, films et vidéoconférences' }
    ]
  },
  {
    id: 'antivirus-protection',
    name: 'Protection Antivirus Professionnelle',
    basePrice: 89,
    unit: 'licence annuelle',
    description: 'Suite de sécurité complète avec sauvegarde cloud et protection web (89€/an)',
    details: [
      'Protection premium contre tous virus et malwares',
      'Surveillance en temps réel de votre ordinateur',
      'Pare-feu intelligent qui bloque les intrusions',
      'Protection anti-phishing pour achats en ligne sécurisés',
      'Contrôle parental pour protéger vos enfants',
      'Sauvegarde automatique 200 GB sur serveurs sécurisés',
      'Nettoyage et optimisation automatique du système',
      'Gestionnaire de mots de passe sécurisé',
      'Installation et configuration personnalisée',
      'Support technique pendant toute la durée'
    ],
    options: [
      { id: 'family-pack', name: 'Protection 5 appareils (PC, téléphones)', price: 40, description: 'Protège tous vos appareils familiaux (40€/an supplémentaires)' },
      { id: 'premium-backup', name: 'Sauvegarde cloud 1 TB', price: 60, description: 'Stockage internet sécurisé pour tous vos fichiers (60€/an)' },
      { id: 'business-security', name: 'Module sécurité entreprise', price: 45, description: 'Protection avancée pour professionnels (45€/an)' },
      { id: 'mobile-security', name: 'Antivol téléphone et tablette', price: 25, description: 'Localisation et effacement à distance (25€/an)' }
    ]
  },
  {
    id: 'software-installation',
    name: 'Installation de Logiciels',
    basePrice: 85,
    unit: 'par logiciel',
    description: 'Installation professionnelle avec configuration personnalisée et formation',
    details: [
      'Téléchargement sécurisé depuis sources officielles',
      'Installation et configuration selon vos besoins',
      'Création des raccourcis et réglages personnalisés',
      'Formation personnalisée 1h par logiciel installé',
      'Guide d\'utilisation simple et illustré',
      'Support technique 3 mois après installation'
    ],
    options: [
      { id: 'office-suite', name: 'Suite bureautique complète (99€/an)', price: 99, description: 'Traitement de texte, tableur, présentation et email professionnels' },
      { id: 'adobe-reader', name: 'Éditeur PDF professionnel (180€/an)', price: 180, description: 'Création, modification et signature de documents PDF' },
      { id: 'accounting-software', name: 'Logiciel comptabilité entreprise (220€/an)', price: 220, description: 'Gestion comptable complète pour petites entreprises' },
      { id: 'photo-editor', name: 'Retouche photo grand public (140€/an)', price: 140, description: 'Modification et amélioration de photos simplifiée' },
      { id: 'antivirus-kaspersky', name: 'Protection internet avancée (60€/an)', price: 60, description: 'Alternative premium de sécurité informatique' },
      { id: 'backup-software', name: 'Sauvegarde automatique pro (95€/an)', price: 95, description: 'Protection et restauration automatique de vos données' }
    ]
  },
  {
    id: 'email-setup',
    name: 'Email Professionnel',
    basePrice: 420,
    unit: 'forfait annuel',
    description: 'Solution email complète avec nom de domaine personnalisé (35€/mois - 420€/an)',
    details: [
      'Nom de domaine .fr ou .com (première année incluse)',
      '10 adresses email personnalisées @votreentreprise.fr',
      'Stockage 50 GB par boîte email (500 GB total)',
      'Configuration automatique sur tous vos appareils',
      'Protection anti-spam et anti-virus intégrée',
      'Signature email professionnelle avec votre logo',
      'Support technique illimité pendant toute la durée',
      'Sauvegarde automatique de tous les emails'
    ],
    options: [
      { id: 'domain-premium', name: 'Domaine .com international (+180€/an)', price: 180, description: 'Extension .com plus prestigieuse et internationale' },
      { id: 'extra-emails', name: '20 adresses supplémentaires (+240€/an)', price: 240, description: 'Pour équipes de 10 à 30 personnes' },
      { id: 'email-archive', name: 'Archivage longue durée (+300€/an)', price: 300, description: 'Conservation légale des emails pendant 5 ans' },
      { id: 'mobile-sync', name: 'Synchronisation avancée (+144€/an)', price: 144, description: 'Calendriers et contacts partagés sur tous appareils' },
      { id: 'email-signature', name: 'Signatures HTML premium (+420€/an)', price: 420, description: 'Design professionnel personnalisé avec bannières' }
    ]
  },
  {
    id: 'website-creation',
    name: 'Site Internet Professionnel',
    basePrice: 1200,
    unit: 'forfait',
    description: 'Site web complet responsive avec référencement Google inclus',
    details: [
      'Design moderne adaptatif (PC, tablette, mobile)',
      '10 pages personnalisées maximum',
      'Formulaire de contact fonctionnel',
      'Galerie photos avec zoom',
      'Référencement Google de base',
      'Hébergement 1 an inclus',
      'Formation gestion 2h',
      'Certificat SSL sécurité'
    ],
    options: [
      { id: 'ecommerce', name: 'Boutique en ligne 50 produits', price: 800, description: 'Vente avec paiement CB sécurisé' },
      { id: 'seo-premium', name: 'Référencement Google renforcé', price: 300, description: 'Optimisation pour être mieux trouvé' },
      { id: 'blog-module', name: 'Blog intégré avec éditeur', price: 180, description: 'Publier actualités et articles' },
      { id: 'booking-system', name: 'Système de réservation en ligne', price: 450, description: 'Clients prennent RDV directement' },
      { id: 'multilingual', name: 'Site en 2 langues', price: 400, description: 'Version française et anglaise' },
      { id: 'analytics-pro', name: 'Statistiques détaillées visiteurs', price: 80, description: 'Analyse complète du trafic' }
    ]
  },
  {
    id: 'wifi-network',
    name: 'Réseau Wi-Fi Professionnel',
    basePrice: 580,
    unit: 'installation',
    description: 'Installation Wi-Fi haute performance avec couverture optimale',
    details: [
      'Routeur dernière génération Wi-Fi 6 (vitesse jusqu\'à 3 Gbps)',
      'Analyse complète et optimisation de la couverture',
      'Sécurisation maximale avec chiffrement WPA3',
      'Réseau séparé pour vos invités',
      'Configuration de tous vos appareils connectés',
      'Application de contrôle parental intégrée',
      'Garantie constructeur 2 ans sur le matériel',
      'Formation sur la gestion du réseau'
    ],
    options: [
      { id: 'mesh-system', name: 'Extension de couverture maillée', price: 220, description: 'Wi-Fi puissant dans toute la maison ou entreprise' },
      { id: 'enterprise-router', name: 'Routeur professionnel avancé', price: 180, description: 'Gestion centralisée et surveillance du réseau' },
      { id: 'guest-portal', name: 'Page d\'accueil Wi-Fi personnalisée', price: 120, description: 'Portail avec vos informations et conditions d\'usage' },
      { id: 'bandwidth-control', name: 'Limitation de vitesse par utilisateur', price: 85, description: 'Contrôle de la bande passante par appareil connecté' },
      { id: 'vpn-setup', name: 'Accès distant sécurisé VPN', price: 150, description: 'Connexion sécurisée pour télétravail' },
      { id: 'wifi-extender', name: 'Amplificateur Wi-Fi supplémentaire', price: 95, description: 'Étend le signal dans les zones difficiles' },
      { id: 'business-monitoring', name: 'Surveillance réseau 24h/24', price: 120, description: 'Monitoring professionnel avec alertes automatiques' }
    ]
  }
];

const maintenanceContracts: MaintenanceContract[] = [
  {
    id: 'none',
    name: 'Aucun contrat',
    price: 0,
    description: 'Sans engagement - Interventions ponctuelles uniquement',
    features: [
      'Pas d\'abonnement mensuel',
      'Intervention à la demande (80€/h)',
      'Pas de support téléphonique inclus',
      'Délai d\'intervention : sous 1 semaine',
      '⚠️ Coût plus élevé à long terme'
    ]
  },
  {
    id: 'essential',
    name: 'Essentiel',
    price: 89,
    description: 'Idéal pour les particuliers et petites activités',
    features: [
      'Support téléphonique en semaine (9h-17h)',
      'Intervention à domicile sous 48h',
      'Mises à jour de vos logiciels',
      'Sauvegarde mensuelle de vos fichiers',
      'Diagnostic à distance par téléphone'
    ]
  },
  {
    id: 'professional',
    name: 'Professionnel',
    price: 189,
    description: 'Parfait pour les entreprises et travailleurs indépendants',
    features: [
      'Tout du plan Essentiel +',
      'Support étendu du lundi au samedi (8h-20h)',
      'Intervention prioritaire sous 4h',
      'Sauvegarde hebdomadaire automatique',
      'Maintenance préventive trimestrielle',
      'Surveillance proactive de vos équipements'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Entreprise',
    price: 350,
    description: 'Solution premium pour les entreprises importantes',
    features: [
      'Tout du plan Professionnel +',
      'Support disponible 7j/7 et 24h/24',
      'Intervention d\'urgence sous 2h',
      'Technicien dédié qui connaît votre installation',
      'Contrôle sécurité tous les 3 mois',
      'Formation de vos équipes incluse'
    ]
  }
];

export default function QuoteCalculator() {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [selectedMaintenance, setSelectedMaintenance] = useState<MaintenanceContract | null>(null);
  const [clientInfo, setClientInfo] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    urgency: 'normal',
    employees: 1
  });
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('');
      return true;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Veuillez saisir une adresse email valide');
      return false;
    }
    setEmailError('');
    return true;
  };

  const addService = (service: Service) => {
    const existing = selectedServices.find(s => s.id === service.id);
    if (existing) {
      setSelectedServices(prev => 
        prev.map(s => s.id === service.id ? { ...s, quantity: s.quantity + 1 } : s)
      );
    } else {
      setSelectedServices(prev => [...prev, { ...service, quantity: 1, selectedOptions: [] }]);
    }
  };

  const removeService = (serviceId: string) => {
    setSelectedServices(prev => prev.filter(s => s.id !== serviceId));
  };

  const updateQuantity = (serviceId: string, quantity: number) => {
    if (quantity <= 0) {
      removeService(serviceId);
      return;
    }
    setSelectedServices(prev =>
      prev.map(s => s.id === serviceId ? { ...s, quantity } : s)
    );
  };

  const toggleOption = (serviceId: string, optionId: string) => {
    setSelectedServices(prev =>
      prev.map(s => {
        if (s.id === serviceId) {
          const options = s.selectedOptions.includes(optionId)
            ? s.selectedOptions.filter(id => id !== optionId)
            : [...s.selectedOptions, optionId];
          return { ...s, selectedOptions: options };
        }
        return s;
      })
    );
  };

  const calculateServiceTotal = (service: SelectedService) => {
    const baseTotal = service.basePrice * service.quantity;
    const optionsTotal = service.selectedOptions.reduce((sum, optionId) => {
      const option = service.options?.find(o => o.id === optionId);
      return sum + (option ? option.price * service.quantity : 0);
    }, 0);
    return baseTotal + optionsTotal;
  };

  const getUrgencyMultiplier = () => {
    switch (clientInfo.urgency) {
      case 'urgent': return 1.3;
      case 'emergency': return 1.8;
      default: return 1;
    }
  };

  const servicesSubtotal = selectedServices.reduce((sum, service) => sum + calculateServiceTotal(service), 0);
  const urgencyMultiplier = getUrgencyMultiplier();
  const adjustedServicesTotal = servicesSubtotal * urgencyMultiplier;
  const maintenanceTotal = selectedMaintenance ? selectedMaintenance.price : 0;
  const total = adjustedServicesTotal + maintenanceTotal;

  const generatePDF = async () => {
    if (!validateEmail(clientInfo.email)) {
      return;
    }

    const quoteData = {
      clientInfo,
      services: selectedServices.map(service => ({
        ...service,
        total: calculateServiceTotal(service)
      })),
      maintenance: selectedMaintenance,
      subtotal: servicesSubtotal,
      adjustedServicesTotal,
      maintenanceTotal,
      total,
      additionalNotes,
      urgencyMultiplier,
      date: new Date().toLocaleDateString('fr-FR'),
      quoteNumber: `LAB-${Date.now()}`
    };

    try {
      const response = await fetch('/api/generate-quote-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quoteData)
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `devis-${clientInfo.company || clientInfo.name || 'client'}-${Date.now()}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Erreur génération PDF:', error);
    }
  };

  return (
    <section id="devis" className="py-12 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Calculateur de Devis Personnalisé
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Obtenez une estimation précise et transparente pour vos projets informatiques. 
            Services détaillés, prix clairs, devis professionnel en PDF.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Services Selection */}
          <div className="lg:col-span-2 space-y-6">
            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Calculator className="mr-2 w-5 h-5" />
                  Services Informatiques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                {services.map(service => (
                  <div key={service.id} className="border border-border rounded-xl p-4 sm:p-6 hover:border-labtek-blue/50 hover:shadow-lg transition-all duration-300 bg-card">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                          <h4 className="font-bold text-base sm:text-lg text-foreground">{service.name}</h4>
                          <Badge variant="outline" className="bg-gradient-to-r from-labtek-blue to-labtek-violet text-white border-0 font-semibold text-sm">
                            {service.basePrice}€ {service.unit}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{service.description}</p>

                        <div className="bg-muted/30 rounded-lg p-3 sm:p-4">
                          <h5 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3 text-labtek-blue flex items-center">
                            <span className="w-2 h-2 bg-labtek-blue rounded-full mr-2"></span>
                            Inclus dans ce service :
                          </h5>
                          <ul className="text-xs sm:text-sm text-muted-foreground space-y-1 sm:space-y-2">
                            {service.details.map((detail, index) => (
                              <li key={index} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                                <span className="leading-relaxed">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <Button 
                        onClick={() => addService(service)}
                        size="sm"
                        className="w-full sm:w-auto sm:ml-4 flex-shrink-0 bg-gradient-to-r from-labtek-blue to-labtek-violet hover:from-labtek-violet hover:to-labtek-blue transition-all duration-300"
                      >
                        <Plus className="w-4 h-4 sm:mr-2" />
                        <span className="hidden sm:inline">Ajouter</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Maintenance Contracts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Shield className="mr-2 w-5 h-5" />
                  Contrats de Maintenance
                </CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  <strong>Recommandé :</strong> Un contrat de maintenance vous fait économiser jusqu'à 60% sur vos dépannages et vous garantit un support rapide en cas de problème.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {maintenanceContracts.map(contract => (
                    <div 
                      key={contract.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedMaintenance?.id === contract.id 
                          ? 'border-labtek-blue bg-labtek-blue/5' 
                          : 'border-border hover:border-labtek-blue/50'
                      } ${contract.popular ? 'ring-2 ring-labtek-blue/20' : ''}`}
                      onClick={() => setSelectedMaintenance(
                        selectedMaintenance?.id === contract.id ? null : contract
                      )}
                    >
                      {contract.popular && (
                        <Badge className="mb-2 bg-labtek-blue text-xs">Recommandé</Badge>
                      )}
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">{contract.name}</h4>
                      <div className="text-xl sm:text-2xl font-bold text-labtek-blue mb-2">
                        {contract.price}€<span className="text-xs sm:text-sm font-normal">/mois</span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3">{contract.description}</p>
                      <ul className="text-xs space-y-1">
                        {contract.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                        {contract.features.length > 3 && (
                          <li className="text-muted-foreground">
                            +{contract.features.length - 3} autres avantages
                          </li>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Client Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Users className="mr-2 w-5 h-5" />
                  Informations Client
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="clientName" className="text-sm sm:text-base">
                      Nom complet <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="clientName"
                      value={clientInfo.name}
                      onChange={(e) => setClientInfo(prev => ({ ...prev, name: e.target.value }))}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-sm sm:text-base">Entreprise</Label>
                    <Input
                      id="company"
                      value={clientInfo.company}
                      onChange={(e) => setClientInfo(prev => ({ ...prev, company: e.target.value }))}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm sm:text-base">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={clientInfo.email}
                      onChange={(e) => {
                        setClientInfo(prev => ({ ...prev, email: e.target.value }));
                        validateEmail(e.target.value);
                      }}
                      className={`mt-1 ${emailError ? 'border-red-500' : ''}`}
                    />
                    {emailError && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {emailError}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm sm:text-base">Téléphone</Label>
                    <Input
                      id="phone"
                      value={clientInfo.phone}
                      onChange={(e) => setClientInfo(prev => ({ ...prev, phone: e.target.value }))}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="employees" className="text-sm sm:text-base">Nombre d'employés</Label>
                    <Select
                      value={clientInfo.employees.toString()}
                      onValueChange={(value) => setClientInfo(prev => ({ ...prev, employees: parseInt(value) }))}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 employé</SelectItem>
                        <SelectItem value="2">2-5 employés</SelectItem>
                        <SelectItem value="6">6-10 employés</SelectItem>
                        <SelectItem value="11">11-20 employés</SelectItem>
                        <SelectItem value="21">Plus de 20 employés</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="urgency" className="text-sm sm:text-base">Délai souhaité</Label>
                    <Select
                      value={clientInfo.urgency}
                      onValueChange={(value) => setClientInfo(prev => ({ ...prev, urgency: value }))}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no-rush">Pas d'urgence (10-15 jours)</SelectItem>
                        <SelectItem value="normal">Normal (7-10 jours)</SelectItem>
                        <SelectItem value="urgent">Urgent (2-3 jours) +30%</SelectItem>
                        <SelectItem value="emergency">Urgence (24h) +80%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Summary */}
          <div className="space-y-6">
            <Card className="lg:sticky lg:top-6">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <FileText className="mr-2 w-5 h-5" />
                  Récapitulatif du Devis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedServices.length === 0 && !selectedMaintenance ? (
                  <p className="text-muted-foreground text-center py-8 text-sm">
                    Aucun service sélectionné
                  </p>
                ) : (
                  <>
                    {/* Services sélectionnés */}
                    {selectedServices.map(service => (
                      <div key={service.id} className="border-b pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium text-xs sm:text-sm pr-2">{service.name}</h5>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeService(service.id)}
                            className="p-1 h-auto"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <Label className="text-xs">Quantité:</Label>
                          <Input
                            type="number"
                            min="1"
                            value={service.quantity}
                            onChange={(e) => updateQuantity(service.id, parseInt(e.target.value))}
                            className="w-16 h-7 text-xs"
                          />
                        </div>

                        {service.options && service.options.length > 0 && (
                          <div className="space-y-2">
                            <Label className="text-xs">Options:</Label>
                            <div className="max-h-32 overflow-y-auto space-y-2">
                              {service.options.map(option => (
                                <div key={option.id} className="flex items-start space-x-2">
                                  <Checkbox
                                    id={`${service.id}-${option.id}`}
                                    checked={service.selectedOptions.includes(option.id)}
                                    onCheckedChange={() => toggleOption(service.id, option.id)}
                                    className="mt-0.5"
                                  />
                                  <Label
                                    htmlFor={`${service.id}-${option.id}`}
                                    className="text-xs flex-1 leading-tight cursor-pointer"
                                  >
                                    {option.name} (+{option.price}€)
                                    <div className="text-muted-foreground text-xs mt-0.5">
                                      {option.description}
                                    </div>
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="text-right font-semibold mt-2 text-sm">
                          {calculateServiceTotal(service).toFixed(2)}€
                        </div>
                      </div>
                    ))}

                    {/* Contrat de maintenance */}
                    {selectedMaintenance && (
                      <div className="border-b pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium text-xs sm:text-sm pr-2">Maintenance {selectedMaintenance.name}</h5>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedMaintenance(null)}
                            className="p-1 h-auto"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          {selectedMaintenance.description}
                        </p>
                        <div className="text-right font-semibold text-sm">
                          {selectedMaintenance.price}€/mois
                        </div>
                      </div>
                    )}

                    <div className="space-y-2 pt-4">
                      <div className="flex justify-between text-sm">
                        <span>Services:</span>
                        <span>{servicesSubtotal.toFixed(2)}€</span>
                      </div>

                      {urgencyMultiplier !== 1 && (
                        <div className="flex justify-between text-sm text-orange-600">
                          <span>Ajustement délai:</span>
                          <span>×{urgencyMultiplier}</span>
                        </div>
                      )}

                      {selectedMaintenance && (
                        <div className="flex justify-between text-sm">
                          <span>Maintenance (mensuelle):</span>
                          <span>{selectedMaintenance.price}€</span>
                        </div>
                      )}

                      <div className="flex justify-between text-base sm:text-lg font-bold border-t pt-2">
                        <span>Total HT:</span>
                        <span>{total.toFixed(2)}€</span>
                      </div>

                      <div className="flex justify-between text-base sm:text-lg font-bold text-labtek-blue">
                        <span>Total TTC:</span>
                        <span>{(total * 1.2).toFixed(2)}€</span>
                      </div>

                      {selectedMaintenance && (
                        <p className="text-xs text-muted-foreground">
                          + {selectedMaintenance.price}€/mois pour la maintenance
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes" className="text-sm">Besoins spécifiques</Label>
                      <Textarea
                        id="notes"
                        value={additionalNotes}
                        onChange={(e) => setAdditionalNotes(e.target.value)}
                        placeholder="Décrivez vos besoins particuliers, contraintes techniques, ou demandes spéciales..."
                        rows={3}
                        className="text-sm"
                      />
                    </div>

                    <Button 
                      onClick={generatePDF}
                      className="w-full"
                      disabled={!clientInfo.name || !clientInfo.email || emailError !== ''}
                    >
                      <FileText className="mr-2 w-4 h-4" />
                      Générer le Devis PDF
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ce devis est valable 30 jours. Prix TTC, TVA 20% incluse.
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}