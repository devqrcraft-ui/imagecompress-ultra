import type { Metadata } from 'next';
import ClientPage from './client';

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a good image size for email attachments?","acceptedAnswer":{"@type":"Answer","text":"For inline newsletter images, keep files under 100KB. For photo attachments, aim for under 1MB per image. Gmail and Outlook warn recipients about large attachments — staying under 1MB per image prevents delivery issues."}},{"@type":"Question","name":"How do I compress an image for email without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Use Exact KB Mode and set a target of 500KB or 100KB. WebP gives the best quality at small sizes, but JPEG is safer for email compatibility. Binary search finds the maximum quality that fits your target."}},{"@type":"Question","name":"Will my photos be uploaded to a server when compressing for email?","acceptedAnswer":{"@type":"Answer","text":"No. All compression runs in your browser. Your images never leave your device — safe for private photos, documents, and business images before emailing."}},{"@type":"Question","name":"What format should I use for email images?","acceptedAnswer":{"@type":"Answer","text":"JPEG is the safest choice — universally supported by all email clients including Outlook 2016 and Apple Mail. WebP is supported by Gmail but may not display in older Outlook versions."}},{"@type":"Question","name":"Can I compress multiple photos for email at once?","acceptedAnswer":{"@type":"Answer","text":"Yes — upload up to 50 images, set your target size (e.g. 500KB or 100KB), and compress all at once. Download as individual files or a ZIP. All processing stays in your browser."}}]};

const howtoSchema = {"@context":"https://schema.org","@type":"HowTo","name":"How to Compress Images for Email (Free, No Upload)","description":"Step-by-step guide to compress images for email attachments without uploading to a server.","totalTime":"PT30S","step":[{"@type":"HowToStep","position":1,"name":"Upload your images","text":"Drop all images you plan to send by email into the upload area. Supports JPG, PNG, WebP, HEIC. Up to 50 at once."},{"@type":"HowToStep","position":2,"name":"Switch to Exact KB Mode","text":"Click Exact KB Mode and set a target like 100KB for inline images or 150KB for hero graphics."},{"@type":"HowToStep","position":3,"name":"Compress and attach","text":"Click Compress and download your optimized images. Attach the smaller files in Gmail, Outlook or any other email client."}]};

export const metadata: Metadata = {
  title: 'Compress Images for Email — Free Online, No Upload',
  description: 'Compress images for email in seconds. Reduce photo size to 100KB–500KB for Gmail, Outlook and other providers. No upload — all processing happens in your browser.',
  keywords: 'compress image for email, reduce image size for email, compress photo for email attachment, email image compressor, resize image for email free, compress jpg for gmail outlook',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-email' },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoSchema) }} />
      <ClientPage />

      <div style={{background:'#0f0c29',color:'#e2e8f0',fontFamily:'system-ui,sans-serif'}}>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'48px 20px 28px'}}>
          <h1 style={{fontSize:'clamp(22px,4vw,32px)',fontWeight:800,color:'#ffffff',marginBottom:'16px'}}>Compress Images for Email — Free, Private &amp; Instant</h1>
          <p style={{fontSize:'15px',lineHeight:1.7,marginBottom:'10px',opacity:0.9}}>Large images are one of the fastest ways to break email attachments and slow down your messages.</p>
          <p style={{fontSize:'15px',lineHeight:1.7,opacity:0.9}}>This free email image compressor helps you shrink JPG, PNG, WebP, AVIF and HEIC photos to the perfect size for Gmail, Outlook, Yahoo and business email — all without uploading anything to a server. Everything runs locally in your browser, so your attachments stay private on your device.</p>
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
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>How to Compress Images for Email with Exact KB</h2>
          <ol style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li>Open <strong>compressto20kb.com</strong> in your browser.</li>
            <li>Drop all the images you plan to send by email into the upload area (up to 50 at once).</li>
            <li>Switch to <strong>Exact KB Mode</strong>.</li>
            <li>Set a target like <strong>100KB</strong> or <strong>150KB</strong> depending on how many images you are sending.</li>
            <li>Click <strong>Compress</strong> and download your optimized images.</li>
            <li>Attach the smaller files in Gmail, Outlook, Yahoo or any other email client.</li>
          </ol>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>When to Use 20KB vs 100KB vs 200KB</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',gap:'14px'}}>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>20KB–50KB</div><div style={{fontSize:'13px',lineHeight:1.6,opacity:0.8}}>Tiny logos, signatures, simple icons where speed matters more than detail.</div></div>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>100KB</div><div style={{fontSize:'13px',lineHeight:1.6,opacity:0.8}}>Default target for most inline email images and small hero graphics. Use Exact KB Mode — type 100 and hit Compress.</div></div>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>150–200KB</div><div style={{fontSize:'13px',lineHeight:1.6,opacity:0.8}}>Detailed photos (events, products) where you need more quality but still want fast loading.</div></div>
          </div>
          <p style={{fontSize:'15px',lineHeight:1.7,marginTop:'14px',opacity:0.9}}>With Exact KB Mode you can hit these targets precisely instead of guessing a random quality percentage.</p>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Why Use This Email Image Compressor?</h2>
          <ul style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li><strong>No upload:</strong> All compression happens in your browser — nothing is sent to our servers.</li>
            <li><strong>Exact KB control:</strong> Perfect for hitting 100KB or 150KB limits when you know your recipient’s constraints.</li>
            <li><strong>Batch compression:</strong> Compress up to 50 images in one go before sending a big campaign.</li>
            <li><strong>No watermarks, no signup:</strong> Just drop, compress and attach.</li>
          </ul>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>CompressTo20KB vs Competitors — Email Image Compression</h2>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
              <thead><tr style={{borderBottom:'1px solid rgba(255,255,255,0.12)'}}>
                <th style={{textAlign:'left',padding:'10px 12px',color:'rgba(255,255,255,0.5)',fontWeight:600}}>Feature</th>
                <th style={{padding:'10px 12px',color:'#818cf8',fontWeight:800}}>This Tool</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>TinyPNG</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>Squoosh</th>
              </tr></thead>
              <tbody>
                <tr style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}><td style={{padding:'9px 12px',color:'rgba(255,255,255,0.75)'}}>Exact KB target (100KB, 500KB)</td><td style={{padding:'9px 12px',textAlign:'center',color:'#4ade80',fontWeight:700}}>Yes — binary search</td><td style={{padding:'9px 12px',textAlign:'center',color:'rgba(255,255,255,0.4)'}}>No — % only</td><td style={{padding:'9px 12px',textAlign:'center',color:'rgba(255,255,255,0.4)'}}>No — manual</td></tr>
                <tr style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}><td style={{padding:'9px 12px',color:'rgba(255,255,255,0.75)'}}>No file upload</td><td style={{padding:'9px 12px',textAlign:'center',color:'#4ade80',fontWeight:700}}>Yes — browser only</td><td style={{padding:'9px 12px',textAlign:'center',color:'rgba(255,255,255,0.4)'}}>No — server upload</td><td style={{padding:'9px 12px',textAlign:'center',color:'rgba(255,255,255,0.4)'}}>Yes — browser only</td></tr>
                <tr style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}><td style={{padding:'9px 12px',color:'rgba(255,255,255,0.75)'}}>Batch compress 50 images</td><td style={{padding:'9px 12px',textAlign:'center',color:'#4ade80',fontWeight:700}}>Yes</td><td style={{padding:'9px 12px',textAlign:'center',color:'rgba(255,255,255,0.4)'}}>No (3 free)</td><td style={{padding:'9px 12px',textAlign:'center',color:'rgba(255,255,255,0.4)'}}>No</td></tr>
                <tr style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}><td style={{padding:'9px 12px',color:'rgba(255,255,255,0.75)'}}>HEIC / iPhone support</td><td style={{padding:'9px 12px',textAlign:'center',color:'#4ade80',fontWeight:700}}>Yes</td><td style={{padding:'9px 12px',textAlign:'center',color:'rgba(255,255,255,0.4)'}}>No</td><td style={{padding:'9px 12px',textAlign:'center',color:'rgba(255,255,255,0.4)'}}>Partial</td></tr>
                <tr style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}><td style={{padding:'9px 12px',color:'rgba(255,255,255,0.75)'}}>Free unlimited</td><td style={{padding:'9px 12px',textAlign:'center',color:'#4ade80',fontWeight:700}}>Yes</td><td style={{padding:'9px 12px',textAlign:'center',color:'rgba(255,255,255,0.4)'}}>3 images free</td><td style={{padding:'9px 12px',textAlign:'center',color:'rgba(255,255,255,0.4)'}}>Yes</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 52px'}}>
          <h2 style={{fontSize:'18px',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Related Tools</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
            <a href="/" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>Home — Image Compressor →</a>
            <a href="/compress-to-100kb" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>Compress to 100KB →</a>
            <a href="/compress-to-500kb" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>Compress to 500KB →</a>
            <a href="/compress-for-shopify" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>For Shopify →</a>
            <a href="/compress-for-instagram" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>For Instagram →</a>
          </div>
        </section>

      </div>
    </>
  );
}