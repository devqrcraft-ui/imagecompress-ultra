import { faq } from './faq';
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": faq.map((f) => ({"@type":"Question","name": f.q,"acceptedAnswer":{"@type":"Answer","text": f.a}}))};
import AuthorBox from '@/app/components/AuthorBox'

import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'How to Compress Images on iPhone Free — No App Needed 2026',
  description: 'Compress photos on iPhone without installing any app. Works in Safari — files never leave your device. Reduce HEIC, JPEG, PNG size instantly. Free.',
  keywords: 'compress image on iPhone, reduce photo size iPhone, compress photo iOS free, shrink image iPhone Safari, compress HEIC iPhone, reduce image size iPhone no app',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/compress-image-on-iphone' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/compress-image-on-iphone' },
};

export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"How to Compress Images on iPhone Free","item":"https://www.compressto20kb.com/blog/compress-image-on-iphone"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"How to Compress Images on iPhone Free","description":"Compress photos on iPhone without installing any app. Works in Safari — files never leave your device. Reduce HEIC, JPEG, PNG size instantly. Free.","url":"https://www.compressto20kb.com/blog/compress-image-on-iphone","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"},"reviewedBy":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"}}' }} /><ClientPage /><AuthorBox /></>; }
