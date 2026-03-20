
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Use modern formats like WebP or AVIF which offer 25-50% smaller file sizes than JPEG at the same visual quality. Our tool compresses images client-side in your browser with no upload required, preserving maximum quality."}},{"@type":"Question","name":"Is this image compressor free?","acceptedAnswer":{"@type":"Answer","text":"Yes. CompressTo20KB is 100% free with no file size limits, no account required, and no watermarks. All compression happens in your browser — your images never leave your device."}},{"@type":"Question","name":"What image formats are supported?","acceptedAnswer":{"@type":"Answer","text":"We support JPEG, PNG, WebP, AVIF, and GIF. You can compress and convert between formats. WebP and AVIF produce the smallest file sizes for web use."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'How to Compress Images on Windows 11 Free — No Software Install',
  description: 'Compress images on Windows 11 without installing software. Use your browser — free, instant, no upload. Reduce JPEG, PNG, WebP size in seconds. Works on any Windows PC.',
  keywords: 'compress image Windows 11, reduce image size Windows 11 free, compress photo Windows 11 no software, shrink image size PC, image compressor Windows free, compress picture Windows 11',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/compress-image-on-windows-11' },
};

export default function Page() { return <ClientPage />; }
