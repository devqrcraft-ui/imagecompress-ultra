import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a good image size for email attachments?","acceptedAnswer":{"@type":"Answer","text":"A practical working size is 100KB or under for inline images and signatures, and 200-500KB for a photo you want to look good when the recipient opens it full size. Gmail caps a whole message at 25MB, so a batch of multi-megabyte phone photos is what actually gets you near a limit."}},{"@type":"Question","name":"How do I compress an image for email without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Turn on Target KB Mode and name the ceiling — 100KB for inline use, 500KB for a photo attachment. The tool searches JPEG quality downward and returns the highest quality that still fits under that number, so you get the best file your size budget allows instead of guessing a quality percentage."}},{"@type":"Question","name":"Will my photos be uploaded to a server when compressing for email?","acceptedAnswer":{"@type":"Answer","text":"No. Compression runs in your browser: the image is decoded and re-encoded on your device and never sent to our server. You can confirm it in DevTools while compressing."}},{"@type":"Question","name":"What format should I use for email images?","acceptedAnswer":{"@type":"Answer","text":"JPEG is the safe default because every mainstream email client renders it. WebP is smaller at the same quality but older desktop Outlook versions do not display it, so use WebP only when you know your recipients are on Gmail or a modern client."}},{"@type":"Question","name":"Can I compress multiple photos for email at once?","acceptedAnswer":{"@type":"Answer","text":"Yes — add up to 50 images, set one target, and compress the batch. Download as individual files or a ZIP, all processed in your browser."}}]};

const howtoSchema = {"@context":"https://schema.org","@type":"HowTo","name":"How to Compress Images for Email (Free, No Upload)","description":"Step-by-step guide to compress images for email attachments without uploading to a server.","totalTime":"PT30S","step":[{"@type":"HowToStep","position":1,"name":"Upload your images","text":"Drop all images you plan to send by email into the upload area. Supports JPG, PNG, WebP, HEIC. Up to 50 at once."},{"@type":"HowToStep","position":2,"name":"Switch to Target KB Mode","text":"Click Target KB Mode and set a target like 100KB for inline images or 150KB for hero graphics."},{"@type":"HowToStep","position":3,"name":"Compress and attach","text":"Click Compress and download your optimized images. Attach the smaller files in Gmail, Outlook or any other email client."}]};

export const metadata: Metadata = {
  title: 'Compress Images for Email — Free Online, No Upload',
  description: 'Compress images for email in seconds. Reduce photo size to 100KB–500KB for Gmail, Outlook and other providers. No upload — all processing happens in your browser.',
  keywords: 'compress image for email, reduce image size for email, compress photo for email attachment, email image compressor, resize image for email free, compress jpg for gmail outlook',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-email' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-email' },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Images for Email","item":"https://www.compressto20kb.com/compress-for-email"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoSchema) }} />

      <div style={{background:'#0f0c29',color:'#e2e8f0',fontFamily:'system-ui,sans-serif'}}>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'48px 20px 20px'}}>
          <div style={{fontSize:'15px',opacity:0.68,marginBottom:'12px'}}><a href="/" style={{color:'#a5b4fc',textDecoration:'none'}}>Home</a> → Compress for Email</div>
          <h1 style={{fontSize:'clamp(22px,4vw,32px)',fontWeight:800,color:'#ffffff',marginBottom:'16px'}}>Compress Images for Email — Free, Private &amp; Instant</h1>
          <p style={{fontSize:'15px',lineHeight:1.7,marginBottom:'10px',opacity:0.9}}>Large images are one of the fastest ways to break email attachments and slow down your messages.</p>
          <p style={{fontSize:'15px',lineHeight:1.7,opacity:0.9}}>This free email image compressor helps you shrink JPG, PNG, WebP, AVIF and HEIC photos to a size that fits Gmail, Outlook, Yahoo and business email — all without uploading anything to a server. Everything runs locally in your browser, so your attachments stay private on your device.</p>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <CompressorTool initialTargetKB={100} />
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Recommended Image Sizes for Email</h2>
          <p style={{fontSize:'15px',lineHeight:1.7,marginBottom:'12px',opacity:0.9}}>Most email providers care about two things: total attachment size and how quickly images load on slow connections. As a rule of thumb for 2026:</p>
          <ul style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li><strong>Inline images and signatures:</strong> aim for 50–150KB per image</li>
            <li><strong>Email headers and hero images:</strong> 100–300KB per image</li>
            <li><strong>Total attachments in one message:</strong> try to stay under 5–10MB (many providers hard-limit around 20–25MB)</li>
          </ul>
          <p style={{fontSize:'15px',lineHeight:1.7,marginTop:'12px',opacity:0.9}}>Keeping individual images around 100KB is a safe default for most newsletters and transactional emails.</p>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>How to Compress Images for Email with Target KB</h2>
          <ol style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li>Open <strong>compressto20kb.com</strong> in your browser.</li>
            <li>Drop all the images you plan to send by email into the upload area (up to 50 at once).</li>
            <li>Switch to <strong>Target KB Mode</strong>.</li>
            <li>Set a target like <strong>100KB</strong> or <strong>150KB</strong> depending on how many images you are sending.</li>
            <li>Click <strong>Compress</strong> and download your optimized images.</li>
            <li>Attach the smaller files in Gmail, Outlook, Yahoo or any other email client.</li>
          </ol>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>When to Use 20KB vs 100KB vs 200KB</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',gap:'14px'}}>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>20KB–50KB</div><div style={{fontSize:'15px',lineHeight:1.6,opacity:0.8}}>Tiny logos, signatures, simple icons where speed matters more than detail.</div></div>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>100KB</div><div style={{fontSize:'15px',lineHeight:1.6,opacity:0.8}}>Default target for most inline email images and small hero graphics. Use Target KB Mode — type 100 and hit Compress.</div></div>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>150–200KB</div><div style={{fontSize:'15px',lineHeight:1.6,opacity:0.8}}>Detailed photos (events, products) where you need more quality but still want fast loading.</div></div>
          </div>
          <p style={{fontSize:'15px',lineHeight:1.7,marginTop:'14px',opacity:0.9}}>With Target KB Mode you name the ceiling instead of guessing a quality percentage and re-checking the file size afterwards.</p>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Why Use This Email Image Compressor?</h2>
          <ul style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li><strong>No upload:</strong> All compression happens in your browser — nothing is sent to our servers.</li>
            <li><strong>Target KB control:</strong> Useful when you know the ceiling you need to stay under — 100KB for an inline graphic, 500KB for an attachment.</li>
            <li><strong>Batch compression:</strong> Compress up to 50 images in one go before sending a big campaign.</li>
            <li><strong>No watermarks, no signup:</strong> Just drop, compress and attach.</li>
          </ul>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>What Happens When You Set a Target</h2>
          <p style={{fontSize:'15px',lineHeight:1.7,marginBottom:'12px',opacity:0.9}}>A quality slider asks you to guess: 72? 68? Then you check the file size and start again. Target KB Mode inverts it — you name the ceiling, the tool searches downward through JPEG quality until the encoded file fits under it, and returns the best quality that still fits.</p>
          <ul style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li><strong>The result is at or under your number</strong>, never above it — a 100KB target can come back as 96KB, not 118KB.</li>
            <li><strong>Pixel dimensions stay untouched</strong> unless you resize on purpose, so a photo sized for your email template stays sized for it.</li>
            <li><strong>Batch works the same way:</strong> add up to 50 images and every one is brought under the same ceiling.</li>
            <li><strong>Nothing leaves the tab.</strong> Decode, re-encode and download all happen in your browser — worth checking yourself in DevTools before any identity photo or client document goes through a tool that uploads.</li>
          </ul>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Frequently Asked Questions</h2>
          {[
            ['What is a good image size for email attachments?', 'A practical working size is 100KB or under for inline images and signatures, and 200–500KB for a photo you want to look good opened full size. Gmail caps a whole message at 25MB, so a batch of multi-megabyte phone photos is what actually gets you near a limit.'],
            ['How do I compress an image for email without losing quality?', 'Turn on Target KB Mode and name the ceiling — 100KB for inline use, 500KB for an attachment. The tool searches JPEG quality downward and returns the highest quality that still fits under that number, so you get the best file your size budget allows instead of guessing a quality percentage.'],
            ['Will my photos be uploaded to a server when compressing for email?', 'No. Compression runs in your browser: the image is decoded and re-encoded on your device and never sent to our server. You can confirm it in DevTools while compressing.'],
            ['What format should I use for email images?', 'JPEG is the safe default because every mainstream email client renders it. WebP is smaller at the same quality but older desktop Outlook versions do not display it, so use WebP only when you know your recipients are on Gmail or a modern client.'],
            ['Can I compress multiple photos for email at once?', 'Yes — add up to 50 images, set one target, and compress the batch. Download as individual files or a ZIP, all processed in your browser.'],
          ].map(([q, a], i) => (
            <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px'}}>
              <summary style={{fontWeight:700,fontSize:'15px',cursor:'pointer',color:'#c7d2fe'}}>{q}</summary>
              <p style={{margin:'10px 0 0',fontSize:'15px',lineHeight:1.7,opacity:0.82}}>{a}</p>
            </details>
          ))}
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 52px'}}>
          <h2 style={{fontSize:'18px',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Related Tools</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
            <a href="/" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>Home — Image Compressor →</a>
            <a href="/compress-to-100kb" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>Compress to 100KB →</a>
            <a href="/compress-to-500kb" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>Compress to 500KB →</a>
            <a href="/compress-for-shopify" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>For Shopify →</a>
            <a href="/compress-for-instagram" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>For Instagram →</a>
          </div>
        </section>

      </div>
    </>
  );
}