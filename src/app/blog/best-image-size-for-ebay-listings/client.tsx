"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const tips=[
  {title:'Minimum 500×500 pixels',desc:'eBay requires at least 500×500px. For zoom functionality (which increases sales), use 1600×1600px or larger.'},
  {title:'JPEG for product photos',desc:'JPEG gives the best balance of quality and file size for product photography. Use PNG only for images with transparent backgrounds.'},
  {title:'Keep files under 12MB',desc:'eBay\'s hard limit is 12MB per image. But for fast loading, aim for under 500KB — buyers on mobile will thank you.'},
  {title:'White or neutral background',desc:'eBay recommends white backgrounds for primary product images. It looks more professional and ranks better in search.'},
  {title:'Compress before uploading',desc:'Smaller files load faster. Faster pages rank higher in eBay Cassini search. Every second of load time costs you sales.'},
];
const faq=[
  {q:'What is the ideal eBay listing image size?',a:'eBay recommends 1600×1600 pixels with a white background. The file should be JPEG format and ideally under 500KB for fast loading.'},
  {q:'Does image size affect eBay search ranking?',a:'Yes. eBay\'s Cassini algorithm considers listing quality including image quality and page performance. High-resolution, fast-loading images help rankings.'},
  {q:'Can I upload PNG images to eBay?',a:'Yes, eBay accepts JPEG, PNG, GIF, TIFF, and BMP. JPEG is recommended for photos due to smaller file size and good quality.'},
  {q:'How many images can I add to an eBay listing?',a:'eBay allows up to 24 images per listing. Adding multiple high-quality images from different angles significantly increases buyer confidence and conversion rates.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-for-ebay" style={{color:'white',textDecoration:'none'}}>eBay Tool</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}>
          <Link href="/blog" style={{color:'#a5b4fc',textDecoration:'none'}}>Blog</Link> → Best Image Size for eBay Listings
        </div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>Best Image Size for eBay Listings 2025<br/><span style={{color:'#818cf8'}}>Boost Rankings & Sales</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>Your eBay listing photos directly affect your search ranking, click-through rate, and conversion rate. Here's everything you need to know about optimal image sizes and how to compress them for maximum performance.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'20px'}}>5 Image Tips to Boost Your eBay Sales</h2>
        {tips.map((t,i)=>(
          <div key={i} style={{marginBottom:'16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'16px'}}>
            <strong style={{fontSize:'15px',color:'#a5b4fc'}}>0{i+1}. {t.title}</strong>
            <p style={{fontSize:'13px',opacity:0.65,margin:'6px 0 0',lineHeight:1.6}}>{t.desc}</p>
          </div>
        ))}
        <h2 style={{fontSize:'20px',fontWeight:800,margin:'32px 0 16px'}}>Compress eBay Images — Free Tool</h2>
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
              ['/compress-for-ebay','eBay Compressor'],
              ['/compress-for-shopify','Shopify Images'],
              ['/compress-for-amazon','Amazon Images'],
              ['/bulk-image-compressor','Bulk Compress'],
            ] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · Not affiliated with eBay · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
