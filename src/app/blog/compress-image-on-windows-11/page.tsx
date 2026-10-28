import { faq } from './faq';
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": faq.map((f) => ({"@type":"Question","name": f.q,"acceptedAnswer":{"@type":"Answer","text": f.a}}))};
import AuthorBox from '@/app/components/AuthorBox'

import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'How to Compress Images on Windows 11 Free — No Software Install',
  description: 'Compress images on Windows 11 without installing software. Use your browser — free, instant, no upload. Reduce JPEG, PNG and WebP size in seconds.',
  keywords: 'compress image Windows 11, reduce image size Windows 11 free, compress photo Windows 11 no software, shrink image size PC, image compressor Windows free, compress picture Windows 11',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/compress-image-on-windows-11' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/compress-image-on-windows-11' },
};

export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"How to Compress Images on Windows 11 Free","item":"https://www.compressto20kb.com/blog/compress-image-on-windows-11"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"How to Compress Images on Windows 11 Free","description":"Compress images on Windows 11 without installing software. Use your browser — free, instant, no upload. Reduce JPEG, PNG, WebP size in seconds. Works on any Windows PC.","url":"https://www.compressto20kb.com/blog/compress-image-on-windows-11","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"},"reviewedBy":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"}}' }} /><ClientPage /><AuthorBox /></>; }
