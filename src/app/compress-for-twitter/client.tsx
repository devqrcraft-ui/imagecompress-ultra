"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
export default function ClientPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}><Link href="/" style={{color:'inherit',textDecoration:'none'}}>Home</Link> → Compress Images for Twitter / X</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>Compress Images for Twitter / X<br/><span style={{color:'#818cf8'}}>Under 5MB · JPEG/PNG · Free</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>Twitter accepts images up to 5MB but compresses them heavily. Upload pre-optimized images for the sharpest quality in your posts.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'12px'}}>Compress Image — Free Tool</h2>
        <p style={{fontSize:'14px',opacity:0.6,marginBottom:'20px'}}>No upload to server. Files stay 100% on your device.</p>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="quality" defaultFormat="jpeg"/></div>
        <div style={{marginTop:'36px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            <Link href="/compress-for-instagram" style={{color:"#a5b4fc",textDecoration:"none",background:"rgba(99,102,241,0.1)",padding:"5px 12px",borderRadius:"20px",border:"1px solid rgba(99,102,241,0.2)"}}>Instagram</Link><Link href="/compress-for-linkedin" style={{color:"#a5b4fc",textDecoration:"none",background:"rgba(99,102,241,0.1)",padding:"5px 12px",borderRadius:"20px",border:"1px solid rgba(99,102,241,0.2)"}}>LinkedIn</Link><Link href="/bulk-image-compressor" style={{color:"#a5b4fc",textDecoration:"none",background:"rgba(99,102,241,0.1)",padding:"5px 12px",borderRadius:"20px",border:"1px solid rgba(99,102,241,0.2)"}}>Bulk</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
