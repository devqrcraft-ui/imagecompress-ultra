
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the best image size for Squarespace?","acceptedAnswer":{"@type":"Answer","text":"Squarespace recommends images under 500KB for fast loading. Use WebP or JPEG at 1500-2500px wide depending on your template. Squarespace automatically serves responsive sizes, so uploading a well-optimized 500KB WebP gives excellent quality across all devices."}},{"@type":"Question","name":"How do I compress images for Squarespace without a plugin?","acceptedAnswer":{"@type":"Answer","text":"Upload your image to this tool, select WebP format and set Exact KB Mode to 300-500KB, compress, then upload the optimized file directly to Squarespace. No plugin or subscription needed."}},{"@type":"Question","name":"Should I use WebP or JPEG for Squarespace?","acceptedAnswer":{"@type":"Answer","text":"WebP is the best format for Squarespace in 2025 — it produces files 30-70% smaller than JPEG at the same visual quality. Squarespace supports WebP on all modern browsers and automatically converts for older browsers."}},{"@type":"Question","name":"Will my images be uploaded to compress them?","acceptedAnswer":{"@type":"Answer","text":"No. All compression runs locally in your browser. Your images never leave your device — then you upload the optimized files directly to Squarespace."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Images for Squarespace — Free, Faster Site, Better SEO',
  description: 'Compress images for Squarespace websites. Reduce photo size for faster page load and better Google ranking. Convert to WebP, no upload, 100% free.',
  keywords: 'compress images for squarespace, squarespace image size limit, squarespace image optimization, resize photos for squarespace, squarespace webp images',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-squarespace' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-squarespace' },
};
export default function Page() { return <ClientPage />; }
