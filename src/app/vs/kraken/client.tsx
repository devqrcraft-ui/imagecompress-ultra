"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const compare = [
  { feature: 'Privacy', us: '✅ 100% in-browser', them: '❌ Uploads to server' },
  { feature: 'Price', us: '✅ Free', them: '❌ $5–$9/month' },
  { feature: 'Exact KB mode', us: '✅ Any target KB', them: '❌ No' },
  { feature: 'Bulk compression', us: '✅ Up to 50 images', them: '⚠️ API only for bulk' },
  { feature: 'Output formats', us: '✅ WebP, AVIF, JPEG, PNG', them: '⚠️ JPEG, PNG, GIF, SVG' },
  { feature: 'USCIS / Passport mode', us: '✅ Built-in presets', them: '❌ No' },
  { feature: 'No signup required', us: '✅ Zero signup', them: '❌ Account required' },
  { feature: 'Shopify preset', us: '✅ One-click', them: '❌ Manual settings' },
];
const faq = [
  { q: 'Is CompressTo20KB a free Kraken.io alternative?', a: 'Yes. CompressTo20KB is completely free with no account required. Kraken.io requires a paid plan for full access and an account even for free features.' },
  { q: 'Does Kraken.io upload my images to their server?', a: 'Yes. Kraken.io processes all images on their servers. CompressTo20KB processes everything in your browser — your images never leave your device.' },
  { q: 'Can I compress to an exact file size like 20KB?', a: 'CompressTo20KB has a unique Exact KB mode — type any target like 20KB, 50KB, or 200KB and the tool hits it precisely. Kraken.io does not offer this feature.' },
  { q: 'Which is better for Shopify images?', a: 'CompressTo20KB has a built-in Shopify preset that automatically sets WebP format, optimal quality, and correct dimensions. No app installation or monthly fee needed.' },
];
export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px', opacity: 0.75 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        </div>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '12px' }}>Comparison → CompressTo20KB vs Kraken.io</div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>CompressTo20KB vs Kraken.io<br /><span style={{ color: '#818cf8' }}>2025 Comparison</span></h1>
        <p style={{ fontSize: '16px', opacity: 0.65, marginBottom: '32px', lineHeight: 1.7 }}>Kraken.io is popular among developers and Shopify merchants — but it requires a paid account, uploads your images to their servers, and has no exact KB targeting. Here is how the two tools compare.</p>
        <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px' }}>
          <strong style={{ color: '#fca5a5' }}>⚠️ Kraken.io Cost:</strong><span style={{ fontSize: '14px', opacity: 0.8 }}> Kraken.io starts at $5/month. CompressTo20KB is 100% free with no account required.</span>
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Feature Comparison</h2>
        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead><tr style={{ background: 'rgba(99,102,241,0.15)' }}>
              {['Feature', 'CompressTo20KB', 'Kraken.io'].map(h => <th key={h} style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>{h}</th>)}
            </tr></thead>
            <tbody>{compare.map((r, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                <td style={{ padding: '10px 12px', border: '1px solid rgba(255,255,255,0.06)', fontWeight: 600, opacity: 0.8 }}>{r.feature}</td>
                <td style={{ padding: '10px 12px', border: '1px solid rgba(255,255,255,0.06)', color: '#34d399' }}>{r.us}</td>
                <td style={{ padding: '10px 12px', border: '1px solid rgba(255,255,255,0.06)', opacity: 0.7 }}>{r.them}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Try Our Free Alternative</h2>
        <div style={{ marginBottom: '40px' }}><CompressorWidget defaultMode="quality" defaultFormat="webp" /></div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>FAQ</h2>
        {faq.map((f, i) => (
          <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px 16px', marginBottom: '8px', cursor: 'pointer' }}>
            <summary style={{ fontWeight: 700, fontSize: '14px', listStyle: 'none' }}>❓ {f.q}</summary>
            <p style={{ marginTop: '10px', fontSize: '13px', opacity: 0.7, lineHeight: 1.6 }}>{f.a}</p>
          </details>
        ))}
        <div style={{ marginTop: '36px', padding: '20px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize: '13px' }}>
            {([['/vs/tinypng', 'vs TinyPNG'], ['/vs/squoosh', 'vs Squoosh'], ['/vs/iloveimg', 'vs iLoveIMG'], ['/compress-for-shopify', 'Shopify Tool']] as [string, string][]).map(([href, label]) => (
              <Link key={href} href={href} style={{ color: '#a5b4fc', textDecoration: 'none', background: 'rgba(99,102,241,0.1)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)' }}>© 2025 CompressTo20KB · <Link href="/" style={{ color: 'white' }}>Home</Link></footer>
    </div>
  );
}
