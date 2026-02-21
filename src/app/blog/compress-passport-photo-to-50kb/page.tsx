import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Passport Photo to 50KB — Free Online Tool',
  description: 'Compress your passport photo to exactly 50KB or under. Works for visa applications, government forms, and travel documents. Free, private, instant.',
  keywords: 'compress passport photo to 50kb, reduce passport photo size 50kb, passport photo 50kb online, passport photo compressor',
  alternates: { canonical: '/blog/compress-passport-photo-to-50kb' },
};
export default function Page() { return <ClientPage />; }
