"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const compare = [
  { feature: 'Privacy', us: '✅ 100% in-browser', them: '❌ Uploads to server' },
  { feature: 'Exact KB targeting', us: '✅ Any KB target', them: '❌ Percentage only' },
  { feature: 'WebP / AVIF output', us: '✅ Full support', them: '❌ No WebP/AVIF' },
  { feature: 'Batch compression', us: '✅ Up to 50 images', them: '❌ One at a time' },
  { feature: 'HEIC support', us: '✅ iPhone photos', them: '❌ No HEIC' },
  { feature: 'Passport / Gov presets', us: '✅ Built-in presets', them: '❌ No' },
  { feature: 'Mobile friendly', us: '✅ Full mobile support', them: '⚠️ Limited' },
  { feature: 'Price', us: '✅ Free, no ads', them: '⚠️ Free with ads' },
];
const faq = [
  { q: 'Is CompressTo20KB better than PicResize?', a: 'For most use cases yes. CompressTo20KB supports WebP and AVIF output, processes everything in your browser, allows batch compression of 50 images, and has exact KB targeting — features PicResize lacks.' },
  { q: 'Does PicResize support WebP format?', a: 'No. PicResize only outputs JPEG, PNG, and GIF. CompressTo20KB supports modern formats including WebP and AVIF which can be 70% smaller than JPEG.' },
  { q: 'Can I compress multiple images at once with PicResize?', a: 'No. PicResize processes one image at a time. CompressTo20KB supports batch compression of up to 50 images with a single ZIP download.' },
  { q: 'Which tool is better for passport photos?', a: 'CompressTo20KB has built-in presets for US passport, USCIS, DS-160, and other government requirements. PicResize has no such presets.' },
];
export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize:'15px', opacity: 0.75 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        </div>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}>Comparison → CompressTo20KB vs PicResize</div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>CompressTo20KB vs PicResize<br /><span style={{ color: '#818cf8' }}>2025 Comparison</span></h1>
        <p style={{ fontSize: '16px', opacity: 0.65, marginBottom: '32px', lineHeight: 1.7 }}>PicResize has been around for years, but it lacks modern format support, only processes one image at a time, and uploads your files to their servers. Here is how CompressTo20KB compares.</p>
        <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px' }}>
          <strong style={{ color: '#fca5a5' }}>⚠️ PicResize Limitation:</strong><span style={{ fontSize: '14px', opacity: 0.8 }}> PicResize processes one image at a time and has no WebP or AVIF output. CompressTo20KB supports batch up to 50 images and all modern formats.</span>
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Feature Comparison</h2>
        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize:'15px' }}>
            <thead><tr style={{ background: 'rgba(99,102,241,0.15)' }}>
              {['Feature', 'CompressTo20KB', 'PicResize'].map(h => <th key={h} style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>{h}</th>)}
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
            <p style={{ marginTop: '10px', fontSize:'15px', opacity: 0.7, lineHeight: 1.6 }}>{f.a}</p>
          </details>
        ))}
        <div style={{ marginTop: '36px', padding: '20px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize:'15px' }}>
            {([['/vs/tinypng', 'vs TinyPNG'], ['/vs/kraken', 'vs Kraken.io'], ['/bulk-image-compressor', 'Bulk Compress'], ['/compress-passport-photo', 'Passport Tool']] as [string, string][]).map(([href, label]) => (
              <Link key={href} href={href} style={{ color: '#a5b4fc', textDecoration: 'none', background: 'rgba(99,102,241,0.1)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
