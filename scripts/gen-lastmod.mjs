// Regenerates src/lib/lastmod.json with the real date each route last changed.
// Google only trusts <lastmod> when it is verifiably accurate, and ignores it
// outright when every URL claims "today" (which is what a build-time new Date()
// did). Run `npm run lastmod` after editing content; the build also tries it,
// and silently keeps the committed file when git history is unavailable (Vercel).
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const APP = path.join('src', 'app');
const OUT = path.join('src', 'lib', 'lastmod.json');
const FALLBACK = '2026-10-20T00:00:00.000Z';

function git(args) {
  try {
    return execFileSync('git', args, { encoding: 'utf-8' }).trim();
  } catch {
    return '';
  }
}

if (!fs.existsSync(path.join('.git'))) {
  console.log('lastmod: no git history here, keeping', OUT);
  process.exit(0);
}

const routes = [];
(function walk(dir, prefix) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name.startsWith('[') || entry.name === 'api') continue;
      if (entry.name.startsWith('(')) walk(path.join(dir, entry.name), prefix);
      else walk(path.join(dir, entry.name), prefix + '/' + entry.name);
      continue;
    }
    if (!/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) continue;
    routes.push({ route: prefix === '' ? '/' : prefix, file: path.join(dir, entry.name) });
  }
})(APP, '');

const dates = {};
for (const { route, file } of routes) {
  const iso = git(['log', '-1', '--format=%cI', '--', file]);
  dates[route] = iso || FALLBACK;
}

const page = path.join(APP, 'blog', '[slug]', 'page.tsx');
if (fs.existsSync(page)) {
  const src = fs.readFileSync(page, 'utf-8');
  const slugs = [...src.matchAll(/^ {2}'([a-z0-9-]+)': \{/gm)].map(m => m[1]);
  for (const slug of slugs) {
    const iso = git(['log', '-1', '--format=%cI', `-S'${slug}': {`, '--', page]);
    dates['/blog/' + slug] = iso || FALLBACK;
  }
  console.log(`lastmod: ${slugs.length} blog slugs scanned`);
}

fs.writeFileSync(OUT, JSON.stringify(dates, null, 1) + '\n', 'utf-8');
const stale = Object.values(dates).filter(d => d === FALLBACK).length;
console.log(`lastmod: wrote ${Object.keys(dates).length} routes to ${OUT} (${stale} fell back to ${FALLBACK.slice(0, 10)})`);
