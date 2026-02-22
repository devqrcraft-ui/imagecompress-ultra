import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'CompressTo20KB vs PicResize — Better Free Alternative 2025',
  description: 'CompressTo20KB vs PicResize: exact KB compression, no upload, WebP support, passport photo presets. See why users choose CompressTo20KB over PicResize.',
  keywords: 'picresize alternative, picresize vs, better than picresize, compress image online free, image compressor no upload',
  alternates: { canonical: '/vs/picresize' },
};
export default function Page() { return <ClientPage />; }
