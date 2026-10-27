import { faq } from './faq';
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": faq.map((f) => ({"@type":"Question","name": f.q,"acceptedAnswer":{"@type":"Answer","text": f.a}}))};
import AuthorBox from '@/app/components/AuthorBox'

import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Image for LinkedIn Profile — Perfect Size Guide 2026',
  description: 'Compress and optimize your LinkedIn profile photo and banner. Learn the exact dimensions and file sizes for a professional LinkedIn presence.',
  keywords: 'compress image for linkedin, linkedin profile photo size, linkedin banner size, optimize linkedin photo, linkedin image requirements 2026',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/compress-image-for-linkedin-profile' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/compress-image-for-linkedin-profile' },
};
export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"Compress Image for LinkedIn Profile","item":"https://www.compressto20kb.com/blog/compress-image-for-linkedin-profile"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Compress Image for LinkedIn Profile","description":"Compress and optimize your LinkedIn profile photo and banner. Learn the exact dimensions and file sizes for a professional LinkedIn presence.","url":"https://www.compressto20kb.com/blog/compress-image-for-linkedin-profile","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"},"reviewedBy":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"}}' }} /><ClientPage /><AuthorBox /></>; }
