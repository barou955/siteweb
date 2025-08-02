import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Phone, Monitor, Printer, Wifi, HardDrive, Smartphone, Laptop, Wrench, Settings, Star, Award, Zap, Eye, Clock, Package, Camera, Router, Headphones, Gamepad2, Tv, Speaker } from "lucide-react";
import { scrollToContact } from "@/lib/utils";

export default function InstallationEquipements() {
  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      <SeoMeta 
        title="Installation d'Équipements Informatiques - Labtek"
        description="Installation professionnelle d'ordinateurs, imprimantes, routeurs Wi-Fi et équipements informatiques. Configuration complète et formation incluse."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-cyan-500/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 container-mobile">
          <Button onClick={goBack} variant="ghost" className="mb-8 hover:bg-white/20 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-200 hover:bg-blue-500/30">
                  <Settings className="w-3 h-3 mr-1" />
                  Installation Professionnelle
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-responsive">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-gray-100 dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent">
                    Installation
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    d'Équipements
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-responsive">
                  Nouveaux ordinateurs, imprimantes, routeurs Wi-Fi, caméras de surveillance ? Nous installons et configurons 
                  tout pour que ça marche parfaitement dès le premier jour !
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-600/90 hover:to-indigo-600/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Settings className="w-5 h-5 mr-2" />
                  Installer mes équipements
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open('tel:0768852880', '_self')} className="border-2 hover:bg-white/50 backdrop-blur-sm">
                  <Phone className="w-5 h-5 mr-2" />
                  07 68 85 28 80
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">Clé en main</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Tout configuré</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">Formation</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Vous apprenez</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">Garantie</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">6 mois</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <img 
                  src="https://i.ibb.co/wZQ6dD80/une-photo-r-elle-de-plein-d-appareil-informatiques-vari-s-pour-mettre-sur-mon-site-web-vitrine-de-me.jpg"
                  alt="Variété d'équipements informatiques pour installation professionnelle"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                      loading="eager"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white p-4 rounded-2xl shadow-xl">
                  <Wrench className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipements installés avec design moderne élargi */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-700 dark:text-blue-300">Nos Spécialités</Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Équipements que nous installons
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              De l'ordinateur gaming aux caméras de surveillance, nous configurons tout votre écosystème informatique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Monitor, title: "Ordinateurs", desc: "PC, Mac, portables - configuration complète", color: "bg-blue-500" },
              { icon: Printer, title: "Imprimantes", desc: "Installation, Wi-Fi, partage réseau", color: "bg-green-500" },
              { icon: Wifi, title: "Réseau Wi-Fi", desc: "Routeurs, répéteurs, optimisation signal", color: "bg-purple-500" },
              { icon: HardDrive, title: "Stockage", desc: "Disques durs, NAS, sauvegarde", color: "bg-orange-500" }
            ].map((equipement, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${equipement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <equipement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{equipement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{equipement.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Équipements supplémentaires */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Camera, title: "Vidéosurveillance", desc: "Caméras IP, enregistrement, alertes", color: "bg-red-500" },
              { icon: Smartphone, title: "Appareils mobiles", desc: "Smartphones, tablettes, synchronisation", color: "bg-indigo-500" },
              { icon: Tv, title: "Multimédia", desc: "TV connectées, box Android, streaming", color: "bg-pink-500" },
              { icon: Gamepad2, title: "Gaming", desc: "Consoles, manettes, optimisation jeux", color: "bg-cyan-500" }
            ].map((equipement, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${equipement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <equipement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{equipement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{equipement.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services d'installation avec nouveau design élargi */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Nos services d'installation détaillés
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Installation complète avec formation et support inclus</p>
          </div>

          <div className="space-y-12">
            {/* Installation ordinateur */}
            <Card className="overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                        <Monitor className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">💻 Installation Ordinateur Complète</h3>
                        <Badge className="mt-2 bg-blue-500/20 text-blue-700 dark:text-blue-300">À partir de 120€</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Votre nouvel ordinateur configuré de A à Z. Transfert de vos anciens fichiers, 
                      installation de tous vos logiciels et formation pour bien commencer.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Déballage et installation physique", desc: "Positionnement optimal, branchement sécurisé, gestion des câbles", icon: Settings },
                        { title: "Configuration système avancée", desc: "Windows 11/Mac, comptes utilisateurs, mise à jour sécurité", icon: Monitor },
                        { title: "Transfert complet de données", desc: "Fichiers, favoris, emails, contacts depuis ancien PC", icon: HardDrive },
                        { title: "Installation logiciels essentiels", desc: "Suite Office, antivirus, navigateur, lecteur PDF", icon: Package },
                        { title: "Optimisation performances", desc: "Nettoyage système, désactivation démarrage inutile", icon: Zap },
                        { title: "Formation personnalisée 2h", desc: "Prise en main, raccourcis utiles, maintenance de base", icon: Star }
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
                      src="https://i.ibb.co/FkBptfKN/preparation-et-installation-de-nouveaux-ordinateurs-chez-informatique-Libourne.jpg"
                      alt="Préparation et installation de nouveaux ordinateurs"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-500/10" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Installation imprimante */}
            <Card className="overflow-hidden bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative order-2 lg:order-1">
                    <img 
                      src="https://i.ibb.co/s9Z36kbm/choisir-son-imprimante-wifi.jpg"
                      alt="Choisir son imprimante Wi-Fi multifonction"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-500/10" />
                  </div>
                  <div className="p-12 order-1 lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                        <Printer className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">🖨️ Installation Imprimante Multifonction</h3>
                        <Badge className="mt-2 bg-green-500/20 text-green-700 dark:text-green-300">À partir de 80€</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Imprimante connectée en Wi-Fi et accessible depuis tous vos appareils. 
                      Scanner, fax et fonctions avancées configurées pour un usage professionnel.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Connexion Wi-Fi sécurisée", desc: "Accessible PC, smartphone, tablette avec mot de passe", icon: Wifi },
                        { title: "Installation pilotes optimisés", desc: "Dernières versions, paramètres qualité maximale", icon: Settings },
                        { title: "Configuration scanner avancée", desc: "Scan vers email, dossier partagé, cloud (Dropbox, Drive)", icon: Camera },
                        { title: "Partage réseau familial", desc: "Impression depuis tous les appareils de la maison", icon: Monitor },
                        { title: "Paramétrage économique", desc: "Mode brouillon, impression recto-verso automatique", icon: Zap },
                        { title: "Formation complète 1h", desc: "Toutes les fonctions, maintenance, changement cartouches", icon: Star }
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

            {/* Installation réseau */}
            <Card className="overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                        <Wifi className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">📡 Installation Réseau Wi-Fi Professionnel</h3>
                        <Badge className="mt-2 bg-purple-500/20 text-purple-700 dark:text-purple-300">À partir de 150€</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Wi-Fi ultra-rapide et sécurisé dans toute la maison avec couverture optimale. 
                      Réseau professionnel avec contrôle parental et sécurité renforcée.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Routeur Wi-Fi 6 performant", desc: "Dernière technologie, jusqu'à 6 Gbps, 50+ appareils", icon: Router },
                        { title: "Analyse et optimisation signal", desc: "Test couverture, positionnement optimal, répéteurs mesh", icon: Zap },
                        { title: "Sécurisation réseau entreprise", desc: "WPA3, VPN, firewall, filtrage MAC avancé", icon: Settings },
                        { title: "Réseau invités isolé", desc: "Accès Wi-Fi séparé pour visiteurs sans accès NAS", icon: Wifi },
                        { title: "Contrôle parental avancé", desc: "Horaires, sites bloqués, temps d'écran par appareil", icon: Monitor },
                        { title: "Monitoring et maintenance", desc: "Application mobile, alertes, mise à jour automatique", icon: Smartphone }
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
                      src="https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Installation réseau Wi-Fi"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-purple-500/10" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nouveau service : Vidéosurveillance */}
            <Card className="overflow-hidden bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/50 dark:to-rose-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative order-2 lg:order-1">
                    <img 
                      src="https://i.ibb.co/3YGHGcq8/blog-securite.jpg"
                      alt="Installation système vidéosurveillance et sécurité"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-red-500/10" />
                  </div>
                  <div className="p-12 order-1 lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4">
                        <Camera className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">📹 Installation Vidéosurveillance</h3>
                        <Badge className="mt-2 bg-red-500/20 text-red-700 dark:text-red-300">À partir de 200€</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Système de vidéosurveillance IP complet avec enregistrement, alertes mobiles 
                      et accès à distance pour sécuriser votre domicile ou entreprise.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Caméras IP 4K motorisées", desc: "Vision nocturne 30m, détection mouvement, zoom optique", icon: Camera },
                        { title: "Enregistrement NVR local", desc: "Stockage sécurisé 1-8To, sauvegarde automatique", icon: HardDrive },
                        { title: "Alertes smartphone temps réel", desc: "Notifications push, emails avec captures", icon: Smartphone },
                        { title: "Accès à distance sécurisé", desc: "Application mobile, web, multi-utilisateurs", icon: Monitor },
                        { title: "Intelligence artificielle", desc: "Reconnaissance faciale, détection intrusion, zones", icon: Zap },
                        { title: "Installation discrète", desc: "Câblage invisible, positionnement optimal", icon: Settings }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-md">
                            <item.icon className="w-5 h-5 text-red-500" />
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

            {/* Nouveau service : NAS et stockage */}
            <Card className="overflow-hidden bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/50 dark:to-amber-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                        <HardDrive className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">💾 Installation NAS et Stockage</h3>
                        <Badge className="mt-2 bg-orange-500/20 text-orange-700 dark:text-orange-300">À partir de 180€</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Serveur de stockage réseau (NAS) pour centraliser, partager et sauvegarder 
                      tous vos fichiers avec accès sécurisé depuis n'importe où.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "NAS Synology/QNAP professionnel", desc: "2-8 baies, RAID 1/5/6, évolutif jusqu'à 128To", icon: HardDrive },
                        { title: "Cloud privé personnel", desc: "Vos fichiers accessibles partout, synchronisation", icon: Wifi },
                        { title: "Sauvegarde automatique", desc: "Time Machine, photos smartphone, versioning", icon: Settings },
                        { title: "Partage sécurisé", desc: "Dossiers famille/travail, permissions utilisateurs", icon: Monitor },
                        { title: "Serveur multimédia Plex", desc: "Films, séries, musique sur TV, smartphone", icon: Tv },
                        { title: "VPN intégré", desc: "Accès sécurisé depuis l'extérieur, tunnel chiffré", icon: Zap }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-md">
                            <item.icon className="w-5 h-5 text-orange-500" />
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
                      src="https://i.ibb.co/fdV1Nys2/QNAP-NAS.jpg"
                      alt="Serveur NAS QNAP professionnel"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-orange-500/10" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nouveau service : Setup Gaming */}
            <Card className="overflow-hidden bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/50 dark:to-blue-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative order-2 lg:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Setup gaming professionnel"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cyan-500/10" />
                  </div>
                  <div className="p-12 order-1 lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mr-4">
                        <Gamepad2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">🎮 Setup Gaming Complet</h3>
                        <Badge className="mt-2 bg-cyan-500/20 text-cyan-700 dark:text-cyan-300">À partir de 250€</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Configuration gaming optimale avec PC haute performance, périphériques pro 
                      et optimisation réseau pour une expérience de jeu exceptionnelle.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Optimisation PC gaming", desc: "Overclocking sécurisé, profils GPU, température", icon: Zap },
                        { title: "Périphériques gaming pro", desc: "Clavier mécanique, souris DPI, casque surround", icon: Headphones },
                        { title: "Écran gaming haute fréquence", desc: "144Hz+, G-Sync/FreeSync, temps réponse 1ms", icon: Monitor },
                        { title: "Optimisation réseau gaming", desc: "QoS, ports dédiés, réduction latence", icon: Wifi },
                        { title: "Streaming et capture", desc: "OBS, Streamlabs, éclairage, webcam 4K", icon: Camera },
                        { title: "Bibliothèques de jeux", desc: "Steam, Epic, configuration multi-plateformes", icon: Package }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-md">
                            <item.icon className="w-5 h-5 text-cyan-500" />
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

      {/* Notre processus avec accordéons modernisés */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Notre processus d'installation détaillé
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              De l'évaluation de vos besoins à la formation complète, nous vous accompagnons à chaque étape avec un service sur-mesure
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {[
                {
                  value: "evaluation-besoins",
                  icon: Eye,
                  title: "1. Évaluation complète de vos besoins",
                  subtitle: "Analyse détaillée de votre environnement, usage et objectifs",
                  color: "bg-blue-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Analyse technique approfondie :</h4>
                        <ul className="space-y-3">
                          {[
                            "Audit de votre installation électrique et réseau existant",
                            "Mesure de la qualité Wi-Fi et identification des zones mortes",
                            "Évaluation de vos besoins en performances et stockage",
                            "Analyse de votre budget avec recommandations échelonnées",
                            "Étude de compatibilité avec vos équipements actuels",
                            "Identification des points d'amélioration prioritaires"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Conseil personnalisé :</h4>
                        <ul className="space-y-3">
                          {[
                            "Sélection d'équipements adaptés à votre usage réel",
                            "Comparaison détaillée des options avec pros/cons",
                            "Planification d'évolution future et extensibilité",
                            "Calcul du retour sur investissement",
                            "Conseils de sécurité et de sauvegarde adaptés",
                            "Devis détaillé avec alternatives et options"
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
                  value: "commande-livraison",
                  icon: Package,
                  title: "2. Approvisionnement et logistique",
                  subtitle: "Gestion complète des achats avec garantie du meilleur prix",
                  color: "bg-teal-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Service d'achat optimisé :</h4>
                        <ul className="space-y-3">
                          {[
                            "Recherche comparative chez 10+ fournisseurs partenaires",
                            "Négociation des prix avec nos tarifs professionnels",
                            "Vérification de disponibilité et délais de livraison",
                            "Gestion des garanties constructeur étendues",
                            "Commande groupée pour réduire les coûts de transport",
                            "Suivi temps réel des commandes avec notifications"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Réception et contrôle qualité :</h4>
                        <ul className="space-y-3">
                          {[
                            "Réception sécurisée avec vérification d'intégrité",
                            "Test de fonctionnement de chaque équipement",
                            "Contrôle des accessoires et documentation",
                            "Mise à jour firmware avant installation",
                            "Préparation et organisation par ordre d'installation",
                            "Documentation photographique de l'état neuf"
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
                  value: "preparation-environnement",
                  icon: Settings,
                  title: "3. Préparation avancée de l'environnement",
                  subtitle: "Optimisation complète de votre infrastructure avant installation",
                  color: "bg-purple-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <Monitor className="w-6 h-6 text-purple-500 mr-3" />
                          Infrastructure physique
                        </h4>
                        <ul className="space-y-2">
                          {["Analyse électrique et mise aux normes", "Installation prises réseau Ethernet", "Optimisation éclairage et ergonomie", "Protection surtension et onduleur", "Gestion thermique et ventilation", "Câblage structuré et discret"].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <Wifi className="w-6 h-6 text-purple-500 mr-3" />
                          Optimisation réseau
                        </h4>
                        <ul className="space-y-2">
                          {["Audit complet de la couverture Wi-Fi", "Test débit et latence par zone", "Configuration QoS et priorisation", "Sécurisation avec authentification forte", "Mise en place VLAN si nécessaire", "Optimisation bande passante"].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <HardDrive className="w-6 h-6 text-purple-500 mr-3" />
                          Sécurité et sauvegarde
                        </h4>
                        <ul className="space-y-2">
                          {["Sauvegarde complète données existantes", "Image système de récupération", "Test de restauration avant installation", "Documentation configuration actuelle", "Export paramètres et licences", "Plan de rollback en cas de problème"].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "installation-complete",
                  icon: Wrench,
                  title: "4. Installation et configuration experte",
                  subtitle: "Mise en place professionnelle avec tests approfondis",
                  color: "bg-green-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Installation physique",
                          icon: Wrench,
                          items: ["Déballage méticuleux et protection", "Positionnement ergonomique optimal", "Branchements sécurisés et étiquetés", "Câblage invisible et organisé", "Fixations murales et supports", "Tests de connectivité physique"]
                        },
                        {
                          title: "Configuration système",
                          icon: Monitor,
                          items: ["Démarrage et configuration BIOS/UEFI", "Installation OS avec optimisations", "Configuration réseau et sécurité", "Installation pilotes certifiés", "Mise à jour système complète", "Paramétrage énergétique optimal"]
                        },
                        {
                          title: "Tests et optimisation",
                          icon: Zap,
                          items: ["Tests de performance complets", "Benchmark et monitoring", "Optimisation démarrage système", "Calibrage écrans et périphériques", "Tests de stress et stabilité", "Validation fonctionnalités avancées"]
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
                  value: "formation-avancee",
                  icon: Star,
                  title: "5. Formation approfondie et accompagnement",
                  subtitle: "Apprentissage complet avec documentation personnalisée",
                  color: "bg-orange-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Formation pratique intensive :</h4>
                        <ul className="space-y-3">
                          {[
                            "Session pratique 2-3h selon complexité",
                            "Manipulation guidée de chaque équipement",
                            "Explication des réglages avancés et raccourcis",
                            "Formation sécurité et bonnes pratiques",
                            "Résolution des problèmes courants",
                            "Optimisation workflow personnel"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Support et documentation :</h4>
                        <ul className="space-y-3">
                          {[
                            "Guide d'utilisation personnalisé PDF",
                            "Vidéos tutoriels spécifiques à votre config",
                            "Support prioritaire 6 mois inclus",
                            "Maintenance préventive programmée",
                            "Accès plateforme support en ligne",
                            "Formation utilisateurs additionnels"
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

      {/* Garanties et services inclus étendus */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Nos garanties et services premium inclus
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Un service complet pour votre tranquillité absolue</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Formation approfondie", 
                desc: "Formation pratique 2-3h selon équipement. Vous maîtrisez tout avant notre départ !",
                icon: Star,
                color: "bg-blue-500"
              },
              { 
                title: "Garantie installation 6 mois", 
                desc: "Problème avec notre installation ? Intervention gratuite dans les 6 mois.",
                icon: Award,
                color: "bg-green-500"
              },
              { 
                title: "Support prioritaire", 
                desc: "Ligne directe technicien, réponse sous 2h, assistance à distance incluse.",
                icon: Phone,
                color: "bg-purple-500"
              },
              { 
                title: "Maintenance préventive", 
                desc: "Contrôle annuel gratuit, mises à jour sécurité, optimisation performances.",
                icon: Settings,
                color: "bg-orange-500"
              }
            ].map((garantie, index) => (
              <Card key={index} className="border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${garantie.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <garantie.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">{garantie.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{garantie.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-600/90 hover:to-indigo-600/90 text-white shadow-xl">
              <Wrench className="w-5 h-5 mr-2" />
              Installer mes équipements maintenant
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}