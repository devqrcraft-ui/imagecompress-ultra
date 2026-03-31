
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the best image size for eBay listings?","acceptedAnswer":{"@type":"Answer","text":"eBay recommends images at least 1600px on the longest side for zoom functionality. Maximum file size is 7MB. Use JPEG format at 85% quality. A 1600x1600px JPEG compressed to under 500KB is ideal for eBay product listings."}},{"@type":"Question","name":"What file size should eBay images be?","acceptedAnswer":{"@type":"Answer","text":"eBay accepts images up to 7MB but best practice is under 1MB for fast page loading. Compress your product photos to 200-500KB using WebP or JPEG. Smaller files load faster and can improve your listing's search ranking."}},{"@type":"Question","name":"Can I use WebP images on eBay?","acceptedAnswer":{"@type":"Answer","text":"eBay primarily supports JPEG and PNG formats. Convert WebP to JPEG before uploading to eBay listings. Use our tool to compress and convert your product photos to the correct format and size."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'eBay Image Size Requirements 2026 — 1600px, Under 7MB + Free Resizer',
  description: 'eBay image requirements 2026: min 1600px, max 7MB, JPEG format. Compress & resize your eBay listing photos to exact specs free — no upload, instant download.',
  keywords: 'best image size for ebay, ebay listing photo size, compress image for ebay, ebay photo requirements, ebay product image size',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/best-image-size-for-ebay-listings' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/best-image-size-for-ebay-listings' },
};
export default function Page() { return <ClientPage />; }
