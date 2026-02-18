import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Passport Photo to 20KB Free — Any Country, No Upload',
  description: 'Compress passport photo to 20KB or 50KB free online. Safe for India UIDAI, Pakistan NADRA, Ukraine Diia. Files never uploaded — 100% private.',
  alternates: { canonical: '/compress-passport-photo' },
};

export default function PassportPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f2a1e 100%)',fontFamily:'Inter,sans-serif',color:'white'}}>
      <header style={{padding:'12px 20px',borderBottom:'1px solid rgba(255,255,255,0.07)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link href="/" style={{display:'flex',alignItems:'center',gap:'8px',textDecoration:'none',color:'white'}}>
          <span style={{fontSize:'22px'}}>🗜️</span>
          <div style={{fontWeight:800,fontSize:'17px'}}>Compress<span style={{color:'#818cf8'}}>To20KB</span></div>
        </Link>
        <Link href="/" style={{color:'rgba(255,255,255,0.5)',textDecoration:'none',fontSize:'13px'}}>← Back to Tool</Link>
      </header>
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'32px 20px'}}>
        <h1 style={{fontSize:'32px',fontWeight:800,marginBottom:'12px'}}>
          Compress <span style={{color:'#818cf8'}}>Passport Photo</span> to 20KB Free
        </h1>
        <p style={{fontSize:'15px',lineHeight:'1.7',opacity:0.65,marginBottom:'24px'}}>
          Compress your passport photo to exactly 20KB for government portals — India, Pakistan, Ukraine, USA and more. Your photo never leaves your device.
        </p>
        <div style={{background:'rgba(16,185,129,0.08)',border:'1px solid rgba(16,185,129,0.25)',borderRadius:'12px',padding:'16px',marginBottom:'24px',display:'flex',gap:'12px',alignItems:'flex-start'}}>
          <span style={{fontSize:'28px'}}>🔒</span>
          <div>
            <div style={{fontWeight:700,fontSize:'14px',color:'#34d399',marginBottom:'4px'}}>Your passport photo is 100% safe</div>
            <div style={{fontSize:'13px',opacity:0.65}}>Unlike online tools that upload your ID photo to foreign servers, our tool processes everything locally in your browser. No server ever receives your image.</div>
          </div>
        </div>
        <div style={{textAlign:'center',marginBottom:'28px'}}>
          <Link href="/?preset=20kb" style={{display:'inline-block',padding:'14px 32px',borderRadius:'10px',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',fontWeight:800,fontSize:'15px',textDecoration:'none'}}>
            🪪 Compress Passport Photo to 20KB →
          </Link>
        </div>
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'14px'}}>Requirements by Country</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'10px',marginBottom:'28px'}}>
          {[
            ['🇮🇳','India — UIDAI / Passport Seva','Max 20KB, JPEG, white background'],
            ['🇵🇰','Pakistan — NADRA / HEC','Max 20KB, JPEG format required'],
            ['🇺🇦','Ukraine — Diia / Prozorro','20–50KB, JPEG, 35×45mm'],
            ['🇧🇩','Bangladesh — NID / Passport','Max 30KB, JPEG'],
            ['🇵🇭','Philippines — PSA / DFA','Max 50KB, JPEG'],
            ['🇺🇸','USA — USCIS / DV Lottery','Max 240KB but portals often reject >50KB'],
          ].map(([flag,country,req])=>(
            <div key={country} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'14px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <div style={{fontSize:'22px',marginBottom:'6px'}}>{flag}</div>
              <div style={{fontWeight:700,fontSize:'13px',marginBottom:'4px'}}>{country}</div>
              <div style={{fontSize:'12px',opacity:0.5}}>{req}</div>
            </div>
          ))}
        </div>
        <div style={{display:'flex',gap:'10px',flexWrap:'wrap',marginTop:'16px'}}>
          {[['/compress-to-20kb','Compress to 20KB'],['/compress-to-50kb','Compress to 50KB'],['/compress-for-shopify','Shopify Compressor']].map(([href,label])=>(
            <Link key={href} href={href} style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.1)',border:'1px solid rgba(129,140,248,0.25)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>{label} →</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
