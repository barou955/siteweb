import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Phone, Globe, Search, Smartphone, Monitor, Code, Palette, Star, Award, Zap, Users, Target, FileText, Layout, CheckCircle, GraduationCap } from "lucide-react";
import { scrollToContact } from "@/lib/utils";

export default function SitesWeb() {
  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 dark:from-slate-950 dark:via-teal-950 dark:to-cyan-950">
      <SeoMeta 
        title="Sites Web Professionnels - Labtek"
        description="Création de sites web modernes et responsive. Visibilité sur Google, design professionnel, facile à modifier. Votre présence en ligne clé en main."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-cyan-500/10 to-blue-500/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 container-mobile service-hero-container">
          <Button onClick={goBack} variant="ghost" className="mb-8 hover:bg-white/20 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-teal-500/20 text-teal-700 dark:text-teal-300 border-teal-200 hover:bg-teal-500/30">
                  <Globe className="w-3 h-3 mr-1" />
                  Présence Digitale
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-responsive">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-800 dark:from-gray-100 dark:via-blue-200 dark:to-cyan-200 bg-clip-text text-transparent">
                    Sites Web
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Professionnels
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-responsive">
                  Vous voulez être trouvé sur Google ? Avoir l'air professionnel sur internet ? 
                  Nous créons votre site web moderne et efficace, facile à modifier vous-même !
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-600/90 hover:to-cyan-600/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Globe className="w-5 h-5 mr-2" />
                  Créer mon site web
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open('tel:0768852880', '_self')} className="border-2 hover:bg-white/50 backdrop-blur-sm">
                  <Phone className="w-5 h-5 mr-2" />
                  07 68 85 28 80
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-8">
                <div className="text-center mobile-text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">Visible</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">sur Google</div>
                </div>
                <div className="text-center mobile-text-center">
                  <div className="text-xl sm:text-2xl font-bold text-cyan-600">Responsive</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Mobile/PC</div>
                </div>
                <div className="text-center mobile-text-center">
                  <div className="text-xl sm:text-2xl font-bold text-teal-600">Modifiable</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Par vous</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&auto=format&q=80"
                  alt="Création de site web professionnel"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-teal-500 text-white p-4 rounded-2xl shadow-xl">
                  <Code className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de sites avec design moderne */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-700 dark:text-blue-300">Nos Solutions</Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Types de sites que nous créons
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Du site vitrine au e-commerce, nous avons la solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Site vitrine", desc: "Présenter votre activité et services", color: "bg-blue-500" },
              { icon: Search, title: "Référencement", desc: "Être trouvé sur Google facilement", color: "bg-green-500" },
              { icon: Smartphone, title: "Mobile-friendly", desc: "Parfait sur téléphone et tablette", color: "bg-purple-500" },
              { icon: Monitor, title: "Administration", desc: "Vous modifiez le contenu vous-même", color: "bg-orange-500" }
            ].map((type, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${type.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{type.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{type.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nos offres avec nouveau design */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Nos formules de sites web
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Solutions adaptées à chaque budget</p>
          </div>

          <div className="space-y-12">
            {/* Site Essentiel */}
            <Card className="overflow-hidden bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">🌐 Site Essentiel</h3>
                        <Badge className="mt-2 bg-blue-500/20 text-blue-700 dark:text-blue-300">À partir de 490€</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Site vitrine moderne et professionnel. Parfait pour présenter votre activité 
                      et être trouvé sur Google par vos clients.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Design professionnel", desc: "Template moderne adapté à votre secteur", icon: Palette },
                        { title: "5 pages incluses", desc: "Accueil, Services, À propos, Contact, Mentions", icon: Globe },
                        { title: "Optimisé Google", desc: "Référencement de base pour être trouvé", icon: Search }
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
                  <div className="relative">
                    <img 
                      src="https://i.ibb.co/bgnYw0Mp/carte-visite-logo-site-vitrine-04-16-258.jpg"
                      alt="Site web essentiel sur ordinateur"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-500/10" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Site Premium */}
            <Card className="overflow-hidden bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950/50 dark:to-teal-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative order-2 lg:order-1">
                    <img 
                      src="https://i.ibb.co/ZzXzyLm0/d2ebe389ae77bed7952d0ad5c1037409.jpg"
                      alt="Site web premium responsive"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cyan-500/10" />
                  </div>
                  <div className="p-12 order-1 lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mr-4">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">⭐ Site Premium</h3>
                        <Badge className="mt-2 bg-cyan-500/20 text-cyan-700 dark:text-cyan-300">À partir de 890€</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Site web complet avec interface d'administration. Vous pouvez modifier 
                      textes, photos et ajouter des pages vous-même.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Interface admin", desc: "Modifiez votre site sans compétences techniques", icon: Monitor },
                        { title: "Blog intégré", desc: "Publiez des actualités et améliorez votre SEO", icon: Code },
                        { title: "Formation incluse", desc: "Nous vous apprenons à gérer votre site", icon: Star }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-md">
                            <item.icon className="w-5 h-5 text-cyan-500" />
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

      {/* Notre processus avec accordéons modernisés */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Comment nous créons votre site
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Un processus simple et transparent du brief à la mise en ligne
            </p>
          </div>

          {/* Enhanced Method Section */}
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {[
                {
                  value: "premier-rendez-vous",
                  icon: Users,
                  title: "1. Premier rendez-vous et découverte",
                  subtitle: "Comprendre votre activité et vos besoins",
                  color: "bg-blue-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Questions importantes que nous posons :</h4>
                        <ul className="space-y-3">
                          {[
                            "Que faites-vous exactement comme métier ?",
                            "Qui sont vos clients actuels ?",
                            "Comment ils vous trouvent aujourd'hui ?",
                            "Qu'est-ce qui vous différencie de la concurrence ?",
                            "Que voulez-vous que les gens voient sur votre site ?",
                            "Quel budget avez-vous pour ce projet ?"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Ce que nous analysons :</h4>
                        <ul className="space-y-3">
                          {[
                            "Les sites de vos concurrents",
                            "Ce que cherchent vos clients sur Google",
                            "Les mots-clés de votre secteur",
                            "Les tendances de votre domaine",
                            "Les attentes de votre clientèle",
                            "Les opportunités pour vous démarquer"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Search className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "strategie",
                  icon: Target,
                  title: "2. Stratégie et plan du site",
                  subtitle: "Définir la structure et les objectifs",
                  color: "bg-teal-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Nous définissons ensemble :</h4>
                        <ul className="space-y-3">
                          {[
                            "Les pages nécessaires (accueil, services, contact...)",
                            "Les informations à mettre en avant",
                            "Les photos et images à utiliser",
                            "Le message principal de votre site",
                            "Les actions que vos visiteurs doivent faire",
                            "Les mots-clés pour être trouvé sur Google"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Notre plan d'action :</h4>
                        <ul className="space-y-3">
                          {[
                            "Schéma de la structure de votre site",
                            "Liste des contenus à préparer",
                            "Planning de création étape par étape",
                            "Répartition des tâches entre nous et vous",
                            "Délais réalistes pour chaque étape",
                            "Budget détaillé et transparent"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Target className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "preparation-contenus",
                  icon: FileText,
                  title: "3. Préparation des contenus avec vous",
                  subtitle: "Rassembler tous les éléments nécessaires",
                  color: "bg-purple-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Ce que vous nous fournissez :</h4>
                        <ul className="space-y-3">
                          {[
                            "Vos textes ou infos sur votre activité",
                            "Vos photos (produits, équipe, locaux)",
                            "Votre logo si vous en avez un",
                            "Vos coordonnées complètes",
                            "Vos tarifs ou gammes de prix",
                            "Témoignages de clients satisfaits"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Ce que nous créons :</h4>
                        <ul className="space-y-3">
                          {[
                            "Réécriture des textes pour internet",
                            "Optimisation pour les moteurs de recherche",
                            "Retouches et amélioration des photos",
                            "Création d'un logo simple si besoin",
                            "Rédaction des pages manquantes",
                            "Mise en forme professionnelle"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <FileText className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "conception-design",
                  icon: Palette,
                  title: "4. Conception et design",
                  subtitle: "Création visuelle de votre site",
                  color: "bg-green-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Maquette visuelle",
                          icon: Palette,
                          items: ["Choix des couleurs de votre site", "Sélection des polices de caractère", "Disposition des éléments", "Style général qui vous correspond", "Création du design sur mesure", "Adaptation à votre secteur d'activité"]
                        },
                        {
                          title: "Structure des pages",
                          icon: Layout,
                          items: ["Organisation logique des informations", "Menu de navigation simple", "Boutons d'action bien visibles", "Contact facile à trouver", "Parcours utilisateur optimisé", "Hiérarchie claire des contenus"]
                        },
                        {
                          title: "Adaptabilité",
                          icon: Smartphone,
                          items: ["Version ordinateur optimisée", "Version mobile parfaite", "Version tablette adaptée", "Lisibilité sur tous les écrans", "Navigation tactile fluide", "Chargement rapide partout"]
                        }
                      ].map((category, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <category.icon className="w-6 h-6 text-green-500 mr-3" />
                            <h4 className="font-semibold text-lg">{category.title}</h4>
                          </div>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
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
                  value: "developpement",
                  icon: Code,
                  title: "5. Développement technique",
                  subtitle: "Création du site fonctionnel",
                  color: "bg-orange-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Développement du site :</h4>
                        <ul className="space-y-3">
                          {[
                            "Création de toutes les pages",
                            "Intégration de vos contenus",
                            "Configuration du formulaire de contact",
                            "Optimisation de la vitesse de chargement",
                            "Sécurisation contre les pirates",
                            "Tests sur différents navigateurs"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Optimisation pour Google :</h4>
                        <ul className="space-y-3">
                          {[
                            "Optimisation SEO de base",
                            "Balises et méta-descriptions",
                            "Structure technique optimale",
                            "Plan du site pour les moteurs de recherche",
                            "Temps de chargement rapide",
                            "Configuration pour le référencement local"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Search className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "tests-validation",
                  icon: CheckCircle,
                  title: "6. Tests et validation avec vous",
                  subtitle: "Vérification complète avant mise en ligne",
                  color: "bg-indigo-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Nous testons ensemble :</h4>
                        <ul className="space-y-3">
                          {[
                            "Navigation sur toutes les pages",
                            "Fonctionnement sur téléphone et tablette",
                            "Envoi des formulaires de contact",
                            "Affichage des photos et textes",
                            "Vitesse de chargement",
                            "Compatibilité avec tous les navigateurs"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Vous validez :</h4>
                        <ul className="space-y-3">
                          {[
                            "Le design vous plaît complètement",
                            "Tous vos textes sont corrects",
                            "Les photos sont bien placées",
                            "Les informations de contact sont justes",
                            "La navigation vous semble claire",
                            "Vous êtes fier de montrer votre site"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Star className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "mise-en-ligne",
                  icon: Globe,
                  title: "7. Mise en ligne et formation",
                  subtitle: "Votre site accessible au monde entier",
                  color: "bg-red-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Mise en ligne :</h4>
                        <ul className="space-y-3">
                          {[
                            "Achat et configuration de votre nom de domaine",
                            "Installation sur un hébergement rapide",
                            "Configuration des emails professionnels",
                            "Inscription dans Google My Business",
                            "Soumission à Google pour indexation",
                            "Test final de fonctionnement"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Formation pour l'autonomie :</h4>
                        <ul className="space-y-3">
                          {[
                            "Comment modifier vos textes vous-même",
                            "Comment ajouter de nouvelles photos",
                            "Comment créer une nouvelle page",
                            "Comment voir les statistiques de visite",
                            "Comment répondre aux messages de contact",
                            "Conseils pour faire connaître votre site"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <GraduationCap className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
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
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{step.title}</h3>
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

      {/* Services inclus */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Ce qui est inclus dans nos sites
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Tout ce dont vous avez besoin pour réussir</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Hébergement 1 an offert", 
                desc: "Hébergement français rapide et sécurisé. Nom de domaine en .fr ou .com inclus avec renouvellement simple.",
                icon: Globe,
                color: "bg-blue-500"
              },
              { 
                title: "Référencement Google", 
                desc: "Optimisation SEO de base pour être trouvé. Inscription dans Google My Business et premiers conseils.",
                icon: Search,
                color: "bg-green-500"
              },
              { 
                title: "Formation complète", 
                desc: "Nous vous apprenons à modifier votre site, ajouter des pages et mettre à jour le contenu facilement.",
                icon: Star,
                color: "bg-purple-500"
              }
            ].map((service, index) => (
              <Card key={index} className="border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-600/90 hover:to-cyan-600/90 text-white shadow-xl">
              <Globe className="w-5 h-5 mr-2" />
              Créer mon site maintenant
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}