import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'How to Compress Photo for DS-160 Visa Application — Under 240KB',
  description: 'Compress your photo for the DS-160 nonimmigrant visa application to under 240KB. Free tool, no upload, instant results. Meet all State Department requirements.',
  keywords: 'compress photo for ds-160, ds-160 photo size, ds160 photo requirements, compress visa photo ds160, ds-160 240kb photo',
  alternates: { canonical: '/blog/how-to-compress-photo-for-ds160' },
};
export default function Page() { return <ClientPage />; }
