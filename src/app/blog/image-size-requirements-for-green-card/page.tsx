import { faq } from './faq';
import AuthorBox from '@/app/components/AuthorBox'

import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Green Card Photo Size Requirements 2026 — I-485, I-130, I-90',
  description: 'Green card photo size for I-485, I-130 and I-90 — what USCIS actually publishes vs the 240KB folklore, and how to compress your photo to fit in the browser.',
  keywords: 'green card photo requirements, i-485 photo size, i-130 photo requirements, green card photo compression, resize photo for green card',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/image-size-requirements-for-green-card' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/image-size-requirements-for-green-card' },
};
export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"Green Card Photo Size Requirements 2026","item":"https://www.compressto20kb.com/blog/image-size-requirements-for-green-card"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Green Card Photo Size Requirements 2026","description":"Green card photo size requirements for I-485, I-130 and I-90 — what USCIS actually publishes versus the 240KB folklore, and how to compress your photo to fit, free and in your browser. Nothing is uploaded.","url":"https://www.compressto20kb.com/blog/image-size-requirements-for-green-card","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"},"reviewedBy":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"}}' }} /><ClientPage /><AuthorBox /></>; }
