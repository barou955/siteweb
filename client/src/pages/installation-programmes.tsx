import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Phone, Mail, Download, Shield, Zap, CheckCircle, FileText, Briefcase, Image, Code, Users, Server, Smartphone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function InstallationProgrammes() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen">
      <SeoMeta 
        title="Installation de Programmes - Labtek Services Informatiques"
        description="Installation et configuration de logiciels professionnels : suites bureautiques, antivirus, logiciels métier et applications spécialisées en Essonne."
        canonical="https://labtek.fr/services/installation-programmes"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-labtek-blue/10 to-labtek-violet/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button onClick={goBack} variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>

          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Installation de
              <br />
              <span className="text-labtek-blue">Programmes</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Besoin de Word, Excel, un logiciel de comptabilité ou d'un programme spécialisé ? 
              Nous trouvons, installons et configurons tous vos logiciels. Vos anciens fichiers sont récupérés !
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-500 mr-3" />
                <p className="text-green-700 dark:text-green-300 text-center">
                  <strong>Licences légales garanties</strong> - Tous vos logiciels en règle !
                </p>
              </div>
            </div>
            <Button onClick={scrollToContact} size="lg" className="bg-labtek-blue hover:bg-labtek-blue/90">
              <CheckCircle className="w-5 h-5 mr-2" />
              Demander un devis
            </Button>
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Services inclus</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Nous vous aidons à choisir les bons logiciels",
              "Nous installons tout avec les licences légales",
              "Nous vous formons à leur utilisation"
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-500" />
                  </div>
                  <p className="font-medium">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logiciels disponibles */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Logiciels disponibles</h2>

          <div className="space-y-8">
            {/* Suite bureautique */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <FileText className="w-8 h-8 text-labtek-blue mr-3" />
                      <h3 className="text-2xl font-bold">📄 Suites bureautiques</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-labtek-blue pl-4">
                        <h4 className="font-semibold">Microsoft Office 365 (Personnel)</h4>
                        <p className="text-muted-foreground">Word, Excel, PowerPoint, OneDrive - Sur devis</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Microsoft Office 365 (Professionnel)</h4>
                        <p className="text-muted-foreground">+ Outlook, Teams, SharePoint - Sur devis</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Office 2021 (Version perpétuelle)</h4>
                        <p className="text-muted-foreground">Achat unique sans abonnement - Sur devis</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">Alternatives gratuites</h4>
                        <p className="text-muted-foreground">LibreOffice, Google Workspace</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Suite Microsoft Office avec Word, Excel et PowerPoint"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Logiciels de comptabilité */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop&auto=format&q=80"
                        alt="Logiciel de comptabilité avec graphiques et données financières"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-4">
                      <Briefcase className="w-8 h-8 text-green-500 mr-3" />
                      <h3 className="text-2xl font-bold">💼 Logiciels de comptabilité et gestion</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">EBP Compta & Gestion</h4>
                        <p className="text-muted-foreground">Pour TPE et auto-entrepreneurs - Sur devis</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold">Sage 50 & 100</h4>
                        <p className="text-muted-foreground">Comptabilité complète PME - Sur devis</p>
                      </div>
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-semibold">Solutions en ligne</h4>
                        <p className="text-muted-foreground">Pennylane, Tiime, QuickBooks - Sur devis</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Logiciels de facturation</h4>
                        <p className="text-muted-foreground">Devis, factures, relances automatiques</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Suite Adobe et création */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Image className="w-8 h-8 text-pink-500 mr-3" />
                      <h3 className="text-2xl font-bold">🎨 Logiciels de création et design</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-pink-500 pl-4">
                        <h4 className="font-semibold">Adobe Photoshop</h4>
                        <p className="text-muted-foreground">Retouche photo professionnelle - Sur devis</p>
                      </div>
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold">Adobe Creative Cloud</h4>
                        <p className="text-muted-foreground">Suite complète de création - Sur devis</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Alternatives professionnelles</h4>
                        <p className="text-muted-foreground">Affinity Suite, CorelDRAW, Canva Pro</p>
                      </div>
                      <div className="border-l-4 border-gray-500 pl-4">
                        <h4 className="font-semibold">Solutions gratuites</h4>
                        <p className="text-muted-foreground">GIMP, Inkscape, DaVinci Resolve</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Interface Adobe Photoshop avec outils de création graphique"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Logiciels techniques et spécialisés */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&h=300&fit=crop&auto=format&q=80"
                        alt="Développement et programmation sur ordinateur"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-4">
                      <Code className="w-8 h-8 text-purple-500 mr-3" />
                      <h3 className="text-2xl font-bold">⚙️ Logiciels techniques et spécialisés</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">AutoCAD & SolidWorks</h4>
                        <p className="text-muted-foreground">Conception 3D et dessin technique</p>
                      </div>
                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-semibold">Environnements de développement</h4>
                        <p className="text-muted-foreground">Visual Studio, IntelliJ, Eclipse</p>
                      </div>
                      <div className="border-l-4 border-orange-600 pl-4">
                        <h4 className="font-semibold">Logiciels métier</h4>
                        <p className="text-muted-foreground">Selon votre secteur d'activité</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold">Logiciels de sécurité</h4>
                        <p className="text-muted-foreground">Antivirus, pare-feu, VPN</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comment je procède */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Comment nous procédons</h2>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">

              <AccordionItem value="etape1" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                      1
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">Analyse de vos besoins</h3>
                      <p className="text-muted-foreground text-sm">Quel logiciel pour quel usage ?</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <p className="text-muted-foreground">
                      Nous évaluons vos besoins spécifiques, votre budget et la compatibilité avec votre matériel existant. 
                      Nous vous conseillons les meilleures solutions selon votre activité.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Étude de vos besoins professionnels</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Vérification de la compatibilité matérielle</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Conseil sur le meilleur rapport qualité-prix</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="etape2" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                      2
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">Acquisition des licences légales</h3>
                      <p className="text-muted-foreground text-sm">Tout en règle, authentique et à votre nom</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <p className="text-muted-foreground">
                      Nous nous chargeons de l'achat des licences légales au meilleur prix. 
                      Toutes les licences sont authentiques et vous appartiennent définitivement.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Licences 100% légales et authentiques</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Recherche des meilleurs tarifs du marché</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Gestion des renouvellements</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="etape3" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                      3
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">Installation et configuration</h3>
                      <p className="text-muted-foreground text-sm">Récupération de vos anciennes données</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <p className="text-muted-foreground">
                      Installation complète avec tous les paramètres optimisés pour votre utilisation. 
                      Récupération et migration de vos anciens fichiers et paramètres.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Installation et activation des logiciels</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Migration de vos anciens fichiers</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Configuration selon vos préférences</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="etape4" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                      4
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">Formation personnalisée</h3>
                      <p className="text-muted-foreground text-sm">Apprenez à utiliser vos nouveaux outils</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <p className="text-muted-foreground">
                      Nous vous formons aux fonctionnalités essentielles de vos nouveaux logiciels. 
                      Formation adaptée à votre niveau et vos besoins spécifiques.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Formation aux fonctions principales</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Trucs et astuces pour gagner du temps</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Support 30 jours après installation</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos garanties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Licences 100% légales", icon: Shield },
              { title: "Récupération de vos anciens fichiers", icon: Download },
              { title: "Formation personnalisée incluse", icon: Users },
              { title: "Support 30 jours gratuit", icon: CheckCircle }
            ].map((garantie, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <garantie.icon className="w-8 h-8 text-green-500" />
                  </div>
                  <p className="font-medium">{garantie.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contrats de maintenance spécifiques programmes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-pink-950/20 rounded-xl p-8 border-2 border-orange-200 dark:border-orange-800 shadow-lg">
            <div className="absolute -top-6 sm:-top-4 left-1/2 transform -translate-x-1/2">
              <div className="maintenance-badge bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-md hidden sm:block">
                🔧 ASSOCIEZ UN CONTRAT DE MAINTENANCE !
              </div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-2xl font-bold mb-4">💡 Pourquoi un contrat de maintenance pour vos logiciels ?</h3>
              <p className="text-muted-foreground">
                Gardez vos programmes à jour, sécurisés et fonctionnels en permanence !
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/80 dark:bg-gray-800/80 p-4 text-center">
                <div className="text-xl mb-2">💾</div>
                <h4 className="font-bold text-lg mb-2">Suite Bureau</h4>
                <p className="text-orange-600 dark:text-orange-400 font-medium mb-3">Suivi logiciels - 20€/mois</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Mises à jour Office/Adobe</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>  
                    <span>Vérification licences actives</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>  
                    <span>Support téléphonique inclus</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 p-4 text-center border-2 border-labtek-blue">
                <div className="text-xl mb-2">🎨</div>
                <h4 className="font-bold text-lg mb-2">Suite Créative</h4>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">Gestion pro - 45€/mois</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Gestion Adobe Creative Cloud</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Formation nouveautés mensuelles</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Optimisation performances</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 p-4 text-center">
                <div className="text-xl mb-2">🏢</div>
                <h4 className="font-bold text-lg mb-2">Parc Logiciel</h4>
                <p className="text-red-600 dark:text-red-400 font-medium mb-3">Gestion centralisée - Sur devis</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Déploiement automatisé</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Inventaire licences complet</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Support prioritaire équipes</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Logiciels toujours à jour + formation continue = productivité maximale
              </p>
              <Button onClick={scrollToContact} className="bg-orange-500 hover:bg-orange-600 text-white">
                Découvrir les formules complètes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à installer vos programmes ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-nous pour discuter de vos besoins logiciels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-labtek-blue hover:bg-labtek-blue/90"
              onClick={() => window.open('tel:0768852880', '_self')}
            >
              <Phone className="w-4 h-4 mr-2" />
              07 68 85 28 80
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                window.location.href = '/';
                setTimeout(() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              <Mail className="w-4 h-4 mr-2" />
              contact@labtek.fr
            </Button>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}