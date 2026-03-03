import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'US Passport Photo Requirements 2026 — Size, Format & Compression',
  description: 'Official US passport photo requirements for 2026. Size, format, background, and how to compress your photo to under 240KB for online passport renewal.',
  keywords: 'us passport photo requirements, passport photo size, passport photo compression, compress passport photo, us passport online photo',
  alternates: { canonical: '/blog/us-passport-photo-requirements' },
};
export default function Page() { return <ClientPage />; }
