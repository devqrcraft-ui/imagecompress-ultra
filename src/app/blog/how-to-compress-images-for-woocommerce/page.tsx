import { faq } from './faq';
import AuthorBox from '@/app/components/AuthorBox'

import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'How to Compress Images for WooCommerce — Speed Up Your Store 2026',
  description: 'Learn how to compress product images for WooCommerce to improve page speed, SEO rankings, and conversions. Free tool included.',
  keywords: 'compress images for woocommerce, woocommerce product image size, optimize woocommerce images, woocommerce image compression, speed up woocommerce',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/how-to-compress-images-for-woocommerce' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/how-to-compress-images-for-woocommerce' },
};
export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"How to Compress Images for WooCommerce","item":"https://www.compressto20kb.com/blog/how-to-compress-images-for-woocommerce"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"How to Compress Images for WooCommerce","description":"Learn how to compress product images for WooCommerce to improve page speed, SEO rankings, and conversions. Free tool included.","url":"https://www.compressto20kb.com/blog/how-to-compress-images-for-woocommerce","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"},"reviewedBy":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"}}' }} /><ClientPage /><AuthorBox /></>; }
