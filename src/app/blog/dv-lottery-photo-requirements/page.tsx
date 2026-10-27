import { faq } from './faq';
import AuthorBox from '@/app/components/AuthorBox'

import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'DV Lottery Photo Requirements 2026 — Size, Format & Free Compressor Tool',
  description: 'DV Lottery 2026: photo must be 600x600px minimum, JPEG under 240KB, white background. Compress your photo free — processed in your browser, never uploaded to any server.',
  keywords: 'dv lottery photo requirements, dv 2026 photo size, diversity visa photo compress, dv lottery photo format, compress photo for dv lottery',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/dv-lottery-photo-requirements' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/dv-lottery-photo-requirements' },
};
export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"DV Lottery Photo Requirements 2026","item":"https://www.compressto20kb.com/blog/dv-lottery-photo-requirements"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"DV Lottery Photo Requirements 2026","description":"DV Lottery 2026: photo must be 600x600px minimum, JPEG under 240KB, white background. Compress your photo free — processed in your browser, never uploaded to any server.","url":"https://www.compressto20kb.com/blog/dv-lottery-photo-requirements","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"},"reviewedBy":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"}}' }} /><ClientPage /><AuthorBox /></>; }
