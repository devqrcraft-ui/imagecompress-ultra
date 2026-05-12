import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — CompressTo20KB Image Compressor",
  description: "Frequently asked questions about CompressTo20KB: privacy, formats, exact KB compression, USCIS photos, Shopify images, and more.",
  alternates: { canonical: 'https://compressto20kb.com/faq' },
  openGraph: { url: 'https://compressto20kb.com/faq' },
};

const faqs = [
  { q: "Is CompressTo20KB really free?", a: "Yes — completely free. No account, no credit card, no watermarks, no hidden limits. The tool is free for personal and commercial use." },
  { q: "Are my images private? Do you upload them to a server?", a: "Your images never leave your device. All compression happens locally in your browser. We have no servers involved in the compression process and cannot access your files." },
  { q: "What image formats are supported?", a: "Input: JPEG, PNG, WebP, AVIF, HEIC/HEIF (iPhone photos). Output: WebP, AVIF, JPEG, PNG. WebP is recommended for the best balance of quality and file size." },
  { q: "How do I compress an image to exactly 20KB?", a: "Upload your image, click the '🎯 Exact KB Mode' tab, type 20 in the target field, and click Compress. The tool uses binary search to hit your target within 1KB." },
  { q: "How many images can I compress at once?", a: "You can compress up to 50 images simultaneously in batch mode. All are processed in parallel and can be downloaded individually or as a ZIP archive." },
  { q: "Does it work for USCIS and passport photos?", a: "Yes — use the 'Gov 20KB' preset. It compresses your photo to under 20KB as required by USCIS N-400, DS-160 visa forms, and US passport online applications. All processing stays on your device." },
  { q: "What is the best format for Shopify images?", a: "WebP is the best format for Shopify product images. It is 25–35% smaller than JPEG at the same visual quality. Use our Shopify preset — it compresses to WebP under 1MB at 2048px automatically." },
  { q: "Does compressing an image reduce its quality?", a: "Smart compression at 80% quality is visually indistinguishable from the original for most images on screen. Use the Before/After preview slider to compare before downloading." },
  { q: "Does it work on iPhone and Android?", a: "Yes — the tool works in Safari on iPhone and Chrome on Android. HEIC photos from iPhone Camera Roll are automatically converted during compression." },
  { q: "Why do government portals require photos under 20KB?", a: "US government portals (USCIS, DS-160, passport applications) and many job portals set strict file size limits to reduce server load and ensure fast uploads on slow connections." },
  { q: "Can I compress PNG to under 20KB?", a: "PNG is lossless and rarely compresses below 50KB for photos. For 20KB targets, convert to JPEG or WebP — select your output format in the format selector before compressing." },
  { q: "What is the maximum file size I can compress?", a: "There is no server-side limit. The practical limit is your device's available memory — typically up to 50MB per image on modern devices." },
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://compressto20kb.com"},{"@type":"ListItem","position":2,"name":"FAQ","item":"https://compressto20kb.com/faq"}]}' }} />
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
        <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
          <a href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</a>
          <div style={{ display: 'flex', gap: '16px', fontSize:'15px', opacity: 0.75 }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
            <a href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</a>
            <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
          </div>
        </nav>

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 48px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '8px' }}>Frequently Asked Questions</h1>
          <p style={{ fontSize: '15px', opacity: 0.6, marginBottom: '40px' }}>Everything you need to know about CompressTo20KB.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px 24px' }}>
                <h2 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px', color: '#a5b4fc' }}>{faq.q}</h2>
                <p style={{ fontSize:'15px', opacity: 0.7, lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '14px', padding: '24px', textAlign: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>Still have questions?</div>
            <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>We are happy to help. Send us a message and we will respond within 24 hours.</p>
            <a href="/contact" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '10px 24px', borderRadius: '100px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>Contact Us →</a>
          </div>
        </div>
      </div>
    </>
  );
}
