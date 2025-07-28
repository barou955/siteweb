
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowLeft, Phone, Mail, Shield, Smartphone, Globe } from "lucide-react";

export default function EmailProfessionnel() {
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
        title="Email Professionnel @votre-entreprise.fr - Labtek"
        description="Créez votre adresse email professionnelle @votre-nom.fr. Configuration automatique sur tous vos appareils. Hébergement français sécurisé."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button onClick={goBack} variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Email
              <br />
              <span className="text-green-500">Professionnel</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Fini les adresses @gmail.com ! Avec votre email @votre-nom.fr, 
              vous paraissez plus sérieux et professionnel. Ça marche sur tous vos appareils !
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-green-500 hover:bg-green-600">
              Créer mon email pro
            </Button>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi un email professionnel ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Plus crédible",
                description: "contact@votre-entreprise.fr inspire plus confiance que gmail"
              },
              {
                icon: Smartphone,
                title: "Marche partout",
                description: "Sur votre téléphone, tablette et ordinateur automatiquement"
              },
              {
                icon: Globe,
                title: "Vous appartient",
                description: "Votre nom de domaine, votre email pour la vie"
              }
            ].map((avantage, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <avantage.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{avantage.title}</h3>
                  <p className="text-muted-foreground">{avantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formules */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos formules email</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Particulier */}
            <Card className="relative">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Particulier</h3>
                  <div className="text-3xl font-bold text-green-500 mb-2">4€<span className="text-sm text-muted-foreground">/mois</span></div>
                  <p className="text-muted-foreground">Pour les indépendants</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>1 adresse email</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>5 Go de stockage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Anti-spam inclus</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Configuration sur vos appareils</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Choisir cette formule
                </Button>
              </CardContent>
            </Card>

            {/* Professionnel */}
            <Card className="relative border-green-500 border-2">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                Recommandé
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Professionnel</h3>
                  <div className="text-3xl font-bold text-green-500 mb-2">8€<span className="text-sm text-muted-foreground">/mois</span></div>
                  <p className="text-muted-foreground">Pour les entreprises</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>5 adresses email</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>25 Go par boîte</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Site web inclus</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Support prioritaire</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  Choisir cette formule
                </Button>
              </CardContent>
            </Card>

            {/* Entreprise */}
            <Card className="relative">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Entreprise</h3>
                  <div className="text-3xl font-bold text-green-500 mb-2">15€<span className="text-sm text-muted-foreground">/mois</span></div>
                  <p className="text-muted-foreground">Pour les équipes</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Adresses illimitées</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>100 Go par boîte</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Calendrier partagé</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Support téléphonique</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Choisir cette formule
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Configuration incluse */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Configuration incluse</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Smartphone className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-xl font-bold">Sur vos appareils</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>iPhone et Android</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Outlook et Apple Mail</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Accès web depuis partout</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-xl font-bold">Sécurité renforcée</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Serveurs en France</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Sauvegarde automatique</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Chiffrement des données</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt pour votre email professionnel ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-moi pour créer votre adresse email personnalisée
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600">
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
