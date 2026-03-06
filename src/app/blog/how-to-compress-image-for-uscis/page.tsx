import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'How to Compress Image for USCIS — N-400, I-485, DS-160 Guide 2026',
  description: 'Step-by-step guide to compress your photo for USCIS forms N-400, I-485, DS-160 to under 240KB. Free online tool, no upload, 100% private.',
  keywords: 'how to compress image for uscis, uscis photo compression, reduce photo size for uscis, uscis 240kb photo requirement',
  alternates: { canonical: 'https://compressto20kb.com/blog/how-to-compress-image-for-uscis' },
};
export default function Page() { return <ClientPage />; }
