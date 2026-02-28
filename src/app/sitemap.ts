import { MetadataRoute } from 'next';
import { VISA_COUNTRIES } from '@/lib/visaCountries';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://compressto20kb.com';
  const lastModified = new Date();

  const visaPages = VISA_COUNTRIES.map(c => ({
    url: `${baseUrl}/compress-for-${c.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [
    // ── Core ──
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/visa-photo-compressor`, lastModified, changeFrequency: 'monthly', priority: 0.95 },

    // ── KB Tools ──
    { url: `${baseUrl}/compress-to-20kb`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-to-30kb`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-to-50kb`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-to-100kb`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-to-200kb`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-to-240kb`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-to-500kb`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-to-1mb`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/compress-to-2mb`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/compress-to-5mb`, lastModified, changeFrequency: 'monthly', priority: 0.85 },

    // ── Platform tools ──
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
    { url: `${baseUrl}/compress-for-dv-lottery`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-without-uploading`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/dpi-converter`, lastModified, changeFrequency: 'monthly', priority: 0.8 },

    // ── US Gov Forms ──
    { url: `${baseUrl}/compress-for-ds160`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compress-for-global-entry`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/compress-for-real-id`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/compress-for-tsa-precheck`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/compress-for-n400`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/compress-for-i485`, lastModified, changeFrequency: 'monthly', priority: 0.85 },

    // ── Visa country pages (47 countries) ──
    ...visaPages,

    // ── VS pages ──
    { url: `${baseUrl}/vs/tinypng`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/vs/squoosh`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/vs/compressor-io`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/vs/iloveimg`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/vs/kraken`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/vs/imageresizer`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/vs/picresize`, lastModified, changeFrequency: 'monthly', priority: 0.85 },

    // ── Service pages ──
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },

    // ── Blog ──
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog/best-free-image-compressor-for-small-business-usa`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/best-image-compressor-for-mac`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/best-image-formats`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/best-image-size-for-ebay-listings`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/compress-image-for-google-forms`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/compress-image-for-linkedin-profile`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/compress-image-for-microsoft-teams`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/compress-image-for-shopify-product-page`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/compress-image-for-usps`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/compress-images-for-amazon-seller`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/compress-images-for-etsy-listings`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/compress-images-for-shopify-store`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/compress-jpeg-under-1mb`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/compress-passport-photo-to-50kb`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/ds-160-photo-requirements`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/dv-lottery-photo-requirements`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/ecommerce-image-optimization`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/free-vs-paid-compressors`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/h1b-visa-photo-requirements`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/how-to-compress-image-for-uscis`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/how-to-compress-images-for-woocommerce`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/how-to-compress-photo-for-ds160`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/image-optimization-2026`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/image-size-for-amazon-product-listing`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/image-size-requirements-for-green-card`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/pagespeed-images`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/reduce-image-size-for-email`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/reduce-image-size-for-government-forms-usa`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/us-passport-photo-requirements`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/uscis-photo-size-requirements`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/webp-vs-jpeg-2026`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
