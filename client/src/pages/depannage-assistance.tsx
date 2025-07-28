
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowLeft, Phone, Mail, Wrench, Clock, MapPin, Zap } from "lucide-react";

export default function DepannageAssistance() {
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
        title="Dépannage Informatique à Domicile - Labtek"
        description="Dépannage informatique rapide à domicile en Essonne. PC lent, virus, problème internet, installation. Intervention le jour même possible."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500/10 to-red-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button onClick={goBack} variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Dépannage &
              <br />
              <span className="text-orange-500">Assistance</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Votre ordinateur ne marche plus ? Internet ne fonctionne pas ? 
              Je viens chez vous le réparer rapidement et simplement !
            </p>
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <Zap className="w-6 h-6 text-orange-500 mr-3" />
                <p className="text-orange-700 dark:text-orange-300 font-semibold">
                  Intervention possible le jour même !
                </p>
              </div>
            </div>
            <Button onClick={scrollToContact} size="lg" className="bg-orange-500 hover:bg-orange-600">
              Demander une intervention
            </Button>
          </div>
        </div>
      </section>

      {/* Problèmes résolus */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Problèmes que je résous</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "PC lent ou planté",
                description: "Votre ordinateur rame ou se bloque souvent"
              },
              {
                title: "Plus d'internet",
                description: "Wi-Fi qui ne marche plus, connexion coupée"
              },
              {
                title: "Virus et popup",
                description: "Fenêtres qui s'ouvrent, PC infecté"
              },
              {
                title: "Écran noir",
                description: "L'ordinateur s'allume mais rien à l'écran"
              },
              {
                title: "Mots de passe oubliés",
                description: "Impossible d'accéder à Windows ou emails"
              },
              {
                title: "Imprimante en panne",
                description: "N'imprime plus, erreurs de pilotes"
              }
            ].map((probleme, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <Wrench className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{probleme.title}</h3>
                  <p className="text-muted-foreground text-sm">{probleme.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types d'intervention */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Mes interventions</h2>
          
          <div className="space-y-8">
            {/* Dépannage à domicile */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <MapPin className="w-8 h-8 text-blue-500 mr-3" />
                      À votre domicile
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Diagnostic sur place (60€)</h4>
                        <p className="text-muted-foreground">Je viens voir le problème chez vous</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Réparation immédiate (60€/h)</h4>
                        <p className="text-muted-foreground">Si réparable sur place</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Formation incluse</h4>
                        <p className="text-muted-foreground">Je vous explique comment éviter le problème</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Technicien réparant un ordinateur à domicile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Assistance à distance */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop&auto=format&q=80"
                        alt="Assistance informatique à distance avec écran partagé"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Clock className="w-8 h-8 text-green-500 mr-3" />
                      Assistance à distance
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-semibold">Aide immédiate (30€/h)</h4>
                        <p className="text-muted-foreground">Je prends le contrôle de votre PC</p>
                      </div>
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold">Disponible 7j/7</h4>
                        <p className="text-muted-foreground">Même le weekend pour les urgences</p>
                      </div>
                      <div className="border-l-4 border-gray-500 pl-4">
                        <h4 className="font-semibold">Installation de programmes</h4>
                        <p className="text-muted-foreground">Configuration rapide à distance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Maintenance préventive */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Wrench className="w-8 h-8 text-purple-500 mr-3" />
                      Maintenance préventive
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">Nettoyage mensuel (25€/mois)</h4>
                        <p className="text-muted-foreground">Pour éviter les problèmes</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold">Mises à jour automatiques</h4>
                        <p className="text-muted-foreground">Windows, antivirus, pilotes</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Sauvegarde vérifiée</h4>
                        <p className="text-muted-foreground">Test mensuel de vos sauvegardes</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Maintenance préventive ordinateur avec outils"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Zone d'intervention</h2>
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Essonne (91) et Île-de-France</h3>
                <p className="text-muted-foreground mb-4">
                  Intervention à domicile dans un rayon de 30km autour d'Évry-Courcouronnes
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div>
                    <h4 className="font-semibold mb-2">Villes principales :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Évry-Courcouronnes</li>
                      <li>• Corbeil-Essonnes</li>
                      <li>• Sainte-Geneviève-des-Bois</li>
                      <li>• Viry-Châtillon</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Frais de déplacement :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Moins de 10km : gratuit</li>
                      <li>• 10-20km : 10€</li>
                      <li>• 20-30km : 20€</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Besoin d'aide maintenant ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Appelez-moi pour une intervention rapide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-4 h-4 mr-2" />
              07 81 16 69 29
            </Button>
            <Button size="lg" variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              contact@labtek.fr
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Réponse garantie sous 2h en urgence
          </p>
        </div>
      </section>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
