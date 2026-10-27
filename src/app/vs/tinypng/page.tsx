import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'CompressTo20KB vs TinyPNG — Local Processing and a KB Target',
  description: 'CompressTo20KB vs TinyPNG: TinyPNG uploads your files to its servers and keeps them up to 48 hours, while our compressor runs entirely in your browser and lets you type the KB size you need.',
  keywords: 'tinypng alternative, tinypng vs, better than tinypng, tinypng free alternative, compress image without tinypng',
  alternates: { canonical: 'https://www.compressto20kb.com/vs/tinypng' },
  openGraph: { url: 'https://www.compressto20kb.com/vs/tinypng' },
};

const faq: [string, string][] = [
  ['Does TinyPNG upload my images?', 'Yes. TinyPNG optimises files on its own servers, and its site states that uploads are retained for a maximum of 48 hours before being permanently deleted. CompressTo20KB never receives your file: your browser decodes and re-encodes it locally and there is no server copy to retain.'],
  ['What does TinyPNG allow for free?', 'Its web tool is free to use, and TinyPNG states that you can upload up to 20 images at once, each with a maximum size of 5MB. Beyond the web tool it sells API credits, CDN plans and paid web tiers. CompressTo20KB takes up to 50 files per batch with a target between 5 and 5000 KB and asks for no account.'],
  ['Can either tool hit a file size I type in?', 'Only ours. In Target KB Mode the tool searches the encoding until the output fits the number you typed and hands you a file at or under it, and a file already smaller than that number comes back unchanged. TinyPNG hands you the result of its own lossy engine; there is no size field to fill in.'],
  ['Which formats does each produce?', 'TinyPNG\'s site lists WebP, PNG, JPEG, AVIF and JPEG XL among the types it works with, so it covers more formats than we do. CompressTo20KB outputs WebP, AVIF, JPEG or PNG, accepts HEIC input, and converts it to JPEG in the browser before compressing.'],
  ['So is TinyPNG the worse tool?', 'No - they solve different problems. If you want a well-optimised PNG or a JPEG XL file, TinyPNG is the better equipped service. If a form states a ceiling in KB, or the photo is an ID scan you would rather not put on anyone\'s server, a local size-target tool fits that job.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><ClientPage faq={faq} /></>; }
