import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WebP vs AVIF vs JPEG: Best Image Format in 2026",
  description: "Practical comparison of every major image format for the web. Which format should you use in 2026?",
  openGraph: {
    title: "WebP vs AVIF vs JPEG: Best Image Format in 2026",
    description: "Practical comparison of every major image format for the web. Which format should you use in 2026?",
    images: [{ url: "/og/best-image-formats.png", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

export default function BestImageFormats() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">WebP vs AVIF vs JPEG: Best Image Format in 2026</h1>
      <p className="text-gray-500 mb-8">Updated February 2026 · 10 min read</p>

      <p className="mb-6 text-lg">Choosing the right image format can cut your page weight in half. Here is a complete, practical comparison of every major format — with real numbers.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Quick Answer</h2>
      <p className="mb-4">For most websites in 2026: use <strong>AVIF</strong> with a <strong>WebP</strong> fallback and a <strong>JPEG</strong> fallback for very old browsers. This covers 99.9% of users with the best possible compression.</p>
      <pre className="bg-gray-100 rounded p-4 text-sm overflow-auto mb-6">{`<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" />
</picture>`}</pre>

      <h2 className="text-2xl font-semibold mt-10 mb-4">JPEG: The Old Reliable</h2>
      <p className="mb-4">JPEG has been the web standard since 1992. It handles photographs well but struggles with text, sharp edges, and transparency (no alpha channel). File sizes are large by modern standards.</p>
      <p className="mb-4"><strong>Best for:</strong> Legacy systems that cannot convert. Nowhere else in 2026.</p>
      <p className="mb-4"><strong>Browser support:</strong> 100%</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">PNG: Lossless but Heavy</h2>
      <p className="mb-4">PNG supports transparency and lossless compression, making it ideal for logos, icons, and screenshots. But PNG files are massive compared to AVIF or even WebP for the same quality.</p>
      <p className="mb-4"><strong>Best for:</strong> Screenshots with text, logos where transparency is critical (though SVG is usually better).</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">WebP: The Safe Modern Choice</h2>
      <p className="mb-4">WebP was created by Google in 2010 and became the default modern format around 2020. It supports both lossy and lossless modes, transparency, and animation.</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>25–35% smaller than JPEG at the same quality</li>
        <li>26% smaller than PNG for lossless</li>
        <li>Browser support: 96%+ globally</li>
        <li>Supported in all major CDNs and image processors</li>
      </ul>
      <p className="mb-4"><strong>Best for:</strong> Any project today. Default choice for photos, illustrations, UI screenshots.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">AVIF: The New King</h2>
      <p className="mb-4">AVIF is derived from the AV1 video codec and offers dramatically better compression than all predecessors. It handles gradients, film grain, and HDR content better than any other format.</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>50%+ smaller than JPEG at equivalent quality</li>
        <li>20–30% smaller than WebP</li>
        <li>Browser support: 92%+ globally (as of early 2026)</li>
        <li>Slower to encode than WebP (use pre-encoding, not on-the-fly)</li>
      </ul>
      <p className="mb-4"><strong>Best for:</strong> New projects, hero images, product photos, anything where file size is critical.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Real-World Size Comparison</h2>
      <div className="overflow-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Format</th>
              <th className="border p-2 text-left">File Size (typical photo)</th>
              <th className="border p-2 text-left">Transparency</th>
              <th className="border p-2 text-left">Browser Support</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">JPEG</td><td className="border p-2">420 KB</td><td className="border p-2">No</td><td className="border p-2">100%</td></tr>
            <tr><td className="border p-2">PNG</td><td className="border p-2">680 KB</td><td className="border p-2">Yes</td><td className="border p-2">100%</td></tr>
            <tr><td className="border p-2">WebP</td><td className="border p-2">290 KB</td><td className="border p-2">Yes</td><td className="border p-2">96%</td></tr>
            <tr><td className="border p-2">AVIF</td><td className="border p-2">190 KB</td><td className="border p-2">Yes</td><td className="border p-2">92%</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">GIF vs WebP for Animation</h2>
      <p className="mb-4">Animated GIFs are extremely inefficient — a 5-second animation can be 8MB as GIF versus 800KB as animated WebP. Always convert animated GIFs to WebP or MP4 (even smaller, and better quality).</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">SVG: The Special Case</h2>
      <p className="mb-4">SVG is not a raster format — it is XML-based vector graphics. Use SVG for logos, icons, illustrations, and any graphic that needs to scale to any size without quality loss. SVG files are typically under 10KB for simple graphics.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Conversion Tools</h2>
      <p className="mb-4">The fastest way to convert images to WebP or AVIF is with a browser-based tool like <strong>ImageCompress Pro</strong> — no install required, processes locally, supports batch conversion.</p>

      <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
        <h3 className="text-xl font-semibold mb-2">Convert to WebP in seconds</h3>
        <p className="text-gray-600 mb-4">ImageCompress Pro converts JPEG and PNG to WebP instantly — free, private, no upload needed.</p>
        <a href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">Convert Images Now →</a>
      </div>
    </main>
  );
}
