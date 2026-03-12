
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image to 200KB?","acceptedAnswer":{"@type":"Answer","text":"Upload your image, select 200KB as the target size, and click compress. Our tool automatically reduces quality and resolution to hit exactly 200KB or under. All processing happens in your browser."}},{"@type":"Question","name":"Will compressing reduce image quality?","acceptedAnswer":{"@type":"Answer","text":"Some quality reduction is necessary to reach very small file sizes. Our tool minimizes visible quality loss by using smart compression algorithms. WebP format produces the best quality at small sizes."}},{"@type":"Question","name":"Is there a file size limit for compression?","acceptedAnswer":{"@type":"Answer","text":"No. You can compress images of any size — from smartphone photos (3-5MB) to DSLR RAW exports (20MB+). The tool runs entirely in your browser so there are no server upload limits."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Image to 200KB Free Online — No Upload, Instant',
  description: 'Compress any image to exactly 200KB free online. No file upload — 100% private. Great for ecommerce listings, social media, and portals with a 200KB image limit.',
  keywords: 'compress image to 200kb, reduce image size to 200kb, resize photo 200kb, 200kb image compressor online free',
  alternates: { canonical: '/compress-to-200kb' },
};
export default function Page() { return <ClientPage />; }
