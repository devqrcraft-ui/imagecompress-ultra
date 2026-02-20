import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Image Compressor for Amazon Listings — Resize Product Photos',
  description: 'Compress Amazon product images to meet listing requirements. Free, browser-based, no upload. Get your photos under 10MB with perfect quality.',
  alternates: { canonical: '/compress-for-amazon' },
};

export default function AmazonPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f2a1e 100%)',fontFamily:'Inter,sans-serif',color:'white'}}>
      <header style={{padding:'12px 20px',borderBottom:'1px solid rgba(255,255,255,0.07)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link href="/" style={{display:'flex',alignItems:'center',gap:'8px',textDecoration:'none',color:'white'}}>
          <span style={{fontSize:'22px'}}>🗜️</span>
          <div style={{fontWeight:800,fontSize:'17px'}}>Compress<span style={{color:'#818cf8'}}>To20KB</span></div>
        </Link>
        <Link href="/" style={{color:'rgba(255,255,255,0.5)',textDecoration:'none',fontSize:'13px'}}>← Back to Tool</Link>
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
          <p style={{fontSize:'13px',opacity:0.6,marginBottom:'14px'}}>Optimized for Amazon: JPEG, 90% quality, 2000px for zoom feature</p>
          <Link href="/?preset=amazon" style={{display:'inline-block',padding:'12px 28px',borderRadius:'10px',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',fontWeight:800,fontSize:'15px',textDecoration:'none'}}>
            ⚡ Open Amazon Compressor →
          </Link>
        </div>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'14px'}}>Amazon Image Requirements 2025</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'10px',marginBottom:'28px'}}>
          {[['📐','Main image','1000 × 1000 px minimum (2000 recommended)'],['📦','File size','Under 10MB'],['🖼️','Format','JPEG preferred by Amazon'],['⚡','Zoom feature','Requires 1000px+ on longest side'],].map(([icon,title,desc])=>(
            <div key={title} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'14px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <div style={{fontSize:'20px',marginBottom:'6px'}}>{icon}</div>
              <div style={{fontWeight:700,fontSize:'13px',marginBottom:'3px'}}>{title}</div>
              <div style={{fontSize:'12px',opacity:0.5}}>{desc}</div>
            </div>
          ))}
        </div>
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
            <p style={{fontSize:'13px',opacity:0.6,marginTop:'10px',lineHeight:'1.7'}}>{a}</p>
          </details>
        ))}
        <div style={{display:'flex',gap:'10px',flexWrap:'wrap',marginTop:'24px'}}>
          {[['/compress-for-etsy','Compress for Etsy'],['/compress-for-shopify','Compress for Shopify'],['/compress-without-uploading','No Upload Compressor']].map(([href,label])=>(
            <Link key={href} href={href} style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.1)',border:'1px solid rgba(129,140,248,0.25)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>{label} →</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
