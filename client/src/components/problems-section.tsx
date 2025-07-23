import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, X, Lock, HelpCircle, CheckCircle, Wifi } from "lucide-react";

const problems = [
  {
    icon: Wifi,
    problem: "Mon Wi-Fi ne marche plus dans certaines pièces",
    description: "Zones mortes, déconnexions fréquentes, signal faible...",
    solution:
      "Audit complet de votre réseau, installation de bornes Wi-Fi optimales et configuration pour une couverture totale.",
  },
  {
    icon: X,
    problem: "J'ai perdu tous mes fichiers importants",
    description: "Panne de disque dur, suppression accidentelle, virus...",
    solution:
      "Récupération de données et mise en place d'un système de sauvegarde automatique sécurisé.",
  },
  {
    icon: Lock,
    problem: "Ma messagerie professionnelle n'inspire pas confiance",
    description: "Adresse Gmail, Yahoo, manque de professionnalisme...",
    solution:
      "Création d'adresses email professionnelles avec votre nom de domaine et messagerie sécurisée.",
  },
  {
    icon: HelpCircle,
    problem: "Mon équipe n'arrive pas à collaborer efficacement",
    description:
      "Partage de fichiers compliqué, versions multiples, communication difficile...",
    solution:
      "Déploiement de Microsoft 365 ou Google Workspace avec formation et accompagnement.",
  },
  {
    icon: CheckCircle,
    problem: "Je n'ai personne pour m'aider quand ça plante",
    description: "Pannes fréquentes, pas de support technique, perte de temps...",
    solution:
      "Contrats de maintenance avec intervention rapide et support à distance 24/7.",
  },
  {
    icon: AlertTriangle,
    problem: "Mon site web ne me ramène aucun client",
    description: "Site obsolète, non-responsive, invisible sur Google...",
    solution:
      "Création d'un site web moderne, optimisé SEO et responsive pour tous les appareils.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Vous reconnaissez-vous ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment nos solutions répondent aux problèmes informatiques
            les plus courants
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card
                key={index}
                className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-4">
                    "{problem.problem}"
                  </h3>
                  <p className="text-red-700 dark:text-red-400 mb-4">
                    {problem.description}
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                      ✓ Notre solution
                    </h4>
                    <p className="text-green-700 dark:text-green-400 text-sm">
                      {problem.solution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
