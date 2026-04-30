import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Image to 100KB Online Free — Exact Size, Instant, No Upload',
  description: 'Compress images to exactly 100KB free — instant, no upload. Ideal for eBay listings, email attachments, forms with 100KB limit. JPG, PNG, WebP supported. Nothing sent to any server.',
  keywords: 'compress image to 100kb, reduce image size to 100kb, resize photo to 100kb, 100kb image compressor online free, compress jpg to 100kb, reduce png to 100kb, compress webp to 100kb',
  alternates: { canonical: 'https://compressto20kb.com/compress-to-100kb' },
  openGraph: { url: 'https://compressto20kb.com/compress-to-100kb' },
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


const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Compress an Image to 100KB Online',
  description: 'Step-by-step guide to compress any image to exactly 100KB free, without uploading to a server.',
  totalTime: 'PT30S',
  tool: [{ '@type': 'HowToTool', name: 'CompressTo20KB — free online image compressor' }],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Upload your image', text: 'Click the upload area or drag your file. Accepts JPEG, PNG, WebP, AVIF, and HEIC. Up to 50 files at once.' },
    { '@type': 'HowToStep', position: 2, name: 'Switch to Exact KB Mode', text: 'Toggle the mode selector from Quality to Exact KB. Type 100 in the target size field.' },
    { '@type': 'HowToStep', position: 3, name: 'Choose your format', text: 'Select WebP for best quality at small size, or JPEG for universal compatibility.' },
    { '@type': 'HowToStep', position: 4, name: 'Compress and download', text: 'Click Compress. Your browser processes the image instantly — nothing is uploaded. Download the 100KB file directly.' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <ClientPage />
    </>
  );
}