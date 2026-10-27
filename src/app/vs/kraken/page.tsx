import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'CompressTo20KB vs Kraken.io — Local Compression Instead of a Quota',
  description: 'CompressTo20KB vs Kraken.io: Kraken optimises files on its own servers with a 100 MB free testing quota and paid plans from $5 a month. Our tool runs in your browser with a KB target and no account.',
  keywords: 'kraken.io alternative, kraken.io free alternative, kraken io vs, better than kraken io, image compressor no upload',
  alternates: { canonical: 'https://www.compressto20kb.com/vs/kraken' },
  openGraph: { url: 'https://www.compressto20kb.com/vs/kraken' },
};

const faq: [string, string][] = [
  ['Does Kraken.io compress images in my browser?', 'No. Kraken.io states on its own site that all optimisation and compression is carried out by its servers, so the file is uploaded before anything happens to it. CompressTo20KB works inside your browser tab and never receives the image.'],
  ['Is Kraken.io free?', 'Kraken.io describes every plan as starting from a free account with a 100 MB testing quota, and lists paid tiers beginning at $5 a month. CompressTo20KB has no quota, no plan ladder and no account: batches of up to 50 files are free, with a target you can set anywhere between 5 and 5000 KB.'],
  ['Can Kraken.io hit a file size I type in?', 'We did not find a target-size option described on Kraken.io\'s own pages, which focus on optimisation presets, resizing and an API. CompressTo20KB is built around that missing control: type the number of KB your form allows and the tool searches the encoding until the result fits at or under it.'],
  ['Which formats does each support?', 'Kraken.io lists JPG, PNG, WebP, GIF, SVG, AVIF, HEIC and PDF - wider than ours, and it handles document types we do not touch. CompressTo20KB outputs WebP, AVIF, JPEG or PNG and accepts HEIC input, converting it in the browser.'],
  ['When does Kraken.io make more sense than this tool?', 'When you want compression wired into an application or a CMS through an API, or you need SVG and PDF handled in one place. When you need one photo under one stated KB ceiling, on a device you trust with your ID scan, a browser-only size target is the shorter path.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><ClientPage faq={faq} /></>; }
