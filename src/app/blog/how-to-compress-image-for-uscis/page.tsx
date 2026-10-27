import { faq } from './faq';
import AuthorBox from '@/app/components/AuthorBox'

import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'How to Compress Image for USCIS — N-400, I-485, DS-160 Guide 2026',
  description: 'What photo size US immigration and visa forms really require — the published figures vs the folklore — and how to compress your photo to fit any upload limit with a free in-browser tool. No upload, private.',
  keywords: 'how to compress image for uscis, uscis photo compression, reduce photo size for uscis, uscis 240kb photo requirement',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/how-to-compress-image-for-uscis' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/how-to-compress-image-for-uscis' },
};
export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"How to Compress Image for USCIS","item":"https://www.compressto20kb.com/blog/how-to-compress-image-for-uscis"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"How to Compress Image for USCIS","description":"What photo size US immigration and visa forms really require — the published figures vs the folklore — and how to compress your photo to fit any upload limit with a free in-browser tool. No upload, private.","url":"https://www.compressto20kb.com/blog/how-to-compress-image-for-uscis","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"},"reviewedBy":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"}}' }} /><ClientPage /><AuthorBox /></>; }
