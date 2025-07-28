
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowLeft, Phone, Mail } from "lucide-react";

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
            {/* Ordinateurs de bureau */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Ordinateurs de bureau</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-labtek-blue pl-4">
                        <h4 className="font-semibold">Entrée de gamme (300€)</h4>
                        <p className="text-muted-foreground">Pour bureautique et navigation web</p>
                        <p className="text-sm">Unité centrale, écran, clavier, souris inclus</p>
                      </div>
                      <div className="border-l-4 border-labtek-violet pl-4">
                        <h4 className="font-semibold">Milieu de gamme (700€)</h4>
                        <p className="text-muted-foreground">Pour usage polyvalent et professionnel</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Stations de travail (1200€)</h4>
                        <p className="text-muted-foreground">Pour création et jeux</p>
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

            {/* Ordinateurs portables */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=300&fit=crop&auto=format&q=80"
                        alt="Ordinateur portable moderne ouvert"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="text-2xl font-bold mb-4">Ordinateurs portables</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Ultraportables (400€)</h4>
                        <p className="text-muted-foreground">Pour mobilité et déplacements</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Polyvalents (800€)</h4>
                        <p className="text-muted-foreground">Écran 15 pouces, usage quotidien</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">Gamers (1800€)</h4>
                        <p className="text-muted-foreground">Carte graphique dédiée et SSD</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Imprimantes */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Imprimantes multifonctions</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-semibold">Jet d'encre couleur (80€)</h4>
                        <p className="text-muted-foreground">Pour impressions occasionnelles</p>
                      </div>
                      <div className="border-l-4 border-gray-500 pl-4">
                        <h4 className="font-semibold">Laser monochrome (150€)</h4>
                        <p className="text-muted-foreground">Pour gros volumes de texte</p>
                      </div>
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold">Avec scanner et Wi-Fi (400€)</h4>
                        <p className="text-muted-foreground">Pour télétravail</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Imprimante multifonction moderne"
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
