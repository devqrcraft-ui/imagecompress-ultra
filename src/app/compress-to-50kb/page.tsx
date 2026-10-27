import type { Metadata } from 'next';
import ClientPage from './client';
import { faq } from './faq';

export const metadata: Metadata = {
  title: 'Compress Image to 50KB Online Free — Best Quality Under 50KB',
  description: 'Compress any image to 50KB or under free — no upload needed. ID photos, application forms and portal uploads. JPG, PNG, WebP, HEIC. Files stay in your browser.',
  keywords: 'compress image to 50kb, reduce image size to 50kb, resize photo to 50kb, 50kb image compressor online free, compress jpg to 50kb, compress png to 50kb, compress passport photo to 50kb',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-to-50kb' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-to-50kb' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};


const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Compress an Image to 50KB Online',
  description: 'Step-by-step guide to compress any image to 50KB or under free, without uploading to a server.',
  totalTime: 'PT30S',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Upload your image', text: 'Click upload or drag your file. Accepts JPEG, PNG, WebP, AVIF, HEIC. Up to 50 files at once.' },
    { '@type': 'HowToStep', position: 2, name: 'Switch to Target KB Mode', text: 'Toggle the mode selector to Target KB. Type 50 in the target field.' },
    { '@type': 'HowToStep', position: 3, name: 'Pick the output format', text: 'Choose the format your form asks for. JPEG and WebP reach a small target with the least visible loss; PNG rarely gets as small.' },
    { '@type': 'HowToStep', position: 4, name: 'Compress and download', text: 'Click Compress. Your browser processes the image locally — nothing is uploaded. Download the file, which will be at or under 50KB.' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image to 50KB Online Free","item":"https://www.compressto20kb.com/compress-to-50kb"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{maxWidth:'780px',margin:'0 auto',padding:'0 20px 8px',fontFamily:'system-ui,sans-serif'}}><p style={{fontSize:'16px',lineHeight:1.8,color:'#e2e8f0',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.3)',borderRadius:'8px',padding:'16px 20px',margin:'0 0 8px'}}><strong style={{color:'#818cf8'}}>Compress any image to 50KB or under free in your browser. No upload required. For ID photos, application forms and any upload field you are trying to keep under 50KB. Supports JPEG, PNG, WebP and HEIC input.</strong></p></div>
      <ClientPage />
    </>
  );
}
