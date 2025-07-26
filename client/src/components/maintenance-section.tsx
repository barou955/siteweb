import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essentiel",
    price: "Sur devis",
    description: "Parfait pour les particuliers et très petites entreprises",
    features: [
      "Support à distance",
      "Intervention sur demande",
      "Conseils et diagnostics",
      "Horaires bureaux (9h-18h)",
    ],
    buttonText: "Demander un devis",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Professionnel",
    price: "Sur devis",
    description: "Idéal pour les PME et entreprises en croissance",
    features: [
      "Tout du plan Essentiel +",
      "Maintenance préventive mensuelle",
      "Sauvegardes automatiques",
      "Support étendu (8h-20h)",
      "Intervention prioritaire sous 4h",
    ],
    buttonText: "Demander un devis",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    name: "Entreprise",
    price: "Sur devis",
    description: "Solution complète pour les grandes structures",
    features: [
      "Tout du plan Pro +",
      "Support 24/7",
      "Intervention sous 2h",
      "Ingénieur dédié",
      "Audit sécurité trimestriel",
      "Formation équipes incluse",
    ],
    buttonText: "Demander un devis",
    buttonVariant: "outline" as const,
    popular: false,
  },
];

export default function MaintenanceSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="maintenance" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contrats de Maintenance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choisissez le niveau de support qui correspond à vos besoins et votre
            budget
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-2 border-labtek-blue bg-labtek-blue/5 dark:bg-labtek-blue/10"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-labtek-blue text-white px-4 py-2">
                    Recommandé
                  </Badge>
                </div>
              )}

              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-labtek-blue mb-4">
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-foreground">
                        {feature.includes("Tout du plan") ? (
                          <strong>{feature}</strong>
                        ) : (
                          feature
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  variant={plan.buttonVariant}
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
