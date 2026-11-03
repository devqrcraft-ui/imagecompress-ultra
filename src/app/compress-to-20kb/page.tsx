import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Image to 20KB Online Free — 20KB or Smaller, No Upload',
  description: 'Compress an image to 20KB or less in your browser. Check the destination form first: a file-size cap does not guarantee its format, dimensions, or quality requirements.',
  keywords: 'compress image to 20kb, reduce image size to 20kb, resize photo to 20kb, 20kb image compressor online free, compress jpg to 20kb, compress png to 20kb',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-to-20kb' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-to-20kb' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I compress an image to 20KB?', acceptedAnswer: { '@type': 'Answer', text: 'Add your image, switch the tool to Target KB mode, type 20 and press Compress. The compressor tests JPEG quality levels in your browser and keeps the best one whose output still fits inside 20KB.' } },
    { '@type': 'Question', name: 'Is the result 20KB or under?', acceptedAnswer: { '@type': 'Answer', text: 'The compressor aims to return a file at or below the selected 20KB target. Meeting a file-size cap alone does not guarantee acceptance: the destination may also require a particular format, pixel size, or minimum image quality.' } },
    { '@type': 'Question', name: 'Does my image get uploaded to a server?', acceptedAnswer: { '@type': 'Answer', text: 'No. Encoding runs locally in your browser. You can prove it: open DevTools, go to the Network tab, compress a photo and watch that no request leaves your machine with your image in it.' } },
    { '@type': 'Question', name: 'Is 20KB a safe fallback for application portals?', acceptedAnswer: { '@type': 'Answer', text: 'No. A 20KB file only addresses a possible maximum file-size limit. The application may have a lower minimum size, require specific dimensions or a particular format, or reject an image with insufficient quality. Check the official instructions first.' } },
    { '@type': 'Question', name: 'What format should I use for a 20KB photo?', acceptedAnswer: { '@type': 'Answer', text: 'Use a file format explicitly accepted by the destination. A small file can still be rejected if its format, pixel dimensions, crop, or image quality does not meet the application requirements.' } },
    { '@type': 'Question', name: 'Can I compress several images to 20KB at once?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — add up to 50 files, keep the target at 20 and compress them in one pass. Download each file on its own or take the whole batch as a ZIP.' } },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Compress an Image to 20KB in Your Browser',
  description: 'Four steps to get any photo under a 20KB upload limit without sending the file to a server.',
  totalTime: 'PT30S',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Add your image', text: 'Click the upload area or drop a file. JPEG, PNG, WebP and iPhone HEIC are accepted, and files larger than 20KB are fine — that is the point.' },
    { '@type': 'HowToStep', position: 2, name: 'Set the target to 20', text: 'Open Target KB mode and type 20, or press the Gov 20KB preset, which sets the target and JPEG output together.' },
    { '@type': 'HowToStep', position: 3, name: 'Press Compress', text: 'The page searches quality settings until the encoded file fits under 20KB. Nothing is uploaded and the result shows the new size next to the original.' },
    { '@type': 'HowToStep', position: 4, name: 'Download and check the size', text: 'Save the file, then look at its properties. If the portal also sets a pixel size, crop or resize to that first and compress again.' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image to 20KB Online Free","item":"https://www.compressto20kb.com/compress-to-20kb"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <div style={{maxWidth:'780px',margin:'0 auto',padding:'0 20px 8px',fontFamily:'system-ui,sans-serif'}}><p style={{fontSize:'16px',lineHeight:1.8,color:'#e2e8f0',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.3)',borderRadius:'8px',padding:'16px 20px',margin:'0 0 8px'}}><strong style={{color:'#818cf8'}}>Compress an image to 20KB or less in your browser.</strong> Add your file, set the target to 20 and press Compress. Before using the result, check the destination&apos;s required format, pixel dimensions, and any minimum size or quality rules. A file-size cap alone does not guarantee acceptance.</p></div>
      <ClientPage />
    </>
  );
}
