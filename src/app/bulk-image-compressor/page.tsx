
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How many images can I compress at once?","acceptedAnswer":{"@type":"Answer","text":"You can compress multiple images in bulk with no limit. Select all files at once and the tool processes them simultaneously in your browser. No upload, no queue, no waiting."}},{"@type":"Question","name":"Is bulk image compression free?","acceptedAnswer":{"@type":"Answer","text":"Yes. Bulk compression is completely free with no account required. All images are processed locally in your browser — none of your files are sent to any server."}},{"@type":"Question","name":"What formats does bulk compression support?","acceptedAnswer":{"@type":"Answer","text":"Bulk compression supports JPEG, PNG, WebP, and AVIF. You can compress mixed batches of different formats at the same time and download all results as individual files."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Bulk Image Compressor – Compress Unlimited Images Online (No Upload)',
  description: 'Free bulk image compressor. Compress unlimited JPG, PNG, WebP in browser. No signup, no upload. Download all as ZIP instantly.',
  keywords: 'bulk image compressor, batch image compressor online free, compress multiple images at once, bulk resize photos online, batch compress jpg png, compress 50 images free',
  alternates: { canonical: 'https://compressto20kb.com/bulk-image-compressor' },
  openGraph: { url: 'https://compressto20kb.com/bulk-image-compressor' },
};
export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><ClientPage /></>; }
