import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Photo Compression Guides — Visa, Shop & File-Size Rules',
  description: 'Plain-language guides to image size limits: visa and government forms, marketplaces, email, exact KB targets, formats and phone or desktop workflows.',
  alternates: { canonical: 'https://www.compressto20kb.com/blog' },
  openGraph: { url: 'https://www.compressto20kb.com/blog' },
};

type Post = [string, string, string];

const GROUPS: [string, Post[]][] = [
  ['Visa, passport, gov & exam forms', [
    ['ds-160-photo-requirements', 'DS-160 photo requirements: the 240KB limit', 'US visa'],
    ['how-to-compress-photo-for-ds160', 'How to compress a photo for DS-160', 'US visa'],
    ['ds160-photo-requirements', 'DS-160 photo rules, field by field', 'US visa'],
    ['iphone-photo-ds160', 'iPhone photos for DS-160: HEIC and Display P3', 'US visa'],
    ['dv-lottery-photo-requirements', 'DV Lottery photo requirements', 'Green card'],
    ['dv-lottery-photo-guide', 'DV Lottery photo guide, step by step', 'Green card'],
    ['compress-photo-for-visa', 'Compress a visa photo for any country', 'Visa'],
    ['h1b-visa-photo-requirements', 'H-1B visa photo requirements', 'US visa'],
    ['uscis-photo-size-requirements', 'USCIS photo size requirements', 'USCIS'],
    ['how-to-compress-image-for-uscis', 'How to compress an image for USCIS (N-400, I-485)', 'USCIS'],
    ['image-size-requirements-for-green-card', 'Green card photo size (I-485, I-130, I-90)', 'USCIS'],
    ['us-passport-photo-requirements', 'US passport photo requirements', 'Passport'],
    ['compress-passport-photo-to-50kb', 'Compress a passport photo to 50KB', 'Passport'],
    ['reduce-image-size-for-government-forms-usa', 'Image sizes for US government forms', 'Gov forms'],
    ['compress-image-for-usps', 'Compress an image for USPS uploads', 'Gov forms'],
    ['compress-photo-under-50kb', 'Photo under 50KB for SSC, NEET and UPSC', 'Exams'],
  ]],
  ['Shops, marketplaces & social', [
    ['compress-images-for-amazon-seller', 'Image compression for Amazon sellers', 'Amazon'],
    ['image-size-for-amazon-product-listing', 'Amazon product image size requirements', 'Amazon'],
    ['best-image-size-for-ebay-listings', 'eBay listing image size and limits', 'eBay'],
    ['compress-images-for-etsy-listings', 'Compress images for Etsy listings', 'Etsy'],
    ['compress-images-for-shopify-store', 'Compress Shopify images for a faster store', 'Shopify'],
    ['compress-image-for-shopify-product-page', 'Images for a Shopify product page', 'Shopify'],
    ['how-to-compress-images-for-woocommerce', 'Compress images for WooCommerce', 'WooCommerce'],
    ['ecommerce-image-optimization', 'E-commerce image optimisation, end to end', 'Stores'],
    ['compress-image-for-linkedin-profile', 'LinkedIn profile and banner image size', 'LinkedIn'],
    ['compress-image-for-google-forms', 'Compress images for Google Forms', 'Google Forms'],
    ['compress-image-for-microsoft-teams', 'Does Microsoft Teams compress images?', 'Teams'],
    ['compress-image-for-teams-meeting', 'Sharper images in Teams meetings', 'Teams'],
  ]],
  ['Exact file sizes & formats', [
    ['compress-image-to-30kb', 'Compress an image to 30KB', '30KB'],
    ['compress-jpeg-under-1mb', 'Get a JPEG under 1MB', '1MB'],
    ['how-to-compress-image-for-email', 'Compress images for email (under 1MB)', 'Email'],
    ['reduce-image-size-for-email', 'Reduce image size for Gmail, Outlook, Yahoo', 'Email'],
    ['compress-image-without-losing-quality', 'Compress without visible quality loss', 'Quality'],
    ['best-image-formats', 'WebP vs AVIF vs JPEG: which to pick', 'Formats'],
    ['webp-vs-jpeg-2026', 'WebP vs JPEG: which format wins', 'Formats'],
    ['image-optimization-2026', 'Image optimisation in 2026', 'Performance'],
    ['pagespeed-images', 'Fix PageSpeed image warnings', 'Performance'],
  ]],
  ['Devices, quality & choosing a tool', [
    ['compress-image-on-iphone', 'Compress images on iPhone, no app', 'iPhone'],
    ['compress-image-on-windows-11', 'Compress images on Windows 11, no install', 'Windows'],
    ['best-image-compressor-for-mac', 'Image compressor for Mac (works in Safari)', 'Mac'],
    ['best-free-image-compressor-for-small-business-usa', 'Free compressor for US small businesses', 'Business'],
    ['free-vs-paid-compressors', 'Free vs paid compressors: what you need', 'Buying'],
  ]],
];

export default function BlogPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"}]}' }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '44px 16px 64px' }}>
        <h1 style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 900, marginBottom: '10px', lineHeight: 1.2 }}>
          Guides &amp; photo size rules
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.72)', maxWidth: '640px', marginBottom: '12px' }}>
          Every guide ends with the same step: open the compressor, type the KB limit your form asks for, download. Nothing you upload leaves this device.
        </p>
        <p style={{ fontSize: '15px', marginBottom: '36px' }}>
          <Link href="/#compress" style={{ color: '#22d3ee', fontWeight: 700 }}>Start with the free compressor →</Link>
        </p>

        {GROUPS.map(([group, posts]) => (
          <section key={group} style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '14px', color: '#c7d2fe', letterSpacing: '0.2px' }}>{group}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '10px' }}>
              {posts.map(([slug, label, tag]) => (
                <Link key={slug} href={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'flex', flexDirection: 'column', gap: '6px', minHeight: '86px',
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px', padding: '14px 16px', height: '100%',
                  }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#a5b4fc', textTransform: 'uppercase', letterSpacing: '0.6px' }}>{tag}</span>
                    <span style={{ fontSize: '16px', fontWeight: 700, color: '#fff', lineHeight: 1.4 }}>{label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
