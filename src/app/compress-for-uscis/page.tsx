
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are USCIS photo requirements?","acceptedAnswer":{"@type":"Answer","text":"USCIS requires photos in JPEG format, 2x2 inches (600x600px minimum), white or off-white background, under 240KB file size for online submissions. The photo must be taken within 6 months, show a full face front view, and meet specific lighting and background standards."}},{"@type":"Question","name":"How do I compress a photo to meet USCIS requirements?","acceptedAnswer":{"@type":"Answer","text":"Upload your photo, select JPEG format, switch to Exact KB Mode, type 200 (for a safe margin under 240KB), and click Compress. All processing runs in your browser — your photo is never uploaded to any server, keeping it private and secure."}},{"@type":"Question","name":"Is it safe to compress USCIS photos online?","acceptedAnswer":{"@type":"Answer","text":"Yes — with this tool. All compression runs locally in your browser using WebAssembly. Your photo never leaves your device. Other online tools upload files to their servers, which is a significant privacy risk for immigration documents."}},{"@type":"Question","name":"Can I compress multiple USCIS photos at once?","acceptedAnswer":{"@type":"Answer","text":"Yes — upload up to 50 photos and compress all at once. Download individually or as a ZIP. Everything runs in your browser — free, no signup required."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Photo for USCIS Forms — N-400, DS-160, I-485 — Under 240KB',
  description: 'Compress passport photo for USCIS N-400, DS-160 visa, I-485, and US passport online application. Meet exact KB requirements instantly. No upload — 100% private.',
  keywords: 'compress photo for uscis, uscis photo size requirements, compress image for ds-160, compress photo for n-400, resize photo for uscis online, uscis passport photo compressor',
  alternates: { canonical: '/compress-for-uscis' },
};
export default function Page() { return <ClientPage />; }
