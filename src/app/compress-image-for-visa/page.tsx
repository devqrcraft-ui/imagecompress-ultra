import { faq } from './faq';
import type { Metadata } from 'next';
import ClientPage from './client';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export const metadata: Metadata = {
  title: 'Compress Photo for Visa Application — US, Schengen, UK — Free Online',
  description: 'Compress a visa application photo down to the KB limit printed on your own form. Free, no upload, instant: everything runs in your browser.',
  keywords: 'compress photo for visa application, visa photo size requirements, compress image for us visa, compress photo for schengen visa, resize visa photo online free',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-image-for-visa' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-image-for-visa' },
};
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Photo for Visa Application","item":"https://www.compressto20kb.com/compress-image-for-visa"}]}' }} />
      <div style={{ background: 'rgba(129,140,248,0.13)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '20px 24px', margin: '24px auto', maxWidth: '720px', fontFamily: 'system-ui,sans-serif', color: '#e2e8f0' }}>
        <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.7 }}>
          <strong style={{ color: '#818cf8' }}>Quick answer:</strong> Open the compressor from the button on this page, choose <strong>JPEG</strong>, switch to <strong>Target KB Mode</strong> and type the KB limit printed on your own application form. The tool returns the best quality that still fits at or under that number, and it runs entirely in your browser, so the photo never leaves your device. We deliberately do not publish a per-country figure here: specs change and this page links no official document, so read the size off the form you are filling in.
        </p>
      </div>
      <ClientPage />
    </>
  )
}
