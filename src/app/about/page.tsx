
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is CompressTo20KB?","acceptedAnswer":{"@type":"Answer","text":"CompressTo20KB is a free online image compressor that reduces image file sizes without uploading to any server. All compression happens in your browser using Canvas API and WebAssembly for maximum privacy and speed."}},{"@type":"Question","name":"Is CompressTo20KB really free?","acceptedAnswer":{"@type":"Answer","text":"Yes. CompressTo20KB is completely free with no hidden fees, no account required, no watermarks, and no file limits. We support ourselves through non-intrusive ads."}},{"@type":"Question","name":"How is CompressTo20KB different from other compressors?","acceptedAnswer":{"@type":"Answer","text":"Unlike TinyPNG, Kraken.io, and Squoosh which upload your files to their servers, CompressTo20KB processes everything locally in your browser. Your images never leave your device, making it ideal for sensitive documents and photos."}}]};
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CompressTo20KB",
  description: "CompressTo20KB is a free, private, browser-based image compression tool. No uploads, no accounts, no limits.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
      <h1 className="text-4xl font-bold mb-6">About CompressTo20KB</h1>
      <p className="text-lg text-slate-300 mb-6">CompressTo20KB is a free, browser-based image compression tool built for developers, designers, and anyone who cares about web performance.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
      <p className="mb-4">The web is too slow because of unoptimized images. We built CompressTo20KB to make professional-grade image compression accessible to everyone — for free, with no compromises on privacy.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">How It Works</h2>
      <p className="mb-4">Everything runs in your browser using WebAssembly and the Web APIs. Your images are processed locally on your device — they never leave your computer, never touch our servers, and are never stored anywhere.</p>
      <p className="mb-4">We use Sharp-compatible compression algorithms ported to the browser for JPEG, PNG, WebP, and AVIF output — the same technology used by large-scale image CDNs.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">What Makes Us Different</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-300">
        <li><strong>Truly private:</strong> zero server uploads — compression is 100% local</li>
        <li><strong>No limits:</strong> no file size cap, no monthly quota on the free tier</li>
        <li><strong>Modern formats:</strong> WebP and AVIF output, not just JPEG/PNG</li>
        <li><strong>Batch processing:</strong> up to 20 images at once</li>
        <li><strong>No account required:</strong> open the tool and start compressing</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Built for the Modern Web</h2>
      <p className="mb-4">Google's Core Web Vitals make image optimization a ranking factor. We built CompressTo20KB to help every website — from personal blogs to large e-commerce stores — achieve fast load times and great PageSpeed scores.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
      <p className="mb-4">Have questions, feedback, or a feature request? We would love to hear from you. Visit our <a href="/contact" className="text-blue-600 underline">Contact page</a>.</p>
    </main>
  );
}
