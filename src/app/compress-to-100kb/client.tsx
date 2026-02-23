"use client";
import Link from 'next/link';

const tips = [
  { title: 'Use WebP for best quality at 100KB', desc: 'WebP achieves better visual quality than JPEG at the same file size. For most photos, WebP at 100KB looks noticeably sharper than JPEG at 100KB.' },
  { title: 'Resize large images first', desc: 'A 4000px photo compressed to 100KB will look worse than a 1200px photo at 100KB. Resize dimensions to your actual display size before targeting 100KB.' },
  { title: '100KB works for most web use cases', desc: '100KB is a good balance for blog images, product thumbnails, and social media previews. It loads fast on mobile while keeping acceptable visual quality.' },
  { title: 'Use Exact KB Mode', desc: 'Switch to "🎯 Exact KB Mode" and type 100. The tool automatically finds the right compression level to hit exactly 100KB.' },
];

const faq = [
  { q: 'How do I compress an image to exactly 100KB?', a: 'Open compressto20kb.com, upload your image, switch to Exact KB Mode, enter 100, and click Compress. The tool targets exactly 100KB automatically.' },
  { q: 'Is 100KB good quality for web images?', a: 'Yes — for most thumbnails, blog photos, and product images displayed at 400–800px width, 100KB provides excellent quality. For large hero images shown at full width, consider 200–500KB.' },
  { q: 'What formats compress best to 100KB?', a: 'WebP and AVIF give the best quality at 100KB. JPEG is universally compatible. PNG is rarely suitable for 100KB targets unless the image is a simple graphic.' },
  { q: 'Can I compress multiple images to 100KB at once?', a: 'Yes — upload up to 50 images and use Exact KB Mode set to 100KB. All images will be compressed to 100KB and can be downloaded as a ZIP file.' },
  { q: 'Will my image upload to a server?', a: 'No — all compression runs in your browser. Your files never leave your device.' },
];

export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px', opacity: 0.75 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/compress-to-200kb" style={{ color: 'white', textDecoration: 'none' }}>200KB Tool</Link>
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        </div>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '12px' }}>
          <Link href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</Link> → Compress to 100KB
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1.2, marginBottom: '12px' }}>
          Compress Image to <span style={{ color: '#818cf8' }}>100KB</span> Free Online
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>
          Compress any image to exactly 100KB — free, instant, and 100% private. No upload to server. Works for JPEG, PNG, WebP, HEIC.
        </p>
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Compress to Exactly 100KB — Free</div>
          <p style={{ fontSize: '13px', opacity: 0.65, marginBottom: '16px' }}>No upload · Instant · JPEG, PNG, WebP, HEIC · Bulk up to 50 images</p>
          <Link href="/?mode=exactkb&target=100" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open 100KB Compressor
          </Link>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Tips for Best Results at 100KB</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {tips.map((tip, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '16px 20px', borderLeft: '3px solid #818cf8' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>✓ {tip.title}</div>
              <div style={{ fontSize: '13px', opacity: 0.65 }}>{tip.desc}</div>
            </div>
          ))}
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>FAQ</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '16px 20px' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px', color: '#a5b4fc' }}>Q: {item.q}</div>
              <div style={{ fontSize: '13px', opacity: 0.7 }}>{item.a}</div>
            </div>
          ))}
        </div>
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>Related Tools</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {[
            { href: '/', label: '🎯 Compress to 20KB' },
            { href: '/compress-to-50kb', label: '📄 Compress to 50KB' },
            { href: '/compress-to-200kb', label: '📁 Compress to 200KB' },
            { href: '/bulk-image-compressor', label: '📦 Bulk Compressor' },
            { href: '/compress-for-shopify', label: '🛍️ Shopify Tool' },
            { href: '/compress-for-email', label: '📧 Email Tool' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
