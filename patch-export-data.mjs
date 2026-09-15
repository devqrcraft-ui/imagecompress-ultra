import fs from 'fs';

const p1 = 'src/app/blog/[slug]/page.tsx';
let c1 = fs.readFileSync(p1, 'utf8');
const old1 = 'const posts: Record<string, { title: string; desc: string; date: string; tag: string; content: string }> = {';
if (c1.split(old1).length - 1 !== 1) { console.error('POSTS LINE NOT FOUND'); process.exit(1); }
c1 = c1.replace(old1, 'export ' + old1);
fs.writeFileSync(p1, c1, 'utf8');

const p2 = 'src/app/use/[slug]/page.tsx';
let c2 = fs.readFileSync(p2, 'utf8');
const old2 = 'const useCases = [';
if (c2.split(old2).length - 1 !== 1) { console.error('USECASES LINE NOT FOUND'); process.exit(1); }
c2 = c2.replace(old2, 'export ' + old2);
fs.writeFileSync(p2, c2, 'utf8');

console.log('OK: both exports added');
