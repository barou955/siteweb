
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowLeft, Phone, Mail, Cpu, HardDrive, Zap, Monitor } from "lucide-react";

export default function MontagePcSurMesure() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goBack = () => {
    window.location.href = '/';
  };

  const configurations = [
    {
      name: "Configuration Bureautique",
      price: "450€",
      description: "Parfaite pour navigation web, emails, bureautique",
      specs: {
        processeur: "AMD Ryzen 5 5600G ou Intel i5-12400",
        ram: "16 GB DDR4 3200MHz",
        stockage: "SSD 500 GB NVMe",
        carteGraphique: "Intégrée (suffisante pour bureautique)",
        alimentation: "500W 80+ Bronze",
        boitier: "Micro-ATX avec ventilation optimisée"
      },
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop&auto=format&q=80"
    },
    {
      name: "Configuration Gaming",
      price: "1200€",
      description: "Pour jouer aux derniers jeux en haute qualité",
      specs: {
        processeur: "AMD Ryzen 7 5800X ou Intel i7-12700K",
        ram: "32 GB DDR4 3600MHz",
        stockage: "SSD 1 TB NVMe + HDD 2TB",
        carteGraphique: "RTX 4060 Ti ou RX 7600 XT",
        alimentation: "750W 80+ Gold modulaire",
        boitier: "ATX avec RGB et ventilation avancée"
      },
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=300&fit=crop&auto=format&q=80"
    },
    {
      name: "Configuration Workstation",
      price: "2500€",
      description: "Pour création 3D, montage vidéo, développement",
      specs: {
        processeur: "AMD Ryzen 9 5950X ou Intel i9-13900K",
        ram: "64 GB DDR4 3600MHz ECC",
        stockage: "SSD 2 TB NVMe Gen4 + SSD 4TB SATA",
        carteGraphique: "RTX 4080 ou RTX 4090",
        alimentation: "1000W 80+ Platinum modulaire",
        boitier: "Full Tower avec refroidissement liquide"
      },
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&auto=format&q=80"
    }
  ];

  const services = [
    "Conseil personnalisé selon vos besoins",
    "Sélection des meilleurs composants",
    "Montage professionnel et test complet",
    "Installation et configuration du système",
    "Formation à l'utilisation",
    "Garantie 2 ans sur le montage"
  ];

  return (
    <div className="min-h-screen">
      <SeoMeta 
        title="Montage PC sur Mesure - Configuration Gaming et Workstation - Labtek"
        description="Montage de PC sur mesure pour gaming, bureautique et workstation. Composants haut de gamme, conseil personnalisé et garantie 2 ans."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button onClick={goBack} variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Montage PC
              <br />
              <span className="text-purple-600">Sur Mesure</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Configuration personnalisée selon vos besoins : gaming, bureautique, workstation. 
              Composants de qualité, montage professionnel et garantie 2 ans.
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-purple-600 hover:bg-purple-600/90">
              Configurez votre PC
            </Button>
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Notre service complet</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Check className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <p className="font-medium">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Configurations */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Configurations disponibles</h2>
          
          <div className="space-y-8">
            {configurations.map((config, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto">
                      <img 
                        src={config.image}
                        alt={`PC ${config.name}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg font-bold">
                        {config.price}
                      </div>
                    </div>
                    
                    {/* Informations */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{config.name}</h3>
                      <p className="text-muted-foreground mb-4">{config.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-purple-600" />
                          <span className="text-sm font-medium">Processeur haute performance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <HardDrive className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium">Stockage SSD rapide</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium">Alimentation certifiée</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Monitor className="w-4 h-4 text-orange-600" />
                          <span className="text-sm font-medium">Graphismes optimisés</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Spécifications */}
                    <div className="p-6 bg-gray-50 dark:bg-gray-900">
                      <h4 className="font-bold mb-4">Spécifications techniques</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-medium text-purple-600">Processeur:</span>
                          <p className="text-muted-foreground">{config.specs.processeur}</p>
                        </div>
                        <div>
                          <span className="font-medium text-blue-600">Mémoire:</span>
                          <p className="text-muted-foreground">{config.specs.ram}</p>
                        </div>
                        <div>
                          <span className="font-medium text-green-600">Stockage:</span>
                          <p className="text-muted-foreground">{config.specs.stockage}</p>
                        </div>
                        <div>
                          <span className="font-medium text-orange-600">Carte graphique:</span>
                          <p className="text-muted-foreground">{config.specs.carteGraphique}</p>
                        </div>
                        <div>
                          <span className="font-medium text-red-600">Alimentation:</span>
                          <p className="text-muted-foreground">{config.specs.alimentation}</p>
                        </div>
                        <div>
                          <span className="font-medium text-indigo-600">Boîtier:</span>
                          <p className="text-muted-foreground">{config.specs.boitier}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de montage */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Notre processus de montage</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Consultation", desc: "Analyse de vos besoins et budget" },
              { step: "2", title: "Configuration", desc: "Sélection des composants optimaux" },
              { step: "3", title: "Montage", desc: "Assemblage professionnel et tests" },
              { step: "4", title: "Livraison", desc: "Installation chez vous et formation" }
            ].map((phase, index) => (
              <Card key={index} className="text-center p-6">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="font-bold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à configurer votre PC ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-nous pour une consultation gratuite et un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-600/90">
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
