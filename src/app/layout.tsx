import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Compress Image to 20KB, 50KB, 100KB — Free Online, No Upload, 100% Private',
  description: 'Compress images to exact KB (20KB, 50KB, 100KB) free online. Files never leave your device. Presets for Shopify, Etsy, Amazon, Instagram, passport photos. No upload, no signup.',
  keywords: 'compress image to 20kb, compress image to 50kb, compress image to 100kb, compress image without uploading, compress image for shopify, compress image for etsy, compress image for amazon, compress image for instagram, compress passport photo, image compressor free, reduce image size online, compress jpg png webp free, heic to jpg converter',
  authors: [{ name: 'CompressTo20KB' }],
  metadataBase: new URL('https://compressto20kb.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Compress Image to 20KB Free — No Upload, 100% Private',
    description: 'Compress images to exact KB size. Shopify, Etsy, Amazon, Instagram presets. Files never leave your browser. Free, no signup.',
    url: 'https://compressto20kb.com',
    siteName: 'CompressTo20KB',
    type: 'website',
    images: [{ url: 'https://compressto20kb.com/og-image.png', width: 1200, height: 630, alt: 'CompressTo20KB — Free Image Compressor Online' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 20KB Free Online — No Upload',
    description: 'Files never leave your device. Exact KB compression. Free, no signup. Shopify, Etsy, Amazon, Instagram presets.',
    images: ['https://compressto20kb.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const schemaWebApp = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'CompressTo20KB',
  url: 'https://compressto20kb.com',
  description: 'Free online image compressor. Compress to exact KB size — 20KB, 50KB, 100KB. No upload, 100% private. Works for Shopify, Etsy, Amazon, Instagram, passport photos.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1247',
    bestRating: '5',
    worstRating: '1',
  },
  featureList: [
    'Compress image to exact KB size',
    'No file upload — 100% browser-based',
    'Shopify product image preset',
    'Etsy listing image preset',
    'Amazon product image preset',
    'Instagram image preset',
    'Passport photo compression',
    'Batch compress up to 50 images',
    'WebP, AVIF, JPEG, PNG, HEIC support',
    'Download as ZIP',
  ],
};

const schemaHowTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Compress an Image to 20KB Online (Free, No Upload)',
  description: 'Step-by-step guide to compress any image to exactly 20KB for free, without uploading to a server.',
  totalTime: 'PT30S',
  tool: [{ '@type': 'HowToTool', name: 'CompressTo20KB — free online image compressor' }],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Upload Your Image', text: 'Click the drop zone or drag your image. Supports JPG, PNG, WebP, HEIC — up to 50 files. No account needed.' },
    { '@type': 'HowToStep', position: 2, name: 'Select Exact KB Mode', text: "Click 'Exact KB Mode' tab and type 20 in the target field, or click the Gov 20KB preset for passport photos." },
    { '@type': 'HowToStep', position: 3, name: 'Compress and Download', text: 'Click Compress. Your file is processed instantly in your browser — download it or save as ZIP.' },
  ],
};

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compressto20kb.com' },
    { '@type': 'ListItem', position: 2, name: 'Compress Images Free', item: 'https://compressto20kb.com' },
  ],
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CompressTo20KB',
  url: 'https://compressto20kb.com',
  logo: 'https://compressto20kb.com/logo.png',
  sameAs: [
    'https://www.producthunt.com/products/compressto20kb',
    'https://twitter.com/compressto20kb',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{overflowX:"hidden",maxWidth:"100vw"}}>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://compressto20kb.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApp) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#0f0c29', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <main role="main" style={{ flex: 1 }}>{children}</main>

      <Footer />
      <script src="/ai-chat-widget-final.js?v=4"></script></body>
      <Analytics />
    </html>
  );
}
