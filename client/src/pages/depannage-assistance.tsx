import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Phone, Mail, Wrench, Clock, MapPin, Zap, Monitor, Wifi, AlertTriangle, Settings, Eye, HeadphonesIcon, HardDrive, Globe, Shield, ScreenShare, KeyRound, Printer, Star, TrendingUp } from "lucide-react";
import { scrollToContact } from "@/lib/utils";

export default function DepannageAssistance() {
  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-pink-50 dark:from-slate-950 dark:via-red-950 dark:to-pink-950">
      <SeoMeta 
        title="Dépannage Informatique à Domicile - Labtek"
        description="Dépannage informatique rapide à domicile en Essonne. PC lent, virus, problème internet, installation. Intervention le jour même possible."
      />
      <Navigation />

      {/* Hero Section avec design amélioré */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-pink-500/10 to-rose-500/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <Button onClick={goBack} variant="ghost" className="mb-8 hover:bg-white/20 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-200 hover:bg-orange-500/30">
                  <Zap className="w-3 h-3 mr-1" />
                  Intervention Express
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                    Dépannage &
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-gray-100">
                    Assistance
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  Votre ordinateur ne marche plus ? Internet ne fonctionne pas ? 
                  Nous arrivons rapidement pour tout remettre en ordre. Disponibles même le weekend pour les urgences !
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-600/90 hover:to-pink-600/90 text-black dark:text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Wrench className="w-5 h-5 mr-2" />
                  <span className="text-black dark:text-white">Demander une intervention</span>
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open('tel:0768852880', '_self')} className="border-2 hover:bg-white/50 backdrop-blur-sm">
                  <Phone className="w-5 h-5 mr-2" />
                  07 68 85 28 80
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-labtek-blue">24h</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Intervention possible</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">99%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Problèmes résolus</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">30km</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Zone d'intervention</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop&auto=format&q=80"
                  alt="Technicien réparant un ordinateur"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-2xl shadow-xl">
                  <Clock className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services avec design moderne */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-700 dark:text-blue-300">Nos Services</Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Ce que nous faisons pour vous
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Un service complet de dépannage informatique adapté à tous vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "Diagnostic rapide", desc: "Identification précise du problème", color: "bg-blue-500" },
              { icon: Wrench, title: "Réparation sur place", desc: "Intervention directe chez vous", color: "bg-green-500" },
              { icon: HeadphonesIcon, title: "Assistance à distance", desc: "Aide immédiate par internet", color: "bg-purple-500" },
              { icon: Clock, title: "Formation incluse", desc: "Nous vous expliquons pour éviter la récidive", color: "bg-orange-500" }
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

      {/* Types d'intervention avec nouveau design */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Nos types d'intervention
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Choisissez la solution adaptée à votre situation</p>
          </div>

          <div className="space-y-12">
            {/* Intervention à domicile */}
            <Card className="overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">🏠 Intervention à domicile</h3>
                        <Badge className="mt-2 bg-blue-500/20 text-blue-700 dark:text-blue-300">Sur devis</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Nous nous déplaçons chez vous avec tout le matériel nécessaire. Diagnostic sur place, 
                      réparation immédiate si possible et conseils personnalisés.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Diagnostic complet", desc: "Identification précise du problème, devis transparent", icon: Eye },
                        { title: "Réparation sur place", desc: "Si réparable immédiatement, sinon emport en atelier", icon: Wrench },
                        { title: "Formation et conseils inclus", desc: "Prévention et bonnes pratiques pour éviter les pannes", icon: TrendingUp }
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
                      src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Technicien réparant un ordinateur à domicile"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-500/10" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Assistance à distance */}
            <Card className="overflow-hidden bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative order-2 lg:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Assistance informatique à distance"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-500/10" />
                  </div>
                  <div className="p-12 order-1 lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                        <HeadphonesIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">💻 Assistance à distance</h3>
                        <Badge className="mt-2 bg-green-500/20 text-green-700 dark:text-green-300">Sur devis</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Résolution rapide par internet. Nous prenons le contrôle de votre écran pour 
                      diagnostiquer et résoudre de nombreux problèmes sans nous déplacer.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Aide immédiate", desc: "Connexion sécurisée, résolution en temps réel", icon: Zap },
                        { title: "Disponible 7j/7", desc: "Même le weekend pour les urgences", icon: Clock },
                        { title: "Installation et configuration", desc: "Programmes, mises à jour, paramètres optimisés", icon: Settings }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-md">
                            <item.icon className="w-5 h-5 text-green-500" />
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

            {/* Maintenance préventive */}
            <Card className="overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                        <Settings className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">🔧 Maintenance préventive</h3>
                        <Badge className="mt-2 bg-purple-500/20 text-purple-700 dark:text-purple-300">Sur devis</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Évitez les pannes avec un entretien régulier. Nettoyage, optimisation et 
                      surveillance pour un PC toujours performant.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Visite mensuelle", desc: "Nettoyage physique et logiciel complet", icon: Clock },
                        { title: "Mises à jour automatiques", desc: "Windows, antivirus, pilotes toujours à jour", icon: Shield },
                        { title: "Surveillance et optimisation", desc: "Performances optimales, prévention des pannes", icon: TrendingUp }
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
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Maintenance préventive ordinateur"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-purple-500/10" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus d'intervention avec accordéons modernisés */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Notre processus d'intervention professionnel
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez en détail chaque étape de notre intervention. Un processus structuré 
              pour résoudre efficacement tous vos problèmes informatiques.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {[
                {
                  value: "premier-contact",
                  icon: Phone,
                  title: "Premier contact et urgence",
                  subtitle: "Votre appel, notre réactivité immédiate",
                  color: "bg-blue-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Quand vous nous appelez :</h4>
                        <ul className="space-y-3">
                          {[
                            "Nous écoutons votre problème en détail",
                            "Nous évaluons le niveau d'urgence",
                            "Nous vous donnons des premiers conseils",
                            "Nous planifions l'intervention si nécessaire"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Nos délais de réponse :</h4>
                        <ul className="space-y-3">
                          {[
                            "Panne bloquante : intervention dans les 2h",
                            "Problème urgent : rendez-vous dans la journée",
                            "Maintenance : planification selon vos disponibilités",
                            "Conseils téléphoniques : gratuits et immédiats"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Star className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "diagnostic",
                  icon: Eye,
                  title: "Diagnostic approfondi sur place",
                  subtitle: "Identification précise du problème chez vous",
                  color: "bg-teal-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Notre analyse complète :</h4>
                        <ul className="space-y-3">
                          {[
                            "Tests de démarrage et performance",
                            "Vérification de tous les composants",
                            "Analyse des programmes installés",
                            "Contrôle de la sécurité et des virus",
                            "État des disques durs et mémoire",
                            "Test de la connexion internet"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Nous vous expliquons :</h4>
                        <ul className="space-y-3">
                          {[
                            "Ce qui ne fonctionne pas et pourquoi",
                            "Les risques si on ne répare pas",
                            "Les différentes solutions possibles",
                            "Le temps nécessaire pour chaque réparation",
                            "Le coût de chaque option",
                            "Nos recommandations personnalisées"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Star className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "devis",
                  icon: AlertTriangle,
                  title: "Devis transparent et choix",
                  subtitle: "Vous décidez en toute connaissance de cause",
                  color: "bg-purple-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Notre devis détaille :</h4>
                        <ul className="space-y-3">
                          {[
                            "Chaque problème identifié",
                            "La solution recommandée pour chacun",
                            "Le temps de travail nécessaire",
                            "Le coût des pièces si remplacement",
                            "Le prix total sans surprise",
                            "Les garanties sur notre travail"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Vos options :</h4>
                        <ul className="space-y-3">
                          {[
                            "Accepter toutes les réparations",
                            "Choisir seulement les plus urgentes",
                            "Programmer les réparations en plusieurs fois",
                            "Demander des alternatives moins chères",
                            "Prendre le temps de réfléchir",
                            "Annuler sans frais (diagnostic payant)"
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
                  value: "reparation",
                  icon: Wrench,
                  title: "Réparation experte avec explications",
                  subtitle: "Solutions durables appliquées sous vos yeux",
                  color: "bg-green-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Réparations logicielles",
                          icon: Settings,
                          items: ["Suppression complète des virus", "Nettoyage en profondeur du système", "Mise à jour de tous les pilotes", "Optimisation des performances", "Réparation des erreurs système", "Configuration des programmes"]
                        },
                        {
                          title: "Réparations matérielles",
                          icon: HardDrive,
                          items: ["Remplacement des composants défaillants", "Nettoyage physique de l'ordinateur", "Tests de stabilité et fiabilité", "Vérification des températures", "Calibrage des écrans", "Installation de nouveaux composants"]
                        },
                        {
                          title: "Sécurisation des données",
                          icon: Shield,
                          items: ["Sauvegarde avant toute intervention", "Récupération des fichiers perdus", "Protection contre futures pannes", "Configuration des sauvegardes automatiques", "Chiffrement des données sensibles", "Test de récupération des données"]
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
                },
                {
                  value: "tests",
                  icon: Check,
                  title: "Tests et validation avec vous",
                  subtitle: "Vérification que tout fonctionne parfaitement",
                  color: "bg-orange-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Nos tests complets :</h4>
                        <ul className="space-y-3">
                          {[
                            "Démarrage et extinction propres",
                            "Lancement de tous vos programmes favoris",
                            "Test de la navigation internet",
                            "Vérification des emails et documents",
                            "Contrôle des périphériques (imprimante, etc.)",
                            "Test de performance générale"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Vous validez avec nous :</h4>
                        <ul className="space-y-3">
                          {[
                            "Tous vos fichiers sont bien là",
                            "Vos programmes marchent normalement",
                            "La vitesse vous convient",
                            "Vous retrouvez vos habitudes",
                            "Les nouveaux réglages vous plaisent",
                            "Vous n'avez plus les problèmes d'avant"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Star className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "formation",
                  icon: TrendingUp,
                  title: "Formation et conseils préventifs",
                  subtitle: "Pour éviter que les problèmes reviennent",
                  color: "bg-indigo-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Ce que nous vous apprenons :</h4>
                        <ul className="space-y-3">
                          {[
                            "Les gestes à éviter pour ne pas abîmer votre PC",
                            "Comment bien éteindre et redémarrer",
                            "Quels sites internet éviter",
                            "Comment reconnaître les tentatives d'arnaque",
                            "Les signes qui doivent vous alerter",
                            "Quand nous appeler avant que ça empire"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Nos conseils personnalisés :</h4>
                        <ul className="space-y-3">
                          {[
                            "Fréquence de nettoyage selon votre usage",
                            "Programmes à installer ou éviter",
                            "Réglages adaptés à vos besoins",
                            "Planning de sauvegarde personnalisé",
                            "Numéros utiles en cas de problème",
                            "Mémo des manipulations de base"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Star className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{index + 1}. {step.title}</h3>
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

      {/* Problèmes résolus avec design moderne */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Problèmes que nous résolvons quotidiennement
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Solutions rapides pour tous vos soucis informatiques</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "PC lent ou qui plante", desc: "Optimisation performances, nettoyage système", icon: HardDrive, color: "bg-red-500" },
              { title: "Plus d'internet ou Wi-Fi", desc: "Configuration réseau, diagnostic connexion", icon: Wifi, color: "bg-blue-500" },
              { title: "Virus et fenêtres popup", desc: "Nettoyage complet, protection renforcée", icon: Shield, color: "bg-green-500" },
              { title: "Écran noir ou bleu", desc: "Diagnostic matériel, réparation système", icon: ScreenShare, color: "bg-purple-500" },
              { title: "Mots de passe oubliés", desc: "Récupération accès Windows, emails, comptes", icon: KeyRound, color: "bg-orange-500" },
              { title: "Imprimante en panne", desc: "Installation pilotes, configuration réseau", icon: Printer, color: "bg-teal-500" }
            ].map((probleme, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${probleme.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <probleme.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{probleme.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{probleme.desc}</p>
                  <div className="mt-6">
                    <Badge className="bg-green-500/20 text-green-700 dark:text-green-300">
                      <Check className="w-3 h-3 mr-1" />
                      Résolu rapidement
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention modernisée */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Zone d'intervention
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Nous intervenons rapidement dans toute l'Essonne</p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-6">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Essonne (91) et Île-de-France</h3>
                      <p className="text-gray-600 dark:text-gray-300">Intervention dans un rayon de 30km autour d'Évry-Courcouronnes</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-lg text-gray-900 dark:text-gray-100">Villes principales :</h4>
                      <ul className="space-y-2">
                        {[
                          "Évry-Courcouronnes",
                          "Corbeil-Essonnes",
                          "Sainte-Geneviève-des-Bois",
                          "Viry-Châtillon",
                          "Grigny, Ris-Orangis",
                          "Et communes limitrophes"
                        ].map((ville, index) => (
                          <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                            <Star className="w-4 h-4 text-yellow-500 mr-2" />
                            {ville}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4 text-lg text-gray-900 dark:text-gray-100">Frais de déplacement :</h4>
                      <ul className="space-y-2">
                        {[
                          "Moins de 10km : gratuit",
                          "10-20km : 10€",
                          "20-30km : 20€",
                          "Urgence weekend : +20€",
                          "Intervention soir : +15€"
                        ].map((tarif, index) => (
                          <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            {tarif}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-labtek-blue to-purple-600 hover:from-labtek-blue/90 hover:to-purple-600/90 text-black dark:text-white shadow-xl">
                      <Phone className="w-5 h-5 mr-2" />
                      <span className="text-black dark:text-white">Demander une intervention</span>
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop&auto=format&q=80"
                    alt="Zone d'intervention en Essonne"
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Essonne (91)</h4>
                    <p className="text-sm opacity-90">Intervention rapide dans toute la région</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}