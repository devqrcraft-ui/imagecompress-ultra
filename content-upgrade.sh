#!/bin/bash
set -e
echo "🚀 Upgrading 100KB and 200KB pages..."

# ============================================================
# COMPRESS TO 100KB — full content upgrade
# ============================================================
cat > src/app/compress-to-100kb/client.tsx << 'EOF'
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
EOF

# ============================================================
# COMPRESS TO 200KB — full content upgrade
# ============================================================
cat > src/app/compress-to-200kb/client.tsx << 'EOF'
"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const uses = [
  { icon: '🏛️', title: 'USCIS & Visa Forms', desc: 'USCIS forms N-400, DS-160, I-485 all require photos under 240KB. Compress to 200KB to be safely under the limit.' },
  { icon: '🛍️', title: 'E-Commerce Secondary Images', desc: 'Product detail images on Shopify, WooCommerce, and Squarespace benefit from 200KB — fast loading with great quality.' },
  { icon: '📰', title: 'Blog & Editorial Images', desc: 'Article images at 200KB load fast on mobile while retaining sharp detail for 1200px wide layouts.' },
  { icon: '🪪', title: 'US Passport Online Renewal', desc: 'US passport online renewal requires a JPEG under 240KB. 200KB is the ideal safe target.' },
  { icon: '💼', title: 'LinkedIn & Professional Profiles', desc: 'Professional headshots and cover images at 200KB look crisp on LinkedIn, Indeed, and company websites.' },
  { icon: '📋', title: 'Online Applications & Forms', desc: 'Job applications, academic forms, and immigration portals typically accept images up to 200-240KB.' },
];
const faq = [
  { q: 'How do I compress an image to 200KB?', a: 'Upload your image to our free tool, switch to "Exact KB Mode", type 200, select JPEG format, and click Compress. Your image will be compressed to under 200KB in seconds.' },
  { q: 'Why 200KB specifically for USCIS forms?', a: 'USCIS requires photos under 240KB for online forms like N-400, DS-160, and I-485. Compressing to 200KB gives you a safe buffer — 40KB under the limit — so your submission is never rejected for file size.' },
  { q: 'Is 200KB good quality for photos?', a: 'Yes — 200KB JPEG is excellent quality for most uses. At standard photo dimensions (600×600 to 1200×900px), a 200KB JPEG looks nearly indistinguishable from the original to the naked eye.' },
  { q: 'What is the difference between 200KB JPEG and 200KB WebP?', a: 'At 200KB, WebP will look noticeably sharper than JPEG because WebP is a more efficient format. If your use case accepts WebP (websites, apps), choose WebP. For government forms, always use JPEG.' },
  { q: 'Can I compress a photo larger than 10MB to 200KB?', a: 'Yes — our tool can compress any image size down to 200KB. A 10MB smartphone photo can be compressed to 200KB while retaining clear facial detail and color accuracy.' },
  { q: 'Does my photo get uploaded when I compress it?', a: 'No. All compression happens inside your browser using JavaScript. Your photo never leaves your device. This makes our tool completely safe for passport photos, ID documents, and sensitive images.' },
  { q: 'Can I compress multiple photos to 200KB at once?', a: 'Yes — upload up to 50 images at once and compress them all to 200KB in one batch. Download as individual files or as a single ZIP.' },
];
const stats = [
  { value: '200KB', label: 'Target size' },
  { value: 'JPEG/WebP', label: 'Best formats' },
  { value: '50 files', label: 'Batch limit' },
  { value: '100%', label: 'Private' },
];
export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px', opacity: 0.75 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/compress-to-100kb" style={{ color: 'white', textDecoration: 'none' }}>100KB</Link>
          <Link href="/compress-to-50kb" style={{ color: 'white', textDecoration: 'none' }}>50KB</Link>
          <Link href="/compress-for-uscis" style={{ color: 'white', textDecoration: 'none' }}>USCIS</Link>
        </div>
      </nav>

      <div style={{ textAlign: 'center', padding: '48px 16px 24px' }}>
        <div style={{ display: 'inline-block', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '10px', padding: '6px 16px', fontSize: '13px', marginBottom: '20px', color: '#fca5a5' }}>
          ✅ Ideal for USCIS · DS-160 · US Passport — requires under 240KB
        </div>
        <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.1 }}>
          Compress Image to <span style={{ color: '#818cf8' }}>200KB</span> Free
        </h1>
        <p style={{ fontSize: '17px', opacity: 0.65, maxWidth: '620px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Reduce any photo to exactly 200KB — the perfect size for USCIS forms, visa applications, e-commerce, and professional use. No upload, 100% private, instant results.
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
        <CompressorWidget defaultMode="exactkb" defaultTargetKB={200} defaultFormat="jpeg" />
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 16px 40px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '20px' }}>When Do You Need 200KB Images?</h2>
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
            {([['/', '20KB'], ['/compress-to-50kb', '50KB'], ['/compress-to-100kb', '100KB'], ['/compress-for-uscis', 'USCIS'], ['/compress-image-for-visa', 'Visa'], ['/compress-passport-photo-usa', 'US Passport']] as [string, string][]).map(([href, label]) => (
              <Link key={href} href={href} style={{ color: '#a5b4fc', textDecoration: 'none', background: 'rgba(99,102,241,0.1)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
EOF

echo ""
echo "✅ Pages upgraded!"
echo ""
echo "  compress-to-100kb — added: stats, 6 use cases, 6 FAQ, privacy badge"
echo "  compress-to-200kb — added: USCIS badge, stats, 6 use cases, 7 FAQ"
echo ""
echo "Run:"
echo "  git add . && git commit -m 'upgrade 100kb and 200kb pages with full content' && git push"
