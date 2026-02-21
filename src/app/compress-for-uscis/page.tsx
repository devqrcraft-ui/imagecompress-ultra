import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Photo for USCIS Forms — N-400, DS-160, I-485 — Under 240KB',
  description: 'Compress passport photo for USCIS N-400, DS-160 visa, I-485, and US passport online application. Meet exact KB requirements instantly. No upload — 100% private.',
  keywords: 'compress photo for uscis, uscis photo size requirements, compress image for ds-160, compress photo for n-400, resize photo for uscis online, uscis passport photo compressor',
  alternates: { canonical: '/compress-for-uscis' },
};
export default function Page() { return <ClientPage />; }
