
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are the photo requirements for a visa application?","acceptedAnswer":{"@type":"Answer","text":"Most visa applications require a JPEG photo under 240KB, 2x2 inches (600x600px minimum), white background, taken within 6 months. Exact requirements vary by country — check the official embassy website for your destination."}},{"@type":"Question","name":"How do I compress a photo for a visa application?","acceptedAnswer":{"@type":"Answer","text":"Upload your photo, select the target size (usually under 200KB or 240KB), and download the compressed JPEG. Our tool compresses without uploading to any server — your photo stays private on your device."}},{"@type":"Question","name":"What file size is required for visa photos?","acceptedAnswer":{"@type":"Answer","text":"Most countries require visa photos under 200-240KB. The US visa requires under 240KB, Schengen visa under 2MB, UK visa under 6MB. Use our visa photo compressor to hit the exact size required."}}]};
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
