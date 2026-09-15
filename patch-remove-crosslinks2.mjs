import fs from 'fs';

const path = 'src/components/Footer.tsx';
const lines = fs.readFileSync(path, 'utf8').split('\n');

const startIdx = lines.findIndex(l => l.includes('Tax Tools'));
if (startIdx === -1) {
  console.error('START NOT FOUND');
  process.exit(1);
}
// the block starts one line above (the opening <div>)
const divOpenIdx = startIdx - 1;
if (!lines[divOpenIdx].trim().startsWith('<div>')) {
  console.error('DIV OPEN NOT WHERE EXPECTED:', lines[divOpenIdx]);
  process.exit(1);
}
// find the closing </div> after startIdx
let endIdx = -1;
for (let i = startIdx; i < lines.length; i++) {
  if (lines[i].trim() === '</div>') { endIdx = i; break; }
}
if (endIdx === -1) {
  console.error('END NOT FOUND');
  process.exit(1);
}

console.log('Removing lines', divOpenIdx, 'to', endIdx, ':');
console.log(lines.slice(divOpenIdx, endIdx + 1).join('\n'));

lines.splice(divOpenIdx, endIdx - divOpenIdx + 1);

fs.writeFileSync(path, lines.join('\n'), 'utf8');
console.log('OK: removed');
