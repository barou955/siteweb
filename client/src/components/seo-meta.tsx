
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
  canonical = "https://labtek.fr",
  noindex = false,
}: SeoMetaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
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
      <link rel="canonical" href={canonical} />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {!noindex && <meta name="robots" content="index,follow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
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
      <meta name="keywords" content="informatique Essonne, dépannage ordinateur 91, installation logiciels, email professionnel, sauvegarde données, sécurité informatique Île-de-France" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
