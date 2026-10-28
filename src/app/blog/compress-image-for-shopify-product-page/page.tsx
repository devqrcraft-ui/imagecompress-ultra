import { faq } from './faq';
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": faq.map((f) => ({"@type":"Question","name": f.q,"acceptedAnswer":{"@type":"Answer","text": f.a}}))};
import AuthorBox from '@/app/components/AuthorBox'

import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Shopify Product Images — 2026 Speed Guide',
  description: 'Compress Shopify product images to improve page speed, Core Web Vitals, and Google rankings. Free bulk tool with Shopify preset included.',
  keywords: 'compress images for shopify, shopify product image size, optimize shopify images, shopify image compression, shopify page speed images',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/compress-image-for-shopify-product-page' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/compress-image-for-shopify-product-page' },
};
export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"How to Compress Images for Shopify Product Pages","item":"https://www.compressto20kb.com/blog/compress-image-for-shopify-product-page"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"How to Compress Images for Shopify Product Pages","description":"Compress Shopify product images to improve page speed, Core Web Vitals, and Google rankings. Free bulk tool with Shopify preset included.","url":"https://www.compressto20kb.com/blog/compress-image-for-shopify-product-page","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"},"reviewedBy":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"}}' }} /><ClientPage /><AuthorBox /></>; }
