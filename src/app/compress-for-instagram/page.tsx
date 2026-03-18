
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the best image size for Instagram?","acceptedAnswer":{"@type":"Answer","text":"Instagram displays square posts at 1080x1080px, portrait at 1080x1350px, and landscape at 1080x566px. For file size, keep images under 1MB. JPEG at 85-90% quality at 1080px typically produces 100-300KB — ideal for fast loading without quality loss."}},{"@type":"Question","name":"How do I compress a photo for Instagram without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Upload your image, select JPEG format at 85-90% quality, and compress. Instagram re-compresses uploads automatically — starting with a well-optimized file reduces double-compression artifacts and keeps your posts looking sharp."}},{"@type":"Question","name":"Does Instagram accept WebP images?","acceptedAnswer":{"@type":"Answer","text":"No — Instagram requires JPEG for photo uploads. Use JPEG format when compressing images for Instagram posts, Stories, and Reels thumbnails."}},{"@type":"Question","name":"Will my photos be uploaded to a server when compressing for Instagram?","acceptedAnswer":{"@type":"Answer","text":"No. All compression runs in your browser. Your photos never leave your device — unlike other tools that upload files to their servers."}}]};
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compress Photos for Instagram 2026 — Keep Quality, Under 1MB, Free',
  description: 'Instagram recompresses uploads and destroys quality. Pre-compress to under 1MB at 1080px — our tool preserves sharpness Instagram would crush. Free, instant, no signup.',
  keywords: 'compress image for instagram, resize image for instagram, instagram photo size, compress photo for instagram, instagram image optimizer',
  alternates: { canonical: '/compress-for-instagram' },
  openGraph: {
    title: 'Compress Images for Instagram Free — 1080px, No Upload',
    description: 'Resize and compress photos to perfect Instagram dimensions. Files stay in your browser.',
    url: 'https://compressto20kb.com/compress-for-instagram',
    images: [{ url: 'https://compressto20kb.com/og-image.png', width: 1200, height: 630, alt: 'Compress Images for Instagram Free' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Images for Instagram Free',
    description: 'Resize photos to 1080px. No upload, free, instant.',
  },
};

export { default } from './client';
