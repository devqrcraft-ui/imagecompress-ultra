"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const tips = [
  { title: 'Use WebP format', desc: 'WebP files are 25–35% smaller than JPEG at the same quality. Shopify fully supports WebP and serves it to all modern browsers automatically.' },
  { title: 'Target under 500KB per image', desc: 'Shopify recommends keeping product images under 500KB. For hero images aim for under 200KB. Every 100KB saved improves mobile load time.' },
  { title: 'Upload at 2048×2048px', desc: 'Shopify recommends square images at 2048×2048px. This supports zoom functionality while keeping a manageable file size when compressed to WebP.' },
  { title: 'Compress before upload — not after', desc: 'Shopify does some automatic optimization but it\'s minimal. Always compress before uploading for maximum performance gains.' },
  { title: 'Use bulk compression', desc: 'If you have a catalog of 20–50 products, use our bulk compressor to process all images at once. Download as ZIP and upload to Shopify.' },
];
const faq = [
  { q: 'What image format is best for Shopify?', a: 'WebP is the best format for Shopify product images. It\'s 25–35% smaller than JPEG with the same visual quality, and Shopify supports it fully for all modern browsers.' },
  { q: 'What is the ideal image size for Shopify?', a: 'Shopify recommends 2048×2048px square images. Keep file sizes under 500KB per image, ideally under 200KB for fast mobile loading.' },
  { q: 'Does Shopify compress images automatically?', a: 'Shopify applies basic optimization but it\'s not aggressive. You\'ll get significantly better performance by compressing images yourself before uploading.' },
  { q: 'How do slow images affect Shopify SEO?', a: 'Google\'s Core Web Vitals (LCP, CLS) are ranking factors. Large images are the #1 cause of poor LCP scores. Faster Shopify stores rank higher and convert better.' },
];

const schemaData = {
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.compressto20kb.com"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.compressto20kb.com/blog"},
      {"@type": "ListItem", "position": 3, "name": "compress image for shopify product page", "item": "https://www.compressto20kb.com/blog/compress-image-for-shopify-product-page"}
    ]
  }
};

export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData.breadcrumb)}} />

      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize:'15px', opacity: 0.75 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/compress-for-shopify" style={{ color: 'white', textDecoration: 'none' }}>Shopify Tool</Link>
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        </div>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}>
          <Link href="/blog" style={{ color: '#818cf8', textDecoration: 'none' }}>Blog</Link> → Compress Images for Shopify
        </div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>How to Compress Images for Shopify<br /><span style={{ color: '#818cf8' }}>Speed Up Your Store in 2025</span></h1>
        <p style={{fontSize:'13px',color:'rgba(200,208,231,0.55)',marginBottom:'16px',marginTop:'4px'}}>Last updated May 2026 &nbsp;·&nbsp; By the CompressTo20KB Team &nbsp;·&nbsp; 5 min read</p>
                <div className="answer-first" style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:'10px',padding:'16px 20px',marginBottom:'20px'}}><p style={{margin:0,fontSize:'15px',lineHeight:1.75,color:'#c8d0e7'}}><strong style={{color:'#818cf8'}}>Quick answer:</strong> Use our free compressor above — compress any image to your target size in seconds, directly in your browser. No upload, no account, no watermark. Supports JPEG, PNG, WebP, and AVIF.</p></div><div style={{background:'rgba(15,23,42,0.6)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'10px',padding:'16px 20px',marginBottom:'24px'}}><p style={{fontSize:'13px',fontWeight:800,color:'#818cf8',marginBottom:'10px',marginTop:0}}>Key Takeaways</p><ul style={{margin:0,paddingLeft:'18px',color:'#c8d0e7',fontSize:'14px',lineHeight:1.85}}><li>All compression happens <strong style={{color:'#fff'}}>in your browser</strong> — images never leave your device</li><li>Supports <strong style={{color:'#fff'}}>JPEG, PNG, WebP, AVIF</strong></li><li>WebP saves <strong style={{color:'#fff'}}>25-50%</strong> vs JPEG at same quality</li><li>No file size limit, 100% free</li></ul></div>
        <p style={{ fontSize: '16px', opacity: 0.65, marginBottom: '32px', lineHeight: 1.7 }}>Unoptimized product images are the #1 cause of slow Shopify stores. A slow store means lower Google rankings, higher bounce rates, and fewer sales. Here's how to fix it — free, in minutes.</p>
        <blockquote style={{borderLeft:'3px solid #818cf8',paddingLeft:'16px',margin:'24px 0',color:'rgba(200,208,231,0.75)',fontSize:'14px',fontStyle:'italic'}}>
          "Compress images to the smallest possible file size without sacrificing quality." — <a href="https://developers.google.com/speed/docs/insights/OptimizeImages" rel="nofollow" target="_blank" style={{color:'#818cf8'}}>Google PageSpeed Insights</a>
        </blockquote>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '20px' }}>5 Shopify Image Optimization Tips</h2>
        {tips.map((t, i) => (
          <div key={i} style={{ marginBottom: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
            <strong style={{ fontSize: '15px', color: '#818cf8' }}>0{i + 1}. {t.title}</strong>
            <p style={{ fontSize:'15px', opacity: 0.65, margin: '6px 0 0', lineHeight: 1.6 }}>{t.desc}</p>
          </div>
        ))}
        <h2 style={{ fontSize: '20px', fontWeight: 800, margin: '32px 0 16px' }}>Compress Shopify Images — Free Bulk Tool</h2>
        <div style={{ marginBottom: '40px' }}><CompressorWidget defaultMode="quality" defaultFormat="webp" /></div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>FAQ</h2>
        {faq.map((f, i) => (
          <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px 16px', marginBottom: '8px', cursor: 'pointer' }}>
            <summary style={{ fontWeight: 700, fontSize: '14px', listStyle: 'none' }}>❓ {f.q}</summary>
            <p style={{ marginTop: '10px', fontSize:'15px', opacity: 0.7, lineHeight: 1.6 }}>{f.a}</p>
          </details>
        ))}
        <div style={{ marginTop: '36px', padding: '20px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize:'15px' }}>
            {([['/compress-for-shopify', 'Shopify Tool'], ['/compress-for-etsy', 'Etsy Tool'], ['/compress-for-amazon', 'Amazon Tool'], ['/bulk-image-compressor', 'Bulk Compress']] as [string, string][]).map(([href, label]) => (
              <Link key={href} href={href} style={{ color: '#818cf8', textDecoration: 'none', background: 'rgba(99,102,241,0.1)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    <div style={{textAlign:"center",padding:"16px 0"}}><a href="/blog/compress-images-for-shopify-store" style={{color:"#818cf8",fontSize:"14px",textDecoration:"none"}}>📖 Full Guide: Compress Images for Shopify →</a></div>
    </div>
  );
}
