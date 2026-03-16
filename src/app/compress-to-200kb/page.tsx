import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Image to 200KB Free Online — No Upload, Instant',
  description: 'Compress any image to exactly 200KB free online. No upload — all processing in your browser. Perfect for blog posts, eCommerce listings, and portals with a 200KB photo limit.',
  keywords: 'compress image to 200kb, reduce image size to 200kb, resize photo 200kb, 200kb image compressor online free, compress jpg to 200kb, reduce png to 200kb',
  alternates: { canonical: '/compress-to-200kb' },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do I compress an image to exactly 200KB?',
                acceptedAnswer: { '@type': 'Answer', text: 'Switch to Exact KB Mode, type 200, select JPEG or WebP format, and click Compress. Binary search finds the maximum quality that fits 200KB — within 1KB accuracy.' },
              },
              {
                '@type': 'Question',
                name: 'What is 200KB good for?',
                acceptedAnswer: { '@type': 'Answer', text: '200KB is ideal for blog hero images, email newsletter graphics, eCommerce product photos, and government portal uploads. It gives noticeably better quality than 100KB while still loading fast.' },
              },
              {
                '@type': 'Question',
                name: 'How to compress image to 200KB on iPhone or Android?',
                acceptedAnswer: { '@type': 'Answer', text: 'Open compressto20kb.com in Safari (iPhone) or Chrome (Android). Tap upload, select your photo, set Exact KB Mode to 200, tap Compress. Downloads instantly — no app needed.' },
              },
              {
                '@type': 'Question',
                name: 'Is 200KB good for WordPress blog images?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes — 200KB WebP is excellent for WordPress. It keeps page load under 3 s on mobile while displaying sharp images at 800–1200px width. Use WebP format for best compression ratio.' },
              },
              {
                '@type': 'Question',
                name: 'Can I compress multiple images to 200KB at once?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes — upload up to 50 images and batch compress all to 200KB simultaneously. Download as ZIP. Unlike Squoosh (1 file only) or TinyPNG (20/month limit), we process 50 files free with no limits.' },
              },
              {
                '@type': 'Question',
                name: 'Is it safe to compress images to 200KB here?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes — all compression runs in your browser via WebAssembly. Your images never touch any server. Unlike 11zon or iLoveIMG which upload files to their servers, zero data is transmitted.' },
              },
            ],
          }),
        }}
      />
      <ClientPage />
    </>
  );
}
