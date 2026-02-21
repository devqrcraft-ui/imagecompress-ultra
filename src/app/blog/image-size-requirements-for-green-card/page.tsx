import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Green Card Photo Size Requirements 2025 — I-485, I-130, I-90',
  description: 'Complete guide to green card photo size requirements for I-485, I-130, and I-90 forms. Compress your photo to meet USCIS 240KB limit instantly.',
  keywords: 'green card photo size requirements, i-485 photo size, compress photo for green card, green card photo 240kb, uscis green card photo',
  alternates: { canonical: '/blog/image-size-requirements-for-green-card' },
};
export default function Page() { return <ClientPage />; }
