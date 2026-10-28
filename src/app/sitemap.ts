import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { posts } from './blog/[slug]/page';

const baseUrl = 'https://www.compressto20kb.com';

function getStaticRoutes() {
  const appDir = path.join(process.cwd(), 'src', 'app');
  const routes: string[] = [];

  function walk(dir: string, prefix: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const hasPage = entries.some(e => e.isFile() && /^page\.(tsx|ts|jsx|js)$/.test(e.name));
    if (hasPage && !prefix.includes('[')) {
      routes.push(prefix === '' ? '/' : prefix);
    }
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name === 'api') continue;
      if (entry.name.startsWith('[')) continue;
      if (entry.name.startsWith('(')) {
        walk(path.join(dir, entry.name), prefix);
        continue;
      }
      walk(path.join(dir, entry.name), prefix + '/' + entry.name);
    }
  }

  walk(appDir, '');
  return routes;
}

function readLastmod(): Record<string, string> {
  try {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'lib', 'lastmod.json'), 'utf-8'));
  } catch {
    return {};
  }
}

export default function sitemap() {
  // Google ignores <changefreq> and <priority> and stops trusting <lastmod> the
  // moment it is a build timestamp instead of the real edit date, so the date
  // comes from git (scripts/gen-lastmod.mjs) and is left out when unknown.
  const dates = readLastmod();
  const stamp = (route: string) => (dates[route] ? new Date(dates[route]) : undefined);

  const staticRoutes = getStaticRoutes().map(route => ({
    url: baseUrl + route,
    lastModified: stamp(route),
  }));

  const blogPages = Object.keys(posts).map(slug => ({
    url: baseUrl + '/blog/' + slug,
    lastModified: stamp('/blog/' + slug),
  }));

  const seen = new Set<string>();
  const all = [...staticRoutes, ...blogPages];
  return all.filter(item => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}