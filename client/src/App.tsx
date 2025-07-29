import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import InstallationEquipements from "@/pages/installation-equipements";
import MontagePcSurMesure from "@/pages/montage-pc-sur-mesure";
import SitesWeb from "@/pages/sites-web";
import InstallationProgrammes from "@/pages/installation-programmes";
import EmailProfessionnel from "@/pages/email-professionnel";
import SecuriteSauvegarde from "@/pages/securite-sauvegarde";
import DepannageAssistance from "@/pages/depannage-assistance";
import InfogeranceLegere from "@/pages/infogerance-legere";
import FormationAccompagnement from "@/pages/formation-accompagnement";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/installation-equipements" component={InstallationEquipements} />
      <Route path="/services/montage-pc-sur-mesure" component={MontagePcSurMesure} />
      <Route path="/services/sites-web" component={SitesWeb} />
      <Route path="/services/installation-programmes" component={InstallationProgrammes} />
      <Route path="/services/email-professionnel" component={EmailProfessionnel} />
      <Route path="/services/securite-sauvegarde" component={SecuriteSauvegarde} />
      <Route path="/services/depannage-assistance" component={DepannageAssistance} />
      <Route path="/services/infogerance-legere" component={InfogeranceLegere} />
      <Route path="/services/formation-accompagnement" component={FormationAccompagnement} />
      <Route path="/services/sites-web" component={SitesWeb} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;