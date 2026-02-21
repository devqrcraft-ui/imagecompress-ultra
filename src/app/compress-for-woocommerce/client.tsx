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
          <Link href="/compress-for-ebay" style={{color:'white',textDecoration:'none'}}>eBay</Link>
          <Link href="/bulk-image-compressor" style={{color:'white',textDecoration:'none'}}>Bulk</Link>
        </div>
      </nav>
      <div style={{textAlign:'center',padding:'48px 16px 24px'}}>
        <h1 style={{fontSize:'clamp(24px,4vw,42px)',fontWeight:900,margin:'0 0 16px'}}>Compress Images for <span style={{color:'#818cf8'}}>WooCommerce</span><br/>Faster Store, Better SEO</h1>
        <p style={{fontSize:'16px',opacity:0.65,maxWidth:'580px',margin:'0 auto 32px',lineHeight:1.6}}>Convert product images to WebP and compress to under 200KB — no plugin needed. Improve Core Web Vitals and boost Google ranking.</p>
      </div>
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'0 16px 40px'}}><CompressorWidget defaultMode="quality" defaultFormat="webp" defaultQuality={82}/></div>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'0 16px 40px'}}>
        <p style={{fontSize:'14px',opacity:0.7,lineHeight:1.7,marginBottom:'24px'}}>Page speed is a Google ranking factor. WooCommerce stores with large unoptimized images score poorly on Core Web Vitals (LCP, CLS). Converting to WebP and compressing product photos to under 200KB can cut load time by 50% or more — without any visible quality loss.</p>
        <div style={{padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([['/', 'Shopify'],['/compress-for-ebay','eBay'],['/compress-for-squarespace','Squarespace'],['/bulk-image-compressor','Bulk']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
