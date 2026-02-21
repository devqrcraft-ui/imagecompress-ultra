import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://compressto20kb.com';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/compress-to-50kb`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-to-100kb`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-to-200kb`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/bulk-image-compressor`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-for-uscis`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-passport-photo-usa`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-image-for-visa`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-for-ebay`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-for-woocommerce`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-for-squarespace`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-for-linkedin`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-for-email`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-for-shopify`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-for-etsy`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-for-amazon`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-for-instagram`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-passport-photo`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
