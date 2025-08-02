import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Phone, Mail, Shield, Smartphone, Globe, Star, Users, Building, Zap, Clock, TrendingUp, Eye, Settings, Laptop } from "lucide-react";
import { scrollToContact } from "@/lib/utils";

export default function EmailProfessionnel() {
  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-indigo-950 dark:to-purple-950">
      <SeoMeta 
        title="Email Professionnel - Labtek"
        description="Créez votre adresse email professionnelle @votre-entreprise.fr. Configuration complète sur tous vos appareils. Solution crédible et fiable."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-blue-500/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 container-mobile service-hero-container">
          <Button onClick={goBack} variant="ghost" className="mb-8 hover:bg-white/20 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 hover:bg-indigo-500/30">
                  <Mail className="w-3 h-3 mr-1" />
                  Email Professionnel
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-responsive">
                  <span className="bg-gradient-to-r from-gray-900 via-green-800 to-emerald-800 dark:from-gray-100 dark:via-green-200 dark:to-emerald-200 bg-clip-text text-transparent">
                    Email
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Professionnel
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-responsive">
                  Fini les adresses @gmail.com ! Avec votre email @votre-nom.fr, vous paraissez plus professionnel. 
                  Ça marche sur votre téléphone, tablette et ordinateur automatiquement.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-600/90 hover:to-purple-600/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Mail className="w-5 h-5 mr-2" />
                  Configurer mon email
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open('tel:0768852880', '_self')} className="border-2 hover:bg-white/50 backdrop-blur-sm">
                  <Phone className="w-5 h-5 mr-2" />
                  07 68 85 28 80
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Plus crédible</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">Partout</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Sur tous appareils</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">24h</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Configuration</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop&auto=format&q=80"
                  alt="Email professionnel sur ordinateur et smartphone"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-indigo-500 text-white p-4 rounded-2xl shadow-xl">
                  <Mail className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages avec design moderne */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-500/20 text-green-700 dark:text-green-300">Pourquoi choisir ?</Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Les avantages d'un email professionnel
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Votre crédibilité et votre image de marque n'ont jamais été aussi importantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building, title: "Plus crédible", desc: "Paraissez professionnel avec votre propre domaine", color: "bg-green-500" },
              { icon: Globe, title: "Partout disponible", desc: "Fonctionne sur PC, smartphone et tablette", color: "bg-blue-500" },
              { icon: Shield, title: "Sécurisé", desc: "Protection anti-spam et sécurité renforcée", color: "bg-purple-500" },
              { icon: Users, title: "Facile à retenir", desc: "Vos clients se souviennent de votre nom", color: "bg-orange-500" }
            ].map((avantage, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${avantage.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <avantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{avantage.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{avantage.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions avec nouveau design */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Nos solutions email professionnelles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Choisissez la formule adaptée à vos besoins</p>
          </div>

          <div className="space-y-12">
            {/* Solution basique */}
            <Card className="overflow-hidden bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">📧 Email Simple</h3>
                        <Badge className="mt-2 bg-green-500/20 text-green-700 dark:text-green-300">À partir de 60€/an</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Votre adresse email @votre-nom.fr configurée sur tous vos appareils. 
                      Simple, efficace et professionnel.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "1 adresse email", desc: "contact@votre-entreprise.fr ou prenom@nom.fr", icon: Mail },
                        { title: "Configuration complète", desc: "PC, smartphone, tablette - tout fonctionne", icon: Smartphone },
                        { title: "10 GB de stockage", desc: "Largement suffisant pour un usage normal", icon: Globe }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-md">
                            <item.icon className="w-5 h-5 text-green-500" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Configuration email simple"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-green-500/10" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Solution entreprise */}
            <Card className="overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative order-2 lg:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Solution email entreprise"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-500/10" />
                  </div>
                  <div className="p-12 order-1 lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">🏢 Solution Entreprise</h3>
                        <Badge className="mt-2 bg-blue-500/20 text-blue-700 dark:text-blue-300">À partir de 180€/an</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Plusieurs adresses email pour votre équipe avec calendrier partagé 
                      et stockage cloud professionnel.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "5 adresses email", desc: "contact@, info@, commercial@, support@...", icon: Users },
                        { title: "Calendrier partagé", desc: "Synchronisation équipe, rendez-vous clients", icon: Clock },
                        { title: "50 GB par utilisateur", desc: "Stockage cloud, partage de fichiers", icon: Globe }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-md">
                            <item.icon className="w-5 h-5 text-blue-500" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Configuration avec accordéons modernisés */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Comment nous configurons votre email professionnel
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Un processus simple et complet pour que tout fonctionne parfaitement
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {[
                {
                  value: "consultation-besoins",
                  icon: Eye,
                  title: "Consultation de vos besoins",
                  subtitle: "Analyse de votre activité et définition de votre image email",
                  color: "bg-blue-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Questions que nous vous posons :</h4>
                        <ul className="space-y-3">
                          {[
                            "Quel est le nom exact de votre entreprise ?",
                            "Avez-vous déjà un site internet ou une marque ?",
                            "Combien de personnes vont utiliser l'email ?",
                            "Voulez-vous plusieurs adresses (contact@, info@) ?"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Ce que nous évaluons :</h4>
                        <ul className="space-y-3">
                          {[
                            "Votre secteur d'activité pour choisir l'extension",
                            "Votre budget pour les options avancées",
                            "Vos appareils actuels (PC, Mac, smartphones)",
                            "Vos habitudes de communication professionnelle"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Star className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "domaine",
                  icon: Globe,
                  title: "Création de votre nom de domaine",
                  subtitle: "Réservation de votre-entreprise.fr pour votre usage exclusif",
                  color: "bg-green-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <Globe className="w-6 h-6 text-green-500 mr-3" />
                          Choix du nom
                        </h4>
                        <ul className="space-y-2">
                          {["Nom de votre entreprise", "Votre nom personnel", "Votre secteur d'activité", "Vérification de disponibilité"].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <Settings className="w-6 h-6 text-green-500 mr-3" />
                          Extension recommandée
                        </h4>
                        <ul className="space-y-2">
                          {[".fr pour entreprises françaises", ".com pour activité internationale", ".org pour associations", "Éviter .biz, .info peu crédibles"].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <Check className="w-6 h-6 text-green-500 mr-3" />
                          Exemples d'adresses
                        </h4>
                        <ul className="space-y-2">
                          {["contact@votre-nom.fr", "info@votre-entreprise.fr", "commercial@plombier-paris.fr", "cabinet@avocat-martin.fr"].map((item, index) => (
                            <li key={index} className="text-xs text-gray-600 dark:text-gray-300 font-mono bg-white dark:bg-gray-900 p-2 rounded border">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "creation-comptes",
                  icon: Mail,
                  title: "Création des comptes email",
                  subtitle: "Paramétrage sécurisé de vos boîtes email professionnelles",
                  color: "bg-purple-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Configuration technique :</h4>
                        <ul className="space-y-3">
                          {[
                            "Création des boîtes email sur serveurs français",
                            "Configuration anti-spam et antivirus automatique",
                            "Mise en place des certificats de sécurité SSL",
                            "Activation de la sauvegarde automatique quotidienne"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Adresses couramment créées :</h4>
                        <ul className="space-y-3">
                          {[
                            "contact@ - Pour les demandes générales",
                            "info@ - Pour les informations sur vos services",
                            "commercial@ - Pour les ventes et devis",
                            "support@ - Pour l'assistance clients"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Mail className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "configuration-appareils",
                  icon: Smartphone,
                  title: "Configuration sur tous vos appareils",
                  subtitle: "Installation et synchronisation automatique sur PC, smartphone, tablette",
                  color: "bg-orange-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Ordinateur",
                          icon: Laptop,
                          items: ["Outlook configuré automatiquement", "Thunderbird si vous préférez", "Accès webmail depuis navigateur", "Carnet d'adresses synchronisé"]
                        },
                        {
                          title: "Smartphone",
                          icon: Smartphone,
                          items: ["iPhone configuré avec Mail natif", "Android avec Gmail ou app native", "Notifications push instantanées", "Contacts et calendrier synchronisés"]
                        },
                        {
                          title: "Tablette",
                          icon: Eye,
                          items: ["iPad avec Mail natif configuré", "Tablette Android configurée", "Applications optimisées tablette", "Interface identique partout"]
                        }
                      ].map((category, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <category.icon className="w-6 h-6 text-orange-500 mr-3" />
                            <h4 className="font-semibold text-lg">{category.title}</h4>
                          </div>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )
                },
                {
                  value: "formation-utilisation",
                  icon: Star,
                  title: "Formation à l'utilisation",
                  subtitle: "Apprentissage complet pour maîtriser votre nouvel email professionnel",
                  color: "bg-teal-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Formation pratique incluse :</h4>
                        <ul className="space-y-3">
                          {[
                            "Comment envoyer et recevoir des emails",
                            "Organiser vos emails avec des dossiers",
                            "Gérer les contacts et créer des groupes",
                            "Configurer la signature professionnelle"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Support continu :</h4>
                        <ul className="space-y-3">
                          {[
                            "Guide personnalisé de votre configuration",
                            "Support téléphonique pendant 6 mois",
                            "Aide pour résoudre les problèmes courants",
                            "Conseils pour protéger vos emails"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Star className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                }
              ].map((step, index) => (
                <AccordionItem key={step.value} value={step.value} className="border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <AccordionTrigger className="hover:no-underline px-8 py-6">
                    <div className="flex items-center w-full">
                      <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center mr-6`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{index + 1}. {step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{step.subtitle}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8">
                    {step.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Comparaison avec design moderne */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Gmail vs Email Professionnel
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Voyez la différence pour votre crédibilité</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Gmail */}
            <Card className="border-2 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-red-700 dark:text-red-300">Email Gratuit</CardTitle>
                <p className="text-red-600 dark:text-red-400">jean.dupont@gmail.com</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "❌ Pas professionnel",
                    "❌ Difficile à retenir",
                    "❌ Publicités dans les emails",
                    "❌ Limites de stockage",
                    "❌ Pas de support client"
                  ].map((item, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Email Pro */}
            <Card className="border-2 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-green-700 dark:text-green-300">Email Professionnel</CardTitle>
                <p className="text-green-600 dark:text-green-400">contact@jean-dupont.fr</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "✅ Image professionnelle",
                    "✅ Facile à retenir",
                    "✅ Aucune publicité",
                    "✅ Stockage généreux",
                    "✅ Support technique inclus"
                  ].map((item, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-600/90 hover:to-purple-600/90 text-white shadow-xl">
              <Star className="w-5 h-5 mr-2" />
              Je veux mon email professionnel
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}