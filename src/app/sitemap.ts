import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://imagecompress-ultra.vercel.app";
  const pages = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/compress-to-20kb', priority: 0.95, changeFrequency: 'monthly' as const },
    { url: '/compress-to-50kb', priority: 0.90, changeFrequency: 'monthly' as const },
    { url: '/compress-for-shopify', priority: 0.90, changeFrequency: 'monthly' as const },
    { url: '/compress-passport-photo', priority: 0.88, changeFrequency: 'monthly' as const },
    { url: '/compress-without-uploading', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.70, changeFrequency: 'weekly' as const },
    { url: '/faq', priority: 0.65, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.50, changeFrequency: 'yearly' as const },
  ];
  return pages.map(p => ({
    url: `${base}${p.url}`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
