import { faq } from './faq';
import AuthorBox from '@/app/components/AuthorBox'

import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'How to Compress Photo for DS-160 — US Visa Application 2026',
  description: 'Compress your photo for DS-160 US visa application to under 240KB. Free tool, no upload, private. Step-by-step guide for ceac.state.gov.',
  keywords: 'compress photo for ds-160, ds-160 photo size, ds-160 photo requirements, ds-160 photo too large, us visa photo compression',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/how-to-compress-photo-for-ds160' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/how-to-compress-photo-for-ds160' },
};
export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"How to Compress Photo for DS-160","item":"https://www.compressto20kb.com/blog/how-to-compress-photo-for-ds160"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"How to Compress Photo for DS-160","description":"Compress your photo for DS-160 US visa application to under 240KB. Free tool, no upload, private. Step-by-step guide for ceac.state.gov.","url":"https://www.compressto20kb.com/blog/how-to-compress-photo-for-ds160","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"},"reviewedBy":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"}}' }} /><ClientPage /><AuthorBox /></>; }
