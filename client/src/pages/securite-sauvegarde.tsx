import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowLeft, Phone, Mail, Shield, HardDrive, Cloud, AlertTriangle, Lock, Zap, Eye, Settings, Database, RefreshCw } from "lucide-react";
import { scrollToContact as scrollToContactUtil } from "@/lib/utils";

export default function SecuriteSauvegarde() {
  const scrollToContact = () => {
    scrollToContactUtil();
  };

  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen">
      <SeoMeta 
        title="Sécurité & Sauvegarde - Labtek Services Informatiques"
        description="Solutions de sécurité informatique et sauvegarde de données : antivirus, pare-feu, chiffrement et sauvegarde automatique en Essonne."
        canonical="https://labtek.fr/services/securite-sauvegarde"
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
              Sécurité &
              <br />
              <span className="text-labtek-blue">Sauvegarde</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Protégez vos données importantes ! Nous sécurisons votre ordinateur contre les virus 
              et nous sauvegardons automatiquement vos fichiers précieux.
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                <p className="text-red-700 dark:text-red-300 text-center">
                  <strong>80% des pannes sont dues à une perte de données.</strong> Ne prenez pas ce risque !
                </p>
              </div>
            </div>
            <Button onClick={scrollToContact} size="lg" className="bg-labtek-blue hover:bg-labtek-blue/90">
              <Shield className="w-5 h-5 mr-2" />
              Sécuriser mes données
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
              { icon: Eye, title: "Audit sécurité complet", desc: "Analyse de vos vulnérabilités actuelles" },
              { icon: Shield, title: "Protection antivirus", desc: "Installation et configuration d'antivirus" },
              { icon: Database, title: "Sauvegarde automatique", desc: "Mise en place de sauvegardes régulières" },
              { icon: Settings, title: "Formation sécurité", desc: "Apprentissage des bonnes pratiques" }
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

      {/* Solutions de sécurité */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos solutions de protection</h2>

          <div className="space-y-8">
            {/* Protection Antivirus */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Shield className="w-8 h-8 text-green-500 mr-3" />
                      <h3 className="text-2xl font-bold">🛡️ Protection Antivirus - À partir de 30€/an</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Protection complète contre virus, malwares, ransomwares et menaces en ligne. 
                      Surveillance en temps réel de votre ordinateur.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Bitdefender Total Security (45€/an)</h4>
                        <p className="text-muted-foreground">Protection premium avec VPN intégré et contrôle parental</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Norton 360 (50€/an)</h4>
                        <p className="text-muted-foreground">Avec sauvegarde cloud 50Go et protection identité</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Windows Defender optimisé (gratuit)</h4>
                        <p className="text-muted-foreground">Configuration avancée pour usage basique</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Interface antivirus avec shield de protection"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sauvegarde locale */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=500&h=300&fit=crop&auto=format&q=80"
                        alt="Disque dur externe pour sauvegarde de données"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-4">
                      <HardDrive className="w-8 h-8 text-blue-500 mr-3" />
                      <h3 className="text-2xl font-bold">💾 Sauvegarde Locale - À partir de 60€</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Vos données sauvegardées physiquement chez vous. Accès rapide et contrôle total 
                      sur vos sauvegardes.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-semibold">Disque externe 1To (80€)</h4>
                        <p className="text-muted-foreground">Sauvegarde manuelle simple avec formation</p>
                      </div>
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold">NAS Synology 2 baies (350€)</h4>
                        <p className="text-muted-foreground">Sauvegarde automatique réseau avec redondance</p>
                      </div>
                      <div className="border-l-4 border-gray-500 pl-4">
                        <h4 className="font-semibold">Configuration et formation incluses</h4>
                        <p className="text-muted-foreground">Planification automatique et tests de récupération</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sauvegarde cloud */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Cloud className="w-8 h-8 text-purple-500 mr-3" />
                      <h3 className="text-2xl font-bold">☁️ Sauvegarde Cloud - À partir de 2€/mois</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Vos données sauvegardées en ligne, accessibles partout. Protection contre vol, 
                      incendie et catastrophes naturelles.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">Google Drive (2€/mois - 100Go)</h4>
                        <p className="text-muted-foreground">Accessible partout, intégration avec Gmail</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">OneDrive (7€/mois - 1To)</h4>
                        <p className="text-muted-foreground">Intégré à Microsoft Office 365</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Solutions françaises RGPD</h4>
                        <p className="text-muted-foreground">pCloud, IceDrive pour la confidentialité maximale</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Stockage cloud avec synchronisation sur multiple appareils"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus de sécurisation détaillé avec accordéons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Notre processus de sécurisation complète</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Découvrez en détail chaque étape de la sécurisation de votre environnement informatique. 
            Un processus rigoureux pour une protection maximale.
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
                      <h3 className="font-bold text-lg">1. Audit de sécurité complet</h3>
                      <p className="text-muted-foreground text-sm">Analyse des vulnérabilités existantes</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Analyse système :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />État actuel des protections</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Logiciels installés et mises à jour</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Configuration pare-feu et réseau</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Mots de passe et comptes utilisateurs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Données sensibles :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Localisation des fichiers importants</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />État des sauvegardes existantes</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Évaluation des risques de perte</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Recommandations personnalisées</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="protection" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">2. Installation des protections</h3>
                      <p className="text-muted-foreground text-sm">Mise en place de la sécurité</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <Shield className="w-5 h-5 text-green-500 mr-2" />
                          <h4 className="font-semibold">Antivirus</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Installation solution adaptée</li>
                          <li>• Configuration personnalisée</li>
                          <li>• Mise à jour automatique</li>
                          <li>• Scan complet initial</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <Lock className="w-5 h-5 text-blue-500 mr-2" />
                          <h4 className="font-semibold">Pare-feu</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Configuration avancée</li>
                          <li>• Règles personnalisées</li>
                          <li>• Protection réseau</li>
                          <li>• Blocage menaces</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <Settings className="w-5 h-5 text-purple-500 mr-2" />
                          <h4 className="font-semibold">Système</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Mises à jour automatiques</li>
                          <li>• Comptes utilisateurs sécurisés</li>
                          <li>• Contrôle d'accès</li>
                          <li>• Chiffrement données</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="backup" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                      <Database className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">3. Configuration des sauvegardes</h3>
                      <p className="text-muted-foreground text-sm">Automatisation et planification</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <HardDrive className="w-4 h-4 mr-2" />
                          Sauvegarde locale :
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Installation matériel de sauvegarde</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Configuration logiciel automatisé</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Planification des sauvegardes</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Test de récupération</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Cloud className="w-4 h-4 mr-2" />
                          Sauvegarde cloud :
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Choix solution adaptée</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Synchronisation automatique</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Chiffrement des données</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Accès multi-appareils</li>
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
                        <h4 className="font-semibold mb-3">Tests de sécurité :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Scan antivirus complet</li>
                          <li>• Test pare-feu</li>
                          <li>• Vérification mises à jour</li>
                          <li>• Simulation d'attaque</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Tests de sauvegarde :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Récupération fichier test</li>
                          <li>• Vitesse de sauvegarde</li>
                          <li>• Intégrité des données</li>
                          <li>• Automatisation planifiée</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Documentation :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Guide utilisateur</li>
                          <li>• Procédures d'urgence</li>
                          <li>• Contacts support</li>
                          <li>• Planning maintenance</li>
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
                      <RefreshCw className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">5. Formation et suivi</h3>
                      <p className="text-muted-foreground text-sm">Accompagnement et maintenance</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Formation personnalisée :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Utilisation des outils installés</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Bonnes pratiques sécurité</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Reconnaissance des menaces</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Procédures de récupération</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Suivi et maintenance :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Support technique 6 mois inclus</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Vérifications mensuelles</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Mises à jour sécurité</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Assistance téléphonique</li>
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

      {/* Garanties et services */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos garanties et services inclus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Eye, title: "Audit sécurité gratuit", desc: "Analyse complète de vos vulnérabilités" },
              { icon: Shield, title: "Protection garantie 2 ans", desc: "Intervention gratuite en cas de problème" },
              { icon: Database, title: "Sauvegarde testée et validée", desc: "Récupération garantie de vos données" },
              { icon: Zap, title: "Installation et configuration", desc: "Mise en service complète incluse" },
              { icon: RefreshCw, title: "Formation personnalisée", desc: "Apprentissage des outils installés" },
              { icon: Settings, title: "Support technique 6 mois", desc: "Assistance téléphonique illimitée" }
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

      {/* Contrats de maintenance spécifiques sécurité */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-pink-950/20 rounded-xl p-8 border-2 border-orange-200 dark:border-orange-800 shadow-lg">
            <div className="absolute -top-6 sm:-top-4 left-1/2 transform -translate-x-1/2">
              <div className="maintenance-badge bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-md hidden sm:block">
                🔧 ASSOCIEZ UN CONTRAT DE MAINTENANCE !
              </div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-2xl font-bold mb-4">💡 Pourquoi un contrat de maintenance sécurité ?</h3>
              <p className="text-muted-foreground">
                Maintenez votre protection au plus haut niveau en permanence !
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/80 dark:bg-gray-800/80 p-4 text-center">
                <div className="text-xl mb-2">🛡️</div>
                <h4 className="font-bold text-lg mb-2">Protection Base</h4>
                <p className="text-orange-600 dark:text-orange-400 font-medium mb-3">Sécurité essentielle - 25€/mois</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Surveillance antivirus 24/7</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>  
                    <span>Tests sauvegarde mensuels</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>  
                    <span>Rapport sécurité trimestriel</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 p-4 text-center border-2 border-labtek-blue">
                <div className="text-xl mb-2">🔒</div>
                <h4 className="font-bold text-lg mb-2">Sécurité Pro</h4>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">Protection renforcée - 55€/mois</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Audit vulnérabilités mensuel</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Sauvegarde multi-sites testée</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Formation cyber-sécurité équipe</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 p-4 text-center">
                <div className="text-xl mb-2">🏢</div>
                <h4 className="font-bold text-lg mb-2">Cyber Défense</h4>
                <p className="text-red-600 dark:text-red-400 font-medium mb-3">Protection maximale - Sur devis</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>SOC (Centre opérationnel 24/7)</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Plan reprise activité (PRA)</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Expert cyber-sécurité dédié</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Sécurité renforcée + surveillance continue = protection maximale
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
          <h2 className="text-3xl font-bold mb-8">Prêt à protéger vos données ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-nous pour une consultation gratuite et sécuriser votre environnement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-labtek-blue hover:bg-labtek-blue/90"
              onClick={() => window.open('tel:0768852880', '_self')}
            >
              <Phone className="w-4 h-4 mr-2" />
              07 68 85 2880
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToContact}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contactez-nous !
            </Button>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}