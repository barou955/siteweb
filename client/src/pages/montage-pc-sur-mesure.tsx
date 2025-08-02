
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ScrollToTopButton from '@/components/scroll-to-top-button';
import { 
  Monitor, 
  Cpu, 
  HardDrive, 
  MemoryStick, 
  Zap, 
  Shield, 
  Clock, 
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Award,
  TrendingUp,
  Building,
  Home,
  Gamepad2,
  Briefcase,
  Settings
} from 'lucide-react';

export default function MontagePcSurMesure() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const configurations = [
    {
      id: 'bureautique',
      title: 'PC Bureautique',
      description: 'Parfait pour les tâches quotidiennes',
      price: 'À partir de 400€',
      icon: <Briefcase className="w-8 h-8" />,
      specs: [
        'Processeur Intel i3 ou AMD Ryzen 3',
        '8 GB de RAM DDR4',
        'SSD 256 GB',
        'Carte graphique intégrée',
        'Windows 11'
      ],
      uses: ['Navigation web', 'Suite Office', 'E-mails', 'Vidéoconférence']
    },
    {
      id: 'multimedia',
      title: 'PC Multimédia',
      description: 'Idéal pour le divertissement',
      price: 'À partir de 600€',
      icon: <Monitor className="w-8 h-8" />,
      specs: [
        'Processeur Intel i5 ou AMD Ryzen 5',
        '16 GB de RAM DDR4',
        'SSD 512 GB',
        'Carte graphique dédiée GTX/RTX',
        'Windows 11'
      ],
      uses: ['Streaming vidéo', 'Retouche photo', 'Montage vidéo léger', 'Gaming casual']
    },
    {
      id: 'gaming',
      title: 'PC Gaming',
      description: 'Performance maximale pour les jeux',
      price: 'À partir de 1000€',
      icon: <Gamepad2 className="w-8 h-8" />,
      specs: [
        'Processeur Intel i7 ou AMD Ryzen 7',
        '32 GB de RAM DDR4/DDR5',
        'SSD 1 TB NVMe',
        'Carte graphique RTX 4060/4070',
        'Windows 11'
      ],
      uses: ['Gaming haute performance', 'Streaming', 'VR', 'E-sport']
    },
    {
      id: 'professionnel',
      title: 'PC Professionnel',
      description: 'Station de travail haute performance',
      price: 'À partir de 1500€',
      icon: <Building className="w-8 h-8" />,
      specs: [
        'Processeur Intel i9 ou AMD Ryzen 9',
        '64 GB de RAM DDR5',
        'SSD 2 TB NVMe + HDD 4TB',
        'Carte graphique RTX 4080/4090',
        'Windows 11 Pro'
      ],
      uses: ['CAO/DAO', 'Rendu 3D', 'Montage vidéo 4K', 'Intelligence artificielle']
    }
  ];

  const advantages = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Configuration sur mesure',
      description: 'Chaque composant choisi selon vos besoins spécifiques'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Composants de qualité',
      description: 'Sélection rigoureuse des meilleures marques du marché'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Assemblage professionnel',
      description: 'Montage soigné avec tests de performance complets'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Garantie étendue',
      description: 'Support technique et garantie sur tous les composants'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Analyse des besoins',
      description: 'Étude détaillée de vos usages et contraintes'
    },
    {
      step: '2',
      title: 'Sélection des composants',
      description: 'Choix optimal des pièces selon votre budget'
    },
    {
      step: '3',
      title: 'Assemblage et tests',
      description: 'Montage professionnel et validation complète'
    },
    {
      step: '4',
      title: 'Livraison et support',
      description: 'Installation chez vous et formation incluse'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Montage PC sur Mesure - Configuration Personnalisée | Labtek Services</title>
        <meta name="description" content="Montage de PC sur mesure à Charenton-le-Pont. Configuration personnalisée pour bureautique, gaming, et usage professionnel. Devis gratuit et garantie incluse." />
        <meta name="keywords" content="montage PC, assemblage ordinateur, PC gaming, PC bureautique, configuration sur mesure, Charenton-le-Pont" />
        <link rel="canonical" href="https://www.labtek-services.com/montage-pc-sur-mesure" />
        
        <meta property="og:title" content="Montage PC sur Mesure - Configuration Personnalisée | Labtek Services" />
        <meta property="og:description" content="Montage de PC sur mesure à Charenton-le-Pont. Configuration personnalisée pour bureautique, gaming, et usage professionnel." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.labtek-services.com/montage-pc-sur-mesure" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Montage PC sur Mesure - Configuration Personnalisée | Labtek Services" />
        <meta name="twitter:description" content="Montage de PC sur mesure à Charenton-le-Pont. Configuration personnalisée pour bureautique, gaming, et usage professionnel." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Montage PC sur Mesure",
            "description": "Service de montage et configuration de PC personnalisés",
            "provider": {
              "@type": "Organization",
              "name": "Labtek Services",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Charenton-le-Pont",
                "addressRegion": "Île-de-France",
                "postalCode": "94220",
                "addressCountry": "FR"
              }
            },
            "areaServed": "Charenton-le-Pont et environs",
            "serviceType": "Montage PC sur mesure"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-400/5" />
          
          <div className="relative max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLocation('/')}
                className="flex items-center gap-2 hover:bg-white/50 dark:hover:bg-gray-800/50 backdrop-blur-sm border-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour
              </Button>
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-600" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Montage PC sur Mesure</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                      Montage PC sur Mesure
                    </h1>
                    <p className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium mt-2">
                      Configuration personnalisée
                    </p>
                  </div>
                </div>

                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Votre ordinateur idéal, assemblé selon vos besoins spécifiques. 
                  Du PC bureautique à la station de travail haute performance, 
                  nous créons la configuration parfaite pour vous.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-600/90 hover:to-purple-600/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <Settings className="w-5 h-5 mr-2" />
                    Configurer mon PC
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => window.open('tel:0768852880', '_self')} className="border-2 hover:bg-white/50 dark:hover:bg-gray-800/50 backdrop-blur-sm">
                    <Phone className="w-5 h-5 mr-2" />
                    07 68 85 28 80
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-3 mx-auto">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <p className="font-semibold text-gray-900 dark:text-white">Garantie</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">2 ans incluse</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-3 mx-auto">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <p className="font-semibold text-gray-900 dark:text-white">Délai</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">48-72h</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-3 mx-auto">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <p className="font-semibold text-gray-900 dark:text-white">Support</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">6 mois gratuit</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-3 mx-auto">
                        <Home className="w-8 h-8 text-white" />
                      </div>
                      <p className="font-semibold text-gray-900 dark:text-white">Livraison</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">À domicile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Configurations Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Nos Configurations
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Des PC adaptés à tous les usages, de la bureautique au gaming haute performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {configurations.map((config) => (
                <Card key={config.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {config.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{config.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">{config.description}</CardDescription>
                    <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border-0">
                      {config.price}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Spécifications :</h4>
                        <ul className="space-y-1 text-sm">
                          {config.specs.map((spec, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Usages :</h4>
                        <div className="flex flex-wrap gap-1">
                          {config.uses.map((use, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {use}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Notre Processus
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                De l'analyse de vos besoins à la livraison, un accompagnement complet
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 -z-10" />
                    )}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-600/90 hover:to-purple-600/90 text-white shadow-xl">
                <Settings className="w-5 h-5 mr-2" />
                Démarrer mon projet
              </Button>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Pourquoi Nous Choisir ?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                L'expertise et la qualité au service de votre projet
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                      {advantage.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{advantage.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Configurons Votre PC Idéal
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                Contactez-nous pour un devis personnalisé et gratuit
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-xl transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Téléphone</h3>
                  <p className="text-gray-600 dark:text-gray-300">07 68 85 28 80</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">contact@labtek-services.com</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Zone</h3>
                  <p className="text-gray-600 dark:text-gray-300">Charenton-le-Pont et environs</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-600/90 hover:to-purple-600/90 text-white shadow-xl">
                <Settings className="w-5 h-5 mr-2" />
                Demander un devis gratuit
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}
