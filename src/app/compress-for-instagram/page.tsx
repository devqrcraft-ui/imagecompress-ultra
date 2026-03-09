import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compress Photos for Instagram – Under 1MB, No Quality Loss, Free',
  description: 'Instagram compresses your photos automatically — but badly. Pre-compress your images to under 1MB for crisp, high-quality Instagram posts. Free, instant, no signup.',
  keywords: 'compress image for instagram, resize image for instagram, instagram photo size, compress photo for instagram, instagram image optimizer',
  alternates: { canonical: '/compress-for-instagram' },
  openGraph: {
    title: 'Compress Images for Instagram Free — 1080px, No Upload',
    description: 'Resize and compress photos to perfect Instagram dimensions. Files stay in your browser.',
    url: 'https://www.compressto20kb.com/compress-for-instagram',
    images: [{ url: 'https://www.compressto20kb.com/og-image.png', width: 1200, height: 630, alt: 'Compress Images for Instagram Free' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Images for Instagram Free',
    description: 'Resize photos to 1080px. No upload, free, instant.',
  },
};

export { default } from './client';
