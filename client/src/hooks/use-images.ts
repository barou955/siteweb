
import { useState, useEffect } from 'react';

interface ImageManifest {
  officePersonnalise: string;
  depannagePersonnalise: string;
}

export function useImages() {
  const [manifest, setManifest] = useState<ImageManifest>({
    officePersonnalise: "/microsoft-office-suite.png",
    depannagePersonnalise: "/depannage-assistance.png"
  });

  useEffect(() => {
    // Try to load the image manifest
    fetch('/image-manifest.json')
      .then(response => response.json())
      .then(data => setManifest(data))
      .catch(() => {
        // Fallback to default images if manifest not found
        console.log('Using default images');
      });
  }, []);

  return {
    getImage: (key: keyof ImageManifest) => manifest[key],
    images: manifest
  };
}
