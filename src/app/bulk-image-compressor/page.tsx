import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Bulk Image Compressor Free Online — Compress 50 Photos at Once',
  description: 'Compress up to 50 images at once for free. Bulk resize and compress JPG, PNG, WebP, HEIC in your browser — no upload, no server, download as ZIP. Instant batch compression.',
  keywords: 'bulk image compressor, batch image compressor online free, compress multiple images at once, bulk resize photos online, batch compress jpg png, compress 50 images free',
  alternates: { canonical: '/bulk-image-compressor' },
};
export default function Page() { return <ClientPage />; }
