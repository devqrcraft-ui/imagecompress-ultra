import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Image to 30KB Free Online — No Upload, Instant',
  description: 'Compress any image to exactly 30KB online for free. No upload to server — files stay on your device. Works for JPEG, PNG, WebP, HEIC. Instant, no signup.',
  keywords: 'compress image to 30kb, reduce image size to 30kb, compress photo to 30kb, image compressor 30kb, resize image to 30kb free',
  alternates: { canonical: '/blog/compress-image-to-30kb' },
};

export default function Page() { return <ClientPage />; }
