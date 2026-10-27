import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { faq } from './faq';

export const metadata: Metadata = {
  title: 'DPI Converter & Changer Online — 300 DPI Free, No Upload',
  description: 'Change image DPI free — 72, 96, 150, 300, 600 DPI. DPI converter and changer for USCIS, passport, print. No upload, instant, works in browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/dpi-converter' },
  openGraph: {
    title: 'DPI Converter & Changer Online — 300 DPI Free, No Upload',
    description: 'Change image DPI free — 72, 96, 150, 300, 600 DPI. DPI converter and changer for USCIS, passport, print. No upload, instant.',
    url: 'https://www.compressto20kb.com/dpi-converter',
    siteName: 'CompressTo20KB',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
