import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowLeft, Phone, Mail, Wrench, Clock, MapPin, Zap, Monitor, Wifi, AlertTriangle, Settings, Eye, HeadphonesIcon } from "lucide-react";

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
      <section className="py-20 bg-gradient-to-br from-labtek-blue/10 to-labtek-violet/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button onClick={goBack} variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>

          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Dépannage &
              <br />
              <span className="text-labtek-blue">Assistance</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Votre ordinateur ne marche plus ? Internet ne fonctionne pas ? 
              Nous venons chez vous le réparer rapidement et simplement !
            </p>
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <Zap className="w-6 h-6 text-orange-500 mr-3" />
                <p className="text-orange-700 dark:text-orange-300 font-semibold text-center">
                  Intervention possible le jour même !
                </p>
              </div>
            </div>
            <Button onClick={scrollToContact} size="lg" className="bg-labtek-blue hover:bg-labtek-blue/90">
              <Wrench className="w-5 h-5 mr-2" />
              Demander une intervention
            </Button>
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que nous faisons pour vous</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "Diagnostic rapide", desc: "Identification précise du problème" },
              { icon: Wrench, title: "Réparation sur place", desc: "Intervention directe chez vous" },
              { icon: HeadphonesIcon, title: "Assistance à distance", desc: "Aide immédiate par internet" },
              { icon: Clock, title: "Formation incluse", desc: "Je vous explique pour éviter la récidive" }
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

      {/* Types d'intervention */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos types d'intervention</h2>

          <div className="space-y-8">
            {/* Dépannage à domicile */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <MapPin className="w-8 h-8 text-blue-500 mr-3" />
                      <h3 className="text-2xl font-bold">🏠 Intervention à domicile - Sur devis</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Nous nous déplaçons chez vous avec tout le matériel nécessaire. Diagnostic sur place, 
                      réparation immédiate si possible et conseils personnalisés.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Diagnostic complet</h4>
                        <p className="text-muted-foreground">Identification précise du problème, devis transparent</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Réparation sur place</h4>
                        <p className="text-muted-foreground">Si réparable immédiatement, sinon emport en atelier</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Formation et conseils inclus</h4>
                        <p className="text-muted-foreground">Prévention et bonnes pratiques pour éviter les pannes</p>
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
                    <div className="flex items-center mb-4">
                      <HeadphonesIcon className="w-8 h-8 text-green-500 mr-3" />
                      <h3 className="text-2xl font-bold">💻 Assistance à distance - Sur devis</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Résolution rapide par internet. Nous prenons le contrôle de votre écran pour 
                      diagnostiquer et résoudre de nombreux problèmes sans nous déplacer.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-semibold">Aide immédiate</h4>
                        <p className="text-muted-foreground">Connexion sécurisée, résolution en temps réel</p>
                      </div>
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold">Disponible 7j/7</h4>
                        <p className="text-muted-foreground">Même le weekend pour les urgences</p>
                      </div>
                      <div className="border-l-4 border-gray-500 pl-4">
                        <h4 className="font-semibold">Installation et configuration</h4>
                        <p className="text-muted-foreground">Programmes, mises à jour, paramètres optimisés</p>
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
                    <div className="flex items-center mb-4">
                      <Settings className="w-8 h-8 text-purple-500 mr-3" />
                      <h3 className="text-2xl font-bold">🔧 Maintenance préventive - Sur devis</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Évitez les pannes avec un entretien régulier. Nettoyage, optimisation et 
                      surveillance pour un PC toujours performant.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">Visite mensuelle</h4>
                        <p className="text-muted-foreground">Nettoyage physique et logiciel complet</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold">Mises à jour automatiques</h4>
                        <p className="text-muted-foreground">Windows, antivirus, pilotes toujours à jour</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Surveillance et optimisation</h4>
                        <p className="text-muted-foreground">Performances optimales, prévention des pannes</p>
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

      {/* Processus d'intervention détaillé avec accordéons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Notre processus d'intervention professionnel</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Découvrez en détail chaque étape de mon intervention. Un processus structuré 
            pour résoudre efficacement tous vos problèmes informatiques.
          </p>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">

              <AccordionItem value="contact" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">1. Premier contact et évaluation</h3>
                      <p className="text-muted-foreground text-sm">Compréhension du problème et urgence</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Questions précises :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Quel est exactement le problème ?</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Depuis quand cela dysfonctionne ?</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Messages d'erreur ou comportements ?</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Niveau d'urgence pour votre activité ?</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Planification intervention :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Type d'intervention recommandée</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Estimation durée et coût</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Rendez-vous sous 24h en standard</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Urgence le jour même si nécessaire</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="diagnostic" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">2. Diagnostic approfondi</h3>
                      <p className="text-muted-foreground text-sm">Analyse complète du problème</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <Monitor className="w-5 h-5 text-blue-500 mr-2" />
                          <h4 className="font-semibold">Matériel</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Test composants PC</li>
                          <li>• Vérification connexions</li>
                          <li>• État disque dur/SSD</li>
                          <li>• Températures système</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <Settings className="w-5 h-5 text-green-500 mr-2" />
                          <h4 className="font-semibold">Logiciel</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Analyse système Windows</li>
                          <li>• Scan antivirus complet</li>
                          <li>• Vérification pilotes</li>
                          <li>• État mises à jour</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <Wifi className="w-5 h-5 text-purple-500 mr-2" />
                          <h4 className="font-semibold">Réseau</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Test connexion internet</li>
                          <li>• Configuration Wi-Fi</li>
                          <li>• Paramètres réseau</li>
                          <li>• Sécurité connexion</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="reparation" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                      <Wrench className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">3. Réparation et résolution</h3>
                      <p className="text-muted-foreground text-sm">Intervention technique ciblée</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Wrench className="w-4 h-4 mr-2" />
                          Réparations courantes :
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Nettoyage virus et malwares</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Optimisation performances système</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Récupération de données perdues</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Configuration internet et Wi-Fi</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Installation pilotes et logiciels</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          Cas complexes :
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Emport en atelier si nécessaire</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Remplacement composants défaillants</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Réinstallation complète système</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Migration vers nouveau matériel</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Récupération données disque endommagé</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tests" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">4. Tests et validation</h3>
                      <p className="text-muted-foreground text-sm">Vérification du bon fonctionnement</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold mb-3">Tests système :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Démarrage et arrêt</li>
                          <li>• Performances générales</li>
                          <li>• Stabilité du système</li>
                          <li>• Fonctions principales</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Tests spécifiques :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Programmes utilisés</li>
                          <li>• Connexion internet</li>
                          <li>• Impression si applicable</li>
                          <li>• Périphériques externes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Validation client :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Démonstration réparation</li>
                          <li>• Test avec le client</li>
                          <li>• Explication des corrections</li>
                          <li>• Satisfaction confirmée</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="formation" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">5. Formation et conseils</h3>
                      <p className="text-muted-foreground text-sm">Prévention et bonnes pratiques</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Formation personnalisée :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Explication cause du problème</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Gestes préventifs à adopter</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Signaux d'alerte à surveiller</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Maintenance simple au quotidien</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Suivi et garantie :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Garantie 3 mois sur intervention</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Support téléphonique gratuit</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Conseils d'évolution matériel</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Contact direct pour urgences</li>
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

      {/* Problèmes résolus */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Problèmes que nous résolvons quotidiennement</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "PC lent ou qui plante", desc: "Optimisation performances, nettoyage système" },
              { title: "Plus d'internet ou Wi-Fi", desc: "Configuration réseau, diagnostic connexion" },
              { title: "Virus et fenêtres popup", desc: "Nettoyage complet, protection renforcée" },
              { title: "Écran noir ou bleu", desc: "Diagnostic matériel, réparation système" },
              { title: "Mots de passe oubliés", desc: "Récupération accès Windows, emails, comptes" },
              { title: "Imprimante en panne", desc: "Installation pilotes, configuration réseau" }
            ].map((probleme, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Wrench className="w-12 h-12 text-labtek-blue mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{probleme.title}</h3>
                  <p className="text-muted-foreground text-sm">{probleme.desc}</p>
                </CardContent>
              </Card>
            ))}
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
                <MapPin className="w-16 h-16 text-labtek-blue mx-auto mb-4" />
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
                      <li>• Grigny, Ris-Orangis</li>
                      <li>• Et communes limitrophes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Frais de déplacement :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Moins de 10km : gratuit</li>
                      <li>• 10-20km : 10€</li>
                      <li>• 20-30km : 20€</li>
                      <li>• Urgence weekend : +20€</li>
                      <li>• Intervention soir : +15€</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contrats de maintenance spécifiques dépannage */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-pink-950/20 rounded-xl p-8 border-2 border-orange-200 dark:border-orange-800 shadow-lg">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-md">
                🔧 ASSOCIEZ UN CONTRAT DE MAINTENANCE !
              </div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-2xl font-bold mb-4">💡 Pourquoi un contrat de maintenance préventive ?</h3>
              <p className="text-muted-foreground">
                Évitez les pannes et bénéficiez d'un support prioritaire !
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/80 dark:bg-gray-800/80 p-4 text-center">
                <div className="text-xl mb-2">🏢</div>
                <h4 className="font-bold text-lg mb-2">Essentiel</h4>
                <p className="text-orange-600 dark:text-orange-400 font-medium mb-3">Maintenance de base</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Assistance téléphonique</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>  
                    <span>Diagnostic à distance</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 p-4 text-center border-2 border-labtek-blue">
                <div className="text-xl mb-2">🚀</div>
                <h4 className="font-bold text-lg mb-2">Professionnel</h4>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">Maintenance proactive</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Intervention mensuelle</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Dépannage d'urgence -30%</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 p-4 text-center">
                <div className="text-xl mb-2">🏭</div>
                <h4 className="font-bold text-lg mb-2">Entreprise</h4>
                <p className="text-red-600 dark:text-red-400 font-medium mb-3">Support complet 24/7</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Support technique 24/7</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Technicien dédié équipe</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Maintenance préventive + support prioritaire = tranquillité totale
              </p>
              <Button onClick={scrollToContact} className="bg-orange-500 hover:bg-orange-600 text-white">
                Découvrir les formules complètes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Besoin d'aide maintenant ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Appelez-nous pour une intervention rapide ou une assistance immédiate
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
          <p className="text-sm text-muted-foreground mt-4">
            Réponse garantie sous 2h • Urgence possible le jour même
          </p>
        </div>
      </section>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}