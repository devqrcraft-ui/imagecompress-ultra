"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const compare = [
  { feature: 'Free images', us: '✅ Unlimited', them: '❌ 1 image at a time, 10MB limit' },
  { feature: 'Bulk compression', us: '✅ Up to 50 at once', them: '❌ No' },
  { feature: 'Exact KB mode', us: '✅ Yes', them: '❌ No' },
  { feature: 'Privacy', us: '✅ 100% in-browser', them: '❌ Server upload' },
  { feature: 'USCIS presets', us: '✅ Yes', them: '❌ No' },
  { feature: 'WebP output', us: '✅ Yes', them: '⚠️ Limited' },
  { feature: 'File size limit', us: '✅ No limit', them: '❌ 10MB max' },
  { feature: 'Price', us: '✅ Always free', them: '⚠️ Paid plans' },
];
const faq = [
  { q: 'What is the difference between CompressTo20KB and Compressor.io?', a: 'Compressor.io uploads your images to their servers and limits free usage to one image at a time with a 10MB cap. CompressTo20KB is fully browser-based, supports bulk compression of up to 50 images, and has no file size limits.' },
  { q: 'Is there a free alternative to Compressor.io with no limits?', a: 'Yes — CompressTo20KB. It\'s completely free with no image limits, no file size restrictions, and no server uploads. All processing happens in your browser.' },
  { q: 'Can Compressor.io target an exact file size?', a: 'No. Compressor.io reduces file size by a percentage. CompressTo20KB lets you specify an exact target in KB (e.g., compress to exactly 200KB for USCIS forms).' },
  { q: 'Which is better for e-commerce product images?', a: 'CompressTo20KB, because you can compress all your product images at once (bulk mode) with presets for Shopify, Amazon, and Etsy. Compressor.io requires uploading and processing one image at a time.' },
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
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '12px' }}>Comparison → CompressTo20KB vs Compressor.io</div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>CompressTo20KB vs Compressor.io<br /><span style={{ color: '#818cf8' }}>Free Alternative 2025</span></h1>
        <p style={{ fontSize: '16px', opacity: 0.65, marginBottom: '32px', lineHeight: 1.7 }}>Compressor.io is decent for single images — but it uploads to their servers, limits free use, and has no exact KB mode. CompressTo20KB solves all of these problems for free.</p>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Feature Comparison</h2>
        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead><tr style={{ background: 'rgba(99,102,241,0.15)' }}>
              {['Feature', 'CompressTo20KB', 'Compressor.io'].map(h => <th key={h} style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>{h}</th>)}
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
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Try It — No Limits, No Upload</h2>
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
            {([['/vs/tinypng', 'vs TinyPNG'], ['/vs/squoosh', 'vs Squoosh'], ['/bulk-image-compressor', 'Bulk Compress'], ['/', 'Try Now']] as [string, string][]).map(([href, label]) => (
              <Link key={href} href={href} style={{ color: '#a5b4fc', textDecoration: 'none', background: 'rgba(99,102,241,0.1)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
