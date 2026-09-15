import fs from 'fs';

const path = 'src/app/page.tsx';
const lines = fs.readFileSync(path, 'utf8').split('\n');

const startIdx = lines.findIndex(l => l.includes('{/* SISTER SITES */}'));
if (startIdx === -1) {
  console.error('START NOT FOUND');
  process.exit(1);
}

const endMarkerIdx = lines.findIndex(l => l.includes('{/* POPULAR PRESETS */}'));
if (endMarkerIdx === -1) {
  console.error('END MARKER NOT FOUND');
  process.exit(1);
}

// find the </section> closing tag just before the POPULAR PRESETS marker
let endIdx = -1;
for (let i = endMarkerIdx - 1; i > startIdx; i--) {
  if (lines[i].trim() === '</section>') { endIdx = i; break; }
}
if (endIdx === -1) {
  console.error('CLOSING SECTION NOT FOUND');
  process.exit(1);
}

console.log('Removing lines', startIdx, 'to', endIdx, '(', endIdx - startIdx + 1, 'lines )');

lines.splice(startIdx, endIdx - startIdx + 1);

fs.writeFileSync(path, lines.join('\n'), 'utf8');
console.log('OK: removed sister sites section');
