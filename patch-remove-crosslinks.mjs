import fs from 'fs';

const path = 'src/components/Footer.tsx';
const content = fs.readFileSync(path, 'utf8');

const oldBlock = `        <div>
          <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,marginBottom:'12px',textTransform:'uppercase'}}>Tax Tools ➔</h3>
          <HoverLink href="https://www.gigwisetax.com" color="#818cf8">GigWiseTax ➔</HoverLink>
          <HoverLink href="https://www.privatepaycheck.com" color="#818cf8">PrivatePaycheck ➔</HoverLink>
          <HoverLink href="https://www.1099deductions.com" color="#818cf8">1099 Deductions ➔</HoverLink>
          <HoverLink href="https://www.ukgigtax.com" color="#818cf8">UK Gig Tax ➔</HoverLink>
        </div>
`;

const matches = content.split(oldBlock).length - 1;
if (matches !== 1) {
  console.error('BLOCK MATCH FAILED, found:', matches);
  process.exit(1);
}

const newContent = content.replace(oldBlock, '');
fs.writeFileSync(path, newContent, 'utf8');
console.log('OK: removed cross-network links block');
