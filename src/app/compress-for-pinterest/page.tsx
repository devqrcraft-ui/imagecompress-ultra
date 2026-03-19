import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Image for Pinterest — Free, No Upload | CompressTo20KB',
  description: 'Compress images for Pinterest free in your browser. Optimize pin photos to 200-500KB for fast loading. No upload, no signup. JPEG, PNG, WebP supported.',
  keywords: 'compress image for pinterest, pinterest image size, pinterest photo requirements, compress for pinterest free, pinterest pin size kb',
  alternates: { canonical: 'https://compressto20kb.com/compress-for-pinterest' },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the best image size for Pinterest pins?","acceptedAnswer":{"@type":"Answer","text":"Pinterest recommends a 2:3 aspect ratio — 1000x1500px is ideal. For fast loading in feeds, aim for 200-500KB. JPEG works best for photos; PNG for graphics with text."}},{"@type":"Question","name":"How do I compress images for Pinterest without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Upload your pin image, select JPEG at 85% quality or set Exact KB Mode to 300-500KB. Pinterest re-compresses uploads, so starting from a well-optimized file keeps your pins sharp."}},{"@type":"Question","name":"Does Pinterest accept WebP images?","acceptedAnswer":{"@type":"Answer","text":"Pinterest supports WebP uploads in modern browsers. However, JPEG is safer for cross-platform compatibility across all devices and Pinterest apps."}},{"@type":"Question","name":"Will my Pinterest images be uploaded to compress them?","acceptedAnswer":{"@type":"Answer","text":"No. All compression runs locally in your browser. Your images never leave your device — unlike other tools that upload files to their servers."}},{"@type":"Question","name":"What aspect ratio is best for Pinterest?","acceptedAnswer":{"@type":"Answer","text":"2:3 ratio is optimal — 1000x1500px or 1080x1620px. Portrait pins get more feed real estate than square or landscape. Avoid going taller than 1:2.1 ratio as Pinterest may crop them."}},{"@type":"Question","name":"How many KB should a Pinterest image be?","acceptedAnswer":{"@type":"Answer","text":"For fast loading, aim for 200-500KB per pin. Under 200KB may look slightly soft after Pinterest re-compression. Over 1MB slows down your profile and board loading speed."}}]};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ClientPage />
    </>
  );
}
