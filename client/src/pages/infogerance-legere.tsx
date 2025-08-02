import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Phone, Monitor, Shield, Clock, Eye, Bell, HeadphonesIcon, Server, Zap, TrendingUp, Star, Award, HardDrive, Settings } from "lucide-react";
import { scrollToContact } from "@/lib/utils";

export default function InfogeranceLegere() {
  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 dark:from-slate-950 dark:via-teal-950 dark:to-cyan-950">
      <SeoMeta 
        title="Infogérance Légère - Labtek"
        description="Surveillance et maintenance informatique 24h/24. Votre infrastructure surveillée en permanence avec interventions rapides en cas de problème."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-cyan-500/10 to-blue-500/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 container-mobile service-hero-container">
          <Button onClick={goBack} variant="ghost" className="mb-8 hover:bg-white/20 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-teal-500/20 text-teal-700 dark:text-teal-300 border-teal-200 hover:bg-teal-500/30">
                  <Monitor className="w-3 h-3 mr-1" />
                  Surveillance Continue
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-responsive">
                  <span className="bg-gradient-to-r from-gray-900 via-teal-800 to-cyan-800 dark:from-gray-100 dark:via-teal-200 dark:to-cyan-200 bg-clip-text text-transparent">
                    Infogérance
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Légère
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-responsive">
                  Dormez tranquille ! Nous surveillons vos équipements informatiques 24h/24. 
                  En cas de problème, vous êtes alerté immédiatement et nous intervenons rapidement.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-600/90 hover:to-cyan-600/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Monitor className="w-5 h-5 mr-2" />
                  Surveiller mes équipements
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open('tel:0768852880', '_self')} className="border-2 hover:bg-white/50 backdrop-blur-sm">
                  <Phone className="w-5 h-5 mr-2" />
                  07 68 85 28 80
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">24h/24</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Surveillance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">Instantané</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Alertes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">Rapide</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Intervention</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop&auto=format&q=80"
                  alt="Centre de surveillance informatique"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-teal-500 text-white p-4 rounded-2xl shadow-xl">
                  <Eye className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services de surveillance avec design moderne */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-500/20 text-teal-700 dark:text-teal-300">Ce que nous surveillons</Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Surveillance complète de votre informatique
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nous gardons un œil sur tout pour que vous puissiez vous concentrer sur votre activité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Server, title: "Serveurs", desc: "État, performance, disponibilité", color: "bg-blue-500" },
              { icon: Monitor, title: "Ordinateurs", desc: "Fonctionnement, mise à jour, sécurité", color: "bg-green-500" },
              { icon: Shield, title: "Sécurité", desc: "Antivirus, pare-feu, menaces", color: "bg-purple-500" },
              { icon: Zap, title: "Réseau", desc: "Connexion internet, Wi-Fi, vitesse", color: "bg-orange-500" }
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

      {/* Notre processus d'infogérance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Notre processus d'infogérance légère
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              De l'audit initial au monitoring continu, nous prenons soin de votre informatique au quotidien
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {[
                {
                  value: "audit-infrastructure",
                  icon: Eye,
                  title: "1. Audit complet de votre infrastructure",
                  subtitle: "État des lieux détaillé de tout votre parc informatique",
                  color: "bg-blue-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Inventaire matériel :</h4>
                        <ul className="space-y-3">
                          {[
                            "Recensement de tous vos équipements",
                            "Évaluation de l'état et de l'âge du matériel",
                            "Identification des équipements critiques",
                            "Planification des renouvellements nécessaires"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Analyse logicielle :</h4>
                        <ul className="space-y-3">
                          {[
                            "Inventaire des logiciels installés",
                            "Vérification des licences et conformité",
                            "Identification des logiciels obsolètes",
                            "Évaluation des besoins non couverts"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Monitor className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "mise-en-conformite",
                  icon: Shield,
                  title: "2. Mise en conformité et optimisation",
                  subtitle: "Sécurisation et amélioration des performances",
                  color: "bg-green-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <Shield className="w-6 h-6 text-green-500 mr-3" />
                          Sécurisation
                        </h4>
                        <ul className="space-y-2">
                          {["Mise à jour de tous les systèmes", "Installation d'antivirus professionnel", "Configuration des pare-feu", "Sécurisation des accès réseau"].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <Zap className="w-6 h-6 text-green-500 mr-3" />
                          Optimisation
                        </h4>
                        <ul className="space-y-2">
                          {["Nettoyage des systèmes", "Optimisation des performances", "Défragmentation des disques", "Configuration des démarrages"].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <HardDrive className="w-6 h-6 text-green-500 mr-3" />
                          Sauvegarde
                        </h4>
                        <ul className="space-y-2">
                          {["Mise en place des sauvegardes automatiques", "Test de restauration", "Synchronisation cloud", "Documentation des procédures"].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "monitoring-installation",
                  icon: Server,
                  title: "3. Installation du système de monitoring",
                  subtitle: "Mise en place de la surveillance automatisée",
                  color: "bg-purple-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Outils de surveillance :</h4>
                        <ul className="space-y-3">
                          {[
                            "Installation d'agents de monitoring discrets",
                            "Configuration des alertes personnalisées",
                            "Mise en place des tableaux de bord",
                            "Test de tous les systèmes de surveillance"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Points de contrôle :</h4>
                        <ul className="space-y-3">
                          {[
                            "Surveillance des performances système",
                            "Monitoring de l'espace disque disponible",
                            "Contrôle des sauvegardes quotidiennes",
                            "Détection des tentatives d'intrusion"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Bell className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "maintenance-preventive",
                  icon: Clock,
                  title: "4. Maintenance préventive automatisée",
                  subtitle: "Actions régulières pour éviter les pannes",
                  color: "bg-orange-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Maintenance quotidienne",
                          icon: Clock,
                          items: ["Vérification des sauvegardes", "Contrôle des performances", "Surveillance des alertes", "Nettoyage automatique"]
                        },
                        {
                          title: "Maintenance hebdomadaire",
                          icon: Settings,
                          items: ["Mise à jour des logiciels", "Scan antivirus complet", "Optimisation des bases de données", "Vérification des espaces disques"]
                        },
                        {
                          title: "Maintenance mensuelle",
                          icon: TrendingUp,
                          items: ["Audit des performances", "Mise à jour des pilotes", "Test de restauration", "Rapport détaillé mensuel"]
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
                },
                {
                  value: "support-reactif",
                  icon: HeadphonesIcon,
                  title: "5. Support réactif et accompagnement",
                  subtitle: "Assistance continue et évolution de votre système",
                  color: "bg-teal-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Support disponible :</h4>
                        <ul className="space-y-3">
                          {[
                            "Hotline directe avec votre technicien dédié",
                            "Intervention à distance en cas de problème",
                            "Support par email avec réponse sous 2h",
                            "Intervention sur site si nécessaire"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Évolution continue :</h4>
                        <ul className="space-y-3">
                          {[
                            "Conseil pour les nouveaux équipements",
                            "Accompagnement dans les projets IT",
                            "Formation sur les nouveaux outils",
                            "Veille technologique et recommandations"
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

      {/* Services d'infogérance avec nouveau design */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Nos offres d'infogérance
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Choisissez le niveau de surveillance adapté</p>
          </div>

          <div className="space-y-12">
            {/* Offre surveillance basique */}
            <Card className="overflow-hidden bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">👁️ Surveillance Basique</h3>
                        <Badge className="mt-2 bg-blue-500/20 text-blue-700 dark:text-blue-300">À partir de 80€/mois</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Surveillance automatique de vos équipements principaux. 
                      Alertes par email et SMS en cas de problème.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Jusqu'à 5 équipements", desc: "PC, serveur, imprimante, routeur...", icon: Monitor },
                        { title: "Vérifications toutes les 5 min", desc: "Détection rapide des pannes", icon: Clock },
                        { title: "Alertes email et SMS", desc: "Notification immédiate des problèmes", icon: Bell }
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
                      src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Surveillance basique informatique"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-500/10" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Offre surveillance avancée */}
            <Card className="overflow-hidden bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/50 dark:to-emerald-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative order-2 lg:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Surveillance avancée avec intervention"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500/10" />
                  </div>
                  <div className="p-12 order-1 lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mr-4">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">🛡️ Surveillance + Intervention</h3>
                        <Badge className="mt-2 bg-teal-500/20 text-teal-700 dark:text-teal-300">À partir de 150€/mois</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Surveillance complète avec intervention à distance et sur site. 
                      Maintenance préventive incluse.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Surveillance illimitée", desc: "Tous vos équipements surveillés", icon: Monitor },
                        { title: "Intervention à distance", desc: "Réparation sans déplacement quand possible", icon: Zap },
                        { title: "Maintenance préventive", desc: "Mises à jour et optimisations régulières", icon: TrendingUp }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-md">
                            <item.icon className="w-5 h-5 text-teal-500" />
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

      {/* Comment ça fonctionne avec accordéons modernisés */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Comment fonctionne notre surveillance
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Un système automatique qui veille sur votre informatique 24h/24
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {[
                {
                  value: "installation",
                  icon: Server,
                  title: "Installation des capteurs de surveillance",
                  subtitle: "Équipements connectés à notre centre de contrôle",
                  color: "bg-blue-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Équipements surveillés :</h4>
                        <ul className="space-y-3">
                          {[
                            "Serveurs et ordinateurs",
                            "Imprimantes et scanners",
                            "Routeurs et équipements réseau",
                            "Systèmes de sauvegarde"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Points de contrôle :</h4>
                        <ul className="space-y-3">
                          {[
                            "État de fonctionnement",
                            "Performance et vitesse",
                            "Espace disque disponible",
                            "Température et ventilation"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Eye className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "surveillance",
                  icon: Eye,
                  title: "Surveillance automatique 24h/24",
                  subtitle: "Contrôles permanents depuis notre centre",
                  color: "bg-teal-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Fréquence",
                          icon: Clock,
                          items: ["Vérification toutes les 5 minutes", "Rapports quotidiens", "Bilans hebdomadaires", "Analyses mensuelles"]
                        },
                        {
                          title: "Détection",
                          icon: Bell,
                          items: ["Pannes matérielles", "Problèmes logiciels", "Surchauffe", "Virus et menaces"]
                        },
                        {
                          title: "Communication",
                          icon: HeadphonesIcon,
                          items: ["Alertes email instantanées", "SMS d'urgence", "Appel téléphonique si grave", "Tableau de bord en ligne"]
                        }
                      ].map((category, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <category.icon className="w-6 h-6 text-teal-500 mr-3" />
                            <h4 className="font-semibold text-lg">{category.title}</h4>
                          </div>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                                <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0" />
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

      {/* Avantages de l'infogérance */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Pourquoi choisir notre infogérance ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Les bénéfices concrets pour votre activité</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Sérénité totale", 
                desc: "Dormez tranquille, nous veillons sur votre informatique pendant que vous vous occupez de votre business.",
                icon: Shield,
                color: "bg-blue-500"
              },
              { 
                title: "Économies garanties", 
                desc: "Prévenez les pannes coûteuses et évitez les pertes de données qui peuvent ruiner une entreprise.",
                icon: TrendingUp,
                color: "bg-green-500"
              },
              { 
                title: "Interventions rapides", 
                desc: "En cas de problème, nous intervenons dans l'heure. Fini les journées perdues à cause de l'informatique !",
                icon: Zap,
                color: "bg-orange-500"
              }
            ].map((avantage, index) => (
              <Card key={index} className="border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${avantage.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <avantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">{avantage.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{avantage.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-600/90 hover:to-cyan-600/90 text-white shadow-xl">
              <Award className="w-5 h-5 mr-2" />
              Protéger mon informatique
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}