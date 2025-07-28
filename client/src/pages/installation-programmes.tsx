
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowLeft, Phone, Mail, Download, Shield, Users } from "lucide-react";

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
      <section className="py-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button onClick={goBack} variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Installation de
              <br />
              <span className="text-blue-500">Programmes</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Besoin de Word, Excel, un logiciel de comptabilité ou d'un programme spécialisé ? 
              Je trouve, installe et configure tous vos logiciels. Vos anciens fichiers sont récupérés !
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-blue-500 hover:bg-blue-600">
              Demander une installation
            </Button>
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Ce qui est inclus</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Download,
                title: "Je trouve les bons logiciels",
                description: "Selon vos besoins et votre budget"
              },
              {
                icon: Shield,
                title: "Installation sécurisée",
                description: "Logiciels originaux et licences légales"
              },
              {
                icon: Users,
                title: "Formation personnalisée",
                description: "Je vous explique comment bien les utiliser"
              }
            ].map((service, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <service.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logiciels disponibles */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Logiciels les plus demandés</h2>
          
          <div className="space-y-8">
            {/* Suite Microsoft Office */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Microsoft Office 365</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Personnel (7€/mois)</h4>
                        <p className="text-muted-foreground">Word, Excel, PowerPoint, OneDrive</p>
                        <p className="text-sm">Parfait pour les particuliers</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Professionnel (12€/mois)</h4>
                        <p className="text-muted-foreground">+ Outlook, Teams, SharePoint</p>
                        <p className="text-sm">Idéal pour les entreprises</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Version à vie (150€)</h4>
                        <p className="text-muted-foreground">Office 2021 sans abonnement</p>
                        <p className="text-sm">Pour un usage stable</p>
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
                    <h3 className="text-2xl font-bold mb-4">Logiciels de Comptabilité</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">EBP Compta (300€)</h4>
                        <p className="text-muted-foreground">Pour TPE et auto-entrepreneurs</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold">Sage 50 (800€)</h4>
                        <p className="text-muted-foreground">Comptabilité complète PME</p>
                      </div>
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-semibold">Solutions en ligne (15€/mois)</h4>
                        <p className="text-muted-foreground">Pennylane, Tiime, QuickBooks</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Suite Adobe Creative */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Adobe Creative Suite</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-pink-500 pl-4">
                        <h4 className="font-semibold">Photoshop seul (24€/mois)</h4>
                        <p className="text-muted-foreground">Retouche photo professionnelle</p>
                      </div>
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold">Creative Cloud (60€/mois)</h4>
                        <p className="text-muted-foreground">Tous les logiciels Adobe</p>
                      </div>
                      <div className="border-l-4 border-gray-500 pl-4">
                        <h4 className="font-semibold">Alternatives gratuites</h4>
                        <p className="text-muted-foreground">GIMP, Canva Pro, DaVinci Resolve</p>
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
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-16">
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
      <section id="contact" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à installer vos programmes ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Appelez-moi pour discuter de vos besoins logiciels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
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
