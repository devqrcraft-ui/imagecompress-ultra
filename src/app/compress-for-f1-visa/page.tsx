import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Photo for F-1 Student Visa — Free Online Tool',
  description: 'Compress photo for F-1 US student visa. Under 240KB, white background, JPEG.',
  alternates: { canonical: '/compress-for-f1-visa' },
  keywords: 'compress photo for f1-visa, F-1 Student Visa photo requirements, F-1 Student Visa photo size',
};

export default function Page() {
  const maxKB = 240;
  const maxDisplay = maxKB >= 1024 ? Math.round(maxKB/1024)+'MB' : maxKB+'KB';
  const faq = [
    { q: 'What are the photo requirements for F-1 Student Visa?', a: 'F-1 student visa photo: JPEG under 240KB, 600x600px, white background. Submit via DS-160 form.' },
    { q: 'How do I compress a photo for F-1 Student Visa?', a: 'Click the button above, select Exact KB Mode, enter 240 as target size and download your compressed photo.' },
    { q: 'Is my photo uploaded to a server?', a: 'No — all processing happens in your browser. Your photo never leaves your device.' },
  ];
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', opacity: 0.75 }}>← Home</Link>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '12px' }}>
          <Link href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</Link> → 🏛️ F-1 Student Visa
        </div>
        <h1 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
          🏛️ Compress Photo for <span style={{ color: '#818cf8' }}>F-1 Student Visa</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>F-1 student visa photo: JPEG under 240KB, 600x600px, white background. Submit via DS-160 form.</p>
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
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Compress to {maxDisplay} — F-1 Student Visa Ready</div>
          <p style={{ fontSize: '13px', opacity: 0.65, marginBottom: '16px' }}>No upload. Files stay on your device. JPEG, PNG, WebP, HEIC supported.</p>
          <a href={`/?mode=exactkb&target=${maxKB}`} style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open F-1 Student Visa Photo Compressor
          </a>
                    <div style={{ marginTop: '12px', fontSize: '12px', opacity: 0.5 }}>Apply at: <a href="https://ceac.state.gov/genniv/" target="_blank" rel="noopener noreferrer" style={{ color: '#a5b4fc' }}>https://ceac.state.gov/genniv/</a></div>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>FAQ — F-1 Student Visa Photo Requirements</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '16px 20px' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px', color: '#a5b4fc' }}>Q: {item.q}</div>
              <div style={{ fontSize: '13px', opacity: 0.7 }}>{item.a}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {['/compress-for-uscis','/compress-for-ds160','/visa-photo-compressor','/','/compress-to-240kb'].map(href => (
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>{href}</Link>
          ))}
        </div>
      </div>
      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        2026 CompressTo20KB · <Link href="/" style={{ color: 'white' }}>Home</Link> · Files never leave your browser
      </footer>
    </div>
  );
}
