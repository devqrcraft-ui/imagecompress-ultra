import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Image to 20KB Online Free — Exact Size, Instant, No Upload',
  description: 'Compress JPG, PNG or WebP to exactly 20KB free — no upload, instant. Works for DS-160 visa forms, government portals, passport photo requirements. Files never leave your browser.',
  keywords: 'compress image to 20kb, reduce image size to 20kb, resize photo to 20kb, 20kb image compressor online free, compress jpg to 20kb, compress png to 20kb',
  alternates: { canonical: 'https://compressto20kb.com/compress-to-20kb' },
  openGraph: { url: 'https://compressto20kb.com/compress-to-20kb' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I compress an image to exactly 20KB?', acceptedAnswer: { '@type': 'Answer', text: 'Upload your image, switch to Exact KB Mode, type 20, and click Compress. The tool uses binary search in your browser to hit exactly 20KB within 1KB accuracy.' } },
    { '@type': 'Question', name: 'Does my image get uploaded to a server?', acceptedAnswer: { '@type': 'Answer', text: 'No. All compression runs in your browser using WebAssembly. Your image never leaves your device.' } },
    { '@type': 'Question', name: 'Why do government forms require exactly 20KB?', acceptedAnswer: { '@type': 'Answer', text: 'Government portals in India, Pakistan, Ukraine, and the US set strict limits due to legacy infrastructure. Aadhaar, NADRA, and DS-160 commonly require photos under 20KB.' } },
    { '@type': 'Question', name: 'What image formats work for 20KB compression?', acceptedAnswer: { '@type': 'Answer', text: 'JPEG works best at 20KB for government forms. WebP gives better quality at larger sizes but JPEG handles extreme compression more gracefully.' } },
    { '@type': 'Question', name: 'Can I compress multiple images to 20KB at once?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — upload up to 50 images, set Exact KB Mode to 20, and compress all simultaneously. Download individually or as ZIP.' } },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Compress an Image to 20KB Online',
  description: 'Step-by-step guide to compress any image to exactly 20KB free, without uploading to a server.',
  totalTime: 'PT30S',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Upload your image', text: 'Click the upload area or drag your file. Accepts JPEG, PNG, WebP, HEIC. Up to 50 files at once.' },
    { '@type': 'HowToStep', position: 2, name: 'Select Exact KB Mode', text: 'Click the Gov 20KB preset or switch to Exact KB Mode and type 20.' },
    { '@type': 'HowToStep', position: 3, name: 'Compress and download', text: 'Click Compress. Your browser processes instantly — nothing uploaded. Download the 20KB file.' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image to 20KB Online Free","item":"https://compressto20kb.com/compress-to-20kb"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <div style={{maxWidth:'780px',margin:'0 auto',padding:'0 20px 8px',fontFamily:'system-ui,sans-serif'}}><p style={{fontSize:'16px',lineHeight:1.8,color:'#e2e8f0',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.3)',borderRadius:'8px',padding:'16px 20px',margin:'0 0 8px'}}><strong style={{color:'#818cf8'}}>Yes — you can compress any image to exactly 20KB free, in your browser.</strong> Upload your file, select Exact KB Mode, type 20, and click Compress. No upload to server, no account required. Supports JPEG, PNG, WebP. Used for Aadhaar, NADRA, DS-160, and other government forms that require photos under 20KB.</p></div>
      <ClientPage />
    </>
  );
}
