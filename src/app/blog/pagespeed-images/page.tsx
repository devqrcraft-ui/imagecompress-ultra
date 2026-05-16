
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Use modern formats like WebP or AVIF which offer 25-50% smaller file sizes than JPEG at the same visual quality. Our tool compresses images client-side in your browser with no upload required, preserving maximum quality."}},{"@type":"Question","name":"Is this image compressor free?","acceptedAnswer":{"@type":"Answer","text":"Yes. CompressTo20KB is 100% free with no file size limits, no account required, and no watermarks. All compression happens in your browser — your images never leave your device."}},{"@type":"Question","name":"What image formats are supported?","acceptedAnswer":{"@type":"Answer","text":"We support JPEG, PNG, WebP, AVIF, and GIF. You can compress and convert between formats. WebP and AVIF produce the smallest file sizes for web use."}}]};
import { Metadata } from "next";
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.compressto20kb.com/blog/pagespeed-images' },
  title: "Fix Image Issues in Google PageSpeed Insights",
  description: "Step-by-step guide to resolve all PageSpeed image warnings: serve next-gen formats, properly size images, defer offscreen images.",
  openGraph: {
    title: "Fix Image Issues in Google PageSpeed Insights",
    description: "Step-by-step guide to resolve all PageSpeed image warnings.",
    images: [{ url: "/og/pagespeed-images.png", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

export default function PageSpeedImages() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-4 py-16">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"Fix Image Issues in Google PageSpeed Insights","item":"https://www.compressto20kb.com/blog/pagespeed-images"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Fix Image Issues in Google PageSpeed Insights","description":"Step-by-step guide to resolve all PageSpeed image warnings: serve next-gen formats, properly size images, defer offscreen images.","url":"https://www.compressto20kb.com/blog/pagespeed-images","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"}}' }} />
      <h1 className="text-4xl font-bold mb-4">Fix Image Issues in Google PageSpeed Insights</h1>
      <p className="text-slate-300 mb-8">Updated February 2026 · 11 min read</p>

      <p className="mb-6 text-lg">PageSpeed Insights flags image problems more than any other category. Here is exactly how to fix every image warning — with code examples.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Warning 1: "Serve images in next-gen formats"</h2>
      <p className="mb-4">This is the most common warning. PageSpeed wants WebP or AVIF instead of JPEG or PNG. The fix: convert all images before deploying.</p>
      <p className="mb-4"><strong>Quick fix with ImageCompress Pro:</strong> upload your JPEG/PNG, download WebP. Done in under 10 seconds per image.</p>
      <p className="mb-4"><strong>Automated fix with Sharp (Node.js):</strong></p>
      <pre className="bg-gray-100 rounded p-4 text-sm overflow-auto mb-6">{`const sharp = require("sharp");
sharp("input.jpg")
  .webp({ quality: 80 })
  .toFile("output.webp");`}</pre>
      <p className="mb-4">Always use a <code className="bg-gray-100 px-1 rounded">&lt;picture&gt;</code> element with fallback so older browsers still get JPEG:</p>
      <pre className="bg-gray-100 rounded p-4 text-sm overflow-auto mb-6">{`<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" width="800" height="600"  loading="lazy"/>
</picture>`}</pre>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Warning 2: "Properly size images"</h2>
      <p className="mb-4">This warning appears when you serve a 2000px image to display it at 400px. The browser downloads all the extra pixels and throws them away — pure waste.</p>
      <p className="mb-4"><strong>Fix:</strong> generate multiple sizes and use <code className="bg-gray-100 px-1 rounded">srcset</code>:</p>
      <pre className="bg-gray-100 rounded p-4 text-sm overflow-auto mb-6">{`<img
  srcset="img-400.webp 400w,
          img-800.webp 800w,
          img-1200.webp 1200w"
  sizes="(max-width: 640px) 400px,
         (max-width: 1024px) 800px,
         1200px"
  src="img-800.webp"
  alt="Description"
 loading="lazy"/>`}</pre>
      <p className="mb-4">In Next.js, the <code className="bg-gray-100 px-1 rounded">Image</code> component handles this automatically:</p>
      <pre className="bg-gray-100 rounded p-4 text-sm overflow-auto mb-6">{`import Image from "next/image";
<Image src="/photo.jpg" alt="Description" width={800} height={600} />`}</pre>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Warning 3: "Defer offscreen images"</h2>
      <p className="mb-4">Images below the fold are loaded immediately, blocking faster resources. Fix: add <code className="bg-gray-100 px-1 rounded">loading="lazy"</code> to every image that is not in the initial viewport.</p>
      <pre className="bg-gray-100 rounded p-4 text-sm overflow-auto mb-6">{`<!-- Above fold: no lazy (loads immediately) -->
<img src="hero.webp" alt="Hero" width="1200" height="600"  loading="lazy"/>

<!-- Below fold: lazy -->
<img src="product.webp" alt="Product" width="400" height="400" loading="lazy" />`}</pre>
      <p className="mb-4"><strong>Important:</strong> never add <code className="bg-gray-100 px-1 rounded">loading="lazy"</code> to your LCP image (the largest image in the viewport). This will make your LCP score worse.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Warning 4: "Image elements do not have explicit width and height"</h2>
      <p className="mb-4">Without explicit dimensions, the browser cannot reserve space for the image before it loads. This causes Cumulative Layout Shift (CLS) — content jumps around as images load.</p>
      <pre className="bg-gray-100 rounded p-4 text-sm overflow-auto mb-6">{`<!-- Bad: no dimensions -->
<img src="photo.webp" alt="Photo"  loading="lazy"/>

<!-- Good: explicit dimensions -->
<img src="photo.webp" alt="Photo" width="800" height="600"  loading="lazy"/>`}</pre>
      <p className="mb-4">You can also use CSS aspect-ratio as a fallback:</p>
      <pre className="bg-gray-100 rounded p-4 text-sm overflow-auto mb-6">{`img {
  aspect-ratio: 4 / 3;
  width: 100%;
  height: auto;
}`}</pre>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Warning 5: "Efficiently encode images"</h2>
      <p className="mb-4">Even WebP images can be over-compressed or under-compressed. PageSpeed wants JPEG quality ≤ 85 and WebP quality ≤ 85. For most photos, quality 80 is visually identical to quality 100 but 40% smaller.</p>
      <p className="mb-4">Target sizes for common use cases:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Hero image (LCP): under 75 KB</li>
        <li>Product thumbnail: under 30 KB</li>
        <li>Blog featured image: under 50 KB</li>
        <li>Profile avatar: under 10 KB</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Warning 6: "Preload Largest Contentful Paint image"</h2>
      <p className="mb-4">Your LCP image should be preloaded so the browser fetches it as early as possible. Add a preload hint in your document head:</p>
      <pre className="bg-gray-100 rounded p-4 text-sm overflow-auto mb-6">{`<link
  rel="preload"
  as="image"
  href="/hero.webp"
  type="image/webp"
/>`}</pre>
      <p className="mb-4">In Next.js App Router, add this to your root layout metadata:</p>
      <pre className="bg-gray-100 rounded p-4 text-sm overflow-auto mb-6">{`// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="preload" as="image" href="/hero.webp" type="image/webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}`}</pre>

      <h2 className="text-2xl font-semibold mt-10 mb-4">PageSpeed Image Checklist</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Convert all images to WebP (or AVIF + WebP fallback)</li>
        <li>Generate multiple sizes and use srcset</li>
        <li>Add loading="lazy" to all below-fold images</li>
        <li>Always specify width and height attributes</li>
        <li>Keep LCP image under 75 KB</li>
        <li>Preload your LCP image</li>
        <li>Never lazy-load the LCP image</li>
      </ul>

      <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
        <h3 className="text-xl font-semibold mb-2">Fix your PageSpeed image score now</h3>
        <p className="text-slate-300 mb-4">Convert JPEG and PNG to WebP instantly with ImageCompress Pro — free, browser-based, no upload required.</p>
        <a href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">Compress Images Now →</a>

      <section style={{maxWidth:'800px',margin:'0 auto',padding:'0 20px 40px'}}>
        <h2 style={{fontSize:'20px',fontWeight:700,color:'white',marginBottom:'16px'}}>Related Articles</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
        <a href='/blog/ecommerce-image-optimization' style={{display:'block',padding:'12px 16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',color:'#818cf8',textDecoration:'none',fontSize:'14px',fontWeight:500,transition:'border-color 0.2s'}}>
          → Ecommerce Image Optimization
        </a>
        <a href='/blog/compress-images-for-shopify-store' style={{display:'block',padding:'12px 16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',color:'#818cf8',textDecoration:'none',fontSize:'14px',fontWeight:500,transition:'border-color 0.2s'}}>
          → Compress Images for Shopify Store
        </a>
        <a href='/blog/image-optimization-2026' style={{display:'block',padding:'12px 16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',color:'#818cf8',textDecoration:'none',fontSize:'14px',fontWeight:500,transition:'border-color 0.2s'}}>
          → Image Optimization 2026
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
      <AuthorBox />
    </>
  );
}
