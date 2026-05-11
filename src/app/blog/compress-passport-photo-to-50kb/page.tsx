import AuthorBox from '@/app/components/AuthorBox'

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Use modern formats like WebP or AVIF which offer 25-50% smaller file sizes than JPEG at the same visual quality. Our tool compresses images client-side in your browser with no upload required, preserving maximum quality."}},{"@type":"Question","name":"Is this image compressor free?","acceptedAnswer":{"@type":"Answer","text":"Yes. CompressTo20KB is 100% free with no file size limits, no account required, and no watermarks. All compression happens in your browser — your images never leave your device."}},{"@type":"Question","name":"What image formats are supported?","acceptedAnswer":{"@type":"Answer","text":"We support JPEG, PNG, WebP, AVIF, and GIF. You can compress and convert between formats. WebP and AVIF produce the smallest file sizes for web use."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Passport Photo to 50KB — Free Online Tool',
  description: 'Compress your passport photo to exactly 50KB or under. Works for visa applications, government forms, and travel documents. Free, private, instant.',
  keywords: 'compress passport photo to 50kb, reduce passport photo size 50kb, passport photo 50kb online, passport photo compressor',
  alternates: { canonical: 'https://compressto20kb.com/blog/compress-passport-photo-to-50kb' },
  openGraph: { url: 'https://compressto20kb.com/blog/compress-passport-photo-to-50kb' },
};
export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><ClientPage /><AuthorBox /></>; }
