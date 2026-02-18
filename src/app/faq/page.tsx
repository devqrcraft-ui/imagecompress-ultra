import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — ImageCompress Pro",
  description: "Frequently asked questions about ImageCompress Pro: formats, privacy, file size limits, API, and more.",
};

const faqs = [
  { q: "Is ImageCompress Pro really free?", a: "Yes, completely free. No credit card, no account, no watermarks, no hidden limits on the free tier. We offer optional Pro features for power users, but the core compression tool is and will remain free." },
  { q: "Are my images private? Do you upload them to a server?", a: "Your images never leave your device. All compression happens locally in your browser using WebAssembly. We have no servers involved in the compression process and cannot access your files." },
  { q: "What image formats does ImageCompress Pro support?", a: "Input: JPEG, PNG, WebP, GIF (first frame). Output: WebP, AVIF, JPEG, PNG. We recommend WebP output for the best balance of quality and file size." },
  { q: "What is the maximum file size I can compress?", a: "There is no server-side file size limit. The practical limit is your device's available memory — typically up to 50MB per image on modern devices. For very large files (100MB+), we recommend processing one at a time." },
  { q: "How many images can I compress at once?", a: "The free tier supports batch processing of up to 20 images simultaneously. All 20 are processed in parallel and available for download individually or as a ZIP archive." },
  { q: "What quality setting should I use?", a: "Quality 80 is the recommended default for most use cases. It produces files that are 35–50% smaller than quality 100 with no visible difference on screen. For photos where maximum quality is critical (print, archiving), use quality 90–95." },
  { q: "What is WebP and why should I use it?", a: "WebP is a modern image format developed by Google. It produces files 25–35% smaller than JPEG at the same visual quality, supports transparency (like PNG), and is supported by 96%+ of browsers globally. It is the best default format for web images in 2026." },
  { q: "What is AVIF and how is it different from WebP?", a: "AVIF is a newer format based on the AV1 video codec. It produces files 50%+ smaller than JPEG and 20–30% smaller than WebP. Browser support is around 92% globally. Use AVIF with a WebP fallback for new projects where maximum compression is important." },
  { q: "Will compression reduce my image quality?", a: "Lossy compression at quality 80 is visually indistinguishable from the original for most images on screen. The quality slider lets you control the trade-off. At quality 100, output is lossless (for PNG/WebP lossless modes) or near-lossless." },
  { q: "Does ImageCompress Pro work on mobile?", a: "Yes. The tool works on any modern browser on iOS Safari, Chrome for Android, and other mobile browsers. Performance may be slower on older devices for very large images due to device memory constraints." },
  { q: "Do I need to create an account?", a: "No account is needed for the free compression tool. An account is only required if you want to save compression presets, access the API, or use Pro features." },
  { q: "Is there an API available?", a: "Yes. ImageCompress Pro provides a REST API for developers who need to automate compression in their workflows. The API is available on the free tier with rate limits. See our API documentation for details." },
  { q: "Can I compress animated GIFs?", a: "Currently, only the first frame of an animated GIF is compressed. Full animated GIF compression is on our roadmap. For animated content, we recommend converting to animated WebP using a dedicated tool." },
  { q: "Why is my WebP file larger than the original JPEG?", a: "This can happen with images that were already heavily compressed (low-quality source JPEG). Re-compressing an already lossy image can sometimes increase file size. Try lowering the quality slider or use a higher-quality source image." },
  { q: "Does compression affect image dimensions?", a: "Compression alone does not change image dimensions. If you want to resize images, use the optional resize feature before compressing. Resizing and compressing together gives the maximum file size reduction." },
  { q: "How do I compress images for a specific file size (e.g., under 100KB)?", a: "Use the quality slider and preview the file size shown next to the output. Start at quality 80, then lower until the target size is reached. For most photos, quality 60–70 achieves under 100KB." },
  { q: "Is ImageCompress Pro open source?", a: "The core compression engine uses open-source libraries (libwebp, libavif, sharp). The application itself is currently proprietary. We plan to open-source parts of the codebase in the future." },
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
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-12">Everything you need to know about ImageCompress Pro.</p>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-2">{faq.q}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">We are happy to help. Send us a message and we will respond within 24 hours.</p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">Contact Us →</a>
        </div>
      </main>
    </>
  );
}
