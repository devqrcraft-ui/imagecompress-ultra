import fs from 'fs';
import path from 'path';

const content = `import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { VISA_COUNTRIES } from '@/lib/visaCountries';
import { posts } from './blog/[slug]/page';
import { useCases } from './use/[slug]/page';

const baseUrl = 'https://www.compressto20kb.com';

// Автоматично сканує src/app і повертає всі статичні URL-шляхи
// (папки з page.tsx, без API-роутів і без [dynamic]-сегментів)
function getStaticRoutes(): string[] {
  const appDir = path.join(process.cwd(), 'src', 'app');
  const routes: string[] = [];

  function walk(dir: string, prefix: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const hasPage = entries.some(e => e.isFile() && /^page\\.(tsx|ts|jsx|js)$/.test(e.name));
    if (hasPage && !prefix.includes('[')) {
      routes.push(prefix === '' ? '/' : prefix);
    }
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name === 'api') continue;
      if (entry.name.startsWith('[')) continue; // dynamic segments handled separately
      if (entry.name.startsWith('(')) {
        walk(path.join(dir, entry.name), prefix); // route groups
        continue;
      }
      walk(path.join(dir, entry.name), prefix + '/' + entry.name);
    }
  }

  walk(appDir, '');
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = getStaticRoutes().map(route => ({
    url: baseUrl + route,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1.0 : 0.7,
  }));

  const visaPages = VISA_COUNTRIES.map(c => ({
    url: \\\`\\\${baseUrl}/compress-for-\\\${c.slug}\\\`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogPages = Object.keys(posts).map(slug => ({
    url: \\\`\\\${baseUrl}/blog/\\\${slug}\\\`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const usePages = useCases.map((u: { slug: string }) => ({
    url: \\\`\\\${baseUrl}/use/\\\${u.slug}\\\`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const seen = new Set<string>();
  const all = [...staticRoutes, ...visaPages, ...blogPages, ...usePages];
  return all.filter(item => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}
`;

fs.writeFileSync('src/app/sitemap.ts', content, 'utf8');
console.log('OK: sitemap.ts fully rewritten');
