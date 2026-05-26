"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const reqs = [
  { item: 'File format', value: 'JPEG only' },
  { item: 'File size', value: 'Under 240KB' },
  { item: 'Dimensions', value: '600×600 pixels minimum' },
  { item: 'Background', value: 'White or off-white, plain' },
  { item: 'Head size', value: '50%–69% of total image height' },
  { item: 'Expression', value: 'Neutral, both eyes open' },
  { item: 'Glasses', value: 'Not allowed' },
  { item: 'Taken within', value: 'Last 6 months' },
];
const faq = [
  { q: 'What are the photo requirements for the DV Lottery?', a: 'The DV Lottery requires a JPEG photo under 240KB, at least 600×600 pixels, with a plain white background. The head must occupy 50–69% of the image height.' },
  { q: 'What happens if my DV Lottery photo is rejected?', a: 'If your photo doesn\'t meet requirements, your entry will be disqualified. The State Department checks photos carefully during the selection process.' },
  { q: 'How do I compress my photo to under 240KB for the DV Lottery?', a: 'Upload your photo to our free tool, select Exact KB mode, type 200, choose JPEG format, and compress. Your photo will be safely under the 240KB limit.' },
  { q: 'Can I use a selfie for the DV Lottery photo?', a: 'You can take the photo yourself, but it must meet all technical requirements: white background, correct dimensions, neutral expression, no glasses, and under 240KB.' },
];
export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize:'15px', opacity: 0.75 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/compress-for-uscis" style={{ color: 'white', textDecoration: 'none' }}>USCIS</Link>
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        </div>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}>
          <Link href="/blog" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Blog</Link> → DV Lottery Photo Requirements
        </div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>DV Lottery Photo Requirements 2026<br /><span style={{ color: '#818cf8' }}>Compress to 240KB — Free Tool</span></h1>
                <div className="answer-first" style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:'10px',padding:'16px 20px',marginBottom:'20px'}}><p style={{margin:0,fontSize:'15px',lineHeight:1.75,color:'#c8d0e7'}}><strong style={{color:'#818cf8'}}>Quick answer:</strong> Use our free compressor above — compress any image to your target size in seconds, directly in your browser. No upload, no account, no watermark. Supports JPEG, PNG, WebP, and AVIF.</p></div><div style={{background:'rgba(15,23,42,0.6)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'10px',padding:'16px 20px',marginBottom:'24px'}}><p style={{fontSize:'13px',fontWeight:800,color:'#818cf8',marginBottom:'10px',marginTop:0}}>Key Takeaways</p><ul style={{margin:0,paddingLeft:'18px',color:'#c8d0e7',fontSize:'14px',lineHeight:1.85}}><li>All compression happens <strong style={{color:'#fff'}}>in your browser</strong> — images never leave your device</li><li>Supports <strong style={{color:'#fff'}}>JPEG, PNG, WebP, AVIF</strong></li><li>WebP saves <strong style={{color:'#fff'}}>25-50%</strong> vs JPEG at same quality</li><li>No file size limit, 100% free</li></ul></div>
        <p style={{ fontSize: '16px', opacity: 0.65, marginBottom: '32px', lineHeight: 1.7 }}>The Diversity Visa (DV) Lottery is one of the most competitive immigration programs in the US — and a single wrong photo can disqualify your entry. Here's exactly what you need and how to prepare your photo in under 2 minutes.</p>
        <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px' }}>
          <strong style={{ color: '#fca5a5' }}>⚠️ Critical:</strong><span style={{ fontSize: '14px', opacity: 0.8 }}> A disqualifying photo means your entire DV Lottery entry is rejected — no second chances. Get it right the first time.</span>
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Official DV Lottery Photo Requirements</h2>
        <div style={{ marginBottom: '32px' }}>
          {reqs.map((r, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent', borderRadius: '8px', fontSize: '14px' }}>
              <span style={{ opacity: 0.6 }}>{r.item}</span>
              <span style={{ fontWeight: 700, color: '#a5b4fc' }}>{r.value}</span>
            </div>
          ))}
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Compress Your DV Lottery Photo — Free</h2>
        <div style={{ marginBottom: '40px' }}><CompressorWidget defaultMode="exactkb" defaultTargetKB={200} defaultFormat="jpeg" /></div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>FAQ</h2>
        {faq.map((f, i) => (
          <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px 16px', marginBottom: '8px', cursor: 'pointer' }}>
            <summary style={{ fontWeight: 700, fontSize: '14px', listStyle: 'none' }}>❓ {f.q}</summary>
            <p style={{ marginTop: '10px', fontSize:'15px', opacity: 0.7, lineHeight: 1.6 }}>{f.a}</p>
          </details>
        ))}
        <div style={{ marginTop: '36px', padding: '20px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize:'15px' }}>
            {([['/compress-for-uscis', 'USCIS Tool'], ['/compress-image-for-visa', 'Visa Photo'], ['/compress-passport-photo-usa', 'US Passport'], ['/blog/how-to-compress-image-for-uscis', 'USCIS Guide']] as [string, string][]).map(([href, label]) => (
              <Link key={href} href={href} style={{ color: '#a5b4fc', textDecoration: 'none', background: 'rgba(99,102,241,0.1)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
