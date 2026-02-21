"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const faq=[
  {q:'How many images can I compress at once?',a:'Up to 50 images in a single batch. Select all files, click Compress, then download individually or as a single ZIP file.'},
  {q:'Is the bulk compressor really free?',a:'100% free, no signup, no watermarks, no limits on how many times you use it.'},
  {q:'Can I compress different image formats in one batch?',a:'Yes — mix JPG, PNG, WebP, HEIC, and AVIF files in a single batch.'},
  {q:'Are my images uploaded to a server?',a:'Never. All compression happens directly in your browser. Your images stay on your device.'},
  {q:'How do I download all compressed images at once?',a:'After compressing, click "ZIP All" to download every compressed image as a single ZIP file.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-to-50kb" style={{color:'white',textDecoration:'none'}}>50KB</Link>
          <Link href="/compress-to-100kb" style={{color:'white',textDecoration:'none'}}>100KB</Link>
        </div>
      </nav>
      <div style={{textAlign:'center',padding:'48px 16px 24px'}}>
        <h1 style={{fontSize:'clamp(28px,5vw,48px)',fontWeight:900,margin:'0 0 16px'}}><span style={{color:'#818cf8'}}>Bulk Image Compressor</span><br/>Compress 50 Photos at Once — Free</h1>
        <p style={{fontSize:'16px',opacity:0.65,maxWidth:'600px',margin:'0 auto 32px',lineHeight:1.6}}>Select up to 50 images, choose your format and quality, compress them all in seconds. Download individually or as a ZIP. JPG, PNG, WebP, HEIC — all supported.</p>
      </div>
      <div style={{maxWidth:'900px',margin:'0 auto',padding:'0 16px 40px'}}><CompressorWidget defaultMode="quality" defaultFormat="webp" defaultQuality={82}/></div>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'0 16px 40px'}}>
        <h2 style={{fontSize:'22px',fontWeight:800,marginBottom:'16px'}}>Frequently Asked Questions</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'13px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'32px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{fontWeight:700,marginBottom:'12px',fontSize:'14px'}}>🔗 Specific Use Cases</div>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([['/', '20KB'],['/compress-to-50kb','50KB'],['/compress-to-100kb','100KB'],['/compress-for-ebay','eBay'],['/compress-for-woocommerce','WooCommerce'],['/compress-for-uscis','USCIS']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
