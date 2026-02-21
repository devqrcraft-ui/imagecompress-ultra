import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Image to 100KB Free Online — No Upload, Instant',
  description: 'Compress any image to exactly 100KB free online. No upload — all processing in your browser. Ideal for websites, email, portals, and forms with a 100KB photo limit.',
  keywords: 'compress image to 100kb, reduce image size to 100kb, resize photo 100kb, 100kb image compressor online free, compress jpg to 100kb, reduce png to 100kb',
  alternates: { canonical: '/compress-to-100kb' },
};
export default function Page() { return <ClientPage />; }
