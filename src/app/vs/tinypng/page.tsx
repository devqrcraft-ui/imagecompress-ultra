
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the best free image compressor in 2026?","acceptedAnswer":{"@type":"Answer","text":"CompressTo20KB, TinyPNG, Squoosh, and Kraken.io are all strong options. The key difference: CompressTo20KB processes images in your browser (no upload), while others send files to their servers. For privacy-sensitive images, CompressTo20KB is the best choice."}},{"@type":"Question","name":"Does CompressTo20KB compress better than TinyPNG?","acceptedAnswer":{"@type":"Answer","text":"For JPEG and WebP, results are comparable. TinyPNG specializes in PNG compression using lossy techniques. CompressTo20KB offers more format options (AVIF, WebP) and processes everything locally without uploading your files."}},{"@type":"Question","name":"Is there a free alternative to Kraken.io?","acceptedAnswer":{"@type":"Answer","text":"Yes. CompressTo20KB is a completely free alternative to Kraken.io with no file limits, no account required, and no upload — all compression happens in your browser."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'CompressTo20KB vs TinyPNG 2026 — Privacy, Speed & Exact KB Mode',
  description: 'CompressTo20KB vs TinyPNG: we compress in your browser (no upload), support exact KB targets, handle HEIC, and are 100% free. TinyPNG uploads your files to their servers.',
  keywords: 'tinypng alternative, tinypng vs, better than tinypng, tinypng free alternative, compress image without tinypng',
  alternates: { canonical: 'https://compressto20kb.com/vs/tinypng' },
  openGraph: { url: 'https://compressto20kb.com/vs/tinypng' },
};
export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><ClientPage /></>; }
