import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Image to 200KB Free Online — No Upload, Instant',
  description: 'Compress any image to exactly 200KB free online. No file upload — 100% private. Great for ecommerce listings, social media, and portals with a 200KB image limit.',
  keywords: 'compress image to 200kb, reduce image size to 200kb, resize photo 200kb, 200kb image compressor online free',
  alternates: { canonical: '/compress-to-200kb' },
};
export default function Page() { return <ClientPage />; }
