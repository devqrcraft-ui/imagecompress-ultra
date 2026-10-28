import { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return {
    // One "*" group covers every crawler, including the AI search bots
    // (OAI-SearchBot, PerplexityBot, ClaudeBot) that decide whether a page can
    // be cited in an AI answer. CCBot used to be disallowed here, which only
    // hid the site from one more index.
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/*?*'],
      },
    ],
    sitemap: 'https://www.compressto20kb.com/sitemap.xml',
    host: 'https://www.compressto20kb.com',
  };
}
