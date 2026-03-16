"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const compare = [
  { feature: 'Privacy', us: '✅ 100% in-browser', them: '❌ Uploads to server' },
  { feature: 'Free limit', us: '✅ Unlimited', them: '❌ 20 images/month free' },
  { feature: 'Exact KB mode', us: '✅ Yes — any target', them: '❌ No' },
  { feature: 'Bulk compression', us: '✅ Up to 50 images', them: '⚠️ 20 max (free)' },
  { feature: 'Output formats', us: '✅ WebP, AVIF, JPEG, PNG', them: '⚠️ PNG & JPEG only' },
  { feature: 'USCIS / Passport mode', us: '✅ Built-in presets', them: '❌ No' },
  { feature: 'Before/After compare', us: '✅ Yes', them: '❌ No' },
  { feature: 'Price', us: '✅ Free forever', them: '⚠️ $25/month Pro' },
];
const faq = [
  { q: 'Is CompressTo20KB better than TinyPNG?', a: 'For privacy-conscious users and those needing exact file sizes, yes. CompressTo20KB processes everything in your browser — nothing is uploaded to any server. TinyPNG uploads your images to their servers.' },
  { q: 'Why is TinyPNG limited to 20 free images?', a: 'TinyPNG uses server-side processing which costs money, so they limit free usage to 20 images per month. CompressTo20KB is completely browser-based and therefore free with no limits.' },
  { q: 'Does CompressTo20KB support PNG like TinyPNG?', a: 'Yes. CompressTo20KB supports PNG, JPEG, WebP, AVIF, and HEIC — more formats than TinyPNG.' },
  { q: 'Can I compress to an exact file size with TinyPNG?', a: 'No. TinyPNG compresses by quality percentage only. CompressTo20KB has a unique Exact KB mode where you type a target size (e.g., 200KB) and the tool hits it precisely.' },
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
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '12px' }}>Comparison → CompressTo20KB vs TinyPNG</div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>CompressTo20KB vs TinyPNG<br /><span style={{ color: '#818cf8' }}>2025 Comparison</span></h1>
        <p style={{ fontSize: '16px', opacity: 0.65, marginBottom: '32px', lineHeight: 1.7 }}>TinyPNG is one of the most popular image compressors — but it uploads your files to their servers, limits free users to 20 images/month, and has no exact KB control. Here's how the two tools compare.</p>
        <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px' }}>
          <strong style={{ color: '#fca5a5' }}>⚠️ TinyPNG Privacy:</strong><span style={{ fontSize: '14px', opacity: 0.8 }}> TinyPNG uploads your images to their servers for processing. If privacy matters to you, this is a concern.</span>
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Feature Comparison</h2>
        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead><tr style={{ background: 'rgba(99,102,241,0.15)' }}>
              {['Feature', 'CompressTo20KB', 'TinyPNG'].map(h => <th key={h} style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>{h}</th>)}
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
            {([['/vs/squoosh', 'vs Squoosh'], ['/vs/compressor-io', 'vs Compressor.io'], ['/bulk-image-compressor', 'Bulk Compress'], ['/compress-for-uscis', 'USCIS Tool']] as [string, string][]).map(([href, label]) => (
              <Link key={href} href={href} style={{ color: '#a5b4fc', textDecoration: 'none', background: 'rgba(99,102,241,0.1)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
