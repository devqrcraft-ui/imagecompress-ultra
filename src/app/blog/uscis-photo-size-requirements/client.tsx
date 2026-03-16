"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const faq=[{"q":"What is the USCIS photo size limit?","a":"USCIS requires JPEG photos under 240KB, 600×600 pixels minimum, with white background for all online forms."},{"q":"Does USCIS accept PNG photos?","a":"No. USCIS only accepts JPEG format. Our tool converts PNG to JPEG automatically during compression."},{"q":"What happens if my USCIS photo is wrong size?","a":"The portal will reject your upload. Compress to under 200KB JPEG and try again."}];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}><Link href="/blog" style={{color:'inherit',textDecoration:'none'}}>Blog</Link> → USCIS Photo Size Requirements 2025</div>
        <div style={{display:'inline-block',background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.3)',borderRadius:'10px',padding:'6px 14px',fontSize:'12px',marginBottom:'16px',color:'#fca5a5'}}>🇺🇸 USCIS</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>USCIS Photo Size Requirements 2025<br/><span style={{color:'#818cf8'}}>N-400 · I-485 · DS-160 · Green Card</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>USCIS requires specific photo sizes for all immigration forms. Here are the exact requirements to avoid rejection.</p>
        <div style={{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.3)',borderRadius:'12px',padding:'16px 20px',marginBottom:'32px'}}>
          <strong style={{color:'#fca5a5'}}>📋 USCIS Requirements:</strong>
          <span style={{fontSize:'14px',opacity:0.85}}> JPEG · 600×600 px · Under 240KB · White background · Within 6 months</span>
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'12px'}}>Compress Your Image (Free)</h2>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={200} defaultFormat="jpeg"/></div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>FAQ</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'13px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'36px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([['/',  'Home'],['/blog','All Guides'],['/compress-for-uscis','USCIS Tool'],['/bulk-image-compressor','Bulk Compress']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}