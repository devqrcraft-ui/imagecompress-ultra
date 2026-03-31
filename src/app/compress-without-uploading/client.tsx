"use client";
import Link from 'next/link';

const faq = [
  { q: 'How can I compress an image without uploading it?', a: 'Our tool uses the Web APIs built into your browser (Canvas API, FileReader) to compress images entirely on your device. Nothing is sent to any server.' },
  { q: 'Is browser-based compression as good as server-based?', a: 'Yes — modern browsers support the same compression algorithms as server tools. You get the same quality reduction with zero privacy risk.' },
  { q: 'Is it safe for passport photos and ID documents?', a: 'Yes — your sensitive photos never leave your device. No server, no storage, no third-party access.' },
  { q: 'Does it work offline?', a: 'Once the page has loaded, compression works without an active internet connection. Your files are processed locally.' },
  { q: 'What formats are supported?', a: 'JPEG, PNG, WebP, AVIF, and HEIC/HEIF are all supported without any upload.' },
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
        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}>
          <Link href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</Link> → Compress Without Uploading
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1.2, marginBottom: '12px' }}>
          Compress Images <span style={{ color: '#818cf8' }}>Without Uploading</span> — 100% Private
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>
          Most image compressors upload your files to a server. Ours doesn't. Compression happens entirely in your browser — your images never leave your device.
        </p>
        <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '14px', padding: '20px', marginBottom: '32px' }}>
          {['No server upload ever', 'No account or signup', 'Files never stored anywhere', 'Works for passport photos, ID docs, sensitive images', 'GDPR compliant by design'].map((t, i) => (
            <div key={i} style={{ fontSize:'15px', padding: '4px 0', opacity: 0.85 }}>✅ {t}</div>
          ))}
        </div>
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🔒 Compress Without Upload — Free</div>
          <Link href="/" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open Private Compressor
          </Link>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>FAQ</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '16px 20px' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px', color: '#a5b4fc' }}>Q: {item.q}</div>
              <div style={{ fontSize:'15px', opacity: 0.7 }}>{item.a}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {[
            { href: '/compress-for-uscis', label: '🏛️ USCIS Tool' },
            { href: '/compress-passport-photo', label: '🛂 Passport Photo' },
            { href: '/bulk-image-compressor', label: '📦 Bulk Compressor' },
            { href: '/', label: '🎯 Compress to Exact KB' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize:'15px', fontWeight: 600 }}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
