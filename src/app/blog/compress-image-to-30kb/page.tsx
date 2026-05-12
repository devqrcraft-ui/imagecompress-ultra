import AuthorBox from '@/app/components/AuthorBox'

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Use modern formats like WebP or AVIF which offer 25-50% smaller file sizes than JPEG at the same visual quality. Our tool compresses images client-side in your browser with no upload required, preserving maximum quality."}},{"@type":"Question","name":"Is this image compressor free?","acceptedAnswer":{"@type":"Answer","text":"Yes. CompressTo20KB is 100% free with no file size limits, no account required, and no watermarks. All compression happens in your browser — your images never leave your device."}},{"@type":"Question","name":"What image formats are supported?","acceptedAnswer":{"@type":"Answer","text":"We support JPEG, PNG, WebP, AVIF, and GIF. You can compress and convert between formats. WebP and AVIF produce the smallest file sizes for web use."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'How to Compress Images on iPhone Free — No App Needed 2026',
  description: 'Compress photos on iPhone without installing any app. Works in Safari — files never leave your device. Reduce HEIC, JPEG, PNG size instantly. Free.',
  keywords: 'compress image on iPhone, reduce photo size iPhone, compress photo iOS free, shrink image iPhone Safari, compress HEIC iPhone, reduce image size iPhone no app',
  alternates: { canonical: 'https://compressto20kb.com/blog/compress-image-to-30kb' },
  openGraph: { url: 'https://compressto20kb.com/blog/compress-image-to-30kb' },
};

export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"How to Compress Images on iPhone Free","item":"https://compressto20kb.com/blog/compress-image-to-30kb"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"How to Compress Images on iPhone Free","description":"Compress photos on iPhone without installing any app. Works in Safari — files never leave your device. Reduce HEIC, JPEG, PNG size instantly. Free.","url":"https://compressto20kb.com/blog/compress-image-to-30kb","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://compressto20kb.com"}}' }} /><ClientPage /><AuthorBox /></>; }
