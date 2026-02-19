import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: ['GPTBot','CCBot','anthropic-ai','Claude-Web'], disallow: '/' },
    ],
    sitemap: 'https://compressto20kb.com/sitemap.xml',
  };
}
