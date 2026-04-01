import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'DPI Converter Online Free — Change to 72, 150, 300 DPI Instantly',
  description: 'Convert image DPI free — 72, 96, 150, 300, 600 DPI. No upload, instant, browser-only. Print-ready in seconds. Works for passport photos, documents, and print files.',
  alternates: { canonical: 'https://www.compressto20kb.com/dpi-converter' },
  openGraph: {
    title: 'DPI Converter Online Free — Change to 72, 150, 300 DPI Instantly',
    description: 'Convert image DPI free — 72, 96, 150, 300, 600 DPI. No upload, browser-only, instant results.',
    url: 'https://compressto20kb.com/dpi-converter',
    siteName: 'CompressTo20KB',
    type: 'website',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
