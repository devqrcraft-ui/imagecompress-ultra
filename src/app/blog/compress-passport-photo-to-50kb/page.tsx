import { faq } from './faq';
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": faq.map((f) => ({"@type":"Question","name": f.q,"acceptedAnswer":{"@type":"Answer","text": f.a}}))};
import AuthorBox from '@/app/components/AuthorBox'

import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Passport Photo to 50KB — Free Online Tool',
  description: 'Compress your passport photo to 50KB or under or under. Works for visa applications, government forms, and travel documents. Free, private, instant.',
  keywords: 'compress passport photo to 50kb, reduce passport photo size 50kb, passport photo 50kb online, passport photo compressor',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/compress-passport-photo-to-50kb' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/compress-passport-photo-to-50kb' },
};
export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"Compress Passport Photo to 50KB","item":"https://www.compressto20kb.com/blog/compress-passport-photo-to-50kb"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Compress Passport Photo to 50KB","description":"Compress your passport photo to 50KB or under or under. Works for visa applications, government forms, and travel documents. Free, private, instant.","url":"https://www.compressto20kb.com/blog/compress-passport-photo-to-50kb","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"},"reviewedBy":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"}}' }} /><ClientPage /><AuthorBox /></>; }
