
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowLeft, Phone, Mail, Shield, HardDrive, Cloud, AlertTriangle } from "lucide-react";

export default function SecuriteSauvegarde() {
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
        title="Sécurité Informatique et Sauvegarde de Données - Labtek"
        description="Protection complète de vos données : antivirus, sauvegarde automatique, sécurité réseau. Évitez les pertes de données et cyberattaques."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-500/10 to-orange-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button onClick={goBack} variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Sécurité &
              <br />
              <span className="text-red-500">Sauvegarde</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Protégez vos données importantes ! Je sécurise votre ordinateur contre les virus 
              et je sauvegarde automatiquement vos fichiers précieux.
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                <p className="text-red-700 dark:text-red-300">
                  <strong>80% des pannes sont dues à une perte de données.</strong> Ne prenez pas ce risque !
                </p>
              </div>
            </div>
            <Button onClick={scrollToContact} size="lg" className="bg-red-500 hover:bg-red-600">
              Sécuriser mes données
            </Button>
          </div>
        </div>
      </section>

      {/* Problèmes courants */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Les dangers qui vous menacent</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Virus et malwares",
                description: "Ralentissent votre PC et volent vos données"
              },
              {
                title: "Pannes de disque dur",
                description: "Vos photos et documents perdus définitivement"
              },
              {
                title: "Ransomwares",
                description: "Vos fichiers pris en otage contre rançon"
              },
              {
                title: "Vol ou casse",
                description: "Ordinateur volé = tout vos souvenirs perdus"
              }
            ].map((probleme, index) => (
              <Card key={index} className="text-center p-6 border-red-200 dark:border-red-800">
                <CardContent className="p-0">
                  <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{probleme.title}</h3>
                  <p className="text-muted-foreground text-sm">{probleme.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions de sécurité */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Mes solutions de protection</h2>
          
          <div className="space-y-8">
            {/* Antivirus */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Shield className="w-8 h-8 text-green-500 mr-3" />
                      Protection Antivirus
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Bitdefender Total Security (30€/an)</h4>
                        <p className="text-muted-foreground">Protection complète et VPN inclus</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Norton 360 (40€/an)</h4>
                        <p className="text-muted-foreground">Avec sauvegarde cloud 50Go</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Windows Defender (gratuit)</h4>
                        <p className="text-muted-foreground">Optimisation pour usage basique</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Interface antivirus avec shield de protection"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sauvegarde locale */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=500&h=300&fit=crop&auto=format&q=80"
                        alt="Disque dur externe pour sauvegarde de données"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <HardDrive className="w-8 h-8 text-blue-500 mr-3" />
                      Sauvegarde Locale
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-semibold">Disque externe 1To (60€)</h4>
                        <p className="text-muted-foreground">Sauvegarde manuelle simple</p>
                      </div>
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold">NAS Synology (300€)</h4>
                        <p className="text-muted-foreground">Sauvegarde automatique réseau</p>
                      </div>
                      <div className="border-l-4 border-gray-500 pl-4">
                        <h4 className="font-semibold">Configuration incluse</h4>
                        <p className="text-muted-foreground">Planification et tests de récupération</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sauvegarde cloud */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Cloud className="w-8 h-8 text-purple-500 mr-3" />
                      Sauvegarde Cloud
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">Google Drive (2€/mois - 100Go)</h4>
                        <p className="text-muted-foreground">Accessible partout, facile d'usage</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">OneDrive (7€/mois - 1To)</h4>
                        <p className="text-muted-foreground">Intégré à Microsoft Office</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Solutions françaises RGPD</h4>
                        <p className="text-muted-foreground">pCloud, IceDrive pour la confidentialité</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Stockage cloud avec synchronisation sur multiple appareils"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ce que j'inclus */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que je fais pour vous</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Audit de sécurité complet",
              "Installation et configuration antivirus",
              "Mise en place sauvegarde automatique",
              "Test de récupération des données",
              "Formation aux bonnes pratiques",
              "Suivi et maintenance 6 mois"
            ].map((service, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <Check className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <p className="font-medium">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ne perdez plus jamais vos données !</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-moi pour sécuriser vos fichiers importants
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-500 hover:bg-red-600">
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
