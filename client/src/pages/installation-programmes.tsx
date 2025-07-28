import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowLeft, Phone, Mail, Download, Shield, Users, Code, FileText, Image, Briefcase } from "lucide-react";

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
        title="Installation de Programmes et Logiciels - Labtek"
        description="Installation professionnelle de logiciels bureautiques, comptables et métier. Microsoft Office, Adobe, logiciels spécialisés. Formation incluse."
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
              Je trouve, installe et configure tous vos logiciels. Vos anciens fichiers sont récupérés !
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-labtek-blue hover:bg-labtek-blue/90">
              Demander une installation
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
              "Je vous aide à choisir les bons logiciels",
              "J'installe tout avec les licences légales",
              "Je vous forme à leur utilisation"
            ].map((service, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <Check className="w-12 h-12 text-green-500 mx-auto mb-4" />
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
                        <p className="text-muted-foreground">Word, Excel, PowerPoint, OneDrive - À partir de 7€/mois</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Microsoft Office 365 (Professionnel)</h4>
                        <p className="text-muted-foreground">+ Outlook, Teams, SharePoint - À partir de 12€/mois</p>
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
                        <p className="text-muted-foreground">Pennylane, Tiime, QuickBooks - À partir de 15€/mois</p>
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
                        <p className="text-muted-foreground">Retouche photo professionnelle - À partir de 24€/mois</p>
                      </div>
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold">Adobe Creative Cloud</h4>
                        <p className="text-muted-foreground">Suite complète de création - À partir de 60€/mois</p>
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

      {/* Processus d'installation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Comment je procède</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-labtek-blue text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <span className="font-semibold">Analyse de vos besoins</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pl-11">
                <p className="text-muted-foreground">
                  J'évalue vos besoins spécifiques, votre budget et la compatibilité avec votre matériel existant. 
                  Je vous conseille les meilleures solutions selon votre activité.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-labtek-blue text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <span className="font-semibold">Sélection et acquisition des licences</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pl-11">
                <p className="text-muted-foreground">
                  Je me charge de l'achat des licences légales au meilleur prix. 
                  Toutes les licences sont authentiques et vous appartiennent définitivement.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-labtek-blue text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <span className="font-semibold">Installation et configuration</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pl-11">
                <p className="text-muted-foreground">
                  Installation complète avec tous les paramètres optimisés pour votre utilisation. 
                  Récupération et migration de vos anciens fichiers et paramètres.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-labtek-blue text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <span className="font-semibold">Formation personnalisée</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pl-11">
                <p className="text-muted-foreground">
                  Je vous forme aux fonctionnalités essentielles de vos nouveaux logiciels. 
                  Formation adaptée à votre niveau et vos besoins spécifiques.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Mes garanties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Licences 100% légales",
              "Récupération de vos anciens fichiers",
              "Formation personnalisée incluse",
              "Support 30 jours gratuit"
            ].map((garantie, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <Check className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <p className="font-medium">{garantie}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à installer vos programmes ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-moi pour discuter de vos besoins logiciels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-labtek-blue hover:bg-labtek-blue/90">
              <Phone className="w-4 h-4 mr-2" />
              07 81 16 69 29
            </Button>
            <Button size="lg" variant="outline">
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
