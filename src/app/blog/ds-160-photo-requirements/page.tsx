
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Use modern formats like WebP or AVIF which offer 25-50% smaller file sizes than JPEG at the same visual quality. Our tool compresses images client-side in your browser with no upload required, preserving maximum quality."}},{"@type":"Question","name":"Is this image compressor free?","acceptedAnswer":{"@type":"Answer","text":"Yes. CompressTo20KB is 100% free with no file size limits, no account required, and no watermarks. All compression happens in your browser — your images never leave your device."}},{"@type":"Question","name":"What image formats are supported?","acceptedAnswer":{"@type":"Answer","text":"We support JPEG, PNG, WebP, AVIF, and GIF. You can compress and convert between formats. WebP and AVIF produce the smallest file sizes for web use."}}]};
import { Metadata } from "next";
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: "DS-160 Photo Requirements 2026: Compress to 240KB Free in 10 Seconds",
  description: "Meet all DS-160 photo requirements instantly: 600x600px, JPEG, under 240KB. Free compression — works in browser, no upload, no account.",
  alternates: { canonical: 'https://compressto20kb.com/blog/ds-160-photo-requirements' },
  keywords: 'DS-160 photo requirements, DS-160 photo size, compress DS-160 photo, DS-160 JPEG size, nonimmigrant visa photo size 2025',
  openGraph: {
    title: "DS-160 Photo Requirements 2026: Compress to 240KB Free in 10 Seconds",
    description: "Meet all DS-160 photo requirements instantly: 600x600px, JPEG, under 240KB. Free compression — works in browser, no upload, no account.",
    images: [{ url: "/og/ds-160-photo-requirements.png", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

export default function DS160PhotoRequirements() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-4 py-16">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"DS-160 Photo Requirements 2026: Compress to 240KB Free in 10 Seconds","item":"https://compressto20kb.com/blog/ds-160-photo-requirements"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"DS-160 Photo Requirements 2026: Compress to 240KB Free in 10 Seconds","description":"Meet all DS-160 photo requirements instantly: 600x600px, JPEG, under 240KB. Free compression — works in browser, no upload, no account.","url":"https://compressto20kb.com/blog/ds-160-photo-requirements","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://compressto20kb.com"}}' }} />
      <div className="text-sm text-slate-400 mb-3">
        🇺🇸 US Visa · DS-160 Guide
      </div>
      <h1 className="text-4xl font-bold mb-4">DS-160 Photo Requirements 2025 — Complete Guide</h1>
      <p className="text-slate-300 mb-8">Updated February 2026 · 8 min read</p>

      <p className="mb-6 text-lg">
        The DS-160 online nonimmigrant visa application requires a digital photo that meets strict US State Department standards. Every year thousands of applications are delayed or rejected because of incorrect photo size, format, or dimensions. This guide covers every requirement and shows you how to fix your photo in seconds.
      </p>

      {/* Quick reference box */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-bold mb-4">⚡ DS-160 Photo Requirements — Quick Reference</h2>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {[
            ['File size', 'Max 240KB'],
            ['Format', 'JPEG (.jpg) only'],
            ['Dimensions', '600×600 to 1200×1200 px'],
            ['Background', 'Plain white or off-white'],
            ['Face coverage', '50–69% of frame'],
            ['Recency', 'Taken within 6 months'],
            ['Glasses', 'Not allowed'],
            ['Expression', 'Neutral, mouth closed'],
          ].map(([label, val]) => (
            <div key={label} className="flex gap-2">
              <span className="font-semibold text-indigo-700 min-w-[110px]">{label}:</span>
              <span className="text-gray-700">{val}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">What is DS-160?</h2>
      <p className="mb-4">
        The DS-160 is the Online Nonimmigrant Visa Application form used by the US State Department for all nonimmigrant visa categories — including tourist (B-1/B-2), student (F-1), work (H-1B), exchange visitor (J-1) and others. You fill it out at <strong>ceac.state.gov</strong> before your visa interview at a US embassy or consulate.
      </p>
      <p className="mb-6">
        The photo upload is one of the most technically strict parts of the DS-160. The portal automatically rejects photos that don't meet the exact requirements.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">DS-160 Photo File Size Requirement</h2>
      <p className="mb-4">
        The DS-160 portal requires your photo to be <strong>under 240KB</strong>. However in practice, many applicants report that the portal works best with files under 50KB. A high-resolution photo from your phone is typically 3–8MB — way too large.
      </p>
      <p className="mb-4">
        The easiest fix: use a free browser-based compressor that processes your photo locally without uploading it to a server.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <p className="text-sm font-semibold text-blue-800 mb-1">How to compress your DS-160 photo in 10 seconds:</p>
        <ol className="text-sm text-blue-700 list-decimal pl-4 space-y-1">
          <li>Go to <a href="/?preset=50kb" className="underline font-semibold">CompressTo20KB.com</a></li>
          <li>Upload your JPEG photo (never leaves your device)</li>
          <li>Type <strong>50</strong> in the Exact KB field or select "Gov 240KB" preset</li>
          <li>Download and upload to DS-160 portal</li>
        </ol>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">DS-160 Photo Dimensions</h2>
      <p className="mb-4">
        The photo must be between <strong>600×600 pixels</strong> (minimum) and <strong>1200×1200 pixels</strong> (maximum). The image must be square — equal width and height. Rectangular photos (like standard 35×45mm passport photos) need to be cropped to a square first.
      </p>
      <p className="mb-6">
        Most smartphone cameras produce photos that are already large enough in pixels. The issue is almost always the file size, not the pixel dimensions.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">DS-160 Photo Format</h2>
      <p className="mb-4">
        Only <strong>JPEG (.jpg)</strong> format is accepted. PNG, WebP, HEIC (iPhone), BMP and other formats will be rejected. If your photo is in HEIC format (common on iPhones), convert it to JPEG first — most photo editors and Windows Photos can do this for free.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Background, Lighting and Pose Requirements</h2>
      <p className="mb-4">The US State Department is very specific about photo composition:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
        <li><strong>Background:</strong> Plain white or off-white. No patterns, shadows or other people.</li>
        <li><strong>Lighting:</strong> Even lighting, no harsh shadows on face or background.</li>
        <li><strong>Face:</strong> Full front view, looking directly at camera. Both ears should be visible.</li>
        <li><strong>Expression:</strong> Neutral expression, mouth closed.</li>
        <li><strong>Eyes:</strong> Open, clearly visible, looking at camera. No red-eye.</li>
        <li><strong>Glasses:</strong> Not permitted since 2016. Remove glasses before taking the photo.</li>
        <li><strong>Head coverings:</strong> Only allowed for religious reasons, and the full face must still be visible.</li>
        <li><strong>Face coverage:</strong> Your face must cover 50–69% of the photo frame from chin to crown.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Common DS-160 Photo Rejection Reasons</h2>
      <div className="space-y-3 mb-8">
        {[
          ['File too large', 'Photo is over 240KB. Compress it to under 50KB using a free tool.'],
          ['Wrong format', 'Only JPEG accepted. Convert from PNG/HEIC/WebP first.'],
          ['Glasses visible', 'Remove glasses. This rule applies to prescription glasses too.'],
          ['Dark background', 'Must be plain white or off-white. Not grey, not blue.'],
          ['Old photo', 'Must be taken within the last 6 months.'],
          ['Face too small', 'Face must fill 50–69% of the frame.'],
          ['Shadows on face', 'Ensure even lighting from the front.'],
        ].map(([problem, fix]) => (
          <div key={problem} className="flex gap-3 p-3 bg-red-50 border border-red-100 rounded-lg">
            <span className="text-red-500 font-bold text-sm min-w-[140px]">❌ {problem}</span>
            <span className="text-slate-300 text-sm">{fix}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">DS-160 vs USCIS vs US Passport Photo — What's the Difference?</h2>
      <p className="mb-4">
        All three use the same US State Department photo standards — JPEG, max 240KB, 600×600 to 1200×1200 pixels, white background. The requirements are essentially identical, so a photo that passes DS-160 will also work for USCIS forms (I-485, N-400, I-90) and US passport applications (DS-11, DS-82).
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">DS-160 Photo Checklist</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>File size under 240KB (ideally under 50KB)</li>
        <li>JPEG format (.jpg)</li>
        <li>600×600 to 1200×1200 pixels, square crop</li>
        <li>Plain white or off-white background</li>
        <li>Taken within the last 6 months</li>
        <li>No glasses</li>
        <li>Neutral expression, mouth closed</li>
        <li>Full front view, both ears visible</li>
        <li>Face covers 50–69% of the frame</li>
        <li>No shadows on face or background</li>
      </ul>

      {/* CTA */}
      <div className="mt-12 p-6 bg-indigo-50 rounded-2xl border border-indigo-200">
        <h3 className="text-xl font-semibold mb-2">Compress your DS-160 photo now — free</h3>
        <p className="text-slate-300 mb-4">
          Reduce your photo to under 50KB instantly. Files never leave your device — 100% private. No registration, no account needed.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a href="/?preset=50kb" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
            🇺🇸 Compress DS-160 Photo →
          </a>
          <a href="/compress-for-uscis" className="inline-block bg-white border border-indigo-300 text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition">
            Full USCIS Guide →
          </a>
        </div>
      </div>

      {/* Related articles */}
      <div className="mt-10">
        <p className="text-sm font-semibold text-slate-300 mb-3">Related guides:</p>
        <div className="flex gap-3 flex-wrap">
          {[
            ['/compress-for-uscis', 'USCIS Photo Requirements'],
            ['/compress-for-dv-lottery', 'DV Lottery Photo Guide'],
            ['/compress-passport-photo', 'Passport Photo Compressor'],
            ['/blog/image-optimization-2026', 'Image Optimization 2026'],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-indigo-600 hover:underline border border-indigo-200 px-3 py-1 rounded-lg">
              {label} →
            </a>
          ))}
        </div>

      <section style={{maxWidth:'800px',margin:'0 auto',padding:'0 20px 40px'}}>
        <h2 style={{fontSize:'20px',fontWeight:700,color:'white',marginBottom:'16px'}}>Related Articles</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
        <a href='/blog/reduce-image-size-for-government-forms-usa' style={{display:'block',padding:'12px 16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',color:'#818cf8',textDecoration:'none',fontSize:'14px',fontWeight:500,transition:'border-color 0.2s'}}>
          → Reduce Image Size for US Government Forms
        </a>
        <a href='/blog/uscis-photo-size-requirements' style={{display:'block',padding:'12px 16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',color:'#818cf8',textDecoration:'none',fontSize:'14px',fontWeight:500,transition:'border-color 0.2s'}}>
          → USCIS Photo Size Requirements
        </a>
        <a href='/blog/compress-jpeg-under-1mb' style={{display:'block',padding:'12px 16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',color:'#818cf8',textDecoration:'none',fontSize:'14px',fontWeight:500,transition:'border-color 0.2s'}}>
          → Compress JPEG Under 1MB
        </a>
        </div>
        <div style={{marginTop:'24px',textAlign:'center'}}>
          <a href='/' style={{display:'inline-block',background:'rgba(99,102,241,0.15)',border:'1px solid rgba(99,102,241,0.4)',color:'#818cf8',padding:'10px 24px',borderRadius:'8px',textDecoration:'none',fontWeight:600,fontSize:'14px'}}>
            ← Back to Image Compressor
          </a>
        </div>
      </section>
      </div>
    </main>
      <AuthorBox />
    </>
  );
}
