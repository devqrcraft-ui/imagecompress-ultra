import fs from 'fs';

const path_ = 'src/app/sitemap.ts';
let c = fs.readFileSync(path_, 'utf8');

const replacements = [
  ["const routes = [];", "const routes: string[] = [];"],
  ["function walk(dir, prefix) {", "function walk(dir: string, prefix: string) {"],
  ["const usePages = useCases.map((u) => ({", "const usePages = useCases.map((u: { slug: string }) => ({"],
  ["const seen = new Set();", "const seen = new Set<string>();"],
];

for (const [oldStr, newStr] of replacements) {
  const count = c.split(oldStr).length - 1;
  if (count !== 1) {
    console.error('MATCH FAILED for:', oldStr, '-> found', count);
    process.exit(1);
  }
  c = c.replace(oldStr, newStr);
}

fs.writeFileSync(path_, c, 'utf8');
console.log('OK: types added');
