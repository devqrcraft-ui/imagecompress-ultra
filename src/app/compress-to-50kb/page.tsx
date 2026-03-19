import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Image to 50KB Free Online — No Upload, 100% Private',
  description: 'Compress any image to exactly 50KB free online. Works in your browser — files never leave your device. No upload, no signup. Perfect for government forms, job applications, and portals requiring a 50KB photo.',
  keywords: 'compress image to 50kb, reduce image size to 50kb, resize photo to 50kb, 50kb image compressor online free, compress jpg to 50kb, compress png to 50kb, compress passport photo to 50kb',
  alternates: { canonical: 'https://compressto20kb.com/compress-to-50kb' },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image to exactly 50KB?","acceptedAnswer":{"@type":"Answer","text":"Open compressto20kb.com, upload your image, switch to Exact KB Mode, type 50, and click Compress. Binary search hits exactly 50KB within 1KB accuracy — in your browser."}},{"@type":"Question","name":"Why do government portals require photos under 50KB?","acceptedAnswer":{"@type":"Answer","text":"US government portals (USCIS, TSA PreCheck, passport renewal), Indian exam portals (UPSC, SSC, NEET), and Pakistan NADRA commonly require photos under 50KB due to legacy infrastructure."}},{"@type":"Question","name":"Does my image get uploaded to a server when compressing to 50KB?","acceptedAnswer":{"@type":"Answer","text":"No. All compression runs in your browser using WebAssembly. Your image never leaves your device — unlike 11zon, TinyPNG, or Cloudinary which upload files to their servers."}},{"@type":"Question","name":"Can I compress multiple images to 50KB at once?","acceptedAnswer":{"@type":"Answer","text":"Yes — upload up to 50 images and compress them all to exactly 50KB in one batch. Download individually or as a ZIP. All processing stays on your device."}},{"@type":"Question","name":"How to compress an image to 50KB on iPhone or Android?","acceptedAnswer":{"@type":"Answer","text":"Open compressto20kb.com in Safari (iPhone) or Chrome (Android). Tap upload, select your photo, switch to Exact KB Mode, type 50, tap Compress. Downloads instantly — no app needed."}},{"@type":"Question","name":"What formats compress best to 50KB?","acceptedAnswer":{"@type":"Answer","text":"JPEG gives the smallest files and is required by most government portals. WebP gives better visual quality at 50KB but is not always accepted. PNG is rarely suitable for a 50KB target."}}]};


const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Compress an Image to 50KB Online',
  description: 'Step-by-step guide to compress any image to exactly 50KB free, without uploading to a server.',
  totalTime: 'PT30S',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Upload your image', text: 'Click upload or drag your file. Accepts JPEG, PNG, WebP, AVIF, HEIC. Up to 50 files at once.' },
    { '@type': 'HowToStep', position: 2, name: 'Switch to Exact KB Mode', text: 'Toggle the mode selector to Exact KB. Type 50 in the target field.' },
    { '@type': 'HowToStep', position: 3, name: 'Select JPEG for government portals', text: 'Most government forms require JPEG. Select JPEG for USCIS, UPSC, NADRA portals.' },
    { '@type': 'HowToStep', position: 4, name: 'Compress and download', text: 'Click Compress. Your browser processes instantly — nothing uploaded. Download the 50KB file.' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ClientPage />
    </>
  );
}
