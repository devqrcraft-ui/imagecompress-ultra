import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Photo for LinkedIn Profile — Perfect Size, Free Online',
  description: 'Compress your LinkedIn profile photo and banner to the ideal size. Free, no upload, works instantly in browser.',
  keywords: 'compress photo for linkedin, linkedin profile photo size, linkedin banner image size, resize photo for linkedin, compress linkedin profile picture free',
  alternates: { canonical: '/compress-for-linkedin' },
};
export default function Page() { return <ClientPage />; }
