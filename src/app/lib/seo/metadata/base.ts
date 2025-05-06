import type { Metadata } from "next";
import { BUSINESS_INFO } from '../constants/business';

const metadataLanguages = {
  'pt-BR': {
    title: 'Renan Malato | #GOODMUSICONLY - Cantor e Guitarrista em Orlando, FL',
    description: 'Serviços de música ao vivo para casamentos e eventos em Orlando, FL. Cantor e guitarrista brasileiro com mais de 6 anos de experiência e milhares de apresentações.',
    keywords: [
      'música ao vivo orlando',
      'cantor para casamento',
      'músico brasileiro orlando',
      'música para eventos',
      'guitarrista profissional',
      'banda para festa',
      'música acústica orlando',
      'cantor para eventos'
    ].join(', ')
  },
  'en-US': {
    title: 'Renan Malato | #GOODMUSICONLY - Singer & Guitarist in Orlando, FL',
    description: 'Live music services for weddings and events in Orlando, FL. Brazilian singer and guitarist with over 6 years of experience and thousands of performances.',
    keywords: [
      'orlando live music',
      'wedding singer orlando',
      'brazilian musician florida',
      'event music service',
      'professional guitarist',
      'party band orlando',
      'acoustic music orlando',
      'event singer'
    ].join(', ')
  }
};

export const baseMetadata: Metadata = {
  title: {
    template: '%s | Renan Malato #GOODMUSICONLY',
    default: 'Renan Malato #GOODMUSICONLY'
  },
  description: 'Live Music Services in Orlando, FL',
  generator: 'Next.js',
  applicationName: 'Renan Malato #GOODMUSICONLY',
  referrer: 'origin-when-cross-origin',
  keywords: ['orlando', 'musician', 'singer', 'guitarist', 'wedding music', 'live music'],
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://musica.renanmalato.com'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt',
      'en-US': '/en',
    }
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    siteName: 'Renan Malato #GOODMUSICONLY',
    images: [
      {
        url: '/og-image-1200x630.jpg', // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Renan Malato #GOODMUSICONLY - Live Music Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: metadataLanguages['pt-BR'].title,
    description: metadataLanguages['pt-BR'].description,
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '16x16' }
    ],
    shortcut: { url: '/icon.png' },
    apple: [
      { url: '/icon.png' }
    ],
  },
}; 