import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Images for Squarespace — Free, Faster Site, Better SEO',
  description: 'Compress images for Squarespace websites. Reduce photo size for faster page load and better Google ranking. Convert to WebP, no upload, 100% free.',
  keywords: 'compress images for squarespace, squarespace image size limit, squarespace image optimization, resize photos for squarespace, squarespace webp images',
  alternates: { canonical: '/compress-for-squarespace' },
};
export default function Page() { return <ClientPage />; }
