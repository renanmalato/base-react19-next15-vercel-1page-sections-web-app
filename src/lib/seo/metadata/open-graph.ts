import type { Metadata } from 'next';
import { BUSINESS_INFO } from '../constants/business';

export const openGraphLanguages = {
  'pt-BR': {
    title: 'Renan Malato | #GOODMUSICONLY - Músico em Orlando',
    description: 'Música ao vivo para casamentos e eventos em Orlando, FL. Pacotes customizados para seu evento. Confira!',
    alt: 'Renan Malato #GOODMUSICONLY - Músico Profissional em Orlando'
  },
  'en-US': {
    title: 'Renan Malato | #GOODMUSICONLY - Professional Musician',
    description: 'Live music for weddings and events in Orlando, FL. One-man-band, trio, or full band options available!',
    alt: 'Renan Malato #GOODMUSICONLY - Professional Musician in Orlando'
  }
};

// Simple image array without complex typing
const OPEN_GRAPH_IMAGES = [
  {
    url: '/og-image-1200x630.jpg',
    width: 1200,
    height: 630,
    alt: openGraphLanguages['pt-BR'].alt
  },
  {
    url: '/og-image-square.jpg',
    width: 1200,
    height: 1200,
    alt: openGraphLanguages['pt-BR'].alt
  }
] as const;

export const openGraph = {
  title: openGraphLanguages['pt-BR'].title,
  description: openGraphLanguages['pt-BR'].description,
  url: 'https://musica.renanmalato.com',
  siteName: BUSINESS_INFO.name,
  images: OPEN_GRAPH_IMAGES,
  locale: 'pt_BR',
  type: 'website',
  alternateLocale: ['en_US']
} as const;

export const getOpenGraphByLanguage = (lang: 'pt-BR' | 'en-US') => ({
  ...openGraph,
  title: openGraphLanguages[lang].title,
  description: openGraphLanguages[lang].description,
  locale: lang === 'pt-BR' ? 'pt_BR' : 'en_US',
  alternateLocale: [lang === 'pt-BR' ? 'en_US' : 'pt_BR'],
  images: OPEN_GRAPH_IMAGES.map(image => ({
    ...image,
    alt: openGraphLanguages[lang].alt
  }))
}); 