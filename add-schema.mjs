import fs from 'fs';
import path from 'path';

const blogDir = 'C:/Users/RUSLAN/Desktop/imagecompress-ultra/src/app/blog';
const baseUrl = 'https://www.compressto20kb.com';

const dirs = fs.readdirSync(blogDir).filter(d => {
  const full = path.join(blogDir, d);
  return fs.statSync(full).isDirectory() && d !== '[slug]' && fs.existsSync(path.join(full, 'client.tsx'));
});

let updated = 0;
let skipped = 0;

for (const slug of dirs) {
  const filePath = path.join(blogDir, slug, 'client.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('BlogPosting')) {
    skipped++;
    continue;
  }

  const anchor = 'export default function ClientPage()';
  const idx = content.indexOf(anchor);
  if (idx === -1) {
    console.log('NO ANCHOR:', slug);
    continue;
  }

  const schemaBlock = `
const schemaData = {
  blogPosting: {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {"@type": "WebPage", "@id": "${baseUrl}/blog/${slug}"},
    "headline": "Image Compression Guide — ${slug.replace(/-/g, ' ')}",
    "publisher": {"@type": "Organization", "name": "CompressTo20KB", "url": "${baseUrl}"},
    "author": {"@type": "Person", "name": "CompressTo20KB Team"},
    "datePublished": "2026-01-01",
    "dateModified": "2026-05-26",
    "url": "${baseUrl}/blog/${slug}"
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "${baseUrl}"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "${baseUrl}/blog"},
      {"@type": "ListItem", "position": 3, "name": "${slug.replace(/-/g, ' ')}", "item": "${baseUrl}/blog/${slug}"}
    ]
  }
};

`;

  content = content.slice(0, idx) + schemaBlock + content.slice(idx);

  // Вставити <script> теги всередині return після першого <div
  const returnDiv = content.indexOf('<div style=', content.indexOf('return ('));
  if (returnDiv !== -1) {
    const scriptTags = `
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData.blogPosting)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData.breadcrumb)}} />
`;
    // Вставити після першого <div style= ... >
    const closingAngle = content.indexOf('>', returnDiv);
    if (closingAngle !== -1) {
      content = content.slice(0, closingAngle + 1) + scriptTags + content.slice(closingAngle + 1);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  updated++;
  console.log('UPDATED:', slug);
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped`);
