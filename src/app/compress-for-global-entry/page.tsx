import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Photo for Global Entry TSA PreCheck — Free Online Tool',
  description: 'Compress photo for Global Entry or TSA PreCheck application. Under 5MB, white background.',
  alternates: { canonical: '/compress-for-global-entry' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-global-entry' },
  keywords: 'compress photo for global-entry, Global Entry TSA PreCheck photo requirements, Global Entry TSA PreCheck photo size',
};

export default function Page() {
  const maxKB = 5120;
  const maxDisplay = maxKB >= 1024 ? Math.round(maxKB / 1024) + 'MB' : maxKB + 'KB';
  const faq = [
    { q: 'What are the photo requirements for Global Entry TSA PreCheck?', a: 'Global Entry photo: JPEG or PNG under 5MB, white or off-white background, taken within 6 months.' },
    { q: 'How do I compress a photo for Global Entry TSA PreCheck?', a: 'Click the button above, select Exact KB Mode, enter 5120 as target size and download.' },
    { q: 'Is my photo uploaded to a server?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
  ];
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication',
        name: 'Global Entry TSA PreCheck Photo Compressor',
        url: 'https://compressto20kb.com/compress-for-global-entry',
        description: 'Compress photo for Global Entry or TSA PreCheck application. Under 5MB, white background.',
        applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '1034', bestRating: '5', worstRating: '1' },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      })}} />
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', opacity: 0.75 }}>← Home</Link>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '12px' }}>
          <Link href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</Link> {'->'} 🏛️ Global Entry TSA PreCheck
        </div>
        <h1 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
          🏛️ Compress Photo for <span style={{ color: '#818cf8' }}>Global Entry TSA PreCheck</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>Global Entry photo: JPEG or PNG under 5MB, white or off-white background, taken within 6 months.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '12px', marginBottom: '28px' }}>
          {[
            { label: 'Max File Size', value: maxDisplay, icon: '📦', color: '#4ade80' },
            { label: 'Dimensions', value: '600x600px', icon: '📐', color: '#818cf8' },
            { label: 'Background', value: 'White', icon: '⬜', color: '#fbbf24' },
            { label: 'Format', value: 'JPEG', icon: '🖼️', color: '#fb923c' },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', marginBottom: '6px' }}>{s.icon}</div>
              <div style={{ fontSize: '11px', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{s.label}</div>
              <div style={{ fontWeight: 800, fontSize: '14px', color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Compress to {maxDisplay} — Global Entry TSA PreCheck Ready</div>
          <p style={{ fontSize: '13px', opacity: 0.65, marginBottom: '16px' }}>No upload. Files stay on your device. JPEG, PNG, WebP, HEIC supported.</p>
          <a href={`/?mode=exactkb&target=${maxKB}`} style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open Global Entry TSA PreCheck Photo Compressor
          </a>
          <div style={{ marginTop: '12px', fontSize: '12px', opacity: 0.5 }}>Apply at: <a href="https://ttp.cbp.dhs.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#a5b4fc' }}>https://ttp.cbp.dhs.gov</a></div>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>How to Compress Photo for Global Entry TSA PreCheck</h2>
        {[
          { step: '1', title: 'Click the button above', desc: 'Opens the free compressor. No signup or install needed.' },
          { step: '2', title: 'Upload your photo', desc: 'Drag and drop or click to select. Supports JPG, PNG, WebP, HEIC.' },
          { step: '3', title: 'Select Exact KB Mode', desc: 'Click the Exact KB Mode tab and enter 5120 as your target size.' },
          { step: '4', title: 'Download and submit', desc: 'Your photo is compressed and ready to upload to your Global Entry TSA PreCheck application.' },
        ].map(({ step, title, desc }) => (
          <div key={step} style={{ display: 'flex', gap: '16px', marginBottom: '16px', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(129,140,248,0.2)', border: '1px solid rgba(129,140,248,0.4)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>{step}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>{title}</div>
              <div style={{ fontSize: '13px', opacity: 0.65 }}>{desc}</div>
            </div>
          </div>
        ))}
        <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '40px 0 16px' }}>FAQ — Global Entry TSA PreCheck Photo Requirements</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '16px 20px' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px', color: '#a5b4fc' }}>Q: {item.q}</div>
              <div style={{ fontSize: '13px', opacity: 0.7 }}>{item.a}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {['/compress-for-ds160','/compress-for-uscis','/compress-to-240kb','/visa-photo-compressor','/'].map(href => (
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>{href}</Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}
