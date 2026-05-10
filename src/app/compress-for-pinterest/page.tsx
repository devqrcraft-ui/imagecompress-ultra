import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Image for Pinterest — Free, No Upload | CompressTo20KB',
  description: 'Compress images for Pinterest free in your browser. Optimize pin photos to 200-500KB for fast loading. No upload, no signup. JPEG, PNG, WebP supported.',
  keywords: 'compress image for pinterest, pinterest image size, pinterest photo requirements, compress for pinterest free, pinterest pin size kb',
  alternates: { canonical: 'https://compressto20kb.com/compress-for-pinterest' },
  openGraph: { url: 'https://compressto20kb.com/compress-for-pinterest' },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the best image size for Pinterest pins?","acceptedAnswer":{"@type":"Answer","text":"Pinterest recommends a 2:3 aspect ratio — 1000x1500px is ideal. For fast loading in feeds, aim for 200-500KB. JPEG works best for photos; PNG for graphics with text."}},{"@type":"Question","name":"How do I compress images for Pinterest without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Upload your pin image, select JPEG at 85% quality or set Exact KB Mode to 300-500KB. Pinterest re-compresses uploads, so starting from a well-optimized file keeps your pins sharp."}},{"@type":"Question","name":"Does Pinterest accept WebP images?","acceptedAnswer":{"@type":"Answer","text":"Pinterest supports WebP uploads in modern browsers. However, JPEG is safer for cross-platform compatibility across all devices and Pinterest apps."}},{"@type":"Question","name":"Will my Pinterest images be uploaded to compress them?","acceptedAnswer":{"@type":"Answer","text":"No. All compression runs locally in your browser. Your images never leave your device — unlike other tools that upload files to their servers."}},{"@type":"Question","name":"What aspect ratio is best for Pinterest?","acceptedAnswer":{"@type":"Answer","text":"2:3 ratio is optimal — 1000x1500px or 1080x1620px. Portrait pins get more feed real estate than square or landscape. Avoid going taller than 1:2.1 ratio as Pinterest may crop them."}},{"@type":"Question","name":"How many KB should a Pinterest image be?","acceptedAnswer":{"@type":"Answer","text":"For fast loading, aim for 200-500KB per pin. Under 200KB may look slightly soft after Pinterest re-compression. Over 1MB slows down your profile and board loading speed."}}]};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ClientPage />

      {/* SEO SECTIONS */}
      <div style={{background:'#0f0c29',color:'#e2e8f0',fontFamily:'system-ui,sans-serif'}}>

        {/* HOWTO SCHEMA */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"How to Compress Images for Pinterest (Free, No Upload)","description":"Compress pin images to 200-500KB for fast Pinterest loading without uploading to a server.","totalTime":"PT30S","step":[{"@type":"HowToStep","position":1,"name":"Upload Your Pin Image","text":"Drag and drop your image or click to upload. Supports JPG, PNG, WebP, HEIC up to 50 files."},{"@type":"HowToStep","position":2,"name":"Set Target to 300KB","text":"Switch to Exact KB Mode and type 300 (or 200-500 depending on your image). This ensures fast loading in Pinterest feeds."},{"@type":"HowToStep","position":3,"name":"Download and Upload to Pinterest","text":"Click Compress, download your optimized pin image, and upload it to your Pinterest board."}]})}} />

        {/* WHEN DO YOU NEED */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'48px 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>When Do You Need to Compress Images for Pinterest?</h2>
          <p style={{fontSize:'15px',lineHeight:1.7,marginBottom:'10px',opacity:0.9}}>Pinterest re-compresses all uploaded images, but starting with an already-optimized file results in sharper pins and faster profile loading.</p>
          <ul style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li><strong>Pin feed performance</strong> — boards with large uncompressed images load slower, increasing bounce rate on mobile.</li>
            <li><strong>Pinterest SEO</strong> — fast-loading boards rank better in Pinterest search results and get more impressions.</li>
            <li><strong>Bulk pin uploading</strong> — compressing 50 pins before upload saves time and avoids Pinterest quality degradation from heavy re-compression.</li>
            <li><strong>Story Pins and Idea Pins</strong> — video and image story pins benefit from pre-compressed assets for smoother playback.</li>
            <li><strong>Affiliate and product pins</strong> — crisp, fast-loading product images increase click-through rates to your website.</li>
          </ul>
        </section>

        {/* TIPS */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Tips for Getting the Best Pinterest Image Compression</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',gap:'14px'}}>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>Use 2:3 aspect ratio</div><div style={{fontSize:'15px',lineHeight:1.6,opacity:0.8}}>Pinterest displays 1000x1500px or 1080x1620px pins best. Portrait pins get more feed real estate than square ones.</div></div>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>Target 200-500KB</div><div style={{fontSize:'15px',lineHeight:1.6,opacity:0.8}}>Under 200KB may look soft after Pinterest re-compression. Over 1MB slows your board loading.</div></div>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>JPEG for photos, PNG for graphics</div><div style={{fontSize:'15px',lineHeight:1.6,opacity:0.8}}>Use JPEG at 85% for photos. Use PNG for pins with text or logos to avoid compression artifacts.</div></div>
            <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}><div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>Pre-compress before bulk upload</div><div style={{fontSize:'15px',lineHeight:1.6,opacity:0.8}}>Compress all pins as a batch ZIP before uploading to Pinterest to save time.</div></div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>CompressTo20KB vs Competitors — Pinterest Image Compression</h2>
          <div style={{overflowX:'auto' as const}}>
            <table style={{width:'100%',borderCollapse:'collapse' as const,fontSize:'15px'}}>
              <thead><tr style={{borderBottom:'1px solid rgba(255,255,255,0.12)'}}>
                <th style={{textAlign:'left' as const,padding:'10px 12px',color:'rgba(255,255,255,0.9)',fontWeight:600}}>Feature</th>
                <th style={{padding:'10px 12px',color:'#818cf8',fontWeight:800}}>This Tool</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>TinyPNG</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>Squoosh</th>
              </tr></thead>
              <tbody>
                <tr style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}><td style={{padding:'9px 12px',color:'rgba(255,255,255,0.75)'}}>Exact KB target (200KB, 500KB)</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'#4ade80',fontWeight:700}}>Yes — binary search</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>No — % only</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>No — manual</td></tr>
                <tr style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}><td style={{padding:'9px 12px',color:'rgba(255,255,255,0.75)'}}>No file upload</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'#4ade80',fontWeight:700}}>Yes — browser only</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>No — server upload</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>Yes — browser only</td></tr>
                <tr style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}><td style={{padding:'9px 12px',color:'rgba(255,255,255,0.75)'}}>Batch compress 50 images</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'#4ade80',fontWeight:700}}>Yes</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>No</td><td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>No</td></tr>
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
            <a href="/" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap' as const}}>Home — Image Compressor →</a>
            <a href="/compress-to-200kb" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap' as const}}>Compress to 200KB →</a>
            <a href="/compress-to-500kb" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap' as const}}>Compress to 500KB →</a>
            <a href="/compress-for-instagram" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap' as const}}>For Instagram →</a>
            <a href="/compress-for-email" style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap' as const}}>For Email →</a>
          </div>
        </section>
      </div>
    </>
  );
}
