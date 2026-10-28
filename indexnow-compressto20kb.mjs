// Notifies IndexNow participants (Bing/Copilot, Yandex, Seznam, Naver) about every
// URL in the live sitemap. Google is not an IndexNow participant — it uses the
// sitemap and Search Console instead.
// Run after a deploy: node indexnow-compressto20kb.mjs
const KEY = '949d8768ebd65a6ae8545c790ab39370';
const HOST = 'www.compressto20kb.com';
const SITEMAP = `https://${HOST}/sitemap.xml`;

const xml = await fetch(SITEMAP).then(r => r.text());
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const bad = urlList.filter(u => !u.startsWith(`https://${HOST}/`));
if (!urlList.length) {
  console.error('Sitemap returned no URLs — aborting, nothing was submitted.');
  process.exit(1);
}
if (bad.length) {
  console.error('Refusing to submit foreign URLs:', bad);
  process.exit(1);
}

console.log(`Submitting ${urlList.length} URLs to IndexNow...`);
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, urlList }),
});
const text = await res.text();
console.log('Status:', res.status, res.statusText, text.slice(0, 300));
if (res.status === 429) console.log('Rate limited — wait 5 minutes and re-run.');
