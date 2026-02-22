import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'CompressTo20KB vs TinyPNG — Which is Better in 2025?',
  description: 'Comparing CompressTo20KB vs TinyPNG: privacy, file size control, bulk compression, and exact KB mode. See why users switch from TinyPNG.',
  keywords: 'tinypng alternative, tinypng vs, better than tinypng, tinypng free alternative, compress image without tinypng',
  alternates: { canonical: '/vs/tinypng' },
};
export default function Page() { return <ClientPage />; }
