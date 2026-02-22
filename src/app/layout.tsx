import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Compress Image to 20KB Free Online — 100% Private, No Upload',
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
    images: [
      {
        url: 'https://compressto20kb.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CompressTo20KB — Free Image Compressor Online',
      },
    ],
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
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'YOUR_GOOGLE_VERIFICATION_CODE', // ← вставиш після Search Console
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

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How to compress image to 20KB?',
      acceptedAnswer: { '@type': 'Answer', text: "Upload your image, select 'Exact KB Mode', choose 20KB, click Compress. Your file is processed locally — nothing is uploaded to any server." },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to compress passport photos online?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — our tool processes everything in your browser. Your passport photo never leaves your device. No server, no storage, 100% private.' },
    },
    {
      '@type': 'Question',
      name: 'How to compress images for Shopify for free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Use our Shopify preset — it automatically sets WebP format, optimal quality, and keeps images under 1MB at 2048px. No app installation needed.' },
    },
    {
      '@type': 'Question',
      name: 'How to compress images for Instagram?',
      acceptedAnswer: { '@type': 'Answer', text: 'Use our Instagram preset — compresses to 1080px JPEG at 90% quality. Your photos will look sharp on mobile and upload instantly.' },
    },
    {
      '@type': 'Question',
      name: 'Does this tool support HEIC photos from iPhone?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — we support HEIC and HEIF files taken with iPhone or iPad. They are automatically converted in your browser without any upload.' },
    },
    {
      '@type': 'Question',
      name: 'Can I compress multiple images at once?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — you can upload up to 50 images at once and download them all as a ZIP file. Batch compression is completely free.' },
    },
    {
      '@type': 'Question',
      name: 'What image formats are supported?',
      acceptedAnswer: { '@type': 'Answer', text: 'We support JPEG, JPG, PNG, WebP, AVIF, and HEIC/HEIF formats. You can also convert between formats — for example, convert PNG to WebP.' },
    },
    {
      '@type': 'Question',
      name: 'How to compress an image for USCIS, DS-160 or US passport application?',
      acceptedAnswer: { '@type': 'Answer', text: 'Select the "Gov 20KB" preset — it compresses your photo under 20KB as required by USCIS N-400, DS-160 visa forms, and US passport online applications. All processing stays on your device.' },
    },
    {
      '@type': 'Question',
      name: 'How to compress image for Amazon product listings?',
      acceptedAnswer: { '@type': 'Answer', text: 'Use our Amazon preset — it compresses product images to JPEG under 1MB at 2000px with white background support. Meets Amazon image requirements.' },
    },
    {
      '@type': 'Question',
      name: 'Does compressing reduce image quality?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our tool uses smart compression to minimize visible quality loss. You can preview the result before downloading and adjust quality manually.' },
    },
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
    <html lang="en">
      <head>
        {/* Preconnect для швидкості */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApp) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      </head>
      <body style={{ margin: 0, padding: 0 }}><main>{children}</main></body>
      <Analytics />
    </html>
  );
}
