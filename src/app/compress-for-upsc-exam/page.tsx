import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Photo for UPSC Civil Services — Free Online Tool',
  description: 'Compress photo for UPSC civil services exam registration. Under 300KB, white background.',
  alternates: { canonical: '/compress-for-upsc-exam' },
  keywords: 'compress photo for upsc-exam, UPSC Civil Services photo requirements, UPSC Civil Services photo size',
};

export default function Page() {
  const faq = [
    { q: 'What are the photo requirements for UPSC Civil Services?', a: 'UPSC photo: JPEG, 350×350px, white background, under 300KB. Used for IAS/IPS/IFS applications.' },
    { q: 'How do I compress my photo for UPSC Civil Services?', a: 'Click the button above, select Exact KB Mode, enter 300 as target and download your compressed photo.' },
    { q: 'Is this tool free?', a: 'Yes, completely free. No signup required. Your photo never leaves your device.' },
  ];
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', opacity: 0.75 }}>← Home</Link>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <h1 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
          🎓 Compress Photo for <span style={{ color: '#818cf8' }}>UPSC Civil Services</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>UPSC photo: JPEG, 350×350px, white background, under 300KB. Used for IAS/IPS/IFS applications.</p>
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Compress for UPSC Civil Services — Under 300KB</div>
          <p style={{ fontSize: '13px', opacity: 0.65, marginBottom: '16px' }}>No upload. Files stay on your device. JPEG, PNG, WebP supported.</p>
          <a href={"/?mode=exactkb&target=300"} style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open UPSC Civil Services Photo Compressor
          </a>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>FAQ — UPSC Civil Services Photo Requirements</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '16px 20px' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px', color: '#a5b4fc' }}>Q: {item.q}</div>
              <div style={{ fontSize: '13px', opacity: 0.7 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </div>
      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        © 2026 CompressTo20KB · <Link href="/" style={{ color: 'white' }}>Home</Link> · 🔒 Files never leave your browser
      </footer>
    </div>
  );
}
