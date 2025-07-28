
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowLeft, Phone, Mail, Monitor, Wifi, Shield, Camera, Tv } from "lucide-react";

export default function InstallationEquipements() {
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
        title="Installation d'Équipements Informatiques - Labtek"
        description="Installation professionnelle d'ordinateurs, imprimantes, Wi-Fi et équipements informatiques. Service à domicile en Essonne et Île-de-France."
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
              Installation d'Équipements
              <br />
              <span className="text-labtek-blue">Informatiques</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Besoin d'un nouvel ordinateur ? D'une imprimante ? D'internet plus rapide ? 
              Nous choisissons le bon matériel pour vous et l'installons chez vous.
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-labtek-blue hover:bg-labtek-blue/90">
              Demander un devis gratuit
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
              "Je vous aide à choisir le bon matériel",
              "J'installe tout chez vous",
              "Je vous explique comment ça marche"
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

      {/* Équipements disponibles */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Équipements disponibles</h2>
          
          <div className="space-y-8">
            {/* Équipements informatiques */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Monitor className="w-8 h-8 text-labtek-blue mr-3" />
                      <h3 className="text-2xl font-bold">💻 Équipements informatiques</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-labtek-blue pl-4">
                        <h4 className="font-semibold">Ordinateurs de bureau et portables (Windows, Mac)</h4>
                        <p className="text-muted-foreground">Configuration et installation complète</p>
                      </div>
                      <div className="border-l-4 border-labtek-violet pl-4">
                        <h4 className="font-semibold">Écrans, claviers, souris, stations d'accueil</h4>
                        <p className="text-muted-foreground">Périphériques et accessoires professionnels</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Imprimantes, scanners, multifonctions</h4>
                        <p className="text-muted-foreground">Installation et configuration réseau</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">NAS (serveur de stockage en réseau)</h4>
                        <p className="text-muted-foreground">Stockage centralisé et partage de fichiers</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Ordinateur de bureau avec écran, clavier et souris"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Équipements réseau et Internet */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=300&fit=crop&auto=format&q=80"
                        alt="Équipements réseau et routeurs Wi-Fi"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-4">
                      <Wifi className="w-8 h-8 text-blue-500 mr-3" />
                      <h3 className="text-2xl font-bold">🌐 Équipements réseau et Internet</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Box Internet, routeurs, répéteurs Wi-Fi</h4>
                        <p className="text-muted-foreground">Optimisation de votre connexion Internet</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Switchs, points d'accès Wi-Fi professionnels</h4>
                        <p className="text-muted-foreground">Infrastructure réseau d'entreprise</p>
                      </div>
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-semibold">Baies de brassage et câblage réseau</h4>
                        <p className="text-muted-foreground">Installation de réseaux filaires structurés</p>
                      </div>
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold">Installation de VPN pour accès distant</h4>
                        <p className="text-muted-foreground">Sécurisation des connexions à distance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Équipements de sécurité informatique */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Shield className="w-8 h-8 text-red-500 mr-3" />
                      <h3 className="text-2xl font-bold">🔐 Équipements de sécurité informatique</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold">Pare-feu (firewall) matériel</h4>
                        <p className="text-muted-foreground">Protection réseau avancée</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-semibold">Contrôle d'accès réseau</h4>
                        <p className="text-muted-foreground">Gestion des autorisations utilisateurs</p>
                      </div>
                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-semibold">Systèmes de sauvegarde physiques</h4>
                        <p className="text-muted-foreground">Disques durs externes, NAS avec RAID</p>
                      </div>
                      <div className="border-l-4 border-orange-600 pl-4">
                        <h4 className="font-semibold">Onduleurs (UPS) pour la protection électrique</h4>
                        <p className="text-muted-foreground">Protection contre les coupures de courant</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Équipements de sécurité informatique"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Équipements de surveillance & domotique */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&auto=format&q=80"
                        alt="Caméras de surveillance et domotique"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-4">
                      <Camera className="w-8 h-8 text-purple-500 mr-3" />
                      <h3 className="text-2xl font-bold">🎥 Équipements de surveillance & domotique</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Caméras IP de sécurité (intérieur / extérieur)</h4>
                        <p className="text-muted-foreground">Surveillance haute définition</p>
                      </div>
                      <div className="border-l-4 border-pink-500 pl-4">
                        <h4 className="font-semibold">Systèmes de vidéosurveillance connectés</h4>
                        <p className="text-muted-foreground">Monitoring à distance via smartphone</p>
                      </div>
                      <div className="border-l-4 border-red-400 pl-4">
                        <h4 className="font-semibold">Alarmes connectées</h4>
                        <p className="text-muted-foreground">Sécurité intelligente et notifications</p>
                      </div>
                      <div className="border-l-4 border-teal-500 pl-4">
                        <h4 className="font-semibold">Objets domotiques</h4>
                        <p className="text-muted-foreground">Prises, ampoules, assistants vocaux</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Équipements audiovisuels et bureautiques */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Tv className="w-8 h-8 text-green-500 mr-3" />
                      <h3 className="text-2xl font-bold">📺 Équipements audiovisuels et bureautiques</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Vidéoprojecteurs, écrans interactifs</h4>
                        <p className="text-muted-foreground">Équipement pour salles de réunion</p>
                      </div>
                      <div className="border-l-4 border-blue-600 pl-4">
                        <h4 className="font-semibold">Systèmes de visioconférence</h4>
                        <p className="text-muted-foreground">Zoom, Teams, Google Meet optimisés</p>
                      </div>
                      <div className="border-l-4 border-violet-500 pl-4">
                        <h4 className="font-semibold">Installation de postes de travail complets</h4>
                        <p className="text-muted-foreground">Bureaux ou salles informatiques</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Équipements audiovisuels et bureautiques"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à installer vos équipements ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-nous pour un devis personnalisé et gratuit
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
