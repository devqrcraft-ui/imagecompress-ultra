import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Image Optimization Blog | Tips, Guides & Tools 2026",
  description: "Learn image optimization, WebP conversion, PageSpeed fixes and more.",
};

const posts = [
  { slug: "image-optimization-2026", title: "Image Optimization in 2026: Complete Guide", desc: "WebP, AVIF, lazy loading, and everything else you need to know." },
  { slug: "best-image-formats", title: "WebP vs AVIF vs JPEG: Best Format in 2026", desc: "Practical comparison of every major image format for web." },
  { slug: "pagespeed-images", title: "Fix Image Issues in Google PageSpeed Insights", desc: "Step-by-step guide to resolve all PageSpeed image warnings." },
  { slug: "ecommerce-image-optimization", title: "E-commerce Image Optimization Guide", desc: "Boost sales with faster product images on Shopify and WooCommerce." },
  { slug: "free-vs-paid-compressors", title: "Free vs Paid Image Compressors: Honest Review", desc: "What you actually get with free tools versus paid subscriptions." },
];

export default function BlogIndex() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Image Optimization Blog</h1>
      <p className="text-gray-500 mb-12">Guides, tips and tools for faster images in 2026.</p>
      <div className="space-y-8">
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block p-6 border rounded-2xl hover:border-blue-400 hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
            <p className="text-gray-500">{p.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
