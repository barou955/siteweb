export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Contact Initial",
      description:
        "Vous nous contactez par téléphone, email ou via notre formulaire. Nous discutons de votre besoin.",
      color: "bg-labtek-blue",
    },
    {
      number: 2,
      title: "Diagnostic",
      description:
        "Audit de votre environnement informatique existant et identification des problèmes.",
      color: "bg-labtek-violet",
    },
    {
      number: 3,
      title: "Devis Détaillé",
      description:
        "Proposition de solutions adaptées avec devis transparent et délais clairs.",
      color: "bg-labtek-blue",
    },
    {
      number: 4,
      title: "Mise en Œuvre",
      description:
        "Installation, configuration et tests de vos nouvelles solutions informatiques.",
      color: "bg-labtek-violet",
    },
    {
      number: 5,
      title: "Suivi & Support",
      description:
        "Formation, documentation et support continu pour assurer votre autonomie.",
      color: "bg-green-500",
    },
  ];

  return (
    <section id="processus" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un processus simple et transparent pour résoudre vos problèmes
            informatiques
          </p>
        </div>

        {/* Timeline horizontale */}
        <div className="relative">
          {/* Ligne de connexion */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-labtek-blue/20 transform -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div
                  className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 relative z-10`}
                >
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
