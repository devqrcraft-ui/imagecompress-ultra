"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const specs=[
  {label:'Profile photo',size:'400×400 px minimum',format:'JPEG or PNG',limit:'8MB max'},
  {label:'Banner/Cover image',size:'1584×396 px',format:'JPEG or PNG',limit:'8MB max'},
  {label:'Post image',size:'1200×627 px',format:'JPEG or PNG',limit:'5MB max'},
  {label:'Article cover',size:'744×400 px',format:'JPEG or PNG',limit:'5MB max'},
];
const faq=[
  {q:'What size should a LinkedIn profile photo be?',a:'LinkedIn recommends 400×400 pixels for profile photos, JPEG or PNG format, under 8MB. For best quality on retina screens, use 800×800 pixels compressed to under 500KB.'},
  {q:'What is the LinkedIn banner image size?',a:'LinkedIn banner (cover photo) should be 1584×396 pixels. Compress to under 1MB JPEG for fast loading without quality loss.'},
  {q:'Does LinkedIn compress my photos automatically?',a:'Yes, LinkedIn recompresses all uploaded images. Upload the highest quality version you have — LinkedIn will compress it. Our tool helps you pre-optimize before upload.'},
  {q:'Why does my LinkedIn photo look blurry?',a:'LinkedIn aggressively compresses profile photos. Upload at least 800×800 pixels at high quality to minimize LinkedIn\'s recompression artifacts.'},
];

const schemaData = {
  blogPosting: {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {"@type": "WebPage", "@id": "https://www.compressto20kb.com/blog/compress-image-for-linkedin-profile"},
    "headline": "Image Compression Guide — compress image for linkedin profile",
    "publisher": {"@type": "Organization", "name": "CompressTo20KB", "url": "https://www.compressto20kb.com"},
    "author": {"@type": "Person", "name": "CompressTo20KB Team"},
    "datePublished": "2026-01-01",
    "dateModified": "2026-05-26",
    "url": "https://www.compressto20kb.com/blog/compress-image-for-linkedin-profile"
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.compressto20kb.com"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.compressto20kb.com/blog"},
      {"@type": "ListItem", "position": 3, "name": "compress image for linkedin profile", "item": "https://www.compressto20kb.com/blog/compress-image-for-linkedin-profile"}
    ]
  }
};

export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'#0f172a',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData.blogPosting)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData.breadcrumb)}} />

      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'15px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'15px',opacity:0.5,marginBottom:'12px'}}><Link href="/blog" style={{color:'inherit',textDecoration:'none'}}>Blog</Link> → LinkedIn Image Guide</div>
        <div style={{display:'inline-block',background:'rgba(14,165,233,0.1)',border:'1px solid rgba(14,165,233,0.3)',borderRadius:'10px',padding:'6px 14px',fontSize:'12px',marginBottom:'16px',color:'#7dd3fc'}}>💼 LinkedIn · Professional</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>Compress Image for LinkedIn Profile<br/><span style={{color:'#818cf8'}}>Photo, Banner & Posts 2025</span></h1>
        <p style={{fontSize:'13px',color:'rgba(200,208,231,0.55)',marginBottom:'16px',marginTop:'4px'}}>Last updated May 2026 &nbsp;·&nbsp; By Ethan Blake &nbsp;·&nbsp; 5 min read</p>
                <div className="answer-first" style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:'10px',padding:'16px 20px',marginBottom:'20px'}}>
          <p style={{margin:0,fontSize:'15px',lineHeight:1.75,color:'#c8d0e7'}}><strong style={{color:'#818cf8'}}>Quick answer:</strong> Use our free compressor above — compress any image to your target size in seconds, directly in your browser. No upload, no account, no watermark. Supports JPEG, PNG, WebP, and AVIF.</p>
        </div>
        <div style={{background:'rgba(15,23,42,0.6)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'10px',padding:'16px 20px',marginBottom:'24px'}}>
          <p style={{fontSize:'13px',fontWeight:800,color:'#818cf8',marginBottom:'10px',marginTop:0,textTransform:'uppercase' as const,letterSpacing:'0.06em'}}>Key Takeaways</p>
          <ul style={{margin:0,paddingLeft:'18px',color:'#c8d0e7',fontSize:'14px',lineHeight:1.85}}>
            <li>All compression happens <strong style={{color:'#fff'}}>in your browser</strong> — images never leave your device</li>
            <li>Supports <strong style={{color:'#fff'}}>JPEG, PNG, WebP, AVIF</strong> — convert between formats in one click</li>
            <li>WebP saves <strong style={{color:'#fff'}}>25–50% file size</strong> vs JPEG at the same visual quality</li>
            <li>No file size limit, no account required, <strong style={{color:'#fff'}}>100% free</strong></li>
            <li>Use the quality slider to find the sweet spot between size and sharpness</li>
          </ul>
        </div>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>LinkedIn image sizes and compression tips for profile photos, banners, and post images. Get the sharpest results by uploading optimized images before LinkedIn recompresses them.</p>
        <blockquote style={{borderLeft:'3px solid #818cf8',paddingLeft:'16px',margin:'24px 0',color:'rgba(200,208,231,0.75)',fontSize:'14px',fontStyle:'italic'}}>
          "Compress images to the smallest possible file size without sacrificing quality." — <a href="https://developers.google.com/speed/docs/insights/OptimizeImages" rel="nofollow" target="_blank" style={{color:'#818cf8'}}>Google PageSpeed Insights</a>
        </blockquote>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>LinkedIn Image Size Specifications</h2>
        <div style={{overflowX:'auto',marginBottom:'32px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'15px'}}>
            <thead><tr style={{background:'rgba(14,165,233,0.15)'}}>
              {['Image Type','Recommended Size','Format','Max Size'].map(h=><th key={h} style={{padding:'10px 12px',textAlign:'left',border:'1px solid rgba(255,255,255,0.08)',fontWeight:700}}>{h}</th>)}
            </tr></thead>
            <tbody>{specs.map((r,i)=>(
              <tr key={i} style={{background:i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',fontWeight:700,color:'#7dd3fc'}}>{r.label}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.75}}>{r.size}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.75}}>{r.format}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',color:'#34d399',fontWeight:700}}>{r.limit}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'12px'}}>Compress Your LinkedIn Images (Free)</h2>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="quality" defaultFormat="jpeg"/></div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>FAQ</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'15px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
