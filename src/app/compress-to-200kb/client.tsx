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
          <Link href="/compress-to-100kb" style={{color:'white',textDecoration:'none'}}>100KB</Link>
          <Link href="/compress-to-50kb" style={{color:'white',textDecoration:'none'}}>50KB</Link>
        </div>
      </nav>
      <div style={{textAlign:'center',padding:'48px 16px 24px'}}>
        <h1 style={{fontSize:'clamp(28px,5vw,48px)',fontWeight:900,margin:'0 0 16px'}}>Compress Image to <span style={{color:'#818cf8'}}>200KB</span> Free Online</h1>
        <p style={{fontSize:'16px',opacity:0.65,maxWidth:'580px',margin:'0 auto 32px',lineHeight:1.6}}>Instantly reduce any photo to 200KB — perfect balance of quality and size for ecommerce, social media, and web uploads. No upload needed, 100% private.</p>
      </div>
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'0 16px 40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={200} defaultFormat="jpeg"/></div>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'0 16px 40px'}}>
        <div style={{padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{fontWeight:700,marginBottom:'12px',fontSize:'14px'}}>🔗 Also Try</div>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([['/', '20KB'],['/compress-to-50kb','50KB'],['/compress-to-100kb','100KB'],['/bulk-image-compressor','Bulk']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
