import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Photo for Visa Application — US, Schengen, UK — Free Online',
  description: 'Compress visa application photo to exact KB size for US visa, Schengen visa, UK visa, and more. Free, no upload, instant. Meet photo file size requirements for any country.',
  keywords: 'compress photo for visa application, visa photo size requirements, compress image for us visa, compress photo for schengen visa, resize visa photo online free',
  alternates: { canonical: '/compress-image-for-visa' },
};
export default function Page() { return <ClientPage />; }
