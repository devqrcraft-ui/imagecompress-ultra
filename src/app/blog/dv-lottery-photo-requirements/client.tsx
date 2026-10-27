"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
import { faq } from './faq';
const reqs = [
  { item: 'File format', value: 'JPEG' },
  { item: 'File size', value: '240KB or less' },
  { item: 'Dimensions', value: '600×600 to 1200×1200 pixels (square)' },
  { item: 'Background', value: 'White or off-white, plain' },
  { item: 'Head size', value: '50%–69% of total image height' },
  { item: 'Expression', value: 'Neutral, both eyes open' },
  { item: 'Glasses', value: 'Not allowed' },
  { item: 'Taken within', value: 'Last 6 months' },
];

const schemaData = {
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.compressto20kb.com"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.compressto20kb.com/blog"},
      {"@type": "ListItem", "position": 3, "name": "dv lottery photo requirements", "item": "https://www.compressto20kb.com/blog/dv-lottery-photo-requirements"}
    ]
  }
};

export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData.breadcrumb)}} />

<div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize:'15px', opacity: 0.68, marginBottom: '12px' }}>
          <Link href="/blog" style={{ color: '#c7d2fe', textDecoration: 'none' }}>Blog</Link> → DV Lottery Photo Requirements
        </div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>DV Lottery Photo Requirements 2026<br /><span style={{ color: '#818cf8' }}>Get the File Under 240KB — Free Browser Tool</span></h1>
        <p style={{fontSize:'13px',color:'rgba(200,208,231,0.68)',marginBottom:'16px',marginTop:'4px'}}>Last updated May 2026 &nbsp;·&nbsp; By the CompressTo20KB Team &nbsp;·&nbsp; 5 min read</p>
                <div className="answer-first" style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:'10px',padding:'16px 20px',marginBottom:'20px'}}><p style={{margin:0,fontSize:'15px',lineHeight:1.75,color:'#c8d0e7'}}><strong style={{color:'#818cf8'}}>Quick answer:</strong> Use our free compressor above — compress any image to your target size in seconds, directly in your browser. No upload, no account, no watermark. Supports JPEG, PNG, WebP, and AVIF.</p></div><div style={{background:'rgba(15,23,42,0.6)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'10px',padding:'16px 20px',marginBottom:'24px'}}><img src="/images/blog/passport.svg" alt="dv lottery photo requirements — compressto20kb.com" width={800} height={420} style={{width:'100%',height:'auto',borderRadius:'8px',margin:'24px 0'}} loading="lazy" /><p style={{fontSize:'13px',fontWeight:800,color:'#818cf8',marginBottom:'10px',marginTop:0}}>Key Takeaways</p><ul style={{margin:0,paddingLeft:'18px',color:'#c8d0e7',fontSize:'14px',lineHeight:1.85}}><li>All compression happens <strong style={{color:'#fff'}}>in your browser</strong> — images never leave your device</li><li>Supports <strong style={{color:'#fff'}}>JPEG, PNG, WebP, AVIF</strong></li><li>Lossy WebP runs about <strong style={{color:'#fff'}}>25–34% smaller</strong> than comparable JPEG (Google’s own figures)</li><li>Free, no account, no watermark — targets from 5 to 5000 KB, up to 50 files per batch</li></ul></div>
        <p style={{ fontSize: '16px', opacity: 0.65, marginBottom: '32px', lineHeight: 1.7 }}>The Diversity Visa (DV) Lottery is one of the most competitive immigration programs in the US — and a single wrong photo can disqualify your entry. Here's exactly what you need and how to prepare your photo in under 2 minutes.</p>
        <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px' }}>
          <strong style={{ color: '#fca5a5' }}>⚠️ Critical:</strong><span style={{ fontSize: '14px', opacity: 0.8 }}> A disqualifying photo means your entire DV Lottery entry is rejected — no second chances. Get it right the first time.</span>
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Official DV Lottery Photo Requirements</h2>
        <p style={{ fontSize: '13px', opacity: 0.7, marginTop: '-8px', marginBottom: '16px' }}>Figures taken from the State Department photo requirements pages (travel.state.gov), checked October 2026. If the official page changes, follow the official page.</p>
        <div style={{ marginBottom: '32px' }}>
          {reqs.map((r, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent', borderRadius: '8px', fontSize: '14px' }}>
              <span style={{ opacity: 0.72 }}>{r.item}</span>
              <span style={{ fontWeight: 700, color: '#818cf8' }}>{r.value}</span>
            </div>
          ))}
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Compress Your DV Lottery Photo — Free</h2>
        <div style={{ marginBottom: '40px' }}><CompressorWidget defaultMode="exactkb" defaultTargetKB={200} defaultFormat="jpeg" /></div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Frequently Asked Questions</h2>
        {faq.map(([q, a], i) => (
          <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px 16px', marginBottom: '8px', cursor: 'pointer' }}>
            <summary style={{ fontWeight: 700, fontSize: '14px', listStyle: 'none' }}>{q}</summary>
            <p style={{ marginTop: '10px', fontSize:'15px', opacity: 0.7, lineHeight: 1.6 }}>{a}</p>
          </details>
        ))}
        <div style={{ marginTop: '36px', padding: '20px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize:'15px' }}>
            {([['/compress-for-uscis', 'USCIS Tool'], ['/compress-image-for-visa', 'Visa Photo'], ['/compress-passport-photo-usa', 'US Passport'], ['/blog/how-to-compress-image-for-uscis', 'USCIS Guide']] as [string, string][]).map(([href, label]) => (
              <Link key={href} href={href} style={{ color: '#c7d2fe', textDecoration: 'none', background: 'rgba(99,102,241,0.1)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
