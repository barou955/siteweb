import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Phone, Mail, Monitor, Shield, Clock, HeadphonesIcon, CheckCircle, Server, Eye, Zap, Database, Users, BarChart3, AlertTriangle, Bell, Activity, Cpu, HardDrive, Wifi } from "lucide-react";

export default function InfogeranceLegere() {
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
        title="Infogérance Légère - Surveillance Informatique 24h/24 - Labtek"
        description="Service d'infogérance légère pour PME : surveillance continue, support prioritaire, rapports détaillés. Sérénité informatique garantie."
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
              Infogérance Légère
              <br />
              <span className="text-labtek-blue">Surveillance 24h/24</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Nous surveillons votre informatique en continu pour vous alerter dès qu'un problème survient. 
              Plus de mauvaises surprises, votre système est sous contrôle permanent.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <Eye className="w-6 h-6 text-green-500 mr-3" />
                <p className="text-green-700 dark:text-green-300 text-center">
                  <strong>Surveillance automatique 24h/24</strong> - Je veille quand vous dormez !
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
              { text: "Nous surveillons vos équipements 24h/24", icon: Eye },
              { text: "Nous vous alertons dès qu'un problème survient", icon: Bell },
              { text: "Nous vous assistons pour résoudre rapidement", icon: HeadphonesIcon }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-500" />
                    </div>
                    <p className="font-medium">{service.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions d'infogérance détaillées */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions d'infogérance disponibles</h2>

          <div className="space-y-8">
            {/* Surveillance système et performances */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Activity className="w-8 h-8 text-labtek-blue mr-3" />
                      <h3 className="text-2xl font-bold">📊 Surveillance système et performances</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-labtek-blue pl-4">
                        <h4 className="font-semibold">Monitoring des performances CPU/RAM</h4>
                        <p className="text-muted-foreground">Détection des surcharges et ralentissements</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Surveillance de l'espace disque</h4>
                        <p className="text-muted-foreground">Alertes avant saturation des disques</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Contrôle de la température</h4>
                        <p className="text-muted-foreground">Prévention de la surchauffe matérielle</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">Vérification des services critiques</h4>
                        <p className="text-muted-foreground">Applications métier, bases de données, serveurs web</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Tableaux de bord de monitoring système"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Surveillance réseau et connectivité */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&auto=format&q=80"
                        alt="Infrastructure réseau et surveillance"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-4">
                      <Wifi className="w-8 h-8 text-blue-500 mr-3" />
                      <h3 className="text-2xl font-bold">🌐 Surveillance réseau et connectivité</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Monitoring de la bande passante</h4>
                        <p className="text-muted-foreground">Détection des goulots d'étranglement réseau</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Test de connectivité Internet</h4>
                        <p className="text-muted-foreground">Vérification continue de l'accès web</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Surveillance des équipements réseau</h4>
                        <p className="text-muted-foreground">Switchs, routeurs, points d'accès Wi-Fi</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold">Détection d'intrusions</h4>
                        <p className="text-muted-foreground">Alertes en cas d'activité suspecte</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Surveillance sécurité et sauvegardes */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Shield className="w-8 h-8 text-green-500 mr-3" />
                      <h3 className="text-2xl font-bold">🔒 Surveillance sécurité et sauvegardes</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Contrôle des antivirus et mises à jour</h4>
                        <p className="text-muted-foreground">Vérification de l'état de protection</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">Surveillance des sauvegardes</h4>
                        <p className="text-muted-foreground">Contrôle de réussite et intégrité des données</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold">Audit des comptes utilisateurs</h4>
                        <p className="text-muted-foreground">Détection de comptes compromis ou inactifs</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Monitoring des pare-feu</h4>
                        <p className="text-muted-foreground">Vérification des règles et blocages</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Sécurité informatique et surveillance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Surveillance applications métier */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&auto=format&q=80"
                        alt="Applications métier et logiciels professionnels"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-4">
                      <BarChart3 className="w-8 h-8 text-purple-500 mr-3" />
                      <h3 className="text-2xl font-bold">💼 Surveillance applications métier</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Logiciels de comptabilité et gestion</h4>
                        <p className="text-muted-foreground">Sage, EBP, solutions en ligne</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Bases de données</h4>
                        <p className="text-muted-foreground">MySQL, SQL Server, Access</p>
                      </div>
                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-semibold">Serveurs web et e-commerce</h4>
                        <p className="text-muted-foreground">Sites web, boutiques en ligne</p>
                      </div>
                      <div className="border-l-4 border-orange-600 pl-4">
                        <h4 className="font-semibold">Applications spécialisées</h4>
                        <p className="text-muted-foreground">Logiciels métier selon votre secteur</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formules d'infogérance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos formules d'infogérance</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formule Essentiel */}
            <Card className="relative">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">🏢 Essentiel</h3>
                  <p className="text-muted-foreground mb-4">Idéal pour 5-15 postes</p>
                  <div className="text-3xl font-bold text-labtek-blue mb-2">Sur devis</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Surveillance système de base</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Alertes par email</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Support 8h-18h (lun-ven)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Rapport mensuel simple</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Formule Professionnel */}
            <Card className="relative border-2 border-labtek-blue shadow-lg scale-105">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">🚀 Professionnel</h3>
                  <p className="text-muted-foreground mb-4">Parfait pour 15-50 postes</p>
                  <div className="text-3xl font-bold text-labtek-blue mb-2">Sur devis</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Surveillance complète 24h/24</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Alertes SMS + email</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Support étendu 7h-20h</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Rapports détaillés hebdomadaires</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Formule Entreprise */}
            <Card className="relative">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">🏭 Entreprise</h3>
                  <p className="text-muted-foreground mb-4">Pour 50+ postes</p>
                  <div className="text-3xl font-bold text-labtek-blue mb-2">Sur devis</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Surveillance personnalisée</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Support 24h/24 - 7j/7</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">SLA garantie</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Tableau de bord dédié</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">

              <AccordionItem value="etape1" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                      1
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">Audit de votre infrastructure</h3>
                      <p className="text-muted-foreground text-sm">Inventaire complet de vos équipements</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <p className="text-muted-foreground">
                      Nous commençons par faire le tour de votre parc informatique : serveurs, ordinateurs, 
                      équipements réseau, imprimantes... Nous notons tout ce qui doit être surveillé.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Cartographie de tous vos équipements</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Identification des éléments critiques</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Évaluation des risques</li>
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
                      <h3 className="font-bold text-lg">Installation des outils de surveillance</h3>
                      <p className="text-muted-foreground text-sm">Configuration des alertes automatiques</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <p className="text-muted-foreground">
                      Nous installons et configurons des logiciels de surveillance sur vos équipements. 
                      Ces outils nous remontent en temps réel l'état de votre système.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Installation d'agents de monitoring</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Configuration des seuils d'alerte</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Tests de fonctionnement</li>
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
                      <h3 className="font-bold text-lg">Surveillance continue</h3>
                      <p className="text-muted-foreground text-sm">Monitoring 24h/24 automatique</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <p className="text-muted-foreground">
                      Une fois tout en place, la surveillance se fait automatiquement. 
                      Nous recevons les alertes et nous vous contactons immédiatement si nécessaire.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Surveillance automatique 24h/24</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Alertes immédiates en cas de problème</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Rapports réguliers sur l'état du système</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </div>
      </section>

      {/* Pourquoi l'infogérance ? */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir l'infogérance ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Détection précoce des problèmes", icon: AlertTriangle },
              { title: "Réduction des temps d'arrêt", icon: Clock },
              { title: "Tranquillité d'esprit", icon: Shield },
              { title: "Coûts maîtrisés", icon: CheckCircle }
            ].map((avantage, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <avantage.icon className="w-8 h-8 text-green-500" />
                  </div>
                  <p className="font-medium">{avantage.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt pour la surveillance 24h/24 ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-nous pour une consultation gratuite et un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-labtek-blue hover:bg-labtek-blue/90"
              onClick={() => window.open('tel:0781166929', '_self')}
            >
              <Phone className="w-4 h-4 mr-2" />
              07 81 16 69 29
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
