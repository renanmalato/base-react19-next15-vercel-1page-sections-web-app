import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/pt/', '/en/'],
      disallow: ['/api/', '/_next/', '/static/'],
    },
    sitemap: 'https://musica.renanmalato.com/sitemap.xml',
    host: 'https://musica.renanmalato.com',
  };
} 