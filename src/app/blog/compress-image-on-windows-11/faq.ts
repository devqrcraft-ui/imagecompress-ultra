export const faq: { q: string; a: string }[] = [
  { q: 'Can I really compress an image without any quality loss?', a: 'True lossless compression exists (PNG, WebP lossless) but saves less space. In practice, "without losing quality" means compressing to the point where quality loss is invisible to the human eye — typically 75–85% JPEG or WebP quality.' },
  { q: 'What format has the best quality-to-size ratio?', a: 'WebP and AVIF offer the best quality-to-size ratio in 2026. WebP is 25–35% smaller than JPEG at the same quality. AVIF is even smaller but has slightly less browser support.' },
  { q: 'How much can I compress a JPEG without visible loss?', a: 'Most JPEG photos can be compressed to 60–80% quality without visible loss on standard screens. Below 50% you typically start seeing block artifacts. Use our preview slider to judge.' },
  { q: 'Is PNG better than JPEG for quality?', a: 'PNG is lossless — it never degrades. But PNG files are much larger than JPEG for photographs. Use PNG for graphics, screenshots, and logos. Use JPEG or WebP for photos.' },
  { q: 'What causes visible quality loss when compressing?', a: 'JPEG compression creates block artifacts (8x8 pixel squares) and banding in gradients. This becomes visible below ~50% quality. Using WebP instead of JPEG at the same file size typically looks noticeably better.' },
];
