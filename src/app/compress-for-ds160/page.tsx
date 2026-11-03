import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress an Image for DS-160: Check Official Photo Rules',
  description: 'Reduce an image file size in your browser for a DS-160 upload. Check current Department of State photo requirements separately; compression does not validate compliance.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-ds160' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-ds160' },
  keywords: 'compress photo for ds160, DS-160 US Visa photo requirements, DS-160 US Visa photo size',
};

export default function Page() {
  const faq = [
    { q: 'What are the photo requirements for DS-160?', a: 'Follow the current photo instructions from the U.S. Department of State and the DS-160 application. Requirements may include file size, dimensions, format, and composition; this compressor does not validate them.' },
    { q: 'How do I compress a photo for DS-160?', a: 'Check the current maximum file size and accepted format in the official instructions. Then choose a target below the maximum. Compression alone does not make a photo compliant.' },
    { q: 'Is my photo uploaded to a server?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
  ];
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication',
        name: 'DS-160 US Visa Photo Compressor',
        url: 'https://www.compressto20kb.com/compress-for-ds160',
        description: 'Reduce an image file size in your browser. Check the current DS-160 photo instructions separately; this tool does not verify photo compliance.',
        applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"DS-160 Photo Compressor","item":"https://www.compressto20kb.com/compress-for-ds160"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      })}} />
<div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize:'15px', opacity: 0.68, marginBottom: '12px' }}>
          <Link href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</Link> {'->'} 🏛️ DS-160 US Visa
        </div>
        <h1 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
          🏛️ Compress Photo for <span style={{ color: '#818cf8' }}>DS-160 US Visa</span>
        </h1>
        <div style={{ background: "rgba(129,140,248,0.13)", border: "1px solid rgba(129,140,248,0.35)", borderRadius: "14px", padding: "20px 24px", marginBottom: "24px" }}>
          <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#e2e8f0" }}>
            <strong style={{ color: "#818cf8" }}>Important:</strong> Check the current DS-160 photo requirements on the U.S. Department of State website before uploading. This page can help reduce image file size, but does not check the photo&apos;s dimensions, crop, background, or other application rules.
          </p>
        </div>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>Photo requirements can change and may include file size, format, pixel dimensions, and composition. Confirm the instructions for your application before compressing or submitting an image.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '12px', marginBottom: '28px' }}>
          {[
            { label: 'File size', value: 'Check official rules', icon: '📦', color: '#4ade80' },
            { label: 'Dimensions', value: 'Check official rules', icon: '📐', color: '#818cf8' },
            { label: 'Composition', value: 'Not validated', icon: '⬜', color: '#fbbf24' },
            { label: 'Tool function', value: 'Compress bytes', icon: '🖼️', color: '#fb923c' },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', marginBottom: '6px' }}>{s.icon}</div>
              <div style={{ fontSize: '13px', opacity: 0.68, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{s.label}</div>
              <div style={{ fontWeight: 800, fontSize: '14px', color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Reduce image file size in your browser</div>
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>Choose a target below the limit listed in your application instructions. The tool does not certify DS-160 compliance.</p>
          <Link href="/" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#4f46e5,#6d28d9)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open Image Compressor
          </Link>
          <div style={{ marginTop: '12px', fontSize: '13px', opacity: 0.68 }}>Check the official <a href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos.html" target="_blank" rel="noopener noreferrer" style={{ color: '#a5b4fc' }}>U.S. visa photo instructions</a> and the <a href="https://ceac.state.gov/genniv/" target="_blank" rel="noopener noreferrer" style={{ color: '#a5b4fc' }}>DS-160 application</a>.</div>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>How to Compress Photo for DS-160 US Visa</h2>
        {[
          { step: '1', title: 'Click the button above', desc: 'Opens the free compressor. No signup or install needed.' },
          { step: '2', title: 'Upload your photo', desc: 'Drag and drop or click to select. Supports JPG, PNG, WebP, HEIC.' },
          { step: '3', title: 'Choose a target below the stated maximum', desc: 'Use the limit and accepted formats shown in the current official instructions.' },
          { step: '4', title: 'Download and verify', desc: 'Check dimensions, composition, and file type separately before submitting the image.' },
        ].map(({ step, title, desc }) => (
          <div key={step} style={{ display: 'flex', gap: '16px', marginBottom: '16px', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(129,140,248,0.2)', border: '1px solid rgba(129,140,248,0.4)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>{step}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>{title}</div>
              <div style={{ fontSize:'15px', opacity: 0.65 }}>{desc}</div>
            </div>
          </div>
        ))}
        <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '40px 0 16px' }}>FAQ — DS-160 US Visa Photo Requirements</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '16px 20px' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px', color: '#a5b4fc' }}>Q: {item.q}</div>
              <div style={{ fontSize:'15px', opacity: 0.7 }}>{item.a}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {['/compress-for-ds160','/compress-for-uscis','/compress-to-240kb','/visa-photo-compressor','/'].map(href => (
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize:'15px', fontWeight: 600 }}>{href}</Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}
