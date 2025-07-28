
// URLs pour les images personnalisées
export const IMAGES = {
  // Services
  officePersonnalise: "/office-suite-personnalise.png",
  depannagePersonnalise: "/depannage-personnalise.png",
  
  // Images par défaut (fallback)
  officeSuite: "/microsoft-office-suite.png",
  depannage: "/depannage-assistance.png",
  
  // Logo
  logo: "/favicon.png"
};

// URLs complètes pour usage externe
export const getImageUrl = (imageName) => {
  return IMAGES[imageName] || IMAGES.officeSuite;
};
