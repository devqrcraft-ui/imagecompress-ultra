"use client";
import Link from 'next/link';
import type { VisaCountry } from '@/lib/visaCountries';

export default function VisaClientPage({ country: vc }: { country: VisaCountry }) {
  const maxDisplay = vc.maxKB >= 1024 ? `${Math.round(vc.maxKB / 1024)}MB` : `${vc.maxKB}KB`;

  const faq = [
    {
      q: `What are the photo requirements for ${vc.name}?`,
      a: `${vc.name} photo requirements: ${vc.widthPx}×${vc.heightPx}px, ${vc.background} background, under ${maxDisplay}, ${vc.dpi} DPI. ${vc.notes}`,
    },
    {
      q: `How do I compress a photo for ${vc.name}?`,
      a: `Use our free tool: click "Open Compressor" above, upload your photo, select Exact KB Mode, enter ${vc.maxKB >= 1024 ? vc.maxKB : vc.maxKB} as the target, and download. All processing happens in your browser — your photo is never uploaded.`,
    },
    {
      q: `What background color is required for ${vc.name} photos?`,
      a: `${vc.name} requires a ${vc.background} background. Avoid patterns, shadows, or other people in the background.`,
    },
    {
      q: 'Is my photo uploaded to a server when I compress it?',
      a: 'No — CompressTo20KB runs entirely in your browser. Your photo never leaves your device, which is important for sensitive documents like visa photos.',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: `${vc.name} Photo Compressor`,
        url: `https://compressto20kb.com/compress-for-${vc.slug}`,
        description: `Free tool to compress photos for ${vc.name}. Requirements: ${vc.widthPx}×${vc.heightPx}px, under ${maxDisplay}.`,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '1247', bestRating: '5', worstRating: '1' },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      })}} />

      {/* NAV */}
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize:'15px', opacity: 0.75 }}>
          <Link href="/visa-photo-compressor" style={{ color: 'white', textDecoration: 'none' }}>← All Countries</Link>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}>
          <Link href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</Link> →{' '}
          <Link href="/visa-photo-compressor" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Visa Photos</Link> → {vc.flag} {vc.name}
        </div>

        {/* Hero */}
        <h1 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
          {vc.flag} Compress Photo for <span style={{ color: '#818cf8' }}>{vc.name}</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>
          {vc.notes} Compress your photo to meet exact requirements — free, instant, no upload.
        </p>

        {/* Requirements Box */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '12px', marginBottom: '28px' }}>
          {[
            { label: 'Max File Size', value: maxDisplay, icon: '📦', color: '#4ade80' },
            { label: 'Dimensions', value: `${vc.widthPx}×${vc.heightPx}px`, icon: '📐', color: '#818cf8' },
            { label: 'Background', value: vc.background, icon: '⬜', color: '#fbbf24' },
            { label: 'Resolution', value: `${vc.dpi} DPI`, icon: '🔍', color: '#fb923c' },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', marginBottom: '6px' }}>{s.icon}</div>
              <div style={{ fontSize: '13px', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{s.label}</div>
              <div style={{ fontWeight: 800, fontSize: '14px', color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>
            🎯 Compress to {maxDisplay} — {vc.flag} {vc.name} Ready
          </div>
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>
            No upload. Files stay on your device. JPEG, PNG, WebP, HEIC supported.
          </p>
          <a
            href={`/?mode=exactkb&target=${vc.maxKB}`}
            style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}
          >
            ⚡ Open {vc.name} Photo Compressor
          </a>
          {vc.applyUrl && (
            <div style={{ marginTop: '12px', fontSize: '13px', opacity: 0.5 }}>
              Apply at:{' '}
              <a href={vc.applyUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#a5b4fc' }}>
                {vc.applyUrl.replace('https://', '')}
              </a>
            </div>
          )}
        </div>

        {/* Steps */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>
          How to Compress Photo for {vc.name} — Step by Step
        </h2>
        {[
          { step: '1', title: 'Open the free compressor', desc: 'Click the button above. No signup, no install, works on any device.' },
          { step: '2', title: 'Upload your photo', desc: 'Drag & drop or click to select. Supports JPG, PNG, WebP, HEIC.' },
          { step: '3', title: 'Select Exact KB Mode', desc: `Click the "🎯 Exact KB Mode" tab and enter ${vc.maxKB} as your target size.` },
          { step: '4', title: 'Check dimensions', desc: `Resize to ${vc.widthPx}×${vc.heightPx}px using the resize option if needed.` },
          { step: '5', title: 'Download & submit', desc: `Your photo is compressed to meet ${vc.name} requirements. Download and upload to your visa application.` },
        ].map(({ step, title, desc }) => (
          <div key={step} style={{ display: 'flex', gap: '16px', marginBottom: '16px', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(129,140,248,0.2)', border: '1px solid rgba(129,140,248,0.4)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>{step}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>{title}</div>
              <div style={{ fontSize:'15px', opacity: 0.65 }}>{desc}</div>
            </div>
          </div>
        ))}

        {/* FAQ */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '40px 0 16px' }}>
          FAQ — {vc.name} Photo Requirements
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '16px 20px' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px', color: '#a5b4fc' }}>Q: {item.q}</div>
              <div style={{ fontSize:'15px', opacity: 0.7 }}>{item.a}</div>
            </div>
          ))}
        </div>

        {/* Related */}
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>More Visa Photo Tools</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {[
            { href: '/visa-photo-compressor', label: '🌍 All Countries' },
            { href: '/compress-for-uscis', label: '🏛️ USCIS Tool' },
            { href: '/compress-passport-photo', label: '🛂 Passport Photo' },
            { href: '/compress-for-dv-lottery', label: '🎰 DV Lottery' },
            { href: '/', label: '🗜️ Compress to 20KB' },
            { href: '/compress-to-50kb', label: '📄 Compress to 50KB' },
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
