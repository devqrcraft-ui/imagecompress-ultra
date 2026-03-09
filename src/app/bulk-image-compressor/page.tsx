import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Bulk Image Compressor — Compress 50 Images at Once, Free & Instant',
  description: 'Compress 50+ images at once — free, no upload, no signup. Bulk compress JPG, PNG, WebP, HEIC in seconds and download as ZIP. Faster than TinyPNG for batch jobs.',
  keywords: 'bulk image compressor, batch image compressor online free, compress multiple images at once, bulk resize photos online, batch compress jpg png, compress 50 images free',
  alternates: { canonical: '/bulk-image-compressor' },
};
export default function Page() { return <ClientPage />; }
