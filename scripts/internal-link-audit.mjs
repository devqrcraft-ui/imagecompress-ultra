const SITE = 'https://www.compressto20kb.com';
const UA = 'Mozilla/5.0 (compatible; internal-link-audit)';

async function get(url) {
  const r = await fetch(url, { headers: { 'user-agent': UA } });
  return { status: r.status, html: await r.text() };
}

function internalLinks(html) {
  const out = new Set();
  const re = /href="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) {
    let h = m[1];
    if (h.startsWith('http')) {
      if (h.startsWith(SITE)) h = h.slice(SITE.length) || '/';
      else continue;
    }
    if (!h.startsWith('/')) continue;
    h = h.split('#')[0].split('?')[0];
    if (!h || h === '/') h = '/';
    if (h.startsWith('/_next') || h.startsWith('/api')) continue;
    if (/\.(png|jpg|jpeg|svg|ico|xml|txt|css|js|webp)$/i.test(h)) continue;
    out.add(h.replace(/\/$/, '') || '/');
  }
  return out;
}

const sitemap = await get(`${SITE}/sitemap.xml`);
const urls = [...sitemap.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
console.log('sitemap urls:', urls.length);

const pages = urls.map(u => {
  const p = u.replace(SITE, '').replace(/\/$/, '');
  return p || '/';
});

const inbound = Object.fromEntries(pages.map(p => [p, 0]));
const linkedFrom = Object.fromEntries(pages.map(p => [p, new Set()]));
let ok = 0, failed = [];

for (const p of pages) {
  const url = p === '/' ? SITE + '/' : SITE + p;
  try {
    const { status, html } = await get(url);
    if (status !== 200) { failed.push([p, status]); continue; }
    ok++;
    for (const t of internalLinks(html)) {
      if (t in inbound && t !== p) { inbound[t]++; linkedFrom[t].add(p); }
    }
  } catch (e) { failed.push([p, String(e)]); }
}

console.log('fetched ok:', ok, 'failed:', failed.length);
if (failed.length) console.log('FAILED:', failed);

const sorted = pages.map(p => [p, inbound[p]]).sort((a, b) => a[1] - b[1]);
const orphans = sorted.filter(([, n]) => n === 0);
const weak = sorted.filter(([, n]) => n > 0 && n <= 2);

console.log('\n=== ORPHANS (0 inbound internal links):', orphans.length, '===');
orphans.forEach(([p]) => console.log(p));

console.log('\n=== WEAK (1-2 inbound):', weak.length, '===');
weak.forEach(([p, n]) => console.log(n, p));

console.log('\n=== TOP 15 BEST LINKED ===');
sorted.slice(-15).reverse().forEach(([p, n]) => console.log(n, p));
