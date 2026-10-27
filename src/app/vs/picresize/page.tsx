import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'CompressTo20KB vs PicResize — A KB Ceiling Instead of Pixel Dimensions',
  description: 'CompressTo20KB vs PicResize: PicResize uploads your pictures and resizes them to pixel dimensions, while our tool works in your browser and compresses to the KB ceiling your form states.',
  keywords: 'picresize alternative, picresize vs, image compressor no upload, compress photo to kb size online free',
  alternates: { canonical: 'https://www.compressto20kb.com/vs/picresize' },
  openGraph: { url: 'https://www.compressto20kb.com/vs/picresize' },
};

const faq: [string, string][] = [
  ['Does PicResize upload my pictures?', 'Yes. PicResize\'s own instructions begin with "Upload the pictures you want to resize", so the file reaches their site before anything is done to it. CompressTo20KB has no upload step at all - your browser decodes and re-encodes the image on your device.'],
  ['What number does each tool ask you to control?', 'PicResize works in dimensions: you say how wide or tall the picture should be. CompressTo20KB works in file size: you type the KB ceiling printed on the form and the tool searches the encoding until the result fits at or under that number. Whichever figure you were given decides which tool fits the job.'],
  ['Can PicResize handle more than one image at a time?', 'Yes - it advertises a free batch resize feature for working through a whole album. Our batch takes up to 50 files with one target applied to each and a single ZIP download, and does the work locally instead of uploading them.'],
  ['Can either tool resize, crop or clean up a photo?', 'CompressTo20KB cannot: it does not resize to a width and height you choose, crop to an aspect ratio, change or remove a background, or fix a blurry shot - the only size change is the 4096 px longest-side cap it uses while searching. PicResize is the one built for dimensions, so a sizing job belongs there.'],
  ['Which formats does each output?', 'CompressTo20KB writes WebP, AVIF, JPEG or PNG and converts HEIC input to JPEG in the browser. PicResize publishes no format list we could confirm during this review, so we have left that particular comparison out rather than guess.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><ClientPage faq={faq} /></>; }
