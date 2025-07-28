import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xblkdyqn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Nous vous répondrons dans les 24h.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Particulier ou professionnel, nous avons la solution ! Parlons de vos besoins informatiques.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <Card className="shadow-lg border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Informations de Contact
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-labtek-blue/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-labtek-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Zone d'intervention
                    </h4>
                    <p className="text-muted-foreground">
                      Essonne (91) et toute l'Île-de-France
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Interventions sur site et support à distance
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-labtek-violet/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-labtek-violet" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horaires</h4>
                    <p className="text-muted-foreground">Lun - Ven : 9h00 - 18h00</p>
                    <p className="text-muted-foreground">Sam : 9h00 - 16h00</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Urgences : intervention 7j/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Téléphone</h4>
                    <p className="text-muted-foreground">
                      01 69 XX XX XX
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Disponible aux heures d'ouverture
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      contact@labtek.fr
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Réponse sous 24h garantie
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formulaire de contact */}
          <Card className="shadow-lg border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Demande de Devis
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="nom">
                      Nom <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      name="nom"
                      id="nom"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="prenom">
                      Prénom <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      name="prenom"
                      id="prenom"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input
                      type="tel"
                      name="telephone"
                      id="telephone"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="entreprise">Entreprise/Organisation</Label>
                  <Input
                    type="text"
                    name="entreprise"
                    id="entreprise"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="service-select">
                    Service demandé <span className="text-red-500">*</span>
                  </Label>
                  <Select name="service" required>
                    <SelectTrigger className="mt-2" id="service-select">
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="installation-equipements">
                        Installation d'équipements
                      </SelectItem>
                      <SelectItem value="montage-pc">
                        Montage PC sur mesure
                      </SelectItem>
                      <SelectItem value="sites-web">
                        Sites web professionnels
                      </SelectItem>
                      <SelectItem value="installation-programmes">
                        Installation de programmes
                      </SelectItem>
                      <SelectItem value="email-professionnel">
                        Email professionnel
                      </SelectItem>
                      <SelectItem value="securite-sauvegarde">
                        Sécurité & Sauvegarde
                      </SelectItem>
                      <SelectItem value="depannage-assistance">
                        Dépannage & Assistance
                      </SelectItem>
                      <SelectItem value="infogerance-legere">
                        Infogérance légère
                      </SelectItem>
                      <SelectItem value="formation-accompagnement">
                        Formation & accompagnement
                      </SelectItem>
                      <SelectItem value="autre">
                        Autre demande
                      </SelectItem>
                      <SelectItem value="maintenance">
                        Maintenance et support
                      </SelectItem>
                      <SelectItem value="siteweb">Création de site web</SelectItem>
                      <SelectItem value="audit">Audit complet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">
                    Décrivez votre besoin <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    placeholder="Décrivez votre problème ou besoin informatique. Plus vous êtes précis, mieux nous pourrons vous aider !"
                    className="mt-2 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-labtek-blue hover:bg-labtek-dark-blue transition-colors duration-200 transform hover:scale-105"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande de devis"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Champs obligatoires - Nous vous répondrons sous 24h
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}