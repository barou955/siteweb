import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Phone, Download, Settings, Package, Laptop, Smartphone, Cloud, Star, Award, Zap, Eye, Clock, Wrench, HardDrive } from "lucide-react";
import { scrollToContact } from "@/lib/utils";

export default function InstallationProgrammes() {
  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-yellow-50 dark:from-slate-950 dark:via-amber-950 dark:to-yellow-950">
      <SeoMeta 
        title="Installation de Programmes et Logiciels - Labtek"
        description="Installation et configuration de logiciels : Office, navigateurs, antivirus, programmes spécialisés. Configuration optimale et formation incluse."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-orange-500/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 container-mobile service-hero-container">
          <Button onClick={goBack} variant="ghost" className="mb-8 hover:bg-white/20 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-200 hover:bg-amber-500/30">
                  <Download className="w-3 h-3 mr-1" />
                  Installation Experte
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-responsive">
                  <span className="bg-gradient-to-r from-gray-900 via-orange-800 to-red-800 dark:from-gray-100 dark:via-orange-200 dark:to-red-200 bg-clip-text text-transparent">
                    Installation
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    de Logiciels
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-responsive">
                  Office, navigateurs, antivirus, logiciels métier... Nous installons et configurons 
                  tous vos programmes pour qu'ils marchent parfaitement ensemble !
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-600/90 hover:to-yellow-600/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Package className="w-5 h-5 mr-2" />
                  Installer mes logiciels
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open('tel:0768852880', '_self')} className="border-2 hover:bg-white/50 backdrop-blur-sm">
                  <Phone className="w-5 h-5 mr-2" />
                  07 68 85 28 80
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-8">
                <div className="text-center mobile-text-center">
                  <div className="text-xl sm:text-2xl font-bold text-orange-600">Compatible</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">100%</div>
                </div>
                <div className="text-center mobile-text-center">
                  <div className="text-xl sm:text-2xl font-bold text-red-600">Formation</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Incluse</div>
                </div>
                <div className="text-center mobile-text-center">
                  <div className="text-xl sm:text-2xl font-bold text-pink-600">Support</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">6 mois</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop&auto=format&q=80"
                  alt="Installation de logiciels et programmes"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white p-4 rounded-2xl shadow-xl">
                  <Download className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de logiciels avec design moderne */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-500/20 text-amber-700 dark:text-amber-300">Nos Spécialités</Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Logiciels que nous installons
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Du plus simple au plus complexe, nous maîtrisons tous les logiciels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Package, title: "Suite Office", desc: "Word, Excel, PowerPoint, Outlook", color: "bg-blue-500" },
              { icon: Settings, title: "Logiciels métier", desc: "Comptabilité, CRM, gestion", color: "bg-purple-500" },
              { icon: Cloud, title: "Outils cloud", desc: "Google Workspace, OneDrive, Dropbox", color: "bg-teal-500" },
              { icon: Smartphone, title: "Apps mobiles", desc: "Synchronisation téléphone-PC", color: "bg-orange-500" }
            ].map((logiciel, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${logiciel.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <logiciel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{logiciel.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{logiciel.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packs logiciels avec nouveau design */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Nos packs d'installation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Solutions complètes selon vos besoins</p>
          </div>

          <div className="space-y-12">
            {/* Pack Essentiel */}
            <Card className="overflow-hidden bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/50 dark:to-green-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                        <Laptop className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">💻 Pack Essentiel</h3>
                        <Badge className="mt-2 bg-blue-500/20 text-blue-700 dark:text-blue-300">À partir de 79€</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Les logiciels indispensables pour un usage quotidien. 
                      Parfait pour la maison et les tâches courantes.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Navigateur web optimisé", desc: "Chrome ou Firefox avec extensions utiles", icon: Settings },
                        { title: "Suite bureautique", desc: "LibreOffice ou version légère d'Office", icon: Package },
                        { title: "Antivirus gratuit", desc: "Protection de base efficace", icon: Settings }
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
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Installation logiciels essentiels"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-500/10" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pack Professionnel */}
            <Card className="overflow-hidden bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative order-2 lg:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Suite Office professionnelle"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-500/10" />
                  </div>
                  <div className="p-12 order-1 lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                        <Package className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">💼 Pack Professionnel</h3>
                        <Badge className="mt-2 bg-green-500/20 text-green-700 dark:text-green-300">À partir de 159€</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Suite complète Microsoft Office avec configuration avancée. 
                      Idéal pour les professionnels et entreprises.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Microsoft Office complet", desc: "Word, Excel, PowerPoint, Outlook, Teams", icon: Package },
                        { title: "Configuration cloud", desc: "OneDrive, synchronisation multi-appareils", icon: Cloud },
                        { title: "Formation personnalisée", desc: "Maîtrise des fonctions avancées", icon: Star }
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

            {/* Pack Spécialisé */}
            <Card className="overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                        <Settings className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">⚙️ Pack Spécialisé</h3>
                        <Badge className="mt-2 bg-purple-500/20 text-purple-700 dark:text-purple-300">Sur devis</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Logiciels métier et applications spécialisées. 
                      Configuration sur mesure selon votre activité.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Logiciels de comptabilité", desc: "Sage, Ciel, EBP... configuration complète", icon: Settings },
                        { title: "Outils de design", desc: "Adobe Creative Suite, AutoCAD, SketchUp", icon: Package },
                        { title: "Apps métier", desc: "CRM, gestion commerciale, e-commerce", icon: Cloud }
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
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Logiciels spécialisés métier"
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

      {/* Notre méthode avec accordéons modernisés */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Notre méthode d'installation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Installation propre, configuration optimale, formation complète
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {[
                {
                  value: "audit-logiciels",
                  icon: Eye,
                  title: "Audit de vos logiciels actuels",
                  subtitle: "Analyse de ce que vous avez déjà et de ce qu'il vous faut",
                  color: "bg-blue-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Nous vérifions :</h4>
                        <ul className="space-y-3">
                          {[
                            "Quels programmes vous utilisez actuellement",
                            "Lesquels fonctionnent bien ou posent problème",
                            "Vos fichiers importants et leurs formats",
                            "Les licences que vous possédez déjà"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Nous identifions :</h4>
                        <ul className="space-y-3">
                          {[
                            "Les besoins non couverts par vos logiciels actuels",
                            "Les programmes obsolètes à remplacer",
                            "Les doublons inutiles qui ralentissent votre PC",
                            "Les logiciels manquants pour votre activité"
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
                  value: "conseil-choix",
                  icon: Settings,
                  title: "Conseil et choix des logiciels",
                  subtitle: "Sélection des programmes parfaits pour vos besoins",
                  color: "bg-teal-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Nos questions pour bien choisir :</h4>
                        <ul className="space-y-3">
                          {[
                            "Pour quoi voulez-vous utiliser chaque programme ?",
                            "Travaillez-vous seul ou en équipe ?",
                            "Quel est votre niveau en informatique ?",
                            "Avez-vous un budget spécifique pour les licences ?"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Nos recommandations :</h4>
                        <ul className="space-y-3">
                          {[
                            "Logiciels adaptés à votre niveau et usage",
                            "Versions compatibles avec votre ordinateur",
                            "Alternatives gratuites quand c'est possible",
                            "Solutions qui évoluent avec vos besoins"
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
                  value: "sauvegarde",
                  icon: HardDrive,
                  title: "Sauvegarde de vos données",
                  subtitle: "Protection de tous vos fichiers importants avant l'installation",
                  color: "bg-purple-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <HardDrive className="w-6 h-6 text-purple-500 mr-3" />
                          Sauvegarde complète
                        </h4>
                        <ul className="space-y-2">
                          {["Documents personnels", "Photos et vidéos", "Emails et contacts", "Favoris internet"].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <Settings className="w-6 h-6 text-purple-500 mr-3" />
                          Paramètres actuels
                        </h4>
                        <ul className="space-y-2">
                          {["Configurations des logiciels", "Mots de passe enregistrés", "Personnalisations", "Licences existantes"].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <Check className="w-6 h-6 text-purple-500 mr-3" />
                          Vérification
                        </h4>
                        <ul className="space-y-2">
                          {["Test de la sauvegarde", "Création de points de restauration", "Double sécurité", "Validation avec vous"].map((item, index) => (
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
                  value: "installation",
                  icon: Download,
                  title: "Installation sécurisée des programmes",
                  subtitle: "Téléchargement et installation professionnelle de vos logiciels",
                  color: "bg-green-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Téléchargement sécurisé",
                          icon: Download,
                          items: ["Sources officielles uniquement", "Vérification des signatures numériques", "Scan antivirus systématique", "Versions les plus récentes et stables"]
                        },
                        {
                          title: "Installation propre",
                          icon: Settings,
                          items: ["Désinstallation propre des anciens logiciels", "Installation pas à pas", "Refus des logiciels parasites", "Optimisation de l'espace disque"]
                        },
                        {
                          title: "Configuration sur mesure",
                          icon: Wrench,
                          items: ["Paramètres adaptés à votre usage", "Création de raccourcis utiles", "Configuration des formats de fichier", "Activation des sauvegardes automatiques"]
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
                  value: "formation-pratique",
                  icon: Star,
                  title: "Formation pratique personnalisée",
                  subtitle: "Apprentissage des nouveaux logiciels à votre rythme",
                  color: "bg-orange-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Votre formation comprend :</h4>
                        <ul className="space-y-3">
                          {[
                            "Prise en main de chaque logiciel installé",
                            "Fonctions de base expliquées simplement",
                            "Astuces pour gagner du temps",
                            "Résolution des problèmes courants"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Support continu :</h4>
                        <ul className="space-y-3">
                          {[
                            "Guide personnalisé de vos logiciels",
                            "Support téléphonique pendant 6 mois",
                            "Assistance pour les mises à jour",
                            "Conseils d'optimisation au fil du temps"
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

      {/* Garanties et services inclus */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Nos services inclus
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Un service complet pour votre réussite</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Formation personnalisée", 
                desc: "Nous vous apprenons à utiliser vos nouveaux logiciels. Prise en main garantie !",
                icon: Star,
                color: "bg-blue-500"
              },
              { 
                title: "Support 6 mois", 
                desc: "Problème avec un logiciel installé ? Nous intervenons gratuitement pendant 6 mois.",
                icon: Award,
                color: "bg-green-500"
              },
              { 
                title: "Mises à jour incluses", 
                desc: "Nous revenons pour les mises à jour importantes et vous conseillons à distance.",
                icon: Zap,
                color: "bg-purple-500"
              }
            ].map((service, index) => (
              <Card key={index} className="border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-600/90 hover:to-yellow-600/90 text-white shadow-xl">
              <Package className="w-5 h-5 mr-2" />
              Installer mes logiciels
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}