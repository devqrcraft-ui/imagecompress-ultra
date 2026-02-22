import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'CompressTo20KB vs Kraken.io — Free Alternative in 2025',
  description: 'CompressTo20KB vs Kraken.io: no upload, no monthly fee, exact KB mode. See why users switch from Kraken.io to our free browser-based tool.',
  keywords: 'kraken.io alternative, kraken.io free alternative, kraken io vs, better than kraken io, image compressor no upload',
  alternates: { canonical: '/vs/kraken' },
};
export default function Page() { return <ClientPage />; }
