"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';

export default function ClientPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">
      <div style={{ fontSize: '15px', opacity: 0.5, marginBottom: '12px' }}>
        <Link href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</Link> → Batch Image Compressor ZIP
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Batch Image Compressor —{' '}
        <span style={{ color: '#818cf8' }}>Download All as ZIP</span>
      </h1>
      <p className="text-slate-400 text-lg mb-8">
        Compress up to 50 images at once and download them all as a single ZIP file. Free, instant, no upload to any server.
      </p>
      <CompressorWidget defaultMode="quality" defaultFormat="jpeg" />
      <section className="mb-10 mt-10">
        <h2 className="text-2xl font-bold text-white mb-4">How Batch Compression Works</h2>
        <div className="space-y-4">
          {[
            { n: '1', t: 'Upload up to 50 images', d: 'Drag and drop or click to select. Accepts JPEG, PNG, WebP, and HEIC. All files load directly in your browser.' },
            { n: '2', t: 'Set target format and size', d: 'Choose output format (JPEG, PNG, WebP) and a quality level or exact KB target. Settings apply to every image in the batch.' },
            { n: '3', t: 'Compress all at once', d: 'Click Compress. All images are processed in your browser using Canvas API — no waiting for server round-trips.' },
            { n: '4', t: 'Download as ZIP', d: 'Click Download All as ZIP to get every image bundled into a single file. Or download individually if you prefer.' },
          ].map(s => (
            <div key={s.n} className="flex gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold text-white">{s.n}</div>
              <div><h3 className="font-semibold text-white mb-1">{s.t}</h3><p className="text-slate-400 text-sm">{s.d}</p></div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Who Uses Batch Compression?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: '✍️', title: 'Bloggers', desc: 'Optimize a full post worth of images in one go. Faster page loads, better Core Web Vitals.' },
            { icon: '🛒', title: 'E-commerce sellers', desc: 'Resize and compress product photos for Etsy, Shopify, or Amazon listings before bulk upload.' },
            { icon: '📁', title: 'Document workflows', desc: 'Reduce image attachments for email, PDF reports, or client deliverables without installing software.' },
          ].map(c => (
            <div key={c.title} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="text-2xl mb-2">{c.icon}</div>
              <h3 className="font-semibold text-white mb-1">{c.title}</h3>
              <p className="text-slate-400 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            ['How many images can I compress at once?', 'Up to 50 images in a single batch. All processing runs in your browser — nothing uploaded to any server.'],
            ['Can I download all compressed images as one ZIP?', 'Yes. After compression, click Download All as ZIP to get every image bundled into a single file.'],
            ['Do my files get uploaded anywhere?', 'No. Compression is handled entirely in your browser. Your images never leave your device.'],
            ['What formats are supported?', 'Input: JPEG, PNG, WebP, HEIC. Output: JPEG, PNG, or WebP. One quality or KB target applies to the whole batch.'],
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
            ['/', 'Home — Image Compressor'],
            ['/bulk-image-compressor', 'Bulk Compressor'],
            ['/compress-to-20kb', 'Compress to 20KB'],
            ['/compress-to-100kb', 'Compress to 100KB'],
            ['/compress-for-etsy', 'For Etsy'],
            ['/compress-for-shopify', 'For Shopify'],
            ['/compress-for-instagram', 'For Instagram'],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{label} →</Link>
          ))}
        </div>
      </section>
    </article>
  );
}
