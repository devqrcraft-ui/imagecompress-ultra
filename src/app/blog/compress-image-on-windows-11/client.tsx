"use client";
import Link from 'next/link';

const tips = [
  { title: 'Use WebP or AVIF format', desc: 'Modern formats like WebP achieve 30–50% smaller files than JPEG at the same visual quality. For photos where quality matters, WebP at 85% quality looks identical to JPEG at 90% but is significantly smaller.' },
  { title: 'Stay above 75% quality for photos', desc: 'For most photos, JPEG or WebP at 75–85% quality shows no visible degradation on screens. Below 60% you start seeing compression artifacts, especially in gradients and fine details.' },
  { title: 'Use lossless for graphics and logos', desc: 'For images with text, sharp edges, or flat colors (logos, screenshots, diagrams) — use PNG lossless or WebP lossless. Lossy JPEG destroys sharp edges and makes text blurry.' },
  { title: 'Reduce dimensions first', desc: 'Halving image dimensions (e.g. 4000px → 2000px) reduces file size by ~75% with zero quality loss at display size. Always resize to your display dimensions before compressing.' },
  { title: 'Use the Before/After preview', desc: 'Our tool includes a drag-slider to compare original vs compressed side-by-side. Use this to verify quality is acceptable before downloading. If you see artifacts — increase quality slider.' },
  { title: 'Avoid re-compressing already-compressed images', desc: 'Every time you save a JPEG, it loses quality. If you already have a compressed JPEG, compressing it again doubles the quality loss. Always work from the original file.' },
];

const faq = [
  { q: 'Can I really compress an image without any quality loss?', a: 'True lossless compression exists (PNG, WebP lossless) but saves less space. In practice, "without losing quality" means compressing to the point where quality loss is invisible to the human eye — typically 75–85% JPEG or WebP quality.' },
  { q: 'What format has the best quality-to-size ratio?', a: 'WebP and AVIF offer the best quality-to-size ratio in 2026. WebP is 25–35% smaller than JPEG at the same quality. AVIF is even smaller but has slightly less browser support.' },
  { q: 'How much can I compress a JPEG without visible loss?', a: 'Most JPEG photos can be compressed to 60–80% quality without visible loss on standard screens. Below 50% you typically start seeing block artifacts. Use our preview slider to judge.' },
  { q: 'Is PNG better than JPEG for quality?', a: 'PNG is lossless — it never degrades. But PNG files are much larger than JPEG for photographs. Use PNG for graphics, screenshots, and logos. Use JPEG or WebP for photos.' },
  { q: 'What causes visible quality loss when compressing?', a: 'JPEG compression creates block artifacts (8x8 pixel squares) and banding in gradients. This becomes visible below ~50% quality. Using WebP instead of JPEG at the same file size typically looks noticeably better.' },
];

export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      {/* NAV */}
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize:'15px', opacity: 0.75 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/compress-without-uploading" style={{ color: 'white', textDecoration: 'none' }}>No-Upload Tool</Link>
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>

        {/* BREADCRUMB */}
        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}>
          <Link href="/blog" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Blog</Link> → Compress Without Losing Quality
        </div>

        {/* HERO */}
        <h1 style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1.2, marginBottom: '12px' }}>
          How to Compress Images <span style={{ color: '#818cf8' }}>Without Losing Quality</span>
        </h1>
                <div className="answer-first" style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:'10px',padding:'16px 20px',marginBottom:'20px'}}><p style={{margin:0,fontSize:'15px',lineHeight:1.75,color:'#c8d0e7'}}><strong style={{color:'#818cf8'}}>Quick answer:</strong> Use our free compressor above — compress any image to your target size in seconds, directly in your browser. No upload, no account, no watermark. Supports JPEG, PNG, WebP, and AVIF.</p></div><div style={{background:'rgba(15,23,42,0.6)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'10px',padding:'16px 20px',marginBottom:'24px'}}><p style={{fontSize:'13px',fontWeight:800,color:'#818cf8',marginBottom:'10px',marginTop:0}}>Key Takeaways</p><ul style={{margin:0,paddingLeft:'18px',color:'#c8d0e7',fontSize:'14px',lineHeight:1.85}}><li>All compression happens <strong style={{color:'#fff'}}>in your browser</strong> — images never leave your device</li><li>Supports <strong style={{color:'#fff'}}>JPEG, PNG, WebP, AVIF</strong></li><li>WebP saves <strong style={{color:'#fff'}}>25–50%</strong> vs JPEG at same quality</li><li>No file size limit, 100% free</li></ul></div>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '8px' }}>
          The goal of smart image compression is to reduce file size as much as possible while keeping visual quality indistinguishable from the original. This guide explains exactly how to do it — with a free tool that includes a before/after preview.
        </p>
        <div style={{ fontSize:'15px', opacity: 0.45, marginBottom: '32px' }}>Updated February 2026</div>

        {/* CTA */}
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>👁️ Compress with Before/After Quality Preview</div>
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>Free · No upload · Drag-slider comparison · JPEG, WebP, PNG, AVIF, HEIC</p>
          <Link href="/" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Try Free Compressor
          </Link>
        </div>

        {/* FORMAT TABLE */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Format Comparison: Quality vs Size</h2>
        <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize:'15px' }}>
            <thead>
              <tr style={{ background: 'rgba(129,140,248,0.15)' }}>
                {['Format', 'Type', 'Best for', 'Quality at small size'].map(h => (
                  <th key={h} style={{ padding: '10px 14px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)', fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['WebP', 'Lossy/Lossless', 'Photos & web', '⭐⭐⭐⭐⭐'],
                ['AVIF', 'Lossy/Lossless', 'Smallest size', '⭐⭐⭐⭐⭐'],
                ['JPEG', 'Lossy', 'Universal photos', '⭐⭐⭐⭐'],
                ['PNG', 'Lossless', 'Graphics & logos', '⭐⭐⭐⭐⭐ (no loss)'],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: '10px 14px', opacity: j === 0 ? 1 : 0.75, fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TIPS */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>6 Tips to Compress Without Visible Quality Loss</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {tips.map((tip, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '16px 20px', borderLeft: '3px solid #818cf8' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>✓ {tip.title}</div>
              <div style={{ fontSize:'15px', opacity: 0.65 }}>{tip.desc}</div>
            </div>
          ))}
        </div>

        {/* QUALITY GUIDE */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>JPEG Quality Settings Guide</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px' }}>
          {[
            { range: '90–100%', label: 'Near-lossless', desc: 'Virtually identical to original. Large files. Use for printing or archiving.' },
            { range: '75–89%', label: 'Recommended for web', desc: 'Invisible quality loss on most screens. Good balance of quality and size.' },
            { range: '60–74%', label: 'Visible on close inspection', desc: 'Slight loss in gradients and fine details. Acceptable for thumbnails and previews.' },
            { range: 'Below 60%', label: 'Noticeable artifacts', desc: 'Block artifacts visible. Use only when file size target is strict (under 30–50KB).' },
          ].map(({ range, label, desc }, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '12px 16px' }}>
              <div style={{ fontWeight: 800, fontSize:'15px', color: ['#22d3ee', '#a5b4fc', '#fbbf24', '#f87171'][i], flexShrink: 0, minWidth: '70px' }}>{range}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize:'15px', marginBottom: '2px' }}>{label}</div>
                <div style={{ fontSize: '13px', opacity: 0.6 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>FAQ</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '16px 20px' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px', color: '#a5b4fc' }}>Q: {item.q}</div>
              <div style={{ fontSize:'15px', opacity: 0.7 }}>{item.a}</div>
            </div>
          ))}
        </div>

        {/* RELATED */}
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>Related Tools & Guides</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {[
            { href: '/', label: '🎯 Free Image Compressor' },
            { href: '/compress-without-uploading', label: '🔒 No-Upload Tool' },
            { href: '/bulk-image-compressor', label: '📦 Bulk Compressor' },
            { href: '/blog/webp-vs-jpeg-2026', label: '📖 WebP vs JPEG 2026' },
            { href: '/blog/best-image-formats', label: '📖 Best Image Formats' },
            { href: '/blog/ecommerce-image-optimization', label: '📖 eCommerce Optimization' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize:'15px', fontWeight: 600 }}>
              {label}
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
