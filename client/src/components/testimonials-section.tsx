import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dubois",
    company: "Restaurant Le Petit Coin",
    role: "Gérante",
    content: "Grâce à Labtek, notre restaurant a enfin un système de caisse moderne et fiable. L'installation s'est faite sans interruption de service et l'équipe nous a parfaitement formés. Un service professionnel et humain !",
    rating: 5,
    project: "Système de caisse connecté + Wi-Fi professionnel"
  },
  {
    name: "Thomas Martin",
    company: "Cabinet Comptable Martin & Associés",
    role: "Expert-comptable",
    content: "Migration vers Microsoft 365 réalisée en 48h avec zéro perte de données. Nos 8 collaborateurs travaillent maintenant en parfaite synchronisation. Nous recommandons vivement Labtek pour leur expertise et leur réactivité.",
    rating: 5,
    project: "Migration Microsoft 365 + Formation équipe"
  },
  {
    name: "Sophie Leclerc",
    company: "Pharmacie du Centre",
    role: "Pharmacienne",
    content: "Système de sauvegarde automatique installé après un incident. Depuis, nous dormons tranquilles ! Le support à distance fonctionne parfaitement et les interventions sont rapides quand nécessaire.",
    rating: 5,
    project: "Infrastructure réseau + Sauvegarde automatique"
  },
  {
    name: "Jean-Pierre Rousseau",
    company: "Garage Rousseau",
    role: "Gérant",
    content: "Site web vitrine créé en 3 semaines, exactement ce que nous voulions. Simple, professionnel et nos clients nous trouvent facilement sur Google maintenant. Le formulaire de contact fonctionne parfaitement !",
    rating: 5,
    project: "Site web vitrine + Référencement SEO"
  },
  {
    name: "Claire Moreau",
    company: "Institut de Beauté Éclat",
    role: "Propriétaire",
    content: "Caméras de sécurité et système de surveillance installés avec professionnalisme. Tout est accessible depuis mon téléphone et la qualité d'image est excellente. Service après-vente au top !",
    rating: 5,
    project: "Système de vidéosurveillance + App mobile"
  },
  {
    name: "David Lemoine",
    company: "SARL Bâti-Rénov",
    role: "Directeur",
    content: "Emails professionnels @bati-renov.fr et site web créés rapidement. Cela change tout dans nos relations clients ! Le contrat de maintenance nous assure une tranquillité totale.",
    rating: 5,
    project: "Emails pro + Site vitrine + Maintenance"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="temoignages" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Témoignages Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment Labtek a aidé des entreprises locales à moderniser
            leur infrastructure informatique
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border hover:scale-105 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-labtek-blue mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-sm font-medium text-labtek-blue">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                    <p className="text-xs font-medium text-green-800 dark:text-green-300">
                      ✅ Projet réalisé
                    </p>
                    <p className="text-xs text-green-700 dark:text-green-400">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-labtek-blue/10 dark:bg-labtek-blue/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Vous souhaitez nous rejoindre ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contactez-nous pour discuter de votre projet informatique.
              Devis gratuit et sans engagement.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-labtek-blue hover:bg-labtek-dark-blue text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Demander un devis gratuit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}