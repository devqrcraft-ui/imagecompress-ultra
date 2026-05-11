
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Use modern formats like WebP or AVIF which offer 25-50% smaller file sizes than JPEG at the same visual quality. Our tool compresses images client-side in your browser with no upload required, preserving maximum quality."}},{"@type":"Question","name":"Is this image compressor free?","acceptedAnswer":{"@type":"Answer","text":"Yes. CompressTo20KB is 100% free with no file size limits, no account required, and no watermarks. All compression happens in your browser — your images never leave your device."}},{"@type":"Question","name":"What image formats are supported?","acceptedAnswer":{"@type":"Answer","text":"We support JPEG, PNG, WebP, AVIF, and GIF. You can compress and convert between formats. WebP and AVIF produce the smallest file sizes for web use."}}]};
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Reduce Image Size for Email Free (Gmail, Outlook, Yahoo)",
  description: "Reduce photo size for email attachments in seconds. Free browser-based tool, no upload needed. Works for Gmail, Outlook, and Yahoo Mail.",
  openGraph: {
    title: "How to Reduce Image Size for Email Free (Gmail, Outlook, Yahoo)",
    description: "Reduce photo size for email attachments in seconds. Free, no upload needed.",
    type: "article",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: 'https://compressto20kb.com/blog/reduce-image-size-for-email' },
};

export default function ReduceImageSizeForEmail() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
      <h1 className="text-4xl font-bold mb-4">How to Reduce Image Size for Email Free (Gmail, Outlook, Yahoo)</h1>
      <p className="text-slate-300 mb-8">Updated February 2026 · 6 min read</p>

      <p className="mb-6 text-lg">Sending photos by email and hitting the attachment size limit? A single iPhone photo can be 8–12MB. Most email services cap attachments at 20–25MB total. Here's how to compress photos for email in seconds — free.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Email Attachment Limits in 2026</h2>
      <div className="overflow-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Email Service</th>
              <th className="border p-2 text-left">Attachment Limit</th>
              <th className="border p-2 text-left">Recommended Image Size</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">Gmail</td><td className="border p-2">25MB total</td><td className="border p-2">Under 2MB per image</td></tr>
            <tr><td className="border p-2">Outlook</td><td className="border p-2">20MB total</td><td className="border p-2">Under 1MB per image</td></tr>
            <tr><td className="border p-2">Yahoo Mail</td><td className="border p-2">25MB total</td><td className="border p-2">Under 2MB per image</td></tr>
            <tr><td className="border p-2">Apple Mail</td><td className="border p-2">Varies by provider</td><td className="border p-2">Under 1MB per image</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">How to Compress Photos for Email (Step by Step)</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li><strong>Open <a href="/compress-for-email" className="text-blue-600 underline">our email compressor</a></strong> — no signup, works instantly in your browser</li>
        <li><strong>Drop your photos</strong> — supports up to 10 images at once</li>
        <li><strong>Set target size</strong> — we recommend 500KB per image for email</li>
        <li><strong>Download compressed photos</strong> — attach them to your email as normal</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-10 mb-4">What Size Should Photos Be for Email?</h2>
      <p className="mb-4">It depends on the purpose:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Casual photos to friends/family:</strong> 500KB–1MB is fine and looks great</li>
        <li><strong>Professional photos to clients:</strong> 1–2MB maintains quality for viewing on screen</li>
        <li><strong>ID or document photos:</strong> Under 240KB for most official forms</li>
        <li><strong>Product photos for buyers:</strong> 500KB–1MB, JPEG format</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Not Just Use Google Drive or Dropbox?</h2>
      <p className="mb-4">Cloud links work, but many recipients prefer direct attachments — especially for official correspondence, job applications, and business emails. Compressing the image directly is simpler and more professional.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Privacy: Is It Safe to Compress Photos Online?</h2>
      <p className="mb-4">With most online tools, your photos are uploaded to a server — which means someone else has access to your images. Our tool works differently: <strong>all compression happens in your browser</strong>. Your photos never leave your device.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Compress Multiple Photos at Once</h2>
      <p className="mb-4">Sending a photo album or event photos? Drop up to 10 images at once and they all compress simultaneously. No waiting, no queue — all processed locally in seconds.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">FAQ</h2>
      {[
        ['Will compressed photos look bad in email?', 'At 500KB–1MB, photos look excellent on any screen. Recipients will not notice any difference from the original.'],
        ['Can I compress PNG files for email?', 'Yes — PNG, JPEG, WebP, and GIF are all supported. For email, converting PNG to JPEG usually gives the smallest file size.'],
        ['What if I need to send more than 10 photos?', 'Compress in batches of 10. Or use a ZIP file for large collections.'],
        ['Does this work on iPhone and Android?', 'Yes — works on any device with a modern browser. No app needed.'],
        ['Is there a file size limit for compression?', 'Individual files up to 50MB can be compressed. For most email photos, this is more than enough.'],
      ].map(([q, a]) => (
        <details key={q} className="border rounded-lg mb-3 p-4">
          <summary className="font-semibold cursor-pointer">▶ {q}</summary>
          <p className="mt-3 text-slate-300">{a}</p>
        </details>
      ))}

      <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
        <h3 className="text-xl font-semibold mb-2">Compress Photos for Email — Free</h3>
        <p className="text-slate-300 mb-4">No upload, no signup, works on any device. Reduce photo size in 10 seconds.</p>
        <a href="/compress-for-email" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">Compress for Email →</a>

      <section style={{maxWidth:'800px',margin:'0 auto',padding:'0 20px 40px'}}>
        <h2 style={{fontSize:'20px',fontWeight:700,color:'white',marginBottom:'16px'}}>Related Articles</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
        <a href='/blog/compress-jpeg-under-1mb' style={{display:'block',padding:'12px 16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',color:'#818cf8',textDecoration:'none',fontSize:'14px',fontWeight:500,transition:'border-color 0.2s'}}>
          → Compress JPEG Under 1MB
        </a>
        <a href='/blog/best-image-formats' style={{display:'block',padding:'12px 16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',color:'#818cf8',textDecoration:'none',fontSize:'14px',fontWeight:500,transition:'border-color 0.2s'}}>
          → Best Image Formats Guide
        </a>
        <a href='/blog/free-vs-paid-compressors' style={{display:'block',padding:'12px 16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',color:'#818cf8',textDecoration:'none',fontSize:'14px',fontWeight:500,transition:'border-color 0.2s'}}>
          → Free vs Paid Image Compressors
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
