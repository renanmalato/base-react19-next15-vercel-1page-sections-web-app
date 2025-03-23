import type { Metadata } from "next";
import { BUSINESS_INFO } from '../constants/business';

const twitterLanguages = {
  'pt-BR': {
    title: 'Renan Malato | #GOODMUSICONLY - Músico Brasileiro em Orlando',
    description: 'Músico profissional para casamentos e eventos em Orlando. One-man-band, trio ou banda completa.',
  },
  'en-US': {
    title: 'Renan Malato | #GOODMUSICONLY - Professional Musician Orlando',
    description: 'Professional musician for weddings and events in Orlando. One-man-band, trio or full band options.',
  }
};

export const twitter: Metadata['twitter'] = {
  card: 'summary_large_image',
  title: twitterLanguages['pt-BR'].title,  // Default to Portuguese
  description: twitterLanguages['pt-BR'].description,
  images: [
    {
      url: '/og-image-1200x630.jpg',
      width: 1200,
      height: 630,
      alt: 'Renan Malato #GOODMUSICONLY - Professional Musician'
    }
  ],
  site: BUSINESS_INFO.name
};

// For use in different language routes
export const getTwitterByLanguage = (lang: 'pt-BR' | 'en-US') => ({
  ...twitter,
  title: twitterLanguages[lang].title,
  description: twitterLanguages[lang].description
}); 