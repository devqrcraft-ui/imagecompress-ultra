import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Photo for LinkedIn Profile — Perfect Size, Free Online',
  description: 'Compress your LinkedIn profile photo and banner to the ideal size. Free, no upload, 100% private. Works instantly in your browser — no signup required.',
  keywords: 'compress photo for linkedin, linkedin profile photo size, linkedin banner image size, resize photo for linkedin, compress linkedin profile picture free',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-linkedin' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-linkedin' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best image size for a LinkedIn profile photo?',
      acceptedAnswer: { '@type': 'Answer', text: 'LinkedIn recommends profile photos at 400x400px minimum, up to 8MB. For best display, use a square JPEG at 400-800px under 200KB. LinkedIn re-compresses uploads — starting with a clean compressed file reduces visible artifacts on your profile.' },
    },
    {
      '@type': 'Question',
      name: 'What is the recommended size for a LinkedIn banner (background) image?',
      acceptedAnswer: { '@type': 'Answer', text: 'LinkedIn banner images display at 1584x396px. Upload at least 1584px wide. For file size, aim for under 500KB as JPEG or WebP. LinkedIn crops the banner on mobile, so keep important content centered.' },
    },
    {
      '@type': 'Question',
      name: 'How do I compress a photo for LinkedIn without losing quality?',
      acceptedAnswer: { '@type': 'Answer', text: 'Upload your photo, select JPEG format, set Exact KB Mode to 200KB, and click Compress. This produces a clean file that LinkedIn will not over-compress when you upload it to your profile or company page.' },
    },
    {
      '@type': 'Question',
      name: 'What image format does LinkedIn accept?',
      acceptedAnswer: { '@type': 'Answer', text: 'LinkedIn accepts JPEG, PNG, and GIF for profile and cover photos. JPEG is recommended for profile photos. PNG works well for company logos and graphics with transparent backgrounds.' },
    },
    {
      '@type': 'Question',
      name: 'Will my LinkedIn photo be uploaded to compress it?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. All compression runs locally in your browser. Your photo never leaves your device — safe for professional headshots and business profile images.' },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">

        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '12px' }}>
          <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → Compress for LinkedIn
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Compress Photo for <span style={{ color: '#818cf8' }}>LinkedIn</span> — Free, No Upload
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Compress your LinkedIn profile photo and banner to the perfect size — instantly in your browser. No upload, no signup, 100% private.
        </p>

        <ClientPage />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">LinkedIn Image Size Requirements 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Image Type</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Dimensions</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Target Size</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Format</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Profile Photo', '400×400px min', 'Under 200KB', 'JPEG'],
                  ['Banner / Background', '1584×396px', 'Under 500KB', 'JPEG or PNG'],
                  ['Company Logo', '300×300px', 'Under 100KB', 'PNG'],
                  ['Company Banner', '1128×191px', 'Under 500KB', 'JPEG or PNG'],
                  ['Post Image', '1200×627px', 'Under 1MB', 'JPEG'],
                ].map(([type, dims, size, fmt], i) => (
                  <tr key={i} className={`border-b border-slate-800 ${i % 2 === 0 ? 'bg-slate-800/20' : ''}`}>
                    <td className="py-3 px-4 text-slate-300 font-medium">{type}</td>
                    <td className="py-3 px-4 text-slate-400 text-center text-xs">{dims}</td>
                    <td className="py-3 px-4 text-violet-400 font-bold text-center">{size}</td>
                    <td className="py-3 px-4 text-slate-400 text-center">{fmt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Why Compress Your LinkedIn Photo Before Uploading?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            LinkedIn automatically re-compresses every photo you upload. If you upload a large, unoptimized file, LinkedIn applies its own aggressive compression — often resulting in a noticeably blurry or pixelated profile photo. Pre-compressing to a clean 150-200KB JPEG gives LinkedIn less room to degrade your image, and the result is a visibly sharper profile photo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {[
              ['👤', 'Profile Photo', 'A sharp, well-compressed headshot signals professionalism. Blurry LinkedIn photos from over-compression are immediately noticeable to recruiters and connections.'],
              ['🏢', 'Company Page', 'Company logos and banners that are pre-optimized display consistently across desktop, mobile app, and LinkedIn email notifications.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="text-2xl mb-2">{icon}</div>
                <div className="font-semibold text-white text-sm mb-1">{title}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">How to Compress a Photo for LinkedIn — 4 Steps</h2>
          <div className="space-y-4">
            {[
              { n: '1', t: 'Upload your photo', d: 'Click upload or drag your profile photo or banner. Accepts JPEG, PNG, WebP, HEIC.' },
              { n: '2', t: 'Select JPEG format', d: 'JPEG is the best format for LinkedIn profile photos. Use PNG only for logos with transparent backgrounds.' },
              { n: '3', t: 'Set target size', d: 'For profile photos: Exact KB Mode → 150-200KB. For banners: 300-500KB. For post images: 500KB-1MB.' },
              { n: '4', t: 'Compress and upload', d: 'Click Compress, download the optimized file, and upload directly to LinkedIn. Everything runs in your browser — nothing uploaded.' },
            ].map(s => (
              <div key={s.n} className="flex gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold text-white">{s.n}</div>
                <div><h3 className="font-semibold text-white mb-1">{s.t}</h3><p className="text-slate-400 text-sm">{s.d}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              ['What is the best LinkedIn profile photo size?', 'Square JPEG at 400-800px, under 200KB. LinkedIn displays profile photos at 400x400px — uploading larger dimensions does not improve quality but causes heavier re-compression.'],
              ['Why does my LinkedIn photo look blurry after uploading?', 'LinkedIn re-compresses all uploaded photos. Uploading a large unoptimized file gives LinkedIn more to compress, resulting in visible blur. Pre-compress to a clean 150-200KB JPEG before uploading.'],
              ['What size should a LinkedIn banner be?', '1584x396px, under 500KB as JPEG. Keep important content (logo, text) centered — LinkedIn crops the banner differently on mobile vs desktop.'],
              ['Will my photo be uploaded to compress it?', 'No. All compression runs locally in your browser. Your photo never leaves your device — safe for professional headshots.'],
            ].map(([q, a], i) => (
              <details key={i} className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-4">
                <summary className="font-semibold text-white cursor-pointer">{q}</summary>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[
              ['/', '🏠 Home — Image Compressor'],
              ['/compress-for-instagram', 'For Instagram'],
              ['/compress-for-twitter', 'For Twitter/X'],
              ['/compress-to-200kb', 'Compress to 200KB'],
              ['/compress-for-email', 'For Email'],
              ['/compress-for-resume-photo', 'Resume Photo'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{label} →</a>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
