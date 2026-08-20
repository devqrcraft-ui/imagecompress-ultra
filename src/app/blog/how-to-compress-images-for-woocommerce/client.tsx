"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const tips=[
  {n:'1',t:'Target 800×800px for product images',d:'WooCommerce displays product images at 300–600px on most themes. 800×800px gives 2x retina quality without excessive file size.'},
  {n:'2',t:'Use WebP format',d:'WebP is 30% smaller than JPEG at the same quality. All modern browsers support it. Switch from JPEG to WebP to cut your page size significantly.'},
  {n:'3',t:'Compress to under 100KB per image',d:'Product pages with 5–10 images should keep each image under 100KB. This keeps total page weight under 1MB for fast loading.'},
  {n:'4',t:'Use consistent aspect ratios',d:'WooCommerce looks best with square product images (1:1). Set all images to the same dimensions before uploading.'},
  {n:'5',t:'Batch compress before uploading',d:'Compress all images before uploading to WordPress. Our batch tool handles up to 50 images at once — faster than any WordPress plugin.'},
];
const faq=[
  {q:'What is the best image size for WooCommerce?',a:'WooCommerce recommends 800×800 pixels for product images. Compress each image to under 100KB in WebP or JPEG format for fast page loading and better Google rankings.'},
  {q:'Does image size affect WooCommerce SEO?',a:'Yes. Page speed is a Google ranking factor. Large uncompressed images slow down your WooCommerce store and hurt both SEO and conversion rates.'},
  {q:'Should I use WebP or JPEG for WooCommerce?',a:'WebP is recommended for WooCommerce in 2025. It produces files 25–35% smaller than JPEG at the same quality. All major browsers support WebP.'},
  {q:'Is it better to compress before or after uploading to WordPress?',a:'Before. Pre-compressing images gives you full control over quality and file size. WordPress plugins like Smush recompress already-compressed images, which can reduce quality.'},
];

const schemaData = {
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.compressto20kb.com"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.compressto20kb.com/blog"},
      {"@type": "ListItem", "position": 3, "name": "how to compress images for woocommerce", "item": "https://www.compressto20kb.com/blog/how-to-compress-images-for-woocommerce"}
    ]
  }
};

export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'#0f172a',color:'white',fontFamily:'system-ui,sans-serif'}}>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData.breadcrumb)}} />

      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'15px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'15px',opacity:0.5,marginBottom:'12px'}}><Link href="/blog" style={{color:'inherit',textDecoration:'none'}}>Blog</Link> → WooCommerce Guide</div>
        <div style={{display:'inline-block',background:'rgba(168,85,247,0.1)',border:'1px solid rgba(168,85,247,0.3)',borderRadius:'10px',padding:'6px 14px',fontSize:'12px',marginBottom:'16px',color:'#d8b4fe'}}>🛍️ WooCommerce · WordPress</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>Compress Images for WooCommerce<br/><span style={{color:'#818cf8'}}>Speed Up Your Store in 2025</span></h1>
        <p style={{fontSize:'13px',color:'rgba(200,208,231,0.55)',marginBottom:'16px',marginTop:'4px'}}>Last updated May 2026 &nbsp;·&nbsp; By the CompressTo20KB Team &nbsp;·&nbsp; 5 min read</p>
                <div className="answer-first" style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:'10px',padding:'16px 20px',marginBottom:'20px'}}>
          <p style={{margin:0,fontSize:'15px',lineHeight:1.75,color:'#c8d0e7'}}><strong style={{color:'#818cf8'}}>Quick answer:</strong> Use our free compressor above — compress any image to your target size in seconds, directly in your browser. No upload, no account, no watermark. Supports JPEG, PNG, WebP, and AVIF.</p>
        </div>
        <div style={{background:'rgba(15,23,42,0.6)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'10px',padding:'16px 20px',marginBottom:'24px'}}>
          <img src="/images/blog/ecommerce.svg" alt="how to compress images for woocommerce — compressto20kb.com" width={800} height={420} style={{width:'100%',height:'auto',borderRadius:'8px',margin:'24px 0'}} loading="lazy" /><p style={{fontSize:'13px',fontWeight:800,color:'#818cf8',marginBottom:'10px',marginTop:0,textTransform:'uppercase' as const,letterSpacing:'0.06em'}}>Key Takeaways</p>
          <ul style={{margin:0,paddingLeft:'18px',color:'#c8d0e7',fontSize:'14px',lineHeight:1.85}}>
            <li>All compression happens <strong style={{color:'#fff'}}>in your browser</strong> — images never leave your device</li>
            <li>Supports <strong style={{color:'#fff'}}>JPEG, PNG, WebP, AVIF</strong> — convert between formats in one click</li>
            <li>WebP saves <strong style={{color:'#fff'}}>25–50% file size</strong> vs JPEG at the same visual quality</li>
            <li>No file size limit, no account required, <strong style={{color:'#fff'}}>100% free</strong></li>
            <li>Use the quality slider to find the sweet spot between size and sharpness</li>
          </ul>
        </div>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>Slow WooCommerce stores lose sales. Uncompressed product images are the #1 cause of slow page loads. Here is how to compress images for WooCommerce without losing quality.</p>
        <div style={{background:'rgba(168,85,247,0.08)',border:'1px solid rgba(168,85,247,0.2)',borderRadius:'12px',padding:'16px 20px',marginBottom:'32px'}}>
          <strong style={{color:'#d8b4fe'}}>📋 WooCommerce Image Best Practice:</strong>
          <span style={{fontSize:'14px',opacity:0.85}}> 800×800 px · WebP or JPEG · Under 100KB per image · Square aspect ratio · Batch compress before upload</span>
        </div>
        <blockquote style={{borderLeft:'3px solid #818cf8',paddingLeft:'16px',margin:'24px 0',color:'rgba(200,208,231,0.75)',fontSize:'14px',fontStyle:'italic'}}>
          "Compress images to the smallest possible file size without sacrificing quality." — <a href="https://developers.google.com/speed/docs/insights/OptimizeImages" rel="nofollow" target="_blank" style={{color:'#818cf8'}}>Google PageSpeed Insights</a>
        </blockquote>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>5 WooCommerce Image Optimization Tips</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'36px'}}>
          {tips.map((s,i)=>(
            <div key={i} style={{display:'flex',gap:'16px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'16px'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(168,85,247,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,flexShrink:0,color:'#d8b4fe'}}>{s.n}</div>
              <div><div style={{fontWeight:700,marginBottom:'4px'}}>{s.t}</div><div style={{fontSize:'15px',opacity:0.65,lineHeight:1.5}}>{s.d}</div></div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'12px'}}>Compress WooCommerce Images (Free)</h2>
        <p style={{fontSize:'14px',opacity:0.6,marginBottom:'20px'}}>Batch compress up to 50 product images at once. Choose WebP for maximum compression.</p>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="quality" defaultFormat="webp"/></div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>FAQ</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'15px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'36px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'15px'}}>
            {([['/compress-for-woocommerce','WooCommerce Tool'],['/bulk-image-compressor','Bulk Compress'],['/blog/compress-image-for-shopify-product-page','Shopify Guide'],['/compress-for-squarespace','Squarespace Tool']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#818cf8',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
