import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Compress Image to 20KB Free Online — 100% Private, No Upload',
  description: 'Compress images to exact KB (20KB, 50KB, 100KB) free online. Files never leave your device. Presets for Shopify, Etsy, Amazon, passport photos. No upload, no signup.',
  keywords: 'compress image to 20kb, compress image to 50kb, compress image without uploading, compress image for shopify, compress passport photo, image compressor free',
  authors: [{ name: 'CompressTo20KB' }],
  metadataBase: new URL('https://compressto20kb.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Compress Image to 20KB Free — No Upload, 100% Private',
    description: 'Compress images to exact KB size. Shopify, Etsy, Amazon presets. Files never leave your browser.',
    url: 'https://compressto20kb.com',
    siteName: 'CompressTo20KB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 20KB Free Online',
    description: 'Files never leave your device. Exact KB compression. Free forever.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "CompressTo20KB",
          "url": "https://compressto20kb.com",
          "description": "Free online image compressor. Compress to exact KB. No upload required.",
          "applicationCategory": "UtilitiesApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How to compress image to 20KB?",
              "acceptedAnswer": { "@type": "Answer", "text": "Upload your image, select 'Exact KB Mode', choose 20KB, click Compress. Your file is processed locally — nothing is uploaded to any server." }},
            { "@type": "Question", "name": "Is it safe to compress passport photos online?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes — our tool processes everything in your browser. Your passport photo never leaves your device." }},
            { "@type": "Question", "name": "How to compress images for Shopify for free?",
              "acceptedAnswer": { "@type": "Answer", "text": "Use our Shopify preset — it automatically sets WebP format, optimal quality, and keeps images under 1MB. No app installation needed." }},
          ]
        })}} />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
