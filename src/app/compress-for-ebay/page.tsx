
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are eBay image requirements for listings?","acceptedAnswer":{"@type":"Answer","text":"eBay requires listing images in JPEG format, minimum 500px on the longest side, maximum 9000px. For the zoom feature, eBay recommends at least 1600px. File size should be under 7MB. Square images (1:1 ratio) work best for consistent display across the eBay app and website."}},{"@type":"Question","name":"How do I compress images for eBay listings?","acceptedAnswer":{"@type":"Answer","text":"Upload your listing photos, select JPEG format at 85-90% quality, set dimensions to 1600-2000px, and compress. For Exact KB Mode, target 500KB-1MB. Download and upload directly to your eBay listing — no server upload, 100% private."}},{"@type":"Question","name":"Does eBay accept WebP images?","acceptedAnswer":{"@type":"Answer","text":"No — eBay requires JPEG format for listing images. Always use JPEG when compressing photos for eBay listings."}},{"@type":"Question","name":"Will my eBay listing photos be uploaded to compress them?","acceptedAnswer":{"@type":"Answer","text":"No. All compression runs locally in your browser. Your photos never leave your device — then you upload the optimized files directly to your eBay listing."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Images for eBay Listings Free — Faster Upload, Better Rank',
  description: 'Compress product photos for eBay listings. Reduce image size without losing quality — faster page load, quicker uploads. Free, no upload, works in browser.',
  keywords: 'compress images for ebay, ebay product photo size, resize image for ebay listing, ebay image requirements, compress jpg for ebay, ebay photo compressor free online',
  alternates: { canonical: 'https://compressto20kb.com/compress-for-ebay' },
  openGraph: { url: 'https://compressto20kb.com/compress-for-ebay' },
};
export default function Page() { return <ClientPage />; }
