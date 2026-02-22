"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const uses = [
  { icon: '📧', title: 'Email Attachments', desc: 'Most email clients handle 100KB images well. Perfect for newsletters and client emails without bloating the inbox.' },
  { icon: '🌐', title: 'Website Thumbnails', desc: 'Blog post thumbnails, product previews, and sidebar images at 100KB load fast on mobile and desktop.' },
  { icon: '👤', title: 'Profile Photos', desc: 'LinkedIn, forums, job portals, and HR systems often require profile photos under 100KB.' },
  { icon: '🪪', title: 'Government Portals', desc: 'Many US and international government upload forms accept photos up to 100KB for ID and document submissions.' },
  { icon: '🛒', title: 'Marketplace Listings', desc: 'Secondary images on eBay, Craigslist, and Facebook Marketplace benefit from fast-loading 100KB photos.' },
  { icon: '📱', title: 'Mobile App Uploads', desc: 'Many mobile apps limit profile and content images to 100KB for bandwidth and storage efficiency.' },
];
const faq = [
  { q: 'How do I compress an image to exactly 100KB?', a: 'Upload your image, switch to "Exact KB Mode" and type 100. The tool automatically adjusts quality until your file hits under 100KB. Works for JPEG, PNG, WebP, and HEIC.' },
  { q: 'Will a 100KB photo still look good?', a: 'Yes — for most use cases. A 100KB JPEG looks sharp at standard web sizes (up to about 1000×750px). WebP format looks even better at the same file size. Use the before/after preview to check quality before downloading.' },
  { q: 'What is the difference between 100KB and 50KB compression?', a: '100KB gives noticeably better quality than 50KB — less visible compression artifacts, better color accuracy. Use 50KB only when specifically required; 100KB is the better balance for most purposes.' },
  { q: 'Can I compress a PNG to under 100KB?', a: 'Yes. PNG files are often much larger than JPEG at the same visual quality. Our tool can compress PNG to 100KB, or convert PNG to JPEG/WebP for even smaller output.' },
  { q: 'Does this work for HEIC photos from iPhone?', a: 'Yes — HEIC and HEIF files from iPhone are supported. They are processed entirely in your browser without uploading anywhere.' },
  { q: 'Can I compress multiple images to 100KB at once?', a: 'Yes — upload up to 50 images and compress them all to 100KB in one batch. Download them individually or all as a ZIP file.' },
];
const stats = [
  { value: '100KB', label: 'Target size' },
  { value: '<5s', label: 'Processing time' },
  { value: '50 files', label: 'Batch limit' },
  { value: '0 uploads', label: 'Server uploads' },
];
export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px', opacity: 0.75 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/compress-to-50kb" style={{ color: 'white', textDecoration: 'none' }}>50KB</Link>
          <Link href="/compress-to-200kb" style={{ color: 'white', textDecoration: 'none' }}>200KB</Link>
          <Link href="/bulk-image-compressor" style={{ color: 'white', textDecoration: 'none' }}>Bulk</Link>
        </div>
      </nav>

      <div style={{ textAlign: 'center', padding: '48px 16px 24px' }}>
        <div style={{ display: 'inline-block', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '10px', padding: '6px 16px', fontSize: '13px', marginBottom: '20px', color: '#a5b4fc' }}>
          🔒 Files never leave your browser · 100% Private
        </div>
        <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.1 }}>
          Compress Image to <span style={{ color: '#818cf8' }}>100KB</span> Free
        </h1>
        <p style={{ fontSize: '17px', opacity: 0.65, maxWidth: '600px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Reduce any photo to exactly 100KB — no upload, no account, no watermark. Perfect quality for email, web, and government portals. Works on any device.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '12px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: 900, color: '#a5b4fc' }}>{s.value}</div>
              <div style={{ fontSize: '11px', opacity: 0.5, marginTop: '2px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 16px 40px' }}>
        <CompressorWidget defaultMode="exactkb" defaultTargetKB={100} defaultFormat="jpeg" />
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 16px 40px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '20px' }}>When Do You Need 100KB Images?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '12px', marginBottom: '40px' }}>
          {uses.map((u, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{u.icon}</div>
              <strong style={{ fontSize: '14px', color: '#a5b4fc' }}>{u.title}</strong>
              <p style={{ fontSize: '12px', opacity: 0.6, margin: '6px 0 0', lineHeight: 1.5 }}>{u.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>Frequently Asked Questions</h2>
        {faq.map((f, i) => (
          <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px 16px', marginBottom: '8px', cursor: 'pointer' }}>
            <summary style={{ fontWeight: 700, fontSize: '14px', listStyle: 'none' }}>❓ {f.q}</summary>
            <p style={{ marginTop: '10px', fontSize: '13px', opacity: 0.7, lineHeight: 1.6 }}>{f.a}</p>
          </details>
        ))}

        <div style={{ marginTop: '32px', padding: '20px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px' }}>
          <div style={{ fontWeight: 700, marginBottom: '12px', fontSize: '14px' }}>🔗 Also Try</div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize: '13px' }}>
            {([['/', '20KB'], ['/compress-to-50kb', '50KB'], ['/compress-to-200kb', '200KB'], ['/bulk-image-compressor', 'Bulk'], ['/compress-for-uscis', 'USCIS'], ['/compress-for-email', 'Email']] as [string, string][]).map(([href, label]) => (
              <Link key={href} href={href} style={{ color: '#a5b4fc', textDecoration: 'none', background: 'rgba(99,102,241,0.1)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
