import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

const faq: [string, string][] = [
  ['What photo requirements apply to U.S. immigration and visa forms?', 'They come from two different agencies. For paper filings, USCIS asks for printed 2x2 inch photos on white or off-white background. When you upload documents through the USCIS online filing system, the published guidance is that files must not be larger than 12MB and are generally PDF, JPG or JPEG. The 240KB JPEG limit belongs to the State Department digital photo specification used for DS-160 and online passport submissions. Both are cited on this page; portals change, so read the limit off your own submission screen.'],
  ['How do I compress a photo for a U.S. government form?', 'Find the maximum file size the portal shows you, drop your photo into the tool above, select JPEG, switch to Target KB Mode and enter a number slightly below that maximum - 200 if the limit is 240KB. Compression runs in your browser, so the photo is never uploaded to our server.'],
  ['Is it safe to compress immigration photos with an online tool?', 'With this tool, yes: the image is decoded and re-encoded locally in your browser and never reaches our servers. Tools that do upload identity photos to a backend are a different matter - that is worth checking before you use them for a passport or visa image.'],
  ['Does compressing change the dimensions of my photo?', 'Not the shape. Target KB Mode searches encoding quality, and it never crops or changes the aspect ratio. The one exception is size: while compressing, the tool caps the longest side at 4096 px, so a larger scan or camera file is downscaled as well as re-encoded. A photo already within that cap keeps the dimensions it had. If a portal rejects a file on dimensions, resize it first, then compress.'],
  ['Can I compress several photos at once?', 'Yes - add up to 50 images and compress them in one run, then download individually or as a ZIP. Everything still happens on your device.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const howtoSchema = {"@context":"https://schema.org","@type":"HowTo","name":"How to Compress a Photo for U.S. Government Forms (Free, No Upload)","description":"Step-by-step guide to reduce a passport or ID photo to the file size a U.S. portal allows, without uploading it to a server.","totalTime":"PT30S","step":[{"@type":"HowToStep","position":1,"name":"Read the limit on your portal","text":"Check the maximum file size the submission page states. The State Department's digital photo spec allows 240KB or less; USCIS online document uploads allow files up to 12MB."},{"@type":"HowToStep","position":2,"name":"Upload your photo","text":"Drop your JPG or PNG photo into the upload area on compressto20kb.com."},{"@type":"HowToStep","position":3,"name":"Set a target KB","text":"Switch to Target KB Mode and enter a value slightly below the limit — for example 200 when the ceiling is 240KB."},{"@type":"HowToStep","position":4,"name":"Compress and download","text":"Click Compress, check the preview against the original, then download and upload the photo to the form."}]};

export const metadata: Metadata = {
  title: 'Compress Photo for USCIS & U.S. Immigration Forms',
  description: 'Reduce a JPG or PNG photo to the file size a U.S. government portal allows for N-400, I-485 or DS-160 submissions. No upload.',
  keywords: 'compress photo for uscis, uscis photo size requirements, compress image for ds-160, compress photo for n-400, resize photo for uscis online, uscis passport photo compressor',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-uscis' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-uscis' },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Photo for USCIS & U.S. Immigration Forms","item":"https://www.compressto20kb.com/compress-for-uscis"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoSchema) }} />

      <div style={{background:'#0f0c29',color:'#e2e8f0',fontFamily:'system-ui,sans-serif'}}>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'48px 20px 20px'}}>
          <div style={{fontSize:'15px',opacity:0.68,marginBottom:'12px'}}><a href="/" style={{color:'#a5b4fc',textDecoration:'none'}}>Home</a> → Compress for USCIS</div>
          <h1 style={{fontSize:'clamp(22px,4vw,32px)',fontWeight:800,color:'#ffffff',marginBottom:'16px'}}>Compress Photo for U.S. Immigration Forms — Free &amp; Private</h1>
          <p style={{fontSize:'15px',lineHeight:1.7,marginBottom:'10px',opacity:0.9}}>Rejection messages like “image too large” are a file-size problem, not a photo problem — and file size is the part you can control.</p>
          <p style={{fontSize:'15px',lineHeight:1.7,opacity:0.9}}>This page explains which U.S. rule sets the limit you are actually fighting, then gives you a compressor that hits it. Nothing is uploaded: the image is decoded and re-encoded on your own device.</p>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 32px'}}>
          <CompressorTool initialTargetKB={200} />
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Two Agencies, Two Different Limits</h2>
          <p style={{fontSize:'15px',lineHeight:1.7,marginBottom:'12px',opacity:0.9}}>People search for “USCIS photo size” and get one number, but online U.S. submissions are split across two rule sets. Mixing them up is how people compress a photo to 20KB and still get rejected — because the dimensions were wrong all along.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'14px'}}>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'18px'}}>
              <div style={{fontWeight:700,fontSize:'15px',color:'#c7d2fe',marginBottom:'8px'}}>State Department — digital photo upload</div>
              <p style={{fontSize:'15px',lineHeight:1.7,opacity:0.85,margin:0}}>Applies to DS-160 visa applications and online passport submissions. The published digital image requirements are a JPEG, square, between 600×600 and 1200×1200 pixels, and <strong>240KB or smaller</strong>. If your form says “image must be less than 240 kilobytes”, this is the rule.</p>
            </div>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'18px'}}>
              <div style={{fontWeight:700,fontSize:'15px',color:'#c7d2fe',marginBottom:'8px'}}>USCIS — forms and document uploads</div>
              <p style={{fontSize:'15px',lineHeight:1.7,opacity:0.85,margin:0}}>Paper filings ask for printed 2×2 inch photos on a white or off-white background. When you upload supporting documents through the online filing system, USCIS states files must not be larger than <strong>12MB</strong> and are generally PDF, JPG or JPEG — a much looser ceiling than the consular photo spec.</p>
            </div>
          </div>
          <p style={{fontSize:'13px',lineHeight:1.7,opacity:0.7,marginTop:'12px'}}>
            Sources, checked October 2026:{' '}
            <a href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos/digital-image-requirements.html" rel="nofollow noopener noreferrer" target="_blank" style={{color:'#a5b4fc'}}>travel.state.gov — Digital Image Requirements</a>
            {' · '}
            <a href="https://www.uscis.gov/file-online/tips-for-filing-forms-online" rel="nofollow noopener noreferrer" target="_blank" style={{color:'#a5b4fc'}}>uscis.gov — Tips for Filing Forms Online</a>
            . Portals change, so trust the limit printed on your own submission screen over anything written here.
          </p>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>How to Compress the Photo, Step by Step</h2>
          <ol style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li>Read the maximum file size on the page that rejected or warned about your photo.</li>
            <li>Open <strong>compressto20kb.com</strong> in your browser — the tool is at the top of this page.</li>
            <li>Drop the photo into the upload area. JPG and PNG both work; HEIC from an iPhone is converted too.</li>
            <li>Choose <strong>JPEG</strong> — the format U.S. portals expect for photos.</li>
            <li>Turn on <strong>Target KB Mode</strong> and enter a value a little under the limit: 200 for a 240KB ceiling.</li>
            <li>Click <strong>Compress</strong>, compare the preview with the original, then download.</li>
            <li>Upload the new file to the form. If it is still rejected, the problem is almost always dimensions or the photo itself, not KB.</li>
          </ol>
          <p style={{fontSize:'15px',lineHeight:1.7,marginTop:'12px',opacity:0.9}}>What the algorithm does: it searches JPEG quality downward until the encoded file fits inside your number, then hands back the best quality that still fits. The result is at or under the target and never above it — which is the only promise a size limit actually needs.</p>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>The Rejections That Are Not About File Size</h2>
          <p style={{fontSize:'15px',lineHeight:1.7,marginBottom:'12px',opacity:0.9}}>Compressing cannot fix these — no tool can, and one that claims otherwise is guessing:</p>
          <ul style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li><strong>Dimensions.</strong> A consular digital photo must be square and between 600×600 and 1200×1200 pixels. A landscape photo cropped to a square by the upload tool is a different problem from a 480×640 portrait.</li>
            <li><strong>Background and head size.</strong> Plain white or off-white, face covering most of the frame, no shadows behind you.</li>
            <li><strong>Recency and editing.</strong> Taken within the last six months, no filters, no retouching, no sunglasses or headwear unless the portal documents an exemption.</li>
            <li><strong>Facial recognition failures.</strong> A file that is technically valid can still be refused automatically if the face cannot be measured. That is a signal to retake the photo, not to compress harder.</li>
          </ul>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Why Local Compression Matters for Identity Photos</h2>
          <ul style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li><strong>Nothing is uploaded.</strong> A passport or national ID photo is biometric data. This tool decodes and re-encodes it in your own browser, so there is no server copy to leak or retain.</li>
            <li><strong>Nothing is stored.</strong> We do not keep your images, so there is nothing to delete later and no account attached to them.</li>
            <li><strong>Verify it yourself.</strong> Open DevTools → Network, compress a photo, and watch: no request carries the image. That is a check you can run before trusting any tool with an ID document.</li>
          </ul>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Frequently Asked Questions</h2>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ background: 'rgba(129,140,248,0.06)', border: '1px solid rgba(129,140,248,0.18)', borderRadius: '10px', padding: '13px 16px', marginBottom: '8px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15px', cursor: 'pointer', color: '#c7d2fe' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: '15px', lineHeight: 1.7, color: 'rgba(226,232,240,0.8)' }}>{a}</p>
            </details>
          ))}
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 52px'}}>
          <h2 style={{fontSize:'18px',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Related Tools</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
            <a href="/compress-for-uscis-n400" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>For N-400 →</a>
            <a href="/compress-for-green-card" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>For I-485 →</a>
            <a href="/compress-for-ds160" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>For DS-160 →</a>
            <a href="/compress-passport-photo-usa" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>US Passport Photo →</a>
            <a href="/compress-to-240kb" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>Compress to 240KB →</a>
            <a href="/compress-to-200kb" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>Compress to 200KB →</a>
          </div>
        </section>

      </div>
    </>
  );
}
