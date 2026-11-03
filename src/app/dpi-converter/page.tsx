import type { Metadata } from 'next';
import DPIConverterClient from './client';

export const metadata: Metadata = {
  title: 'DPI Converter Online: Change JPEG DPI Metadata',
  description: 'Change JPEG print-density metadata in your browser. This does not change pixel dimensions or validate photo requirements.',
  alternates: { canonical: 'https://www.compressto20kb.com/dpi-converter' },
  openGraph: { url: 'https://www.compressto20kb.com/dpi-converter' },
};

export default function Page() {
  return <DPIConverterClient />;
}
