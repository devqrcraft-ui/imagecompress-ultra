import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'How to Compress Images on Windows 11 Free — No Software Install',
  description: 'Compress images on Windows 11 without installing software. Use your browser — free, instant, no upload. Reduce JPEG, PNG, WebP size in seconds. Works on any Windows PC.',
  keywords: 'compress image Windows 11, reduce image size Windows 11 free, compress photo Windows 11 no software, shrink image size PC, image compressor Windows free, compress picture Windows 11',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/compress-image-on-windows-11' },
};

export default function Page() { return <ClientPage />; }
