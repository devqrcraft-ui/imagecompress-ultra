"use client";
import Link from 'next/link';

const tips = [
  { title: 'Use WebP for best quality at 200KB', desc: 'WebP achieves better visual quality than JPEG at the same file size. For most photos, WebP at 200KB looks noticeably sharper than JPEG at 200KB — especially for product shots.' },
  { title: 'Resize large images first', desc: 'A 5000px photo compressed to 200KB will look worse than a 1600px photo at 200KB. Resize dimensions to your actual display width before targeting 200KB.' },
  { title: '200KB is the sweet spot for blogs and eCommerce', desc: '200KB balances quality and speed: fast on mobile connections, sharp at 800–1200px, and accepted by most CMS platforms and government portals without manual re-uploading.' },
  { title: 'Use Exact KB Mode', desc: 'Switch to "🎯 Exact KB Mode" and type 200. The tool automatically finds the right compression level to hit exactly 200KB — no guessing, no manual trial and error.' },
];

const faq = [
  { q: 'How do I compress an image to exactly 200KB?', a: 'Switch to Exact KB Mode, type 200, select JPEG or WebP format, and click Compress. Binary search finds the maximum quality that fits 200KB — within 1KB accuracy.' },
  { q: 'What is 200KB good for?', a: '200KB is ideal for blog hero images, email newsletter graphics, eCommerce product photos, and government portal uploads. It gives noticeably better quality than 100KB while still loading fast on mobile.' },
  { q: 'How to compress image to 200KB on iPhone or Android?', a: 'Open compressto20kb.com in Safari (iPhone) or Chrome (Android). Tap upload, select your photo, set Exact KB Mode to 200, tap Compress. Downloads instantly — no app needed.' },
  { q: 'Is 200KB good for WordPress blog images?', a: 'Yes — 200KB WebP is excellent for WordPress. It keeps page load under 3s on mobile while displaying sharp images at 800–1200px width. Use WebP format for best compression ratio.' },
  { q: 'Can I compress multiple images to 200KB at once?', a: 'Yes — upload up to 50 images and batch compress all to 200KB simultaneously. Download as ZIP. Unlike Squoosh (1 file only) or TinyPNG (20/month limit), we process 50 files free with no limits.' },
  { q: 'Is it safe to compress images to 200KB here?', a: 'Yes — all compression runs in your browser via WebAssembly. Your images never touch any server. Unlike 11zon or iLoveIMG which upload files to their servers, zero data is transmitted.' },
  { q: 'Will compressing to 200KB reduce image dimensions?', a: 'No — dimensions are preserved by default. Only the quality/bitrate is reduced. If you want to also resize, enable the resize option and set your target width before compressing.' },
  { q: 'What formats compress best to 200KB?', a: 'WebP gives the best quality-to-size ratio at 200KB, followed by JPEG. PNG is generally not recommended for photo content at 200KB as it produces larger files than WebP or JPEG.' },
];

const competitors = [
  ['On-device (no upload)', '✅ Yes', '❌ Server', '✅ Yes', '❌ Server'],
  ['Exact 200KB target',    '✅ Yes', '⚠️ Approx', '❌ No',  '❌ No'],
  ['Batch 50 files',        '✅ Yes', '⚠️ Limited', '❌ 1 file', '⚠️ 20/month'],
  ['WebP / AVIF output',    '✅ Yes', '⚠️ Partial', '✅ Yes', '❌ No'],
  ['HEIC support',          '✅ Yes', '⚠️ Partial', '❌ No',  '❌ No'],
  ['Free unlimited',        '✅ Yes', '⚠️ Limits',  '✅ Yes', '⚠️ 20/month'],
];

const cell = (v: string, isOurs: boolean) => ({
  color: isOurs ? '#4ade80' : v.startsWith('✅') ? '#4ade80' : v.startsWith('❌') ? '#f87171' : '#fbbf24',
  fontWeight: isOurs ? 800 : 500,
});

export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      {/* NAV */}
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px', opacity: 0.75 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/compress-to-100kb" style={{ color: 'white', textDecoration: 'none' }}>100KB Tool</Link>
          <Link href="/compress-to-500kb" style={{ color: 'white', textDecoration: 'none' }}>500KB Tool</Link>
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        {/* BREADCRUMB */}
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '12px' }}>
          <Link href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</Link> → Compress to 200KB
        </div>

        {/* H1 */}
        <h1 style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1.2, marginBottom: '12px' }}>
          Compress Image to <span style={{ color: '#818cf8' }}>200KB</span> Free Online
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>
          Compress any image to exactly 200KB — free, instant, and 100% private. No upload to server. Works for JPEG, PNG, WebP, HEIC. Ideal for blog posts, eCommerce listings, and portals with a 200KB limit.
        </p>

        {/* CTA CARD */}
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Compress to Exactly 200KB — Free</div>
          <p style={{ fontSize: '13px', opacity: 0.65, marginBottom: '16px' }}>No upload · Instant · JPEG, PNG, WebP, HEIC · Bulk up to 50 images</p>
          <Link href="/?mode=exactkb&target=200" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open 200KB Compressor
          </Link>
        </div>

        {/* TIPS */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Tips for Best Results at 200KB</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {tips.map((tip, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '16px 20px', borderLeft: '3px solid #818cf8' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>✓ {tip.title}</div>
              <div style={{ fontSize: '13px', opacity: 0.65 }}>{tip.desc}</div>
            </div>
          ))}
        </div>

        {/* COMPETITOR TABLE */}
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>CompressTo20KB vs Competitors — 200KB Compression</h2>
        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                <th style={{ textAlign: 'left', padding: '10px 12px', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>Feature</th>
                <th style={{ padding: '10px 12px', color: '#818cf8', fontWeight: 800 }}>CompressTo20KB</th>
                <th style={{ padding: '10px 12px', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>11zon</th>
                <th style={{ padding: '10px 12px', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>Squoosh</th>
                <th style={{ padding: '10px 12px', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>TinyPNG</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map(([feat, ...vals], i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <td style={{ padding: '10px 12px', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{feat}</td>
                  {vals.map((v, j) => (
                    <td key={j} style={{ padding: '10px 12px', textAlign: 'center', ...cell(v, j === 0) }}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>FAQ</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map((item, i) => (
            <details key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '16px 20px', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 700, fontSize: '14px', color: '#a5b4fc', listStyle: 'none' }}>❓ {item.q}</summary>
              <div style={{ fontSize: '13px', opacity: 0.7, marginTop: '10px', lineHeight: 1.6 }}>{item.a}</div>
            </details>
          ))}
        </div>

        {/* RELATED TOOLS */}
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>Related Tools</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {[
            { href: '/', label: '🎯 Compress to 20KB' },
            { href: '/compress-to-50kb', label: '📄 Compress to 50KB' },
            { href: '/compress-to-100kb', label: '📁 Compress to 100KB' },
            { href: '/compress-to-500kb', label: '📁 Compress to 500KB' },
            { href: '/bulk-image-compressor', label: '📦 Bulk Compressor' },
            { href: '/compress-for-wordpress', label: '🌐 WordPress Tool' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
