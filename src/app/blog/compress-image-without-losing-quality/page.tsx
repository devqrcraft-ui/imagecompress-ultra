import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'How to Compress Images Without Losing Quality — Free Tool 2026',
  description: 'Compress images without visible quality loss using smart compression. Free online tool — no upload, no signup. Works for JPEG, PNG, WebP. Before/after preview included.',
  keywords: 'compress image without losing quality, compress photo without quality loss, reduce image size without losing quality, lossless image compression free, compress image keep quality',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/compress-image-without-losing-quality' },
};

export default function Page() { return <ClientPage />; }
