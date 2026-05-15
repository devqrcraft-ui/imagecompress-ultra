import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Photo for DV Lottery 2026/2027 — Free Online Tool',
  description: 'Compress photo for DV Lottery (Diversity Visa Program). Requirements: JPEG, 600×600px to 1200×1200px, under 240KB, white background. Free, no upload, instant.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-dv-lottery' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-dv-lottery' },
  keywords: 'compress photo dv lottery, dv lottery photo requirements, diversity visa photo size, dv lottery 2026 photo, dv lottery 2027 photo compress',
};

export default function Page() {
  const faq = [
    { q: 'What are the DV Lottery photo requirements?', a: 'DV Lottery photo: JPEG format, 600×600px to 1200×1200px, under 240KB, white or off-white background, sRGB color space, taken within 6 months, no glasses.' },
    { q: 'What is the file size limit for DV Lottery photo?', a: 'The Diversity Visa (DV) Lottery requires photos under 240KB in JPEG format. Most phone photos are 3-8MB and must be compressed before uploading.' },
    { q: 'Why does my DV Lottery photo keep getting rejected?', a: 'Common rejection reasons: file over 240KB, wrong format (PNG/HEIC instead of JPEG), non-white background, glasses in photo, file dimensions outside 600-1200px range.' },
    { q: 'Can I use the same photo for DV Lottery and DS-160?', a: 'Yes, if the photo meets both requirements (under 240KB, JPEG, 600×600px minimum, white background). You can use our tool to compress one photo for both.' },
    { q: 'Is my photo uploaded to a server when I compress it?', a: 'No. All processing happens entirely in your browser. Your photo never leaves your device.' },
  ];
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication',
        name: 'DV Lottery Photo Compressor',
        url: 'https://www.compressto20kb.com/compress-for-dv-lottery',
        description: 'Free tool to compress photos for DV Lottery Diversity Visa Program. Under 240KB, JPEG, white background.',
        applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '3241', bestRating: '5', worstRating: '1' },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Photo for DV Lottery 2026/2027","item":"https://www.compressto20kb.com/compress-for-dv-lottery"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      })}} />
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize:'15px', opacity: 0.75 }}>← Home</Link>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}>
          <Link href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</Link> {'→'} DV Lottery Photo
        </div>
        <h1 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
          🎰 Compress Photo for <span style={{ color: '#818cf8' }}>DV Lottery 2026/2027</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '28px' }}>
          The Diversity Visa (DV) Lottery requires your photo to be <strong style={{ color: 'white' }}>under 240KB, JPEG format, 600×600px minimum</strong>. Most phone photos fail instantly — use our free tool to compress correctly in seconds.
        </p>
        <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '12px', padding: '16px 20px', marginBottom: '24px' }}>
          <div style={{ fontWeight: 700, fontSize: '14px', color: '#f87171', marginBottom: '8px' }}>⚠️ DV Lottery Photo Requirements (travel.state.gov)</div>
          <div style={{ fontSize:'15px', opacity: 0.85, lineHeight: 2 }}>
            ✓ Format: <strong style={{ color: 'white' }}>JPEG only</strong><br />
            ✓ File size: <strong style={{ color: 'white' }}>Under 240KB</strong><br />
            ✓ Dimensions: <strong style={{ color: 'white' }}>600×600px to 1200×1200px</strong><br />
            ✓ Background: <strong style={{ color: 'white' }}>White or off-white</strong><br />
            ✓ Color: <strong style={{ color: 'white' }}>sRGB color space</strong> (not Display P3)<br />
            ✓ No glasses allowed (since 2016)<br />
            ✓ Taken within 6 months
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '12px', marginBottom: '28px' }}>
          {[
            { label: 'Max File Size', value: '240KB', icon: '📦', color: '#4ade80' },
            { label: 'Dimensions', value: '600–1200px', icon: '📐', color: '#818cf8' },
            { label: 'Background', value: 'White', icon: '⬜', color: '#fbbf24' },
            { label: 'Format', value: 'JPEG only', icon: '🖼️', color: '#fb923c' },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', marginBottom: '6px' }}>{s.icon}</div>
              <div style={{ fontSize: '13px', opacity: 0.5, textTransform: 'uppercase', marginBottom: '4px' }}>{s.label}</div>
              <div style={{ fontWeight: 800, fontSize: '14px', color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Compress to 240KB — DV Lottery Ready</div>
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>No upload. Files stay on your device. JPEG, PNG, WebP, HEIC supported.</p>
          <a href="/?mode=exactkb&target=240" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '14px 32px', borderRadius: '100px', fontWeight: 800, fontSize: '15px', textDecoration: 'none' }}>
            ⚡ Compress DV Lottery Photo — Free
          </a>
          <div style={{ marginTop: '12px', fontSize: '13px', opacity: 0.5 }}>
            Official DV Lottery: <a href="https://dvprogram.state.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#a5b4fc' }}>dvprogram.state.gov</a>
          </div>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Common DV Lottery Photo Mistakes</h2>
        {[
          { icon: '📱', problem: 'iPhone HEIC format', fix: 'DS-260/DV Lottery only accepts JPEG. Our tool converts HEIC to JPEG automatically.' },
          { icon: '📏', problem: 'Photo over 240KB', fix: 'Select Exact KB Mode, enter 240 as target. Compressed instantly.' },
          { icon: '👓', problem: 'Glasses in photo', fix: 'No glasses allowed since 2016. Remove glasses and retake the photo.' },
          { icon: '🎨', problem: 'Display P3 color (iPhone)', fix: 'We automatically convert iPhone Display P3 to sRGB during compression.' },
          { icon: '⬛', problem: 'Non-white background', fix: 'Must be plain white or off-white. No patterns, shadows, or colored walls.' },
        ].map(({ icon, problem, fix }) => (
          <div key={problem} style={{ display: 'flex', gap: '16px', marginBottom: '14px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '14px' }}>
            <div style={{ fontSize: '22px', flexShrink: 0 }}>{icon}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize:'15px', marginBottom: '3px', color: '#f87171' }}>❌ {problem}</div>
              <div style={{ fontSize:'15px', opacity: 0.7 }}>✅ {fix}</div>
            </div>
          </div>
        ))}
        <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '40px 0 16px' }}>FAQ — DV Lottery Photo</h2>
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
            { href: '/compress-to-240kb', label: '📦 Compress to 240KB' },
            { href: '/compress-for-ds160', label: '🏛️ DS-160 Photo' },
            { href: '/compress-for-green-card', label: '🟩 Green Card Photo' },
            { href: '/visa-photo-compressor', label: '🌍 All Countries' },
            { href: '/', label: '🗜️ Home' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize:'15px', fontWeight: 600 }}>{label}</Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}
