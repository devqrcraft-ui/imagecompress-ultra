import { faq } from './faq';
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": faq.map((f) => ({"@type":"Question","name": f.q,"acceptedAnswer":{"@type":"Answer","text": f.a}}))};
import AuthorBox from '@/app/components/AuthorBox'

import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'How to Compress an Image to 30KB Free — No Upload',
  description: 'Compress a photo to 30KB or under in your browser: type 30 as the target and get the best quality that still fits. Free, no signup — JPEG, PNG, WebP.',
  keywords: 'compress image to 30kb, reduce image size to 30kb free, compress photo 30kb online, 30kb photo downloader, image compressor 30kb no upload',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/compress-image-to-30kb' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/compress-image-to-30kb' },
};

export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"How to Compress an Image to 30KB","item":"https://www.compressto20kb.com/blog/compress-image-to-30kb"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"How to Compress an Image to 30KB","description":"Compress a photo to 30KB or under in your browser: type 30 as the target and the tool returns the best quality that still fits. Free, no signup, works for JPEG, PNG and WebP.","url":"https://www.compressto20kb.com/blog/compress-image-to-30kb","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"},"reviewedBy":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"}}' }} /><ClientPage /><AuthorBox /></>; }
