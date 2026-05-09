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
      <div style={{ color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}>
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
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>No upload · Instant · JPEG, PNG, WebP, HEIC · Bulk up to 50 images</p>
          <Link href="/?mode=exactkb&target=100" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open 100KB Compressor
          </Link>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>When Do You Need Exactly 100KB?</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.75, marginBottom: '20px' }}>A 100KB file size limit appears across email clients, government portals, ecommerce platforms, and job application forms. It hits the sweet spot between file size and visual quality.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '12px', marginBottom: '40px' }}>
          {[
            { icon: 'EM', title: 'Email Attachments', desc: 'Keep inline images under 100KB to avoid Gmail and Outlook warnings.' },
            { icon: 'SH', title: 'Ecommerce Listings', desc: 'Shopify, Etsy, WooCommerce thumbnails load faster under 100KB.' },
            { icon: 'ED', title: 'University & Exam Portals', desc: 'SAT, GRE, GMAT, UPSC, NEET portals require photos under 100KB.' },
            { icon: 'JO', title: 'Web Forms & Job Apps', desc: 'LinkedIn, Indeed, Workday profile photos work best under 100KB.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px', fontSize: '13px', fontWeight: 700, color: '#fff' }}>{icon}</div>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{title}</div>
              <div style={{ fontSize:'15px', opacity: 0.65 }}>{desc}</div>
            </div>
          ))}
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Tips for Best Results at 100KB</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {tips.map((tip, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '16px 20px', borderLeft: '3px solid #818cf8' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>✓ {tip.title}</div>
              <div style={{ fontSize:'15px', opacity: 0.65 }}>{tip.desc}</div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>CompressTo20KB vs Competitors — 100KB Compression</h2>
        <div style={{overflowX:'auto',marginBottom:'32px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'15px'}}>
            <thead>
              <tr style={{borderBottom:'1px solid rgba(255,255,255,0.12)'}}>
                <th style={{textAlign:'left',padding:'10px 12px',color:'rgba(255,255,255,0.9)',fontWeight:600}}>Feature</th>
                <th style={{padding:'10px 12px',color:'#818cf8',fontWeight:800}}>CompressTo20KB</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>11zon</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>Squoosh</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>TinyPNG</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['On-device (no upload)','✅ Yes','❌ Server','✅ Yes','❌ Server'],
                ['Exact 100KB target','✅ Yes','⚠️ Approx','❌ No','❌ No'],
                ['Batch 50 files','✅ Yes','⚠️ Limited','❌ 1 file','⚠️ 20/month'],
                ['WebP / AVIF output','✅ Yes','⚠️ Partial','✅ Yes','❌ No'],
                ['HEIC support','✅ Yes','⚠️ Partial','❌ No','❌ No'],
                ['Free unlimited','✅ Yes','⚠️ Limits','✅ Yes','⚠️ 20/month'],
              ].map(([feat,...vals],i)=>(
                <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.06)',background:i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                  <td style={{padding:'10px 12px',color:'rgba(255,255,255,0.8)',fontWeight:500}}>{feat}</td>
                  {vals.map((v,j)=>(
                    <td key={j} style={{padding:'10px 12px',textAlign:'center',color:j===0?'#4ade80':v.startsWith('✅')?'#4ade80':v.startsWith('❌')?'#f87171':'#fbbf24',fontWeight:j===0?800:500}}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>FAQ</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {[
            {q:'How do I compress an image to exactly 100KB?',a:'Switch to Exact KB Mode, type 100, select JPEG or WebP format, and click Compress. Binary search finds the maximum quality that fits 100KB — within 1KB accuracy.'},
            {q:'What is 100KB good for?',a:'100KB is ideal for Shopify product images, email attachments, LinkedIn profile photos, and web thumbnails. It balances visual quality and load speed — much better than 20KB or 50KB for product photos.'},
            {q:'How to compress image to 100KB on iPhone or Android?',a:'Open compressto20kb.com in Safari (iPhone) or Chrome (Android). Tap upload, select your photo, set Exact KB Mode to 100, tap Compress. Downloads instantly — no app needed.'},
            {q:'Is 100KB good enough for Shopify product images?',a:'Yes — Shopify recommends images under 500KB for fast loading. 100KB WebP gives excellent quality at fast page speed. Use WebP format for best results, or JPEG for maximum compatibility.'},
            {q:'Can I compress multiple images to 100KB at once?',a:'Yes — upload up to 50 images and batch compress all to 100KB simultaneously. Download as ZIP. Unlike Squoosh (1 file only) or TinyPNG (20/month limit), we process 50 files free with no limits.'},
            {q:'Is it safe to compress product photos to 100KB here?',a:'Yes — all compression runs in your browser via WebAssembly. Your product images never touch any server. Unlike 11zon or iLoveIMG which upload files to their servers, zero data is transmitted.'},
          ].map((item, i) => (
            <details key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '16px 20px', cursor:'pointer' }}>
              <summary style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px', color: '#a5b4fc', listStyle:'none' }}>❓ {item.q}</summary>
              <div style={{ fontSize:'15px', opacity: 0.7, marginTop:'10px', lineHeight:1.6 }}>{item.a}</div>
            </details>
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
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize:'15px', fontWeight: 600 }}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
