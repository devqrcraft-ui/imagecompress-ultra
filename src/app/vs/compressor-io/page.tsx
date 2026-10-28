import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'CompressTo20KB vs Compressor.io — What Each Tool Actually Does',
  description: 'CompressTo20KB vs Compressor.io: what we can verify about our own browser-based compressor — a KB target you type, 50 files per batch, HEIC input.',
  keywords: 'compressor.io alternative, compressor io vs, image compressor no upload, compress image to target kb',
  alternates: { canonical: 'https://www.compressto20kb.com/vs/compressor-io' },
  openGraph: { url: 'https://www.compressto20kb.com/vs/compressor-io' },
};

const faq: [string, string][] = [
  ['What is the difference between CompressTo20KB and Compressor.io?', 'We can only describe our own tool. CompressTo20KB runs in your browser, takes up to 50 files in one batch, lets you type a target size between 5 and 5000 KB, accepts JPG, PNG, WebP, AVIF and HEIC, and exports WebP, AVIF, JPEG or PNG. For anything about Compressor.io — where the work happens, how many files, what the free tier covers — read their own site, because we have not verified it and those details change without notice.'],
  ['Is there a free alternative to Compressor.io with no limits?', 'Ours is free and needs no account, but "no limits" would be an overstatement: a batch holds 50 files at a time, the target field spans 5 to 5000 KB, and the longest side is capped at 4096 px while the tool searches. Whether another service is free, capped or account-gated is something only their current pages can tell you.'],
  ['Can I target an exact file size?', 'The target is a ceiling rather than an exact byte count. In Target KB Mode you type the number your form allows, and the tool returns the best quality that stays at or under it; a file already smaller than that comes back unchanged. We are not in a position to say which of these controls another tool offers.'],
  ['Which should I use for a folder of product photos?', 'If the job is "get all of these under a stated KB number without putting them on a server", this tool fits — 50 files per run, ZIP download, nothing uploaded. If you need formats we do not output, or processing wired into an application, compare both with the same image and keep the result you prefer. We would rather point you at a test than declare ourselves winner.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><ClientPage faq={faq} /></>; }
