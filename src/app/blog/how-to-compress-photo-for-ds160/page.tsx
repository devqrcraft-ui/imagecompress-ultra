import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'How to Compress Photo for DS-160 — US Visa Application 2026',
  description: 'Compress your photo for DS-160 US visa application to under 240KB. Free tool, no upload, 100% private. Step-by-step guide for ceac.state.gov.',
  keywords: 'compress photo for ds-160, ds-160 photo size, ds-160 photo requirements, ds-160 photo too large, us visa photo compression',
  alternates: { canonical: '/blog/how-to-compress-photo-for-ds160' },
};
export default function Page() { return <ClientPage />; }
