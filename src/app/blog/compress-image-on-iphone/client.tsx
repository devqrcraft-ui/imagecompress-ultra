"use client";
import Link from 'next/link';

const methods = [
  { title: 'Browser-based tool (best option)', desc: 'Open Chrome or Edge on Windows 11, go to compressto20kb.com. Upload your image — it compresses locally in your browser. No software install, no upload to server, completely free.' },
  { title: 'Windows built-in Paint (basic)', desc: 'Open Paint, load the image, go to File → Save As, choose JPEG, and adjust quality. This gives limited control — you cannot target an exact KB size, but it works for basic needs.' },
  { title: 'Photos app resize (dimensions only)', desc: 'Open an image in the Windows 11 Photos app, click the three-dot menu → Resize. This only reduces dimensions, not compression quality — file size reduction is limited.' },
  { title: 'Right-click Send To (email resize)', desc: 'Right-click an image in File Explorer → Send To → Mail recipient. Windows offers Small/Medium/Large resize options. This is very basic and does not allow exact KB targeting.' },
];

const faq = [
  { q: 'How do I compress an image on Windows 11 without any software?', a: 'Open Edge or Chrome, go to compressto20kb.com, upload your image and compress. Everything runs in your browser — no download, no install required.' },
  { q: 'Can Windows 11 compress images natively?', a: 'Windows 11 has very limited native image compression. Paint can save as JPEG with some quality reduction, and the Photos app can resize dimensions. For precise KB-level compression, a browser-based tool gives much better results.' },
  { q: 'What is the fastest way to reduce image file size on Windows?', a: 'Using compressto20kb.com in your browser is the fastest — upload, pick a target size, compress, done in under 10 seconds. No installation required.' },
  { q: 'How do I compress multiple images at once on Windows 11?', a: 'On compressto20kb.com you can upload up to 50 images at once and download them all as a ZIP file. It is significantly faster than processing images one by one.' },
  { q: 'Does compressing images on Windows reduce quality?', a: 'All lossy compression (JPEG, WebP) reduces some quality to save space. Our tool includes a Before/After preview slider so you can see the result and adjust quality before downloading.' },
  { q: 'Can I compress a PNG to under 100KB on Windows?', a: 'Yes — PNG compression is limited, but converting to JPEG or WebP while compressing can easily bring most images under 100KB. Use our Exact KB Mode and select JPEG or WebP as the output format.' },
];


const schemaData = {
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.compressto20kb.com"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.compressto20kb.com/blog"},
      {"@type": "ListItem", "position": 3, "name": "compress image on iphone", "item": "https://www.compressto20kb.com/blog/compress-image-on-iphone"}
    ]
  }
};

export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData.breadcrumb)}} />


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
          <Link href="/blog" style={{ color: '#818cf8', textDecoration: 'none' }}>Blog</Link> → Compress Images on Windows 11
        </div>

        {/* HERO */}
        <h1 style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1.2, marginBottom: '12px' }}>
          How to Compress Images on <span style={{ color: '#818cf8' }}>Windows 11</span> — Free, No Software Install
        </h1>
        <p style={{fontSize:'13px',color:'rgba(200,208,231,0.55)',marginBottom:'16px',marginTop:'4px'}}>Last updated May 2026 &nbsp;·&nbsp; By Ethan Blake &nbsp;·&nbsp; 5 min read</p>
                <div className="answer-first" style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:'10px',padding:'16px 20px',marginBottom:'20px'}}><p style={{margin:0,fontSize:'15px',lineHeight:1.75,color:'#c8d0e7'}}><strong style={{color:'#818cf8'}}>Quick answer:</strong> Use our free compressor above — compress any image to your target size in seconds, directly in your browser. No upload, no account, no watermark. Supports JPEG, PNG, WebP, and AVIF.</p></div><div style={{background:'rgba(15,23,42,0.6)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'10px',padding:'16px 20px',marginBottom:'24px'}}><img src="/images/blog/compress.svg" alt="compress image on iphone — compressto20kb.com" width={800} height={420} style={{width:'100%',height:'auto',borderRadius:'8px',margin:'24px 0'}} loading="lazy" /><p style={{fontSize:'13px',fontWeight:800,color:'#818cf8',marginBottom:'10px',marginTop:0}}>Key Takeaways</p><ul style={{margin:0,paddingLeft:'18px',color:'#c8d0e7',fontSize:'14px',lineHeight:1.85}}><li>All compression happens <strong style={{color:'#fff'}}>in your browser</strong> — images never leave your device</li><li>Supports <strong style={{color:'#fff'}}>JPEG, PNG, WebP, AVIF</strong></li><li>WebP saves <strong style={{color:'#fff'}}>25–50%</strong> vs JPEG at same quality</li><li>No file size limit, 100% free</li></ul></div>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '8px' }}>
          Windows 11 has very limited built-in image compression tools. This guide covers the fastest methods to reduce image file size on any Windows PC — including a browser-based option that works in under 10 seconds without installing anything.
        </p>
        <div style={{ fontSize:'15px', opacity: 0.45, marginBottom: '32px' }}>Updated February 2026 · Works on Windows 10 and Windows 11</div>

        {/* CTA */}
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>💻 Compress Images on Windows — Free in Chrome or Edge</div>
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>No install · Exact KB targeting · Bulk up to 50 images · 100% private</p>
          <Link href="/" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open in Chrome / Edge
          </Link>
        </div>

        {/* COMPARISON TABLE */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Methods Compared</h2>
        <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize:'15px' }}>
            <thead>
              <tr style={{ background: 'rgba(129,140,248,0.15)' }}>
                {['Method', 'Exact KB?', 'Bulk?', 'Install needed?', 'Best for'].map((h) => (
                  <th key={h} style={{ padding: '10px 14px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)', fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['compressto20kb.com', '✅ Yes', '✅ 50 files', '❌ No', 'All use cases'],
                ['Windows Paint', '❌ No', '❌ No', '❌ Built-in', 'Basic JPEG save'],
                ['Photos app', '❌ No', '❌ No', '❌ Built-in', 'Resize only'],
                ['Send To Mail', '❌ No', '❌ No', '❌ Built-in', 'Email only'],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: i === 0 ? 'rgba(129,140,248,0.07)' : 'transparent' }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: '10px 14px', opacity: j === 0 ? 1 : 0.75, fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* STEPS */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Step-by-Step: Browser Method (Fastest)</h2>
        {[
          { step: '1', title: 'Open Chrome or Edge', desc: 'Both browsers work. Go to compressto20kb.com — no login, no setup.' },
          { step: '2', title: 'Drag images from File Explorer', desc: 'Open File Explorer, find your images, drag them directly into the browser tab. Or click to browse.' },
          { step: '3', title: 'Select format and mode', desc: 'Choose JPEG or WebP for smallest size. Switch to "Exact KB Mode" if you need a specific size like 100KB or 200KB.' },
          { step: '4', title: 'Click Compress All', desc: 'Processing is instant — images are compressed in your browser, no upload needed.' },
          { step: '5', title: 'Download as ZIP', desc: 'Click "ZIP All" to download all compressed images in one file. Open the ZIP directly in Windows 11 File Explorer — no WinZip needed.' },
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
        <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '40px 0 16px' }}>All Windows 11 Compression Methods</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {methods.map((m, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '16px 20px', borderLeft: `3px solid ${i === 0 ? '#22d3ee' : '#e2e8f0'}` }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{i === 0 ? '⭐ ' : ''}{m.title}</div>
              <div style={{ fontSize:'15px', opacity: 0.65 }}>{m.desc}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <blockquote style={{borderLeft:'3px solid #818cf8',paddingLeft:'16px',margin:'24px 0',color:'rgba(200,208,231,0.75)',fontSize:'14px',fontStyle:'italic'}}>
          "Compress images to the smallest possible file size without sacrificing quality." — <a href="https://developers.google.com/speed/docs/insights/OptimizeImages" rel="nofollow" target="_blank" style={{color:'#818cf8'}}>Google PageSpeed Insights</a>
        </blockquote>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>FAQ — Compress Images on Windows 11</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '16px 20px' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px', color: '#818cf8' }}>Q: {item.q}</div>
              <div style={{ fontSize:'15px', opacity: 0.7 }}>{item.a}</div>
            </div>
          ))}
        </div>

        {/* RELATED */}
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>Related Tools & Guides</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {[
            { href: '/', label: '🎯 Compress to Exact KB' },
            { href: '/bulk-image-compressor', label: '📦 Bulk Compressor' },
            { href: '/compress-to-100kb', label: '📁 Compress to 100KB' },
            { href: '/compress-to-200kb', label: '📁 Compress to 200KB' },
            { href: '/blog/best-image-compressor-for-mac', label: '📖 Best Compressor for Mac' },
            { href: '/blog/webp-vs-jpeg-2026', label: '📖 WebP vs JPEG Guide' },
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
