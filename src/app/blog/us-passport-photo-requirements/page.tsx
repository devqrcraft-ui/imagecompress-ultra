import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'US Passport Photo Requirements 2025 — Complete Guide',
  description: 'Complete guide to US passport photo requirements in 2025. Size, format, background, expression rules, and how to compress your photo for online applications.',
  keywords: 'us passport photo requirements, passport photo size requirements, passport photo 2x2 inches, compress passport photo online, us passport photo 2025',
  alternates: { canonical: '/blog/us-passport-photo-requirements' },
};
export default function Page() { return <ClientPage />; }
