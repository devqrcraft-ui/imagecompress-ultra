'use client';
import Link from 'next/link';

export default function InstagramPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f172a 100%)', fontFamily: 'Inter,-apple-system,sans-serif', color: 'white' }}>

      {/* HEADER */}
      <header style={{ background: '#0a0a14', borderBottom: '1px solid #1a1a2e', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px', position: 'sticky', top: 0, zIndex: 50 }}>
        <Link href="/" style={{ textDecoration: 'none', fontWeight: 800, fontSize: '18px', color: '#fff', letterSpacing: '-0.5px' }}>
          Compress<span style={{ color: '#22d3ee' }}>20KB</span>
        </Link>
        <nav style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
          {([['/?mode=quality', '🗜️ Compress'], ['/compress-for-shopify', '🛍️ Shopify'], ['/compress-passport-photo', '🪪 Passport'], ['/faq', 'FAQ']] as [string, string][]).map(([href, label]) => (
            <Link key={href} href={href} style={{ color: '#8888bb', textDecoration: 'none', fontSize: '12.5px', fontWeight: 500, padding: '5px 8px', borderRadius: '7px', whiteSpace: 'nowrap' }}>{label}</Link>
          ))}
        </nav>
        <Link href="/" style={{ background: 'linear-gradient(135deg,#6366f1,#22d3ee)', color: '#fff', fontSize:'15px', fontWeight: 800, padding: '9px 18px', borderRadius: '100px', whiteSpace: 'nowrap', textDecoration: 'none' }}>
          📦 Compress Now
        </Link>
      </header>

      {/* HERO */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 48px', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: 'linear-gradient(135deg,rgba(99,102,241,0.2),rgba(236,72,153,0.2))', border: '1px solid rgba(236,72,153,0.3)', borderRadius: '100px', padding: '6px 16px', fontSize:'15px', marginBottom: '24px', color: '#f9a8d4' }}>
          📸 Instagram Image Optimizer
        </div>
        <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '20px' }}>
          Compress Images for<br />
          <span style={{ background: 'linear-gradient(135deg,#f472b6,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Instagram</span> — Free Online
        </h1>
        <p style={{ fontSize: '18px', color: '#94a3b8', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 32px' }}>
          Resize and compress photos to Instagram-perfect dimensions. 1080px, sharp quality, smallest file size.{' '}
          <strong style={{ color: '#e2e8f0' }}>Files never leave your device.</strong>
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '40px' }}>
          {['✅ 1080px Square', '✅ Portrait 4:5', '✅ Stories 9:16', '✅ Reels', '✅ No Upload', '✅ 100% Free'].map(b => (
            <span key={b} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '6px 14px', fontSize:'15px', color: '#cbd5e1' }}>{b}</span>
          ))}
        </div>

        <Link href="/" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#f472b6,#a855f7)', color: '#fff', fontSize: '16px', fontWeight: 800, padding: '16px 40px', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 0 40px rgba(244,114,182,0.3)', marginBottom: '12px' }}>
          🚀 Open Instagram Compressor
        </Link>
        <div style={{ fontSize: '12px', color: '#e2e8f0' }}>Opens instantly · No signup · Completely free</div>
      </section>

      {/* SIZES GUIDE */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 64px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 800, textAlign: 'center', marginBottom: '32px' }}>
          Instagram Image Size Requirements 2025
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '14px' }}>
          {[
            { type: 'Square Post', size: '1080×1080', ratio: '1:1', tip: 'Standard feed post' },
            { type: 'Portrait Post', size: '1080×1350', ratio: '4:5', tip: 'Max feed space' },
            { type: 'Landscape', size: '1080×566', ratio: '1.91:1', tip: 'Wide format' },
            { type: 'Story / Reel', size: '1080×1920', ratio: '9:16', tip: 'Full screen' },
            { type: 'Profile Photo', size: '320×320', ratio: '1:1', tip: 'Shown at 110px' },
          ].map(item => (
            <div key={item.type} style={{ background: 'rgba(244,114,182,0.06)', border: '1px solid rgba(244,114,182,0.15)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '11px', color: '#f472b6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{item.type}</div>
              <div style={{ fontSize: '16px', fontWeight: 800, marginBottom: '4px' }}>{item.size}</div>
              <div style={{ fontSize: '11px', color: '#e2e8f0' }}>{item.ratio}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '6px' }}>{item.tip}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: 'rgba(0,0,0,0.3)', padding: '64px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '40px' }}>How to Compress Images for Instagram</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '24px' }}>
            {[
              { step: '1', title: 'Upload Your Photo', desc: 'Drag & drop or click to select. JPG, PNG, HEIC from iPhone — all supported.' },
              { step: '2', title: 'Select Instagram Preset', desc: '1080px, JPEG 90% quality — optimized for crisp Instagram posts.' },
              { step: '3', title: 'Download & Post', desc: 'Ready in seconds. Download and upload directly to Instagram.' },
            ].map(item => (
              <div key={item.step}>
                <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg,#f472b6,#a855f7)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 900, margin: '0 auto 16px' }}>{item.step}</div>
                <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>{item.title}</div>
                <div style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '24px' }}>Why Compress Images Before Posting to Instagram?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {[
            { title: '📉 Instagram recompresses everything', desc: "Instagram automatically recompresses uploads — often making them blurry. Pre-compressing gives you control over the final quality." },
            { title: '⚡ Faster mobile uploads', desc: 'A 4MB DSLR photo can take 10x longer to upload than a 400KB optimized version. Compress first, post faster.' },
            { title: '🔒 100% private', desc: 'Your photos never leave your device. No server, no cloud, no accounts. Just your browser doing the work.' },
            { title: '📱 iPhone HEIC support', desc: 'Shot on iPhone? We convert HEIC to JPEG automatically — compressed and ready for Instagram.' },
          ].map(item => (
            <div key={item.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: '#f472b6' }}>{item.title}</div>
              <div style={{ fontSize:'15px', color: '#94a3b8', lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'rgba(0,0,0,0.2)', padding: '64px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '32px', textAlign: 'center' }}>FAQ — Instagram Image Compression</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { q: 'What is the best image size for Instagram in 2025?', a: 'For feed posts: 1080×1080 (square) or 1080×1350 (portrait, recommended for more visibility). Stories and Reels: 1080×1920. Keep file size under 8MB.' },
              { q: 'Does Instagram compress images automatically?', a: "Yes — Instagram always recompresses uploaded photos. Pre-compressing with our tool ensures you control quality rather than Instagram's algorithm making it blurry." },
              { q: 'How do I compress HEIC photos from iPhone for Instagram?', a: 'Upload your HEIC file — we automatically convert it to JPEG and compress it to Instagram specs. No extra steps.' },
              { q: 'Is this tool free?', a: 'Yes, 100% free. No signup, no credit card, no watermark. Unlimited images.' },
              { q: 'Are my photos uploaded to a server?', a: 'No. Everything happens in your browser. Your photos are never sent to any server.' },
            ].map((item, i) => (
              <details key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '16px', cursor: 'pointer' }}>
                <summary style={{ fontWeight: 600, fontSize: '14px', listStyle: 'none' }}>{item.q}</summary>
                <p style={{ marginTop: '10px', fontSize:'15px', color: '#94a3b8', lineHeight: 1.6 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: 'center', padding: '64px 24px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '16px' }}>Ready to optimize your Instagram photos?</h2>
        <p style={{ color: '#94a3b8', marginBottom: '32px' }}>Free · No signup · Files stay on your device</p>
        <Link href="/" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#f472b6,#a855f7)', color: '#fff', fontSize: '16px', fontWeight: 800, padding: '16px 40px', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 0 40px rgba(244,114,182,0.3)' }}>
          🚀 Compress for Instagram — Free
        </Link>
      </section>

      {/* FOOTER */}
      
    </div>
  );
}
