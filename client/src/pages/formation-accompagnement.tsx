
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SeoMeta from "@/components/seo-meta";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowLeft, Phone, Mail, GraduationCap, Users, Clock, BookOpen, Target, Lightbulb, UserCheck, Award, RefreshCw, Settings, Eye, Zap } from "lucide-react";

export default function FormationAccompagnement() {
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
        title="Formation & Accompagnement Numérique - Labtek"
        description="Développez vos compétences numériques avec nos formations personnalisées. Bureautique, outils collaboratifs, accompagnement sur mesure."
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
              Formation &
              <br />
              <span className="text-labtek-blue">Accompagnement</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Développez vos compétences numériques avec nos formations personnalisées. 
              De la bureautique aux outils collaboratifs, je vous accompagne dans votre montée en compétences.
            </p>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-indigo-500 mr-3" />
                <p className="text-indigo-700 dark:text-indigo-300 text-center">
                  <strong>Formation adaptée à votre niveau</strong> et vos objectifs professionnels
                </p>
              </div>
            </div>
            <Button onClick={scrollToContact} size="lg" className="bg-labtek-blue hover:bg-labtek-blue/90">
              <BookOpen className="w-5 h-5 mr-2" />
              Demander une formation
            </Button>
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que je propose</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Formation personnalisée", desc: "Programme adapté à votre niveau et objectifs" },
              { icon: BookOpen, title: "Support pédagogique", desc: "Ressources et guides fournis" },
              { icon: UserCheck, title: "Suivi personnalisé", desc: "Accompagnement continu et évaluation" },
              { icon: Award, title: "Certification", desc: "Attestation de formation validée" }
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

      {/* Catalogue de formations */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Mes formations disponibles</h2>
          
          <div className="space-y-8">
            {/* Formation Bureautique */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <BookOpen className="w-8 h-8 text-blue-500 mr-3" />
                      <h3 className="text-2xl font-bold">📊 Bureautique - Pack Office - Sur devis</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Maîtrisez Word, Excel, PowerPoint et Outlook du niveau débutant à avancé. 
                      Formation pratique avec exercices concrets.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Formation individuelle (2-5 jours)</h4>
                        <p className="text-muted-foreground">Apprentissage personnalisé à votre rythme</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Formation en groupe (1-3 jours)</h4>
                        <p className="text-muted-foreground">Sessions collectives pour équipes</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Formation à distance disponible</h4>
                        <p className="text-muted-foreground">Visioconférence avec partage d'écran</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Formation bureautique Microsoft Office"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Formation Sécurité Internet */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&auto=format&q=80"
                        alt="Formation sécurité internet et navigation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-4">
                      <Users className="w-8 h-8 text-green-500 mr-3" />
                      <h3 className="text-2xl font-bold">🔒 Navigation Internet & Sécurité - Sur devis</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Apprenez à naviguer en sécurité, gérer vos mots de passe et éviter les arnaques. 
                      Formation pratique pour tous les âges.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="font-semibold">Sécurité en ligne (1-2 jours)</h4>
                        <p className="text-muted-foreground">Éviter les pièges et arnaques internet</p>
                      </div>
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold">Gestion des mots de passe</h4>
                        <p className="text-muted-foreground">Outils et méthodes pour sécuriser ses comptes</p>
                      </div>
                      <div className="border-l-4 border-gray-500 pl-4">
                        <h4 className="font-semibold">Formation présentielle uniquement</h4>
                        <p className="text-muted-foreground">Manipulation directe pour bien assimiler</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Formation Outils Collaboratifs */}
            <Card>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Lightbulb className="w-8 h-8 text-purple-500 mr-3" />
                      <h3 className="text-2xl font-bold">🤝 Outils Collaboratifs - Sur devis</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Maîtrisez Teams, Zoom, Google Workspace et autres outils de travail collaboratif. 
                      Formation pratique avec mise en situation.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">Visioconférence (Teams, Zoom)</h4>
                        <p className="text-muted-foreground">Organiser et participer aux réunions en ligne</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Google Workspace / Office 365</h4>
                        <p className="text-muted-foreground">Collaboration et partage de documents</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Formation distancielle recommandée</h4>
                        <p className="text-muted-foreground">Apprentissage direct sur les outils</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=300&fit=crop&auto=format&q=80"
                      alt="Formation outils collaboratifs et visioconférence"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus de formation détaillé avec accordéons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Mon processus de formation personnalisée</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Découvrez en détail chaque étape de votre parcours de formation. 
            Un accompagnement sur mesure pour un apprentissage efficace et durable.
          </p>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">

              <AccordionItem value="analyse" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">1. Analyse des besoins</h3>
                      <p className="text-muted-foreground text-sm">Évaluation de votre niveau et objectifs</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Évaluation initiale :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Niveau actuel en informatique</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Objectifs professionnels ou personnels</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Contraintes de temps et disponibilités</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Préférences d'apprentissage</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Programme personnalisé :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Modules adaptés à vos besoins</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Rythme d'apprentissage personnalisé</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Choix du format (présentiel/distanciel)</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Planning et durée optimisés</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="formation" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">2. Formation pratique</h3>
                      <p className="text-muted-foreground text-sm">Apprentissage avec exercices concrets</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
                          <h4 className="font-semibold">Théorie</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Concepts fondamentaux</li>
                          <li>• Bonnes pratiques</li>
                          <li>• Méthodologies</li>
                          <li>• Astuces et raccourcis</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <Target className="w-5 h-5 text-green-500 mr-2" />
                          <h4 className="font-semibold">Pratique</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Exercices dirigés</li>
                          <li>• Cas concrets métier</li>
                          <li>• Manipulation directe</li>
                          <li>• Résolution de problèmes</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center mb-2">
                          <UserCheck className="w-5 h-5 text-purple-500 mr-2" />
                          <h4 className="font-semibold">Accompagnement</h4>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Suivi personnalisé</li>
                          <li>• Correction immédiate</li>
                          <li>• Adaptation du rythme</li>
                          <li>• Réponses aux questions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ressources" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">3. Ressources et supports</h3>
                      <p className="text-muted-foreground text-sm">Guides et documents pour continuer</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Supports fournis :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Guides pas-à-pas personnalisés</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Modèles et templates utiles</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Aide-mémoires et raccourcis</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Ressources web recommandées</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Accès permanent :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Documents PDF téléchargeables</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Vidéos de démonstration</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Exercices complémentaires</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Mises à jour régulières</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="evaluation" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">4. Évaluation et certification</h3>
                      <p className="text-muted-foreground text-sm">Validation des acquis</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold mb-3">Tests pratiques :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Exercices de validation</li>
                          <li>• Mise en situation réelle</li>
                          <li>• Résolution de cas</li>
                          <li>• Présentation de travaux</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Évaluation continue :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Suivi des progrès</li>
                          <li>• Feedback régulier</li>
                          <li>• Identification des points faibles</li>
                          <li>• Renforcement ciblé</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Certification :</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Attestation de formation</li>
                          <li>• Détail des compétences acquises</li>
                          <li>• Niveau de maîtrise validé</li>
                          <li>• Document officiel</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="suivi" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                      <RefreshCw className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">5. Suivi post-formation</h3>
                      <p className="text-muted-foreground text-sm">Support et accompagnement continu</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="ml-14 space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Support inclus :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />3 mois de support téléphonique</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Réponses aux questions par email</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Conseils personnalisés</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Mise à jour des ressources</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Perfectionnement :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Formations complémentaires</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Modules avancés disponibles</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Veille technologique partagée</li>
                          <li className="flex items-start"><Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />Tarifs préférentiels</li>
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

      {/* Publics ciblés */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">À qui s'adressent mes formations ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Particuliers",
                description: "Seniors, débutants, reconversion professionnelle",
                icon: Users
              },
              {
                title: "Entreprises",
                description: "Formation des équipes, mise à niveau, nouveaux outils",
                icon: Target
              },
              {
                title: "Associations",
                description: "Bénévoles, gestion administrative, communication",
                icon: Lightbulb
              }
            ].map((public_, index) => {
              const Icon = public_.icon;
              return (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-20 h-20 bg-labtek-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-labtek-blue" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{public_.title}</h3>
                    <p className="text-muted-foreground">{public_.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-labtek-blue to-labtek-violet text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à développer vos compétences ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-moi pour définir ensemble un programme de formation adapté à vos besoins
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-labtek-blue hover:bg-gray-100">
              <Phone className="w-4 h-4 mr-2" />
              07 81 16 69 29
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-labtek-blue">
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
