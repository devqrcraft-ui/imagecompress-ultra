"use client";
import Link from 'next/link';
import { faq } from './faq';

const tips = [
  { title: 'Use JPEG format', desc: 'JPEG is the most efficient format for reaching small KB targets. For a typical photo it usually holds up far better than PNG at the same file weight.' },
  { title: 'Resize before compressing', desc: 'Dropping dimensions from 3000 px to around 800 px removes most of the bytes before any quality search begins, so resize first and then set your target.' },
  { title: 'Use Target KB Mode', desc: 'The tool has a dedicated "Target KB Mode" - type the number from your form and compress. It searches quality for the best result at or under that size.' },
  { title: 'Avoid PNG for small targets', desc: 'PNG is lossless and rarely gets a photo down to a very small target. Use JPEG or WebP when the ceiling is in the tens of kilobytes.' },
  { title: 'Check the preview before saving', desc: 'Use the Before/After comparison slider to judge the result yourself. At a very small target a document photo usually still looks clean while a busy scene shows softening.' },
];

export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      {/* NAV */}
<div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>

        {/* BREADCRUMB */}
        <div style={{ fontSize:'15px', opacity: 0.68, marginBottom: '12px' }}>
          <Link href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</Link> → Compress Photo for a Visa Application
        </div>

        {/* HERO */}
        <h1 style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1.2, marginBottom: '12px' }}>
          How to Compress a Photo for a <span style={{ color: '#818cf8' }}>Visa Application</span> Free Online
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>
          Visa and immigration forms are the uploads that fail on file size most often, because a camera original is dozens of times bigger than the field allows. This page shows how to get a photo down to the KB limit printed on your own application — free, and without uploading the image to any server.
        </p>

        {/* CTA TOOL */}
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Compress a visa photo to your own KB target — Free Tool</div>
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>No upload. Files stay on your device. JPG, PNG, WebP, AVIF and HEIC supported.</p>
          <Link href="/" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#4f46e5,#6d28d9)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open the Compressor
          </Link>
        </div>

        {/* STEPS */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Step-by-Step: Compress a Visa Photo</h2>
        {[
          { step: '1', title: 'Open the tool', desc: 'Click the button above or go to compressto20kb.com. No signup, no install.' },
          { step: '2', title: 'Add your photo', desc: 'Drag and drop or click to select. Supports JPG, PNG, WebP, AVIF and HEIC — up to 50 files at once.' },
          { step: '3', title: 'Switch to Target KB Mode', desc: 'Click the "🎯 Target KB Mode" tab at the top of the tool and choose JPEG as the output format.' },
          { step: '4', title: 'Enter the KB limit from your form', desc: 'Type the number your application states, a little below it for safety. The field accepts 5-5000 KB.' },
          { step: '5', title: 'Compress, check and download', desc: 'The result comes back at or under your target. Compare it with the original, then save it.' },
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
        <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '40px 0 16px' }}>Tips for the Best Quality at a Small Target</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {tips.map((tip, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '16px 20px', borderLeft: '3px solid #818cf8' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>✓ {tip.title}</div>
              <div style={{ fontSize:'15px', opacity: 0.65 }}>{tip.desc}</div>
            </div>
          ))}
        </div>

        {/* USE CASES */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>When Does a Visa Upload Need a Small File?</h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.7, marginBottom: '12px' }}>
          Any submission where the photo field is sized for a single ID image rather than a camera file: consular and immigration portals, application forms with an embedded photograph, and job or HR systems that cap a profile photo in the tens or low hundreds of kilobytes. We deliberately do not name a figure per platform here, because each form prints its own and this page links no official source for one.
        </p>
        <p style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>
          For United States visa and passport photos, read the current digital image requirements published by the State Department at travel.state.gov and set your target from that page rather than from a third-party guide like this one. If your form allows a larger file, see the <Link href="/compress-to-50kb" style={{ color: '#a5b4fc' }}>compress to 50KB tool</Link> or the <Link href="/compress-passport-photo" style={{ color: '#a5b4fc' }}>passport photo compressor</Link>.
        </p>

        {/* FAQ */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(129,140,248,0.25)', borderRadius: '10px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15px', cursor: 'pointer', color: '#a5b4fc' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: '15px', lineHeight: 1.7, opacity: 0.7 }}>{a}</p>
            </details>
          ))}
        </div>

        {/* RELATED */}
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>Related Tools</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {[
            { href: '/', label: '🪪 Compress to 20KB' },
            { href: '/compress-to-50kb', label: '📄 Compress to 50KB' },
            { href: '/compress-to-100kb', label: '📁 Compress to 100KB' },
            { href: '/compress-for-uscis', label: '🏛️ USCIS Photo Tool' },
            { href: '/compress-passport-photo', label: '🛂 Passport Photo' },
            { href: '/blog/compress-passport-photo-to-50kb', label: '📖 Passport to 50KB Guide' },
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
