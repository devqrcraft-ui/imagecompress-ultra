import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Image to 200KB Free Online — No Upload, Private',
  description: 'Compress any image to 200KB or under free online. Works in your browser — files never leave your device. No upload, no signup. For blog posts, product photos and any upload field capped near 200KB.',
  keywords: 'compress image to 200kb, reduce image size to 200kb, resize photo to 200kb, 200kb image compressor online free, compress jpg to 200kb, reduce png to 200kb',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-to-200kb' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-to-200kb' },
};

const faq: [string, string][] = [
  ['How do I compress an image to 200KB or under?', 'Add your image, switch the tool to Target KB Mode, type 200, choose a format and press Compress. It searches the encoding quality until the result fits inside 200KB, so what you get is at or under that number. A file that is already smaller than 200KB comes back unchanged.'],
  ['Can it make a file exactly 200KB?', 'No, and it does not try to. Target KB Mode keeps the highest quality that still fits under the number you typed, so the result can land at 180KB or 195KB rather than touching 200KB.'],
  ['Will a 200KB image look worse than my original?', 'Re-encoding is lossy, so some detail is always discarded; the tool only decides how little of it you lose while still fitting. It also caps the longest side at 4096 px during the search, so a very large master is downscaled as well as re-encoded.'],
  ['Which format should I choose for a 200KB target?', 'WebP is a sensible default, and AVIF usually fits more image in the same space when your browser can encode it - if it cannot, the tool falls back to WebP. Choose JPEG when the site you are uploading to asks for JPEG.'],
  ['Is 200KB small enough for a US government photo upload?', 'This page cannot answer that, and neither can any third-party guide. Upload ceilings for consular and immigration photos are published by the agencies themselves and get revised without warning, so open the requirements page linked from the form you are filling in, read the figure there, and type that number into Target KB Mode. 200KB is a starting point people ask for, not a rule we verified.'],
  ['Does compressing to 200KB also resize the image to dimensions I choose?', 'No. It will not resize to a width and height you type in, crop to an aspect ratio, change or remove a background, or sharpen a blurry photo. The only size change is the 4096 px longest-side cap applied while it searches.'],
  ['Can I batch 50 images to 200KB at once?', 'Yes. Add up to 50 files, set the target to 200, run the batch and take the ZIP download or save the files one at a time. Each one is processed on your own device and nothing is uploaded.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};


const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Compress an Image to 200KB Online',
  description: 'Step-by-step guide to compress any image to 200KB or under free, without uploading to a server.',
  totalTime: 'PT30S',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Add your image', text: 'Click the drop zone or drag files in. Accepts JPEG, PNG, WebP, AVIF, HEIC. Up to 50 files at once.' },
    { '@type': 'HowToStep', position: 2, name: 'Switch to Target KB Mode', text: 'Toggle the mode selector from Quality to Target KB. Type 200 in the target field.' },
    { '@type': 'HowToStep', position: 3, name: 'Select output format', text: 'Choose WebP or AVIF for modern output, or JPEG when the receiving site asks for it.' },
    { '@type': 'HowToStep', position: 4, name: 'Compress and download', text: 'Click Compress. Your browser does the work locally - nothing is uploaded. Download the resulting file, which will be 200KB or under.' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image to 200KB Free Online","item":"https://www.compressto20kb.com/compress-to-200kb"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{maxWidth:'780px',margin:'0 auto',padding:'0 20px 8px',fontFamily:'system-ui,sans-serif'}}><p style={{fontSize:'16px',lineHeight:1.8,color:'#e2e8f0',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.3)',borderRadius:'8px',padding:'16px 20px',margin:'0 0 8px'}}><strong style={{color:'#818cf8'}}>Compress any image to 200KB or under free in your browser — no upload required. For product shots, document scans and any upload field that caps the file around 200KB. Add your file, set the target, and download the result.</strong></p></div>
      <ClientPage faq={faq} />
    </>
  );
}
