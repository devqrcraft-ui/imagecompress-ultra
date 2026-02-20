import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Image for LinkedIn — Free Profile & Post Photo Optimizer',
  description: 'Compress LinkedIn profile photos and post images free. Browser-based, no upload, instant. Perfect dimensions and file size for LinkedIn.',
  alternates: { canonical: '/compress-for-linkedin' },
};

export default function LinkedInPage() {
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
        <div style={{display:'inline-block',background:'rgba(16,185,129,0.15)',border:'1px solid rgba(16,185,129,0.3)',borderRadius:'20px',padding:'4px 14px',fontSize:'12px',fontWeight:600,color:'#34d399',marginBottom:'14px'}}>💼 LinkedIn Optimization</div>
        <h1 style={{fontSize:'32px',fontWeight:800,marginBottom:'12px',letterSpacing:'-0.5px'}}>
          Compress Image for <span style={{color:'#818cf8'}}>LinkedIn</span>
        </h1>
        <p style={{fontSize:'15px',lineHeight:'1.7',opacity:0.65,marginBottom:'24px'}}>
          Optimize LinkedIn profile photos, banner images, and post photos — free, instant, no signup. All compression happens locally in your browser.
        </p>
        <div style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.3)',borderRadius:'14px',padding:'20px',marginBottom:'28px',textAlign:'center'}}>
          <div style={{fontSize:'15px',fontWeight:700,marginBottom:'8px',color:'#a5b4fc'}}>💼 LinkedIn Preset — Ready to Use</div>
          <p style={{fontSize:'13px',opacity:0.6,marginBottom:'14px'}}>Optimized for LinkedIn: JPEG, 85% quality, 800px profile / 1584px banner</p>
          <Link href="/?preset=linkedin" style={{display:'inline-block',padding:'12px 28px',borderRadius:'10px',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',fontWeight:800,fontSize:'15px',textDecoration:'none'}}>
            ⚡ Open LinkedIn Compressor →
          </Link>
        </div>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'14px'}}>LinkedIn Image Requirements 2025</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'10px',marginBottom:'28px'}}>
          {[['👤','Profile photo','400 × 400 px, under 8MB'],['🖼️','Banner image','1584 × 396 px'],['📰','Post image','1200 × 627 px recommended'],['📦','File size','Under 8MB (profile), 5MB (post)'],].map(([icon,title,desc])=>(
            <div key={title} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'14px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <div style={{fontSize:'20px',marginBottom:'6px'}}>{icon}</div>
              <div style={{fontWeight:700,fontSize:'13px',marginBottom:'3px'}}>{title}</div>
              <div style={{fontSize:'12px',opacity:0.5}}>{desc}</div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'14px'}}>FAQ — LinkedIn Image Compression</h2>
        {[
          ['What size should my LinkedIn profile photo be?','400x400px minimum, under 8MB. A clear headshot with good lighting makes the biggest impact.'],
          ['Why does LinkedIn compress my photos automatically?','LinkedIn re-compresses all uploaded images. Uploading already-optimized images ensures better final quality.'],
          ['What is the best format for LinkedIn images?','JPEG for photos, PNG for graphics with text. LinkedIn supports both formats.'],
          ['Can I compress my LinkedIn banner image?','Yes — set the compressor to 1584x396px for a perfect LinkedIn banner.'],
          ['Is my LinkedIn account safe?','100% — this tool has no connection to LinkedIn. You compress locally and upload manually.'],
        ].map(([q,a])=>(
          <details key={q} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',marginBottom:'8px',border:'1px solid rgba(255,255,255,0.07)',padding:'14px 16px'}}>
            <summary style={{fontWeight:600,fontSize:'14px',cursor:'pointer',listStyle:'none'}}>▶ {q}</summary>
            <p style={{fontSize:'13px',opacity:0.6,marginTop:'10px',lineHeight:'1.7'}}>{a}</p>
          </details>
        ))}
        <div style={{display:'flex',gap:'10px',flexWrap:'wrap',marginTop:'24px'}}>
          {[['/compress-for-shopify','Compress for Shopify'],['/compress-for-etsy','Compress for Etsy'],['/compress-for-email','Compress for Email']].map(([href,label])=>(
            <Link key={href} href={href} style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.1)',border:'1px solid rgba(129,140,248,0.25)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>{label} →</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
