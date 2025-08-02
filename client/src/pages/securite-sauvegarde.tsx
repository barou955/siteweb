import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Phone, Shield, HardDrive, Cloud, Lock, AlertTriangle, Smartphone, Monitor, Wifi, Star, Award, Zap, Eye, Settings } from "lucide-react";
import { scrollToContact } from "@/lib/utils";

export default function SecuriteSauvegarde() {
  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 dark:from-slate-950 dark:via-green-950 dark:to-emerald-950">
      <SeoMeta 
        title="Sécurité & Sauvegarde Informatique - Labtek"
        description="Protection complète de vos données : sauvegarde automatique, antivirus professionnel, sécurisation de votre réseau. Vos photos et documents en sécurité."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-teal-500/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-32 container-mobile service-hero-container">
          <Button onClick={goBack} variant="ghost" className="mb-8 hover:bg-white/20 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-500/20 text-green-700 dark:text-green-300 border-green-200 hover:bg-green-500/30">
                  <Shield className="w-3 h-3 mr-1" />
                  Protection Totale
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-responsive">
                  <span className="bg-gradient-to-r from-gray-900 via-green-800 to-emerald-800 dark:from-gray-100 dark:via-green-200 dark:to-emerald-200 bg-clip-text text-transparent">
                    Sécurité &
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Sauvegarde
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-responsive">
                  Peur de perdre vos photos de famille ? Que des virus abîment votre ordinateur ? 
                  Nous protégeons tout : vos données, votre navigation et votre tranquillité d'esprit.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-600/90 hover:to-emerald-600/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Shield className="w-5 h-5 mr-2" />
                  Protéger mes données
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open('tel:0768852880', '_self')} className="border-2 hover:bg-white/50 backdrop-blur-sm">
                  <Phone className="w-5 h-5 mr-2" />
                  07 68 85 28 80
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-8">
                <div className="text-center mobile-text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-600">Automatique</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Sauvegarde</div>
                </div>
                <div className="text-center mobile-text-center">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-600">Zéro virus</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Protection</div>
                </div>
                <div className="text-center mobile-text-center">
                  <div className="text-xl sm:text-2xl font-bold text-teal-600">Tranquillité</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Assurée</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&auto=format&q=80"
                  alt="Sécurité informatique et protection des données"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-4 rounded-2xl shadow-xl">
                  <Lock className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre processus de sécurisation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Notre processus de sécurisation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              De l'audit initial à la protection continue, nous sécurisons totalement votre environnement numérique
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {[
                {
                  value: "audit-securite",
                  icon: Eye,
                  title: "1. Audit de sécurité complet",
                  subtitle: "Évaluation de toutes les vulnérabilités de votre système",
                  color: "bg-red-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Analyse des vulnérabilités :</h4>
                        <ul className="space-y-3">
                          {[
                            "Scan complet des logiciels obsolètes",
                            "Vérification des mots de passe faibles",
                            "Test de la sécurité de votre réseau Wi-Fi",
                            "Évaluation des sauvegardes existantes"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Identification des risques :</h4>
                        <ul className="space-y-3">
                          {[
                            "Détection des logiciels malveillants cachés",
                            "Analyse des accès non autorisés",
                            "Évaluation du risque de perte de données",
                            "Test de résistance aux cyberattaques"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "plan-securisation",
                  icon: Shield,
                  title: "2. Plan de sécurisation personnalisé",
                  subtitle: "Stratégie adaptée à vos besoins et niveau de risque",
                  color: "bg-blue-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <Lock className="w-6 h-6 text-blue-500 mr-3" />
                          Protection active
                        </h4>
                        <ul className="space-y-2">
                          {["Antivirus professionnel", "Pare-feu configuré", "Anti-malware en temps réel", "Protection email avancée"].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <HardDrive className="w-6 h-6 text-blue-500 mr-3" />
                          Sauvegarde intelligente
                        </h4>
                        <ul className="space-y-2">
                          {["Sauvegarde automatique quotidienne", "Stockage cloud sécurisé", "Versions multiples des fichiers", "Test de restauration mensuel"].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <Wifi className="w-6 h-6 text-blue-500 mr-3" />
                          Sécurité réseau
                        </h4>
                        <ul className="space-y-2">
                          {["Wi-Fi crypté WPA3", "Réseau invité séparé", "Contrôle d'accès par appareil", "Surveillance des intrusions"].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "mise-en-place",
                  icon: Settings,
                  title: "3. Mise en place des protections",
                  subtitle: "Installation et configuration de tous les systèmes de sécurité",
                  color: "bg-green-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Configuration logicielle :</h4>
                        <ul className="space-y-3">
                          {[
                            "Installation d'antivirus professionnel Bitdefender",
                            "Configuration du pare-feu Windows avancé",
                            "Mise en place du gestionnaire de mots de passe",
                            "Activation de la sauvegarde automatique cloud"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Sécurisation matérielle :</h4>
                        <ul className="space-y-3">
                          {[
                            "Configuration sécurisée du routeur Wi-Fi",
                            "Mise à jour de tous les pilotes et firmwares",
                            "Activation du chiffrement du disque dur",
                            "Configuration de la sauvegarde sur disque externe"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Shield className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "formation-prevention",
                  icon: Star,
                  title: "4. Formation et prévention",
                  subtitle: "Apprentissage des bonnes pratiques pour éviter les risques",
                  color: "bg-purple-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Formation sécurité :</h4>
                        <ul className="space-y-3">
                          {[
                            "Reconnaissance des emails de phishing",
                            "Création de mots de passe sécurisés",
                            "Navigation sécurisée sur internet",
                            "Utilisation du gestionnaire de mots de passe"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Bonnes pratiques :</h4>
                        <ul className="space-y-3">
                          {[
                            "Mise à jour régulière des logiciels",
                            "Vérification des sauvegardes",
                            "Surveillance des alertes de sécurité",
                            "Procédures en cas d'incident"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Star className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "surveillance-continue",
                  icon: Monitor,
                  title: "5. Surveillance et maintenance continue",
                  subtitle: "Monitoring 24/7 et mises à jour de sécurité régulières",
                  color: "bg-orange-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Monitoring quotidien",
                          icon: Eye,
                          items: ["Surveillance des tentatives d'intrusion", "Vérification des sauvegardes", "Contrôle des mises à jour", "Scan antivirus automatique"]
                        },
                        {
                          title: "Maintenance mensuelle",
                          icon: Settings,
                          items: ["Optimisation des performances", "Nettoyage des fichiers temporaires", "Test de restauration", "Mise à jour des définitions"]
                        },
                        {
                          title: "Support réactif",
                          icon: Phone,
                          items: ["Intervention d'urgence 24/7", "Assistance en cas d'infection", "Récupération de données", "Support téléphonique illimité"]
                        }
                      ].map((category, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <category.icon className="w-6 h-6 text-orange-500 mr-3" />
                            <h4 className="font-semibold text-lg">{category.title}</h4>
                          </div>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )
                }
              ].map((step, index) => (
                <AccordionItem key={step.value} value={step.value} className="border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <AccordionTrigger className="hover:no-underline px-8 py-6">
                    <div className="flex items-center w-full">
                      <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center mr-6`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{step.subtitle}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8">
                    {step.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Services de sécurité avec nouveau design */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Nos solutions de sécurité
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Protection sur mesure selon vos besoins</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HardDrive, title: "Sauvegarde", desc: "Vos photos et documents en sécurité", color: "bg-blue-500" },
              { icon: Shield, title: "Antivirus", desc: "Protection contre virus et malwares", color: "bg-green-500" },
              { icon: Wifi, title: "Navigation", desc: "Internet sécurisé, sites dangereux bloqués", color: "bg-purple-500" },
              { icon: Lock, title: "Mots de passe", desc: "Gestionnaire sécurisé inclus", color: "bg-orange-500" }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions détaillées avec nouveau design */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Nos solutions de sécurité
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Protection sur mesure selon vos besoins</p>
          </div>

          <div className="space-y-12">
            {/* Pack Famille */}
            <Card className="overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">👨‍👩‍👧‍👦 Pack Famille</h3>
                        <Badge className="mt-2 bg-blue-500/20 text-blue-700 dark:text-blue-300">À partir de 89€</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Protection idéale pour les familles. Vos photos de vacances, 
                      documents importants et navigation internet en toute sécurité.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Sauvegarde automatique", desc: "Photos, vidéos et documents sauvés chaque jour", icon: HardDrive },
                        { title: "Antivirus familial", desc: "Protection pour tous les ordinateurs de la maison", icon: Shield },
                        { title: "Contrôle parental", desc: "Internet sécurisé pour les enfants", icon: Lock }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-md">
                            <item.icon className="w-5 h-5 text-blue-500" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Protection informatique pour famille"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-500/10" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pack Professionnel */}
            <Card className="overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative order-2 lg:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Sécurité informatique professionnelle"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-500/10" />
                  </div>
                  <div className="p-12 order-1 lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                        <Monitor className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">💼 Pack Professionnel</h3>
                        <Badge className="mt-2 bg-purple-500/20 text-purple-700 dark:text-purple-300">À partir de 149€</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Sécurité renforcée pour les professionnels. Protection des données clients, 
                      sauvegarde automatique et conformité RGPD.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Sauvegarde pro", desc: "Données critiques sauvées en temps réel", icon: Cloud },
                        { title: "Sécurité avancée", desc: "Pare-feu, chiffrement, surveillance", icon: Shield },
                        { title: "Conformité RGPD", desc: "Respect des réglementations", icon: Star }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-md">
                            <item.icon className="w-5 h-5 text-purple-500" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pourquoi c'est important avec accordéons modernisés */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Pourquoi protéger vos données ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Les risques sont réels, mais les solutions existent
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {[
                {
                  value: "risques",
                  icon: AlertTriangle,
                  title: "Les risques que vous courrez sans protection",
                  subtitle: "Virus, pannes, vol... les dangers sont nombreux",
                  color: "bg-red-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg text-red-600">Pertes de données :</h4>
                        <ul className="space-y-3">
                          {[
                            "Photos de famille irremplaçables",
                            "Documents importants (factures, contrats)",
                            "Années de travail perdues",
                            "Contacts et historiques"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg text-red-600">Menaces courantes :</h4>
                        <ul className="space-y-3">
                          {[
                            "Virus qui détruisent vos fichiers",
                            "Ransomware qui bloque tout",
                            "Vol d'identité en ligne",
                            "Espionnage de vos données"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "solutions",
                  icon: Shield,
                  title: "Nos solutions pour votre tranquillité",
                  subtitle: "Protection automatique et transparente",
                  color: "bg-green-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Prévention",
                          icon: Shield,
                          items: ["Antivirus en temps réel", "Pare-feu configuré", "Mises à jour automatiques", "Navigation sécurisée"]
                        },
                        {
                          title: "Sauvegarde",
                          icon: HardDrive,
                          items: ["Copie automatique quotidienne", "Stockage sécurisé", "Récupération facile", "Tests de restauration"]
                        },
                        {
                          title: "Formation",
                          icon: Star,
                          items: ["Reconnaître les dangers", "Bonnes pratiques", "Gestion des mots de passe", "Support en cas de doute"]
                        }
                      ].map((category, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <category.icon className="w-6 h-6 text-green-500 mr-3" />
                            <h4 className="font-semibold text-lg">{category.title}</h4>
                          </div>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )
                }
              ].map((step, index) => (
                <AccordionItem key={step.value} value={step.value} className="border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <AccordionTrigger className="hover:no-underline px-8 py-6">
                    <div className="flex items-center w-full">
                      <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center mr-6`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{step.subtitle}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8">
                    {step.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Garanties et services inclus */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Pourquoi choisir notre protection ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Sérénité totale garantie</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Installation clé en main", 
                desc: "Nous installons et configurons tout. Vous n'avez rien à faire, ça marche tout seul après !",
                icon: Zap,
                color: "bg-blue-500"
              },
              { 
                title: "Formation incluse", 
                desc: "Nous vous expliquons tout simplement pour que vous compreniez et utilisiez vos protections.",
                icon: Star,
                color: "bg-green-500"
              },
              { 
                title: "Support à vie", 
                desc: "Un doute ? Une alerte ? Appelez-nous, nous sommes là pour vous rassurer et vous aider.",
                icon: Award,
                color: "bg-purple-500"
              }
            ].map((garantie, index) => (
              <Card key={index} className="border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${garantie.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <garantie.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">{garantie.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{garantie.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-600/90 hover:to-emerald-600/90 text-white shadow-xl">
              <Shield className="w-5 h-5 mr-2" />
              Protéger mes données maintenant
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}