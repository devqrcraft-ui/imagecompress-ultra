import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Batch Image Compressor — Download All as ZIP (Free, No Upload)',
  description: 'Compress up to 50 images at once and download them all as a single ZIP file. Free, instant, no upload to any server. Perfect for bloggers, e-commerce, and documents.',
  keywords: 'batch image compressor, compress multiple images, download as zip, bulk image compressor zip',
  alternates: { canonical: 'https://compressto20kb.com/batch-image-compressor-zip' },
  openGraph: {
    title: 'Batch Image Compressor — Download All as ZIP (Free, No Upload)',
    description: 'Compress up to 50 images at once and download as ZIP. Files stay in your browser.',
    url: 'https://compressto20kb.com/batch-image-compressor-zip',
    images: [{ url: 'https://www.compressto20kb.com/og-image.png', width: 1200, height: 630, alt: 'Batch Image Compressor ZIP' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many images can I compress at once?', acceptedAnswer: { '@type': 'Answer', text: 'Up to 50 images in a single batch. All processing runs in your browser — no files are uploaded to any server.' } },
    { '@type': 'Question', name: 'Can I download all compressed images as a ZIP file?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. After compressing your batch, click Download All as ZIP to get every compressed image in a single ZIP file.' } },
    { '@type': 'Question', name: 'Does batch compression upload my files to a server?', acceptedAnswer: { '@type': 'Answer', text: 'No. All compression is handled entirely in your browser using Canvas API and WebAssembly. Your images never leave your device.' } },
    { '@type': 'Question', name: 'What formats does batch compression support?', acceptedAnswer: { '@type': 'Answer', text: 'Input: JPEG, PNG, WebP, HEIC. Output: JPEG, PNG, or WebP. One quality or KB target applies to the whole batch.' } },
    { '@type': 'Question', name: 'Who should use batch image compression?', acceptedAnswer: { '@type': 'Answer', text: 'Bloggers preparing post images, e-commerce sellers uploading product photos, and anyone who needs to optimize a folder of images quickly without installing software.' } },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ClientPage />
    </>
  );
}
