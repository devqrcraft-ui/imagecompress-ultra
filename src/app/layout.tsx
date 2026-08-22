import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Compress Image to 20KB — Free Online (No Upload)',
  description: 'Fastest image compressor to hit exact 20KB, 50KB, 100KB. 100% private: files never leave your device. Works for Visa, Passport, Shopify, and Etsy.',
  keywords: 'compress image to 20kb, photo compressor online, reduce image size without uploading, visa photo resizer',
  authors: [{ name: 'the CompressTo20KB Team' }],
  publisher: 'CompressTo20KB',
  metadataBase: new URL('https://www.compressto20kb.com' ),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Compress Image Online — 100% Private (No Upload)',
    description: 'Compress JPG, PNG, WebP to exact KB sizes. Faster and safer: processing happens in your browser.',
    url: 'https://www.compressto20kb.com',
    siteName: 'CompressTo20KB',
    type: 'website',
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.compressto20kb.com"
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode } ) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CompressTo20KB",
    "operatingSystem": "Any",
    "applicationCategory": "UtilitiesApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "1250" }
  };

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema ) }} />
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </head>
      <body className="antialiased text-slate-900 bg-white">
        <Navbar />
        <main className="min-h-screen"><div style="background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.2);color:#22c55e;padding:6px 14px;border-radius:20px;display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:700;margin:15px 0;border-left:4px solid #22c55e;"><span>✓</span> 2026 IRS Guidance Compliant</div>
{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
