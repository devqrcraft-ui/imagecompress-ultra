"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const tips = [
  { title: 'Use WebP format', desc: 'WebP files are 25–35% smaller than JPEG at the same quality. Shopify fully supports WebP and serves it to all modern browsers automatically.' },
  { title: 'Target under 500KB per image', desc: 'Shopify recommends keeping product images under 500KB. For hero images aim for under 200KB. Every 100KB saved improves mobile load time.' },
  { title: 'Upload at 2048×2048px', desc: 'Shopify recommends square images at 2048×2048px. This supports zoom functionality while keeping a manageable file size when compressed to WebP.' },
  { title: 'Compress before upload — not after', desc: 'Shopify does some automatic optimization but it\'s minimal. Always compress before uploading for maximum performance gains.' },
  { title: 'Use bulk compression', desc: 'If you have a catalog of 20–50 products, use our bulk compressor to process all images at once. Download as ZIP and upload to Shopify.' },
];
const faq = [
  { q: 'What image format is best for Shopify?', a: 'WebP is the best format for Shopify product images. It\'s 25–35% smaller than JPEG with the same visual quality, and Shopify supports it fully for all modern browsers.' },
  { q: 'What is the ideal image size for Shopify?', a: 'Shopify recommends 2048×2048px square images. Keep file sizes under 500KB per image, ideally under 200KB for fast mobile loading.' },
  { q: 'Does Shopify compress images automatically?', a: 'Shopify applies basic optimization but it\'s not aggressive. You\'ll get significantly better performance by compressing images yourself before uploading.' },
  { q: 'How do slow images affect Shopify SEO?', a: 'Google\'s Core Web Vitals (LCP, CLS) are ranking factors. Large images are the #1 cause of poor LCP scores. Faster Shopify stores rank higher and convert better.' },
];
export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px', opacity: 0.75 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/compress-for-shopify" style={{ color: 'white', textDecoration: 'none' }}>Shopify Tool</Link>
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        </div>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '12px' }}>
          <Link href="/blog" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Blog</Link> → Compress Images for Shopify
        </div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>How to Compress Images for Shopify<br /><span style={{ color: '#818cf8' }}>Speed Up Your Store in 2025</span></h1>
        <p style={{ fontSize: '16px', opacity: 0.65, marginBottom: '32px', lineHeight: 1.7 }}>Unoptimized product images are the #1 cause of slow Shopify stores. A slow store means lower Google rankings, higher bounce rates, and fewer sales. Here's how to fix it — free, in minutes.</p>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '20px' }}>5 Shopify Image Optimization Tips</h2>
        {tips.map((t, i) => (
          <div key={i} style={{ marginBottom: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
            <strong style={{ fontSize: '15px', color: '#a5b4fc' }}>0{i + 1}. {t.title}</strong>
            <p style={{ fontSize: '13px', opacity: 0.65, margin: '6px 0 0', lineHeight: 1.6 }}>{t.desc}</p>
          </div>
        ))}
        <h2 style={{ fontSize: '20px', fontWeight: 800, margin: '32px 0 16px' }}>Compress Shopify Images — Free Bulk Tool</h2>
        <div style={{ marginBottom: '40px' }}><CompressorWidget defaultMode="quality" defaultFormat="webp" /></div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>FAQ</h2>
        {faq.map((f, i) => (
          <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px 16px', marginBottom: '8px', cursor: 'pointer' }}>
            <summary style={{ fontWeight: 700, fontSize: '14px', listStyle: 'none' }}>❓ {f.q}</summary>
            <p style={{ marginTop: '10px', fontSize: '13px', opacity: 0.7, lineHeight: 1.6 }}>{f.a}</p>
          </details>
        ))}
        <div style={{ marginTop: '36px', padding: '20px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize: '13px' }}>
            {([['/compress-for-shopify', 'Shopify Tool'], ['/compress-for-etsy', 'Etsy Tool'], ['/compress-for-amazon', 'Amazon Tool'], ['/bulk-image-compressor', 'Bulk Compress']] as [string, string][]).map(([href, label]) => (
              <Link key={href} href={href} style={{ color: '#a5b4fc', textDecoration: 'none', background: 'rgba(99,102,241,0.1)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)' }}>© 2025 CompressTo20KB · Not affiliated with Shopify · <Link href="/" style={{ color: 'white' }}>Home</Link></footer>
    </div>
  );
}
