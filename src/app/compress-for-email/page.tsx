import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Images for Email — Reduce Attachment Size Free, No Upload',
  description: 'Compress images before emailing. Reduce photo file size to under 500KB or 1MB for fast delivery and no blocked attachments. Free, no upload, 100% private. Works for Gmail, Outlook, Yahoo Mail.',
  keywords: 'compress image for email, reduce image size for email, compress photo for email attachment, email image compressor, resize image for email free, compress jpg for gmail outlook',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-email' },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a good image size for email attachments?","acceptedAnswer":{"@type":"Answer","text":"For inline newsletter images, keep files under 100KB. For photo attachments, aim for under 1MB per image. Gmail and Outlook warn recipients about large attachments — staying under 1MB per image prevents delivery issues."}},{"@type":"Question","name":"How do I compress an image for email without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Use Exact KB Mode and set a target of 500KB or 100KB. WebP gives the best quality at small sizes, but JPEG is safer for email compatibility. Binary search finds the maximum quality that fits your target."}},{"@type":"Question","name":"Will my photos be uploaded to a server when compressing for email?","acceptedAnswer":{"@type":"Answer","text":"No. All compression runs in your browser. Your images never leave your device — safe for private photos, documents, and business images before emailing."}},{"@type":"Question","name":"What format should I use for email images?","acceptedAnswer":{"@type":"Answer","text":"JPEG is the safest choice — universally supported by all email clients including Outlook 2016 and Apple Mail. WebP is supported by Gmail but may not display in older Outlook versions."}},{"@type":"Question","name":"Can I compress multiple photos for email at once?","acceptedAnswer":{"@type":"Answer","text":"Yes — upload up to 50 images, set your target size (e.g. 500KB or 100KB), and compress all at once. Download as individual files or a ZIP. All processing stays in your browser."}}]};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ClientPage />

      {/* SEO SECTIONS */}
      <div style={{background:'#0f0c29',color:'#e2e8f0',fontFamily:'system-ui,sans-serif'}}>

        {/* HOWTO SCHEMA */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"How to Compress Images for Email (Free, No Upload)","description":"Step-by-step guide to compress images for email attachments without uploading to a server.","totalTime":"PT30S","step":[{"@type":"HowToStep","position":1,"name":"Upload Your Image","text":"Click the drop zone or drag your image file. Supports JPG, PNG, WebP, HEIC."},{"@type":"HowToStep","position":2,"name":"Set Target Size","text":"For email newsletters use 100KB. For photo attachments use 500KB. Switch to Exact KB Mode and type your target."},{"@type":"HowToStep","position":3,"name":"Download and Attach","text":"Click Compress. Download the optimized file and attach it to your email — no server involved."}]})}} />

        {/* WHEN DO YOU NEED */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'48px 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>When Do You Need to Compress Images for Email?</h2>
          <p style={{fontSize:'15px',lineHeight:1.7,marginBottom:'10px',opacity:0.9}}>Email clients impose attachment size limits and inline image restrictions. Uncompressed photos cause slow loading, spam filter triggers, and failed deliveries.</p>
          <ul style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li><strong>Gmail and Outlook</strong> — warn recipients about attachments over 10MB; images over 1MB per file slow inbox loading significantly.</li>
            <li><strong>Email newsletters</strong> — inline images over 200KB increase load time and raise spam scores in filters like SpamAssassin.</li>
            <li><strong>Business email</strong> — many corporate mail servers reject or quarantine emails with attachments over 5MB total.</li>
            <li><strong>Mobile recipients</strong> — large images consume mobile data and may not load on slow connections.</li>
            <li><strong>Cold outreach</strong> — compressed images improve deliverability and reduce the chance of landing in spam.</li>
          </ul>
        </section>

        {/* TIPS */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Tips for Compressing Images for Email</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',gap:'14px'}}>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>Use JPEG for photos</div><div style={{fontSize:'13px',lineHeight:1.6,opacity:0.8}}>JPEG is the most compatible format across all email clients including old Outlook versions. WebP may not display in Outlook 2016 and earlier.</div></div>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>Target 100KB for inline images</div><div style={{fontSize:'13px',lineHeight:1.6,opacity:0.8}}>Newsletter images under 100KB load instantly. Use Exact KB Mode — type 100 and hit Compress.</div></div>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>Target 500KB for attachments</div><div style={{fontSize:'13px',lineHeight:1.6,opacity:0.8}}>For photo attachments, 500KB is a good balance of quality and size. Under 1MB per image avoids delivery warnings.</div></div>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>Batch compress all images</div><div style={{fontSize:'13px',lineHeight:1.6,opacity:0.8}}>Upload all newsletter images at once. Compress as ZIP and extract — saves time vs compressing one by one.</div></div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>CompressTo20KB vs Competitors — Email Image Compression</h2>
          <div style={{overflowX:'auto' as const}}>
            <table style={{width:'100%',borderCollapse:'collapse' as const,fontSize:'13px'}}>
              <thead><tr style={{borderBottom:'1px solid rgba(255,255,255,0.12)'}}>
                <th style={{textAlign:'left' as const,padding:'10px 12px',color:'rgba(255,255,255,0.5)',fontWeight:600}}>Feature</th>
                <th style={{padding:'10px 12px',color:'#818cf8',fontWeight:800}}>This Tool</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>TinyPNG</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>Squoosh</th>
              </tr></thead>
              <tbody>
                <tr style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}><td style={{padding:'9px 12px',color:'rgba(255,255,255,0.75)'}}>Exact KB target (100KB, 500KB)</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'#4ade80',fontWeight:700}}>Yes — binary search</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>No — % only</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>No — manual</td></tr>
                <tr style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}><td style={{padding:'9px 12px',color:'rgba(255,255,255,0.75)'}}>No file upload</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'#4ade80',fontWeight:700}}>Yes — browser only</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>No — server upload</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>Yes — browser only</td></tr>
                <tr style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}><td style={{padding:'9px 12px',color:'rgba(255,255,255,0.75)'}}>Batch compress 50 images</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'#4ade80',fontWeight:700}}>Yes</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>No (3 free)</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>No</td></tr>
                <tr style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}><td style={{padding:'9px 12px',color:'rgba(255,255,255,0.75)'}}>HEIC / iPhone support</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'#4ade80',fontWeight:700}}>Yes</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>No</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>Partial</td></tr>
                <tr style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}><td style={{padding:'9px 12px',color:'rgba(255,255,255,0.75)'}}>Free unlimited</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'#4ade80',fontWeight:700}}>Yes</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>3 images free</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>Yes</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* RELATED TOOLS */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 52px'}}>
          <h2 style={{fontSize:'18px',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Related Tools</h2>
          <div style={{display:'flex',flexWrap:'wrap' as const,gap:'10px'}}>
            <a href="/" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap' as const}}>Home — Image Compressor →</a>
            <a href="/compress-to-100kb" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap' as const}}>Compress to 100KB →</a>
            <a href="/compress-to-500kb" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap' as const}}>Compress to 500KB →</a>
            <a href="/compress-for-shopify" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap' as const}}>For Shopify →</a>
            <a href="/compress-for-instagram" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap' as const}}>For Instagram →</a>
          </div>
        </section>
      </div>
    </>
  );
}
