import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Image to 100KB Free Online — No Upload, 100% Private',
  description: 'Compress any image to exactly 100KB free online. Works in your browser — files never leave your device. No upload, no signup. Perfect for email, web, ecommerce, and forms with a 100KB photo limit.',
  keywords: 'compress image to 100kb, reduce image size to 100kb, resize photo to 100kb, 100kb image compressor online free, compress jpg to 100kb, reduce png to 100kb, compress webp to 100kb',
  alternates: { canonical: 'https://compressto20kb.com/compress-to-100kb' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I compress an image to exactly 100KB?',
      acceptedAnswer: { '@type': 'Answer', text: 'Open compressto20kb.com, upload your image, switch to Exact KB Mode, type 100, and click Compress. The tool uses binary search to hit exactly 100KB within 1KB accuracy — automatically.' },
    },
    {
      '@type': 'Question',
      name: 'Does my image get uploaded to a server when compressing to 100KB?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. All compression runs directly in your browser using WebAssembly. Your image never leaves your device — unlike tools such as 11zon, TinyPNG, or Cloudinary which process files on their servers.' },
    },
    {
      '@type': 'Question',
      name: 'Is 100KB good quality for web and email images?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. For most blog images, product thumbnails, and email attachments displayed at 400–800px width, 100KB provides excellent quality. For full-width hero images, consider 200–500KB instead.' },
    },
    {
      '@type': 'Question',
      name: 'What image formats compress best to 100KB?',
      acceptedAnswer: { '@type': 'Answer', text: 'WebP and AVIF give the best visual quality at 100KB. JPEG is universally compatible and works well. PNG is rarely ideal for 100KB targets unless the image is a simple graphic with few colors.' },
    },
    {
      '@type': 'Question',
      name: 'Can I compress multiple images to 100KB at once?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — upload up to 50 images at once, set Exact KB Mode to 100, and click Compress All. Every image is compressed to 100KB simultaneously in your browser. Download individually or as a ZIP file.' },
    },
    {
      '@type': 'Question',
      name: 'How do I compress an image to 100KB on iPhone or Android?',
      acceptedAnswer: { '@type': 'Answer', text: 'Open compressto20kb.com in Safari (iPhone) or Chrome (Android). Tap the upload area, select your photo from Camera Roll, switch to Exact KB Mode, type 100, and tap Compress. The file downloads instantly — no app needed.' },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ClientPage />
    </>
  );
}