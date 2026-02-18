import { Metadata } from "next";
import { notFound } from "next/navigation";

const posts: Record<string, { title: string; desc: string; content: string }> = {
  "image-optimization-2026": {
    title: "Image Optimization in 2026: Complete Guide",
    desc: "Everything you need to know about image optimization in 2026. WebP, AVIF, lazy loading, and more.",
    content: `Image optimization remains one of the highest-impact performance improvements you can make to any website. In 2026, the landscape has shifted significantly toward next-generation formats like AVIF and WebP, which deliver 50–80% smaller files compared to legacy JPEG and PNG.\n\n## Why Image Optimization Matters\n\nImages account for 60–70% of total page weight on average. A single unoptimized hero image can add 2–3 seconds to load time, directly impacting bounce rate and SEO rankings. Google's Core Web Vitals — specifically LCP (Largest Contentful Paint) — are heavily influenced by image performance.\n\n## Best Formats in 2026\n\n**AVIF** is now supported by all major browsers and offers the best compression ratio. A 500KB JPEG becomes roughly 150KB in AVIF at the same visual quality. **WebP** remains the safe default with near-universal support. Use JPEG only as a fallback for older systems.\n\n## Tools\n\nImageCompress Pro handles all formats automatically — upload once, download optimized. No software installation needed.`,
  },
  "best-image-formats": {
    title: "Best Image Formats for Web in 2026: WebP vs AVIF vs JPEG",
    desc: "Compare WebP, AVIF, JPEG, and PNG. Which format should you use in 2026?",
    content: `Choosing the right image format can cut your page weight in half. Here is a practical comparison for 2026.\n\n## AVIF — Best Compression\n\nAVIF delivers the smallest files of any format — typically 50% smaller than JPEG and 20% smaller than WebP. Browser support is now at 95%+. Use AVIF for photos and complex images.\n\n## WebP — Safe Default\n\nWebP is supported by 98% of browsers and offers 25–35% better compression than JPEG. It supports transparency (like PNG) and animation (like GIF). The safest choice for maximum compatibility.\n\n## JPEG — Legacy Fallback\n\nJPEG has no transparency support and lower compression efficiency, but remains useful as a fallback for older browsers and email clients.\n\n## PNG — For Graphics\n\nUse PNG only for screenshots, logos, and images requiring lossless quality or transparency where WebP is not supported.\n\n## Recommendation\n\nFor most websites: AVIF with WebP fallback. ImageCompress Pro handles this automatically.`,
  },
  "pagespeed-images": {
    title: "How to Fix Image Issues in Google PageSpeed Insights",
    desc: "Step-by-step guide to fix 'Serve images in next-gen formats' and other PageSpeed image warnings.",
    content: `Google PageSpeed Insights flags image issues as some of the most impactful fixes for web performance. Here is how to address each warning.\n\n## Serve Images in Next-Gen Formats\n\nThis warning appears when your site serves JPEG or PNG instead of WebP or AVIF. Fix: convert all images to WebP or AVIF before uploading. ImageCompress Pro does this in seconds.\n\n## Properly Size Images\n\nServing images larger than their display size wastes bandwidth. Always resize to the maximum display dimensions before uploading.\n\n## Efficiently Encode Images\n\nEven in the correct format, images can be over-compressed or under-compressed. Aim for 75–85% quality for photos, 90%+ for graphics.\n\n## Defer Offscreen Images\n\nAdd loading="lazy" to all images below the fold. This is a one-line HTML change that can dramatically improve initial load time.\n\n## Results\n\nFixing these four issues typically improves PageSpeed score by 15–30 points.`,
  },
  "ecommerce-image-optimization": {
    title: "E-commerce Image Optimization: Boost Sales with Faster Images",
    desc: "How to optimize product images for Shopify, WooCommerce, and other e-commerce platforms.",
    content: `Product image quality directly affects conversion rates. But large images hurt page speed, which also hurts conversions. Here is how to balance both.\n\n## The E-commerce Image Dilemma\n\nShopping sites need high-quality images to drive sales, yet large images slow page load — and a 1-second delay reduces conversions by 7%. The solution is smart compression, not sacrifice.\n\n## Recommended Specs by Platform\n\n**Shopify**: 2048×2048px max, JPEG or WebP, under 1MB per image. **WooCommerce**: 800×800px minimum for zoom, WebP preferred. **Amazon**: 1000×1000px minimum, pure white background, JPEG.\n\n## Workflow\n\n1. Shoot or source at full resolution. 2. Resize to platform maximum. 3. Convert to WebP. 4. Compress at 80–85% quality. 5. Upload. ImageCompress Pro handles steps 3–4 automatically.\n\n## Impact\n\nOptimized product images typically reduce page load by 40–60%, improving both SEO rankings and conversion rates.`,
  },
  "free-vs-paid-compressors": {
    title: "Free vs Paid Image Compressors: What You Actually Need",
    desc: "Honest comparison of free and paid image compression tools in 2026.",
    content: `The image compression market has dozens of tools. Here is an honest breakdown of what you get free versus paid.\n\n## What Free Tools Offer\n\nMost free tools handle the basics well: JPEG and PNG compression, basic quality control, web interface. ImageCompress Pro is free and supports WebP, AVIF, batch processing, and API access — covering most professional needs.\n\n## When Paid Tools Make Sense\n\nPaid tools add value for: automated WordPress/Shopify integration, CDN delivery, advanced analytics, team collaboration, and white-label options. If you are processing 10,000+ images per month automatically, a paid plan pays for itself.\n\n## The Hidden Cost of Bad Compression\n\nUsing a poor free tool that adds artifacts or bloats file size costs more in bandwidth and lost conversions than any subscription fee.\n\n## Verdict\n\nFor individuals and small businesses: a good free tool like ImageCompress Pro is sufficient. For enterprises with automated pipelines: evaluate paid options based on API limits and integration depth.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts[params.slug];
  if (!post) return {};
  return { title: post.title, description: post.desc, openGraph: { title: post.title, description: post.desc, type: "article" } };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) notFound();
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.desc}</p>
      <article className="prose prose-lg max-w-none">
        {post.content.split("\n\n").map((p, i) => (
          p.startsWith("## ")
            ? <h2 key={i} className="text-2xl font-bold mt-8 mb-3">{p.replace("## ", "")}</h2>
            : <p key={i} className="mb-4 text-gray-700">{p}</p>
        ))}
      </article>
      <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
        <p className="font-semibold text-lg mb-3">Try ImageCompress Pro — free, no sign up</p>
        <a href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">Compress Images Now →</a>
      </div>
    </main>
  );
}
