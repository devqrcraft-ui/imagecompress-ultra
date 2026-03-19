"use client";
import Link from 'next/link';

const useCases = [
  { icon:'🛍️', title:'Ecommerce Product Photos', desc:'Shopify recommends WebP images under 500KB. At 200KB, product photos load fast while remaining sharp enough for zoom features.' },
  { icon:'✍️', title:'Blog & CMS Images', desc:'WordPress, Squarespace, and Ghost automatically serve images to readers. Keeping uploads under 200KB improves PageSpeed scores significantly.' },
  { icon:'📨', title:'Email Newsletters', desc:'Most email clients and marketing platforms recommend keeping inline images under 200KB. Faster rendering means lower unsubscribe rates.' },
  { icon:'📋', title:'Government & Visa Portals', desc:'Several visa and immigration portals set a 200KB cap for document photos. Examples include scanned certificates, supporting documents, and ID copies.' },
];

const steps = [
  { n:'1', t:'Upload your image', d:'Click upload or drag your file. Accepts JPEG, PNG, WebP, AVIF, and HEIC (iPhone photos). Up to 50 files at once.' },
  { n:'2', t:'Switch to Exact KB Mode', d:'Toggle the mode selector from Quality to Exact KB. Type 200 in the target size field.' },
  { n:'3', t:'Select your output format', d:'Choose WebP for best quality at 200KB, JPEG for maximum compatibility, or AVIF for the smallest possible file.' },
  { n:'4', t:'Compress and download', d:'Click Compress. Your browser processes the image instantly — no server upload. Download the 200KB file directly to your device.' },
];

const tips = [
  { title:'Use WebP — it looks visibly better at 200KB', desc:'At 200KB, the quality difference between WebP and JPEG becomes clearly visible. WebP retains edge sharpness and color accuracy that JPEG loses to compression artifacts.' },
  { title:'Match dimensions to actual display size', desc:'A 5000×4000px image shrunk to 200KB will always look worse than a 1400×1000px image at 200KB. Resize to your target display dimensions before compressing.' },
  { title:'200KB vs 100KB — when does it matter?', desc:'Choose 200KB over 100KB when your image contains fine text, detailed product features, fabric textures, or any content where sharpness directly affects purchasing decisions.' },
  { title:'Avoid re-compressing existing JPEGs', desc:'Every time a JPEG is re-saved, quality degrades further. Always compress from the original high-resolution file to get the cleanest possible result at 200KB.' },
];

const faqItems = [
  { q:'How do I compress an image to exactly 200KB?', a:'Switch to Exact KB Mode, type 200, choose WebP or JPEG, and click Compress. The tool finds the maximum quality that fits 200KB using binary search — within 1KB accuracy.' },
  { q:'Does compressing to 200KB reduce visible quality?', a:'200KB retains much more detail than 20KB or 100KB. For most product and blog photos at typical web sizes (800–1200px wide), a 200KB WebP looks nearly identical to the original.' },
  { q:'Is WebP or JPEG better for 200KB images?', a:'WebP is clearly better at 200KB. It retains more sharpness and color accuracy with fewer visible artifacts. Use JPEG only if you need broad compatibility with very old systems.' },
  { q:'Can I compress multiple images to 200KB at once?', a:'Yes — upload up to 50 images, set Exact KB Mode to 200, and compress all at once. Download individually or as a ZIP file. All processing stays in your browser.' },
  { q:'How to compress an image to 200KB on mobile?', a:'Open compressto20kb.com in Safari (iPhone) or Chrome (Android). Tap upload, select your photo, type 200 in Exact KB Mode, tap Compress. Saves directly to your device.' },
  { q:'What is 200KB good for?', a:'200KB is the sweet spot for ecommerce product photos, blog hero images, and email newsletters. It gives noticeably better quality than 100KB while still loading fast on mobile.' },
];

export default function ClientPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>

      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}>
          <Link href="/" style={{color:'#a5b4fc',textDecoration:'none'}}>Home</Link> → Compress to 200KB
        </div>

        <h1 style={{fontSize:'clamp(26px,4vw,38px)',fontWeight:900,lineHeight:1.2,marginBottom:'12px'}}>
          Compress Image to <span style={{color:'#818cf8'}}>200KB</span> Free Online — No Upload, 100% Private
        </h1>
        <p style={{fontSize:'15px',lineHeight:1.7,opacity:0.7,marginBottom:'32px'}}>
          Compress JPG, PNG, WebP, AVIF, HEIC to exactly 200KB directly in your browser — no upload, no tracking, no watermark.
        </p>

        <div style={{background:'rgba(129,140,248,0.12)',border:'1px solid rgba(129,140,248,0.35)',borderRadius:'14px',padding:'24px',marginBottom:'40px',textAlign:'center' as const}}>
          <div style={{fontSize:'15px',fontWeight:700,marginBottom:'8px'}}>🎯 Compress to Exactly 200KB — Free</div>
          <p style={{fontSize:'13px',opacity:0.65,marginBottom:'16px'}}>No upload · Instant · JPEG, PNG, WebP, HEIC · Bulk up to 50 images</p>
          <Link href="/?mode=exactkb&target=200" style={{display:'inline-block',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',padding:'12px 28px',borderRadius:'100px',fontWeight:800,fontSize:'14px',textDecoration:'none'}}>
            ⚡ Open 200KB Compressor
          </Link>
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'12px'}}>When Do You Need Exactly 200KB?</h2>
        <p style={{fontSize:'14px',lineHeight:1.7,opacity:0.7,marginBottom:'16px'}}>200KB sits in the sweet spot for web images: large enough to retain sharp detail, small enough to load quickly on mobile connections. It is the go-to target for ecommerce product photos, blog hero images, and email newsletters where quality matters but speed cannot be sacrificed.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'12px',marginBottom:'40px'}}>
          {useCases.map((u,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px'}}>
              <div style={{fontSize:'24px',marginBottom:'8px'}}>{u.icon}</div>
              <div style={{fontWeight:700,fontSize:'13px',marginBottom:'4px'}}>{u.title}</div>
              <div style={{fontSize:'12px',opacity:0.6,lineHeight:1.5}}>{u.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>How to Compress an Image to 200KB — 4 Steps</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {steps.map(s=>(
            <div key={s.n} style={{display:'flex',gap:'16px',background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px 20px'}}>
              <div style={{flexShrink:0,width:'36px',height:'36px',borderRadius:'50%',background:'#6366f1',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:'16px'}}>{s.n}</div>
              <div>
                <div style={{fontWeight:700,fontSize:'14px',marginBottom:'4px'}}>{s.t}</div>
                <div style={{fontSize:'13px',opacity:0.65,lineHeight:1.6}}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>Best Practices for 200KB Images</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {tips.map((tip,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.05)',borderRadius:'10px',padding:'16px 20px',borderLeft:'3px solid #818cf8'}}>
              <div style={{fontWeight:700,fontSize:'14px',marginBottom:'4px'}}>✓ {tip.title}</div>
              <div style={{fontSize:'13px',opacity:0.65,lineHeight:1.6}}>{tip.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>200KB vs 100KB vs 500KB — Which Should You Use?</h2>
        <div style={{overflowX:'auto',marginBottom:'40px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
            <thead>
              <tr style={{borderBottom:'1px solid rgba(255,255,255,0.12)'}}>
                <th style={{textAlign:'left',padding:'10px 12px',color:'rgba(255,255,255,0.5)',fontWeight:600}}>Target Size</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.5)',fontWeight:600}}>Best For</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.5)',fontWeight:600}}>Quality</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.5)',fontWeight:600}}>Load Speed</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['20KB','Government forms, passport photos','Low','⚡⚡⚡ Fastest'],
                ['100KB','Thumbnails, email, job portals','Good','⚡⚡⚡ Very fast'],
                ['200KB ← this page','Ecommerce, blogs, newsletters','Very good','⚡⚡ Fast'],
                ['500KB','Hero images, print-quality web','Excellent','⚡ Moderate'],
              ].map(([size,use,quality,speed],i)=>(
                <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.06)',background:i===2?'rgba(99,102,241,0.1)':i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                  <td style={{padding:'10px 12px',fontWeight:700,color:i===2?'#818cf8':'rgba(255,255,255,0.8)'}}>{size}</td>
                  <td style={{padding:'10px 12px',color:'rgba(255,255,255,0.6)',fontSize:'12px'}}>{use}</td>
                  <td style={{padding:'10px 12px',color:'rgba(255,255,255,0.8)',textAlign:'center' as const}}>{quality}</td>
                  <td style={{padding:'10px 12px',color:'rgba(255,255,255,0.8)',textAlign:'center' as const,fontSize:'12px'}}>{speed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>Frequently Asked Questions</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {faqItems.map((item,i)=>(
            <details key={i} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'16px 20px',cursor:'pointer'}}>
              <summary style={{fontWeight:700,fontSize:'14px',color:'#a5b4fc',listStyle:'none'}}>❓ {item.q}</summary>
              <div style={{fontSize:'13px',opacity:0.7,marginTop:'10px',lineHeight:1.6}}>{item.a}</div>
            </details>
          ))}
        </div>


        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>CompressTo20KB vs Competitors — 200KB Compression</h2>
        <div style={{overflowX:'auto' as const,marginBottom:'32px'}}>
          <table style={{width:'100%',borderCollapse:'collapse' as const,fontSize:'13px'}}>
            <thead><tr style={{borderBottom:'1px solid rgba(255,255,255,0.12)'}}>
              <th style={{textAlign:'left' as const,padding:'10px 12px',color:'rgba(255,255,255,0.5)',fontWeight:600}}>Feature</th>
              <th style={{padding:'10px 12px',color:'#818cf8',fontWeight:800}}>This Tool</th>
              <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>TinyPNG</th>
              <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>Squoosh</th>
            </tr></thead>
            <tbody>
              {[
                ['Exact 200KB target','Yes — binary search','No — % only','No — manual'],
                ['No file upload','Yes — browser only','No — server upload','Yes — browser only'],
                ['Batch compress 50 images','Yes','No','No'],
                ['HEIC / iPhone support','Yes','No','Partial'],
                ['Free, no signup','Yes','Limited free','Yes'],
              ].map(([feat,a,b,c])=>(
                <tr key={feat} style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}>
                  <td style={{padding:'9px 12px',color:'rgba(255,255,255,0.75)'}}>{feat}</td>
                  <td style={{padding:'9px 12px',textAlign:'center' as const,color:'#4ade80',fontWeight:700}}>{a}</td>
                  <td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>{b}</td>
                  <td style={{padding:'9px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.4)'}}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{fontSize:'18px',fontWeight:700,marginBottom:'12px'}}>Related Tools</h2>
        <div style={{display:'flex',flexWrap:'wrap' as const,gap:'10px',marginBottom:'40px'}}>
          {[
            {href:'/',label:'🏠 Home — Image Compressor'},
            {href:'/compress-to-20kb',label:'📄 Compress to 20KB'},
            {href:'/compress-to-50kb',label:'📋 Compress to 50KB'},
            {href:'/compress-to-100kb',label:'📁 Compress to 100KB'},
            {href:'/compress-to-500kb',label:'📦 Compress to 500KB'},
            {href:'/compress-for-shopify',label:'🛍️ For Shopify'},
            {href:'/compress-for-email',label:'📧 For Email'},
          ].map(({href,label})=>(
            <Link key={href} href={href} style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'8px',padding:'8px 14px',color:'white',textDecoration:'none',fontSize:'13px',fontWeight:600}}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}