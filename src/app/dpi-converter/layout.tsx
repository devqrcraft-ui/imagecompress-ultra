import type { Metadata } from 'next';
import type { ReactNode } from 'react';

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
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does changing DPI affect image quality?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Changing DPI metadata does not resize or affect pixel data — it only changes how software interprets the print size. Pixel dimensions stay the same.' },
    },
    {
      '@type': 'Question',
      name: 'What DPI does USCIS require?',
      acceptedAnswer: { '@type': 'Answer', text: 'USCIS and US State Department recommend 300 DPI for printed photos. For digital uploads (DS-160, DV Lottery online), file size (max 240KB) and pixel dimensions (600-1200px) matter more.' },
    },
    {
      '@type': 'Question',
      name: 'Why is my photo 72 DPI?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most smartphone and digital cameras save photos at 72 DPI by default. This is fine for screens but may need changing to 300 DPI for printing or government document submission.' },
    },
    {
      '@type': 'Question',
      name: 'Does this tool resize my image?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. This tool only changes the DPI metadata in the JPEG header. Your image pixel dimensions stay exactly the same.' },
    },
    {
      '@type': 'Question',
      name: 'Is my image uploaded to a server?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. All processing happens in your browser using JavaScript. Your image never leaves your device.' },
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
