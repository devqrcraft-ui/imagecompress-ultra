import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Image to 50KB Free Online — No Upload, Instant',
  description: 'Compress any image to exactly 50KB free online. No upload needed — files stay on your device. Perfect for government forms, job applications, and portals requiring 50KB photos.',
  keywords: 'compress image to 50kb, reduce image size to 50kb, resize photo to 50kb, 50kb image compressor, compress jpg to 50kb, compress png to 50kb online free',
  alternates: { canonical: '/compress-to-50kb' },
  openGraph: { title: 'Compress Image to 50KB Free — No Upload, 100% Private', description: 'Compress any image to exactly 50KB. Files never leave your device. Free, instant, no signup.', url: 'https://www.compressto20kb.com/compress-to-50kb' },
};
export default function Page() { return <ClientPage />; }
