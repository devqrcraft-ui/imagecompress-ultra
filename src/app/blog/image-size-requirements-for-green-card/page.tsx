
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Use modern formats like WebP or AVIF which offer 25-50% smaller file sizes than JPEG at the same visual quality. Our tool compresses images client-side in your browser with no upload required, preserving maximum quality."}},{"@type":"Question","name":"Is this image compressor free?","acceptedAnswer":{"@type":"Answer","text":"Yes. CompressTo20KB is 100% free with no file size limits, no account required, and no watermarks. All compression happens in your browser — your images never leave your device."}},{"@type":"Question","name":"What image formats are supported?","acceptedAnswer":{"@type":"Answer","text":"We support JPEG, PNG, WebP, AVIF, and GIF. You can compress and convert between formats. WebP and AVIF produce the smallest file sizes for web use."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Green Card Photo Size Requirements 2026 — I-485, I-130, I-90',
  description: 'Complete guide to green card photo size requirements for I-485, I-130, I-90 forms. Compress your photo to under 240KB free. No upload, 100% private.',
  keywords: 'green card photo requirements, i-485 photo size, i-130 photo requirements, green card photo compression, resize photo for green card',
  alternates: { canonical: 'https://compressto20kb.com/blog/image-size-requirements-for-green-card' },
  openGraph: { url: 'https://compressto20kb.com/blog/image-size-requirements-for-green-card' },
};
export default function Page() { return <ClientPage />; }
