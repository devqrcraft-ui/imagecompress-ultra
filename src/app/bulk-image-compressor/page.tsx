
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How many images can I compress at once?","acceptedAnswer":{"@type":"Answer","text":"You can compress multiple images in bulk with no limit. Select all files at once and the tool processes them simultaneously in your browser. No upload, no queue, no waiting."}},{"@type":"Question","name":"Is bulk image compression free?","acceptedAnswer":{"@type":"Answer","text":"Yes. Bulk compression is completely free with no account required. All images are processed locally in your browser — none of your files are sent to any server."}},{"@type":"Question","name":"What formats does bulk compression support?","acceptedAnswer":{"@type":"Answer","text":"Bulk compression supports JPEG, PNG, WebP, and AVIF. You can compress mixed batches of different formats at the same time and download all results as individual files."}}]};
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Bulk Image Compressor – Compress Unlimited Images Online (No Upload)',
  description: 'Free bulk image compressor. Compress unlimited JPG, PNG, WebP in browser. No signup, no upload. Download all as ZIP instantly.',
  keywords: 'bulk image compressor, batch image compressor online free, compress multiple images at once, bulk resize photos online, batch compress jpg png, compress 50 images free',
  alternates: { canonical: 'https://compressto20kb.com/bulk-image-compressor' },
  openGraph: { url: 'https://compressto20kb.com/bulk-image-compressor' },
};
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ background: 'rgba(129,140,248,0.13)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '20px 24px', margin: '24px auto', maxWidth: '720px', fontFamily: 'system-ui,sans-serif', color: '#e2e8f0' }}>
        <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.7 }}>
          <strong style={{ color: '#818cf8' }}>Quick answer:</strong> To bulk compress images, select multiple JPG, PNG, WebP or AVIF files at once — no limit on number. Choose a target size or quality, and all images compress simultaneously in your browser. Download individually or as a ZIP. No upload, no account, completely free.
        </p>
      </div>
      <ClientPage />
    </>
  )
}
