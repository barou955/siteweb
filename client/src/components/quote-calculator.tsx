
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Calculator, FileText, Laptop, Shield, Download, Mail, Settings, Globe, Plus, Minus, Check, Star, HardDrive } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";

interface ServicePackage {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  basePrice: number;
  features: string[];
  requiresEquipment?: boolean;
  equipmentTypes?: string[];
  addons?: ServiceAddon[];
  equipment?: EquipmentOption[];
  software?: SoftwareOption[];
  popular?: boolean;
}

interface ServiceAddon {
  id: string;
  name: string;
  description: string;
  price: number;
  isSubscription?: boolean;
  subscriptionType?: 'monthly' | 'yearly';
  required?: boolean;
}

interface EquipmentOption {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'computer' | 'network' | 'security' | 'storage';
  type?: 'desktop' | 'laptop';
}

interface SoftwareOption {
  id: string;
  name: string;
  description: string;
  price: number;
  isSubscription?: boolean;
  subscriptionType?: 'monthly' | 'yearly';
  category: 'productivity' | 'security' | 'business' | 'creative';
}

interface SelectedService {
  serviceId: string;
  selectedEquipment?: string;
  addons: string[];
  software: string[];
  quantity: number;
}

interface MaintenanceContract {
  id: string;
  name: string;
  description: string;
  features: string[];
  monthlyPrice: number;
  popular?: boolean;
}

const servicePackages: ServicePackage[] = [
  {
    id: "computer-setup",
    title: "Configuration d'Ordinateur",
    description: "Installation complète de votre nouvel ordinateur avec formation",
    icon: Laptop,
    basePrice: 150,
    requiresEquipment: true,
    equipmentTypes: ['desktop', 'laptop'],
    features: [
      "Déballage et installation",
      "Configuration Windows/Mac",
      "Installation antivirus",
      "Formation utilisateur 1h",
      "Transfert données (si besoin)"
    ],
    addons: [
      { id: "data-transfer", name: "Transfert de données avancé", description: "Migration complète depuis ancien PC", price: 80 },
      { id: "network-config", name: "Configuration réseau", description: "Paramétrage Wi-Fi et partage", price: 50 },
      { id: "extended-training", name: "Formation approfondie", description: "Formation 3h personnalisée", price: 120 }
    ],
    equipment: [
      { id: "desktop-basic", name: "PC Bureau Standard", description: "Intel i5, 8Go RAM, 256Go SSD", price: 650, category: 'computer', type: 'desktop' },
      { id: "desktop-pro", name: "PC Bureau Pro", description: "Intel i7, 16Go RAM, 512Go SSD", price: 1200, category: 'computer', type: 'desktop' },
      { id: "laptop-basic", name: "PC Portable Standard", description: "15\", 8Go RAM, 256Go SSD", price: 750, category: 'computer', type: 'laptop' },
      { id: "laptop-pro", name: "PC Portable Pro", description: "15\", 16Go RAM, 512Go SSD", price: 1400, category: 'computer', type: 'laptop' }
    ]
  },
  {
    id: "software-installation",
    title: "Installation de Programmes",
    description: "Installation et configuration de tous vos logiciels professionnels",
    icon: HardDrive,
    basePrice: 80,
    features: [
      "Installation de logiciels",
      "Configuration initiale",
      "Formation de base",
      "Documentation fournie",
      "Support 30 jours"
    ],
    software: [
      { id: "office-365", name: "Microsoft Office 365", description: "Suite complète (Word, Excel, PowerPoint, Outlook)", price: 69, isSubscription: true, subscriptionType: 'yearly', category: 'productivity' },
      { id: "adobe-creative", name: "Adobe Creative Cloud", description: "Photoshop, Illustrator, InDesign", price: 60, isSubscription: true, subscriptionType: 'monthly', category: 'creative' },
      { id: "antivirus-pro", name: "Antivirus Professionnel", description: "Protection avancée pour entreprise", price: 45, isSubscription: true, subscriptionType: 'yearly', category: 'security' },
      { id: "backup-software", name: "Logiciel de Sauvegarde", description: "Sauvegarde automatique professionnelle", price: 35, isSubscription: true, subscriptionType: 'yearly', category: 'business' },
      { id: "windows-11-pro", name: "Windows 11 Pro", description: "Licence Windows 11 Professionnel", price: 199, category: 'productivity' },
      { id: "autocad", name: "AutoCAD", description: "Logiciel de conception assistée", price: 200, isSubscription: true, subscriptionType: 'monthly', category: 'business' },
      { id: "quickbooks", name: "QuickBooks", description: "Logiciel de comptabilité", price: 25, isSubscription: true, subscriptionType: 'monthly', category: 'business' }
    ],
    addons: [
      { id: "custom-config", name: "Configuration personnalisée", description: "Paramétrage avancé selon vos besoins", price: 60 },
      { id: "user-training", name: "Formation utilisateur", description: "Formation 2h sur les logiciels installés", price: 100 }
    ]
  },
  {
    id: "security-package",
    title: "Sécurité & Protection",
    description: "Protection complète de vos données et appareils",
    icon: Shield,
    basePrice: 200,
    features: [
      "Installation antivirus professionnel",
      "Configuration pare-feu",
      "Sauvegarde automatique",
      "Formation sécurité",
      "Support 6 mois"
    ],
    addons: [
      { id: "backup-cloud", name: "Sauvegarde Cloud", description: "100Go stockage sécurisé", price: 15, isSubscription: true, subscriptionType: 'monthly' },
      { id: "vpn-setup", name: "VPN Professionnel", description: "Navigation sécurisée", price: 100 },
      { id: "security-audit", name: "Audit Sécurité", description: "Analyse complète de vulnérabilités", price: 150 }
    ],
    equipment: [
      { id: "backup-drive", name: "Disque de Sauvegarde", description: "2To USB 3.0", price: 120, category: 'storage' },
      { id: "nas-basic", name: "Serveur Domestique", description: "Stockage réseau 4To", price: 400, category: 'storage' },
      { id: "security-camera", name: "Caméra de Surveillance", description: "HD WiFi avec app mobile", price: 150, category: 'security' }
    ]
  },
  {
    id: "email-pro",
    title: "Email Professionnel",
    description: "Votre identité numérique professionnelle complète",
    icon: Mail,
    basePrice: 300,
    features: [
      "Nom de domaine personnalisé",
      "5 adresses email pro",
      "Configuration sur vos appareils",
      "Formation utilisation",
      "Support 1 an"
    ],
    addons: [
      { id: "domain-premium", name: "Domaine Premium (.com)", description: "Au lieu de .fr standard", price: 30, required: false },
      { id: "extra-emails", name: "Adresses supplémentaires", description: "5 adresses email en plus", price: 100 },
      { id: "email-migration", name: "Migration emails existants", description: "Transfert de vos anciens emails", price: 80 },
      { id: "calendar-shared", name: "Calendrier partagé", description: "Agenda collaboratif", price: 60 }
    ]
  },
  {
    id: "website-creation",
    title: "Site Web Professionnel",
    description: "Votre vitrine en ligne clé en main",
    icon: Globe,
    basePrice: 800,
    popular: true,
    features: [
      "Site vitrine 5 pages",
      "Design responsive",
      "Nom de domaine inclus",
      "Hébergement 1 an",
      "Référencement de base"
    ],
    addons: [
      { id: "seo-advanced", name: "Référencement Avancé", description: "Optimisation Google complète", price: 400 },
      { id: "ecommerce", name: "Boutique en ligne", description: "Jusqu'à 50 produits", price: 1200 },
      { id: "blog-system", name: "Système de Blog", description: "Publication d'articles", price: 300 },
      { id: "contact-forms", name: "Formulaires Avancés", description: "Devis, contact, réservation", price: 150 },
      { id: "hosting-premium", name: "Hébergement Premium", description: "Performance et sécurité renforcées", price: 20, isSubscription: true, subscriptionType: 'monthly' }
    ]
  },
  {
    id: "tech-support",
    title: "Dépannage & Assistance",
    description: "Support technique réactif quand vous en avez besoin",
    icon: Settings,
    basePrice: 100,
    features: [
      "Diagnostic complet",
      "Réparation logicielle",
      "Nettoyage système",
      "Optimisation performance",
      "Garantie intervention"
    ],
    addons: [
      { id: "express-service", name: "Service Express", description: "Intervention sous 4h", price: 150 },
      { id: "onsite-visit", name: "Déplacement à domicile", description: "Intervention chez vous", price: 80 },
      { id: "remote-support", name: "Support à distance", description: "Résolution en ligne", price: 50 },
      { id: "data-recovery", name: "Récupération de données", description: "Restauration fichiers perdus", price: 200 }
    ]
  }
];

const maintenanceContracts: MaintenanceContract[] = [
  {
    id: "essential",
    name: "Essentiel",
    description: "Pour les particuliers et petites structures",
    features: [
      "Support téléphonique",
      "Aide à distance",
      "Conseils personnalisés",
      "Horaires bureau (9h-18h)"
    ],
    monthlyPrice: 49
  },
  {
    id: "professional", 
    name: "Professionnel",
    description: "Pour les PME en croissance",
    features: [
      "Tout du plan Essentiel",
      "Maintenance préventive",
      "Sauvegardes automatiques", 
      "Support étendu (8h-20h)",
      "Intervention prioritaire"
    ],
    monthlyPrice: 149,
    popular: true
  },
  {
    id: "enterprise",
    name: "Entreprise", 
    description: "Pour les grandes structures",
    features: [
      "Tout du plan Professionnel",
      "Support 24/7",
      "Intervention sous 2h",
      "Ingénieur dédié",
      "Audit sécurité trimestriel"
    ],
    monthlyPrice: 299
  }
];

export default function QuoteCalculator() {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [selectedMaintenanceContract, setSelectedMaintenanceContract] = useState<string>("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    notes: ""
  });
  const [emailError, setEmailError] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("L'email est obligatoire");
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Veuillez saisir un email valide (ex: nom@entreprise.fr)");
      return false;
    }
    setEmailError("");
    return true;
  };

  const addService = (serviceId: string) => {
    if (!selectedServices.find(s => s.serviceId === serviceId)) {
      setSelectedServices(prev => [...prev, {
        serviceId,
        selectedEquipment: undefined,
        addons: [],
        software: [],
        quantity: 1
      }]);
    }
  };

  const removeService = (serviceId: string) => {
    setSelectedServices(prev => prev.filter(s => s.serviceId !== serviceId));
  };

  const updateServiceEquipment = (serviceId: string, equipmentId: string) => {
    setSelectedServices(prev => prev.map(service => {
      if (service.serviceId === serviceId) {
        return { ...service, selectedEquipment: equipmentId };
      }
      return service;
    }));
  };

  const updateServiceAddon = (serviceId: string, addonId: string, checked: boolean) => {
    setSelectedServices(prev => prev.map(service => {
      if (service.serviceId === serviceId) {
        const addons = checked 
          ? [...service.addons, addonId]
          : service.addons.filter(a => a !== addonId);
        return { ...service, addons };
      }
      return service;
    }));
  };

  const updateServiceSoftware = (serviceId: string, softwareId: string, checked: boolean) => {
    setSelectedServices(prev => prev.map(service => {
      if (service.serviceId === serviceId) {
        const software = checked 
          ? [...service.software, softwareId]
          : service.software.filter(s => s !== softwareId);
        return { ...service, software };
      }
      return service;
    }));
  };

  const updateServiceQuantity = (serviceId: string, quantity: number) => {
    setSelectedServices(prev => prev.map(service => {
      if (service.serviceId === serviceId) {
        return { ...service, quantity: Math.max(1, quantity) };
      }
      return service;
    }));
  };

  const calculateTotal = () => {
    let total = selectedServices.reduce((total, selectedService) => {
      const service = servicePackages.find(s => s.id === selectedService.serviceId);
      if (!service) return total;

      let serviceTotal = service.basePrice;

      // Ajouter le prix de l'équipement sélectionné
      if (selectedService.selectedEquipment) {
        const equipment = service.equipment?.find(e => e.id === selectedService.selectedEquipment);
        if (equipment) serviceTotal += equipment.price;
      }

      // Ajouter le prix des addons
      selectedService.addons.forEach(addonId => {
        const addon = service.addons?.find(a => a.id === addonId);
        if (addon) serviceTotal += addon.price;
      });

      // Ajouter le prix des logiciels
      selectedService.software.forEach(softwareId => {
        const software = service.software?.find(s => s.id === softwareId);
        if (software) serviceTotal += software.price;
      });

      serviceTotal *= selectedService.quantity;
      return total + serviceTotal;
    }, 0);

    if (selectedMaintenanceContract && selectedMaintenanceContract !== "none") {
      const contract = maintenanceContracts.find(c => c.id === selectedMaintenanceContract);
      if (contract) {
        total += contract.monthlyPrice * 12;
      }
    }

    return total;
  };

  const getSubscriptionDetails = () => {
    const subscriptions: Array<{type: string, name: string, price: number, period: string}> = [];
    
    selectedServices.forEach(selectedService => {
      const service = servicePackages.find(s => s.id === selectedService.serviceId);
      if (!service) return;

      // Addons avec abonnement
      selectedService.addons.forEach(addonId => {
        const addon = service.addons?.find(a => a.id === addonId);
        if (addon?.isSubscription) {
          subscriptions.push({
            type: 'addon',
            name: addon.name,
            price: addon.price,
            period: addon.subscriptionType === 'monthly' ? 'mensuel' : 'annuel'
          });
        }
      });

      // Logiciels avec abonnement
      selectedService.software.forEach(softwareId => {
        const software = service.software?.find(s => s.id === softwareId);
        if (software?.isSubscription) {
          subscriptions.push({
            type: 'software',
            name: software.name,
            price: software.price,
            period: software.subscriptionType === 'monthly' ? 'mensuel' : 'annuel'
          });
        }
      });
    });

    // Contrat de maintenance
    if (selectedMaintenanceContract && selectedMaintenanceContract !== "none") {
      const contract = maintenanceContracts.find(c => c.id === selectedMaintenanceContract);
      if (contract) {
        subscriptions.push({
          type: 'maintenance',
          name: `Contrat ${contract.name}`,
          price: contract.monthlyPrice,
          period: 'mensuel'
        });
      }
    }

    return subscriptions;
  };

  const generatePDF = async () => {
    if (selectedServices.length === 0) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner au moins un service",
        variant: "destructive"
      });
      return;
    }

    if (!customerInfo.name || !validateEmail(customerInfo.email)) {
      toast({
        title: "Erreur", 
        description: "Veuillez renseigner correctement vos informations",
        variant: "destructive"
      });
      return;
    }

    // Vérifier que les services nécessitant un équipement en ont un sélectionné
    for (const selectedService of selectedServices) {
      const service = servicePackages.find(s => s.id === selectedService.serviceId);
      if (service?.requiresEquipment && !selectedService.selectedEquipment) {
        toast({
          title: "Erreur",
          description: `Veuillez sélectionner un équipement pour le service "${service.title}"`,
          variant: "destructive"
        });
        return;
      }
    }

    setIsGenerating(true);

    try {
      const pdf = new jsPDF();
      const pageWidth = pdf.internal.pageSize.width;
      const pageHeight = pdf.internal.pageSize.height;
      const margin = 20;
      const currentDate = new Date().toLocaleDateString('fr-FR');
      const quoteNumber = `L-${Date.now().toString().slice(-8)}`;
      
      // === EN-TÊTE AVEC LOGO ET DESIGN PROFESSIONNEL ===
      // Fond bleu pour l'en-tête
      pdf.setFillColor(59, 71, 150); // Bleu professionnel
      pdf.rect(0, 0, pageWidth, 50, 'F');
      
      // Logo Labtek - rectangle bleu foncé avec texte blanc
      pdf.setFillColor(35, 45, 120);
      pdf.rect(margin, 15, 40, 20, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Labtek', margin + 5, 28);
      
      // Titre DEVIS en gros
      pdf.setFontSize(28);
      pdf.setFont('helvetica', 'bold');
      pdf.text('DEVIS MAINTENANCE', pageWidth - 85, 35);

      let yPos = 70;

      // === INFORMATIONS ENTREPRISE ET CLIENT EN COLONNES ===
      pdf.setTextColor(0, 0, 0);
      
      // Colonne gauche - Entreprise
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text('BAROUJAN BASKARAN', margin, yPos);
      yPos += 6;
      pdf.text('LABTEK INFORMATIQUE', margin, yPos);
      yPos += 6;
      pdf.setFont('helvetica', 'normal');
      pdf.text('2B route de Saint-Germain', margin, yPos);
      yPos += 5;
      pdf.text('91250 SAINT-GERMAIN-LÈS-CORBEIL', margin, yPos);
      yPos += 5;
      pdf.text('FRANCE', margin, yPos);
      yPos += 5;
      pdf.text('Port. : +33 6 76 45 42 67', margin, yPos);
      yPos += 5;
      pdf.text('contact@labtek.fr', margin, yPos);

      // Colonne droite - Client
      yPos = 70;
      const clientX = pageWidth / 2 + 10;
      if (customerInfo.name) {
        pdf.setFont('helvetica', 'normal');
        pdf.text(customerInfo.name, clientX, yPos);
        yPos += 6;
        if (customerInfo.company) {
          pdf.text(customerInfo.company, clientX, yPos);
          yPos += 5;
        }
        if (customerInfo.address) {
          const addressLines = pdf.splitTextToSize(customerInfo.address, 80);
          pdf.text(addressLines, clientX, yPos);
          yPos += addressLines.length * 5;
        }
        pdf.text(`Email : ${customerInfo.email}`, clientX, yPos);
      }

      yPos = 140;
      
      // Numéro de devis et date
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(12);
      pdf.text(`DEVIS N° ${quoteNumber}`, margin, yPos);
      pdf.text('(PROVISOIRE)', margin + 80, yPos);
      yPos += 8;
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(10);
      pdf.text(`Le samedi ${currentDate}`, margin, yPos);
      
      yPos += 20;

      // === TABLEAU PROFESSIONNEL DES PRESTATIONS ===
      const tableStartY = yPos;
      const colWidths = [20, 80, 20, 25, 20, 25, 20]; // Référence, Désignation, Quantité, PU Vente, TVA, Montant HT, Image
      const colX = [margin, margin + 20, margin + 100, margin + 120, margin + 145, margin + 165, margin + 190];
      
      // En-tête du tableau avec fond gris
      pdf.setFillColor(240, 240, 240);
      pdf.rect(margin, yPos, pageWidth - 2 * margin, 12, 'F');
      pdf.setDrawColor(200, 200, 200);
      pdf.rect(margin, yPos, pageWidth - 2 * margin, 12);
      
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(9);
      pdf.text('Référence', colX[0] + 2, yPos + 8);
      pdf.text('Désignation', colX[1] + 2, yPos + 8);
      pdf.text('Quantité', colX[2] + 2, yPos + 8);
      pdf.text('PU Vente', colX[3] + 2, yPos + 8);
      pdf.text('TVA', colX[4] + 2, yPos + 8);
      pdf.text('Montant HT', colX[5] + 2, yPos + 8);
      pdf.text('Image', colX[6] + 2, yPos + 8);
      
      yPos += 12;
      
      // Lignes du tableau
      let refCounter = 454200;
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8);
      
      selectedServices.forEach(selectedService => {
        const service = servicePackages.find(s => s.id === selectedService.serviceId);
        if (!service) return;

        // Service principal
        const serviceTotal = service.basePrice * selectedService.quantity;
        pdf.rect(margin, yPos, pageWidth - 2 * margin, 8);
        pdf.text(String(refCounter++), colX[0] + 2, yPos + 5);
        pdf.text(service.title, colX[1] + 2, yPos + 5);
        pdf.text(String(selectedService.quantity), colX[2] + 2, yPos + 5);
        pdf.text(`${service.basePrice.toLocaleString('fr-FR')} €`, colX[3] + 2, yPos + 5);
        pdf.text('20.00', colX[4] + 2, yPos + 5);
        pdf.text(`${serviceTotal.toLocaleString('fr-FR')} €`, colX[5] + 2, yPos + 5);
        yPos += 8;

        // Équipement sélectionné
        if (selectedService.selectedEquipment) {
          const equipment = service.equipment?.find(e => e.id === selectedService.selectedEquipment);
          if (equipment) {
            const equipmentTotal = equipment.price * selectedService.quantity;
            pdf.rect(margin, yPos, pageWidth - 2 * margin, 8);
            pdf.text(String(refCounter++), colX[0] + 2, yPos + 5);
            pdf.text(equipment.name, colX[1] + 2, yPos + 5);
            pdf.text(String(selectedService.quantity), colX[2] + 2, yPos + 5);
            pdf.text(`${equipment.price.toLocaleString('fr-FR')} €`, colX[3] + 2, yPos + 5);
            pdf.text('20.00', colX[4] + 2, yPos + 5);
            pdf.text(`${equipmentTotal.toLocaleString('fr-FR')} €`, colX[5] + 2, yPos + 5);
            yPos += 8;
          }
        }

        // Addons
        selectedService.addons.forEach(addonId => {
          const addon = service.addons?.find(a => a.id === addonId);
          if (addon) {
            const addonTotal = addon.price * selectedService.quantity;
            pdf.rect(margin, yPos, pageWidth - 2 * margin, 8);
            pdf.text(String(refCounter++), colX[0] + 2, yPos + 5);
            pdf.text(addon.name, colX[1] + 2, yPos + 5);
            pdf.text(String(selectedService.quantity), colX[2] + 2, yPos + 5);
            pdf.text(`${addon.price.toLocaleString('fr-FR')} €`, colX[3] + 2, yPos + 5);
            pdf.text('20.00', colX[4] + 2, yPos + 5);
            pdf.text(`${addonTotal.toLocaleString('fr-FR')} €`, colX[5] + 2, yPos + 5);
            yPos += 8;
          }
        });

        // Logiciels
        selectedService.software.forEach(softwareId => {
          const software = service.software?.find(s => s.id === softwareId);
          if (software) {
            const softwareTotal = software.price * selectedService.quantity;
            pdf.rect(margin, yPos, pageWidth - 2 * margin, 8);
            pdf.text(String(refCounter++), colX[0] + 2, yPos + 5);
            pdf.text(software.name, colX[1] + 2, yPos + 5);
            pdf.text(String(selectedService.quantity), colX[2] + 2, yPos + 5);
            pdf.text(`${software.price.toLocaleString('fr-FR')} €`, colX[3] + 2, yPos + 5);
            pdf.text('20.00', colX[4] + 2, yPos + 5);
            pdf.text(`${softwareTotal.toLocaleString('fr-FR')} €`, colX[5] + 2, yPos + 5);
            yPos += 8;
          }
        });
      });

      // Contrat de maintenance
      if (selectedMaintenanceContract && selectedMaintenanceContract !== "none") {
        const contract = maintenanceContracts.find(c => c.id === selectedMaintenanceContract);
        if (contract) {
          const contractTotal = contract.monthlyPrice * 12;
          pdf.rect(margin, yPos, pageWidth - 2 * margin, 8);
          pdf.text(String(refCounter++), colX[0] + 2, yPos + 5);
          pdf.text(`Mise en service`, colX[1] + 2, yPos + 5);
          pdf.text('1', colX[2] + 2, yPos + 5);
          pdf.text(`${contractTotal.toLocaleString('fr-FR')} €`, colX[3] + 2, yPos + 5);
          pdf.text('20.00', colX[4] + 2, yPos + 5);
          pdf.text(`${contractTotal.toLocaleString('fr-FR')} €`, colX[5] + 2, yPos + 5);
          yPos += 8;
        }
      }

      // Bon pour Accord en bas du tableau
      yPos += 10;
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text('Bon pour Accord', margin, yPos);

      // === TOTAUX DANS UN ENCADRÉ ===
      const total = calculateTotal();
      const tva = total * 0.2; // 20% TVA
      const totalTTC = total + tva;
      
      const totalBoxX = pageWidth - 80;
      const totalBoxY = yPos + 20;
      const totalBoxWidth = 60;
      const totalBoxHeight = 30;
      
      // Fond gris pour les totaux
      pdf.setFillColor(245, 245, 245);
      pdf.rect(totalBoxX, totalBoxY, totalBoxWidth, totalBoxHeight, 'F');
      pdf.setDrawColor(0, 0, 0);
      pdf.rect(totalBoxX, totalBoxY, totalBoxWidth, totalBoxHeight);
      
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text('Total HT', totalBoxX + 5, totalBoxY + 8);
      pdf.text(`${total.toLocaleString('fr-FR')} €`, totalBoxX + totalBoxWidth - 5, totalBoxY + 8, { align: 'right' });
      
      pdf.text('TVA ( 20 % )', totalBoxX + 5, totalBoxY + 16);
      pdf.text(`${tva.toLocaleString('fr-FR')} €`, totalBoxX + totalBoxWidth - 5, totalBoxY + 16, { align: 'right' });
      
      pdf.setFontSize(12);
      pdf.text('Total TTC', totalBoxX + 5, totalBoxY + 25);
      pdf.text(`${totalTTC.toLocaleString('fr-FR')} €`, totalBoxX + totalBoxWidth - 5, totalBoxY + 25, { align: 'right' });

      yPos = totalBoxY + totalBoxHeight + 20;

      // === CONDITIONS DE PAIEMENT ===
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(9);
      pdf.text('Conditions de paiement :', margin, yPos);
      yPos += 6;
      pdf.setFont('helvetica', 'normal');
      pdf.text('• 100,00 % soit 7 658,40 € : Paiement comptant.', margin, yPos);
      yPos += 20;

      // === MENTIONS LÉGALES EN BAS ===
      pdf.setFontSize(7);
      pdf.setTextColor(100, 100, 100);
      const legalText = [
        'CLAUSE DE RÉSERVE DE PROPRIÉTÉ : Conformément à la Loi du 12 mai 1980, les biens livrés demeurent la propriété des vendeurs et marchandises, objets des présents devis, jusqu\'au paiement de l\'intégralité du prix et des accessoires. En cas de non paiement',
        'total ou partiel à l\'échéance convenue, la vente pourra être résolue de plein droit huit jours après mise en demeure restée infructueuse, sans préjudice de tous dommages et intérêts. Le transfert de propriété s\'effectue au jour du complet paiement',
        'du prix de l\'objet vendu. Toute modification ou ajout au présent devis ne pourra être prise en compte qu\'après accord écrit des deux parties. En cas de litige, seuls les tribunaux compétents de MELUN sont compétents.'
      ];
      
      legalText.forEach((line, index) => {
        pdf.text(line, margin, pageHeight - 25 + (index * 4));
      });

      pdf.save(`Devis-LABTEK-${quoteNumber}.pdf`);

      toast({
        title: "Devis généré !",
        description: "Votre devis professionnel a été téléchargé avec succès.",
      });

    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de générer le PDF. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="devis" className="py-20 bg-gradient-to-br from-background via-blue-50/50 to-purple-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-labtek-blue/10 rounded-2xl mb-6">
            <Calculator className="w-8 h-8 text-labtek-blue" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Configurez votre Projet
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sélectionnez vos services informatiques et recevez instantanément votre devis personnalisé
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services Selection */}
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {servicePackages.map((service) => {
                const Icon = service.icon;
                const isSelected = selectedServices.some(s => s.serviceId === service.id);
                const selectedService = selectedServices.find(s => s.serviceId === service.id);

                return (
                  <Card 
                    key={service.id} 
                    className={`transition-all duration-300 hover:shadow-lg ${
                      isSelected ? 'ring-2 ring-labtek-blue shadow-xl' : 'hover:shadow-md'
                    } ${service.popular ? 'ring-2 ring-orange-400' : ''}`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            isSelected ? 'bg-labtek-blue text-white' : 'bg-labtek-blue/10 text-labtek-blue'
                          }`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <CardTitle className="text-xl">{service.title}</CardTitle>
                              {service.popular && (
                                <Badge className="bg-orange-500 text-white">
                                  <Star className="w-3 h-3 mr-1" />
                                  Populaire
                                </Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground mt-1">{service.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-labtek-blue">{service.basePrice}€</p>
                          <p className="text-sm text-muted-foreground">à partir de</p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      {/* Features incluses */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-green-700">✓ Inclus dans ce service :</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm">
                              <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {!isSelected ? (
                        <Button 
                          onClick={() => addService(service.id)}
                          className="w-full bg-labtek-blue hover:bg-labtek-blue/90"
                          size="lg"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Ajouter ce service
                        </Button>
                      ) : (
                        <div className="space-y-6">
                          {/* Controls */}
                          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <Check className="w-5 h-5 text-green-600" />
                              <span className="font-medium text-green-800">Service ajouté</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <Label htmlFor={`quantity-${service.id}`} className="text-sm">Quantité:</Label>
                                <Input
                                  id={`quantity-${service.id}`}
                                  type="number"
                                  min="1"
                                  value={selectedService?.quantity || 1}
                                  onChange={(e) => updateServiceQuantity(service.id, parseInt(e.target.value))}
                                  className="w-16 h-8"
                                />
                              </div>
                              <Button 
                                variant="outline"
                                size="sm"
                                onClick={() => removeService(service.id)}
                              >
                                <Minus className="w-4 h-4 mr-1" />
                                Retirer
                              </Button>
                            </div>
                          </div>

                          {/* Sélection obligatoire d'équipement */}
                          {service.requiresEquipment && service.equipment && (
                            <div className="space-y-4">
                              <h4 className="font-semibold text-red-600">⚠️ Choisissez votre équipement (obligatoire) :</h4>
                              <RadioGroup
                                value={selectedService?.selectedEquipment || ""}
                                onValueChange={(value) => updateServiceEquipment(service.id, value)}
                              >
                                <div className="space-y-3">
                                  {service.equipment.map((equipment) => (
                                    <div key={equipment.id} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                                      <RadioGroupItem value={equipment.id} id={equipment.id} className="mt-1" />
                                      <div className="flex-1">
                                        <Label htmlFor={equipment.id} className="text-sm font-medium cursor-pointer">
                                          {equipment.name}
                                          <span className="ml-2 text-labtek-blue font-semibold">
                                            {equipment.price}€
                                          </span>
                                        </Label>
                                        <p className="text-xs text-muted-foreground mt-1">
                                          {equipment.description}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </RadioGroup>
                            </div>
                          )}

                          {/* Sélection des logiciels */}
                          {service.software && service.software.length > 0 && (
                            <div className="space-y-4">
                              <h4 className="font-semibold text-purple-700">💻 Logiciels disponibles :</h4>
                              <div className="space-y-3">
                                {service.software.map((software) => (
                                  <div key={software.id} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                                    <Checkbox
                                      id={software.id}
                                      checked={selectedService?.software.includes(software.id)}
                                      onCheckedChange={(checked) => 
                                        updateServiceSoftware(service.id, software.id, checked as boolean)
                                      }
                                    />
                                    <div className="flex-1">
                                      <Label htmlFor={software.id} className="text-sm font-medium cursor-pointer">
                                        {software.name}
                                        <span className="ml-2 text-purple-700 font-semibold">
                                          {software.price}€
                                          {software.isSubscription && (
                                            <span className="text-xs text-orange-600 ml-1">
                                              /{software.subscriptionType === 'monthly' ? 'mois' : 'an'}
                                            </span>
                                          )}
                                        </span>
                                        {software.isSubscription && (
                                          <Badge variant="outline" className="ml-2 text-xs">
                                            Abonnement
                                          </Badge>
                                        )}
                                      </Label>
                                      <p className="text-xs text-muted-foreground mt-1">
                                        {software.description}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Options supplémentaires */}
                          {service.addons && service.addons.length > 0 && (
                            <div className="space-y-4">
                              <h4 className="font-semibold text-labtek-blue">⚙️ Options supplémentaires :</h4>
                              <div className="space-y-3">
                                {service.addons.map((addon) => (
                                  <div key={addon.id} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                                    <Checkbox
                                      id={addon.id}
                                      checked={selectedService?.addons.includes(addon.id)}
                                      onCheckedChange={(checked) => 
                                        updateServiceAddon(service.id, addon.id, checked as boolean)
                                      }
                                    />
                                    <div className="flex-1">
                                      <Label htmlFor={addon.id} className="text-sm font-medium cursor-pointer">
                                        {addon.name}
                                        <span className="ml-2 text-labtek-blue font-semibold">
                                          +{addon.price}€
                                          {addon.isSubscription && (
                                            <span className="text-xs text-orange-600 ml-1">
                                              /{addon.subscriptionType === 'monthly' ? 'mois' : 'an'}
                                            </span>
                                          )}
                                        </span>
                                        {addon.isSubscription && (
                                          <Badge variant="outline" className="ml-2 text-xs">
                                            Abonnement
                                          </Badge>
                                        )}
                                      </Label>
                                      <p className="text-xs text-muted-foreground mt-1">
                                        {addon.description}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Équipements non obligatoires */}
                          {!service.requiresEquipment && service.equipment && service.equipment.length > 0 && (
                            <div className="space-y-4">
                              <h4 className="font-semibold text-purple-700">🛠️ Équipements disponibles :</h4>
                              <div className="space-y-3">
                                {service.equipment.map((equipment) => (
                                  <div key={equipment.id} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                                    <Checkbox
                                      id={equipment.id}
                                      checked={selectedService?.addons.includes(equipment.id)}
                                      onCheckedChange={(checked) => 
                                        updateServiceAddon(service.id, equipment.id, checked as boolean)
                                      }
                                    />
                                    <div className="flex-1">
                                      <Label htmlFor={equipment.id} className="text-sm font-medium cursor-pointer">
                                        {equipment.name}
                                        <span className="ml-2 text-purple-700 font-semibold">
                                          {equipment.price}€
                                        </span>
                                      </Label>
                                      <p className="text-xs text-muted-foreground mt-1">
                                        {equipment.description}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Contrats de maintenance */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Contrat de Maintenance (Optionnel)
                </CardTitle>
                <p className="text-muted-foreground">
                  Sécurisez votre investissement avec un support technique régulier
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {maintenanceContracts.map(contract => (
                    <Card 
                      key={contract.id} 
                      className={`cursor-pointer transition-all ${
                        selectedMaintenanceContract === contract.id 
                          ? 'ring-2 ring-labtek-blue' 
                          : 'hover:shadow-md'
                      } ${contract.popular ? 'ring-2 ring-orange-400' : ''}`}
                      onClick={() => setSelectedMaintenanceContract(contract.id)}
                    >
                      <CardContent className="p-4">
                        <div className="text-center">
                          {contract.popular && (
                            <Badge className="bg-orange-500 text-white mb-2">
                              Recommandé
                            </Badge>
                          )}
                          <h4 className="font-bold text-lg">{contract.name}</h4>
                          <p className="text-2xl font-bold text-labtek-blue my-2">
                            {contract.monthlyPrice}€<span className="text-sm text-muted-foreground">/mois</span>
                          </p>
                          <p className="text-sm text-muted-foreground mb-4">{contract.description}</p>
                          <ul className="text-xs space-y-1 text-left">
                            {contract.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  onClick={() => setSelectedMaintenanceContract("none")}
                  className={selectedMaintenanceContract === "none" ? "ring-2 ring-labtek-blue" : ""}
                >
                  Aucun contrat pour le moment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Summary & Customer Info */}
          <div className="space-y-6">
            {/* Récapitulatif */}
            <Card className="lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Récapitulatif
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedServices.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calculator className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-muted-foreground">
                      Sélectionnez vos services pour voir le récapitulatif
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3">
                      {selectedServices.map(selectedService => {
                        const service = servicePackages.find(s => s.id === selectedService.serviceId);
                        if (!service) return null;

                        let serviceTotal = service.basePrice * selectedService.quantity;

                        return (
                          <div key={selectedService.serviceId} className="border-b pb-3">
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex-1">
                                <p className="font-medium text-sm">{service.title}</p>
                                {selectedService.quantity > 1 && (
                                  <p className="text-xs text-muted-foreground">
                                    Quantité: {selectedService.quantity}
                                  </p>
                                )}
                              </div>
                              <p className="font-semibold text-sm ml-2">
                                {serviceTotal}€
                              </p>
                            </div>

                            {/* Équipement sélectionné */}
                            {selectedService.selectedEquipment && (
                              <div className="pl-4 mb-1">
                                {(() => {
                                  const equipment = service.equipment?.find(e => e.id === selectedService.selectedEquipment);
                                  if (equipment) {
                                    const equipmentTotal = equipment.price * selectedService.quantity;
                                    serviceTotal += equipmentTotal;
                                    return (
                                      <div className="flex justify-between text-xs text-blue-600">
                                        <span>• {equipment.name}</span>
                                        <span>{equipmentTotal}€</span>
                                      </div>
                                    );
                                  }
                                  return null;
                                })()}
                              </div>
                            )}

                            {/* Addons */}
                            {selectedService.addons.map(addonId => {
                              const addon = service.addons?.find(a => a.id === addonId);
                              if (addon) {
                                const addonTotal = addon.price * selectedService.quantity;
                                serviceTotal += addonTotal;
                                return (
                                  <div key={addonId} className="pl-4 mb-1">
                                    <div className="flex justify-between text-xs text-purple-600">
                                      <span>• {addon.name}</span>
                                      <span>
                                        {addonTotal}€
                                        {addon.isSubscription && (
                                          <span className="text-orange-600">
                                            /{addon.subscriptionType === 'monthly' ? 'mois' : 'an'}
                                          </span>
                                        )}
                                      </span>
                                    </div>
                                  </div>
                                );
                              }
                              return null;
                            })}

                            {/* Logiciels */}
                            {selectedService.software.map(softwareId => {
                              const software = service.software?.find(s => s.id === softwareId);
                              if (software) {
                                const softwareTotal = software.price * selectedService.quantity;
                                serviceTotal += softwareTotal;
                                return (
                                  <div key={softwareId} className="pl-4 mb-1">
                                    <div className="flex justify-between text-xs text-green-600">
                                      <span>• {software.name}</span>
                                      <span>
                                        {softwareTotal}€
                                        {software.isSubscription && (
                                          <span className="text-orange-600">
                                            /{software.subscriptionType === 'monthly' ? 'mois' : 'an'}
                                          </span>
                                        )}
                                      </span>
                                    </div>
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </div>
                        );
                      })}

                      {/* Contrat de maintenance */}
                      <div className="border-b pb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-sm">Contrat de Maintenance</p>
                            {selectedMaintenanceContract && selectedMaintenanceContract !== "none" ? (
                              <div>
                                <p className="text-xs text-green-600">
                                  ✓ {maintenanceContracts.find(c => c.id === selectedMaintenanceContract)?.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Contrat annuel
                                </p>
                              </div>
                            ) : (
                              <p className="text-xs text-red-500">
                                ✗ Aucun contrat sélectionné
                              </p>
                            )}
                          </div>
                          <p className="font-semibold text-sm">
                            {selectedMaintenanceContract && selectedMaintenanceContract !== "none" ? 
                              `${((maintenanceContracts.find(c => c.id === selectedMaintenanceContract)?.monthlyPrice || 0) * 12)}€` :
                              '0€'
                            }
                          </p>
                        </div>
                      </div>

                      {/* Abonnements récurrents */}
                      {getSubscriptionDetails().length > 0 && (
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-sm text-orange-800 mb-2">
                            📅 Abonnements récurrents :
                          </h5>
                          {getSubscriptionDetails().map((sub, index) => (
                            <div key={index} className="flex justify-between text-xs text-orange-700 mb-1">
                              <span>{sub.name}</span>
                              <span>{sub.price}€/{sub.period}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-labtek-blue/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-bold">Total HT</p>
                        <p className="font-bold text-xl text-labtek-blue">
                          {calculateTotal()}€
                        </p>
                      </div>
                      <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                        <p>TVA (0%)</p>
                        <p>0€</p>
                      </div>
                      <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
                        <p>Total TTC</p>
                        <p className="text-labtek-blue">
                          {calculateTotal()}€
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Informations client */}
            <Card>
              <CardHeader>
                <CardTitle>Vos informations</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Pour recevoir votre devis personnalisé
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="customer-name">Nom complet *</Label>
                  <Input
                    id="customer-name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Votre nom et prénom"
                    className="transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customer-company">Entreprise</Label>
                  <Input
                    id="customer-company"
                    value={customerInfo.company}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="Nom de votre entreprise (optionnel)"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customer-email">Email professionnel *</Label>
                  <Input
                    id="customer-email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => {
                      setCustomerInfo(prev => ({ ...prev, email: e.target.value }));
                      if (emailError) validateEmail(e.target.value);
                    }}
                    onBlur={(e) => validateEmail(e.target.value)}
                    placeholder="nom@entreprise.fr"
                    className={emailError ? "border-red-500" : ""}
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm">{emailError}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customer-phone">Téléphone</Label>
                  <Input
                    id="customer-phone"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="01 23 45 67 89"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customer-address">Adresse</Label>
                  <Textarea
                    id="customer-address"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="Votre adresse complète"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customer-notes">Informations complémentaires</Label>
                  <Textarea
                    id="customer-notes"
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="Précisions sur votre projet..."
                    rows={3}
                  />
                </div>

                <Button 
                  onClick={generatePDF}
                  disabled={isGenerating || selectedServices.length === 0}
                  className="w-full bg-labtek-blue hover:bg-labtek-blue/90"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                      Génération en cours...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger mon devis
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Champs obligatoires<br />
                  Devis gratuit et sans engagement - Valable 30 jours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
