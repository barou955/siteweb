
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Users,
  Clock,
  Award,
  CheckCircle,
  ArrowLeft,
  ArrowUp,
  BookOpen,
  Target,
  Lightbulb,
  UserCheck
} from "lucide-react";
import { useLocation } from "wouter";
import Navigation from "@/components/navigation";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function FormationAccompagnement() {
  const [, setLocation] = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHome = () => {
    setLocation("/");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const features = [
    {
      icon: GraduationCap,
      title: "Formation personnalisée",
      description: "Programmes adaptés à votre niveau et vos objectifs"
    },
    {
      icon: Users,
      title: "Formation individuelle ou en groupe",
      description: "Sessions personnalisées ou collectives selon vos besoins"
    },
    {
      icon: Target,
      title: "Objectifs ciblés",
      description: "Formation centrée sur vos besoins professionnels spécifiques"
    },
    {
      icon: BookOpen,
      title: "Support pédagogique",
      description: "Ressources et guides fournis pour un apprentissage durable"
    },
    {
      icon: UserCheck,
      title: "Suivi personnalisé",
      description: "Accompagnement continu et évaluation des progrès"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Attestation de formation et validation des compétences"
    }
  ];

  const formations = [
    {
      title: "Bureautique - Pack Office",
      description: "Word, Excel, PowerPoint, Outlook - Niveau débutant à avancé",
      duration: "2-5 jours",
      type: "Présentiel/Distanciel"
    },
    {
      title: "Navigation Internet & Sécurité",
      description: "Naviguer en sécurité, gérer ses mots de passe, éviter les arnaques",
      duration: "1-2 jours",
      type: "Présentiel"
    },
    {
      title: "Gestion des emails",
      description: "Organiser sa messagerie, filtres, signatures, sécurité",
      duration: "1 jour",
      type: "Présentiel/Distanciel"
    },
    {
      title: "Outils collaboratifs",
      description: "Teams, Zoom, Google Workspace, partage de documents",
      duration: "1-2 jours",
      type: "Distanciel"
    },
    {
      title: "Smartphone & Tablette",
      description: "Maîtriser son appareil mobile, applications utiles, sécurité",
      duration: "2 jours",
      type: "Présentiel"
    },
    {
      title: "Réseaux sociaux professionnels",
      description: "LinkedIn, communication digitale, e-réputation",
      duration: "1 jour",
      type: "Présentiel/Distanciel"
    }
  ];

  const publics = [
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
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-labtek-blue/5 to-labtek-violet/5">
        <div className="max-w-7xl mx-auto">
          <Button
            onClick={goHome}
            variant="ghost"
            className="mb-8 hover:bg-labtek-blue/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-labtek-blue/10 text-labtek-blue border-labtek-blue/20">
                <GraduationCap className="w-4 h-4 mr-2" />
                Formation
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Formation &
                <span className="text-labtek-blue block">Accompagnement numérique</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Développez vos compétences numériques avec nos formations personnalisées. 
                De la bureautique aux outils collaboratifs, nous vous accompagnons dans votre montée en compétences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-labtek-blue hover:bg-labtek-blue/90">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Demander un devis
                </Button>
                <Button variant="outline" size="lg">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Voir le catalogue
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format&q=80"
                alt="Formation informatique en groupe"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-labtek-blue" />
                  <span className="font-medium">Formation certifiante</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir nos formations ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-labtek-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-labtek-blue" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Catalogue de formations */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos formations disponibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formations.map((formation, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-4">
                    <BookOpen className="w-8 h-8 text-labtek-blue flex-shrink-0" />
                    <Badge variant="outline" className="ml-2">{formation.type}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{formation.title}</h3>
                  <p className="text-muted-foreground mb-4">{formation.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    Durée: {formation.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publics ciblés */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">À qui s'adressent nos formations ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {publics.map((public_, index) => {
              const Icon = public_.icon;
              return (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-labtek-blue to-labtek-violet text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Prêt à développer vos compétences ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour définir ensemble un programme de formation adapté à vos besoins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-labtek-blue hover:bg-gray-100">
              <GraduationCap className="w-5 h-5 mr-2" />
              Demander un programme personnalisé
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-labtek-blue">
              <Users className="w-5 h-5 mr-2" />
              Formation en groupe
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rounded-full w-12 h-12 bg-labtek-blue hover:bg-labtek-blue/90 shadow-lg z-50"
          size="icon"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
}
