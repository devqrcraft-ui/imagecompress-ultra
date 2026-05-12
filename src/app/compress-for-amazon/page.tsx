
const _howToSchema = {"@context":"https://schema.org","@type":"HowTo","name":"How to Compress Images for Amazon Product Listings (Free)","totalTime":"PT60S","step":[{"@type":"HowToStep","position":1,"name":"Upload Photos","text":"Drag and drop up to 50 product images."},{"@type":"HowToStep","position":2,"name":"Select Amazon Preset","text":"Sets JPEG, 90% quality, 2000px automatically."},{"@type":"HowToStep","position":3,"name":"Compress and Download","text":"Click Compress All, download ZIP, re-upload to Seller Central."}]};
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress images for Amazon product listings?","acceptedAnswer":{"@type":"Answer","text":"Upload your product photos, select JPEG format at 88% quality, and click Compress. Download the optimized files and upload them to your Amazon Seller Central listings. All processing runs in your browser — nothing is uploaded to any server."}},{"@type":"Question","name":"What are Amazon's image requirements for product listings?","acceptedAnswer":{"@type":"Answer","text":"Amazon requires product images in JPEG format with a pure white background (RGB 255,255,255), minimum 1000px on the longest side (2000px recommended for zoom), under 10MB file size. The main image must show only the product — no text, logos, or props."}},{"@type":"Question","name":"What file size should Amazon product photos be?","acceptedAnswer":{"@type":"Answer","text":"Amazon allows up to 10MB per image, but for fast loading on mobile and desktop, aim for 500KB to 1MB at 2000px. WebP is not supported by Amazon — always use JPEG for listing images."}},{"@type":"Question","name":"Does compressing photos affect Amazon listing quality?","acceptedAnswer":{"@type":"Answer","text":"At 85-88% JPEG quality and 2000px dimensions, compressed product photos retain all the detail needed for Amazon's zoom feature. Buyers cannot tell the difference between an 8MB original and a well-compressed 500KB version."}},{"@type":"Question","name":"Can I batch compress multiple Amazon product photos at once?","acceptedAnswer":{"@type":"Answer","text":"Yes — upload up to 50 images at once and compress them all in one batch. Download individually or as a ZIP. All processing stays in your browser — free, no signup, no monthly subscription."}}]};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Amazon Product Image Compressor 2026 — Free, Under 10MB, No App',
  description: 'Compress Amazon listing images free — under 10MB, 1000px minimum, JPEG. No upload, no app. Meets Amazon image requirements instantly. Bulk up to 50 images.',
  alternates: { canonical: 'https://compressto20kb.com/compress-for-amazon' },
  openGraph: { url: 'https://compressto20kb.com/compress-for-amazon' },
};

export default function AmazonPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f2a1e 100%)',fontFamily:'Inter,sans-serif',color:'white'}}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Amazon Product Image Compressor 2026","item":"https://compressto20kb.com/compress-for-amazon"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_howToSchema) }} />
      <header style={{padding:'12px 20px',borderBottom:'1px solid rgba(255,255,255,0.07)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link href="/" style={{display:'flex',alignItems:'center',gap:'8px',textDecoration:'none',color:'white'}}>
          <span style={{fontSize:'22px'}}>🗜️</span>
          <div style={{fontWeight:800,fontSize:'17px'}}>Compress<span style={{color:'#818cf8'}}>To20KB</span></div>
        </Link>
        <Link href="/" style={{color:'rgba(255,255,255,0.9)',textDecoration:'none',fontSize:'15px'}}>← Back to Tool</Link>
      </header>
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'32px 20px'}}>
        <div style={{display:'inline-block',background:'rgba(16,185,129,0.15)',border:'1px solid rgba(16,185,129,0.3)',borderRadius:'20px',padding:'4px 14px',fontSize:'12px',fontWeight:600,color:'#34d399',marginBottom:'14px'}}>📦 Amazon Optimization</div>
        <h1 style={{fontSize:'32px',fontWeight:800,marginBottom:'12px',letterSpacing:'-0.5px'}}>
          Free Image Compressor for <span style={{color:'#818cf8'}}>Amazon</span>
        </h1>
        <p style={{fontSize:'15px',lineHeight:'1.7',opacity:0.65,marginBottom:'24px'}}>
          Resize and compress Amazon product listing images to meet requirements — free, instant, no signup. Pure white background photos optimized in seconds.
        </p>
        <div style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.3)',borderRadius:'14px',padding:'20px',marginBottom:'28px',textAlign:'center'}}>
          <div style={{fontSize:'15px',fontWeight:700,marginBottom:'8px',color:'#a5b4fc'}}>📦 Amazon Preset — Ready to Use</div>
          <p style={{fontSize:'15px',opacity:0.6,marginBottom:'14px'}}>Optimized for Amazon: JPEG, 90% quality, 2000px for zoom feature</p>
          <Link href="/?preset=amazon" style={{display:'inline-block',padding:'12px 28px',borderRadius:'10px',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',fontWeight:800,fontSize:'15px',textDecoration:'none'}}>
            ⚡ Open Amazon Compressor →
          </Link>
        </div>
        <div style={{background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.3)',borderRadius:'12px',padding:'16px 20px',marginBottom:'24px'}}>
          <div style={{fontWeight:700,fontSize:'14px',color:'#f87171',marginBottom:'8px'}}>Warning about Amazon image compliance</div>
          <p style={{fontSize:'15px',opacity:0.7,lineHeight:'1.6',margin:0}}>Amazon can <strong style={{color:'#fca5a5'}}>suppress or delist products</strong> with non-compliant images — wrong size, colored background, or watermarks. Our preset applies correct specs before you upload.</p>
        </div>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'14px'}}>Amazon Image Requirements 2025</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'10px',marginBottom:'28px'}}>
          {[['📐','Main image','1000 × 1000 px minimum (2000 recommended)'],['📦','File size','Under 10MB'],['🖼️','Format','JPEG preferred by Amazon'],['⚡','Zoom feature','Requires 1000px+ on longest side'],].map(([icon,title,desc])=>(
            <div key={title} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'14px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <div style={{fontSize:'20px',marginBottom:'6px'}}>{icon}</div>
              <div style={{fontWeight:700,fontSize:'15px',marginBottom:'3px'}}>{title}</div>
              <div style={{fontSize:'12px',opacity:0.5}}>{desc}</div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'14px'}}>CompressTo20KB vs Other Tools for Amazon</h2>
        <div style={{overflowX:'auto',marginBottom:'28px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'15px'}}>
            <thead><tr style={{background:'rgba(129,140,248,0.15)'}}>
              {['Feature','CompressTo20KB','TinyPNG','Adobe Express'].map(h=>(
                <th key={h} style={{padding:'10px 14px',textAlign:'left',fontWeight:700,borderBottom:'1px solid rgba(255,255,255,0.1)'}}>{h}</th>
              ))}</tr></thead>
            <tbody>{[
                ['Price','Free','Free tier limited','Free tier limited'],
                ['Amazon preset','Yes — JPEG 2000px','No preset','No preset'],
                ['Privacy','100% local','Uploads to server','Uploads to server'],
                ['Bulk compress','Up to 50 files','Up to 20 (free)','One at a time (free)'],
                ['No signup','Yes','No','No'],
              ].map((row,i)=>(
                <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.05)',background:i%2===0?'transparent':'rgba(255,255,255,0.02)'}}>
                  {row.map((cell,j)=>(<td key={j} style={{padding:'10px 14px',opacity:j===0?0.6:1}}>{cell}</td>))}
                </tr>
              ))}</tbody>
          </table>
        </div>
        <section style={{marginBottom:'28px'}}>
          <h2 style={{fontSize:'22px',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>When Do You Need to Compress Amazon Product Images?</h2>
          <p style={{fontSize:'15px',lineHeight:1.7,marginBottom:'10px',opacity:0.9}}>Large product images slow your listing and can trigger Amazon compliance warnings. Compressing before upload is the fastest fix.</p>
          <ul style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li><strong>New product listings</strong> — compress before first upload to avoid suppressed listings from day one.</li>
            <li><strong>FBA prep</strong> — Amazon requires compliant main images for products entering fulfillment centers.</li>
            <li><strong>Bulk catalog uploads</strong> — compress 50 images at once and import via the Amazon flat file template.</li>
            <li><strong>International marketplaces</strong> — Amazon EU and JP enforce the same standards; optimize once, reuse everywhere.</li>
            <li><strong>Suppression warnings</strong> — if Seller Central flags your listing, re-compress with the correct preset and re-upload.</li>
          </ul>
        </section>
        <section style={{marginBottom:'28px'}}>
          <h2 style={{fontSize:'22px',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Tips for Amazon Product Image Optimization</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',gap:'14px'}}>
            {[
              ['Use JPEG not WebP','Amazon does not support WebP. Always export as JPEG or your images will be rejected at upload.'],
              ['White background required','Main image must have pure white background (RGB 255,255,255). Off-white tones trigger suppression.'],
              ['2000px for zoom','Amazon zoom requires 1000px minimum — 2000px gives buyers a sharper experience and increases conversion.'],
              ['Compress before bulk import','Use Amazon flat file CSV importer with our ZIP download to batch-upload all optimized images at once.'],
            ].map(([t,d])=>(
              <div key={t} style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}>
                <div style={{fontWeight:700,fontSize:'14px',color:'#c7d2fe',marginBottom:'6px'}}>{t}</div>
                <div style={{fontSize:'15px',lineHeight:1.6,opacity:0.8}}>{d}</div>
              </div>
            ))}
          </div>
        </section>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'14px'}}>FAQ — Amazon Image Compression</h2>
        {[
          ['What is the minimum image size for Amazon listings?','Amazon requires at least 1000px on the longest side to enable the zoom feature. 2000px is recommended for best results.'],
          ['Should Amazon product photos be JPEG or PNG?','Amazon prefers JPEG for product images. PNG is accepted but results in larger file sizes.'],
          ['Can I compress images without losing zoom quality?','Yes — our tool preserves enough detail for Amazon zoom at 90% quality setting.'],
          ['Does this work for Amazon FBA sellers?','Yes, works for all Amazon seller types — FBA, FBM, handmade, and brand registered.'],
          ['Is my product data safe?','100% private. Images are compressed in your browser and never sent to any server.'],
        ].map(([q,a])=>(
          <details key={q} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',marginBottom:'8px',border:'1px solid rgba(255,255,255,0.07)',padding:'14px 16px'}}>
            <summary style={{fontWeight:600,fontSize:'14px',cursor:'pointer',listStyle:'none'}}>▶ {q}</summary>
            <p style={{fontSize:'15px',opacity:0.6,marginTop:'10px',lineHeight:'1.7'}}>{a}</p>
          </details>
        ))}
        <div style={{display:'flex',gap:'10px',flexWrap:'wrap',marginTop:'24px'}}>
          {[['/compress-for-etsy','Compress for Etsy'],['/compress-for-shopify','Compress for Shopify'],['/compress-without-uploading','No Upload Compressor']].map(([href,label])=>(
            <Link key={href} href={href} style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.1)',border:'1px solid rgba(129,140,248,0.25)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none'}}>{label} →</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
