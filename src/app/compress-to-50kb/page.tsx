
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image to 50KB?","acceptedAnswer":{"@type":"Answer","text":"Upload your image, select 50KB as the target size, and click compress. Our tool automatically reduces quality and resolution to hit exactly 50KB or under. All processing happens in your browser."}},{"@type":"Question","name":"Will compressing reduce image quality?","acceptedAnswer":{"@type":"Answer","text":"Some quality reduction is necessary to reach very small file sizes. Our tool minimizes visible quality loss by using smart compression algorithms. WebP format produces the best quality at small sizes."}},{"@type":"Question","name":"Is there a file size limit for compression?","acceptedAnswer":{"@type":"Answer","text":"No. You can compress images of any size — from smartphone photos (3-5MB) to DSLR RAW exports (20MB+). The tool runs entirely in your browser so there are no server upload limits."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Image to 50KB Free Online — No Upload, Instant',
  description: 'Compress any image to exactly 50KB free online. No upload needed — files stay on your device. Perfect for government forms, job applications, and portals requiring 50KB photos.',
  keywords: 'compress image to 50kb, reduce image size to 50kb, resize photo to 50kb, 50kb image compressor, compress jpg to 50kb, compress png to 50kb online free',
  alternates: { canonical: '/compress-to-50kb' },
  openGraph: { title: 'Compress Image to 50KB Free — No Upload, 100% Private', description: 'Compress any image to exactly 50KB. Files never leave your device. Free, instant, no signup.', url: 'https://compressto20kb.com/compress-to-50kb' },
};
export default function Page() { return <ClientPage />; }
