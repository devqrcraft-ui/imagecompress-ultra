import { Metadata } from "next";
import { notFound } from "next/navigation";

const useCases = [
  { slug: "compress-for-instagram", title: "Compress Images for Instagram", desc: "Optimize your photos for Instagram without losing quality. Get the perfect file size for fast uploads and crisp display.", keyword: "compress image for Instagram" },
  { slug: "webp-converter", title: "Free WebP Converter Online", desc: "Convert JPEG and PNG to WebP format instantly in your browser. No upload, no registration, completely free.", keyword: "WebP converter online free" },
  { slug: "compress-for-shopify", title: "Compress Images for Shopify", desc: "Speed up your Shopify store by compressing product images to WebP. Faster pages mean higher conversion rates.", keyword: "compress images for Shopify" },
  { slug: "reduce-image-size-kb", title: "Reduce Image Size in KB Online", desc: "Reduce any image to a specific file size in KB. Perfect for forms, portals, and applications with strict size limits.", keyword: "reduce image size in KB" },
  { slug: "compress-png-online", title: "Compress PNG Online Free", desc: "Compress PNG images online without losing transparency. Reduce PNG file size by up to 70% instantly.", keyword: "compress PNG online free" },
  { slug: "compress-jpeg-online", title: "Compress JPEG Online Free", desc: "Compress JPEG photos online in seconds. Reduce file size while keeping visual quality for web and email.", keyword: "compress JPEG online free" },
  { slug: "compress-for-wordpress", title: "Compress Images for WordPress", desc: "Optimize images before uploading to WordPress. Smaller images mean faster load times and better SEO scores.", keyword: "compress images for WordPress" },
  { slug: "compress-for-email", title: "Compress Images for Email", desc: "Reduce image file size for email attachments. Stay under size limits without sacrificing image quality.", keyword: "compress image for email" },
  { slug: "bulk-image-compressor", title: "Bulk Image Compressor Online", desc: "Compress multiple images at once — up to 20 files in a single batch. Free, fast, and private.", keyword: "bulk image compressor online" },
  { slug: "compress-for-woocommerce", title: "Compress Images for WooCommerce", desc: "Optimize product images for WooCommerce stores. Faster product pages reduce bounce rate and increase sales.", keyword: "compress images for WooCommerce" },
  { slug: "image-size-reducer-online", title: "Image Size Reducer Online", desc: "Reduce image dimensions and file size online. Resize and compress in one step for web, social media, or print.", keyword: "image size reducer online" },
  { slug: "compress-for-facebook", title: "Compress Images for Facebook", desc: "Optimize images for Facebook posts and ads. Proper compression prevents Facebook from re-compressing and degrading quality.", keyword: "compress image for Facebook" },
  { slug: "png-to-webp", title: "Convert PNG to WebP Online Free", desc: "Convert PNG files to WebP format with transparency preserved. Smaller files, same crisp quality.", keyword: "PNG to WebP converter" },
  { slug: "jpeg-to-webp", title: "Convert JPEG to WebP Online Free", desc: "Convert JPEG photos to WebP format instantly. Save 30–50% on file size with no visible quality loss.", keyword: "JPEG to WebP converter" },
  { slug: "compress-for-google-drive", title: "Compress Images for Google Drive", desc: "Reduce image file sizes before uploading to Google Drive. Stay within storage limits and share files faster.", keyword: "compress images for Google Drive" },
  { slug: "compress-photo-online", title: "Compress Photo Online Free", desc: "Compress any photo online for free. Supports JPEG, PNG, and WebP. Process locally — your photos never leave your device.", keyword: "compress photo online free" },
  { slug: "reduce-image-file-size", title: "Reduce Image File Size Online", desc: "Reduce image file size for web, mobile, and sharing. Fast browser-based compression with no quality loss.", keyword: "reduce image file size online" },
  { slug: "compress-for-linkedin", title: "Compress Images for LinkedIn", desc: "Optimize profile photos, banners, and post images for LinkedIn. Meet size requirements without blurry results.", keyword: "compress image for LinkedIn" },
  { slug: "avif-converter", title: "Free AVIF Converter Online", desc: "Convert images to AVIF format for maximum compression. 50% smaller than JPEG with the same visual quality.", keyword: "AVIF converter online free" },
  { slug: "compress-for-twitter", title: "Compress Images for Twitter / X", desc: "Optimize images for Twitter and X posts. Prevent platform re-compression that degrades image quality.", keyword: "compress image for Twitter" },
];

export async function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const uc = useCases.find((u) => u.slug === params.slug);
  if (!uc) return {};
  return {
    title: uc.title + " | ImageCompress Pro",
    description: uc.desc,
    openGraph: {
      title: uc.title,
      description: uc.desc,
      images: [{ url: "/og/use-case.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image" },
  };
}

const howToSteps = [
  { name: "Open ImageCompress Pro", text: "Go to imagecompress.pro in any browser — no installation or account needed." },
  { name: "Upload your image", text: "Click the upload area or drag and drop your JPEG, PNG, or WebP file." },
  { name: "Choose output format", text: "Select WebP for best compression, or keep the original format." },
  { name: "Adjust quality", text: "Use the quality slider (80 is recommended — visually identical to 100 but 40% smaller)." },
  { name: "Download", text: "Click Compress and download your optimized image instantly." },
];

export default function UseCasePage({ params }: { params: { slug: string } }) {
  const uc = useCases.find((u) => u.slug === params.slug);
  if (!uc) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": uc.title,
    "description": uc.desc,
    "step": howToSteps.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.name,
      "text": s.text,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">{uc.title}</h1>
        <p className="text-lg text-gray-600 mb-10">{uc.desc}</p>

        <div className="mb-10 p-6 bg-gray-50 rounded-2xl border">
          <a href="/" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition w-full text-center">
            Start Compressing — Free →
          </a>
          <p className="text-center text-sm text-gray-400 mt-3">No account · No upload · 100% private</p>
        </div>

        <h2 className="text-2xl font-semibold mb-6">How to {uc.title}</h2>
        <ol className="space-y-4 mb-10">
          {howToSteps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</span>
              <div>
                <p className="font-semibold">{step.name}</p>
                <p className="text-gray-600 text-sm">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-semibold mb-4">Why Use ImageCompress Pro?</h2>
        <ul className="list-disc pl-6 mb-10 space-y-2 text-gray-700">
          <li>Processes images locally in your browser — files never leave your device</li>
          <li>Supports JPEG, PNG, WebP, and AVIF output formats</li>
          <li>Batch compress up to 20 images at once</li>
          <li>No file size limits on the free tier</li>
          <li>No account or registration required</li>
          <li>Works on desktop, tablet, and mobile</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-10">
          <div className="border rounded-xl p-4">
            <p className="font-semibold">Is it really free?</p>
            <p className="text-gray-600 text-sm mt-1">Yes. ImageCompress Pro is completely free with no hidden limits. No credit card, no account, no watermarks.</p>
          </div>
          <div className="border rounded-xl p-4">
            <p className="font-semibold">Are my images private?</p>
            <p className="text-gray-600 text-sm mt-1">Completely. All compression happens in your browser. Your images are never uploaded to any server.</p>
          </div>
          <div className="border rounded-xl p-4">
            <p className="font-semibold">What is the maximum file size?</p>
            <p className="text-gray-600 text-sm mt-1">There is no server-side file size limit. Processing is limited only by your device memory — typically up to 50MB per image.</p>
          </div>
          <div className="border rounded-xl p-4">
            <p className="font-semibold">What quality setting should I use?</p>
            <p className="text-gray-600 text-sm mt-1">Quality 80 is recommended for most use cases. It produces files 40% smaller than quality 100 with no visible difference on screen.</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">{uc.title} — Start Now</h3>
          <p className="text-gray-600 mb-4">{uc.desc}</p>
          <a href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">Compress Images Now →</a>
        </div>
      </main>
    </>
  );
}
