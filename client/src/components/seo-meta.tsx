
import { Helmet } from "react-helmet-async";

interface SeoMetaProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}

export default function SeoMeta({
  title = "Labtek - Services Informatiques en Essonne | Île‑de‑France",
  description = "Labtek propose des services informatiques professionnels pour particuliers et PME en Essonne et Île‑de‑France. Installation, maintenance, sécurité, hébergement.",
  canonical,
  noindex = false,
}: SeoMetaProps) {
  // Générer l'URL canonique basée sur l'URL courante si non fournie
  const getCanonicalUrl = () => {
    if (canonical) return canonical;
    
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      // Supprimer le trailing slash sauf pour la racine
      const cleanPath = path === '/' ? path : path.replace(/\/$/, '');
      return `https://labtek.fr${cleanPath}`;
    }
    
    return "https://labtek.fr";
  };

  const canonicalUrl = getCanonicalUrl();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://labtek.fr/#website",
        "url": "https://labtek.fr",
        "name": "Labtek",
        "description": description,
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://labtek.fr/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "fr-FR",
        "copyrightYear": 2024,
        "copyrightHolder": {
          "@id": "https://labtek.fr/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://labtek.fr/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://labtek.fr"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://labtek.fr/#business",
        "name": "Labtek",
        "description": description,
        "url": "https://labtek.fr",
        "telephone": "01 23 45 67 89",
        "email": "contact@labtek.fr",
        "image": "https://labtek.fr/logo-512.png",
        "logo": "https://labtek.fr/logo-512.png",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Essonne",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 48.6921,
          "longitude": 2.3708
        },
        "openingHours": "Mo-Fr 09:00-18:00",
        "priceRange": "€€",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 48.6921,
            "longitude": 2.3708
          },
          "geoRadius": "50000"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://labtek.fr/#website",
        "url": "https://labtek.fr",
        "name": "Labtek",
        "description": description,
        "publisher": {
          "@id": "https://labtek.fr/#business"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://labtek.fr/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://labtek.fr/#organization",
        "name": "Labtek",
        "url": "https://labtek.fr",
        "logo": "https://labtek.fr/logo-512.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "01 23 45 67 89",
          "contactType": "customer service",
          "email": "contact@labtek.fr",
          "availableLanguage": "French"
        },
        "sameAs": []
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {!noindex && <meta name="robots" content="index,follow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labtek.fr/logo-512.png" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content="Logo Labtek - Services Informatiques" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Labtek" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://labtek.fr/logo-512.png" />
      
      {/* Additional SEO */}
      <meta name="author" content="Labtek" />
      <meta name="geo.region" content="FR-91" />
      <meta name="geo.placename" content="Essonne" />
      <meta name="geo.position" content="48.6921;2.3708" />
      <meta name="ICBM" content="48.6921, 2.3708" />
      
      {/* Bing/Microsoft Edge specific */}
      <meta name="msapplication-TileColor" content="#3730A3" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msvalidate.01" content="" />
      <meta name="keywords" content="Labtek, informatique Essonne, dépannage ordinateur 91, installation logiciels, email professionnel, sauvegarde données, sécurité informatique Île-de-France, services informatiques professionnels, maintenance ordinateur, réseaux sécurisés, sites web responsives" />
    
    {/* Enhanced SEO meta tags */}
    <meta name="language" content="fr" />
    <meta name="revisit-after" content="7 days" />
    <meta name="distribution" content="global" />
    <meta name="rating" content="general" />
    <meta name="coverage" content="Worldwide" />
    <meta name="target" content="all" />
    <meta name="HandheldFriendly" content="True" />
    <meta name="MobileOptimized" content="320" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="format-detection" content="telephone=yes" />
    
    {/* Brand specific */}
    <meta name="brand" content="Labtek" />
    <meta name="company" content="Labtek Services Informatiques" />
    <meta name="designer" content="Labtek" />
    <meta name="owner" content="Labtek" />
    <meta name="reply-to" content="contact@labtek.fr" />
    <meta name="url" content="https://labtek.fr" />
    <meta name="identifier-URL" content="https://labtek.fr" />
    <meta name="directory" content="submission" />
    <meta name="category" content="Business" />
    <meta name="coverage" content="Worldwide" />
    <meta name="distribution" content="Global" />
    <meta name="rating" content="General" />
    
    {/* Local SEO */}
    <meta name="geo.region" content="FR-91" />
    <meta name="geo.placename" content="Essonne, Île-de-France" />
    <meta name="geo.position" content="48.6921;2.3708" />
    <meta name="ICBM" content="48.6921, 2.3708" />
    <meta name="DC.title" content={title} />
    
    {/* Social Media Optimization */}
    <meta property="article:author" content="Labtek" />
    <meta property="article:publisher" content="https://labtek.fr" />
    <meta name="application-name" content="Labtek" />
    <meta name="msapplication-tooltip" content="Services informatiques professionnels en Essonne" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
