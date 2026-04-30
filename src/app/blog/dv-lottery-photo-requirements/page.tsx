
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are the DV Lottery photo requirements?","acceptedAnswer":{"@type":"Answer","text":"DV Lottery photos must be: 600x600px minimum, square format, JPEG under 240KB, white or off-white background, taken within 6 months, no glasses, full face visible, neutral expression. Use our tool to compress to under 240KB."}},{"@type":"Question","name":"What is the maximum file size for DV Lottery photo?","acceptedAnswer":{"@type":"Answer","text":"The DV Lottery requires photos under 240KB in JPEG format. Photos over 240KB will be rejected. Use our compressor to reduce your photo to exactly 200KB or under while maintaining quality."}},{"@type":"Question","name":"Can I compress a DV Lottery photo online for free?","acceptedAnswer":{"@type":"Answer","text":"Yes. Use our visa photo compressor — upload your photo, set target to 200KB JPEG, and download. All processing happens in your browser. Your photo is never uploaded to any server, keeping your biometric data private."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'DV Lottery Photo Requirements 2026 — Size, Format & Free Compressor Tool',
  description: 'DV Lottery 2026: photo must be 600x600px minimum, JPEG under 240KB, white background. Compress your photo free — processed in your browser, never uploaded to any server.',
  keywords: 'dv lottery photo requirements, dv 2026 photo size, diversity visa photo compress, dv lottery photo format, compress photo for dv lottery',
  alternates: { canonical: 'https://compressto20kb.com/blog/dv-lottery-photo-requirements' },
  openGraph: { url: 'https://compressto20kb.com/blog/dv-lottery-photo-requirements' },
};
export default function Page() { return <ClientPage />; }
