
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress images for Shopify?","acceptedAnswer":{"@type":"Answer","text":"Upload your product images, select the Shopify preset (WebP, 82% quality, 2048px), and click Compress. Download the optimized files and re-upload them to your Shopify product listings. No app installation needed — everything runs in your browser."}},{"@type":"Question","name":"What image format should I use for Shopify?","acceptedAnswer":{"@type":"Answer","text":"WebP is the best format for Shopify in 2026. It loads 70% faster than JPEG at the same visual quality. Shopify supports WebP on all modern browsers. Use JPEG as a fallback only for compatibility with very old systems."}},{"@type":"Question","name":"What is the recommended image size for Shopify product photos?","acceptedAnswer":{"@type":"Answer","text":"Shopify recommends a maximum of 2048 x 2048 pixels and under 1MB file size for product images. WebP format at 82% quality typically achieves under 300-500KB at 2048px — ideal for fast loading without sacrificing quality."}},{"@type":"Question","name":"Will compressing images affect my live Shopify store?","acceptedAnswer":{"@type":"Answer","text":"No. This tool only compresses images on your local device. You manually re-upload the optimized images to your Shopify admin. Nothing touches your store automatically — unlike Shopify apps that modify your store directly."}},{"@type":"Question","name":"How many Shopify images can I compress at once?","acceptedAnswer":{"@type":"Answer","text":"Up to 50 images simultaneously. All processed locally in your browser — no server upload, no risk to your store, no monthly subscription required."}}]};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shopify Image Compressor 2026 — Free, No App Install, WebP, Bulk 50',
  description: 'Compress Shopify product photos to WebP under 500KB free — no app, no monthly fee. Bulk 50 images at once. Files never leave your browser. Faster stores, better rankings.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-shopify' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-shopify' },
};

export default function ShopifyPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f2a1e 100%)',fontFamily:'Inter,sans-serif',color:'white'}}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"How to Compress Images for Shopify (Free, No App)","description":"Compress Shopify product images to WebP under 1MB without installing any app.","totalTime":"PT60S","step":[{"@type":"HowToStep","position":1,"name":"Upload Your Product Images","text":"Drag and drop up to 50 product images. Supports JPG, PNG, WebP, HEIC."},{"@type":"HowToStep","position":2,"name":"Select Shopify Preset","text":"Click the Shopify preset — it sets WebP format, 82% quality, and 2048px max dimension automatically."},{"@type":"HowToStep","position":3,"name":"Compress and Download","text":"Click Compress All. Download as ZIP and re-upload to your Shopify product listings."}]}) }} />

      <div style={{maxWidth:'860px',margin:'0 auto',padding:'32px 20px'}}>
        <div style={{display:'inline-block',background:'rgba(16,185,129,0.15)',border:'1px solid rgba(16,185,129,0.3)',borderRadius:'20px',padding:'4px 14px',fontSize:'12px',fontWeight:600,color:'#34d399',marginBottom:'14px'}}>🛍️ Shopify Optimization</div>
        <h1 style={{fontSize:'32px',fontWeight:800,marginBottom:'12px',letterSpacing:'-0.5px'}}>
          Free Online Image Compressor for <span style={{color:'#818cf8'}}>Shopify</span> — No App Needed
        </h1>
        <p style={{fontSize:'15px',lineHeight:'1.7',opacity:0.65,marginBottom:'24px'}}>
          Compress Shopify product images to WebP format under 1MB — free, instant, no app needed. Your images are processed locally and never uploaded to any server.
        </p>

        {/* WARNING BOX */}
        <div style={{background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.3)',borderRadius:'12px',padding:'16px 20px',marginBottom:'24px'}}>
          <div style={{fontWeight:700,fontSize:'14px',color:'#f87171',marginBottom:'8px'}}>⚠️ Warning about Shopify image optimizer apps</div>
          <p style={{fontSize:'15px',opacity:0.7,lineHeight:'1.6',margin:0}}>
            Paid apps like App Compressor ($9.99/month) have been reported to accidentally <strong style={{color:'#fca5a5'}}>permanently delete product photos</strong> from stores. Our browser-based tool has zero risk — nothing touches your Shopify store directly.
          </p>
        </div>

        {/* TOOL LINK */}
        <div style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.3)',borderRadius:'14px',padding:'20px',marginBottom:'28px',textAlign:'center'}}>
          <div style={{fontSize:'15px',fontWeight:700,marginBottom:'8px',color:'#a5b4fc'}}>🛍️ Shopify Preset — Ready to Use</div>
          <p style={{fontSize:'15px',opacity:0.6,marginBottom:'14px'}}>Opens with Shopify preset: WebP, 82% quality, optimized for 2048px product images</p>
          <Link href="/?preset=shopify" style={{display:'inline-block',padding:'12px 28px',borderRadius:'10px',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',fontWeight:800,fontSize:'15px',textDecoration:'none'}}>
            ⚡ Open Shopify Compressor →
          </Link>
        </div>

        {/* SPECS */}
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'14px'}}>Shopify Image Requirements 2026</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'10px',marginBottom:'28px'}}>
          {[
            ['📐','Max dimensions','2048 × 2048 px (recommended)'],
            ['📦','File size','Under 1MB for fast loading'],
            ['🖼️','Best format','WebP (70% smaller than JPEG)'],
            ['⚡','Page speed','Images affect Google ranking'],
          ].map(([icon,title,desc])=>(
            <div key={title} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'14px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <div style={{fontSize:'20px',marginBottom:'6px'}}>{icon}</div>
              <div style={{fontWeight:700,fontSize:'15px',marginBottom:'3px'}}>{title}</div>
              <div style={{fontSize:'12px',opacity:0.5}}>{desc}</div>
            </div>
          ))}
        </div>

        {/* VS TABLE */}
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'14px'}}>CompressTo20KB vs Shopify Apps</h2>
        <div style={{overflowX:'auto',marginBottom:'28px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'15px'}}>
            <thead>
              <tr style={{background:'rgba(129,140,248,0.15)'}}>
                {['Feature','CompressTo20KB','App Compressor','Size Optimizer'].map(h=>(
                  <th key={h} style={{padding:'10px 14px',textAlign:'left',fontWeight:700,borderBottom:'1px solid rgba(255,255,255,0.1)'}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Price','🆓 Free','$9.99/month','$9.99/month'],
                ['Risk to store','✅ Zero','❌ Can delete photos','⚠️ Modifies originals'],
                ['Privacy','✅ 100% local','❌ Uploads to server','❌ Uploads to server'],
                ['WebP support','✅ Yes','✅ Yes','✅ Yes'],
                ['Batch compress','✅ 10 files free','✅ Unlimited (paid)','✅ Unlimited (paid)'],
                ['No signup','✅ Yes','❌ Account required','❌ Account required'],
                ['vs TinyPNG / Squoosh','✅ No upload needed','❌ Server upload','✅ Browser only'],
              ].map((row,i)=>(
                <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.05)',background: i%2===0 ? 'transparent' : 'rgba(255,255,255,0.02)'}}>
                  {row.map((cell,j)=>(
                    <td key={j} style={{padding:'10px 14px',opacity: j===0 ? 0.6 : 1}}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'14px'}}>FAQ — Shopify Image Compression</h2>
        {[
          ['Will this affect my live Shopify store?','No — our tool only compresses images on your computer. You manually re-upload the optimized images to Shopify. Nothing touches your store automatically.'],
          ['What format should Shopify images be in?','WebP is best for Shopify in 2026 — it loads 70% faster than JPEG with the same visual quality. Shopify supports WebP on all modern browsers.'],
          ['How many images can I compress at once?','Up to 50 images simultaneously for free. All processed locally in your browser — no server upload, no signup required.'],
        ].map(([q,a])=>(
          <details key={q} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',marginBottom:'8px',border:'1px solid rgba(255,255,255,0.07)',padding:'14px 16px'}}>
            <summary style={{fontWeight:600,fontSize:'14px',cursor:'pointer',listStyle:'none'}}>▶ {q}</summary>
            <p style={{fontSize:'15px',opacity:0.6,marginTop:'10px',lineHeight:'1.7'}}>{a}</p>
          </details>
        ))}

        <h2 style={{fontSize:'18px',fontWeight:700,color:'#a5b4fc',marginBottom:'14px',marginTop:'24px'}}>Related Tools</h2>
        <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
          {[['/compress-to-20kb','Compress to 20KB'],['/compress-for-etsy','Compress for Etsy'],['/compress-without-uploading','No Upload Compressor']].map(([href,label])=>(
            <Link key={href} href={href} style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.1)',border:'1px solid rgba(129,140,248,0.25)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none'}}>{label} →</Link>
          ))}
        </div>
      </div>

        {/* WHEN DO YOU NEED */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'32px 20px 20px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>When Do You Need to Compress Shopify Images?</h2>
          <p style={{fontSize:'15px',lineHeight:1.7,marginBottom:'10px',opacity:0.9}}>Unoptimized product images are the number one cause of slow Shopify stores. Google PageSpeed and Core Web Vitals directly penalize stores with large images.</p>
          <ul style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li><strong>New product listings</strong> — compress photos before uploading to keep your store fast from day one.</li>
            <li><strong>Slow PageSpeed score</strong> — images over 1MB are flagged by Google Lighthouse as render-blocking resources.</li>
            <li><strong>Mobile shoppers</strong> — over 70% of Shopify traffic is mobile; large images cause abandonment on slow connections.</li>
            <li><strong>Bulk catalog updates</strong> — compress 50 product images at once and re-upload as a batch to save hours.</li>
            <li><strong>Migrating from another platform</strong> — re-optimize all images when switching to Shopify for best performance.</li>
          </ul>
        </section>

        {/* TIPS */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(19px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Tips for Shopify Image Optimization</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',gap:'14px'}}>
            {[
              ['Use WebP format','WebP produces 70% smaller files than JPEG at the same visual quality. Shopify supports WebP on all modern browsers.'],
              ['Keep under 1MB per image','Shopify recommends under 1MB. The Shopify preset (82% quality, 2048px WebP) typically hits 200-500KB for most product photos.'],
              ['2048px max dimension','Shopify displays product images at max 2048px. Uploading larger files wastes storage and slows loading with no visual benefit.'],
              ['Batch compress before upload','Upload all product images at once, compress as ZIP, then batch-import to Shopify via the product CSV importer.'],
            ].map(([t,d]) => (
              <div key={t} style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}>
                <div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>{t}</div>
                <div style={{fontSize:'15px',lineHeight:1.6,opacity:0.8}}>{d}</div>
              </div>
            ))}
          </div>
        </section>
    <div style={{textAlign:"center",padding:"16px 0"}}><a href="/blog/compress-images-for-shopify-store" style={{color:"#818cf8",fontSize:"14px",textDecoration:"none"}}>📖 Full Guide: Compress Images for Shopify →</a></div>
    </div>
  );
}
