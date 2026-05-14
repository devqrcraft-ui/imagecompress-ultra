import { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/compress-for-[country]/', '/*.js$', '/*?*'],
      },
    ],
    sitemap: 'https://www.compressto20kb.com/sitemap.xml',
    host: 'https://www.compressto20kb.com',
  };
}
