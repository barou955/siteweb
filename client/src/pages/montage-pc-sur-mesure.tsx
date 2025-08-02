
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Phone, Cpu, HardDrive, Monitor, Gamepad2, Briefcase, Wrench, Settings, Star, Award, Zap, Eye, Package, Wifi, Camera, Shield, Thermometer, Power, MemoryStick, Database, Headphones } from "lucide-react";
import { scrollToContact } from "@/lib/utils";

export default function MontagePcSurMesure() {
  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50 dark:from-slate-950 dark:via-orange-950 dark:to-red-950">
      <SeoMeta 
        title="Montage PC Sur Mesure - Labtek"
        description="PC sur mesure adapté à vos besoins : bureautique, gaming, workstation. Conseil, montage professionnel, garantie et formation incluse."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/10 to-pink-500/10" />
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
                  <Cpu className="w-3 h-3 mr-1" />
                  Configuration Optimale
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-gray-900 via-orange-800 to-red-800 dark:from-gray-100 dark:via-orange-200 dark:to-red-200 bg-clip-text text-transparent">
                    Montage PC
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Sur Mesure
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  PC trop lent ? Vous voulez jouer aux derniers jeux ? Besoin d'une machine pour travailler ? 
                  Nous montons le PC parfait selon vos besoins et votre budget avec une expertise technique approfondie !
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-600/90 hover:to-red-600/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Cpu className="w-5 h-5 mr-2" />
                  Configurer mon PC
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open('tel:0768852880', '_self')} className="border-2 hover:bg-white/50 backdrop-blur-sm">
                  <Phone className="w-5 h-5 mr-2" />
                  07 68 85 28 80
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">Conseil</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Expert</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">Montage</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Pro</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">Tests</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Complets</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">Garantie</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">2 ans</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <img 
                  src="https://i.ibb.co/7d6SXW51/build-own-pc.jpg"
                  alt="Construction PC sur mesure - Assemblage professionnel"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  loading="eager"
                />
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-2xl shadow-xl">
                  <Wrench className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de configurations avec design moderne */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-500/20 text-orange-700 dark:text-orange-300">Nos Spécialités</Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              PC selon votre usage professionnel
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Chaque configuration est optimisée pour un usage spécifique avec des composants sélectionnés minutieusement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Monitor, title: "Bureautique", desc: "Internet, emails, documents Office", color: "bg-blue-500" },
              { icon: Gamepad2, title: "Gaming", desc: "Jeux récents en haute qualité", color: "bg-green-500" },
              { icon: Briefcase, title: "Workstation", desc: "Création 3D, montage vidéo, CAO", color: "bg-purple-500" },
              { icon: Settings, title: "Serveur", desc: "Stockage, surveillance, automatisation", color: "bg-teal-500" }
            ].map((config, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${config.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <config.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{config.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{config.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services techniques additionnels */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Overclocking sécurisé", desc: "Optimisation des performances avec tests de stabilité", color: "bg-red-500" },
              { icon: Thermometer, title: "Refroidissement avancé", desc: "Gestion thermique optimale pour les hautes performances", color: "bg-cyan-500" },
              { icon: Database, title: "Configuration RAID", desc: "Solutions de stockage redondant et haute performance", color: "bg-indigo-500" }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{service.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Configurations détaillées avec nouveau design */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Nos configurations techniques détaillées
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Exemples de PC que nous montons avec spécifications techniques complètes</p>
          </div>

          <div className="space-y-12">
            {/* Config Bureautique */}
            <Card className="overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                        <Monitor className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">💻 PC Bureautique Efficiency</h3>
                        <Badge className="mt-2 bg-blue-500/20 text-blue-700 dark:text-blue-300">À partir de 450€</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Configuration silencieuse et économique optimisée pour la productivité. Parfaite pour internet, emails, 
                      documents Office, comptabilité et télétravail avec performances durables.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Processeur 6 cœurs moderne", desc: "Architecture récente avec graphiques intégrés performants, consommation optimisée", icon: Cpu },
                        { title: "16GB RAM DDR4/DDR5", desc: "Fluidité garantie, multitâche efficace, extensible jusqu'à 64GB", icon: MemoryStick },
                        { title: "SSD NVMe 500GB-1TB", desc: "Démarrage en 10 secondes, transferts ultra-rapides, garantie 5 ans", icon: HardDrive },
                        { title: "Refroidissement silencieux", desc: "Ventilation optimisée <30dB, dissipateurs haute qualité", icon: Thermometer },
                        { title: "Carte mère évolutive", desc: "USB 3.2, WiFi 6, Bluetooth 5.2, ports modernes intégrés", icon: Settings },
                        { title: "Alimentation 80+ Bronze", desc: "Efficacité énergétique optimale, protection contre surtensions", icon: Power }
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
                      src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="PC bureautique moderne"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-500/10" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Config Gaming */}
            <Card className="overflow-hidden bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative order-2 lg:order-1">
                    <img 
                      src="https://i.ibb.co/mCfVcY1G/cherryblossom.webp"
                      alt="Configuration PC gaming haute performance"
                      className="w-full h-full object-cover object-right"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-500/10" />
                  </div>
                  <div className="p-12 order-1 lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                        <Gamepad2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">🎮 PC Gaming Performance</h3>
                        <Badge className="mt-2 bg-green-500/20 text-green-700 dark:text-green-300">À partir de 1200€</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Configuration gaming puissante pour jouer aux derniers jeux en haute qualité 1440p-4K. 
                      RGB personnalisable, refroidissement performance et évolutivité maximale.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Processeur Gaming 8+ cœurs", desc: "Architecture performance, fréquences élevées, overclocking supporté", icon: Cpu },
                        { title: "Carte graphique haut de gamme", desc: "Ray tracing, DLSS/FSR, 8-24GB VRAM, 1440p-4K ready", icon: Monitor },
                        { title: "32GB RAM haute fréquence", desc: "DDR4-3600/DDR5-5600, timings optimisés, RGB synchronisé", icon: MemoryStick },
                        { title: "SSD NVMe 1TB + HDD 2TB", desc: "Cache intelligent, stockage jeux massif, temps de chargement réduits", icon: HardDrive },
                        { title: "Refroidissement liquide/air", desc: "Températures optimales, overclocking stable, ventilation RGB", icon: Thermometer },
                        { title: "Écran gaming haute fréquence", desc: "144Hz+, G-Sync/FreeSync, temps réponse 1ms", icon: Monitor },
                        { title: "Optimisation réseau gaming", desc: "QoS, ports dédiés, réduction latence", icon: Wifi },
                        { title: "Streaming et capture", desc: "OBS, Streamlabs, éclairage, webcam 4K", icon: Camera },
                        { title: "Bibliothèques de jeux", desc: "Steam, Epic, configuration multi-plateformes", icon: Package }
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

            {/* Config Workstation */}
            <Card className="overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">⚡ Workstation Professionnelle</h3>
                        <Badge className="mt-2 bg-purple-500/20 text-purple-700 dark:text-purple-300">À partir de 2500€</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Station de travail professionnelle pour création 3D, rendu vidéo, CAO, simulation et calculs complexes. 
                      Stabilité maximale, performances soutenues et fiabilité entreprise.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Processeur Pro 16+ cœurs", desc: "Architecture HEDT/serveur, cache étendu, performances multi-thread", icon: Cpu },
                        { title: "Carte pro/gaming haut de gamme", desc: "VRAM étendue, drivers certifiés, précision couleur optimale", icon: Monitor },
                        { title: "64GB RAM ECC/non-ECC", desc: "Correction d'erreurs, bande passante élevée, extensible 128GB+", icon: MemoryStick },
                        { title: "SSD NVMe Pro 2TB + RAID", desc: "Endurance élevée, performances soutenues, redondance des données", icon: HardDrive },
                        { title: "Refroidissement professionnel", desc: "Dissipation thermique optimale, fonctionnement 24/7", icon: Thermometer },
                        { title: "Carte mère workstation", desc: "Connectivité étendue, stockage M.2 multiple, réseau 10Gb", icon: Settings },
                        { title: "Alimentation modulaire 80+ Gold", desc: "Efficacité maximale, câblage optimisé, protection avancée", icon: Power },
                        { title: "Écrans calibrés professionnels", desc: "Précision colorimétrique, couverture gamut étendue", icon: Eye },
                        { title: "Audio professionnel", desc: "Interface audio, monitoring, acoustique optimisée", icon: Headphones }
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
                      src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Workstation professionnelle"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-purple-500/10" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Config Serveur/NAS */}
            <Card className="overflow-hidden bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/50 dark:to-cyan-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative order-2 lg:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1588508065123-287b28e013da?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Serveur domestique"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500/10" />
                  </div>
                  <div className="p-12 order-1 lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mr-4">
                        <Settings className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">🏠 Serveur Domestique</h3>
                        <Badge className="mt-2 bg-teal-500/20 text-teal-700 dark:text-teal-300">À partir de 800€</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Serveur domestique pour stockage centralisé, surveillance, automatisation domotique et services réseau. 
                      Fonctionnement silencieux 24/7 avec consommation optimisée.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Processeur basse consommation", desc: "Efficacité énergétique, performances suffisantes, fonctionnement continu", icon: Cpu },
                        { title: "RAM ECC 16-32GB", desc: "Fiabilité des données, correction d'erreurs, stabilité long terme", icon: MemoryStick },
                        { title: "Stockage RAID redondant", desc: "Multiple disques, sauvegarde automatique, haute disponibilité", icon: HardDrive },
                        { title: "Connectivité réseau avancée", desc: "Ethernet Gigabit/10Gb, WiFi 6, gestion VLAN", icon: Wifi },
                        { title: "Refroidissement passif/silencieux", desc: "Dissipation optimisée, ventilation intelligente", icon: Thermometer },
                        { title: "Boîtier rack/tour optimisé", desc: "Gestion thermique, accessibilité maintenance, extensibilité", icon: Package }
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

      {/* Notre processus de montage détaillé */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Processus de montage technique professionnel
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Méthodologie rigoureuse avec expertise technique approfondie et contrôle qualité à chaque étape
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {[
                {
                  value: "analyse-besoins",
                  icon: Eye,
                  title: "1. Analyse technique approfondie des besoins",
                  subtitle: "Évaluation précise des exigences et contraintes techniques",
                  color: "bg-blue-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Analyse d'usage détaillée :</h4>
                        <ul className="space-y-3">
                          {[
                            "Logiciels utilisés et leurs exigences système spécifiques",
                            "Charge de travail quotidienne et pics de performance",
                            "Périphériques existants et compatibilité requise",
                            "Contraintes d'espace, acoustiques et énergétiques",
                            "Évolutivité future et cycle de mise à niveau prévu",
                            "Budget total incluant logiciels et formation"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Expertise technique :</h4>
                        <ul className="space-y-3">
                          {[
                            "Calcul des performances requises par composant",
                            "Optimisation du rapport performance/prix/consommation",
                            "Planification de l'évolutivité et compatibilité future",
                            "Sélection des meilleures technologies disponibles",
                            "Validation de la cohérence globale de la configuration",
                            "Estimation précise des gains de performance"
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
                  value: "conception-devis",
                  icon: Settings,
                  title: "2. Conception technique et validation détaillée",
                  subtitle: "Sélection experte avec optimisation performance/prix",
                  color: "bg-teal-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <Cpu className="w-6 h-6 text-teal-500 mr-3" />
                          Composants principaux
                        </h4>
                        <ul className="space-y-2">
                          {[
                            "Processeur selon architecture et usage",
                            "Carte mère avec chipset adapté",
                            "RAM optimisée en fréquence et timings",
                            "Stockage SSD/HDD selon besoins",
                            "Carte graphique pour usage spécifique",
                            "Alimentation dimensionnée avec marge"
                          ].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <Thermometer className="w-6 h-6 text-teal-500 mr-3" />
                          Refroidissement et boîtier
                        </h4>
                        <ul className="space-y-2">
                          {[
                            "Solution thermique adaptée à la puissance",
                            "Ventilation optimisée avec courbes personnalisées",
                            "Boîtier avec gestion des flux d'air",
                            "Filtres anti-poussière et maintenance",
                            "Acoustique optimisée selon environnement",
                            "Esthétique cohérente avec préférences"
                          ].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <Shield className="w-6 h-6 text-teal-500 mr-3" />
                          Validation et optimisation
                        </h4>
                        <ul className="space-y-2">
                          {[
                            "Vérification compatibilité complète",
                            "Calcul consommation et dimensionnement PSU",
                            "Optimisation prix avec négociation fournisseurs",
                            "Présentation devis détaillé avec explications",
                            "Alternatives proposées selon budget",
                            "Planning de livraison et montage"
                          ].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "commande-approvisionnement",
                  icon: Package,
                  title: "3. Approvisionnement et contrôle qualité",
                  subtitle: "Gestion professionnelle avec garanties étendues",
                  color: "bg-purple-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Gestion professionnelle :</h4>
                        <ul className="space-y-3">
                          {[
                            "Réseau de fournisseurs agréés et fiables",
                            "Négociation tarifs professionnels avantageux",
                            "Vérification disponibilité et alternatives",
                            "Gestion garanties constructeur et extensions",
                            "Commandes groupées pour optimiser délais",
                            "Traçabilité complète et suivi temps réel",
                            "Assurance transport et protection matériel"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Contrôle qualité rigoureux :</h4>
                        <ul className="space-y-3">
                          {[
                            "Inspection visuelle complète à réception",
                            "Vérification numéros de série et authenticité",
                            "Test fonctionnel préliminaire des composants",
                            "Contrôle accessoires et documentation",
                            "Stockage sécurisé en environnement antistatique",
                            "Documentation photographique de l'état",
                            "Préparation optimale pour assemblage"
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
                  value: "assemblage-professionnel",
                  icon: Wrench,
                  title: "4. Assemblage technique professionnel",
                  subtitle: "Montage expert dans atelier équipé avec protocoles stricts",
                  color: "bg-green-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Préparation technique",
                          icon: Settings,
                          items: [
                            "Atelier ESD avec tapis et bracelets antistatiques",
                            "Outillage professionnel calibré et spécialisé",
                            "Éclairage optimal et loupe de précision",
                            "Documentation technique de tous composants",
                            "Inventaire complet avec photos état initial",
                            "Planning détaillé du processus d'assemblage"
                          ]
                        },
                        {
                          title: "Assemblage méthodique",
                          icon: Wrench,
                          items: [
                            "Installation processeur avec vérification alignement",
                            "Montage RAM avec test compatibilité",
                            "Câblage modulaire optimisé pour flux d'air",
                            "Installation refroidissement avec pâte thermique premium",
                            "Fixation composants avec couples de serrage appropriés",
                            "Gestion câbles pour maintenance et esthétique"
                          ]
                        },
                        {
                          title: "Tests et validation",
                          icon: Zap,
                          items: [
                            "Tests POST et détection composants",
                            "Configuration BIOS/UEFI optimisée",
                            "Installation système et pilotes récents",
                            "Benchmark performances et stress tests",
                            "Vérification températures et acoustique",
                            "Tests stabilité prolongés 24h minimum"
                          ]
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
                  value: "livraison-formation",
                  icon: Star,
                  title: "5. Livraison et formation technique complète",
                  subtitle: "Installation professionnelle et transfert de compétences",
                  color: "bg-orange-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Installation et configuration :</h4>
                        <ul className="space-y-3">
                          {[
                            "Transport sécurisé avec emballage professionnel",
                            "Installation dans environnement de travail optimal",
                            "Connexion et configuration de tous périphériques",
                            "Configuration réseau avancée et sécurisée",
                            "Transfert données depuis ancienne machine",
                            "Installation logiciels métier et personnalisation",
                            "Optimisation système selon profil d'usage"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Formation et support :</h4>
                        <ul className="space-y-3">
                          {[
                            "Présentation détaillée de la configuration",
                            "Formation sur fonctionnalités avancées",
                            "Conseils d'entretien et maintenance préventive",
                            "Procédures de sauvegarde et récupération",
                            "Documentation technique personnalisée",
                            "Support prioritaire inclus pendant 2 ans",
                            "Hotline technique directe et formation continue"
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

      {/* Services inclus étendus */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Services techniques complets inclus
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Accompagnement professionnel complet de A à Z</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Livraison et installation complète", 
                desc: "Transport sécurisé, installation professionnelle, configuration réseau, transfert de données et mise en service complète.",
                icon: Star,
                color: "bg-blue-500"
              },
              { 
                title: "Formation technique personnalisée", 
                desc: "Explication détaillée du système, formation sur l'utilisation optimale, conseils de maintenance et bonnes pratiques.",
                icon: Award,
                color: "bg-green-500"
              },
              { 
                title: "Garantie étendue 2 ans", 
                desc: "Garantie complète sur assemblage et composants, support technique prioritaire, maintenance préventive incluse.",
                icon: Shield,
                color: "bg-purple-500"
              },
              { 
                title: "Optimisation et overclocking", 
                desc: "Réglages fins des performances, overclocking sécurisé, optimisation système selon usage spécifique.",
                icon: Zap,
                color: "bg-red-500"
              },
              { 
                title: "Sauvegarde et migration", 
                desc: "Transfert complet des données, configuration identique, sauvegarde sécurisée de l'ancien système.",
                icon: Database,
                color: "bg-indigo-500"
              },
              { 
                title: "Support technique continu", 
                desc: "Hotline directe, assistance à distance, mises à jour guidées, conseils d'évolution matérielle.",
                icon: Headphones,
                color: "bg-teal-500"
              }
            ].map((service, index) => (
              <Card key={index} className="border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-600/90 hover:to-red-600/90 text-white shadow-xl">
              <Cpu className="w-5 h-5 mr-2" />
              Demander un devis technique personnalisé
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
