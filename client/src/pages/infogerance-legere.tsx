import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Phone, Mail, Monitor, Shield, Clock, HeadphonesIcon, CheckCircle, Server, AlertTriangle, Settings, BarChart3, Eye, Zap, Database, RefreshCw } from "lucide-react";

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
        title="Infogérance Légère et Maintenance Préventive - Labtek"
        description="Service d'infogérance légère pour PME : surveillance 24h/24, maintenance préventive, support technique prioritaire. Sérénité informatique garantie."
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
            <Badge className="mb-4 bg-labtek-blue/10 text-labtek-blue border-labtek-blue/20">
              <Server className="w-4 h-4 mr-2" />
              Infogérance
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Infogérance Légère
              <br />
              <span className="text-labtek-blue">& Maintenance Préventive</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Confiez-nous la surveillance et la maintenance de votre infrastructure informatique. 
              Notre service d'infogérance légère vous garantit sérénité et performance au quotidien.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-green-500 mr-3" />
                <p className="text-green-700 dark:text-green-300">
                  <strong>Surveillance proactive 24h/24</strong> pour éviter les pannes avant qu'elles n'arrivent !
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
          <h2 className="text-3xl font-bold text-center mb-12">Ce que je fais pour vous</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "Surveillance proactive", desc: "Monitoring 24h/24 de vos équipements" },
              { icon: Shield, title: "Maintenance préventive", desc: "Interventions planifiées pour éviter les pannes" },
              { icon: AlertTriangle, title: "Alertes en temps réel", desc: "Notifications immédiates en cas de problème" },
              { icon: HeadphonesIcon, title: "Support prioritaire", desc: "Assistance technique privilégiée et rapide" }
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-labtek-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-labtek-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formules d'infogérance */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos formules d'infogérance</h2>
          
          <div className="space-y-8">
            {/* Formule Essentiel */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Monitor className="w-8 h-8 text-blue-500 mr-3" />
                      <h3 className="text-2xl font-bold">🏢 Formule Essentiel - 99€/mois</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Parfaite pour les petites structures (5-15 postes). Surveillance de base, 
                      maintenance préventive et support en heures ouvrées.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Surveillance système de base</h4>
                        <p className="text-muted-foreground">Monitoring serveur, espace disque, performances générales</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Maintenance trimestrielle</h4>
                        <p className="text-muted-foreground">Optimisation, nettoyage, mises à jour de sécurité</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Support 8h-18h du lundi au vendredi</h4>
                        <p className="text-muted-foreground">Assistance téléphonique et à distance incluse</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">Jusqu'à 15 postes de travail</h4>
                        <p className="text-muted-foreground">Surveillance et maintenance de tous vos équipements</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Centre de surveillance informatique pour PME"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Formule Professionnel */}
            <Card className="border-labtek-blue shadow-lg">
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop&auto=format&q=80"
                        alt="Dashboard de monitoring système avancé"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-4">
                      <Badge className="bg-labtek-blue mr-3">Le plus populaire</Badge>
                      <BarChart3 className="w-8 h-8 text-purple-500 mr-3" />
                      <h3 className="text-2xl font-bold">🚀 Formule Professionnel - 199€/mois</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Pour les entreprises en croissance (15-50 postes). Surveillance complète, 
                      maintenance mensuelle et support étendu avec rapports détaillés.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Surveillance complète 24h/24</h4>
                        <p className="text-muted-foreground">Monitoring avancé avec alertes proactives</p>
                      </div>
                      <div className="border-l-4 border-pink-500 pl-4">
                        <h4 className="font-semibold">Maintenance mensuelle planifiée</h4>
                        <p className="text-muted-foreground">Optimisation proactive et préventive</p>
                      </div>
                      <div className="border-l-4 border-blue-600 pl-4">
                        <h4 className="font-semibold">Support étendu 7h-20h</h4>
                        <p className="text-muted-foreground">Assistance prioritaire même le samedi matin</p>
                      </div>
                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-semibold">Jusqu'à 50 postes + serveurs</h4>
                        <p className="text-muted-foreground">Rapports mensuels détaillés et recommandations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Formule Entreprise */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Settings className="w-8 h-8 text-red-500 mr-3" />
                      <h3 className="text-2xl font-bold">🏭 Formule Entreprise - Sur devis</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Pour les grandes organisations (50+ postes). Solution sur mesure avec SLA garantie, 
                      surveillance personnalisée et support 24h/24.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold">Surveillance personnalisée</h4>
                        <p className="text-muted-foreground">Monitoring adapté à votre infrastructure spécifique</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-semibold">Maintenance sur mesure</h4>
                        <p className="text-muted-foreground">Planning adapté à vos contraintes métier</p>
                      </div>
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold">Support 24h/24 - 7j/7</h4>
                        <p className="text-muted-foreground">Astreinte technique avec SLA garantie</p>
                      </div>
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-semibold">Infrastructure illimitée</h4>
                        <p className="text-muted-foreground">Postes, serveurs, équipements réseau, cloud</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Infrastructure entreprise avec monitoring avancé"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus d'infogérance détaillé avec accordéons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Notre processus d'infogérance professionnel</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Découvrez comment nous surveillons et maintenons votre infrastructure informatique. 
            Un processus éprouvé pour une sérénité informatique totale.
          </p>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">

              <AccordionItem value="audit" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">1. Audit et découverte de l'infrastructure</h3>
                      <p className="text-muted-foreground text-sm">Analyse complète de votre environnement</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Inventaire technique :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Cartographie complète du parc informatique</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Identification des serveurs et postes de travail</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Analyse de la configuration réseau</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />État des licences et versions logicielles</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Évaluation des risques :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Points de vulnérabilité identifiés</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Criticité des équipements pour l'activité</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Plan de continuité d'activité existant</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Recommandations d'amélioration prioritaires</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="installation" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">2. Installation des outils de monitoring</h3>
                      <p className="text-muted-foreground text-sm">Déploiement de la surveillance</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <Monitor className="w-5 h-5 text-blue-500 mr-2" />
                          <h4 className="font-semibold">Surveillance système</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Agents de monitoring installés</li>
                          <li>• Surveillance performances CPU/RAM</li>
                          <li>• Contrôle espace disque</li>
                          <li>• Monitoring services critiques</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <Shield className="w-5 h-5 text-green-500 mr-2" />
                          <h4 className="font-semibold">Sécurité</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Surveillance antivirus centralisée</li>
                          <li>• Monitoring des mises à jour</li>
                          <li>• Détection tentatives intrusion</li>
                          <li>• Alertes sécurité automatiques</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <Database className="w-5 h-5 text-purple-500 mr-2" />
                          <h4 className="font-semibold">Réseau et données</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Monitoring bande passante</li>
                          <li>• Surveillance connectivité</li>
                          <li>• Contrôle état des sauvegardes</li>
                          <li>• Alertes en cas de panne</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="surveillance" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">3. Surveillance proactive 24h/24</h3>
                      <p className="text-muted-foreground text-sm">Monitoring continu et alertes</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          Surveillance automatisée :
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Monitoring 24h/24 tous les équipements</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Alertes immédiates par SMS/email</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Seuils personnalisés par équipement</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Escalade automatique selon urgence</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <BarChart3 className="w-4 h-4 mr-2" />
                          Analyse des tendances :
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Analyse des performances historiques</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Prédiction des besoins futurs</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Identification des goulots d'étranglement</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Recommandations d'optimisation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="maintenance" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">4. Maintenance préventive planifiée</h3>
                      <p className="text-muted-foreground text-sm">Interventions régulières programmées</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold mb-3">Maintenance système :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Nettoyage automatisé registres</li>
                          <li>• Défragmentation des disques</li>
                          <li>• Optimisation base de données</li>
                          <li>• Vérification intégrité fichiers</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Mises à jour :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Patches de sécurité Windows</li>
                          <li>• Mises à jour logicielles</li>
                          <li>• Drivers équipements</li>
                          <li>• Firmware matériel</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Contrôles qualité :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Test des sauvegardes</li>
                          <li>• Vérification antivirus</li>
                          <li>• Contrôle performances</li>
                          <li>• Validation connectivité</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="reporting" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                      <RefreshCw className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">5. Reporting et optimisation continue</h3>
                      <p className="text-muted-foreground text-sm">Analyses et recommandations</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Rapports mensuels :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />État de santé de l'infrastructure</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Statistiques de performance</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Incidents résolus et temps de réponse</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Actions de maintenance effectuées</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Recommandations stratégiques :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Plan d'évolution technologique</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Optimisations budget IT</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Projets d'amélioration prioritaires</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Formation utilisateurs ciblée</li>
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

      {/* Services inclus détaillés */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Services inclus dans toutes nos formules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Eye, title: "Surveillance système 24h/24", desc: "Monitoring continu de tous vos équipements" },
              { icon: Shield, title: "Maintenance préventive", desc: "Interventions planifiées selon votre formule" },
              { icon: Zap, title: "Mises à jour automatiques", desc: "Sécurité et correctifs appliqués automatiquement" },
              { icon: Database, title: "Sauvegarde surveillée", desc: "Contrôle et validation de vos sauvegardes" },
              { icon: HeadphonesIcon, title: "Support technique prioritaire", desc: "Assistance téléphonique et à distance" },
              { icon: BarChart3, title: "Rapports de performance", desc: "Analyses mensuelles et recommandations" }
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

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt pour la sérénité informatique ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-nous pour une consultation gratuite et un devis personnalisé
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
