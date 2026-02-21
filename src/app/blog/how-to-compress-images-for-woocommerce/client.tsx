"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const tips=[
  {title:'Use JPEG for product photos',desc:'JPEG compresses photographic images much better than PNG. Switch all product photos from PNG to JPEG and you\'ll cut file sizes by 60–80%.'},
  {title:'Target 100–200KB per image',desc:'For most product images, 100–200KB gives excellent visual quality at fast loading speeds. Avoid going over 300KB for any product photo.'},
  {title:'Resize before uploading',desc:'WooCommerce generates multiple image sizes automatically. Upload your source image at 1000×1000px — WooCommerce handles the rest.'},
  {title:'Use WebP where possible',desc:'WebP offers 25–35% smaller files than JPEG at the same quality. Our tool supports WebP output for modern browsers.'},
  {title:'Compress bulk images',desc:'If you have dozens of product images, use our bulk compressor to process them all at once before uploading to WooCommerce.'},
];
const faq=[
  {q:'What is the recommended image size for WooCommerce?',a:'WooCommerce recommends uploading product images at 800×800 to 1000×1000 pixels. The default thumbnail size is 300×300px and single product image is 600px wide.'},
  {q:'How does image size affect WooCommerce page speed?',a:'Large images are the #1 cause of slow WooCommerce stores. Google PageSpeed and Core Web Vitals directly measure image performance — slow stores rank lower.'},
  {q:'Should I use JPEG or WebP for WooCommerce?',a:'WebP is ideal if your hosting and theme support it. Otherwise, high-quality JPEG (70–85% quality) is the best choice for product photos.'},
  {q:'How many product images should I have per listing?',a:'Industry data shows that listings with 6–8 product images have significantly higher conversion rates than those with 1–2 images. More angles = more trust.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-for-woocommerce" style={{color:'white',textDecoration:'none'}}>WooCommerce Tool</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}>
          <Link href="/blog" style={{color:'#a5b4fc',textDecoration:'none'}}>Blog</Link> → Compress Images for WooCommerce
        </div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>How to Compress Images for WooCommerce<br/><span style={{color:'#818cf8'}}>Speed Up Your Store in 2025</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>Slow product images kill WooCommerce conversions. A 1-second delay in page load can reduce conversions by 7%. Here's how to compress your product images without sacrificing quality — and speed up your store today.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'20px'}}>5 Image Optimization Tips for WooCommerce</h2>
        {tips.map((t,i)=>(
          <div key={i} style={{marginBottom:'16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'16px'}}>
            <strong style={{fontSize:'15px',color:'#a5b4fc'}}>0{i+1}. {t.title}</strong>
            <p style={{fontSize:'13px',opacity:0.65,margin:'6px 0 0',lineHeight:1.6}}>{t.desc}</p>
          </div>
        ))}
        <h2 style={{fontSize:'20px',fontWeight:800,margin:'32px 0 16px'}}>Compress WooCommerce Images — Free Tool</h2>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="quality" defaultFormat="jpeg"/></div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>FAQ</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'13px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'36px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([
              ['/compress-for-woocommerce','WooCommerce Tool'],
              ['/compress-for-shopify','Shopify Tool'],
              ['/compress-for-squarespace','Squarespace Tool'],
              ['/bulk-image-compressor','Bulk Compress'],
            ] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · Not affiliated with WooCommerce · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
