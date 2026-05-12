import type { Metadata } from 'next';
import ClientPage from './client';

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are USCIS photo requirements?","acceptedAnswer":{"@type":"Answer","text":"USCIS requires photos in JPEG format, 2x2 inches (600x600px minimum), white or off-white background, under 240KB file size for online submissions. The photo must be taken within 6 months, show a full face front view, and meet specific lighting and background standards."}},{"@type":"Question","name":"How do I compress a photo to meet USCIS requirements?","acceptedAnswer":{"@type":"Answer","text":"Upload your photo, select JPEG format, switch to Exact KB Mode, type 200 (for a safe margin under 240KB), and click Compress. All processing runs in your browser — your photo is never uploaded to any server."}},{"@type":"Question","name":"Is it safe to compress USCIS photos online?","acceptedAnswer":{"@type":"Answer","text":"Yes — with this tool. All compression runs locally in your browser using WebAssembly. Your photo never leaves your device. Other online tools upload files to their servers, which is a significant privacy risk for immigration documents."}},{"@type":"Question","name":"Can I compress multiple USCIS photos at once?","acceptedAnswer":{"@type":"Answer","text":"Yes — upload up to 50 photos and compress all at once. Download individually or as a ZIP. Everything runs in your browser — free, no signup required."}}]};

const howtoSchema = {"@context":"https://schema.org","@type":"HowTo","name":"How to Compress a Photo for USCIS Forms (Free, No Upload)","description":"Step-by-step guide to compress a passport or ID photo for USCIS, DS-160, N-400 and I-485 without uploading to a server.","totalTime":"PT30S","step":[{"@type":"HowToStep","position":1,"name":"Check the file size limit","text":"Find the maximum KB allowed on your USCIS or consular portal, for example under 240KB for N-400."},{"@type":"HowToStep","position":2,"name":"Upload your photo","text":"Drop your JPG or PNG photo into the upload area on compressto20kb.com."},{"@type":"HowToStep","position":3,"name":"Set Exact KB target","text":"Switch to Exact KB Mode and enter a value slightly below the limit, for example 220 if the limit is 240KB."},{"@type":"HowToStep","position":4,"name":"Compress and download","text":"Click Compress and download. Upload the compressed photo to the USCIS or consular form."}]};

export const metadata: Metadata = {
  title: 'Compress Photo for USCIS & U.S. Immigration Forms — Free, No Upload',
  description: 'Compress photos for USCIS, DS-160, N-400 and I-485 forms. Meet strict KB limits without changing the dimensions. No upload — all compression happens in your browser.',
  keywords: 'compress photo for uscis, uscis photo size requirements, compress image for ds-160, compress photo for n-400, resize photo for uscis online, uscis passport photo compressor',
  alternates: { canonical: 'https://compressto20kb.com/compress-for-uscis' },
  openGraph: { url: 'https://compressto20kb.com/compress-for-uscis' },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Photo for USCIS & U.S. Immigration Forms","item":"https://compressto20kb.com/compress-for-uscis"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoSchema) }} />
      <ClientPage />

      <div style={{background:'#0f0c29',color:'#e2e8f0',fontFamily:'system-ui,sans-serif'}}>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'48px 20px 28px'}}>
          <h1 style={{fontSize:'clamp(22px,4vw,32px)',fontWeight:800,color:'#ffffff',marginBottom:'16px'}}>Compress Photo for USCIS Forms — Free &amp; Private</h1>
          <p style={{fontSize:'15px',lineHeight:1.7,marginBottom:'10px',opacity:0.9}}>Many U.S. immigration and government portals reject photos that are even slightly over their file size limits.</p>
          <p style={{fontSize:'15px',lineHeight:1.7,opacity:0.9}}>This free USCIS photo compressor helps you reduce JPG and PNG file sizes for common forms like N‑400, I‑485 and DS‑160 while keeping your image dimensions and face clearly visible. All compression runs directly in your browser — your immigration documents never leave your device.</p>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Typical USCIS and Government Photo Size Limits</h2>
          <p style={{fontSize:'15px',lineHeight:1.7,marginBottom:'12px',opacity:0.9}}>Different U.S. portals and forms use different rules, but many of them act the same way:</p>
          <ul style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li>They enforce a strict <strong>maximum file size</strong> (for example, under 240KB or 500KB)</li>
            <li>They require a <strong>specific pixel size</strong> or aspect ratio for ID photos</li>
            <li>They reject files that are only slightly over the KB limit, even if the dimensions are correct</li>
          </ul>
          <p style={{fontSize:'15px',lineHeight:1.7,marginTop:'12px',opacity:0.9}}>Our tool focuses on the file size part — you can keep your existing dimensions and adjust the KB size so the portal accepts your photo.</p>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>How to Compress a USCIS Photo with Exact KB</h2>
          <ol style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li>Check the file size limit shown on your USCIS or U.S. government portal (for example, “under 240KB”).</li>
            <li>Open <strong>compressto20kb.com</strong> in your browser.</li>
            <li>Drop your photo into the upload area (JPG or PNG works best for ID photos).</li>
            <li>Switch to <strong>Exact KB Mode</strong>.</li>
            <li>Enter a target slightly below the maximum allowed size (for example, 220KB if the limit is 240KB).</li>
            <li>Click <strong>Compress</strong> and download the new file.</li>
            <li>Upload the compressed photo to the USCIS or consular form.</li>
          </ol>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Tips for Clear, Compliant ID Photos</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',gap:'14px'}}>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>Plain background</div><div style={{fontSize:'15px',lineHeight:1.6,opacity:0.8}}>Use a plain, light background and avoid heavy shadows. USCIS and consular portals require white or off-white backgrounds.</div></div>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>Full face visible</div><div style={{fontSize:'15px',lineHeight:1.6,opacity:0.8}}>Make sure your full face is visible with a neutral expression. No sunglasses, hats or heavy editing.</div></div>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>Avoid artifacts</div><div style={{fontSize:'15px',lineHeight:1.6,opacity:0.8}}>Avoid filters or over-compressed images that create visible artifacts. Use JPEG format for best portal compatibility.</div></div>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>Check both size and dimensions</div><div style={{fontSize:'15px',lineHeight:1.6,opacity:0.8}}>If the portal shows an error, double-check both the file size and pixel dimensions — not just one of them.</div></div>
          </div>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Why This Tool Is Safer Than Traditional Online Compressors</h2>
          <ul style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li><strong>No upload:</strong> Immigration documents are sensitive. Our compressor never uploads your photo — it runs entirely inside your browser using WebAssembly.</li>
            <li><strong>Exact KB control:</strong> You can target safe limits like 200KB or 220KB instead of guessing quality settings and hoping the portal accepts your file.</li>
            <li><strong>No watermark, no storage:</strong> We never add logos or marks and we never store your images — there is nothing to delete.</li>
          </ul>
        </section>

        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 52px'}}>
          <h2 style={{fontSize:'18px',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Related Tools</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
            <a href="/compress-for-n400" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>For N-400 →</a>
            <a href="/compress-for-i485" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>For I-485 →</a>
            <a href="/compress-for-ds160" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>For DS-160 →</a>
            <a href="/compress-passport-photo-usa" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>Compress Passport Photo →</a>
            <a href="/compress-to-200kb" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>Compress to 200KB →</a>
            <a href="/compress-to-100kb" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>Compress to 100KB →</a>
          </div>
        </section>

      </div>
    </>
  );
}