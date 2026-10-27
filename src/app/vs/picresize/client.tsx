"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const compare = [
  { feature: 'Where the work happens', us: '✅ In your browser, nothing uploaded', them: '❌ You upload the pictures first' },
  { feature: 'The number you control', us: '✅ A target file size in KB', them: '✅ Pixel width and height' },
  { feature: 'Resize to exact dimensions', us: '❌ No — 4096 px longest-side cap only', them: '✅ Yes, that is its job' },
  { feature: 'Batch', us: '✅ Up to 50 files, one ZIP download', them: '✅ Free batch resize advertised on their site' },
  { feature: 'Target size in KB', us: '✅ Type any number from 5 to 5000', them: '❌ Not a control the tool offers' },
  { feature: 'Output formats', us: '✅ WebP, AVIF, JPEG, PNG', them: '❓ No format list we could confirm' },
];
export default function ClientPage({ faq }: { faq: [string, string][] }) {
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
        <h1 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>CompressTo20KB vs PicResize<br /><span style={{ color: '#818cf8' }}>2026 Comparison</span></h1>
        <p style={{ fontSize: '16px', opacity: 0.65, marginBottom: '32px', lineHeight: 1.7 }}>PicResize has been a go-to free resizer for years, and it is honest to say the two tools answer different questions: it asks how many pixels you want, we ask how many kilobytes. It also uploads your picture to do it. Here is the side-by-side.</p>
        <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px' }}>
          <strong style={{ color: '#fca5a5' }}>⚠️ Different jobs:</strong><span style={{ fontSize: '14px', opacity: 0.8 }}> PicResize is built for dimensions and its own instructions start by having you upload the pictures. This tool is built for a file-size ceiling and never sees the network again after the page loads. If your form states a KB limit, the ceiling is the control you need.</span>
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
        {faq.map(([q, a], i) => (
          <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px 16px', marginBottom: '8px', cursor: 'pointer' }}>
            <summary style={{ fontWeight: 700, fontSize: '14px', listStyle: 'none' }}>{q}</summary>
            <p style={{ marginTop: '10px', fontSize:'15px', opacity: 0.7, lineHeight: 1.6 }}>{a}</p>
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
