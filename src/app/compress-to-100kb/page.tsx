
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image to 100KB?","acceptedAnswer":{"@type":"Answer","text":"Upload your image, select 100KB as the target size, and click compress. Our tool automatically reduces quality and resolution to hit exactly 100KB or under. All processing happens in your browser."}},{"@type":"Question","name":"Will compressing reduce image quality?","acceptedAnswer":{"@type":"Answer","text":"Some quality reduction is necessary to reach very small file sizes. Our tool minimizes visible quality loss by using smart compression algorithms. WebP format produces the best quality at small sizes."}},{"@type":"Question","name":"Is there a file size limit for compression?","acceptedAnswer":{"@type":"Answer","text":"No. You can compress images of any size — from smartphone photos (3-5MB) to DSLR RAW exports (20MB+). The tool runs entirely in your browser so there are no server upload limits."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Image to 100KB Free Online — No Upload, Instant',
  description: 'Compress any image to exactly 100KB free online. No upload — all processing in your browser. Ideal for websites, email, portals, and forms with a 100KB photo limit.',
  keywords: 'compress image to 100kb, reduce image size to 100kb, resize photo 100kb, 100kb image compressor online free, compress jpg to 100kb, reduce png to 100kb',
  alternates: { canonical: '/compress-to-100kb' },
};
export default function Page() { return <ClientPage />; }
