import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'DPI Converter — Change Image DPI Free Online, No Upload',
  description: 'Convert image DPI free online. Change from 72 to 300 DPI for print, passport photos, and official documents. Files never leave your device. No signup.',
  alternates: { canonical: 'https://www.compressto20kb.com/dpi-converter' },
  openGraph: {
    title: 'DPI Converter — Change Image DPI Free, No Upload',
    description: 'Convert image DPI online for print or documents. 100% private, browser-based.',
    url: 'https://www.compressto20kb.com/dpi-converter',
    siteName: 'CompressTo20KB',
    type: 'website',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
