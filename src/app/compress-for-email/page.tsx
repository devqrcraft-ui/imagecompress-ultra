import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Images for Email — Reduce Attachment Size Free Online',
  description: 'Compress images before emailing. Reduce photo file size to under 1MB for fast delivery and no blocked attachments. Free, no upload, instant.',
  keywords: 'compress image for email, reduce image size for email, compress photo for email attachment, resize image for email free, compress jpg for email',
  alternates: { canonical: '/compress-for-email' },
};
export default function Page() { return <ClientPage />; }
