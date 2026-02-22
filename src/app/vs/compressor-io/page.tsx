import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'CompressTo20KB vs Compressor.io — Free Alternative 2025',
  description: 'CompressTo20KB vs Compressor.io: unlimited free compression, exact KB mode, bulk images, and no server uploads. The better free alternative.',
  keywords: 'compressor.io alternative, compressor io vs, better than compressor io, free image compressor alternative',
  alternates: { canonical: '/vs/compressor-io' },
};
export default function Page() { return <ClientPage />; }
