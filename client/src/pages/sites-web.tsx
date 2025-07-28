
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowLeft, Phone, Mail, Globe, Search, Smartphone, Shield } from "lucide-react";

export default function SitesWeb() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goBack = () => {
    window.location.href = '/';
  };

  const features = [
    "Site moderne et beau",
    "Vos clients vous trouvent sur Google",
    "Vous pouvez le modifier vous-même"
  ];

  const packages = [
    {
      name: "Site Vitrine",
      price: "590€",
      description: "Parfait pour présenter votre activité",
      features: [
        "5 pages maximum",
        "Design responsive (mobile/tablette)",
        "Référencement de base",
        "Formulaire de contact",
        "Hébergement 1 an inclus",
        "Formation à la modification"
      ],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop&auto=format&q=80"
    },
    {
      name: "Site Professionnel",
      price: "1200€",
      description: "Pour développer votre présence en ligne",
      features: [
        "10 pages maximum",
        "Blog intégré",
        "Référencement avancé (SEO)",
        "Galerie photos/vidéos",
        "Réservation en ligne",
        "Statistiques de visite",
        "Formation complète"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format&q=80"
    },
    {
      name: "E-commerce",
      price: "2500€",
      description: "Pour vendre vos produits en ligne",
      features: [
        "Boutique en ligne complète",
        "Paiement sécurisé",
        "Gestion des stocks",
        "Suivi des commandes",
        "Espace client",
        "Formation e-commerce",
        "Support prioritaire"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <SeoMeta 
        title="Création de Sites Web Professionnels - Labtek"
        description="Création de sites web modernes et responsives. Vitrine, e-commerce, référencement SEO. Visible sur Google et mobile."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button onClick={goBack} variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Sites Web
              <br />
              <span className="text-green-600">Professionnels</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Vous voulez être trouvé sur internet ? Je crée votre site web pour présenter votre activité. 
              Vos clients pourront voir vos services, vous contacter facilement et vous trouver sur Google.
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-green-600 hover:bg-green-600/90">
              Créer mon site web
            </Button>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi avoir un site web ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Présence en ligne", desc: "Visible 24h/24 sur internet" },
              { icon: Search, title: "Trouvé sur Google", desc: "Vos clients vous trouvent facilement" },
              { icon: Smartphone, title: "Compatible mobile", desc: "Fonctionne sur tous les appareils" },
              { icon: Shield, title: "Site sécurisé", desc: "HTTPS et sauvegardes automatiques" }
            ].map((advantage, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <advantage.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formules */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos formules de sites web</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={pkg.image}
                    alt={`Exemple de ${pkg.name}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold">
                    {pkg.price}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>
                  
                  <div className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={scrollToContact} 
                    className="w-full mt-6 bg-green-600 hover:bg-green-600/90"
                  >
                    Choisir cette formule
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça se passe ?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Rendez-vous", desc: "Discussion de vos besoins et objectifs" },
              { step: "2", title: "Création", desc: "Conception et développement de votre site" },
              { step: "3", title: "Validation", desc: "Vous validez le design et les contenus" },
              { step: "4", title: "Mise en ligne", desc: "Publication et formation à l'utilisation" }
            ].map((phase, index) => (
              <Card key={index} className="text-center p-6">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="font-bold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Inclus dans toutes nos formules</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <Check className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <p className="font-medium">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à créer votre site web ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-nous pour discuter de votre projet et obtenir un devis gratuit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-600/90">
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
