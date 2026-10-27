"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const compare = [
  { feature: 'Where the work happens', us: '✅ In your browser, nothing uploaded', them: '❌ On Kraken\'s servers' },
  { feature: 'Free allowance', us: '✅ No quota, no account', them: '⚠️ Free account with 100 MB test quota' },
  { feature: 'Paid plans', us: '✅ None — the tool is free', them: '⚠️ Listed from $5/month' },
  { feature: 'Target size in KB', us: '✅ Type any number from 5 to 5000', them: '❌ No target-size option we could find' },
  { feature: 'Batch without writing code', us: '✅ Up to 50 files, one ZIP download', them: '⚠️ Bulk work is aimed at their API' },
  { feature: 'Formats', us: '✅ WebP, AVIF, JPEG, PNG output', them: '✅ JPG, PNG, WebP, GIF, SVG, AVIF, HEIC, PDF' },
];
export default function ClientPage({ faq }: { faq: [string, string][] }) {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
<div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize:'15px', opacity: 0.68, marginBottom: '12px' }}>Comparison → CompressTo20KB vs Kraken.io</div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>CompressTo20KB vs Kraken.io<br /><span style={{ color: '#818cf8' }}>2026 Comparison</span></h1>
        <p style={{ fontSize: '16px', opacity: 0.65, marginBottom: '32px', lineHeight: 1.7 }}>Kraken.io is a long-running optimisation service aimed at developers and store owners. It does the work on its own servers and sells quota by the month, which is a different shape of tool to a browser tab where you type the KB number a form asked for. Here is where the two diverge.</p>
        <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px' }}>
          <strong style={{ color: '#fca5a5' }}>⚠️ Kraken.io costs and servers:</strong><span style={{ fontSize: '14px', opacity: 0.8 }}> Kraken&apos;s own site says all optimisation and compression is carried out by its servers, and its plans start from a free account with a 100 MB testing quota before paid tiers at $5/month. CompressTo20KB has no quota to fill and no plan to buy.</span>
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Feature Comparison</h2>
        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize:'15px' }}>
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
        {faq.map(([q, a], i) => (
          <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px 16px', marginBottom: '8px', cursor: 'pointer' }}>
            <summary style={{ fontWeight: 700, fontSize: '14px', listStyle: 'none' }}>{q}</summary>
            <p style={{ marginTop: '10px', fontSize:'15px', opacity: 0.7, lineHeight: 1.6 }}>{a}</p>
          </details>
        ))}
        <div style={{ marginTop: '36px', padding: '20px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize:'15px' }}>
            {([['/vs/tinypng', 'vs TinyPNG'], ['/vs/squoosh', 'vs Squoosh'], ['/vs/iloveimg', 'vs iLoveIMG'], ['/vs/compressor-io', 'vs Compressor.io'], ['/vs/imageresizer', 'vs ImageResizer'], ['/vs/picresize', 'vs PicResize'], ['/bulk-image-compressor', 'Bulk Compressor']] as [string, string][]).map(([href, label]) => (
              <Link key={href} href={href} style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', color: '#a5b4fc', textDecoration: 'none', background: 'rgba(99,102,241,0.12)', padding: '8px 16px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.3)', fontWeight: 600 }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
