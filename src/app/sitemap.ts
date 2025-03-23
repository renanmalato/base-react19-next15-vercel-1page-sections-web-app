import { MetadataRoute } from 'next';
import { LANGUAGES } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://musica.renanmalato.com';
  
  // Define routes that will be present in all languages
  const routes = [
    '',                 // Home
    '/about',           // About
    '/packages',        // Packages
    '/contact',         // Contact
  ];
  
  // Create sitemap entries for each language
  const entries: MetadataRoute.Sitemap = [];
  
  // Add default language (root) paths
  routes.forEach(route => {
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === '' ? 1 : 0.8,
    });
  });
  
  // Add language-specific paths
  const languages = [LANGUAGES.default, ...LANGUAGES.alternates];
  
  languages.forEach(lang => {
    routes.forEach(route => {
      entries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 0.9 : 0.7,
      });
    });
  });
  
  return entries;
} 