import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Images for Email — Reduce Attachment Size Free, No Upload',
  description: 'Compress images before emailing. Reduce photo file size to under 500KB or 1MB for fast delivery and no blocked attachments. Free, no upload, 100% private. Works for Gmail, Outlook, Yahoo Mail.',
  keywords: 'compress image for email, reduce image size for email, compress photo for email attachment, email image compressor, resize image for email free, compress jpg for gmail outlook',
  alternates: { canonical: 'https://compressto20kb.com/compress-for-email' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a good image size for email attachments?',
      acceptedAnswer: { '@type': 'Answer', text: 'For inline images in email newsletters, keep files under 100KB. For photo attachments, aim for under 1MB per image. Gmail and Outlook warn recipients about large attachments — staying under 1MB per image prevents delivery issues and slow loading on mobile.' },
    },
    {
      '@type': 'Question',
      name: 'How do I compress an image for email without losing quality?',
      acceptedAnswer: { '@type': 'Answer', text: 'Use Exact KB Mode and set a target of 500KB or 100KB depending on your needs. WebP gives the best quality at small sizes, but JPEG is safer for email compatibility. The tool uses binary search to find the maximum quality that fits your target.' },
    },
    {
      '@type': 'Question',
      name: 'Will my photos be uploaded to a server when compressing for email?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. All compression runs in your browser. Your images never leave your device — unlike other tools that upload files to their servers. Safe for compressing private photos, documents, and business images before emailing.' },
    },
    {
      '@type': 'Question',
      name: 'What format should I use for email images?',
      acceptedAnswer: { '@type': 'Answer', text: 'JPEG is the safest choice for email — universally supported by all email clients including Outlook 2016 and Apple Mail. WebP is supported by Gmail and modern clients but may not display in older Outlook versions. PNG works but creates larger files.' },
    },
    {
      '@type': 'Question',
      name: 'Can I compress multiple photos for email at once?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — upload up to 50 images, set your target size (e.g. 500KB or 100KB), and compress all at once. Download as individual files or a ZIP. All processing stays in your browser.' },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">

        {/* BREADCRUMB */}
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '12px' }}>
          <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → Compress for Email
        </div>

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Compress Images for <span style={{ color: '#818cf8' }}>Email</span> — Free, No Upload, 100% Private
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Large email attachments get blocked, bounce, or take forever to load on mobile. Compress your images to under 500KB or 1MB before sending — free, instant, nothing uploaded.
        </p>

        {/* WIDGET */}
        <ClientPage />

        {/* WHY COMPRESS FOR EMAIL */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Why Compress Images Before Emailing?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            A typical smartphone photo is 3–8MB. Email providers like Gmail, Outlook, and Yahoo Mail have attachment limits of 25MB total per message — which sounds large until you are sending 5–10 product photos at once. Beyond raw limits, large inline images slow down email load time on mobile data, and many corporate mail servers silently block or strip attachments over 5–10MB.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Compressing images to 100–500KB before attaching solves all of these problems: faster delivery, reliable rendering across all email clients, and no risk of the message bouncing or being flagged by spam filters.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
            {[
              ['📧', 'Gmail', 'Under 25MB total. Inline images load faster under 100KB each.'],
              ['📨', 'Outlook', 'Corporate servers often block messages over 10MB. Keep images under 500KB.'],
              ['📩', 'Email Newsletters', 'Mailchimp, Klaviyo, and Constant Contact recommend inline images under 1MB.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="text-2xl mb-2">{icon}</div>
                <div className="font-semibold text-white text-sm mb-1">{title}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* RECOMMENDED SIZES */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Recommended Email Image Sizes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Use Case</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Target Size</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Format</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Newsletter inline image', '50–100KB', 'JPEG or WebP'],
                  ['Photo attachment (personal)', 'Under 1MB', 'JPEG'],
                  ['Product photo (business)', '200–500KB', 'JPEG or WebP'],
                  ['Document scan attachment', '100–300KB', 'JPEG'],
                  ['Logo / graphic', '20–50KB', 'PNG or WebP'],
                ].map(([use, size, fmt], i) => (
                  <tr key={i} className={`border-b border-slate-800 ${i % 2 === 0 ? 'bg-slate-800/20' : ''}`}>
                    <td className="py-3 px-4 text-slate-300">{use}</td>
                    <td className="py-3 px-4 text-violet-400 font-bold text-center">{size}</td>
                    <td className="py-3 px-4 text-slate-400 text-center">{fmt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* HOW TO */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">How to Compress Images for Email — 4 Steps</h2>
          <div className="space-y-4">
            {[
              { n: '1', t: 'Upload your images', d: 'Click upload or drag your photos. Accepts JPEG, PNG, WebP, AVIF, HEIC. Upload up to 50 images at once for bulk email preparation.' },
              { n: '2', t: 'Choose your target size', d: 'For newsletters: set Exact KB Mode to 100KB. For photo attachments: set to 500KB. For large product photos: try 200–300KB.' },
              { n: '3', t: 'Select JPEG for compatibility', d: 'JPEG works in every email client including older Outlook versions. Use WebP only if you know your recipients use Gmail or modern clients.' },
              { n: '4', t: 'Compress and attach', d: 'Click Compress and download your optimized images. Attach them directly to your email. Everything processed in your browser — nothing uploaded.' },
            ].map(s => (
              <div key={s.n} className="flex gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold text-white">{s.n}</div>
                <div><h3 className="font-semibold text-white mb-1">{s.t}</h3><p className="text-slate-400 text-sm">{s.d}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              ['What is a good image size for email attachments?', 'For inline newsletter images, under 100KB. For photo attachments, under 1MB per image. Staying under these limits prevents delivery issues and ensures fast loading on mobile.'],
              ['What format should I use for email images?', 'JPEG — it is universally supported by all email clients including older Outlook versions. WebP works in Gmail and modern clients but may not display in Outlook 2016 and earlier.'],
              ['Will my photos be uploaded to compress them?', 'No — all compression runs in your browser. Nothing is uploaded. Safe for private photos, business documents, and anything sensitive.'],
              ['Can I compress multiple email images at once?', 'Yes — upload up to 50 images, set your target size, and compress all at once. Download as individual files or a ZIP.'],
              ['Why does Gmail warn about large attachments?', 'Gmail and most email providers flag messages with large attachments because they take longer to deliver and are more likely to trigger spam filters. Keeping images under 500KB per file avoids these warnings.'],
            ].map(([q, a], i) => (
              <details key={i} className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-4">
                <summary className="font-semibold text-white cursor-pointer">{q}</summary>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section>
          <h2 className="text-xl font-bold text-white mb-4">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[
              ['/', '🏠 Home — Image Compressor'],
              ['/compress-to-100kb', 'Compress to 100KB'],
              ['/compress-to-500kb', 'Compress to 500KB'],
              ['/compress-for-shopify', 'For Shopify'],
              ['/compress-for-linkedin', 'For LinkedIn'],
              ['/compress-without-uploading', 'No Upload Compressor'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{label} →</a>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
