"use client";
import Link from 'next/link';

const tips = [
  { title: 'Upload up to 50 images at once', desc: 'Drag and drop a folder or select multiple files. Our bulk compressor handles up to 50 images in a single batch — JPEG, PNG, WebP, AVIF, and HEIC all supported.' },
  { title: 'Use WebP for smallest output', desc: 'Selecting WebP as output format typically reduces file sizes 30–50% compared to JPEG at the same visual quality. All modern browsers support WebP.' },
  { title: 'Apply a preset for your platform', desc: 'Use the Shopify, Etsy, or Amazon preset to compress all images to platform-optimal settings in one click. No need to adjust each file manually.' },
  { title: 'Download all as ZIP', desc: 'After compressing, click "ZIP All" to download every compressed image in a single ZIP file. Windows 11 and macOS can open ZIP files without any extra software.' },
  { title: 'Nothing is uploaded to a server', desc: 'All compression happens in your browser. Your images never leave your device — safe for product photos, ID documents, and sensitive files.' },
];

const faq = [
  { q: 'How many images can I compress at once?', a: 'You can compress up to 50 images in a single batch. Each image is processed individually in your browser — the more powerful your device, the faster the batch completes.' },
  { q: 'Can I compress images of different formats in one batch?', a: 'Yes — you can mix JPEG, PNG, WebP, AVIF, and HEIC files in the same batch. All will be converted to your selected output format.' },
  { q: 'How do I download all compressed images at once?', a: 'Click the "ZIP All" button after compression completes. All compressed images are packaged into a single ZIP file for one-click download.' },
  { q: 'Is bulk image compression free?', a: 'Yes — fully free with no limits on file size or number of compressions. No account required.' },
  { q: 'Will all images have the same compression settings?', a: 'Yes — the same format, quality, and mode settings apply to all images in the batch. Use presets for platform-specific settings like Shopify or Amazon.' },
  { q: 'Does bulk compression work on mobile?', a: 'Yes — the bulk compressor works in Safari on iPhone and Chrome on Android. Processing speed depends on your device, but most modern phones handle 10–20 images quickly.' },
];

export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      {/* NAV */}
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize:'15px', opacity: 0.75 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/compress-to-100kb" style={{ color: 'white', textDecoration: 'none' }}>100KB Tool</Link>
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>

        {/* BREADCRUMB */}
        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}>
          <Link href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</Link> → Bulk Image Compressor
        </div>

        {/* HERO */}
        <h1 style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1.2, marginBottom: '12px' }}>
          Bulk Image Compressor — <span style={{ color: '#818cf8' }}>Compress 50 Photos at Once</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '8px' }}>
          Compress up to 50 images in a single batch — free, instant, and 100% private. Everything runs in your browser. Download all compressed images as a ZIP file in one click.
        </p>
        <div style={{ fontSize:'15px', opacity: 0.45, marginBottom: '32px' }}>No upload · No signup · No file size limit · JPEG, PNG, WebP, HEIC</div>

        {/* CTA */}
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>📦 Compress Up to 50 Images — Free</div>
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>Batch compress · Download as ZIP · 100% browser-based · No upload</p>
          <Link href="/" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open Bulk Compressor
          </Link>
        </div>

        {/* STEPS */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>How to Bulk Compress Images</h2>
        {[
          { step: '1', title: 'Select all images', desc: 'Click the upload zone and select multiple files, or drag a folder. Up to 50 images accepted per batch.' },
          { step: '2', title: 'Choose format and settings', desc: 'Pick output format (WebP recommended) and quality level, or choose a platform preset like Shopify or Amazon.' },
          { step: '3', title: 'Click Compress All', desc: 'All images are compressed simultaneously in your browser. A progress indicator shows status for each file.' },
          { step: '4', title: 'Download as ZIP', desc: 'Click "ZIP All" to package all compressed images into one ZIP file. Or download them individually.' },
        ].map(({ step, title, desc }) => (
          <div key={step} style={{ display: 'flex', gap: '16px', marginBottom: '16px', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(129,140,248,0.2)', border: '1px solid rgba(129,140,248,0.4)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '15px', flexShrink: 0 }}>{step}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>{title}</div>
              <div style={{ fontSize:'15px', opacity: 0.65 }}>{desc}</div>
            </div>
          </div>
        ))}

        {/* TIPS */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '40px 0 16px' }}>Tips for Best Results</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {tips.map((tip, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '16px 20px', borderLeft: '3px solid #818cf8' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>✓ {tip.title}</div>
              <div style={{ fontSize:'15px', opacity: 0.65 }}>{tip.desc}</div>
            </div>
          ))}
        </div>

        {/* USE CASES */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Who Uses Bulk Image Compression?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '40px' }}>
          {[
            { icon: '🛍️', title: 'eCommerce sellers', desc: 'Compress entire product catalogs before uploading to Shopify, Etsy, or Amazon.' },
            { icon: '📸', title: 'Photographers', desc: 'Batch resize and compress client galleries for web delivery.' },
            { icon: '🏢', title: 'Marketing teams', desc: 'Compress banner images, social media assets, and blog photos in bulk.' },
            { icon: '🖥️', title: 'Web developers', desc: 'Optimize all images in a project before deployment to improve PageSpeed scores.' },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '16px' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{title}</div>
              <div style={{ fontSize: '12px', opacity: 0.6 }}>{desc}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>FAQ — Bulk Image Compressor</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '16px 20px' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px', color: '#a5b4fc' }}>Q: {item.q}</div>
              <div style={{ fontSize:'15px', opacity: 0.7 }}>{item.a}</div>
            </div>
          ))}
        </div>

        {/* RELATED */}
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>Related Tools</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {[
            { href: '/', label: '🎯 Compress to Exact KB' },
            { href: '/compress-to-100kb', label: '📁 Compress to 100KB' },
            { href: '/compress-to-200kb', label: '📁 Compress to 200KB' },
            { href: '/compress-for-shopify', label: '🛍️ Shopify Compressor' },
            { href: '/compress-for-amazon', label: '📦 Amazon Compressor' },
            { href: '/compress-for-etsy', label: '🎨 Etsy Compressor' },
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
