import { faq } from './faq';
import AuthorBox from '@/app/components/AuthorBox'

import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'US Passport Photo Requirements 2026 — Size, Format & Compression',
  description: 'Official US passport photo requirements for 2026. Size, format, background, and how to compress your photo to under 240KB for online passport renewal.',
  keywords: 'us passport photo requirements, passport photo size, passport photo compression, compress passport photo, us passport online photo',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/us-passport-photo-requirements' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/us-passport-photo-requirements' },
};
export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"US Passport Photo Requirements 2026","item":"https://www.compressto20kb.com/blog/us-passport-photo-requirements"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"US Passport Photo Requirements 2026","description":"Official US passport photo requirements for 2026. Size, format, background, and how to compress your photo to under 240KB for online passport renewal.","url":"https://www.compressto20kb.com/blog/us-passport-photo-requirements","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"},"reviewedBy":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"}}' }} /><ClientPage /><AuthorBox /></>; }
