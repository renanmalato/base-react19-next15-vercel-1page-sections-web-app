import type { Metadata } from "next";

export const robots: Metadata['robots'] = {
  index: true,
  follow: true,
  nocache: false,
  
  // Standard robots configuration
  googleBot: {
    index: true,
    follow: true
  }
};

export const robotsTxt = `
User-agent: *
Allow: /
Allow: /pt/
Allow: /en/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Host: https://musica.renanmalato.com

# Main sitemap
Sitemap: https://musica.renanmalato.com/sitemap.xml
`; 