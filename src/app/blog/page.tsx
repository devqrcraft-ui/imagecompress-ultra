import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Image Compression Blog — Tips, Guides & Requirements',
  description: 'Free guides on image compression for USCIS, passports, visas, eBay, WooCommerce, LinkedIn and more. Expert tips to meet every platform\'s photo requirements.',
  alternates: { canonical: '/blog' },
};
const posts=[
  {slug:'how-to-compress-image-for-uscis',title:'How to Compress Image for USCIS',desc:'Step-by-step guide to compressing photos for N-400, DS-160, I-485 forms under 240KB.',tag:'USCIS'},
  {slug:'compress-passport-photo-to-50kb',title:'Compress Passport Photo to 50KB',desc:'For visa portals that require photos under 50KB. Works for India, Philippines, and more.',tag:'Passport'},
  {slug:'image-size-requirements-for-green-card',title:'Green Card Photo Size Requirements 2025',desc:'Complete guide for I-485, I-130, I-90 photo requirements with free compression tool.',tag:'Green Card'},
  {slug:'how-to-compress-photo-for-ds160',title:'How to Compress Photo for DS-160',desc:'US nonimmigrant visa photo requirements and how to meet them in under 60 seconds.',tag:'Visa'},
  {slug:'best-image-size-for-ebay-listings',title:'Best Image Size for eBay Listings 2025',desc:'Optimize your eBay photos to boost search rankings and increase sales conversions.',tag:'eBay'},
  {slug:'us-passport-photo-requirements',title:'US Passport Photo Requirements 2025',desc:'Official State Department requirements for US passport photos — print and digital.',tag:'Passport'},
  {slug:'compress-image-for-linkedin-profile',title:'Compress Image for LinkedIn Profile',desc:'Perfect LinkedIn photo and banner sizes for a professional online presence.',tag:'LinkedIn'},
  {slug:'how-to-compress-images-for-woocommerce',title:'How to Compress Images for WooCommerce',desc:'Speed up your WooCommerce store by optimizing product images — boost SEO and sales.',tag:'eCommerce'},
];
const tagColor:Record<string,string>={
  'USCIS':'rgba(239,68,68,0.2)','Passport':'rgba(99,102,241,0.2)','Green Card':'rgba(52,211,153,0.2)',
  'Visa':'rgba(251,191,36,0.2)','eBay':'rgba(234,88,12,0.2)','LinkedIn':'rgba(14,165,233,0.2)','eCommerce':'rgba(168,85,247,0.2)',
};
export default function BlogIndex(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-for-uscis" style={{color:'white',textDecoration:'none'}}>USCIS</Link>
          <Link href="/bulk-image-compressor" style={{color:'white',textDecoration:'none'}}>Bulk</Link>
        </div>
      </nav>
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'48px 16px'}}>
        <h1 style={{fontSize:'clamp(28px,4vw,44px)',fontWeight:900,marginBottom:'12px'}}>Image Compression Blog</h1>
        <p style={{fontSize:'16px',opacity:0.6,marginBottom:'40px'}}>Guides, requirements, and tips for every platform and use case.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(360px,1fr))',gap:'16px'}}>
          {posts.map(p=>(
            <Link key={p.slug} href={`/blog/${p.slug}`} style={{textDecoration:'none',color:'white',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'14px',padding:'20px',display:'block',transition:'border-color 0.2s'}}>
              <span style={{fontSize:'11px',fontWeight:700,padding:'3px 10px',borderRadius:'20px',background:tagColor[p.tag]||'rgba(99,102,241,0.2)',marginBottom:'12px',display:'inline-block'}}>{p.tag}</span>
              <h2 style={{fontSize:'17px',fontWeight:800,margin:'0 0 8px',lineHeight:1.3}}>{p.title}</h2>
              <p style={{fontSize:'13px',opacity:0.6,margin:0,lineHeight:1.6}}>{p.desc}</p>
            </Link>
          ))}
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
