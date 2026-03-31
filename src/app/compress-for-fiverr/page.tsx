
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Will my images be uploaded to a server when compressing?","acceptedAnswer":{"@type":"Answer","text":"No. All compression runs locally in your browser using WebAssembly. Your files never leave your device — unlike TinyPNG, 11zon, and Cloudinary which upload files to their servers."}},{"@type":"Question","name":"Can I compress multiple images at once?","acceptedAnswer":{"@type":"Answer","text":"Yes — upload up to 50 images at once and compress them all in one batch. Download individually or as a ZIP. All processing stays in your browser — free, no signup required."}},{"@type":"Question","name":"What formats are supported?","acceptedAnswer":{"@type":"Answer","text":"JPEG, PNG, WebP, AVIF, and HEIC (iPhone photos) are all supported as input. Output can be WebP, AVIF, JPEG, or PNG. HEIC files from iPhone are automatically converted in your browser."}},{"@type":"Question","name":"Is this tool free?","acceptedAnswer":{"@type":"Answer","text":"Yes — completely free with no limits, no watermarks, no signup, and no daily quotas."}}]};
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Image for Fiverr — Free, No Upload | CompressTo20KB',
  description: 'Compress images for Fiverr free in your browser. No upload, no signup. Resize to exact KB for Fiverr requirements instantly.',
  keywords: ['compress image for fiverr', 'fiverr image size', 'fiverr photo requirements', 'compress for fiverr free'],
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-fiverr' },
  openGraph: {
    title: 'Compress Image for Fiverr — Free & Private',
    description: 'Browser-based compression for Fiverr. Files never leave your device.',
    url: 'https://compressto20kb.com/compress-for-fiverr',
  },
};

export default function CompressForFiverrPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>⚡ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize:'15px', opacity: 0.75 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        </div>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}><Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link> → Compress for Fiverr</div>
        <div style={{ display: 'inline-block', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '10px', padding: '6px 14px', fontSize: '12px', marginBottom: '16px' }}>🆓 Fiverr · Free Tool</div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>Compress Images for Fiverr<br/><span style={{ color: '#818cf8' }}>Free, Private & Instant</span></h1>
        <p style={{ fontSize: '16px', opacity: 0.65, marginBottom: '32px', lineHeight: 1.7 }}>Need to compress images for Fiverr? Our free browser-based tool compresses JPEG, PNG, WebP instantly — no upload required, no signup needed. Your files never leave your device.</p>

        <div style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '16px', padding: '24px', marginBottom: '32px', textAlign: 'center' }}>
          <p style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>Ready to compress for Fiverr?</p>
          <Link href="/" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '14px 32px', borderRadius: '10px', textDecoration: 'none', fontWeight: 700, fontSize: '16px' }}>⚡ Compress Now — Free</Link>
          <p style={{ fontSize: '12px', opacity: 0.5, marginTop: '8px' }}>🔒 Files never leave your browser</p>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Fiverr Image Requirements</h2>
        <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
          <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 2, opacity: 0.85, fontSize: '15px' }}>
            <li>Maximum file size: typically <strong>1MB–5MB</strong> depending on plan</li>
            <li>Recommended format: <strong>JPEG or PNG</strong></li>
            <li>Optimal resolution: <strong>1080×1080px</strong> to <strong>2048×2048px</strong></li>
            <li>For best results: compress to <strong>under 500KB</strong></li>
          </ul>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>How to Compress Images for Fiverr (3 Steps)</h2>
        <div style={{ display: 'grid', gap: '12px', marginBottom: '32px' }}>
          {[
            { n: '1', t: 'Upload Your Image', d: 'Drag & drop or click to select. Supports JPEG, PNG, WebP, HEIC up to 50MB.' },
            { n: '2', t: 'Set Target Size', d: 'Type your target KB — or use the Fiverr preset for instant optimization.' },
            { n: '3', t: 'Download Compressed File', d: 'Click download. Your optimized image is ready for Fiverr in seconds.' },
          ].map(s => (
            <div key={s.n} style={{ display: 'flex', gap: '16px', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ width: '32px', height: '32px', background: 'rgba(99,102,241,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>{s.n}</div>
              <div><strong>{s.t}</strong><br/><span style={{ opacity: 0.65, fontSize: '14px' }}>{s.d}</span></div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Why Use CompressTo20KB for Fiverr?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '12px', marginBottom: '32px' }}>
          {[
            { icon: '🔒', t: '100% Private', d: 'Files processed locally in your browser. Zero uploads.' },
            { icon: '🎯', t: 'Exact KB Control', d: 'Hit any file size target precisely.' },
            { icon: '⚡', t: 'Instant Results', d: 'No waiting, no queue, no server delays.' },
            { icon: '🆓', t: 'Always Free', d: 'No account, no subscription, no limits.' },
          ].map(f => (
            <div key={f.t} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
              <strong style={{ display: 'block', marginBottom: '4px' }}>{f.t}</strong>
              <span style={{ opacity: 0.65, fontSize:'15px' }}>{f.d}</span>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px', padding: '20px', marginBottom: '32px' }}>
          <h3 style={{ margin: '0 0 12px', fontSize: '16px' }}>Related Tools</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize:'15px' }}>
            {[
              { href: '/compress-for-shopify', label: 'Shopify' },
              { href: '/compress-for-etsy', label: 'Etsy' },
              { href: '/compress-for-instagram', label: 'Instagram' },
              { href: '/compress-for-amazon', label: 'Amazon' },
              { href: '/compress-for-linkedin', label: 'LinkedIn' },
              { href: '/compress-for-email', label: 'Email' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '6px', color: 'white', textDecoration: 'none' }}>Compress for {l.label}</Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>FAQ — Compress Images for Fiverr</h2>
          {[
            { q: 'Is this tool really free for Fiverr?', a: 'Yes, 100% free. No signup, no subscription, no hidden fees.' },
            { q: 'Does it upload my files to a server?', a: 'No. All compression happens locally in your browser. Your files never leave your device.' },
            { q: 'What image formats does it support?', a: 'JPEG, PNG, WebP, AVIF, HEIC — all major formats supported.' },
            { q: 'How small can I compress images for Fiverr?', a: 'You can compress to any target size — from 5KB to 5MB. Just type your desired file size.' },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '16px' }}>
              <strong style={{ display: 'block', marginBottom: '6px', fontSize: '15px' }}>Q: {f.q}</strong>
              <p style={{ margin: 0, opacity: 0.7, fontSize: '14px', lineHeight: 1.6 }}>A: {f.a}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px', padding: '32px', background: 'rgba(99,102,241,0.1)', borderRadius: '16px', border: '1px solid rgba(99,102,241,0.2)' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>Start Compressing for Fiverr Now</h2>
          <p style={{ opacity: 0.65, marginBottom: '20px' }}>Free, instant, private — no account needed</p>
          <Link href="/" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '16px 40px', borderRadius: '12px', textDecoration: 'none', fontWeight: 700, fontSize: '18px' }}>⚡ Compress Images Free</Link>
        </div>
      </div>
    </main>
  );
}
