
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Use modern formats like WebP or AVIF which offer 25-50% smaller file sizes than JPEG at the same visual quality. Our tool compresses images client-side in your browser with no upload required, preserving maximum quality."}},{"@type":"Question","name":"Is this image compressor free?","acceptedAnswer":{"@type":"Answer","text":"Yes. CompressTo20KB is 100% free with no file size limits, no account required, and no watermarks. All compression happens in your browser — your images never leave your device."}},{"@type":"Question","name":"What image formats are supported?","acceptedAnswer":{"@type":"Answer","text":"We support JPEG, PNG, WebP, AVIF, and GIF. You can compress and convert between formats. WebP and AVIF produce the smallest file sizes for web use."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'How to Compress Images Without Losing Quality — Free Tool 2026',
  description: 'Compress images without visible quality loss using smart compression. Free online tool — no upload, no signup. Works for JPEG, PNG, WebP. Before/after preview included.',
  keywords: 'compress image without losing quality, compress photo without quality loss, reduce image size without losing quality, lossless image compression free, compress image keep quality',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/compress-image-on-windows-11' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/compress-image-on-windows-11' },
};

export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><ClientPage /></>; }
