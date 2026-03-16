"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const faq=[
  {q:'What is the image size limit for eBay listings?',a:'eBay recommends images at least 500×500 pixels, ideally 1600×1600 px for zoom. We recommend under 500KB for fast load and better buyer experience.'},
  {q:'What image format does eBay prefer?',a:'JPEG is the best format for eBay product photos. It gives the best file size to quality ratio.'},
  {q:'Can I compress multiple eBay photos at once?',a:'Yes — upload up to 50 product photos and compress them all in one batch. Download as ZIP and upload to eBay.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-for-woocommerce" style={{color:'white',textDecoration:'none'}}>WooCommerce</Link>
          <Link href="/bulk-image-compressor" style={{color:'white',textDecoration:'none'}}>Bulk</Link>
        </div>
      </nav>
      <div style={{textAlign:'center',padding:'48px 16px 24px'}}>
        <h1 style={{fontSize:'clamp(24px,4vw,42px)',fontWeight:900,margin:'0 0 16px'}}>Compress Images for <span style={{color:'#818cf8'}}>eBay Listings</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,maxWidth:'580px',margin:'0 auto 32px',lineHeight:1.6}}>Optimize product photos for faster eBay page loads and quicker uploads. Keep quality high, reduce file size by up to 70%. Batch process up to 50 photos at once.</p>
      </div>
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'0 16px 40px'}}><CompressorWidget defaultMode="quality" defaultFormat="jpeg" defaultQuality={88}/></div>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'0 16px 40px'}}>
        <h2 style={{fontSize:'22px',fontWeight:800,marginBottom:'16px'}}>FAQ</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'13px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'32px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([['/', 'Shopify'],['/compress-for-woocommerce','WooCommerce'],['/compress-for-squarespace','Squarespace'],['/bulk-image-compressor','Bulk']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
