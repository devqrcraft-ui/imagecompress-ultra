import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress US Passport Photo Free — Meet State Dept Requirements',
  description: 'Compress your US passport photo to meet State Department requirements. JPEG, 2×2 inches, under 240KB. Free, no upload, 100% private. Works for online renewal and applications.',
  keywords: 'compress us passport photo, us passport photo size requirements, resize passport photo for us passport, compress passport photo online free, us passport photo 240kb',
  alternates: { canonical: '/compress-passport-photo-usa' },
};
export default function Page() { return <ClientPage />; }
