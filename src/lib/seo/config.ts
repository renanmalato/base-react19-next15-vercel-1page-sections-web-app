import type { Metadata } from 'next';
import { baseMetadata } from './metadata/base';
import { getOpenGraphByLanguage } from './metadata/open-graph';
import { getTwitterByLanguage } from './metadata/twitter';
import { robots } from './metadata/robots';
import { VERIFICATION } from './constants/verification';

// TODO: Add verifications / OG images and all other metadata review

const configLanguages = {
  'pt-BR': {
    title: 'Renan Malato | #GOODMUSICONLY - Música ao Vivo em Orlando',
    description: 'Música ao vivo para casamentos e eventos em Orlando. Cantor e guitarrista brasileiro com mais de 6 anos de experiência. Confira!',
    keywords: [
      'musica ao vivo orlando',
      'cantor casamento orlando',
      'músico brasileiro orlando',
      'guitarrista para evento',
      'banda casamento orlando',
      'música ao vivo florida',
      'cantor acústico orlando',
      'goodmusiconly'
    ].join(', ')
  },
  'en-US': {
    title: 'Renan Malato | #GOODMUSICONLY - Live Music in Orlando, FL',
    description: 'Live music for weddings and events in Orlando, FL. Brazilian singer and guitarist with over 6 years of experience and thousands of performances.',
    keywords: [
      'live music orlando',
      'wedding singer florida',
      'wedding violinist florida',
      'wedding cellist florida',
      'brazilian musician orlando',
      'guitarist for event',
      'wedding band orlando',
      'live music for party',
      'acoustic singer orlando',
      'goodmusiconly'
    ].join(', ')
  }
};

export const seoConfig: Metadata = {
  ...baseMetadata,
  openGraph: getOpenGraphByLanguage('pt-BR'),
  twitter: getTwitterByLanguage('pt-BR'),
  robots,
  verification: {
    google: VERIFICATION.google,
    other: {
      'msvalidate.01': VERIFICATION.bing
    }
  },
  title: configLanguages['pt-BR'].title,
  description: configLanguages['pt-BR'].description,
  keywords: configLanguages['pt-BR'].keywords,
  alternates: {
    canonical: 'https://musica.renanmalato.com',
    languages: {
      'pt-BR': 'https://musica.renanmalato.com/pt',
      'en-US': 'https://musica.renanmalato.com/en',
    }
  }
};

export const LANGUAGES = {
  default: 'pt-BR',
  alternates: ['en-US']
};

export const getConfigByLanguage = (lang: 'pt-BR' | 'en-US') => ({
  ...seoConfig,
  title: configLanguages[lang].title,
  description: configLanguages[lang].description,
  keywords: configLanguages[lang].keywords,
  openGraph: getOpenGraphByLanguage(lang),
  twitter: getTwitterByLanguage(lang)
}); 