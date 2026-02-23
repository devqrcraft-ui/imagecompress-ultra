"use client";
import Link from 'next/link';

const faq = [
  { q: 'How do I compress an image to exactly 200KB?', a: 'Open compressto20kb.com, upload your image, switch to Exact KB Mode, enter 200, and click Compress. The tool targets exactly 200KB automatically.' },
  { q: 'What is 200KB good for?', a: '200KB is ideal for blog post images, email attachments, and eCommerce thumbnails. It offers great quality while loading fast on mobile connections.' },
  { q: 'Can I compress a PNG to 200KB?', a: 'Yes — but converting to JPEG or WebP gives better visual quality at 200KB than PNG. Use the format selector to switch output format.' },
  { q: 'Can I bulk compress to 200KB?', a: 'Yes — upload up to 50 images, set Exact KB Mode to 200, and download all as ZIP.' },
  { q: 'Is it free?', a: 'Yes — completely free, no signup, no limits.' },
];

export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px', opacity: 0.75 }}>
          <Link href="/compress-to-100kb" style={{ color: 'white', textDecoration: 'none' }}>100KB Tool</Link>
          <Link href="/compress-to-500kb" style={{ color: 'white', textDecoration: 'none' }}>500KB Tool</Link>
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        </div>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '12px' }}>
          <Link href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</Link> → Compress to 200KB
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1.2, marginBottom: '12px' }}>
          Compress Image to <span style={{ color: '#818cf8' }}>200KB</span> Free Online
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>
          Compress any image to exactly 200KB — free, instant, no upload. Perfect for blog images, email attachments, and eCommerce product photos.
        </p>
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Compress to Exactly 200KB — Free</div>
          <p style={{ fontSize: '13px', opacity: 0.65, marginBottom: '16px' }}>No upload · Instant · JPEG, PNG, WebP, HEIC</p>
          <Link href="/?mode=exactkb&target=200" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open 200KB Compressor
          </Link>
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {[
            { href: '/', label: '🎯 Compress to 20KB' },
            { href: '/compress-to-100kb', label: '📁 Compress to 100KB' },
            { href: '/compress-to-500kb', label: '📁 Compress to 500KB' },
            { href: '/bulk-image-compressor', label: '📦 Bulk Compressor' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
