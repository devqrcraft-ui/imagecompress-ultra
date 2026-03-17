
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are the photo requirements for a visa application?","acceptedAnswer":{"@type":"Answer","text":"Most visa applications require a JPEG photo under 240KB, 2x2 inches (600x600px minimum), white background, taken within 6 months. Exact requirements vary by country — check the official embassy website for your destination."}},{"@type":"Question","name":"How do I compress a photo for a visa application?","acceptedAnswer":{"@type":"Answer","text":"Upload your photo, select the target size (usually under 200KB or 240KB), and download the compressed JPEG. Our tool compresses without uploading to any server — your photo stays private on your device."}},{"@type":"Question","name":"What file size is required for visa photos?","acceptedAnswer":{"@type":"Answer","text":"Most countries require visa photos under 200-240KB. The US visa requires under 240KB, Schengen visa under 2MB, UK visa under 6MB. Use our visa photo compressor to hit the exact size required."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Image to 30KB Free Online — No Upload, Instant',
  description: 'Compress any image to exactly 30KB online for free. No upload to server — files stay on your device. Works for JPEG, PNG, WebP, HEIC. Instant, no signup.',
  keywords: 'compress image to 30kb, reduce image size to 30kb, compress photo to 30kb, image compressor 30kb, resize image to 30kb free',
  alternates: { canonical: 'https://compressto20kb.com/blog/compress-image-to-30kb' },
};

export default function Page() { return <ClientPage />; }
