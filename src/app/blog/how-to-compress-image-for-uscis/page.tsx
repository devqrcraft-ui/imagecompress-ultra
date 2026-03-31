
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Use modern formats like WebP or AVIF which offer 25-50% smaller file sizes than JPEG at the same visual quality. Our tool compresses images client-side in your browser with no upload required, preserving maximum quality."}},{"@type":"Question","name":"Is this image compressor free?","acceptedAnswer":{"@type":"Answer","text":"Yes. CompressTo20KB is 100% free with no file size limits, no account required, and no watermarks. All compression happens in your browser — your images never leave your device."}},{"@type":"Question","name":"What image formats are supported?","acceptedAnswer":{"@type":"Answer","text":"We support JPEG, PNG, WebP, AVIF, and GIF. You can compress and convert between formats. WebP and AVIF produce the smallest file sizes for web use."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'How to Compress Image for USCIS — N-400, I-485, DS-160 Guide 2026',
  description: 'Step-by-step guide to compress your photo for USCIS forms N-400, I-485, DS-160 to under 240KB. Free online tool, no upload, 100% private.',
  keywords: 'how to compress image for uscis, uscis photo compression, reduce photo size for uscis, uscis 240kb photo requirement',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/how-to-compress-image-for-uscis' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/how-to-compress-image-for-uscis' },
};
export default function Page() { return <ClientPage />; }
