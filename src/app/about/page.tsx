const faq: [string, string][] = [
  ['What is CompressTo20KB?', 'A free image compressor that runs entirely in your browser. You give it a target size in kilobytes, it re-encodes the file at the highest quality that still fits under that number, and it hands the result back to you. Nothing is uploaded, so the images never leave your device.'],
  ['Is CompressTo20KB really free?', 'The compressor itself is free: no account, no watermark, no queue and no upload quota. You can add up to 50 files in one batch and set any target between 5 and 5000 KB. Non-intrusive advertising pays for the site.'],
  ['What makes it different from other compressors?', 'Two things. First, the processing is local: the image is decoded and re-encoded on your own machine, so there is no server copy of a passport photo or an ID to leak or retain. Second, the control you get is a file size rather than a quality slider - Target KB Mode searches the encoding until the output fits the number you typed, and a file that is already smaller than that number comes back unchanged.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CompressTo20KB",
  description: "CompressTo20KB is a free, private, browser-based image compression tool. No uploads, no accounts, no server copy of your images.",
  alternates: { canonical: "https://www.compressto20kb.com/about" },
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"About CompressTo20KB","item":"https://www.compressto20kb.com/about"}]}' }} />
      <h1 className="text-4xl font-bold mb-6">About CompressTo20KB</h1>
      <p className="text-lg text-slate-300 mb-6">CompressTo20KB is a free, browser-based image compression tool built for developers, designers, and anyone who cares about page weight.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
      <p className="mb-4">Images are still the heaviest thing most pages ship. We built CompressTo20KB to make size-targeted compression available to anyone with a browser — for free, and without asking anybody to hand their files to a server first.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">How It Works</h2>
      <p className="mb-4">Everything runs in your browser using the Web APIs for decoding and encoding images. Your files are processed locally on your device — they never leave your computer, never touch our servers, and are never stored anywhere.</p>
      <p className="mb-4">In Target KB Mode the tool runs a binary search over encoding quality, keeping the best result that still fits under your number. It can output WebP, AVIF, JPEG or PNG, and it caps the longest side at 4096 px while searching, so a very large master is downscaled as well as re-encoded.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">What Makes It Different</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-300">
        <li><strong>Truly private:</strong> zero server uploads — compression happens locally on your device</li>
        <li><strong>Size as the control:</strong> type the KB number a form asks for instead of guessing at a slider</li>
        <li><strong>Modern formats:</strong> WebP and AVIF output, not just JPEG/PNG</li>
        <li><strong>Batch processing:</strong> up to 50 images in one run, with a ZIP download</li>
        <li><strong>No account required:</strong> open the tool and start compressing</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Built for Heavy Pages</h2>
      <p className="mb-4">Hero images and product grids are usually the largest elements above the fold, which makes them the first place to look when a page feels slow. Shrinking the files you ship is one input among several — scripts, hosting and themes matter too — so treat it as something you measure, not a trick that fixes a score by itself.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-3 mb-6">
        {faq.map(([q, a], i) => (
          <details key={i} className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-4">
            <summary className="font-semibold text-white cursor-pointer">{q}</summary>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">{a}</p>
          </details>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
      <p className="mb-4">Have questions, feedback, or a feature request? We would love to hear from you. Visit our <a href="/contact" className="text-blue-600 underline">Contact page</a>.</p>
    </main>
  );
}
