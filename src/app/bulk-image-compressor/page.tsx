import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Bulk Image Compressor — Up to 50 Images, No Upload',
  description: 'Free bulk image compressor for JPG, PNG, WebP, AVIF and HEIC. Up to 50 files per batch, compressed in your browser and downloaded as one ZIP.',
  keywords: 'bulk image compressor, batch image compressor online free, compress multiple images at once, bulk resize photos online, batch compress jpg png, compress 50 images free',
  alternates: { canonical: 'https://www.compressto20kb.com/bulk-image-compressor' },
  openGraph: { url: 'https://www.compressto20kb.com/bulk-image-compressor' },
};

const faq: [string, string][] = [
  ['How many images can I bulk compress at once?', 'Up to 50 files in one batch - the tool keeps the first 50 you select and works through them one after another in your browser, so a full batch finishes at the speed of your device. Select the next set and run it again for anything beyond 50.'],
  ['Can I mix JPEG, PNG, WebP and HEIC files in one batch?', 'Yes, those can all go into the same batch, and a HEIC or HEIF file is decoded before it is compressed. One output format applies to the whole batch, so if you need some files as JPEG and others as WebP, run two batches.'],
  ['How do I download all the compressed images at once?', 'When a batch is done, the ZIP All button packages every compressed result into a single compressed-images.zip download. You can still save files one at a time if you prefer.'],
  ['Are my images uploaded when I bulk compress them?', 'No. Each file is decoded and re-encoded on your own device, so a batch of product photos or ID scans never leaves it. There is no account, no watermark and no server-side queue.'],
  ['Does every image in the batch get the same treatment?', 'The same output format and the same quality or target size apply to every file in the run. In Target KB Mode each file is searched separately, so one that is already under your number comes back unchanged instead of being squeezed further.'],
  ['Does the bulk compressor also resize my images?', 'Only as a side effect: while it works the tool caps the longest side at 4096 px. It does not resize to a width and height you type in, does not crop to a ratio and does not change a background.'],
  ['Is bulk image compression free?', 'Yes - no account, no per-batch fee and no watermark. The site is paid for by non-intrusive advertising.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Bulk Image Compressor – Compress Up to 50 Images at Once (No Upload)","item":"https://www.compressto20kb.com/bulk-image-compressor"}]}' }} />
      <div style={{ background: 'rgba(129,140,248,0.13)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '20px 24px', margin: '24px auto', maxWidth: '720px', fontFamily: 'system-ui,sans-serif', color: '#e2e8f0' }}>
        <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.7 }}>
          <strong style={{ color: '#818cf8' }}>Quick answer:</strong> To bulk compress images, select up to 50 JPG, PNG, WebP, AVIF or HEIC files at once. Pick an output format and either a quality level or a target size in KB, and the tool works through the batch in your browser - nothing is uploaded. Download the results individually or as one ZIP. No account, no watermark, free.
        </p>
      </div>
      <ClientPage faq={faq} />
    </>
  )
}
