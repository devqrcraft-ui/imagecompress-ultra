
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the best image size for WooCommerce products?","acceptedAnswer":{"@type":"Answer","text":"WooCommerce recommends product images at 800x800px minimum, under 200KB for thumbnails and under 500KB for full product photos. WebP format is ideal — WordPress 5.8+ supports WebP natively and it loads 30-70% faster than JPEG."}},{"@type":"Question","name":"How do I compress WooCommerce images without a plugin?","acceptedAnswer":{"@type":"Answer","text":"Upload your product photos to this tool, select WebP format, set Exact KB Mode to your target (200KB for thumbnails, 500KB for product images), compress, then upload to WordPress Media Library. No plugin subscription needed."}},{"@type":"Question","name":"Should I use WebP or JPEG for WooCommerce?","acceptedAnswer":{"@type":"Answer","text":"WebP is the best choice for WooCommerce in 2025. WordPress 5.8+ supports WebP natively. WebP product images improve PageSpeed scores and Core Web Vitals — both Google ranking factors that directly affect your store traffic."}},{"@type":"Question","name":"Will my WooCommerce images be uploaded to compress them?","acceptedAnswer":{"@type":"Answer","text":"No. All compression runs locally in your browser. Your images never leave your device — then you upload the optimized files directly to WordPress."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Image to 30KB Free Online — No Upload, Instant',
  description: 'Compress any image to exactly 30KB online for free. No upload to server — files stay on your device. Works for JPEG, PNG, WebP, HEIC. Instant, no signup.',
  keywords: 'compress image to 30kb, reduce image size to 30kb, compress photo to 30kb, image compressor 30kb, resize image to 30kb free',
  alternates: { canonical: 'https://compressto20kb.com/compress-for-woocommerce' },
  openGraph: { url: 'https://compressto20kb.com/compress-for-woocommerce' },
};

export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image to 30KB Free Online","item":"https://compressto20kb.com/compress-for-woocommerce"}]}' }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><ClientPage /></>; }
