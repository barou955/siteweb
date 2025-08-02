
import { useState, useEffect } from 'react';

interface ImageManifest {
  officePersonnalise: string;
  depannagePersonnalise: string;
  microsoftOffice: string;
  depannageAssistance: string;
}

const DEFAULT_IMAGES = {
  officePersonnalise: "/microsoft-office-suite.png",
  depannagePersonnalise: "/depannage-assistance.png",
  microsoftOffice: "/microsoft-office-suite.png",
  depannageAssistance: "/depannage-assistance.png"
};

const FALLBACK_IMAGES = {
  officePersonnalise: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&auto=format&q=80",
  depannagePersonnalise: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format&q=80",
  microsoftOffice: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&auto=format&q=80",
  depannageAssistance: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format&q=80"
};

export function useImages() {
  const [manifest, setManifest] = useState<ImageManifest>(DEFAULT_IMAGES);
  const [imageStatus, setImageStatus] = useState<Record<string, 'loading' | 'loaded' | 'error'>>({});

  useEffect(() => {
    // Try to load the image manifest
    fetch('/image-manifest.json')
      .then(response => response.json())
      .then(data => setManifest({ ...DEFAULT_IMAGES, ...data }))
      .catch(() => {
        console.log('Using default images');
      });
  }, []);

  const checkImageExists = async (url: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  const getImage = async (key: keyof ImageManifest): Promise<string> => {
    const primaryUrl = manifest[key];
    const fallbackUrl = FALLBACK_IMAGES[key];
    
    if (imageStatus[primaryUrl] === 'loaded') {
      return primaryUrl;
    }
    
    if (imageStatus[primaryUrl] === 'error') {
      return fallbackUrl;
    }

    setImageStatus(prev => ({ ...prev, [primaryUrl]: 'loading' }));
    
    const exists = await checkImageExists(primaryUrl);
    
    if (exists) {
      setImageStatus(prev => ({ ...prev, [primaryUrl]: 'loaded' }));
      return primaryUrl;
    } else {
      setImageStatus(prev => ({ ...prev, [primaryUrl]: 'error' }));
      return fallbackUrl;
    }
  };

  return {
    getImage,
    images: manifest,
    getImageSync: (key: keyof ImageManifest) => manifest[key],
    getFallbackImage: (key: keyof ImageManifest) => FALLBACK_IMAGES[key]
  };
}
