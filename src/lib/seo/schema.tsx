'use client';

import { BUSINESS_INFO } from './constants/business';
import { SOCIAL_MEDIA } from './constants/social';
import Script from 'next/script';

export const Schema = () => {
  const businessInfo = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": BUSINESS_INFO.name,
    "@id": `https://${BUSINESS_INFO.domain}`,
    "url": `https://${BUSINESS_INFO.domain}`,
    "logo": "/logo.png",
    "image": [
      "/og-image.jpg",
      "/og-image-square.jpg"
    ],
    "description": {
      "en": BUSINESS_INFO.services.en.join('. '),
      "pt-BR": BUSINESS_INFO.services['pt-BR'].join('. ')
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": BUSINESS_INFO.address.city,
      "addressRegion": BUSINESS_INFO.address.region,
      "addressCountry": BUSINESS_INFO.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.coordinates.latitude,
      "longitude": BUSINESS_INFO.coordinates.longitude
    },
    "priceRange": "$$",
    "sameAs": SOCIAL_MEDIA.sameAs,
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": BUSINESS_INFO.coordinates.latitude,
        "longitude": BUSINESS_INFO.coordinates.longitude
      },
      "geoRadius": "50km"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": {
        "en": "Music Performance Services",
        "pt-BR": "Serviços de Performance Musical"
      },
      "itemListElement": [
        ...BUSINESS_INFO.specialties['pt-BR'].map(specialty => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": specialty
          }
        }))
      ]
    },
    "knowsLanguage": BUSINESS_INFO.languages,
    "serviceArea": BUSINESS_INFO.serviceAreas['pt-BR'],
    "member": [
      {
        "@type": "Person",
        "name": "Renan Malato",
        "jobTitle": "Singer & Guitarist",
        "image": "/thumbnail.avif"
      }
    ],
    "genre": ["Acoustic", "Pop", "Lounge", "Electronic", "Various"]
  };

  const ptSchema = JSON.stringify({
    ...businessInfo,
    "description": businessInfo.description["pt-BR"],
    "inLanguage": "pt-BR",
    "name": `${BUSINESS_INFO.name} | Cantor e Guitarrista em Orlando`
  });

  const enSchema = JSON.stringify({
    ...businessInfo,
    "description": businessInfo.description["en"],
    "inLanguage": "en",
    "name": `${BUSINESS_INFO.name} | Singer & Guitarist in Orlando`
  });

  return (
    <>
      <Script id="schema-pt" strategy="afterInteractive">
        {`
          const scriptPt = document.createElement('script');
          scriptPt.setAttribute('type', 'application/ld+json');
          scriptPt.textContent = ${JSON.stringify(ptSchema)};
          document.head.appendChild(scriptPt);
        `}
      </Script>
      <Script id="schema-en" strategy="afterInteractive">
        {`
          const scriptEn = document.createElement('script');
          scriptEn.setAttribute('type', 'application/ld+json');
          scriptEn.textContent = ${JSON.stringify(enSchema)};
          document.head.appendChild(scriptEn);
        `}
      </Script>
    </>
  );
}; 