
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the best image size for a LinkedIn profile photo?","acceptedAnswer":{"@type":"Answer","text":"LinkedIn recommends profile photos at 400x400px minimum, up to 8MB file size. For best display, use a square JPEG at 400-800px and under 200KB. LinkedIn re-compresses uploads, so starting with a clean compressed file reduces visible artifacts."}},{"@type":"Question","name":"How do I compress a photo for LinkedIn without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Upload your photo, select JPEG format, set Exact KB Mode to 200KB, and compress. This produces a clean file that LinkedIn will not over-compress when you upload it to your profile or company page."}},{"@type":"Question","name":"What image format does LinkedIn accept?","acceptedAnswer":{"@type":"Answer","text":"LinkedIn accepts JPEG, PNG, and GIF for profile and cover photos. JPEG is recommended for profile photos. PNG works well for logos and graphics with transparent backgrounds."}},{"@type":"Question","name":"Will my LinkedIn photo be uploaded to compress it?","acceptedAnswer":{"@type":"Answer","text":"No. All compression runs locally in your browser. Your photo never leaves your device — safe for professional headshots and business profile images."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Photo for LinkedIn Profile — Perfect Size, Free Online',
  description: 'Compress your LinkedIn profile photo and banner to the ideal size. Free, no upload, works instantly in browser.',
  keywords: 'compress photo for linkedin, linkedin profile photo size, linkedin banner image size, resize photo for linkedin, compress linkedin profile picture free',
  alternates: { canonical: '/compress-for-linkedin' },
};
export default function Page() { return <ClientPage />; }
