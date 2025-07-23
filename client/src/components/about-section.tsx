import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional image placeholder */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Ingénieur informatique professionnel"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              À propos de Labtek
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                Ingénieur réseaux et systèmes avec plus de 5 ans d'expérience,
                j'ai créé LABTEK pour apporter des solutions
                informatiques simples et efficaces aux particuliers et PME
                d'Essonne et d'Île-de-France.
              </p>

              <p className="text-muted-foreground mb-6">
                Ma mission est de démystifier l'informatique et de vous
                accompagner dans votre transformation numérique, quel que soit
                votre niveau technique. Chaque solution est pensée pour être
                durable, sécurisée et adaptée à vos besoins réels.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">
                      🎯 Notre engagement
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Solutions sur mesure, transparence totale et accompagnement
                      personnalisé
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">
                      ⚡ Notre force
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Expertise technique + pédagogie pour vous rendre autonome
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
