import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Phone, Mail, Shield, Cloud, Zap, CheckCircle, Users, Server, Smartphone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-500 mr-3" />
                <p className="text-green-700 dark:text-green-300 text-center">
                  <strong>Hébergement français sécurisé</strong> - Vos données restent en France !
                </p>
              </div>
            </div>
            <Button onClick={scrollToContact} size="lg" className="bg-labtek-blue hover:bg-labtek-blue/90">
              <CheckCircle className="w-5 h-5 mr-2" />
              Demander un devis
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
              "Nous créons votre nom de domaine personnalisé",
              "Nous configurons l'email sur tous vos appareils",
              "Nous vous formons à son utilisation"
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-blue-500" />
                  </div>
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

      {/* Comment je procède */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Comment je procède</h2>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">

              <AccordionItem value="etape1" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                      1
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">Choix du nom de domaine</h3>
                      <p className="text-muted-foreground text-sm">Votre identité numérique personnalisée</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <p className="text-muted-foreground">
                      Nous vous aidons à choisir le nom de domaine parfait pour votre activité. 
                      Vérification de disponibilité et conseil sur l'extension (.fr, .com, .org).
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Recherche et vérification de disponibilité</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Conseil sur la meilleure extension</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Enregistrement et gestion du domaine</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="etape2" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                      2
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">Configuration serveur email</h3>
                      <p className="text-muted-foreground text-sm">Hébergement sécurisé en France</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <p className="text-muted-foreground">
                      Mise en place de votre boîte email sur des serveurs français sécurisés. 
                      Configuration des protocoles IMAP, SMTP et des paramètres de sécurité.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Hébergement sur serveurs français</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Configuration sécurisée IMAP/SMTP</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Protection anti-spam et antivirus</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="etape3" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                      3
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">Installation sur vos appareils</h3>
                      <p className="text-muted-foreground text-sm">Synchronisation automatique partout</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <p className="text-muted-foreground">
                      Configuration automatique sur votre téléphone, tablette et ordinateur. 
                      Paramétrage des notifications et synchronisation des contacts/calendrier.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Configuration sur tous vos appareils</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Synchronisation contacts et calendrier</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Paramétrage des notifications</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="etape4" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                      4
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">Formation et prise en main</h3>
                      <p className="text-muted-foreground text-sm">Maîtrisez votre nouvel email pro</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <p className="text-muted-foreground">
                      Nous vous expliquons comment utiliser votre nouvel email professionnel. 
                      Formation sur la gestion des dossiers, règles automatiques et bonnes pratiques.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Formation à l'utilisation</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Configuration des règles automatiques</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Bonnes pratiques professionnelles</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi un email professionnel ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Image professionnelle renforcée", icon: CheckCircle },
              { title: "Crédibilité auprès des clients", icon: Users },
              { title: "Indépendance des services gratuits", icon: Shield },
              { title: "Contrôle total de vos données", icon: Server }
            ].map((avantage, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <avantage.icon className="w-8 h-8 text-blue-500" />
                  </div>
                  <p className="font-medium">{avantage.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contrats de maintenance spécifiques email */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-pink-950/20 rounded-xl p-8 border-2 border-orange-200 dark:border-orange-800 shadow-lg">
            <div className="absolute -top-6 sm:-top-4 left-1/2 transform -translate-x-1/2">
              <div className="maintenance-badge bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-md hidden sm:block">
                🔧 ASSOCIEZ UN CONTRAT DE MAINTENANCE !
              </div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-2xl font-bold mb-4">💡 Pourquoi un contrat de maintenance email ?</h3>
              <p className="text-muted-foreground">
                Garantissez la continuité de vos communications professionnelles !
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/80 dark:bg-gray-800/80 p-4 text-center">
                <div className="text-xl mb-2">✉️</div>
                <h4 className="font-bold text-lg mb-2">Email Personnel</h4>
                <p className="text-orange-600 dark:text-orange-400 font-medium mb-3">Protection de base - 8€/mois</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Sauvegarde emails hebdomadaire</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>  
                    <span>Anti-spam renforcé 99.5%</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>  
                    <span>Surveillance disponibilité</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 p-4 text-center border-2 border-labtek-blue">
                <div className="text-xl mb-2">💼</div>
                <h4 className="font-bold text-lg mb-2">Email Business</h4>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">Solution complète - 18€/mois</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Sauvegarde quotidienne + archivage</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Sync parfaite multi-appareils</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Support prioritaire 8h-19h</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 p-4 text-center">
                <div className="text-xl mb-2">🏢</div>
                <h4 className="font-bold text-lg mb-2">Mail Entreprise</h4>
                <p className="text-red-600 dark:text-red-400 font-medium mb-3">Infrastructure premium - Sur devis</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Haute disponibilité 99.9%</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Serveurs dédiés redondants</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Admin messagerie dédié</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Email sécurisé + maintenance = communication sans interruption
              </p>
              <Button onClick={scrollToContact} className="bg-orange-500 hover:bg-orange-600 text-white">
                Découvrir les formules complètes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt pour votre email professionnel ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-nous pour créer votre adresse email personnalisée
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-labtek-blue hover:bg-labtek-blue/90"
              onClick={() => window.open('tel:0768852880', '_self')}
            >
              <Phone className="w-4 h-4 mr-2" />
              07 68 85 28 80
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = '/#contact'}
            >
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