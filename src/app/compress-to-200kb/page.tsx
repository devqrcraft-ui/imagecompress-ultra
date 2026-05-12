import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Image to 200KB Free Online — No Upload, 100% Private',
  description: 'Compress any image to exactly 200KB free online. Works in your browser — files never leave your device. No upload, no signup. Perfect for blog posts, ecommerce product photos, and portals with a 200KB photo limit.',
  keywords: 'compress image to 200kb, reduce image size to 200kb, resize photo to 200kb, 200kb image compressor online free, compress jpg to 200kb, reduce png to 200kb',
  alternates: { canonical: 'https://compressto20kb.com/compress-to-200kb' },
  openGraph: { url: 'https://compressto20kb.com/compress-to-200kb' },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image to exactly 200KB?","acceptedAnswer":{"@type":"Answer","text":"Open compressto20kb.com, upload your image, switch to Exact KB Mode, type 200, and click Compress. Binary search finds the maximum quality that fits 200KB within 1KB accuracy."}},{"@type":"Question","name":"Does compressing to 200KB reduce visible quality?","acceptedAnswer":{"@type":"Answer","text":"200KB preserves much more detail than 20KB or 100KB. For most product photos and blog images at typical web sizes (800–1200px wide), a 200KB WebP looks nearly identical to the original."}},{"@type":"Question","name":"What is 200KB good for?","acceptedAnswer":{"@type":"Answer","text":"200KB is ideal for ecommerce product photos, blog hero images, email newsletter graphics, and government portal uploads. It gives noticeably better quality than 100KB while still loading fast on mobile."}},{"@type":"Question","name":"How to compress an image to 200KB on iPhone or Android?","acceptedAnswer":{"@type":"Answer","text":"Open compressto20kb.com in Safari (iPhone) or Chrome (Android). Tap upload, select your photo, set Exact KB Mode to 200, tap Compress. Downloads instantly — no app needed."}},{"@type":"Question","name":"Can I batch compress multiple images to 200KB?","acceptedAnswer":{"@type":"Answer","text":"Yes — upload up to 50 images at once. Set Exact KB Mode to 200 and click Compress All. Download individually or as a ZIP. All processing stays on your device."}},{"@type":"Question","name":"Is WebP or JPEG better for 200KB images?","acceptedAnswer":{"@type":"Answer","text":"WebP gives better visual quality at 200KB than JPEG. At 200KB, WebP retains more sharpness and detail. Use JPEG only if you need broad compatibility with older browsers or email clients."}}]};


const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Compress an Image to 200KB Online',
  description: 'Step-by-step guide to compress any image to exactly 200KB free, without uploading to a server.',
  totalTime: 'PT30S',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Upload your image', text: 'Click upload or drag your file. Accepts JPEG, PNG, WebP, AVIF, HEIC. Up to 50 files at once.' },
    { '@type': 'HowToStep', position: 2, name: 'Switch to Exact KB Mode', text: 'Toggle the mode to Exact KB. Type 200 in the target field.' },
    { '@type': 'HowToStep', position: 3, name: 'Select output format', text: 'Choose WebP for best quality at 200KB, JPEG for maximum compatibility.' },
    { '@type': 'HowToStep', position: 4, name: 'Compress and download', text: 'Click Compress. Your browser processes instantly — nothing uploaded. Download the 200KB file.' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image to 200KB Free Online","item":"https://compressto20kb.com/compress-to-200kb"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{maxWidth:'780px',margin:'0 auto',padding:'0 20px 8px',fontFamily:'system-ui,sans-serif'}}><p style={{fontSize:'16px',lineHeight:1.8,color:'#e2e8f0',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.3)',borderRadius:'8px',padding:'16px 20px',margin:'0 0 8px'}}><strong style={{color:'#818cf8'}}>Compress any image to exactly 200KB free in your browser — no upload required. Used for DS-160 visa applications which require photos under 240KB. Upload your file, set target to 200KB, and download instantly.</strong></p></div>
      <ClientPage />
    </>
  );
}
