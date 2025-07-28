
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  Shield,
  Clock,
  HeadphonesIcon,
  CheckCircle,
  ArrowLeft,
  ArrowUp,
  Server,
  AlertTriangle,
  Settings,
  BarChart3
} from "lucide-react";
import { useLocation } from "wouter";
import Navigation from "@/components/navigation";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function InfogeranceLegere() {
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
      icon: Monitor,
      title: "Surveillance proactive",
      description: "Surveillance continue de vos équipements et systèmes"
    },
    {
      icon: Shield,
      title: "Maintenance préventive",
      description: "Interventions planifiées pour éviter les pannes"
    },
    {
      icon: AlertTriangle,
      title: "Alertes en temps réel",
      description: "Notifications immédiates en cas de problème"
    },
    {
      icon: HeadphonesIcon,
      title: "Support prioritaire",
      description: "Assistance technique prioritaire et personnalisée"
    },
    {
      icon: BarChart3,
      title: "Rapports mensuels",
      description: "Analyses détaillées de l'état de votre infrastructure"
    },
    {
      icon: Settings,
      title: "Optimisation continue",
      description: "Amélioration constante des performances"
    }
  ];

  const services = [
    "Surveillance système 24h/24",
    "Maintenance préventive mensuelle",
    "Mises à jour de sécurité automatiques",
    "Sauvegarde automatisée",
    "Support technique prioritaire",
    "Rapports de performance mensuels",
    "Optimisation des systèmes",
    "Gestion des licences logicielles"
  ];

  const plans = [
    {
      name: "Essentiel",
      price: "99€/mois",
      description: "Pour les petites structures",
      features: [
        "Surveillance de base",
        "Maintenance trimestrielle",
        "Support 8h-18h",
        "Jusqu'à 5 postes"
      ]
    },
    {
      name: "Professionnel",
      price: "199€/mois",
      description: "Pour les entreprises en croissance",
      features: [
        "Surveillance complète",
        "Maintenance mensuelle",
        "Support étendu",
        "Jusqu'à 20 postes",
        "Rapports détaillés"
      ],
      popular: true
    },
    {
      name: "Entreprise",
      price: "Sur devis",
      description: "Pour les grandes organisations",
      features: [
        "Surveillance personnalisée",
        "Maintenance sur mesure",
        "Support 24h/24",
        "Postes illimités",
        "SLA garantie"
      ]
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
                <Server className="w-4 h-4 mr-2" />
                Infogérance
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Infogérance légère
                <span className="text-labtek-blue block">& Maintenance préventive</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Confiez-nous la surveillance et la maintenance de votre infrastructure informatique. 
                Notre service d'infogérance légère vous garantit sérénité et performance au quotidien.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-labtek-blue hover:bg-labtek-blue/90">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Demander un devis
                </Button>
                <Button variant="outline" size="lg">
                  <HeadphonesIcon className="w-5 h-5 mr-2" />
                  Nous contacter
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format&q=80"
                alt="Centre de surveillance informatique"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Surveillance active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos services d'infogérance</h2>
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

      {/* Services inclus */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Services inclus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <p className="font-medium">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans tarifaires */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Nos formules d'infogérance</h2>
          <p className="text-center text-muted-foreground mb-12">
            Choisissez la formule qui correspond à vos besoins
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative p-8 ${plan.popular ? 'border-labtek-blue shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-labtek-blue">
                    Le plus populaire
                  </Badge>
                )}
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-labtek-blue mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-labtek-blue hover:bg-labtek-blue/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Choisir cette formule
                  </Button>
                </CardContent>
              </Card>
            ))}
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
