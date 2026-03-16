"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const steps = [
  { n: '1', t: 'Take a recent photo', d: 'Taken within the last 6 months. White or off-white background, neutral expression, no glasses.' },
  { n: '2', t: 'Upload below', d: 'Drop your JPG, PNG or HEIC photo. Files never leave your browser.' },
  { n: '3', t: 'Select 200KB JPEG preset', d: 'Pre-set to 200KB JPEG — safely under the 240KB DV Lottery limit.' },
  { n: '4', t: 'Download and submit', d: 'Download your compressed photo and upload to dvlottery.state.gov.' },
];
const faq = [
  { q: 'What are the DV Lottery photo requirements?', a: 'JPEG format, under 240KB, minimum 600×600 pixels, white background, taken within 6 months, no glasses, no head coverings (except religious).' },
  { q: 'What happens if my DV Lottery photo is wrong?', a: 'Your entry will be automatically disqualified. There is no way to fix it after submission. Always check photo requirements before submitting.' },
  { q: 'Can I use a phone photo for DV Lottery?', a: 'Yes — if it meets all requirements: JPEG under 240KB, 600×600px minimum, white background, taken within 6 months.' },
  { q: 'When is the DV-2027 Lottery?', a: 'Registration typically opens in October for 30 days. Check travel.state.gov for exact dates.' },
];
export default function ClientPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-for-uscis" style={{color:'white',textDecoration:'none'}}>USCIS</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}><Link href="/" style={{color:'inherit',textDecoration:'none'}}>Home</Link> → DV Lottery Photo</div>
        <div style={{display:'inline-block',background:'rgba(236,72,153,0.1)',border:'1px solid rgba(236,72,153,0.3)',borderRadius:'10px',padding:'6px 14px',fontSize:'12px',marginBottom:'16px',color:'#f9a8d4'}}>🎯 DV-2027 Diversity Visa Lottery</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>Compress Photo for DV Lottery<br/><span style={{color:'#818cf8'}}>Under 240KB · JPEG · Free · Private</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>DV Lottery requires a JPEG photo under 240KB. Wrong photo = automatic disqualification. Compress your photo correctly — free, instant, no server upload.</p>
        <div style={{background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.2)',borderRadius:'12px',padding:'16px 20px',marginBottom:'32px'}}>
          <strong style={{color:'#fca5a5'}}>⚠️ DV Lottery Requirements:</strong>
          <span style={{fontSize:'14px',opacity:0.85}}> JPEG · Under 240KB · 600×600px min · White background · Within 6 months · No glasses</span>
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'12px'}}>Compress DV Lottery Photo — Free</h2>
        <p style={{fontSize:'14px',opacity:0.6,marginBottom:'20px'}}>Pre-set to 200KB JPEG — safely under the 240KB limit.</p>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={200} defaultFormat="jpeg"/></div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>4 Steps to Compress Your Photo</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'36px'}}>
          {steps.map((s,i)=>(
            <div key={i} style={{display:'flex',gap:'16px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'16px'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(99,102,241,0.3)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,flexShrink:0}}>{s.n}</div>
              <div><div style={{fontWeight:700,marginBottom:'4px'}}>{s.t}</div><div style={{fontSize:'13px',opacity:0.65,lineHeight:1.5}}>{s.d}</div></div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>FAQ</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'13px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'36px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([['/compress-for-uscis','USCIS Forms'],['/compress-passport-photo-usa','US Passport'],['/blog/dv-lottery-photo-requirements','DV Lottery Guide'],['/compress-image-for-visa','Visa Photo']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
