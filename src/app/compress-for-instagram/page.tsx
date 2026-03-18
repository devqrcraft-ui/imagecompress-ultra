import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Photos for Instagram 2026 — Keep Quality, Under 1MB, Free',
  description: 'Instagram recompresses uploads and destroys quality. Pre-compress to under 1MB at 1080px — our tool preserves sharpness Instagram would crush. Free, instant, no signup.',
  keywords: 'compress image for instagram, resize image for instagram, instagram photo size, compress photo for instagram, instagram image optimizer',
  alternates: { canonical: 'https://compressto20kb.com/compress-for-instagram' },
  openGraph: {
    title: 'Compress Images for Instagram Free — 1080px, No Upload',
    description: 'Resize and compress photos to perfect Instagram dimensions. Files stay in your browser.',
    url: 'https://compressto20kb.com/compress-for-instagram',
    images: [{ url: 'https://compressto20kb.com/og-image.png', width: 1200, height: 630, alt: 'Compress Images for Instagram Free' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best image size for Instagram?',
      acceptedAnswer: { '@type': 'Answer', text: 'Instagram displays square posts at 1080x1080px, portrait at 1080x1350px, and landscape at 1080x566px. Keep files under 1MB. JPEG at 85-90% quality at 1080px typically produces 100-300KB — ideal for fast loading without quality loss.' },
    },
    {
      '@type': 'Question',
      name: 'How do I compress a photo for Instagram without losing quality?',
      acceptedAnswer: { '@type': 'Answer', text: 'Upload your image, select JPEG format at 85-90% quality, and compress. Instagram re-compresses uploads automatically — starting with a well-optimized file reduces double-compression artifacts and keeps your posts looking sharp.' },
    },
    {
      '@type': 'Question',
      name: 'Does Instagram accept WebP images?',
      acceptedAnswer: { '@type': 'Answer', text: 'No — Instagram requires JPEG for photo uploads. Use JPEG format when compressing images for Instagram posts, Stories, and Reels thumbnails.' },
    },
    {
      '@type': 'Question',
      name: 'Why do Instagram photos look blurry after uploading?',
      acceptedAnswer: { '@type': 'Answer', text: 'Instagram automatically re-compresses every photo you upload. If your original file is already low quality or heavily compressed, Instagram degrades it further. Upload a clean, well-compressed JPEG under 1MB at 1080px for the sharpest result.' },
    },
    {
      '@type': 'Question',
      name: 'Will my photos be uploaded to a server when compressing for Instagram?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. All compression runs in your browser. Your photos never leave your device — unlike other tools that upload files to their servers.' },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">

        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '12px' }}>
          <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → Compress for Instagram
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Compress Photos for <span style={{ color: '#818cf8' }}>Instagram</span> — Keep Quality, Free
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Instagram re-compresses every photo you upload and crushes quality. Pre-compress to under 1MB at 1080px before uploading — your posts will look noticeably sharper.
        </p>

        <ClientPage />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Instagram Image Size Requirements 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Post Type</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Dimensions</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Target Size</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Format</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Square Post', '1080×1080px', 'Under 500KB', 'JPEG'],
                  ['Portrait Post', '1080×1350px', 'Under 700KB', 'JPEG'],
                  ['Landscape Post', '1080×566px', 'Under 400KB', 'JPEG'],
                  ['Stories / Reels', '1080×1920px', 'Under 1MB', 'JPEG'],
                  ['Profile Photo', '320×320px display', 'Under 100KB', 'JPEG'],
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
          <h2 className="text-2xl font-bold text-white mb-4">Why Pre-Compress Before Uploading to Instagram?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Instagram applies its own compression to every photo you upload — regardless of file size. The key insight is that Instagram compresses to a fixed output quality. If you upload a large, high-quality original, Instagram still compresses it — and the result may still look blurry. But if you upload a clean, pre-compressed JPEG at the right dimensions and quality level, Instagram has less to degrade, and your post appears sharper in the feed.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Upload JPEG files at 1080px width, under 1MB, at 85-90% quality. This matches Instagram's internal processing target closely, minimizing visible re-compression artifacts.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">How to Compress Photos for Instagram — 4 Steps</h2>
          <div className="space-y-4">
            {[
              { n: '1', t: 'Upload your photo', d: 'Click upload or drag your image. Accepts JPEG, PNG, WebP, HEIC (iPhone). Up to 50 files at once for batch preparation.' },
              { n: '2', t: 'Select JPEG format', d: 'Instagram requires JPEG. WebP and PNG are not supported for feed posts. Always select JPEG output.' },
              { n: '3', t: 'Set quality to 85-90%', d: 'Use Quality Mode at 85-90% for most posts. For profile photos, set Exact KB Mode to 80-100KB.' },
              { n: '4', t: 'Compress and upload', d: 'Click Compress, download the optimized JPEG, and upload to Instagram. Everything runs in your browser — nothing sent to any server.' },
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
              ['Why do my Instagram photos look blurry?', 'Instagram re-compresses every uploaded photo. Upload a clean JPEG at 1080px width and under 1MB — this matches Instagram's internal target and minimizes visible quality loss.'],
              ['What format should I use for Instagram photos?', 'JPEG — Instagram requires JPEG for feed posts. WebP and PNG are not accepted. Use 85-90% quality at 1080px width.'],
              ['What is the best Instagram image size in 2026?', 'Square: 1080x1080px. Portrait: 1080x1350px (best for feed visibility). Landscape: 1080x566px. Stories and Reels: 1080x1920px. All under 1MB as JPEG.'],
              ['Will my photos be uploaded to compress them?', 'No — all compression runs locally in your browser. Your photos never leave your device.'],
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
              ['/compress-for-linkedin', 'For LinkedIn'],
              ['/compress-for-pinterest', 'For Pinterest'],
              ['/compress-for-twitter', 'For Twitter/X'],
              ['/compress-to-100kb', 'Compress to 100KB'],
              ['/compress-to-500kb', 'Compress to 500KB'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{label} →</a>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
