import MarqueeBanner from "@/components/MarqueeBanner";
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
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
            { "@type": "Question", "name": "Does this tool support HEIC photos from iPhone?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes — we support HEIC and HEIF files taken with iPhone or iPad. They are automatically converted in your browser without any upload." }},
            { "@type": "Question", "name": "Can I compress multiple images at once?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes — you can upload up to 10 images at once and download them all as a ZIP file. Batch compression is completely free." }},
          ]
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Compress an Image to 20KB Online",
          "description": "Step-by-step guide to compress any image to exactly 20KB for free, without uploading to a server.",
          "totalTime": "PT30S",
          "step": [
            { "@type": "HowToStep", "position": 1, "name": "Upload Your Image", "text": "Click the drop zone or drag your image. Supports JPG, PNG, WebP, HEIC — up to 10 files." },
            { "@type": "HowToStep", "position": 2, "name": "Select Exact KB Mode", "text": "Click 'Exact KB Mode' tab and type 20 in the target field, or click the Gov 20KB preset." },
            { "@type": "HowToStep", "position": 3, "name": "Compress and Download", "text": "Click Compress. Your file is ready in seconds — download it directly to your device." }
          ]
        })}} />
      </head>
      <body style={{ margin: 0, padding: 0 }}><MarqueeBanner />{children}</body>
      <Analytics />
    </html>
  );
}
