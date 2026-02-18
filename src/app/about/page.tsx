import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ImageCompress Pro",
  description: "ImageCompress Pro is a free, private, browser-based image compression tool. No uploads, no accounts, no limits.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">About ImageCompress Pro</h1>
      <p className="text-lg text-gray-600 mb-6">ImageCompress Pro is a free, browser-based image compression tool built for developers, designers, and anyone who cares about web performance.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
      <p className="mb-4">The web is too slow because of unoptimized images. We built ImageCompress Pro to make professional-grade image compression accessible to everyone — for free, with no compromises on privacy.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">How It Works</h2>
      <p className="mb-4">Everything runs in your browser using WebAssembly and the Web APIs. Your images are processed locally on your device — they never leave your computer, never touch our servers, and are never stored anywhere.</p>
      <p className="mb-4">We use Sharp-compatible compression algorithms ported to the browser for JPEG, PNG, WebP, and AVIF output — the same technology used by large-scale image CDNs.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">What Makes Us Different</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li><strong>Truly private:</strong> zero server uploads — compression is 100% local</li>
        <li><strong>No limits:</strong> no file size cap, no monthly quota on the free tier</li>
        <li><strong>Modern formats:</strong> WebP and AVIF output, not just JPEG/PNG</li>
        <li><strong>Batch processing:</strong> up to 20 images at once</li>
        <li><strong>No account required:</strong> open the tool and start compressing</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Built for the Modern Web</h2>
      <p className="mb-4">Google's Core Web Vitals make image optimization a ranking factor. We built ImageCompress Pro to help every website — from personal blogs to large e-commerce stores — achieve fast load times and great PageSpeed scores.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
      <p className="mb-4">Have questions, feedback, or a feature request? We would love to hear from you. Visit our <a href="/contact" className="text-blue-600 underline">Contact page</a>.</p>
    </main>
  );
}
