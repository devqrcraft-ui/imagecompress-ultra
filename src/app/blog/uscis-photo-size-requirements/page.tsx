import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USCIS Photo Size Requirements 2025 — Complete Guide",
  description: "Complete USCIS photo size requirements 2025: file size 240KB, dimensions, format, background. Which forms need a photo? How to compress free — no upload.",
  alternates: { canonical: '/blog/uscis-photo-size-requirements' },
  keywords: 'USCIS photo size requirements 2025, USCIS photo requirements, compress USCIS photo, USCIS 240KB photo, green card photo requirements, I-485 photo size',
  openGraph: {
    title: "USCIS Photo Size Requirements 2025 — Complete Guide",
    description: "Everything about USCIS photo requirements 2025: size, format, dimensions, which forms need photos, and how to compress free.",
    images: [{ url: "/og/uscis-photo-size-requirements.png", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

export default function USCISPhotoRequirements() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-sm text-gray-400 mb-3">
        🇺🇸 USCIS · Immigration Guide 2025
      </div>
      <h1 className="text-4xl font-bold mb-4">USCIS Photo Size Requirements 2025 — Complete Guide</h1>
      <p className="text-gray-500 mb-8">Updated February 2026 · 9 min read</p>

      <p className="mb-6 text-lg">
        USCIS (US Citizenship and Immigration Services) requires a specific digital photo for most immigration forms. Getting the photo wrong — wrong size, format or dimensions — can delay or invalidate your application. This guide covers every requirement for 2025 and shows you how to fix your photo for free in seconds.
      </p>

      {/* Quick reference */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-bold mb-4">⚡ USCIS Photo Requirements — Quick Reference 2025</h2>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {[
            ['File size', 'Max 240KB (portals often reject >50KB)'],
            ['Format', 'JPEG (.jpg) only'],
            ['Dimensions', '600×600 to 1200×1200 px'],
            ['Background', 'Plain white or off-white'],
            ['Face coverage', '50–69% of frame'],
            ['Recency', 'Taken within 6 months'],
            ['Glasses', 'Not allowed'],
            ['Head coverings', 'Religious only, full face visible'],
          ].map(([label, val]) => (
            <div key={label} className="flex gap-2">
              <span className="font-semibold text-indigo-700 min-w-[120px]">{label}:</span>
              <span className="text-gray-700">{val}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">What is the USCIS Photo File Size Limit?</h2>
      <p className="mb-4">
        USCIS requires all digital photos to be <strong>under 240KB</strong> in JPEG format. This applies to online submissions through the USCIS portal, myUSCIS account, and the ELIS system.
      </p>
      <p className="mb-4">
        In practice, many USCIS online portals reject photos over 50KB even though the official limit is 240KB. A typical smartphone photo is 3–8MB — about 30–60 times too large. You need to compress it before uploading.
      </p>
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
        <p className="text-sm font-semibold text-yellow-800 mb-1">💡 Pro tip:</p>
        <p className="text-sm text-yellow-700">Compress to 50KB rather than 240KB. This ensures your photo passes all USCIS portals — including older ones with stricter limits — while still maintaining good quality.</p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">USCIS Photo Dimensions</h2>
      <p className="mb-4">
        The photo must be <strong>square</strong> — equal width and height — between <strong>600×600 pixels</strong> (minimum) and <strong>1200×1200 pixels</strong> (maximum). Standard rectangular passport photos (35×45mm) need to be cropped to a square before submission.
      </p>
      <p className="mb-6">
        USCIS also specifies that your face must occupy <strong>50–69% of the total image height</strong>, measured from the bottom of the chin to the top of the head.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Which USCIS Forms Require a Photo?</h2>
      <p className="mb-4">Most USCIS immigration forms require a photo. Here are the most common:</p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-indigo-50">
              <th className="text-left p-3 border border-indigo-100 font-semibold text-indigo-800">Form</th>
              <th className="text-left p-3 border border-indigo-100 font-semibold text-indigo-800">Purpose</th>
              <th className="text-left p-3 border border-indigo-100 font-semibold text-indigo-800">Photo required</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['I-485', 'Adjustment of Status (Green Card)', 'Yes — 2 photos'],
              ['N-400', 'Application for Naturalization', 'Yes — 2 photos'],
              ['I-90', 'Green Card Renewal/Replacement', 'Yes'],
              ['I-765', 'Employment Authorization (EAD)', 'Yes — 2 photos'],
              ['I-131', 'Advance Parole / Travel Document', 'Yes — 2 photos'],
              ['I-539', 'Extension/Change of Status', 'Yes — 2 photos'],
              ['I-130', 'Petition for Alien Relative', 'No (petitioner only)'],
              ['DS-160', 'Nonimmigrant Visa Application', 'Yes — digital upload'],
              ['DV Lottery', 'Diversity Visa Program', 'Yes — digital upload'],
            ].map(([form, purpose, photo], i) => (
              <tr key={form} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-100 font-semibold text-indigo-600">{form}</td>
                <td className="p-3 border border-gray-100 text-gray-700">{purpose}</td>
                <td className="p-3 border border-gray-100 text-gray-600">{photo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">USCIS Photo Background Requirements</h2>
      <p className="mb-4">
        The background must be <strong>plain white or off-white</strong>. No patterns, textures, shadows or other people are allowed. USCIS uses automated facial recognition software that can detect incorrect backgrounds and flag your application for manual review.
      </p>
      <p className="mb-6">
        Common mistakes: grey backgrounds (too dark), off-white walls with visible texture, shadows from direct lighting. The easiest setup is standing near a white wall with natural light from a window.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">How to Compress Your USCIS Photo to 240KB (Free)</h2>
      <p className="mb-4">
        Most online photo compressors upload your immigration photo to a foreign server — a serious privacy risk. Our tool compresses entirely in your browser, so your photo never leaves your device.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <p className="text-sm font-semibold text-blue-800 mb-2">3 steps — takes 10 seconds:</p>
        <ol className="text-sm text-blue-700 list-decimal pl-4 space-y-1">
          <li>Go to <a href="/compress-for-uscis" className="underline font-semibold">CompressTo20KB.com/compress-for-uscis</a></li>
          <li>Upload your JPEG photo (never uploaded to any server)</li>
          <li>Select "Gov 240KB" preset or type <strong>50</strong> for best compatibility</li>
          <li>Download and upload to your USCIS form portal</li>
        </ol>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">USCIS vs State Department vs DV Lottery — Same Requirements?</h2>
      <p className="mb-6">
        Yes — all three use identical photo standards. A photo that meets USCIS requirements will also work for DS-160, DS-11 (US passport), DS-82 (passport renewal), and DV Lottery submissions. The standard is set by the US State Department and applies across all immigration forms.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Common USCIS Photo Rejection Reasons</h2>
      <div className="space-y-3 mb-8">
        {[
          ['File too large', 'Over 240KB. Compress to 50KB for best results.'],
          ['Wrong format', 'Must be JPEG. PNG and HEIC are rejected.'],
          ['Not square', 'Width and height must be equal.'],
          ['Too small', 'Minimum 600×600 pixels.'],
          ['Glasses on', 'Glasses not allowed since 2016.'],
          ['Dark background', 'Must be plain white or off-white.'],
          ['Photo too old', 'Must be taken within last 6 months.'],
          ['Face too small', 'Face must fill 50–69% of frame.'],
        ].map(([problem, fix]) => (
          <div key={problem} className="flex gap-3 p-3 bg-red-50 border border-red-100 rounded-lg">
            <span className="text-red-500 font-bold text-sm min-w-[120px]">❌ {problem}</span>
            <span className="text-gray-600 text-sm">{fix}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">USCIS Photo Checklist 2025</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>File under 240KB (ideally under 50KB) in JPEG format</li>
        <li>Square crop, 600×600 to 1200×1200 pixels</li>
        <li>Plain white or off-white background</li>
        <li>Taken within last 6 months</li>
        <li>No glasses</li>
        <li>Neutral expression, mouth closed</li>
        <li>Full front view, eyes open, looking at camera</li>
        <li>Face covers 50–69% of the frame</li>
        <li>No shadows on face or background</li>
        <li>No head coverings (except religious)</li>
      </ul>

      {/* CTA */}
      <div className="mt-12 p-6 bg-indigo-50 rounded-2xl border border-indigo-200">
        <h3 className="text-xl font-semibold mb-2">Compress your USCIS photo now — free & private</h3>
        <p className="text-gray-600 mb-4">
          Reduce to under 50KB instantly. Your photo never leaves your device — unlike PNG Shrinker or Fotor. No account needed.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a href="/compress-for-uscis" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
            🇺🇸 Compress USCIS Photo →
          </a>
          <a href="/compress-for-dv-lottery" className="inline-block bg-white border border-indigo-300 text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition">
            DV Lottery Photo →
          </a>
        </div>
      </div>

      {/* Related */}
      <div className="mt-10">
        <p className="text-sm font-semibold text-gray-500 mb-3">Related guides:</p>
        <div className="flex gap-3 flex-wrap">
          {[
            ['/blog/ds-160-photo-requirements', 'DS-160 Photo Guide'],
            ['/compress-for-uscis', 'USCIS Photo Compressor'],
            ['/compress-for-dv-lottery', 'DV Lottery Photo'],
            ['/compress-passport-photo', 'Passport Photo'],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-indigo-600 hover:underline border border-indigo-200 px-3 py-1 rounded-lg">
              {label} →
            </a>
          ))}
        </div>

      <section style={{maxWidth:'800px',margin:'0 auto',padding:'0 20px 40px'}}>
        <h2 style={{fontSize:'20px',fontWeight:700,color:'white',marginBottom:'16px'}}>Related Articles</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
        <a href='/blog/ds-160-photo-requirements' style={{display:'block',padding:'12px 16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',color:'#818cf8',textDecoration:'none',fontSize:'14px',fontWeight:500,transition:'border-color 0.2s'}}>
          → DS-160 Photo Requirements
        </a>
        <a href='/blog/reduce-image-size-for-government-forms-usa' style={{display:'block',padding:'12px 16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',color:'#818cf8',textDecoration:'none',fontSize:'14px',fontWeight:500,transition:'border-color 0.2s'}}>
          → Reduce Image Size for US Government Forms
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
  );
}
