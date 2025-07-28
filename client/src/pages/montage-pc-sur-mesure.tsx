import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowLeft, Phone, Mail, Cpu, HardDrive, Zap, Monitor, Settings, Wrench, Shield, Thermometer, Cable, Gamepad2 } from "lucide-react";

export default function MontagePcSurMesure() {
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
        title="Montage PC sur Mesure - Configuration Gaming et Workstation - Labtek"
        description="Montage de PC sur mesure pour gaming, bureautique et workstation. Composants haut de gamme, conseil personnalisé et garantie 2 ans."
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
              Montage PC
              <br />
              <span className="text-labtek-blue">Sur Mesure</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Je monte votre PC personnalisé selon vos besoins : travail, jeux ou création. 
              Composants de qualité, assemblage professionnel et garantie complète.
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-labtek-blue hover:bg-labtek-blue/90">
              Configurez votre PC
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
              { icon: Phone, title: "Conseil personnalisé", desc: "Évaluation de vos besoins et recommandations" },
              { icon: Settings, title: "Sélection composants", desc: "Choix des meilleurs composants qualité/prix" },
              { icon: Wrench, title: "Assemblage expert", desc: "Montage professionnel avec tests complets" },
              { icon: HardDrive, title: "Installation complète", desc: "Livraison, installation et formation" }
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

      {/* Configurations disponibles */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Configurations disponibles</h2>

          <div className="space-y-8">
            {/* Configuration Bureautique */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Monitor className="w-8 h-8 text-labtek-blue mr-3" />
                      <h3 className="text-2xl font-bold">💼 Configuration Bureautique - À partir de 450€</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Parfaite pour le travail, navigation web, emails et bureautique quotidienne. Silencieuse et économe en énergie.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-labtek-blue pl-4">
                        <h4 className="font-semibold">Processeur 6 cœurs 3.4GHz</h4>
                        <p className="text-muted-foreground">Graphiques intégrés haute performance pour bureautique et multimédia</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">16 GB RAM DDR4 3200MHz</h4>
                        <p className="text-muted-foreground">Double canal pour multitâche fluide, extensible à 32GB</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">SSD 500 GB NVMe ultra-rapide</h4>
                        <p className="text-muted-foreground">Vitesse lecture 3500 MB/s, démarrage en 10 secondes</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">Boîtier compact et silencieux</h4>
                        <p className="text-muted-foreground">Ventilation optimisée, alimentation 500W certifiée 80+ Bronze</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="PC bureautique compact et performant"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Configuration Gaming */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&h=300&fit=crop&auto=format&q=80"
                        alt="PC gaming avec éclairage RGB et refroidissement avancé"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-4">
                      <Gamepad2 className="w-8 h-8 text-purple-500 mr-3" />
                      <h3 className="text-2xl font-bold">🎮 Configuration Gaming - À partir de 1200€</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Pour jouer aux derniers jeux en haute qualité avec fluidité parfaite. Ray Tracing et technologies DLSS/FSR incluses.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Processeur 8 cœurs boost 4.7GHz</h4>
                        <p className="text-muted-foreground">Architecture moderne avec cache L3 optimisé pour gaming</p>
                      </div>
                      <div className="border-l-4 border-pink-500 pl-4">
                        <h4 className="font-semibold">32 GB RAM DDR4 3600MHz</h4>
                        <p className="text-muted-foreground">Double canal haute fréquence, parfait pour gaming et streaming</p>
                      </div>
                      <div className="border-l-4 border-blue-600 pl-4">
                        <h4 className="font-semibold">GPU 16GB VRAM Ray Tracing</h4>
                        <p className="text-muted-foreground">Technologies DLSS/FSR pour performances maximales en 1440p/4K</p>
                      </div>
                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-semibold">SSD 1TB NVMe + HDD 2TB</h4>
                        <p className="text-muted-foreground">Stockage rapide pour jeux + espace supplémentaire</p>
                      </div>
                      <div className="border-l-4 border-orange-600 pl-4">
                        <h4 className="font-semibold">Boîtier ATX RGB avec refroidissement</h4>
                        <p className="text-muted-foreground">Éclairage personnalisable, alimentation 750W Gold modulaire</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Configuration Workstation */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Settings className="w-8 h-8 text-red-500 mr-3" />
                      <h3 className="text-2xl font-bold">🏭 Configuration Workstation - À partir de 2500€</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Pour création 3D, montage vidéo 4K/8K, développement et calculs intensifs. Stabilité et performance professionnelle.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold">Processeur 16 cœurs boost 4.9GHz</h4>
                        <p className="text-muted-foreground">32 threads, cache L3 64MB pour calculs intensifs</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-semibold">64 GB RAM DDR4 ECC</h4>
                        <p className="text-muted-foreground">Mémoire à correction d'erreurs, extensible à 128GB</p>
                      </div>
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold">GPU professionnel 24GB VRAM</h4>
                        <p className="text-muted-foreground">Certifié pour logiciels CAO/3D, accélération CUDA et OpenCL</p>
                      </div>
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-semibold">SSD 2TB NVMe Gen4 + SSD 4TB</h4>
                        <p className="text-muted-foreground">Vitesse 7000 MB/s, stockage projet + sauvegarde automatique</p>
                      </div>
                      <div className="border-l-4 border-teal-500 pl-4">
                        <h4 className="font-semibold">Refroidissement liquide AIO 280mm</h4>
                        <p className="text-muted-foreground">Températures optimales, alimentation 1000W Platinum modulaire</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="PC gaming haute performance avec éclairage RGB"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus de montage détaillé avec accordéons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Mon processus de montage professionnel</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Découvrez en détail chaque étape de l'assemblage de votre PC sur mesure. 
            Un processus rigoureux pour garantir performances et fiabilité.
          </p>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">

              <AccordionItem value="consultation" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">1. Consultation et analyse des besoins</h3>
                      <p className="text-muted-foreground text-sm">Définition de votre usage et budget</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Questionnaire détaillé :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Usage principal (bureautique, gaming, création)</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Logiciels utilisés et performances attendues</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Budget disponible et priorités</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Évolutivité et durée de vie souhaitée</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Recommandations personnalisées :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Configuration optimale pour votre usage</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Alternatives selon budget</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Options d'évolution future</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Devis transparent et détaillé</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="selection" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">2. Sélection et commande des composants</h3>
                      <p className="text-muted-foreground text-sm">Sourcing et compatibilité vérifiée</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <Cpu className="w-5 h-5 text-blue-500 mr-2" />
                          <h4 className="font-semibold">Composants Core</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Processeur dernière génération</li>
                          <li>• Carte mère compatible</li>
                          <li>• Mémoire vive haute fréquence</li>
                          <li>• Carte graphique adaptée</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <HardDrive className="w-5 h-5 text-green-500 mr-2" />
                          <h4 className="font-semibold">Stockage & Alim</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• SSD NVMe ultra-rapide</li>
                          <li>• Stockage supplémentaire</li>
                          <li>• Alimentation certifiée</li>
                          <li>• Câbles modulaires premium</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <Thermometer className="w-5 h-5 text-red-500 mr-2" />
                          <h4 className="font-semibold">Refroidissement</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Boîtier avec ventilation</li>
                          <li>• Ventilateurs silencieux</li>
                          <li>• Refroidissement CPU adapté</li>
                          <li>• Gestion thermique optimale</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="assembly" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <Wrench className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">3. Assemblage professionnel</h3>
                      <p className="text-muted-foreground text-sm">Montage minutieux et câblage optimisé</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Cable className="w-4 h-4 mr-2" />
                          Étapes de montage :
                        </h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><span className="bg-labtek-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>Préparation du boîtier et vérifications</li>
                          <li className="flex items-start"><span className="bg-labtek-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>Installation de l'alimentation</li>
                          <li className="flex items-start"><span className="bg-labtek-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>Montage CPU et ventirad sur carte mère</li>
                          <li className="flex items-start"><span className="bg-labtek-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>Installation de la mémoire vive</li>
                          <li className="flex items-start"><span className="bg-labtek-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">5</span>Fixation carte mère dans le boîtier</li>
                          <li className="flex items-start"><span className="bg-labtek-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">6</span>Installation carte graphique et stockage</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Shield className="w-4 h-4 mr-2" />
                          Qualité et finitions :
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Câblage propre et optimisé</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Gestion du flux d'air</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Protection antistatique</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Vérification des connexions</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Sécurisation des composants</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Nettoyage et finitions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="testing" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">4. Tests et optimisations</h3>
                      <p className="text-muted-foreground text-sm">Validation complète des performances</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold mb-3">Tests matériels :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Test POST et BIOS</li>
                          <li>• Vérification mémoire</li>
                          <li>• Test stabilité CPU</li>
                          <li>• Benchmark GPU</li>
                          <li>• Test stockage</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Tests thermiques :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Températures au repos</li>
                          <li>• Stress test CPU/GPU</li>
                          <li>• Vitesse ventilateurs</li>
                          <li>• Gestion du bruit</li>
                          <li>• Courbes de refroidissement</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Optimisations :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Réglages BIOS/UEFI</li>
                          <li>• Profils XMP mémoire</li>
                          <li>• Optimisation énergétique</li>
                          <li>• Configuration ventilation</li>
                          <li>• Tests de performance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="installation" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                      <HardDrive className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">5. Installation système et livraison</h3>
                      <p className="text-muted-foreground text-sm">Configuration complète et formation</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Installation logicielle :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Windows 11 Pro ou version souhaitée</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Tous les pilotes à jour</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Logiciels essentiels (navigateur, antivirus)</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Mises à jour système complètes</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Configuration utilisateur personnalisée</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Service après-vente :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Livraison et installation chez vous</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Formation à l'utilisation</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Documentation technique remise</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Support technique 6 mois inclus</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Garantie constructeur respectée</li>
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
          <h2 className="text-3xl font-bold text-center mb-12">Mes garanties et services inclus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Phone, title: "Conseil personnalisé gratuit", desc: "Analyse de vos besoins sans engagement" },
              { icon: Shield, title: "Composants garantis 2 ans minimum", desc: "Garantie constructeur + intervention gratuite" }, 
              { icon: Wrench, title: "Montage professionnel certifié", desc: "15 ans d'expérience, assemblage expert" },
              { icon: Zap, title: "Tests complets avant livraison", desc: "Validation performances et stabilité" },
              { icon: HardDrive, title: "Installation et formation incluses", desc: "Mise en service complète à domicile" },
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

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à configurer votre PC sur mesure ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-moi pour une consultation gratuite et un devis personnalisé
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
