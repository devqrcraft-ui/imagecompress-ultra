import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Image to 20KB Online — Free, No Upload, 100% Private',
  description: 'Reduce any image to exactly 20KB free online. All compression runs in your browser — files never leave your device. No upload, no signup. HEIC, JPG, PNG, WebP supported.',
  keywords: 'compress image to 20kb, reduce image size to 20kb, resize photo to 20kb, 20kb image compressor online free, compress jpg to 20kb, compress png to 20kb',
  alternates: { canonical: 'https://compressto20kb.com/compress-to-20kb' },
};

export default function Page() {
  return <ClientPage />;
}
