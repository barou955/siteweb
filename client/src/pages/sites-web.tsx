import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowLeft, Phone, Mail, Globe, Search, Smartphone, Shield, Palette, Code, Settings, Zap, Users, BarChart } from "lucide-react";

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

  return (
    <div className="min-h-screen">
      <SeoMeta 
        title="Création de Sites Web Professionnels - Labtek"
        description="Création de sites web modernes et responsives. Vitrine, e-commerce, référencement SEO. Visible sur Google et mobile."
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
              Sites Web
              <br />
              <span className="text-labtek-blue">Professionnels</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Vous voulez être trouvé sur internet ? Je crée votre site web pour présenter votre activité. 
              Vos clients pourront voir vos services, vous contacter facilement et vous trouver sur Google.
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-labtek-blue hover:bg-labtek-blue/90">
              Créer mon site web
            </Button>
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que je fais pour vous</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Analyse de vos besoins", desc: "Étude de votre activité et objectifs" },
              { icon: Palette, title: "Design personnalisé", desc: "Création graphique selon votre image" },
              { icon: Code, title: "Développement professionnel", desc: "Programmation moderne et sécurisée" },
              { icon: Zap, title: "Formation et suivi", desc: "Apprentissage et support continu" }
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <service.icon className="w-12 h-12 text-labtek-blue mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types de sites disponibles */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Types de sites web disponibles</h2>
          
          <div className="space-y-8">
            {/* Site Vitrine */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Globe className="w-8 h-8 text-labtek-blue mr-3" />
                      <h3 className="text-2xl font-bold">🌐 Site Vitrine - Sur devis</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Parfait pour présenter votre activité, vos services et attirer de nouveaux clients. Design moderne et responsive pour tous les appareils.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-labtek-blue pl-4">
                        <h4 className="font-semibold">5 pages maximum optimisées</h4>
                        <p className="text-muted-foreground">Accueil, Services, À propos, Contact, Galerie</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Design responsive (mobile/tablette)</h4>
                        <p className="text-muted-foreground">Adaptation automatique sur tous les écrans</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Référencement de base (SEO)</h4>
                        <p className="text-muted-foreground">Optimisation pour être trouvé sur Google</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">Formulaire de contact intégré</h4>
                        <p className="text-muted-foreground">Hébergement 1 an inclus + formation</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Site vitrine moderne et responsive"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Site Professionnel */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&auto=format&q=80"
                        alt="Site professionnel avec blog et fonctionnalités avancées"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-4">
                      <BarChart className="w-8 h-8 text-purple-500 mr-3" />
                      <h3 className="text-2xl font-bold">📊 Site Professionnel - Sur devis</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Pour développer votre présence en ligne avec des fonctionnalités avancées. Blog, réservations, galeries et analytics inclus.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">10 pages maximum + blog intégré</h4>
                        <p className="text-muted-foreground">Gestion de contenu simplifiée</p>
                      </div>
                      <div className="border-l-4 border-pink-500 pl-4">
                        <h4 className="font-semibold">Référencement avancé (SEO)</h4>
                        <p className="text-muted-foreground">Optimisation poussée pour moteurs de recherche</p>
                      </div>
                      <div className="border-l-4 border-blue-600 pl-4">
                        <h4 className="font-semibold">Galerie photos/vidéos</h4>
                        <p className="text-muted-foreground">Présentation multimedia de vos réalisations</p>
                      </div>
                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-semibold">Réservation en ligne</h4>
                        <p className="text-muted-foreground">Prise de RDV automatisée + statistiques de visite</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Site E-commerce */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Settings className="w-8 h-8 text-red-500 mr-3" />
                      <h3 className="text-2xl font-bold">🛒 Site E-commerce - Sur devis</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Boutique en ligne complète pour vendre vos produits 24h/24. Paiement sécurisé, gestion des stocks et suivi des commandes.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold">Boutique en ligne complète</h4>
                        <p className="text-muted-foreground">Catalogue produits illimité</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-semibold">Paiement sécurisé</h4>
                        <p className="text-muted-foreground">CB, PayPal, virements - Conformité RGPD</p>
                      </div>
                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-semibold">Gestion des stocks automatisée</h4>
                        <p className="text-muted-foreground">Suivi en temps réel, alertes de rupture</p>
                      </div>
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-semibold">Suivi des commandes et espace client</h4>
                        <p className="text-muted-foreground">Dashboard admin + formation e-commerce complète</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Site e-commerce avec interface de gestion"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus de création détaillé avec accordéons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Mon processus de création de site web</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Découvrez comment je crée votre site web de A à Z. Un processus structuré 
            pour garantir un résultat professionnel qui correspond exactement à vos attentes.
          </p>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">

              <AccordionItem value="consultation" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">1. Rendez-vous et analyse des besoins</h3>
                      <p className="text-muted-foreground text-sm">Compréhension de votre projet et objectifs</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Questions importantes :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Quel est votre secteur d'activité ?</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Qui sont vos clients cibles ?</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Quels sont vos objectifs avec ce site ?</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Avez-vous des sites de référence ?</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Définition du projet :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Structure du site (pages nécessaires)</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Fonctionnalités souhaitées</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Budget et délais</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Charte graphique et préférences</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="design" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                      <Palette className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">2. Conception et maquettage</h3>
                      <p className="text-muted-foreground text-sm">Création du design et de l'interface</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <Palette className="w-5 h-5 text-purple-500 mr-2" />
                          <h4 className="font-semibold">Design graphique</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Choix des couleurs et typographies</li>
                          <li>• Création du logo si nécessaire</li>
                          <li>• Définition de l'identité visuelle</li>
                          <li>• Maquettes des pages principales</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <Smartphone className="w-5 h-5 text-blue-500 mr-2" />
                          <h4 className="font-semibold">Interface utilisateur</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Navigation intuitive</li>
                          <li>• Mise en page responsive</li>
                          <li>• Expérience utilisateur optimisée</li>
                          <li>• Tests sur différents appareils</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <h4 className="font-semibold">Validation client</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Présentation des maquettes</li>
                          <li>• Recueil des modifications</li>
                          <li>• Ajustements et finalisation</li>
                          <li>• Validation finale du design</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="development" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">3. Développement et programmation</h3>
                      <p className="text-muted-foreground text-sm">Création technique du site web</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Code className="w-4 h-4 mr-2" />
                          Technologies modernes :
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />HTML5, CSS3, JavaScript moderne</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Framework responsive (Bootstrap, Tailwind)</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />CMS adapté (WordPress, autres)</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Optimisation des performances</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Shield className="w-4 h-4 mr-2" />
                          Sécurité et qualité :
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Code propre et documenté</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Sécurité SSL (HTTPS)</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Sauvegarde automatique</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Tests de compatibilité</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="seo" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <Search className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">4. Référencement et optimisation SEO</h3>
                      <p className="text-muted-foreground text-sm">Visibilité sur Google et moteurs de recherche</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold mb-3">SEO technique :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Optimisation des balises META</li>
                          <li>• Structure URL optimisée</li>
                          <li>• Vitesse de chargement</li>
                          <li>• Sitemap XML</li>
                          <li>• Schema.org (données structurées)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Contenu optimisé :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Recherche de mots-clés</li>
                          <li>• Optimisation des textes</li>
                          <li>• Images optimisées (Alt, poids)</li>
                          <li>• Maillage interne</li>
                          <li>• Call-to-action efficaces</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Référencement local :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Google My Business</li>
                          <li>• Fiche d'établissement</li>
                          <li>• Coordonnées structurées</li>
                          <li>• Avis clients intégrés</li>
                          <li>• Géolocalisation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="launch" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">5. Mise en ligne et formation</h3>
                      <p className="text-muted-foreground text-sm">Publication et accompagnement</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Mise en ligne :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Configuration de l'hébergement</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Installation du certificat SSL</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Configuration des emails</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Tests finaux de fonctionnement</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Sauvegarde initiale</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Formation et suivi :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Formation à la gestion du contenu</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Guide d'utilisation personnalisé</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Support technique 3 mois inclus</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Conseils en référencement</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Suivi des performances</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </div>
      </section>

      {/* Avantages et garanties */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Mes garanties et services inclus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Site moderne et responsive", desc: "Adaptation automatique sur tous les appareils" },
              { icon: Search, title: "Référencement Google inclus", desc: "Optimisation SEO pour être trouvé facilement" },
              { icon: Shield, title: "Sécurité et HTTPS", desc: "Site sécurisé avec certificat SSL" },
              { icon: Zap, title: "Formation personnalisée", desc: "Apprentissage de la gestion de votre site" },
              { icon: Settings, title: "Support technique 3 mois", desc: "Assistance téléphonique et mise à jour" },
              { icon: Smartphone, title: "Compatible tous navigateurs", desc: "Fonctionnement optimal partout" }
            ].map((guarantee, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <guarantee.icon className="w-12 h-12 text-labtek-blue mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{guarantee.title}</h3>
                  <p className="text-sm text-muted-foreground">{guarantee.desc}</p>
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
            Contactez-moi pour discuter de votre projet et obtenir un devis gratuit
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
