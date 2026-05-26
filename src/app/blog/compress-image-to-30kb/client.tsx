"use client";
import Link from 'next/link';

const methods = [
  { title: 'Use compressto20kb.com in Safari (recommended)', desc: 'Open Safari on your iPhone, go to compressto20kb.com, upload your photo from Camera Roll. The tool compresses it in Safari — nothing is uploaded anywhere. Download the compressed file directly to your iPhone.' },
  { title: 'Use the Files app to check size first', desc: 'Before compressing, open the Files app, find your photo, press and hold → Get Info to see the current file size. This helps you know what target KB to aim for.' },
  { title: 'Convert HEIC to JPEG while compressing', desc: 'iPhone saves photos in HEIC format by default. Our tool automatically converts HEIC to JPEG or WebP while compressing — no separate converter needed.' },
  { title: 'Share directly after compressing', desc: 'After downloading the compressed image, tap the Share button in Safari Downloads to send it directly via email, iMessage, or upload to a portal — without going through Photos.' },
];

const faq = [
  { q: 'Do I need to install an app to compress photos on iPhone?', a: 'No — compressto20kb.com works fully in Safari on iPhone. No app download, no App Store, no signup required. It uses your browser to process images locally.' },
  { q: 'Can I compress HEIC photos from my iPhone Camera Roll?', a: 'Yes — our tool supports HEIC and HEIF files natively. Your iPhone photos are automatically converted and compressed in one step.' },
  { q: 'Will compressed photos be saved to my Camera Roll?', a: 'They will be saved to your iPhone Downloads folder via Safari. You can then move them to Photos if needed using the Files app.' },
  { q: 'How do I compress a photo to send in an email on iPhone?', a: 'Open compressto20kb.com in Safari, upload the photo, set a target size (50KB–100KB works well for email), compress and download. Then attach the file from Downloads when composing your email.' },
  { q: 'What is the best format for compressed iPhone photos?', a: 'JPEG is the most compatible for sharing and uploading. WebP is smaller but not accepted everywhere. Use JPEG when in doubt, especially for government forms or job portals.' },
  { q: 'Can I compress multiple photos at once on iPhone?', a: 'Yes — tap and select up to 50 photos when uploading in Safari. Our bulk compressor processes all of them and lets you download as a ZIP file.' },
];

export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      {/* NAV */}
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize:'15px', opacity: 0.75 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/bulk-image-compressor" style={{ color: 'white', textDecoration: 'none' }}>Bulk Compress</Link>
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>

        {/* BREADCRUMB */}
        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}>
          <Link href="/blog" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Blog</Link> → Compress Images on iPhone
        </div>

        {/* HERO */}
        <h1 style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1.2, marginBottom: '12px' }}>
          How to Compress Images on <span style={{ color: '#818cf8' }}>iPhone</span> — Free, No App Needed
        </h1>
                <div className="answer-first" style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:'10px',padding:'16px 20px',marginBottom:'20px'}}><p style={{margin:0,fontSize:'15px',lineHeight:1.75,color:'#c8d0e7'}}><strong style={{color:'#818cf8'}}>Quick answer:</strong> Use our free compressor above — compress any image to your target size in seconds, directly in your browser. No upload, no account, no watermark. Supports JPEG, PNG, WebP, and AVIF.</p></div><div style={{background:'rgba(15,23,42,0.6)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'10px',padding:'16px 20px',marginBottom:'24px'}}><p style={{fontSize:'13px',fontWeight:800,color:'#818cf8',marginBottom:'10px',marginTop:0}}>Key Takeaways</p><ul style={{margin:0,paddingLeft:'18px',color:'#c8d0e7',fontSize:'14px',lineHeight:1.85}}><li>All compression happens <strong style={{color:'#fff'}}>in your browser</strong> — images never leave your device</li><li>Supports <strong style={{color:'#fff'}}>JPEG, PNG, WebP, AVIF</strong></li><li>WebP saves <strong style={{color:'#fff'}}>25–50%</strong> vs JPEG at same quality</li><li>No file size limit, 100% free</li></ul></div>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '8px' }}>
          iPhone photos are typically 3–8MB each — too large for most forms, portals, and email attachments. Here's how to compress them instantly in Safari without installing any app.
        </p>
        <div style={{ fontSize:'15px', opacity: 0.45, marginBottom: '32px' }}>Updated February 2026 · Works on iPhone iOS 15+</div>

        {/* CTA */}
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>📱 Compress iPhone Photos — Free in Safari</div>
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>Supports HEIC, JPEG, PNG · No upload · No app needed · Works on all iPhones</p>
          <Link href="/" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open in Safari Now
          </Link>
        </div>

        {/* QUICK STEPS */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Quick Steps (30 seconds)</h2>
        {[
          { step: '1', title: 'Open Safari on your iPhone', desc: 'Go to compressto20kb.com in Safari. Tap the upload zone or the browse button.' },
          { step: '2', title: 'Select photos from Camera Roll', desc: 'Tap "Photo Library" when the picker appears. Select one or multiple photos.' },
          { step: '3', title: 'Choose your target size', desc: 'For government forms use 20KB. For email use 100–200KB. For general sharing use Quality Mode at 80%.' },
          { step: '4', title: 'Tap Compress', desc: 'Processing happens instantly in Safari — no upload, no waiting.' },
          { step: '5', title: 'Download or Share', desc: 'Tap Save to download to your Files app, or tap Share to send directly via email or iMessage.' },
        ].map(({ step, title, desc }) => (
          <div key={step} style={{ display: 'flex', gap: '16px', marginBottom: '16px', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(129,140,248,0.2)', border: '1px solid rgba(129,140,248,0.4)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '15px', flexShrink: 0 }}>{step}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>{title}</div>
              <div style={{ fontSize:'15px', opacity: 0.65 }}>{desc}</div>
            </div>
          </div>
        ))}

        {/* METHODS */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '40px 0 16px' }}>Tips for Compressing on iPhone</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {methods.map((m, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '16px 20px', borderLeft: '3px solid #818cf8' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>✓ {m.title}</div>
              <div style={{ fontSize:'15px', opacity: 0.65 }}>{m.desc}</div>
            </div>
          ))}
        </div>

        {/* HEIC NOTE */}
        <div style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.25)', borderRadius: '12px', padding: '18px 20px', marginBottom: '40px' }}>
          <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px', color: '#22d3ee' }}>📌 About HEIC on iPhone</div>
          <p style={{ fontSize:'15px', opacity: 0.75, margin: 0 }}>
            iPhone cameras save photos in HEIC format to save storage space. Many websites, forms, and Windows PCs don't accept HEIC files. Our tool automatically converts HEIC to JPEG while compressing — so your photo becomes universally compatible in one step.
          </p>
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>FAQ — iPhone Image Compression</h2>
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
            { href: '/', label: '🎯 Compress to Exact KB' },
            { href: '/compress-to-50kb', label: '📄 Compress to 50KB' },
            { href: '/compress-passport-photo', label: '🛂 Passport Photo' },
            { href: '/compress-for-email', label: '📧 Compress for Email' },
            { href: '/bulk-image-compressor', label: '📦 Bulk Compressor' },
            { href: '/blog/best-image-compressor-for-mac', label: '📖 Best Compressor for Mac' },
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
