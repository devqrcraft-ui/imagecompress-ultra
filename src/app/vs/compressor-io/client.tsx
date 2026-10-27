"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const compare = [
  { feature: 'Where the work happens', detail: 'In your browser — the file is never uploaded' },
  { feature: 'Files per run', detail: 'Up to 50, with a ZIP download or one-at-a-time saves' },
  { feature: 'Target size in KB', detail: 'Type any number from 5 to 5000; the result comes back at or under it' },
  { feature: 'Accepted input', detail: 'JPG, PNG, WebP, AVIF and HEIC' },
  { feature: 'Output formats', detail: 'WebP, AVIF, JPEG or PNG' },
  { feature: 'Resize, crop, background removal', detail: 'Not offered — this tool changes file size only' },
  { feature: 'Account, quota, watermark', detail: 'None; free to use' },
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
        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}>Comparison → CompressTo20KB vs Compressor.io</div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>CompressTo20KB vs Compressor.io<br /><span style={{ color: '#818cf8' }}>Free Alternative (2026)</span></h1>
        <p style={{ fontSize: '16px', opacity: 0.65, marginBottom: '32px', lineHeight: 1.7 }}>This page used to print a list of claims about Compressor.io — its upload handling, its free cap, its file-size ceiling. We have taken those lines out. We cannot verify another company limits from here, they change without notice, and a comparison built on guesses is not one you can plan around. What follows is a straight account of what this tool does, so you can decide whether it covers your job better than the tool you already use.</p>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>What CompressTo20KB Does</h2>
        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize:'15px' }}>
            <thead><tr style={{ background: 'rgba(99,102,241,0.15)' }}>
              {['Detail', 'This tool'].map(h => <th key={h} style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>{h}</th>)}
            </tr></thead>
            <tbody>{compare.map((r, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                <td style={{ padding: '10px 12px', border: '1px solid rgba(255,255,255,0.06)', fontWeight: 600, opacity: 0.8 }}>{r.feature}</td>
                <td style={{ padding: '10px 12px', border: '1px solid rgba(255,255,255,0.06)', color: '#34d399' }}>{r.detail}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Try It — Nothing Uploads</h2>
        <div style={{ marginBottom: '40px' }}><CompressorWidget defaultMode="quality" defaultFormat="webp" /></div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Frequently Asked Questions</h2>
        {faq.map(([q, a], i) => (
          <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px 16px', marginBottom: '8px', cursor: 'pointer' }}>
            <summary style={{ fontWeight: 700, fontSize: '14px', listStyle: 'none' }}>{q}</summary>
            <p style={{ marginTop: '10px', fontSize:'15px', opacity: 0.7, lineHeight: 1.6 }}>{a}</p>
          </details>
        ))}
        <div style={{ marginTop: '36px', padding: '20px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize:'15px' }}>
            {([['/vs/tinypng', 'vs TinyPNG'], ['/vs/squoosh', 'vs Squoosh'], ['/bulk-image-compressor', 'Bulk Compress'], ['/', 'Try Now']] as [string, string][]).map(([href, label]) => (
              <Link key={href} href={href} style={{ color: '#a5b4fc', textDecoration: 'none', background: 'rgba(99,102,241,0.1)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
