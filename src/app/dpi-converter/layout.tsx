import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'What Is 150 DPI? Free Online DPI Converter — 72, 150, 300, 600 DPI',
  description: '150 DPI = standard web resolution. 300 DPI = print quality. Convert your image DPI free — no upload, instant, browser-only. Passport photos, documents, print files.',
  alternates: { canonical: 'https://www.compressto20kb.com/dpi-converter' },
  openGraph: {
    title: 'What Is 150 DPI? Free Online DPI Converter — 72, 150, 300, 600 DPI',
    description: 'Convert image DPI free — 72, 96, 150, 300, 600 DPI. No upload, browser-only, instant results.',
    url: 'https://www.compressto20kb.com/dpi-converter',
    siteName: 'CompressTo20KB',
    type: 'website',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
