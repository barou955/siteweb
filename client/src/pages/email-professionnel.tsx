import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowLeft, Phone, Mail, Shield, Smartphone, Globe, Server, Users, Zap } from "lucide-react";

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
      <section className="py-20 bg-gradient-to-br from-labtek-blue/10 to-labtek-violet/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button onClick={goBack} variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Email
              <br />
              <span className="text-labtek-blue">Professionnel</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Fini les adresses @gmail.com ! Avec votre email @votre-nom.fr, 
              vous paraissez plus sérieux et professionnel. Ça marche sur tous vos appareils !
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-labtek-blue hover:bg-labtek-blue/90">
              Créer mon email pro
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
              "Je créé votre nom de domaine personnalisé",
              "Je configure l'email sur tous vos appareils",
              "Je vous forme à son utilisation"
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

      {/* Solutions email disponibles */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions email disponibles</h2>
          
          <div className="space-y-8">
            {/* Email basique pour particuliers */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Mail className="w-8 h-8 text-labtek-blue mr-3" />
                      <h3 className="text-2xl font-bold">📧 Email personnel professionnel</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-labtek-blue pl-4">
                        <h4 className="font-semibold">Formule Essentielle</h4>
                        <p className="text-muted-foreground">1 adresse email, 5 Go de stockage - Sur devis</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Nom de domaine inclus</h4>
                        <p className="text-muted-foreground">votre-nom.fr ou votre-entreprise.com</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Configuration complète</h4>
                        <p className="text-muted-foreground">Sur téléphone, tablette et ordinateur</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">Protection anti-spam</h4>
                        <p className="text-muted-foreground">Filtrage automatique des indésirables</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Interface email professionnel sur ordinateur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Solution entreprise */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop&auto=format&q=80"
                        alt="Équipe travaillant avec emails professionnels"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-4">
                      <Users className="w-8 h-8 text-blue-500 mr-3" />
                      <h3 className="text-2xl font-bold">🏢 Solutions entreprise et équipes</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Formule Professionnelle</h4>
                        <p className="text-muted-foreground">Jusqu'à 5 adresses, 25 Go par boîte - Sur devis</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Formule Entreprise</h4>
                        <p className="text-muted-foreground">Adresses illimitées, 100 Go par boîte - Sur devis</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Calendrier partagé</h4>
                        <p className="text-muted-foreground">Planification d'équipe et synchronisation</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold">Support prioritaire</h4>
                        <p className="text-muted-foreground">Assistance dédiée pour votre entreprise</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Solutions techniques avancées */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Server className="w-8 h-8 text-purple-500 mr-3" />
                      <h3 className="text-2xl font-bold">⚙️ Fonctionnalités techniques</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Serveurs hébergés en France</h4>
                        <p className="text-muted-foreground">Conformité RGPD et sécurité européenne</p>
                      </div>
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-semibold">Sauvegarde automatique</h4>
                        <p className="text-muted-foreground">Vos emails sont protégés et récupérables</p>
                      </div>
                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-semibold">Chiffrement des données</h4>
                        <p className="text-muted-foreground">Communications sécurisées SSL/TLS</p>
                      </div>
                      <div className="border-l-4 border-orange-600 pl-4">
                        <h4 className="font-semibold">Accès webmail</h4>
                        <p className="text-muted-foreground">Consultez vos emails depuis n'importe où</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Centre de données sécurisé pour hébergement email"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Configuration multi-appareils */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop&auto=format&q=80"
                        alt="Synchronisation email sur multiple appareils"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-4">
                      <Smartphone className="w-8 h-8 text-green-500 mr-3" />
                      <h3 className="text-2xl font-bold">📱 Configuration multi-appareils</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Smartphones et tablettes</h4>
                        <p className="text-muted-foreground">iPhone, Android, iPad - Configuration automatique</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Logiciels de messagerie</h4>
                        <p className="text-muted-foreground">Outlook, Apple Mail, Thunderbird</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Synchronisation temps réel</h4>
                        <p className="text-muted-foreground">Emails, contacts, calendrier sur tous appareils</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">Mode hors ligne</h4>
                        <p className="text-muted-foreground">Consultez vos emails même sans internet</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus de création */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Comment je procède</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-labtek-blue text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <span className="font-semibold">Choix du nom de domaine</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pl-11">
                <p className="text-muted-foreground">
                  Je vous aide à choisir le nom de domaine parfait pour votre activité. 
                  Vérification de disponibilité et conseil sur l'extension (.fr, .com, .org).
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-labtek-blue text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <span className="font-semibold">Configuration serveur email</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pl-11">
                <p className="text-muted-foreground">
                  Mise en place de votre boîte email sur des serveurs français sécurisés. 
                  Configuration des protocoles IMAP, SMTP et des paramètres de sécurité.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-labtek-blue text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <span className="font-semibold">Installation sur vos appareils</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pl-11">
                <p className="text-muted-foreground">
                  Configuration automatique sur votre téléphone, tablette et ordinateur. 
                  Paramétrage des notifications et synchronisation des contacts/calendrier.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-labtek-blue text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <span className="font-semibold">Formation et prise en main</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pl-11">
                <p className="text-muted-foreground">
                  Je vous explique comment utiliser votre nouvel email professionnel. 
                  Formation sur la gestion des dossiers, règles automatiques et bonnes pratiques.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi un email professionnel ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Image professionnelle renforcée",
              "Crédibilité auprès des clients",
              "Indépendance des services gratuits",
              "Contrôle total de vos données"
            ].map((avantage, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <Check className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <p className="font-medium">{avantage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt pour votre email professionnel ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-moi pour créer votre adresse email personnalisée
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
