import type { Metadata, Viewport } from 'next';
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
  description: 'Set a file-size ceiling - 20KB, 50KB, 100KB, any number - and the tool finds the best quality that fits under it. Runs entirely in your browser; nothing is uploaded.',
  metadataBase: new URL('https://www.compressto20kb.com' ),
  alternates: { canonical: '/' },
  openGraph: {
    title: "Compress Image to 20KB — Private Online Tool",
    description: "Type a kilobyte ceiling and get the best quality that fits under it. Private, browser-based, no upload.",
    url: "https://www.compressto20kb.com",
    siteName: "CompressTo20KB",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress Image to 20KB — Private Online Tool",
    description: "Type a kilobyte ceiling and get the best quality that fits under it. Private, browser-based, no upload.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode } ) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CompressTo20KB",
    "operatingSystem": "Any",
    "applicationCategory": "UtilitiesApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.compressto20kb.com" }]
  };

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema ) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </head>
      <body className="antialiased text-slate-900 bg-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
