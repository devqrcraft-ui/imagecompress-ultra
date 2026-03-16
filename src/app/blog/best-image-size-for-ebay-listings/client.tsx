"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const tips=[
  {n:'1',t:'Main image: 1600px minimum',d:'eBay requires at least 500px but recommends 1600px for zoom. Compress to under 1MB at 1600px for fast loading.'},
  {n:'2',t:'JPEG format for photos',d:'Use JPEG for product photos — smallest file size with best quality. PNG only if your product has transparent background.'},
  {n:'3',t:'White background for main image',d:'eBay search ranks listings with white background higher. Required for most categories.'},
  {n:'4',t:'Under 7MB per image',d:'eBay accepts up to 7MB but images over 1MB slow down your listing page and hurt conversion rates.'},
  {n:'5',t:'12 photos maximum',d:'eBay allows up to 12 photos per listing. Use all 12 — listings with more photos rank higher in search.'},
];
const faq=[
  {q:'What is the best image size for eBay listings?',a:'eBay recommends 1600×1600 pixels for the main listing image to enable zoom. The file should be JPEG under 1MB for fast loading. Minimum accepted size is 500×500 pixels.'},
  {q:'Does image quality affect eBay search ranking?',a:'Yes. eBay\'s Cassini search algorithm favors listings with high-quality images. White background, high resolution, and multiple photos all improve ranking.'},
  {q:'How do I compress images for eBay without losing quality?',a:'Use our tool at quality 85% in JPEG format. This reduces file size by 60–70% with no visible quality loss. For a 1600×1600 product photo, target 200–400KB.'},
  {q:'Can I use PNG for eBay product images?',a:'Yes, but JPEG is better for photos. PNG is only useful if your product image has a transparent background that you want to preserve.'},
  {q:'How many images should I add to an eBay listing?',a:'Use all 12 available slots. Listings with more photos rank higher and convert better. Include main shot, detail shots, angles, and scale reference.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}><Link href="/blog" style={{color:'inherit',textDecoration:'none'}}>Blog</Link> → eBay Image Guide</div>
        <div style={{display:'inline-block',background:'rgba(234,88,12,0.1)',border:'1px solid rgba(234,88,12,0.3)',borderRadius:'10px',padding:'6px 14px',fontSize:'12px',marginBottom:'16px',color:'#fdba74'}}>🛒 eBay · eCommerce</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>Best Image Size for eBay Listings 2025<br/><span style={{color:'#818cf8'}}>Boost Rankings & Sales</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>eBay's search algorithm ranks listings with optimized images higher. The right image size, format and compression can directly increase your visibility and conversion rate.</p>
        <div style={{background:'rgba(234,88,12,0.08)',border:'1px solid rgba(234,88,12,0.2)',borderRadius:'12px',padding:'16px 20px',marginBottom:'32px'}}>
          <strong style={{color:'#fdba74'}}>📋 eBay Image Requirements:</strong>
          <span style={{fontSize:'14px',opacity:0.85}}> 1600×1600 px recommended · JPEG or PNG · Under 7MB · White background for main image · Up to 12 photos</span>
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>5 Tips to Optimize eBay Images</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'36px'}}>
          {tips.map((s,i)=>(
            <div key={i} style={{display:'flex',gap:'16px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'16px'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(234,88,12,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,flexShrink:0,color:'#fdba74'}}>{s.n}</div>
              <div><div style={{fontWeight:700,marginBottom:'4px'}}>{s.t}</div><div style={{fontSize:'13px',opacity:0.65,lineHeight:1.5}}>{s.d}</div></div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'12px'}}>Compress Your eBay Images (Free)</h2>
        <p style={{fontSize:'14px',opacity:0.6,marginBottom:'20px'}}>Compress product photos to under 500KB JPEG at quality 85% — perfect for eBay listings.</p>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="quality" defaultFormat="jpeg"/></div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>FAQ</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'13px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'36px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <p style={{fontWeight:700,marginBottom:'12px',fontSize:'14px'}}>Related guides:</p>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([['/compress-for-ebay','eBay Compressor'],['/blog/compress-image-for-shopify-product-page','Shopify Guide'],['/compress-for-amazon','Amazon Tool'],['/bulk-image-compressor','Bulk Compress']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
