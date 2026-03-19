"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
export default function ClientPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}><Link href="/" style={{color:'inherit',textDecoration:'none'}}>Home</Link> → Compress Images for Shopify</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>Compress Images for Shopify<br/><span style={{color:'#818cf8'}}>WebP · Under 1MB · Free · Bulk</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>Speed up your Shopify store by compressing product images to WebP before uploading. Faster store = better Google rankings and more sales.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'12px'}}>Compress Image — Free Tool</h2>
        <p style={{fontSize:'14px',opacity:0.6,marginBottom:'20px'}}>No upload to server. Files stay 100% on your device.</p>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="quality" defaultFormat="webp"/></div>
        <div style={{marginTop:'36px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            <Link href="/compress-for-shopify" style={{color:"#a5b4fc",textDecoration:"none",background:"rgba(99,102,241,0.1)",padding:"5px 12px",borderRadius:"20px",border:"1px solid rgba(99,102,241,0.2)"}}>Shopify</Link><Link href="/compress-for-etsy" style={{color:"#a5b4fc",textDecoration:"none",background:"rgba(99,102,241,0.1)",padding:"5px 12px",borderRadius:"20px",border:"1px solid rgba(99,102,241,0.2)"}}>Etsy</Link><Link href="/compress-for-amazon" style={{color:"#a5b4fc",textDecoration:"none",background:"rgba(99,102,241,0.1)",padding:"5px 12px",borderRadius:"20px",border:"1px solid rgba(99,102,241,0.2)"}}>Amazon</Link><Link href="/bulk-image-compressor" style={{color:"#a5b4fc",textDecoration:"none",background:"rgba(99,102,241,0.1)",padding:"5px 12px",borderRadius:"20px",border:"1px solid rgba(99,102,241,0.2)"}}>Bulk</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
