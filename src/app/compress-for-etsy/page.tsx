
const _howToSchema = {"@context":"https://schema.org","@type":"HowTo","name":"How to Compress Images for Etsy Listings (Free)","totalTime":"PT60S","step":[{"@type":"HowToStep","position":1,"name":"Upload Listing Photos","text":"Drag and drop up to 50 product photos. Supports JPG, PNG, WebP, HEIC."},{"@type":"HowToStep","position":2,"name":"Select Etsy Preset","text":"Sets JPEG, 85% quality, 2000px automatically."},{"@type":"HowToStep","position":3,"name":"Compress and Download","text":"Click Compress All, download ZIP, re-upload to your Etsy shop listings."}]};
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress images for Etsy listings?","acceptedAnswer":{"@type":"Answer","text":"Upload your listing photos, select JPEG format at 85% quality, and click Compress. Download the optimized files and upload them to your Etsy shop. No app needed — all processing runs in your browser, nothing is uploaded to any server."}},{"@type":"Question","name":"What image size does Etsy recommend?","acceptedAnswer":{"@type":"Answer","text":"Etsy recommends listing images at least 2000px on the shortest side, under 1MB file size, in JPEG format. Square images (2000x2000px) work best for the main listing photo as they display consistently across all devices."}},{"@type":"Question","name":"What is the best format for Etsy listing photos?","acceptedAnswer":{"@type":"Answer","text":"JPEG is the recommended format for Etsy. Aim for 85% quality at 2000px — this typically produces files between 200KB and 600KB, well under Etsy's 1MB limit while retaining excellent detail for buyer zoom."}},{"@type":"Question","name":"Will compressing photos affect my Etsy shop?","acceptedAnswer":{"@type":"Answer","text":"No. This tool compresses images on your local device. You manually re-upload the optimized photos to your Etsy listings. Nothing connects to your Etsy shop automatically."}},{"@type":"Question","name":"Can I compress multiple Etsy listing photos at once?","acceptedAnswer":{"@type":"Answer","text":"Yes — upload up to 50 images at once and compress them all in one batch. Download individually or as a ZIP. All processing stays in your browser — free, no signup required."}}]};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Image Compressor for Etsy — Compress Product Photos Instantly',
  description: 'Compress Etsy listing images to under 1MB free. No upload, no signup. Browser-based tool that keeps your photos private and your shop fast.',
  alternates: { canonical: 'https://compressto20kb.com/compress-for-etsy' },
  openGraph: { url: 'https://compressto20kb.com/compress-for-etsy' },
};

export default function EtsyPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f2a1e 100%)',fontFamily:'Inter,sans-serif',color:'white'}}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Free Image Compressor for Etsy","item":"https://compressto20kb.com/compress-for-etsy"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_howToSchema) }} />
      <header style={{padding:'12px 20px',borderBottom:'1px solid rgba(255,255,255,0.07)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link href="/" style={{display:'flex',alignItems:'center',gap:'8px',textDecoration:'none',color:'white'}}>
          <span style={{fontSize:'22px'}}>🗜️</span>
          <div style={{fontWeight:800,fontSize:'17px'}}>Compress<span style={{color:'#818cf8'}}>To20KB</span></div>
        </Link>
        <Link href="/" style={{color:'rgba(255,255,255,0.9)',textDecoration:'none',fontSize:'15px'}}>← Back to Tool</Link>
      </header>
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'32px 20px'}}>
        <div style={{display:'inline-block',background:'rgba(16,185,129,0.15)',border:'1px solid rgba(16,185,129,0.3)',borderRadius:'20px',padding:'4px 14px',fontSize:'12px',fontWeight:600,color:'#34d399',marginBottom:'14px'}}>🛒 Etsy Optimization</div>
        <h1 style={{fontSize:'32px',fontWeight:800,marginBottom:'12px',letterSpacing:'-0.5px'}}>
          Free Image Compressor for <span style={{color:'#818cf8'}}>Etsy</span>
        </h1>
        <p style={{fontSize:'15px',lineHeight:'1.7',opacity:0.65,marginBottom:'24px'}}>
          Compress Etsy listing photos to WebP under 1MB — free, instant, no signup. Processed locally in your browser, never uploaded to any server.
        </p>
        <div style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.3)',borderRadius:'14px',padding:'20px',marginBottom:'28px',textAlign:'center'}}>
          <div style={{fontSize:'15px',fontWeight:700,marginBottom:'8px',color:'#a5b4fc'}}>🛒 Etsy Preset — Ready to Use</div>
          <p style={{fontSize:'15px',opacity:0.6,marginBottom:'14px'}}>Optimized for Etsy: WebP, 85% quality, 2000px max width</p>
          <Link href="/?preset=etsy" style={{display:'inline-block',padding:'12px 28px',borderRadius:'10px',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',fontWeight:800,fontSize:'15px',textDecoration:'none'}}>
            ⚡ Open Etsy Compressor →
          </Link>
        </div>
        <div style={{background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.3)',borderRadius:'12px',padding:'16px 20px',marginBottom:'24px'}}>
          <div style={{fontWeight:700,fontSize:'14px',color:'#f87171',marginBottom:'8px'}}>Warning about Etsy listing photo quality</div>
          <p style={{fontSize:'15px',opacity:0.7,lineHeight:'1.6',margin:0}}>Etsy's search algorithm <strong style={{color:'#fca5a5'}}>penalizes listings with low-quality or slow-loading images</strong>. Unoptimized photos above 1MB hurt your shop ranking. Our preset keeps files sharp and fast.</p>
        </div>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'14px'}}>Etsy Image Requirements 2025</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'10px',marginBottom:'28px'}}>
          {[['📐','Recommended size','2000 × 2000 px minimum'],['📦','File size','Under 1MB for fast loading'],['🖼️','Best format','WebP or JPEG'],['⚡','Listing quality','Sharp images = more sales'],].map(([icon,title,desc])=>(
            <div key={title} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'14px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <div style={{fontSize:'20px',marginBottom:'6px'}}>{icon}</div>
              <div style={{fontWeight:700,fontSize:'15px',marginBottom:'3px'}}>{title}</div>
              <div style={{fontSize:'12px',opacity:0.5}}>{desc}</div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'14px'}}>CompressTo20KB vs Other Tools for Etsy</h2>
        <div style={{overflowX:'auto',marginBottom:'28px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'15px'}}>
            <thead><tr style={{background:'rgba(129,140,248,0.15)'}}>
              {['Feature','CompressTo20KB','TinyPNG','Canva'].map(h=>(
                <th key={h} style={{padding:'10px 14px',textAlign:'left',fontWeight:700,borderBottom:'1px solid rgba(255,255,255,0.1)'}}>{h}</th>
              ))}</tr></thead>
            <tbody>{[
                ['Price','Free','Free tier limited','Free tier limited'],
                ['Etsy preset','Yes — JPEG 2000px','No preset','No preset'],
                ['Privacy','100% local','Uploads to server','Uploads to server'],
                ['Bulk compress','Up to 50 files','Up to 20 (free)','One at a time'],
                ['No signup','Yes','No','No — account required'],
                ['JPEG output','Yes','Yes','Yes'],
              ].map((row,i)=>(
                <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.05)',background:i%2===0?'transparent':'rgba(255,255,255,0.02)'}}>
                  {row.map((cell,j)=>(<td key={j} style={{padding:'10px 14px',opacity:j===0?0.6:1}}>{cell}</td>))}
                </tr>
              ))}</tbody>
          </table>
        </div>
        <section style={{marginBottom:'28px'}}>
          <h2 style={{fontSize:'22px',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>When Do You Need to Compress Etsy Listing Photos?</h2>
          <p style={{fontSize:'15px',lineHeight:1.7,marginBottom:'10px',opacity:0.9}}>Large listing images slow your Etsy shop page and hurt search visibility. Compressing before upload keeps your shop fast and competitive.</p>
          <ul style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li><strong>New listings</strong> — compress all photos before your first upload for fast loading from day one.</li>
            <li><strong>Slow shop page</strong> — images over 1MB are the main cause of sluggish Etsy shop load times.</li>
            <li><strong>Seasonal catalog updates</strong> — compress a full batch of new product photos and upload them all at once.</li>
            <li><strong>Mobile buyers</strong> — over 60% of Etsy traffic is mobile; large images cause abandonment on slow connections.</li>
            <li><strong>Relisting or refreshing products</strong> — re-optimize older photos when updating stale listings.</li>
          </ul>
        </section>
        <section style={{marginBottom:'28px'}}>
          <h2 style={{fontSize:'22px',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Tips for Etsy Listing Image Optimization</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',gap:'14px'}}>
            {[
              ['Square images perform best','Etsy displays listing photos as squares in search results. Use 2000x2000px to avoid cropping and show your full product.'],
              ['JPEG for photos, PNG for graphics','Use JPEG at 85% quality for product photos. Use PNG only for designs with text or transparent backgrounds.'],
              ['2000px minimum','Etsy recommends at least 2000px on the shortest side. This enables high-quality zoom for buyers and improves perceived value.'],
              ['Compress all 10 listing slots','Each Etsy listing allows 10 photos. Compress all 10 before uploading — consistent file sizes keep your shop loading fast.'],
            ].map(([t,d])=>(
              <div key={t} style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}>
                <div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>{t}</div>
                <div style={{fontSize:'15px',lineHeight:1.6,opacity:0.8}}>{d}</div>
              </div>
            ))}
          </div>
        </section>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'14px'}}>FAQ — Etsy Image Compression</h2>
        {[
          ['What image size is best for Etsy listings?','Etsy recommends at least 2000px on the shortest side. WebP format loads fastest and keeps quality high.'],
          ['Will compressing reduce image quality?','No — our tool uses smart compression that removes invisible data. Your photos look the same but load faster.'],
          ['Is my shop data safe?','100% safe. Nothing connects to your Etsy shop. You compress locally and re-upload manually.'],
          ['How many photos can I compress at once?','Up to 10 images simultaneously, completely free.'],
          ['Do I need to create an account?','No account, no signup, no email required. Just open and compress.'],
        ].map(([q,a])=>(
          <details key={q} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',marginBottom:'8px',border:'1px solid rgba(255,255,255,0.07)',padding:'14px 16px'}}>
            <summary style={{fontWeight:600,fontSize:'14px',cursor:'pointer',listStyle:'none'}}>▶ {q}</summary>
            <p style={{fontSize:'15px',opacity:0.6,marginTop:'10px',lineHeight:'1.7'}}>{a}</p>
          </details>
        ))}
        <div style={{display:'flex',gap:'10px',flexWrap:'wrap',marginTop:'24px'}}>
          {[['/compress-for-shopify','Compress for Shopify'],['/compress-for-amazon','Compress for Amazon'],['/compress-without-uploading','No Upload Compressor']].map(([href,label])=>(
            <Link key={href} href={href} style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.1)',border:'1px solid rgba(129,140,248,0.25)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none'}}>{label} →</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
