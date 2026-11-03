
import { Metadata } from "next";
import Link from 'next/link';
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: "USCIS Photo Requirements: File Size and Form-Specific Rules",
  description: "USCIS says online evidence files must be no larger than 12MB. File types and photo requirements vary by form and filing process; check current official instructions.",
  alternates: { canonical: 'https://www.compressto20kb.com/blog/uscis-photo-size-requirements' },
  keywords: 'USCIS photo requirements, USCIS online filing, USCIS evidence file size, USCIS accepted file types, compress image for USCIS',
  openGraph: {
    title: "USCIS Photo Requirements: File Size and Form-Specific Rules",
    description: "Online evidence file limits and accepted formats can vary by form. Check the current USCIS instructions before uploading.",
    images: [{ url: "/og/uscis-photo-size-requirements.png", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

export default function USCISPhotoRequirements() {
  return (
    <>
      <main className="min-h-screen bg-[#0f0c29] text-slate-100 max-w-3xl mx-auto px-4 py-16">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"USCIS Photo Requirements: File Size and Form-Specific Rules","item":"https://www.compressto20kb.com/blog/uscis-photo-size-requirements"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"USCIS Photo Requirements: File Size and Form-Specific Rules","description":"USCIS says online evidence files must be no larger than 12MB. File types and photo requirements vary by form and filing process; check current official instructions.","url":"https://www.compressto20kb.com/blog/uscis-photo-size-requirements","datePublished":"2026-01-01","dateModified":"2026-11-02","author":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"}}' }} />
      <div className="text-sm text-slate-400 mb-3">
        USCIS · Online filing guide
      </div>
      <h1 className="text-4xl font-bold mb-4">USCIS Photo Requirements: File Size and Form-Specific Rules</h1>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.68)', marginBottom: 20, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
          <span>Last checked: November 2026</span>
          <span>{'·'}</span>
          <span>By the CompressTo20KB Team</span>
          <span>{'·'}</span>
          <span>{'~7 min read'}</span>
        </div>
      <p className="text-slate-300 mb-8">7 min read</p>

      <p className="mb-6 text-lg">
        USCIS online filing requirements depend on the form and the evidence being submitted. USCIS guidance gives a general 12MB maximum for online evidence files, but photo specifications are not universal across every form or process. Always follow the current instructions displayed for your application.
      </p>

      {/* Quick reference */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-bold mb-4">USCIS online filing — quick reference</h2>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {[
            ['Evidence files', 'No larger than 12MB, subject to form instructions'],
            ['Common formats', 'Usually PDF, JPG/JPEG; some forms accept TIFF'],
            ['Photo rules', 'Check the specific form and filing process'],
            ['This tool', 'Compresses image bytes; does not validate photo specs'],
          ].map(([label, val]) => (
            <div key={label} className="flex gap-2">
              <span className="font-semibold text-indigo-700 min-w-[120px]">{label}:</span>
              <span className="text-gray-700">{val}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">USCIS online file size and formats</h2>
      <p className="mb-4">
        USCIS online filing tips state that evidence files must be <strong>12MB or smaller</strong>. USCIS generally accepts PDF, JPG, and JPEG files; some forms also accept TIF or TIFF. Check the <a href="https://www.uscis.gov/file-online/tips-for-filing-forms-online" target="_blank" rel="noopener noreferrer" className="underline">current USCIS online filing tips</a> and the instructions for your form because permitted file types and submission steps can differ.
      </p>
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
        <p className="text-sm font-semibold text-yellow-800 mb-1">Check before uploading</p>
        <p className="text-sm text-yellow-700">The 12MB figure is a general evidence-file ceiling, not a universal passport-style photo specification. Follow any lower limit or image requirements shown for your particular form.</p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Photo requirements depend on the form</h2>
      <p className="mb-4">
        Do not assume one set of pixel dimensions, background, or photo rules applies to every USCIS filing. Some online applications may request a photo, while others use different evidence or biometrics procedures. Use the current instructions on the USCIS form page and in your online account.
      </p>
      <p className="mb-6">
        This image compressor can reduce file size, but it does not crop, resize, assess the background, or verify a photo against USCIS requirements.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">USCIS and U.S. Department of State are different</h2>
      <p className="mb-6">
        The DS-160 and U.S. passport applications are Department of State processes, not USCIS filings. Their photo instructions should not be treated as USCIS rules. Check the authority and application named in your own instructions before changing an image.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">How to reduce an image file size</h2>
      <p className="mb-4">
        This tool processes supported images in your browser. It can reduce an image&apos;s file size, but it does not compress PDF files or confirm that an upload meets a particular USCIS form&apos;s requirements.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <p className="text-sm font-semibold text-blue-800 mb-2">Before submitting:</p>
        <ol className="text-sm text-blue-700 list-decimal pl-4 space-y-1">
          <li>Read the current file-size and format instructions for your form.</li>
          <li>Use an image compressor only if the supported image exceeds the stated limit.</li>
          <li>Keep the original and inspect the compressed result for legibility.</li>
          <li>Verify the final file in the USCIS upload flow before submitting.</li>
        </ol>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Common upload problems to check</h2>
      <div className="space-y-3 mb-8">
        {[
          ['File too large', 'Compare the file size with the limit shown for your specific upload.'],
          ['Unsupported format', 'Use a file type listed in the form instructions.'],
          ['Image requirements', 'Check dimensions, crop, and composition separately; compression does not validate them.'],
          ['Unreadable evidence', 'Make sure text and details remain clear after compression.'],
          ['Wrong application guidance', 'Confirm the instructions are for your form and filing agency.'],
        ].map(([problem, fix]) => (
          <div key={problem} className="flex gap-3 p-3 bg-red-50 border border-red-100 rounded-lg">
            <span className="text-red-700 font-bold text-sm min-w-[120px]">❌ {problem}</span>
            <span className="text-slate-700 text-sm">{fix}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Pre-submission checklist</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Confirm the exact size and file type in the current USCIS instructions for your form.</li>
        <li>Check any image dimensions or photo rules separately from the file-size limit.</li>
        <li>Keep the image or document legible after compression.</li>
        <li>Do not use DS-160 or passport requirements as substitutes for USCIS instructions.</li>
        <li>Review the upload and submission confirmation in your USCIS account.</li>
      </ul>

      {/* CTA */}
      <div className="mt-12 p-6 bg-indigo-50 rounded-2xl border border-indigo-200">
        <h3 className="text-xl font-semibold mb-2">Need to reduce an image file size?</h3>
        <p className="text-slate-700 mb-4">
          Use the browser-based tool only after checking the required limit and format for your application. It compresses images but does not certify photo compliance.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a href="/compress-for-uscis" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
            Compress an image →
          </a>
          <a href="/compress-for-dv-lottery" className="inline-block bg-white border border-indigo-300 text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition">
            DV Lottery Photo →
          </a>
        </div>
      </div>

      {/* Related */}
      <div className="mt-10">
        <p className="text-sm font-semibold text-slate-300 mb-3">Related guides:</p>
        <div className="flex gap-3 flex-wrap">
          {[
            ['/blog/ds-160-photo-requirements', 'DS-160 Photo Guide'],
            ['/compress-for-uscis', 'USCIS Photo Compressor'],
            ['/compress-for-dv-lottery', 'DV Lottery Photo'],
            ['/compress-passport-photo', 'Passport Photo'],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-indigo-300 hover:underline border border-indigo-400/40 px-3 py-1 rounded-lg">
              {label} →
            </a>
          ))}
        </div>

      <section style={{maxWidth:'800px',margin:'0 auto',padding:'0 20px 40px'}}>
        <h2 style={{fontSize:'20px',fontWeight:700,color:'white',marginBottom:'16px'}}>Related Articles</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
        <Link href='/blog/ds-160-photo-requirements' style={{display:'block',padding:'12px 16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',color:'#c7d2fe',textDecoration:'none',fontSize:'14px',fontWeight:500,transition:'border-color 0.2s'}}>
          → DS-160 Photo Requirements
        </Link>
        <Link href='/blog/reduce-image-size-for-government-forms-usa' style={{display:'block',padding:'12px 16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',color:'#c7d2fe',textDecoration:'none',fontSize:'14px',fontWeight:500,transition:'border-color 0.2s'}}>
          → Reduce Image Size for US Government Forms
        </Link>
        <Link href='/blog/compress-jpeg-under-1mb' style={{display:'block',padding:'12px 16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',color:'#c7d2fe',textDecoration:'none',fontSize:'14px',fontWeight:500,transition:'border-color 0.2s'}}>
          → Compress JPEG Under 1MB
        </Link>
        </div>
        <div style={{marginTop:'24px',textAlign:'center'}}>
          <Link href='/' style={{display:'inline-block',background:'rgba(99,102,241,0.15)',border:'1px solid rgba(99,102,241,0.4)',color:'#c7d2fe',padding:'10px 24px',borderRadius:'8px',textDecoration:'none',fontWeight:600,fontSize:'14px'}}>
            ← Back to Image Compressor
          </Link>
        </div>
      </section>
      </div>
    </main>
      <AuthorBox />
    </>
  );
}
