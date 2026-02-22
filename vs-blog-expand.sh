#!/bin/bash
echo "🚀 Creating new VS pages and blog posts..."

# ============================================================
# VS: kraken.io
# ============================================================
mkdir -p src/app/vs/kraken

cat > src/app/vs/kraken/page.tsx << 'EOF'
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'CompressTo20KB vs Kraken.io — Free Alternative in 2025',
  description: 'CompressTo20KB vs Kraken.io: no upload, no monthly fee, exact KB mode. See why users switch from Kraken.io to our free browser-based tool.',
  keywords: 'kraken.io alternative, kraken.io free alternative, kraken io vs, better than kraken io, image compressor no upload',
  alternates: { canonical: '/vs/kraken' },
};
export default function Page() { return <ClientPage />; }
EOF

cat > src/app/vs/kraken/client.tsx << 'EOF'
"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const compare = [
  { feature: 'Privacy', us: '✅ 100% in-browser', them: '❌ Uploads to server' },
  { feature: 'Price', us: '✅ Free', them: '❌ $5–$9/month' },
  { feature: 'Exact KB mode', us: '✅ Any target KB', them: '❌ No' },
  { feature: 'Bulk compression', us: '✅ Up to 50 images', them: '⚠️ API only for bulk' },
  { feature: 'Output formats', us: '✅ WebP, AVIF, JPEG, PNG', them: '⚠️ JPEG, PNG, GIF, SVG' },
  { feature: 'USCIS / Passport mode', us: '✅ Built-in presets', them: '❌ No' },
  { feature: 'No signup required', us: '✅ Zero signup', them: '❌ Account required' },
  { feature: 'Shopify preset', us: '✅ One-click', them: '❌ Manual settings' },
];
const faq = [
  { q: 'Is CompressTo20KB a free Kraken.io alternative?', a: 'Yes. CompressTo20KB is completely free with no account required. Kraken.io requires a paid plan for full access and an account even for free features.' },
  { q: 'Does Kraken.io upload my images to their server?', a: 'Yes. Kraken.io processes all images on their servers. CompressTo20KB processes everything in your browser — your images never leave your device.' },
  { q: 'Can I compress to an exact file size like 20KB?', a: 'CompressTo20KB has a unique Exact KB mode — type any target like 20KB, 50KB, or 200KB and the tool hits it precisely. Kraken.io does not offer this feature.' },
  { q: 'Which is better for Shopify images?', a: 'CompressTo20KB has a built-in Shopify preset that automatically sets WebP format, optimal quality, and correct dimensions. No app installation or monthly fee needed.' },
];
export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px', opacity: 0.75 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        </div>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '12px' }}>Comparison → CompressTo20KB vs Kraken.io</div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>CompressTo20KB vs Kraken.io<br /><span style={{ color: '#818cf8' }}>2025 Comparison</span></h1>
        <p style={{ fontSize: '16px', opacity: 0.65, marginBottom: '32px', lineHeight: 1.7 }}>Kraken.io is popular among developers and Shopify merchants — but it requires a paid account, uploads your images to their servers, and has no exact KB targeting. Here is how the two tools compare.</p>
        <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px' }}>
          <strong style={{ color: '#fca5a5' }}>⚠️ Kraken.io Cost:</strong><span style={{ fontSize: '14px', opacity: 0.8 }}> Kraken.io starts at $5/month. CompressTo20KB is 100% free with no account required.</span>
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Feature Comparison</h2>
        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead><tr style={{ background: 'rgba(99,102,241,0.15)' }}>
              {['Feature', 'CompressTo20KB', 'Kraken.io'].map(h => <th key={h} style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>{h}</th>)}
            </tr></thead>
            <tbody>{compare.map((r, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                <td style={{ padding: '10px 12px', border: '1px solid rgba(255,255,255,0.06)', fontWeight: 600, opacity: 0.8 }}>{r.feature}</td>
                <td style={{ padding: '10px 12px', border: '1px solid rgba(255,255,255,0.06)', color: '#34d399' }}>{r.us}</td>
                <td style={{ padding: '10px 12px', border: '1px solid rgba(255,255,255,0.06)', opacity: 0.7 }}>{r.them}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Try Our Free Alternative</h2>
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
            {([['/vs/tinypng', 'vs TinyPNG'], ['/vs/squoosh', 'vs Squoosh'], ['/vs/iloveimg', 'vs iLoveIMG'], ['/compress-for-shopify', 'Shopify Tool']] as [string, string][]).map(([href, label]) => (
              <Link key={href} href={href} style={{ color: '#a5b4fc', textDecoration: 'none', background: 'rgba(99,102,241,0.1)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)' }}>© 2025 CompressTo20KB · <Link href="/" style={{ color: 'white' }}>Home</Link></footer>
    </div>
  );
}
EOF

# ============================================================
# VS: picresize
# ============================================================
mkdir -p src/app/vs/picresize

cat > src/app/vs/picresize/page.tsx << 'EOF'
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'CompressTo20KB vs PicResize — Better Free Alternative 2025',
  description: 'CompressTo20KB vs PicResize: exact KB compression, no upload, WebP support, passport photo presets. See why users choose CompressTo20KB over PicResize.',
  keywords: 'picresize alternative, picresize vs, better than picresize, compress image online free, image compressor no upload',
  alternates: { canonical: '/vs/picresize' },
};
export default function Page() { return <ClientPage />; }
EOF

cat > src/app/vs/picresize/client.tsx << 'EOF'
"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const compare = [
  { feature: 'Privacy', us: '✅ 100% in-browser', them: '❌ Uploads to server' },
  { feature: 'Exact KB targeting', us: '✅ Any KB target', them: '❌ Percentage only' },
  { feature: 'WebP / AVIF output', us: '✅ Full support', them: '❌ No WebP/AVIF' },
  { feature: 'Batch compression', us: '✅ Up to 50 images', them: '❌ One at a time' },
  { feature: 'HEIC support', us: '✅ iPhone photos', them: '❌ No HEIC' },
  { feature: 'Passport / Gov presets', us: '✅ Built-in presets', them: '❌ No' },
  { feature: 'Mobile friendly', us: '✅ Full mobile support', them: '⚠️ Limited' },
  { feature: 'Price', us: '✅ Free, no ads', them: '⚠️ Free with ads' },
];
const faq = [
  { q: 'Is CompressTo20KB better than PicResize?', a: 'For most use cases yes. CompressTo20KB supports WebP and AVIF output, processes everything in your browser, allows batch compression of 50 images, and has exact KB targeting — features PicResize lacks.' },
  { q: 'Does PicResize support WebP format?', a: 'No. PicResize only outputs JPEG, PNG, and GIF. CompressTo20KB supports modern formats including WebP and AVIF which can be 70% smaller than JPEG.' },
  { q: 'Can I compress multiple images at once with PicResize?', a: 'No. PicResize processes one image at a time. CompressTo20KB supports batch compression of up to 50 images with a single ZIP download.' },
  { q: 'Which tool is better for passport photos?', a: 'CompressTo20KB has built-in presets for US passport, USCIS, DS-160, and other government requirements. PicResize has no such presets.' },
];
export default function ClientPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px', opacity: 0.75 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        </div>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '12px' }}>Comparison → CompressTo20KB vs PicResize</div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>CompressTo20KB vs PicResize<br /><span style={{ color: '#818cf8' }}>2025 Comparison</span></h1>
        <p style={{ fontSize: '16px', opacity: 0.65, marginBottom: '32px', lineHeight: 1.7 }}>PicResize has been around for years, but it lacks modern format support, only processes one image at a time, and uploads your files to their servers. Here is how CompressTo20KB compares.</p>
        <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px' }}>
          <strong style={{ color: '#fca5a5' }}>⚠️ PicResize Limitation:</strong><span style={{ fontSize: '14px', opacity: 0.8 }}> PicResize processes one image at a time and has no WebP or AVIF output. CompressTo20KB supports batch up to 50 images and all modern formats.</span>
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Feature Comparison</h2>
        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead><tr style={{ background: 'rgba(99,102,241,0.15)' }}>
              {['Feature', 'CompressTo20KB', 'PicResize'].map(h => <th key={h} style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>{h}</th>)}
            </tr></thead>
            <tbody>{compare.map((r, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                <td style={{ padding: '10px 12px', border: '1px solid rgba(255,255,255,0.06)', fontWeight: 600, opacity: 0.8 }}>{r.feature}</td>
                <td style={{ padding: '10px 12px', border: '1px solid rgba(255,255,255,0.06)', color: '#34d399' }}>{r.us}</td>
                <td style={{ padding: '10px 12px', border: '1px solid rgba(255,255,255,0.06)', opacity: 0.7 }}>{r.them}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Try Our Free Alternative</h2>
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
            {([['/vs/tinypng', 'vs TinyPNG'], ['/vs/kraken', 'vs Kraken.io'], ['/bulk-image-compressor', 'Bulk Compress'], ['/compress-passport-photo', 'Passport Tool']] as [string, string][]).map(([href, label]) => (
              <Link key={href} href={href} style={{ color: '#a5b4fc', textDecoration: 'none', background: 'rgba(99,102,241,0.1)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)' }}>© 2025 CompressTo20KB · <Link href="/" style={{ color: 'white' }}>Home</Link></footer>
    </div>
  );
}
EOF

# ============================================================
# BLOG: compress-image-for-google-forms
# ============================================================
mkdir -p src/app/blog/compress-image-for-google-forms

cat > src/app/blog/compress-image-for-google-forms/page.tsx << 'EOF'
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'How to Compress Images for Google Forms — Free Guide 2025',
  description: 'Google Forms has a 10MB file upload limit. Learn how to compress images for Google Forms quickly — no upload needed, works on any device.',
  keywords: 'compress image for google forms, google forms image size limit, reduce image size for google forms, google forms photo upload',
  alternates: { canonical: '/blog/compress-image-for-google-forms' },
};
export default function Page() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f172a,#1e1b4b)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '48px 20px' }}>
        <div style={{ fontSize: '12px', opacity: 0.5, marginBottom: '12px' }}>Blog → Google Forms</div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,38px)', fontWeight: 900, marginBottom: '12px', lineHeight: 1.2 }}>How to Compress Images for Google Forms</h1>
        <p style={{ opacity: 0.5, fontSize: '13px', marginBottom: '32px' }}>February 2025 · 4 min read</p>

        <p style={{ fontSize: '16px', lineHeight: 1.8, opacity: 0.8, marginBottom: '24px' }}>Google Forms allows respondents to upload files up to 10MB per file. While that sounds generous, many users hit this limit when submitting photos taken on modern smartphones — which can easily be 5–15MB each. Compressing your images before submission keeps your forms fast and your Google Drive storage clean.</p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '32px 0 12px' }}>What Size Should Images Be for Google Forms?</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, opacity: 0.8, marginBottom: '16px' }}>Google Forms has a 10MB limit per uploaded file and a 1GB total response limit per form. For most use cases — submitting ID photos, documents, or profile pictures — keeping images under 500KB is ideal. This ensures fast uploads on mobile connections and keeps your Drive organized.</p>

        <div style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: '12px', padding: '16px 20px', margin: '24px 0' }}>
          <strong style={{ color: '#a5b4fc' }}>Google Forms File Size Limits:</strong>
          <ul style={{ margin: '8px 0 0', paddingLeft: '20px', fontSize: '14px', opacity: 0.8, lineHeight: 2 }}>
            <li>Max file size per upload: 10MB</li>
            <li>Total storage per form: 1GB (Google Drive)</li>
            <li>Recommended image size: under 500KB for fast upload</li>
            <li>For ID/passport photos: under 20–50KB</li>
          </ul>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '32px 0 12px' }}>How to Compress an Image for Google Forms (Step by Step)</h2>
        <ol style={{ paddingLeft: '20px', fontSize: '15px', lineHeight: 2.2, opacity: 0.8 }}>
          <li>Go to <a href="https://compressto20kb.com" style={{ color: '#818cf8' }}>compressto20kb.com</a></li>
          <li>Drop your image into the upload zone</li>
          <li>Choose <strong>Exact KB Mode</strong> and type your target (e.g., 200KB)</li>
          <li>Select <strong>JPEG</strong> or <strong>WebP</strong> format</li>
          <li>Click Compress and download your file</li>
          <li>Upload the compressed image to your Google Form</li>
        </ol>
        <p style={{ fontSize: '14px', opacity: 0.6, margin: '8px 0 24px' }}>Your image is processed entirely in your browser — nothing is uploaded to any server.</p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '32px 0 12px' }}>Common Google Forms Use Cases</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, opacity: 0.8, marginBottom: '16px' }}>These are the most common situations where users need to compress images before submitting a Google Form:</p>
        <ul style={{ paddingLeft: '20px', fontSize: '15px', lineHeight: 2, opacity: 0.8 }}>
          <li><strong>School registration forms</strong> — submitting student ID or passport photo</li>
          <li><strong>Job application forms</strong> — submitting resume photo or headshot</li>
          <li><strong>Event registration</strong> — submitting proof of ID or ticket photo</li>
          <li><strong>Medical intake forms</strong> — submitting insurance card or document scan</li>
          <li><strong>Government program applications</strong> — submitting documents under size limit</li>
        </ul>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '32px 0 12px' }}>Why Compress Before Uploading to Google Forms?</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, opacity: 0.8, marginBottom: '16px' }}>Even though Google Forms allows up to 10MB, there are good reasons to compress your images first. Smaller files upload faster — especially on mobile data. They also take less space in the form owner's Google Drive, and some forms have administrator-set limits lower than 10MB.</p>

        <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '12px', padding: '20px', margin: '32px 0', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>Compress your image now — free, no upload</p>
          <a href="https://compressto20kb.com" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#22d3ee)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 700, textDecoration: 'none', fontSize: '14px' }}>Open CompressTo20KB →</a>
        </div>

        <div style={{ marginTop: '40px', display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize: '13px' }}>
          {[['/', 'Home'], ['/compress-to-200kb', 'Compress to 200KB'], ['/compress-for-email', 'Compress for Email'], ['/bulk-image-compressor', 'Bulk Compress']].map(([href, label]) => (
            <a key={href} href={href} style={{ color: '#a5b4fc', textDecoration: 'none', background: 'rgba(99,102,241,0.1)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>{label}</a>
          ))}
        </div>
      </div>
      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)' }}>© 2025 CompressTo20KB</footer>
    </div>
  );
}
EOF

# ============================================================
# BLOG: compress-image-for-microsoft-teams
# ============================================================
mkdir -p src/app/blog/compress-image-for-microsoft-teams

cat > src/app/blog/compress-image-for-microsoft-teams/page.tsx << 'EOF'
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Compress Images for Microsoft Teams — Fast & Free 2025',
  description: 'Microsoft Teams has a 250MB file upload limit but slow previews for large images. Learn how to compress images for Teams in seconds.',
  keywords: 'compress image for microsoft teams, teams image size, reduce image size for teams, microsoft teams photo upload limit',
  alternates: { canonical: '/blog/compress-image-for-microsoft-teams' },
};
export default function Page() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f172a,#1e1b4b)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '48px 20px' }}>
        <div style={{ fontSize: '12px', opacity: 0.5, marginBottom: '12px' }}>Blog → Microsoft Teams</div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,38px)', fontWeight: 900, marginBottom: '12px', lineHeight: 1.2 }}>How to Compress Images for Microsoft Teams</h1>
        <p style={{ opacity: 0.5, fontSize: '13px', marginBottom: '32px' }}>February 2025 · 4 min read</p>

        <p style={{ fontSize: '16px', lineHeight: 1.8, opacity: 0.8, marginBottom: '24px' }}>Microsoft Teams allows file uploads up to 250MB — but sending large images in chats slows down the conversation and takes up SharePoint storage. Compressing images before sharing in Teams makes previews load faster and keeps your storage usage under control.</p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '32px 0 12px' }}>Recommended Image Sizes for Microsoft Teams</h2>
        <div style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: '12px', padding: '16px 20px', margin: '16px 0 24px' }}>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', opacity: 0.85, lineHeight: 2.2 }}>
            <li><strong>Chat images:</strong> under 500KB for instant preview loading</li>
            <li><strong>Profile photos:</strong> under 100KB, square format</li>
            <li><strong>Background images:</strong> under 1MB, 1920×1080px recommended</li>
            <li><strong>Shared documents with images:</strong> under 200KB per image</li>
          </ul>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '32px 0 12px' }}>Step-by-Step: Compress Image for Teams</h2>
        <ol style={{ paddingLeft: '20px', fontSize: '15px', lineHeight: 2.2, opacity: 0.8 }}>
          <li>Visit <a href="https://compressto20kb.com" style={{ color: '#818cf8' }}>compressto20kb.com</a></li>
          <li>Upload your image (supports JPG, PNG, WebP, HEIC)</li>
          <li>Select <strong>Quality Mode</strong> and set to 80%</li>
          <li>Choose <strong>JPEG</strong> output for maximum compatibility</li>
          <li>Download and share directly in Teams chat</li>
        </ol>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '32px 0 12px' }}>Teams Profile Photo Requirements</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, opacity: 0.8, marginBottom: '16px' }}>Microsoft Teams profile photos work best at 648×648 pixels. The file must be under 4MB. For best results, use a square JPEG under 100KB — this ensures your photo loads instantly for all colleagues even on slow connections.</p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '32px 0 12px' }}>Why Compress Images for Teams?</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '15px', lineHeight: 2, opacity: 0.8 }}>
          <li>Large images slow down chat scroll and preview loading</li>
          <li>SharePoint storage counts against your Microsoft 365 quota</li>
          <li>Colleagues on mobile data benefit from smaller file sizes</li>
          <li>Compressed WebP images look identical but load 3–5x faster</li>
        </ul>

        <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '12px', padding: '20px', margin: '32px 0', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>Compress your Teams image now — free, private</p>
          <a href="https://compressto20kb.com" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#22d3ee)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 700, textDecoration: 'none', fontSize: '14px' }}>Open CompressTo20KB →</a>
        </div>

        <div style={{ marginTop: '40px', display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize: '13px' }}>
          {[['/', 'Home'], ['/compress-to-100kb', 'Compress to 100KB'], ['/compress-for-email', 'Compress for Email'], ['/bulk-image-compressor', 'Bulk Compress']].map(([href, label]) => (
            <a key={href} href={href} style={{ color: '#a5b4fc', textDecoration: 'none', background: 'rgba(99,102,241,0.1)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>{label}</a>
          ))}
        </div>
      </div>
      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)' }}>© 2025 CompressTo20KB</footer>
    </div>
  );
}
EOF

# ============================================================
# BLOG: best-image-compressor-for-mac
# ============================================================
mkdir -p src/app/blog/best-image-compressor-for-mac

cat > src/app/blog/best-image-compressor-for-mac/page.tsx << 'EOF'
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Best Free Image Compressor for Mac 2025 — No Install Needed',
  description: 'Looking for the best image compressor for Mac? CompressTo20KB works in Safari and Chrome — no download, no install, 100% free. Compress HEIC, PNG, JPEG instantly.',
  keywords: 'best image compressor for mac, compress images mac free, mac image compressor no download, compress heic mac, reduce image size mac',
  alternates: { canonical: '/blog/best-image-compressor-for-mac' },
};
export default function Page() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f172a,#1e1b4b)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '48px 20px' }}>
        <div style={{ fontSize: '12px', opacity: 0.5, marginBottom: '12px' }}>Blog → Mac</div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,38px)', fontWeight: 900, marginBottom: '12px', lineHeight: 1.2 }}>Best Free Image Compressor for Mac in 2025</h1>
        <p style={{ opacity: 0.5, fontSize: '13px', marginBottom: '32px' }}>February 2025 · 5 min read</p>

        <p style={{ fontSize: '16px', lineHeight: 1.8, opacity: 0.8, marginBottom: '24px' }}>Mac users often struggle to find a good image compressor. The built-in Preview app can export smaller files, but it offers no control over exact file size, no batch processing, and no WebP support. Here are the best options — including one that requires zero installation.</p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '32px 0 12px' }}>Why Mac Users Need an Image Compressor</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, opacity: 0.8, marginBottom: '16px' }}>iPhone and Mac photos in HEIC format can be 4–8MB each. When uploading to websites, email, or government forms, you need images under specific size limits — often 20KB, 50KB, 200KB, or 1MB. Mac's built-in tools do not offer this level of control.</p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '32px 0 12px' }}>Option 1: CompressTo20KB (Browser-Based, No Install)</h2>
        <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '12px', padding: '16px 20px', marginBottom: '20px' }}>
          <strong style={{ color: '#34d399' }}>✅ Best for: All Mac users who want zero setup</strong>
        </div>
        <p style={{ fontSize: '15px', lineHeight: 1.8, opacity: 0.8, marginBottom: '16px' }}>CompressTo20KB runs entirely in Safari or Chrome — no download, no install. It supports HEIC files from iPhone, batch compression up to 50 images, exact KB targeting, and WebP/AVIF output. Everything runs locally in your browser, so your files never leave your Mac.</p>
        <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: 2, opacity: 0.8, marginBottom: '24px' }}>
          <li>✅ HEIC support (native iPhone format)</li>
          <li>✅ Exact KB mode (hit 20KB, 50KB, 200KB precisely)</li>
          <li>✅ Batch up to 50 images</li>
          <li>✅ Works in Safari on Mac and iPhone</li>
          <li>✅ No install, no account, no cost</li>
        </ul>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '32px 0 12px' }}>Option 2: Mac Preview (Built-in, Limited)</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, opacity: 0.8, marginBottom: '16px' }}>Preview can export images at reduced quality using File → Export → adjust Quality slider. However, it processes one image at a time, does not show the output file size before saving, and has no WebP support. It works for basic needs but lacks precision.</p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '32px 0 12px' }}>Option 3: ImageOptim (Desktop App)</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, opacity: 0.8, marginBottom: '16px' }}>ImageOptim is a free Mac app for lossless compression. It works well for reducing PNG sizes without quality loss. However, it does not support exact KB targeting, HEIC input, or WebP output. It is best combined with a browser tool for cases where you need a specific file size.</p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '32px 0 12px' }}>How to Compress HEIC Photos from iPhone on Mac</h2>
        <ol style={{ paddingLeft: '20px', fontSize: '15px', lineHeight: 2.2, opacity: 0.8 }}>
          <li>AirDrop your HEIC photo from iPhone to Mac</li>
          <li>Open <a href="https://compressto20kb.com" style={{ color: '#818cf8' }}>compressto20kb.com</a> in Safari</li>
          <li>Drop the HEIC file into the upload zone</li>
          <li>Select your target size and output format (JPEG recommended for compatibility)</li>
          <li>Download and use the compressed file</li>
        </ol>

        <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '12px', padding: '20px', margin: '32px 0', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>Compress images on Mac — works in Safari, no install</p>
          <a href="https://compressto20kb.com" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#22d3ee)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 700, textDecoration: 'none', fontSize: '14px' }}>Open CompressTo20KB →</a>
        </div>

        <div style={{ marginTop: '40px', display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize: '13px' }}>
          {[['/', 'Home'], ['/bulk-image-compressor', 'Bulk Compress'], ['/compress-to-200kb', 'Compress to 200KB'], ['/compress-passport-photo', 'Passport Photo']].map(([href, label]) => (
            <a key={href} href={href} style={{ color: '#a5b4fc', textDecoration: 'none', background: 'rgba(99,102,241,0.1)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>{label}</a>
          ))}
        </div>
      </div>
      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)' }}>© 2025 CompressTo20KB</footer>
    </div>
  );
}
EOF

echo ""
echo "✅ Done! Created:"
echo "  VS pages: /vs/kraken, /vs/picresize"
echo "  Blog posts: compress-image-for-google-forms, compress-image-for-microsoft-teams, best-image-compressor-for-mac"
echo ""
echo "Run:"
echo "  git add . && git commit -m 'feat: add kraken/picresize VS pages + 3 new blog posts' && git push"
