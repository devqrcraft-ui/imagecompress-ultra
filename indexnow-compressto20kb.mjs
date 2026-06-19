const KEY = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6';
const HOST = 'www.compressto20kb.com';

const urls = [
  'https://www.compressto20kb.com/',
  'https://www.compressto20kb.com/compress-for-ebay',
  'https://www.compressto20kb.com/blog/best-image-size-for-ebay-listings',
  'https://www.compressto20kb.com/blog/best-image-compressor-for-mac',
  'https://www.compressto20kb.com/blog/compress-image-for-google-forms',
  'https://www.compressto20kb.com/blog/ds-160-photo-requirements',
  'https://www.compressto20kb.com/blog/compress-images-for-etsy-listings',
  'https://www.compressto20kb.com/blog/compress-images-for-shopify-store',
  'https://www.compressto20kb.com/blog/compress-image-for-shopify-product-page',
  'https://www.compressto20kb.com/blog/ecommerce-image-optimization',
  'https://www.compressto20kb.com/blog/webp-vs-jpeg-2026',
  'https://www.compressto20kb.com/blog/image-optimization-2026',
  'https://www.compressto20kb.com/blog/compress-image-for-usps',
  'https://www.compressto20kb.com/blog/compress-passport-photo-to-50kb',
  'https://www.compressto20kb.com/blog/us-passport-photo-requirements',
  'https://www.compressto20kb.com/blog/uscis-photo-size-requirements',
  'https://www.compressto20kb.com/blog/dv-lottery-photo-requirements',
  'https://www.compressto20kb.com/blog/h1b-visa-photo-requirements',
  'https://www.compressto20kb.com/blog/image-size-requirements-for-green-card',
  'https://www.compressto20kb.com/blog/how-to-compress-image-for-uscis',
];

const body = JSON.stringify({ host: HOST, key: KEY, urlList: urls });

console.log('Відправляємо', urls.length, 'URL на IndexNow...');
console.log('host:', HOST);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body,
});

console.log('Статус:', res.status, res.statusText);
if (res.status === 200 || res.status === 202) {
  console.log('УСПІХ — IndexNow прийняв URLs');
} else if (res.status === 429) {
  console.log('Rate limit — почекайте 5 хвилин і запустіть знову');
} else {
  const text = await res.text();
  console.log('Відповідь:', text);
}
