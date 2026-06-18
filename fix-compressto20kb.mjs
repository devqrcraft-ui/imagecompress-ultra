import fs from 'fs';
import path from 'path';

const ROOT = 'C:/Users/RUSLAN/Desktop/imagecompress-ultra/src/app';

const blogFiles = [
  'blog/best-free-image-compressor-for-small-business-usa/page.tsx',
  'blog/best-image-compressor-for-mac/page.tsx',
  'blog/best-image-formats/page.tsx',
  'blog/best-image-size-for-ebay-listings/page.tsx',
  'blog/compress-image-for-google-forms/page.tsx',
  'blog/compress-image-for-linkedin-profile/page.tsx',
  'blog/compress-image-for-shopify-product-page/page.tsx',
  'blog/compress-image-for-usps/page.tsx',
  'blog/compress-image-on-iphone/page.tsx',
  'blog/compress-image-on-windows-11/page.tsx',
  'blog/compress-image-to-30kb/page.tsx',
  'blog/compress-image-without-losing-quality/page.tsx',
  'blog/compress-images-for-amazon-seller/page.tsx',
  'blog/compress-images-for-etsy-listings/page.tsx',
  'blog/compress-images-for-shopify-store/page.tsx',
  'blog/compress-jpeg-under-1mb/page.tsx',
  'blog/compress-passport-photo-to-50kb/page.tsx',
  'blog/ds-160-photo-requirements/page.tsx',
  'blog/dv-lottery-photo-requirements/page.tsx',
  'blog/ecommerce-image-optimization/page.tsx',
  'blog/free-vs-paid-compressors/page.tsx',
  'blog/h1b-visa-photo-requirements/page.tsx',
  'blog/how-to-compress-image-for-email/page.tsx',
  'blog/how-to-compress-image-for-uscis/page.tsx',
  'blog/how-to-compress-images-for-woocommerce/page.tsx',
  'blog/how-to-compress-photo-for-ds160/page.tsx',
  'blog/image-optimization-2026/page.tsx',
  'blog/image-size-for-amazon-product-listing/page.tsx',
  'blog/image-size-requirements-for-green-card/page.tsx',
  'blog/reduce-image-size-for-email/page.tsx',
  'blog/reduce-image-size-for-government-forms-usa/page.tsx',
  'blog/us-passport-photo-requirements/page.tsx',
  'blog/uscis-photo-size-requirements/page.tsx',
  'blog/webp-vs-jpeg-2026/page.tsx',
];

// Фрагменти для видалення з JSON-LD author і reviewedBy
const AUTHOR_JUNK = ',"jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]';
const REVIEWER_JUNK = ',"jobTitle":"Image Optimization Specialist","sameAs":"https://medium.com/@ethan.blake.compress"';

let fixed = 0;
let notFound = [];

console.log('=== КРОК 1: blog page.tsx файли ===');
for (const rel of blogFiles) {
  const full = path.join(ROOT, rel).replace(/\\/g, '/');
  if (!fs.existsSync(full)) {
    notFound.push(rel);
    continue;
  }
  let txt = fs.readFileSync(full, 'utf8').replace(/\r\n/g, '\n');
  const before = txt;
  txt = txt.split(AUTHOR_JUNK).join('');
  txt = txt.split(REVIEWER_JUNK).join('');
  if (txt !== before) {
    fs.writeFileSync(full, txt, 'utf8');
    console.log('FIXED:', rel);
    fixed++;
  } else {
    console.log('SKIP (рядок не знайдено):', rel);
  }
}
console.log('Файлів виправлено:', fixed);
if (notFound.length) console.log('НЕ ЗНАЙДЕНО:', notFound);

// ============================
// КРОК 2: page.tsx (головна)
// ============================
console.log('\n=== КРОК 2: page.tsx (головна) ===');
const homePath = path.join(ROOT, 'page.tsx').replace(/\\/g, '/');
let home = fs.readFileSync(homePath, 'utf8').replace(/\r\n/g, '\n');
const OLD_PERSON = '"@context":"https://schema.org","@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","description":"Tax compliance specialist since 2017. Helped 5,000+ freelancers navigate IRS and HMRC rules.","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center","https://www.gov.uk/self-assessment-tax-returns"]';
const NEW_PERSON = '"@context":"https://schema.org","@type":"Person","name":"Ethan Blake"';
if (home.includes(OLD_PERSON)) {
  home = home.split(OLD_PERSON).join(NEW_PERSON);
  fs.writeFileSync(homePath, home, 'utf8');
  console.log('FIXED: page.tsx — Person-схема очищена');
} else {
  console.log('SKIP: точний рядок Person не знайдено — перевірте вручну');
}

// ============================
// КРОК 3: AuthorBox.tsx
// ============================
console.log('\n=== КРОК 3: AuthorBox.tsx ===');
const abPath = path.join(ROOT, 'components/AuthorBox.tsx').replace(/\\/g, '/');
let ab = fs.readFileSync(abPath, 'utf8').replace(/\r\n/g, '\n');

// Видаляємо рядок jobTitle "Tax Compliance Specialist · Since 2017"
const OLD_JOBTITLE = `        <div style={{fontSize:12, color:'rgba(255,255,255,0.5)', marginBottom:8}} itemProp="jobTitle">\n          Tax Compliance Specialist \xb7 Since 2017\n        </div>\n`;
if (ab.includes(OLD_JOBTITLE)) {
  ab = ab.split(OLD_JOBTITLE).join('');
  console.log('FIXED AuthorBox: jobTitle рядок видалено');
} else {
  // fallback — пробуємо без unicode
  const OLD_JOBTITLE2 = "Tax Compliance Specialist · Since 2017";
  if (ab.includes(OLD_JOBTITLE2)) {
    ab = ab.split(OLD_JOBTITLE2).join('Image Compression Specialist');
    console.log('FIXED AuthorBox (fallback): замінено jobTitle текст');
  } else {
    console.log('SKIP AuthorBox: jobTitle рядок не знайдено — перевірте вручну');
  }
}

// Замінюємо вигадану біографію на нейтральну
const OLD_BIO = "Helped 5,000+ freelancers navigate IRS rules. Specializes in gig economy and self-employed taxation.";
const NEW_BIO = "Writes about image compression, file formats, and online tools for working with photos.";
if (ab.includes(OLD_BIO)) {
  ab = ab.split(OLD_BIO).join(NEW_BIO);
  console.log('FIXED AuthorBox: bio замінено');
} else {
  console.log('SKIP AuthorBox: bio рядок не знайдено — перевірте вручну');
}

// Видаляємо IRS.gov посилання з AuthorBox
const OLD_IRS_LINK = `          <a\n            href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"\n            rel="nofollow"\n            target="_blank"\n            style={{fontSize:12, color:'rgba(255,255,255,0.5)', textDecoration:'none'}}\n          >\n            IRS.gov Source\n          </a>\n`;
if (ab.includes(OLD_IRS_LINK)) {
  ab = ab.split(OLD_IRS_LINK).join('');
  console.log('FIXED AuthorBox: IRS посилання видалено');
} else {
  console.log('SKIP AuthorBox: IRS посилання не знайдено (або вже видалено)');
}

fs.writeFileSync(abPath, ab, 'utf8');

// ============================
// КРОК 4: eBay цифри (client.tsx)
// ============================
console.log('\n=== КРОК 4: eBay 7MB -> 12MB (client.tsx) ===');
const clientPath = path.join(ROOT, 'blog/best-image-size-for-ebay-listings/client.tsx').replace(/\\/g, '/');
let cl = fs.readFileSync(clientPath, 'utf8').replace(/\r\n/g, '\n');
const beforeCl = cl;
cl = cl.split('Under 7MB per image').join('Under 12MB per image');
cl = cl.split('eBay accepts up to 7MB but images over 1MB slow down').join('eBay accepts up to 12MB but images over 1MB slow down');
cl = cl.split('Under 7MB \xb7').join('Under 12MB \xb7');
cl = cl.split('under 7MB').join('under 12MB');
cl = cl.split('up to 7MB').join('up to 12MB');
if (cl !== beforeCl) {
  fs.writeFileSync(clientPath, cl, 'utf8');
  console.log('FIXED: client.tsx — 7MB -> 12MB');
} else {
  console.log('SKIP: client.tsx рядки 7MB не знайдено');
}

// ============================
// КРОК 5: eBay FAQ (compress-for-ebay/page.tsx)
// ============================
console.log('\n=== КРОК 5: eBay FAQ (compress-for-ebay/page.tsx) ===');
const ebayPath = path.join(ROOT, 'compress-for-ebay/page.tsx').replace(/\\/g, '/');
let et = fs.readFileSync(ebayPath, 'utf8').replace(/\r\n/g, '\n');
const OLD_FAQ = 'eBay requires listing images in JPEG format, minimum 500px on the longest side, maximum 9000px. For the zoom feature, eBay recommends at least 1600px. File size should be under 7MB. Square images (1:1 ratio) work best for consistent display across the eBay app and website.';
const NEW_FAQ = 'eBay requires listing images in JPEG format, minimum 500px on the longest side. There is no official maximum dimension, but eBay recommends at least 1600px to enable the zoom feature. Maximum file size is 12MB. Square images (1:1 ratio) work best for consistent display across the eBay app and website.';
if (et.includes(OLD_FAQ)) {
  et = et.split(OLD_FAQ).join(NEW_FAQ);
  fs.writeFileSync(ebayPath, et, 'utf8');
  console.log('FIXED: compress-for-ebay/page.tsx — FAQ цифри виправлено');
} else {
  console.log('SKIP: compress-for-ebay FAQ рядок не знайдено — перевірте вручну');
}

// ============================
// ФІНАЛЬНА ПЕРЕВІРКА
// ============================
console.log('\n=== ФІНАЛЬНА ПЕРЕВІРКА ===');

let taxCount = 0;
let irsCount = 0;
let helpedCount = 0;
const allFiles = [
  ...blogFiles.map(f => path.join(ROOT, f).replace(/\\/g, '/')),
  homePath,
  abPath,
  clientPath,
  ebayPath,
];

for (const f of allFiles) {
  if (!fs.existsSync(f)) continue;
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('Tax Compliance Specialist')) { taxCount++; console.log('ЗАЛИШИВСЯ Tax Compliance Specialist:', f); }
  if (content.includes('Helped 5,000')) { helpedCount++; console.log('ЗАЛИШИВСЯ "Helped 5,000":', f); }
  if (content.includes('irs.gov/businesses/small-businesses')) { irsCount++; console.log('ЗАЛИШИВСЯ IRS посилання:', f); }
}

console.log('\n--- Підсумок ---');
console.log('Tax Compliance Specialist залишилось у файлах:', taxCount, taxCount === 0 ? '(ЧИСТО)' : '(!!! ПЕРЕВІРТЕ ВРУЧНУ)');
console.log('"Helped 5,000" залишилось у файлах:', helpedCount, helpedCount === 0 ? '(ЧИСТО)' : '(!!! ПЕРЕВІРТЕ ВРУЧНУ)');
console.log('IRS посилання залишилось у файлах:', irsCount, irsCount === 0 ? '(ЧИСТО)' : '(!!! ПЕРЕВІРТЕ ВРУЧНУ)');
console.log('\nГотово. Запустіть: npm run build');
