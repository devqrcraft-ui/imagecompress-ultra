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

export default function sitemap() {
  const lastModified = new Date();

  const staticRoutes = getStaticRoutes().map(route => ({
    url: baseUrl + route,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1.0 : 0.7,
  }));

  const blogPages = Object.keys(posts).map(slug => ({
    url: baseUrl + '/blog/' + slug,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const seen = new Set<string>();
  const all = [...staticRoutes, ...blogPages];
  return all.filter(item => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}