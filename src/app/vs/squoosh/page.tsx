import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'CompressTo20KB vs Squoosh — Which Compressor is Better? 2025',
  description: 'Squoosh vs CompressTo20KB: bulk compression, exact KB mode, ease of use, and USCIS support. Find the best free image compressor for your needs.',
  keywords: 'squoosh alternative, squoosh vs, better than squoosh, squoosh bulk compress, squoosh exact size',
  alternates: { canonical: '/vs/squoosh' },
};
export default function Page() { return <ClientPage />; }
