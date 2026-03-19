import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Images for Email — Reduce Attachment Size Free, No Upload',
  description: 'Compress images before emailing. Reduce photo file size to under 500KB or 1MB for fast delivery and no blocked attachments. Free, no upload, 100% private. Works for Gmail, Outlook, Yahoo Mail.',
  keywords: 'compress image for email, reduce image size for email, compress photo for email attachment, email image compressor, resize image for email free, compress jpg for gmail outlook',
  alternates: { canonical: 'https://compressto20kb.com/compress-for-email' },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a good image size for email attachments?","acceptedAnswer":{"@type":"Answer","text":"For inline newsletter images, keep files under 100KB. For photo attachments, aim for under 1MB per image. Gmail and Outlook warn recipients about large attachments — staying under 1MB per image prevents delivery issues."}},{"@type":"Question","name":"How do I compress an image for email without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Use Exact KB Mode and set a target of 500KB or 100KB. WebP gives the best quality at small sizes, but JPEG is safer for email compatibility. Binary search finds the maximum quality that fits your target."}},{"@type":"Question","name":"Will my photos be uploaded to a server when compressing for email?","acceptedAnswer":{"@type":"Answer","text":"No. All compression runs in your browser. Your images never leave your device — safe for private photos, documents, and business images before emailing."}},{"@type":"Question","name":"What format should I use for email images?","acceptedAnswer":{"@type":"Answer","text":"JPEG is the safest choice — universally supported by all email clients including Outlook 2016 and Apple Mail. WebP is supported by Gmail but may not display in older Outlook versions."}},{"@type":"Question","name":"Can I compress multiple photos for email at once?","acceptedAnswer":{"@type":"Answer","text":"Yes — upload up to 50 images, set your target size (e.g. 500KB or 100KB), and compress all at once. Download as individual files or a ZIP. All processing stays in your browser."}}]};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ClientPage />
    </>
  );
}
