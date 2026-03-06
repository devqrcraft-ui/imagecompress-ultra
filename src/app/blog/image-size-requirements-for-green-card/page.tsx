import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Green Card Photo Size Requirements 2026 — I-485, I-130, I-90',
  description: 'Complete guide to green card photo size requirements for I-485, I-130, I-90 forms. Compress your photo to under 240KB free. No upload, 100% private.',
  keywords: 'green card photo requirements, i-485 photo size, i-130 photo requirements, green card photo compression, resize photo for green card',
  alternates: { canonical: 'https://compressto20kb.com/blog/image-size-requirements-for-green-card' },
};
export default function Page() { return <ClientPage />; }
