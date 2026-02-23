import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'How to Compress Images on iPhone Free — No App Needed 2026',
  description: 'Compress photos on iPhone without installing any app. Works in Safari — files never leave your device. Reduce HEIC, JPEG, PNG size instantly. Free.',
  keywords: 'compress image on iPhone, reduce photo size iPhone, compress photo iOS free, shrink image iPhone Safari, compress HEIC iPhone, reduce image size iPhone no app',
  alternates: { canonical: '/blog/compress-image-on-iphone' },
};

export default function Page() { return <ClientPage />; }
