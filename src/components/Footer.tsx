'use client';
import Link from 'next/link';
import { useState } from 'react';

function HoverLink({ href, children, color = 'rgba(255,255,255,0.85)' }: { href: string; children: React.ReactNode; color?: string }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{display:'block',color:hov?'#818cf8':color,fontSize:'15px',marginBottom:'10px',textDecoration:hov?'underline':'none',minHeight:'24px',lineHeight:'1.4',transition:'color 0.18s'}}>
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer style={{borderTop:'1px solid rgba(255,255,255,0.1)',padding:'40px 20px',background:'#080619'}}>
      <div style={{maxWidth:'1200px',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'32px'}}>
        <div>
          <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,marginBottom:'12px',textTransform:'uppercase'}}>Tools</h3>
          {[
            ['/compress-to-20kb','Compress to 20KB'],
            ['/compress-to-50kb','Compress to 50KB'],
            ['/compress-to-100kb','Compress to 100KB'],
            ['/visa-photo-compressor','Visa Photo Compressor'],
            ['/bulk-image-compressor','Bulk Compressor']
          ].map(([href,label])=>(<HoverLink key={href} href={href}>{label}</HoverLink>))}
        </div>
        <div>
          <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,marginBottom:'12px',textTransform:'uppercase'}}>Tax Tools ➔</h3>
          <HoverLink href="https://www.gigwisetax.com" color="#818cf8">GigWiseTax ➔</HoverLink>
          <HoverLink href="https://www.privatepaycheck.com" color="#818cf8">PrivatePaycheck ➔</HoverLink>
          <HoverLink href="https://www.1099deductions.com" color="#818cf8">1099 Deductions ➔</HoverLink>
          <HoverLink href="https://www.ukgigtax.com" color="#818cf8">UK Gig Tax ➔</HoverLink>
        </div>
        <div>
          <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,marginBottom:'12px',textTransform:'uppercase'}}>Visa & Gov</h3>
          {[
            ['/compress-for-ds160','DS-160 Photo'],
            ['/compress-for-uscis','USCIS Photo'],
            ['/compress-for-green-card','Green Card Photo'],
            ['/compress-for-passport-renewal','Passport Renewal'],
            ['/compress-for-dv-lottery','DV Lottery Photo']
          ].map(([href,label] )=>(<HoverLink key={href} href={href}>{label}</HoverLink>))}
        </div>
        <div>
          <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,marginBottom:'12px',textTransform:'uppercase'}}>Company</h3>
          {[
            ['/about','About'],
            ['/faq','FAQ'],
            ['/contact','Contact'],
            ['/privacy-policy','Privacy Policy'],
            ['/terms','Terms']
          ].map(([href,label])=>(<HoverLink key={href} href={href}>{label}</HoverLink>))}
        </div>
      </div>
      <div style={{maxWidth:'1200px',margin:'32px auto 0',paddingTop:'20px',borderTop:'1px solid rgba(255,255,255,0.08)',textAlign:'center',color:'rgba(255,255,255,0.6)',fontSize:'13px'}}>
        © {new Date().getFullYear()} CompressTo20KB.com — 100% Private Free Online Tool
      </div>
    </footer>
  );
}
