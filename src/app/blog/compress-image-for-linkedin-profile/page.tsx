
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Use modern formats like WebP or AVIF which offer 25-50% smaller file sizes than JPEG at the same visual quality. Our tool compresses images client-side in your browser with no upload required, preserving maximum quality."}},{"@type":"Question","name":"Is this image compressor free?","acceptedAnswer":{"@type":"Answer","text":"Yes. CompressTo20KB is 100% free with no file size limits, no account required, and no watermarks. All compression happens in your browser — your images never leave your device."}},{"@type":"Question","name":"What image formats are supported?","acceptedAnswer":{"@type":"Answer","text":"We support JPEG, PNG, WebP, AVIF, and GIF. You can compress and convert between formats. WebP and AVIF produce the smallest file sizes for web use."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Image for LinkedIn Profile — Perfect Size Guide 2026',
  description: 'Compress and optimize your LinkedIn profile photo and banner. Learn the exact dimensions and file sizes for a professional LinkedIn presence.',
  keywords: 'compress image for linkedin, linkedin profile photo size, linkedin banner size, optimize linkedin photo, linkedin image requirements 2025',
  alternates: { canonical: 'https://compressto20kb.com/blog/compress-image-for-linkedin-profile' },
  openGraph: { url: 'https://compressto20kb.com/blog/compress-image-for-linkedin-profile' },
};
export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><ClientPage /></>; }
