import { faq } from './faq';
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": faq.map((f) => ({"@type":"Question","name": f.q,"acceptedAnswer":{"@type":"Answer","text": f.a}}))};
import AuthorBox from '@/app/components/AuthorBox'

import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'How to Compress Images Without Losing Quality — Free Tool 2026',
  description: 'Compress images without visible quality loss using smart compression. Free online tool — no upload, no signup. Works for JPEG, PNG, WebP. Before/after preview included.',
  keywords: 'compress image without losing quality, compress photo without quality loss, reduce image size without losing quality, lossless image compression free, compress image keep quality',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/compress-image-on-windows-11' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/compress-image-on-windows-11' },
};

export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"How to Compress Images Without Losing Quality","item":"https://www.compressto20kb.com/blog/compress-image-on-windows-11"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"How to Compress Images Without Losing Quality","description":"Compress images without visible quality loss using smart compression. Free online tool — no upload, no signup. Works for JPEG, PNG, WebP. Before/after preview included.","url":"https://www.compressto20kb.com/blog/compress-image-on-windows-11","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"},"reviewedBy":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"}}' }} /><ClientPage /><AuthorBox /></>; }
