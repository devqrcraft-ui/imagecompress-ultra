import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Image to 50KB Free Online — Forms, Portals, Documents',
  description: 'Compress any image to exactly 50KB free online. Perfect for online forms, job applications, government portals. No upload — files stay on your device.',
  alternates: { canonical: '/compress-to-50kb' },
};

export default function CompressTo50KB() {
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
        <h1 style={{fontSize:'32px',fontWeight:800,marginBottom:'12px'}}>
          Compress Image to <span style={{color:'#818cf8'}}>50KB</span> Free Online
        </h1>
        <p style={{fontSize:'15px',lineHeight:'1.7',opacity:0.65,marginBottom:'24px'}}>
          Compress any image to exactly 50KB — free, instant, private. Used for job applications, university portals, government forms. Files never leave your browser.
        </p>
        <div style={{textAlign:'center',marginBottom:'28px'}}>
          <Link href="/?preset=50kb" style={{display:'inline-block',padding:'14px 32px',borderRadius:'10px',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',fontWeight:800,fontSize:'15px',textDecoration:'none'}}>
            📄 Compress to 50KB Now →
          </Link>
        </div>
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'14px'}}>When Do You Need 50KB Images?</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'10px',marginBottom:'28px'}}>
          {[
            ['🎓','University Applications','Most university portals require photo under 50KB for admission forms'],
            ['💼','Job Portals','Naukri, LinkedIn, government job sites cap profile photos at 50KB'],
            ['🏛️','Government Forms','Tax portals, municipal services — 50KB is standard limit'],
            ['🪪','ID Documents','Many ID renewal forms require 50KB JPEG photo uploads'],
          ].map(([icon,title,desc])=>(
            <div key={title} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'14px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <div style={{fontSize:'22px',marginBottom:'6px'}}>{icon}</div>
              <div style={{fontWeight:700,fontSize:'13px',marginBottom:'4px'}}>{title}</div>
              <div style={{fontSize:'12px',opacity:0.5,lineHeight:'1.5'}}>{desc}</div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'12px'}}>How to Compress to 50KB — 3 Steps</h2>
        {[
          ['1','Upload image','Select JPG, PNG or WebP from your device'],
          ['2','Choose Exact KB Mode → 50KB','Our binary search finds optimal quality for exactly 50KB'],
          ['3','Download','Compressed file saved to your device — nothing uploaded'],
        ].map(([n,t,d])=>(
          <div key={n} style={{display:'flex',gap:'14px',padding:'12px 16px',background:'rgba(255,255,255,0.04)',borderRadius:'10px',marginBottom:'8px',border:'1px solid rgba(255,255,255,0.07)'}}>
            <div style={{width:'30px',height:'30px',borderRadius:'50%',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:'13px',flexShrink:0}}>{n}</div>
            <div><div style={{fontWeight:700,fontSize:'13px',marginBottom:'2px'}}>{t}</div><div style={{fontSize:'12px',opacity:0.5}}>{d}</div></div>
          </div>
        ))}
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'14px'}}>FAQ — Compress Image to 50KB</h2>
        {[
          ['What requires images under 50KB?','Many government ID uploads, job application portals, and academic admission forms require photos under 50KB.'],
          ['Can I keep good quality at 50KB?','For small profile photos and ID images, 50KB is sufficient. For large prints, some quality loss is expected.'],
          ['What dimensions work best at 50KB?','For 50KB, aim for 600x600px or smaller. Larger dimensions at 50KB will look pixelated.'],
          ['How do I compress a selfie to 50KB?','Upload your photo, set the target to 50KB, and download. The whole process takes under 5 seconds.'],
          ['Is this tool free?','Yes — completely free, no signup, no watermarks.'],
        ].map(([q,a])=>(
          <details key={q} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',marginBottom:'8px',border:'1px solid rgba(255,255,255,0.07)',padding:'14px 16px'}}>
            <summary style={{fontWeight:600,fontSize:'14px',cursor:'pointer',listStyle:'none'}}>▶ {q}</summary>
            <p style={{fontSize:'13px',opacity:0.6,marginTop:'10px',lineHeight:'1.7'}}>{a}</p>
          </details>
        ))}
        <div style={{display:'flex',gap:'10px',flexWrap:'wrap',marginTop:'24px'}}>
          {[['/compress-to-20kb','Compress to 20KB'],['/compress-passport-photo','Passport Photo'],['/compress-for-shopify','Shopify Preset'],['/compress-without-uploading','No Upload']].map(([href,label])=>(
            <Link key={href} href={href} style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.1)',border:'1px solid rgba(129,140,248,0.25)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>{label} →</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
