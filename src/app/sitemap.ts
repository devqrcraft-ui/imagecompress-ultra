import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://compressto20kb.com";
  const pages = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/compress-to-20kb', priority: 0.95, changeFrequency: 'monthly' as const },
    { url: '/compress-to-50kb', priority: 0.90, changeFrequency: 'monthly' as const },
    { url: '/compress-for-etsy', priority: 0.88, changeFrequency: 'monthly' as const },
    { url: '/compress-for-amazon', priority: 0.87, changeFrequency: 'monthly' as const },
    { url: '/compress-for-email', priority: 0.87, changeFrequency: 'monthly' as const },
    { url: '/compress-for-linkedin', priority: 0.86, changeFrequency: 'monthly' as const },
    { url: '/compress-for-shopify', priority: 0.90, changeFrequency: 'monthly' as const },
    { url: '/compress-passport-photo', priority: 0.88, changeFrequency: 'monthly' as const },
    { url: '/compress-without-uploading', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/compress-to-100kb', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/compress-to-200kb', priority: 0.82, changeFrequency: 'monthly' as const },
    { url: '/compress-to-500kb', priority: 0.80, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.70, changeFrequency: 'weekly' as const },
    { url: '/faq', priority: 0.65, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.50, changeFrequency: 'yearly' as const },
    { url: '/use', priority: 0.60, changeFrequency: 'monthly' as const },
  ];
  return pages.map(p => ({
    url: `${base}${p.url}`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
