import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'How to Compress Image for USCIS — Step-by-Step Guide 2025',
  description: 'Learn how to compress your photo for USCIS forms N-400, DS-160, I-485 to under 240KB. Free online tool, no upload required, 100% private.',
  keywords: 'how to compress image for uscis, uscis photo compression guide, reduce photo size for uscis, uscis 240kb photo',
  alternates: { canonical: '/blog/how-to-compress-image-for-uscis' },
};
export default function Page() { return <ClientPage />; }
