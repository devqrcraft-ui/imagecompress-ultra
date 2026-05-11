import AuthorBox from '@/app/components/AuthorBox'

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Use modern formats like WebP or AVIF which offer 25-50% smaller file sizes than JPEG at the same visual quality. Our tool compresses images client-side in your browser with no upload required, preserving maximum quality."}},{"@type":"Question","name":"Is this image compressor free?","acceptedAnswer":{"@type":"Answer","text":"Yes. CompressTo20KB is 100% free with no file size limits, no account required, and no watermarks. All compression happens in your browser — your images never leave your device."}},{"@type":"Question","name":"What image formats are supported?","acceptedAnswer":{"@type":"Answer","text":"We support JPEG, PNG, WebP, AVIF, and GIF. You can compress and convert between formats. WebP and AVIF produce the smallest file sizes for web use."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'How to Compress Photo for DS-160 — US Visa Application 2026',
  description: 'Compress your photo for DS-160 US visa application to under 240KB. Free tool, no upload, 100% private. Step-by-step guide for ceac.state.gov.',
  keywords: 'compress photo for ds-160, ds-160 photo size, ds-160 photo requirements, ds-160 photo too large, us visa photo compression',
  alternates: { canonical: 'https://compressto20kb.com/blog/how-to-compress-photo-for-ds160' },
  openGraph: { url: 'https://compressto20kb.com/blog/how-to-compress-photo-for-ds160' },
};
export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><ClientPage /><AuthorBox /></>; }
