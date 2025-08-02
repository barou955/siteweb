import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Phone, GraduationCap, Users, Clock, Target, BookOpen, Lightbulb, Award, TrendingUp, Eye, Star, Zap, Settings, Laptop, Headphones } from "lucide-react";
import { scrollToContact } from "@/lib/utils";

export default function FormationAccompagnement() {
  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50 to-pink-50 dark:from-slate-950 dark:via-rose-950 dark:to-pink-950">
      <SeoMeta 
        title="Formation & Accompagnement Informatique - Labtek"
        description="Formations informatiques personnalisées : bureautique, internet, smartphones. Accompagnement adapté à votre rythme pour tous niveaux."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-pink-500/10 to-red-500/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <Button onClick={goBack} variant="ghost" className="mb-8 hover:bg-white/20 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-200 hover:bg-rose-500/30">
                  <GraduationCap className="w-3 h-3 mr-1" />
                  Formation Personnalisée
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 dark:from-gray-100 dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent">
                    Formation &
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Accompagnement
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  Vous voulez apprendre à mieux utiliser votre ordinateur, smartphone ou internet ? 
                  Nous vous formons à votre rythme, chez vous, sans stress !
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-600/90 hover:to-pink-600/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Commencer ma formation
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open('tel:0768852880', '_self')} className="border-2 hover:bg-white/50 backdrop-blur-sm">
                  <Phone className="w-5 h-5 mr-2" />
                  07 68 85 28 80
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">À domicile</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Chez vous</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">Votre rythme</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Pas de stress</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">Pratique</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Directement utile</div>
                </div>
              </div>
            </div>

            <div className="relative ml-8">
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format&q=80"
                  alt="Formation informatique avec formateur"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-rose-500 text-white p-4 rounded-2xl shadow-xl">
                  <BookOpen className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos formations avec design moderne */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-500/20 text-indigo-700 dark:text-indigo-300">Nos Formations</Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Ce que nous vous apprenons
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Des formations pratiques pour utiliser la technologie au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Ordinateur", desc: "Word, Excel, Internet, emails", color: "bg-blue-500" },
              { icon: Users, title: "Smartphone", desc: "Applications, photos, messages", color: "bg-green-500" },
              { icon: Eye, title: "Internet", desc: "Navigation, recherches, achats", color: "bg-purple-500" },
              { icon: Lightbulb, title: "Sécurité", desc: "Virus, mots de passe, arnaques", color: "bg-orange-500" }
            ].map((formation, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${formation.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <formation.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{formation.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{formation.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notre processus de formation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Notre processus de formation personnalisée
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              De l'évaluation de vos compétences à la maîtrise complète, nous adaptons chaque formation à votre rythme
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {[
                {
                  value: "evaluation-niveau",
                  icon: Eye,
                  title: "1. Évaluation de votre niveau actuel",
                  subtitle: "Bilan de vos compétences et identification de vos besoins",
                  color: "bg-blue-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Test de compétences :</h4>
                        <ul className="space-y-3">
                          {[
                            "Questionnaire sur vos habitudes informatiques",
                            "Test pratique sur vos logiciels habituels",
                            "Évaluation de vos difficultés principales",
                            "Mesure de votre confiance avec l'outil informatique"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Définition des objectifs :</h4>
                        <ul className="space-y-3">
                          {[
                            "Identification de vos priorités d'apprentissage",
                            "Définition d'objectifs réalistes et mesurables",
                            "Adaptation au temps que vous pouvez consacrer",
                            "Prise en compte de vos appréhensions"
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
                  value: "programme-personnalise",
                  icon: Settings,
                  title: "2. Création du programme personnalisé",
                  subtitle: "Plan de formation adapté à vos besoins spécifiques",
                  color: "bg-green-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <Clock className="w-6 h-6 text-green-500 mr-3" />
                          Planning flexible
                        </h4>
                        <ul className="space-y-2">
                          {["Sessions de 1h à 2h maximum", "Horaires adaptés à votre disponibilité", "Rythme respectueux de votre apprentissage", "Possibilité de reports si nécessaire"].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <Star className="w-6 h-6 text-green-500 mr-3" />
                          Contenu sur mesure
                        </h4>
                        <ul className="space-y-2">
                          {["Modules adaptés à votre niveau", "Exemples tirés de votre quotidien", "Exercices pratiques personnalisés", "Support de cours simplifié"].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg flex items-center">
                          <Award className="w-6 h-6 text-green-500 mr-3" />
                          Suivi progressif
                        </h4>
                        <ul className="space-y-2">
                          {["Validation des acquis à chaque session", "Révisions régulières", "Ajustement du programme si besoin", "Évaluation finale et certification"].map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "sessions-pratiques",
                  icon: Laptop,
                  title: "3. Sessions de formation pratiques",
                  subtitle: "Apprentissage par la pratique sur vos propres équipements",
                  color: "bg-purple-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Méthode pédagogique :</h4>
                        <ul className="space-y-3">
                          {[
                            "Formation directement sur votre ordinateur",
                            "\"Je fais, vous regardez\" puis \"Vous faites, je guide\"",
                            "Répétition jusqu'à la maîtrise complète",
                            "Prise de notes personnalisées pendant la formation"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Supports fournis :</h4>
                        <ul className="space-y-3">
                          {[
                            "Guide personnalisé avec captures d'écran",
                            "Aide-mémoire des principales fonctions",
                            "Raccourcis clavier les plus utiles",
                            "Contacts pour le support post-formation"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Star className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "exercices-autonomie",
                  icon: Zap,
                  title: "4. Exercices et développement de l'autonomie",
                  subtitle: "Mise en pratique autonome avec accompagnement progressif",
                  color: "bg-orange-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Exercices guidés",
                          icon: Settings,
                          items: ["Exercices pratiques entre les sessions", "Projets personnels adaptés", "Défis progressifs et motivants", "Correction et conseils personnalisés"]
                        },
                        {
                          title: "Développement autonomie",
                          icon: Zap,
                          items: ["Encouragement à explorer", "Résolution de problèmes simples", "Recherche d'informations guidée", "Confiance progressive dans l'utilisation"]
                        },
                        {
                          title: "Support disponible",
                          icon: Headphones,
                          items: ["Questions par téléphone", "Support par email détaillé", "Sessions de rattrapage si besoin", "Aide pour résoudre vos blocages"]
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
                  value: "suivi-long-terme",
                  icon: Award,
                  title: "5. Suivi et accompagnement long terme",
                  subtitle: "Support continu pour maintenir et développer vos compétences",
                  color: "bg-teal-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Support post-formation :</h4>
                        <ul className="space-y-3">
                          {[
                            "Hotline dédiée pendant 6 mois minimum",
                            "Sessions de révision à 1, 3 et 6 mois",
                            "Mise à jour de vos guides si évolution logicielle",
                            "Accompagnement pour les nouvelles fonctionnalités"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Évolution continue :</h4>
                        <ul className="space-y-3">
                          {[
                            "Proposition de formations complémentaires",
                            "Conseils sur les nouveaux outils utiles",
                            "Accompagnement dans vos nouveaux projets",
                            "Veille sur les évolutions qui vous concernent"
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

      {/* Types de formations */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Comment nous vous formons
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Adaptées à votre niveau et vos besoins</p>
          </div>

          <div className="space-y-12">
            {/* Formation découverte */}
            <Card className="overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">🔍 Formation Découverte</h3>
                        <Badge className="mt-2 bg-blue-500/20 text-blue-700 dark:text-blue-300">40€/heure</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Première approche de l'informatique. Parfait pour débuter sans stress 
                      et comprendre les bases essentielles.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Premiers pas", desc: "Allumer, éteindre, utiliser la souris", icon: Target },
                        { title: "Internet simple", desc: "Naviguer, chercher des informations", icon: Eye },
                        { title: "Emails faciles", desc: "Lire, écrire, envoyer des messages", icon: Users }
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
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Formation découverte informatique"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-500/10" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Formation pratique */}
            <Card className="overflow-hidden bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative order-2 lg:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Formation pratique bureautique"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-500/10" />
                  </div>
                  <div className="p-12 order-1 lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">📝 Formation Pratique</h3>
                        <Badge className="mt-2 bg-green-500/20 text-green-700 dark:text-green-300">50€/heure</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Apprenez Word, Excel et les outils pratiques pour votre quotidien 
                      ou votre travail. Formation directement utile.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Word maîtrisé", desc: "Lettres, documents, mise en page", icon: Target },
                        { title: "Excel pratique", desc: "Tableaux, calculs simples, graphiques", icon: TrendingUp },
                        { title: "Gestion fichiers", desc: "Organiser, sauvegarder vos documents", icon: Lightbulb }
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
                </div>
              </CardContent>
            </Card>

            {/* Formation smartphone */}
            <Card className="overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">📱 Formation Smartphone</h3>
                        <Badge className="mt-2 bg-purple-500/20 text-purple-700 dark:text-purple-300">45€/heure</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      Maîtrisez votre iPhone ou Android. Applications utiles, photos, 
                      messages et tout ce qui vous facilitera la vie.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Applications utiles", desc: "WhatsApp, maps, météo, actualités", icon: Users },
                        { title: "Photos et vidéos", desc: "Prendre, organiser, partager vos souvenirs", icon: Eye },
                        { title: "Sécurité mobile", desc: "Protéger vos données et votre vie privée", icon: Lightbulb }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-md">
                            <item.icon className="w-5 h-5 text-purple-500" />
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
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=500&fit=crop&auto=format&q=80"
                      alt="Formation smartphone"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-purple-500/10" />
                  </div>
                </div>
              </CardContent>            </Card>
          </div>
        </div>
      </section>

      {/* Méthode avec accordéons modernisés */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Notre méthode d'accompagnement
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Une approche personnalisée qui s'adapte à votre rythme d'apprentissage
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {[
                {
                  value: "evaluation",
                  icon: Eye,
                  title: "1. Évaluation de vos besoins",
                  subtitle: "Comprendre ce que vous voulez apprendre",
                  color: "bg-blue-500",
                  content: (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Questions importantes :</h4>
                        <ul className="space-y-3">
                          {[
                            "Quel est votre niveau actuel ?",
                            "Qu'aimeriez-vous savoir faire ?",
                            "Pour quoi utiliser l'informatique ?",
                            "Combien de temps y consacrer ?"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Objectifs personnalisés :</h4>
                        <ul className="space-y-3">
                          {[
                            "Programme adapté à vos besoins",
                            "Rythme respectant vos capacités",
                            "Exercices pratiques et utiles",
                            "Suivi de vos progrès"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Target className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  value: "formation",
                  icon: BookOpen,
                  title: "2. Formation pratique à domicile",
                  subtitle: "Apprentissage sur votre matériel, chez vous",
                  color: "bg-green-500",
                  content: (
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Sur votre matériel",
                          icon: Target,
                          items: ["Votre ordinateur", "Votre smartphone", "Vos programmes", "Vos documents"]
                        },
                        {
                          title: "À votre rythme",
                          icon: Clock,
                          items: ["Pauses quand vous voulez", "Répétition si nécessaire", "Questions à tout moment", "Pas de stress"]
                        },
                        {
                          title: "Pratique immédiate",
                          icon: Lightbulb,
                          items: ["Exercices concrets", "Cas de votre quotidien", "Résultats immédiats", "Conseils personnalisés"]
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

      {/* Témoignages formation */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Ce que disent nos apprenants
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Témoignages de personnes comme vous</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Marie, 68 ans", 
                text: "Maintenant je fais mes courses en ligne et je videochat avec mes petits-enfants ! Merci beaucoup.", 
                formation: "Formation découverte",
                color: "bg-blue-500"
              },
              { 
                name: "Robert, 72 ans", 
                text: "J'ai appris Word pour écrire mes mémoires. Très patient et pédagogue, je recommande !",
                formation: "Formation bureautique", 
                color: "bg-green-500"
              },
              { 
                name: "Sylvie, 55 ans", 
                text: "Mon smartphone n'a plus de secrets ! WhatsApp, photos, GPS... tout devient facile.",
                formation: "Formation smartphone",
                color: "bg-purple-500"
              }
            ].map((temoignage, index) => (
              <Card key={index} className="border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${temoignage.color} rounded-full flex items-center justify-center mr-4`}>
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-gray-100">{temoignage.name}</h3>
                      <Badge className="mt-1 text-xs">{temoignage.formation}</Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                    "{temoignage.text}"
                  </p>
                  <div className="flex text-yellow-400 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-600/90 hover:to-purple-600/90 text-white shadow-xl">
              <Award className="w-5 h-5 mr-2" />
              Je veux apprendre aussi
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}