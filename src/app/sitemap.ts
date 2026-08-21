import { MetadataRoute } from 'next';
import { VISA_COUNTRIES } from '@/lib/visaCountries';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.compressto20kb.com';
  const lastModified = new Date( );

  // Включаємо ВСІ країни з бази
  const visaPages = VISA_COUNTRIES.map(c => ({
    url: `${baseUrl}/compress-for-${c.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [
      { url: `https://www.compressto20kb.com/compress-for-shopify`, lastModified: new Date( ) },
      { url: `https://www.compressto20kb.com/compress-for-dv-lottery-2026`, lastModified: new Date( ) },
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/visa-photo-compressor`, lastModified, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/compress-to-20kb`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-to-50kb`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-to-100kb`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    ...visaPages,
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
