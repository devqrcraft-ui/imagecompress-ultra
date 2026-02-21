"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-for-email" style={{color:'white',textDecoration:'none'}}>Email</Link>
        </div>
      </nav>
      <div style={{textAlign:'center',padding:'48px 16px 24px'}}>
        <h1 style={{fontSize:'clamp(24px,4vw,42px)',fontWeight:900,margin:'0 0 16px'}}>Compress Photo for <span style={{color:'#818cf8'}}>LinkedIn</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,maxWidth:'500px',margin:'0 auto 16px'}}>LinkedIn profile photo: 400×400 px minimum, under 8MB. Banner: 1584×396 px, under 8MB. Compress here for instant upload.</p>
        <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap',marginBottom:'32px',fontSize:'12px'}}>
          {[['Profile Photo','400×400 px · JPEG · under 8MB'],['Banner','1584×396 px · JPEG · under 8MB'],['Post Images','1200×627 px · JPEG']].map(([t,d])=>(
            <div key={t} style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'10px',padding:'10px 16px',textAlign:'center'}}>
              <div style={{fontWeight:700,fontSize:'13px'}}>{t}</div>
              <div style={{opacity:0.55,marginTop:'4px'}}>{d}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'0 16px 40px'}}><CompressorWidget defaultMode="quality" defaultFormat="jpeg" defaultQuality={90}/></div>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'0 16px 40px'}}>
        <div style={{padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([['/', '20KB'],['/compress-to-100kb','100KB'],['/compress-for-email','Email Images'],['/bulk-image-compressor','Bulk']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
