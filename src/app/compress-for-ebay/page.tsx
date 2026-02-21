import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Images for eBay Listings Free — Faster Upload, Better Rank',
  description: 'Compress product photos for eBay listings. Reduce image size without losing quality — faster page load, quicker uploads. Free, no upload, works in browser.',
  keywords: 'compress images for ebay, ebay product photo size, resize image for ebay listing, ebay image requirements, compress jpg for ebay, ebay photo compressor free online',
  alternates: { canonical: '/compress-for-ebay' },
};
export default function Page() { return <ClientPage />; }
