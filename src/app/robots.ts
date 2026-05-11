import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/compress-for-[country]/']
      },
    ],
    sitemap: 'https://compressto20kb.com/sitemap.xml',
    host: 'https://compressto20kb.com',
  };
}
