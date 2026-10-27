import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — CompressTo20KB Image Compressor",
  description: "Frequently asked questions about CompressTo20KB: privacy, formats, exact KB compression, USCIS photos, Shopify images, and more.",
  alternates: { canonical: 'https://www.compressto20kb.com/faq' },
  openGraph: { url: 'https://www.compressto20kb.com/faq' },
};

const faqs = [
  { q: "Is CompressTo20KB really free?", a: "Yes — completely free. No account, no credit card, no watermarks, no hidden limits. The tool is free for personal and commercial use." },
  { q: "Are my images private? Do you upload them to a server?", a: "Your images never leave your device. All compression happens locally in your browser. We have no servers involved in the compression process and cannot access your files." },
  { q: "What image formats are supported?", a: "Input: JPEG, PNG, WebP, AVIF, HEIC/HEIF (iPhone photos). Output: WebP, AVIF, JPEG, PNG. WebP is recommended for the best balance of quality and file size." },
  { q: "How do I compress an image to 20KB or under?", a: "Upload your image, click the '🎯 Target KB Mode' tab, type 20 in the target field, and click Compress. The tool searches JPEG/WebP quality in your browser until the encoded file fits, then returns it — so the result is at or under 20KB. A file that is already smaller than your target comes back unchanged." },
  { q: "How many images can I compress at once?", a: "You can add up to 50 images in one batch. The tool works through them one after another in your browser - there is no queue because there is no server - and you can download each result on its own or the whole set as a ZIP archive." },
  { q: "Does it work for USCIS and passport photos?", a: "Yes, as a file-size tool — but set the number your own form prints. The published US visa/passport photo ceiling is a JPEG under 240KB at 600×600 to 1200×1200 pixels (travel.state.gov, checked October 2026), while some portals and older uploads ask for far less. The 'Gov 20KB' preset is there for the forms that really do want 20KB. Nothing about compression changes the content of the photo: it cannot crop to the right ratio, move your background, or fix a blurry shot." },
  { q: "What is the best format for Shopify images?", a: "WebP is usually the better choice for product photos — a WebP file is typically meaningfully smaller than a JPEG at similar visual quality, and Shopify's own store guidance is about speed rather than a fixed KB ceiling. Our Shopify preset switches the output to WebP at about 82% quality; if you need a hard ceiling, use Target KB Mode and type the number." },
  { q: "Does compressing an image reduce its quality?", a: "Lossy compression always discards something, but around 80% quality the difference is usually hard to see on a screen. The tighter the kilobyte target, the more obvious it gets — which is why the tool shows a Before/After slider so you can judge your own photo before downloading." },
  { q: "Does it work on iPhone and Android?", a: "Yes — the tool works in Safari on iPhone and Chrome on Android. HEIC photos from iPhone Camera Roll are automatically converted during compression." },
  { q: "Why do forms set a kilobyte limit at all?", a: "A ceiling keeps uploads working on a bad connection and stops a single 12MB photo from filling a case file, and it forces every applicant to submit roughly the same amount of detail. The number itself is chosen by whoever built the form, so read it off your own application page rather than trusting any tool's guess." },
  { q: "Can I compress PNG to under 20KB?", a: "Rarely for a photograph — PNG stores pixels losslessly, so a camera photo stays heavy. For a 20KB target, switch the output format to JPEG or WebP in the format selector first; PNG is worth keeping for flat graphics with text." },
  { q: "What is the maximum file size I can compress?", a: "There is no upload limit because nothing is uploaded. The real limit is your device's memory — decoding a very large photo can fail on an older phone, and in that case resize the pixel dimensions first and try again." },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"FAQ","item":"https://www.compressto20kb.com/faq"}]}' }} />
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
<div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 48px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '8px' }}>Frequently Asked Questions</h1>
          <p style={{ fontSize: '15px', opacity: 0.72, marginBottom: '40px' }}>Everything you need to know about CompressTo20KB.</p>

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
            <a href="/contact" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#4f46e5,#6d28d9)', color: 'white', padding: '10px 24px', borderRadius: '100px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>Contact Us →</a>
          </div>
        </div>
      </div>
    </>
  );
}
