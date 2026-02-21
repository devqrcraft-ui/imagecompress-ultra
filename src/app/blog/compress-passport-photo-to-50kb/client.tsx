"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const uses=[
  {country:'India',doc:'Passport / Visa',size:'50KB',fmt:'JPEG'},
  {country:'Pakistan',doc:'Passport Application',size:'50KB',fmt:'JPEG'},
  {country:'Bangladesh',doc:'Government Forms',size:'50KB',fmt:'JPEG'},
  {country:'Philippines',doc:'NBI / Passport',size:'50KB',fmt:'JPEG'},
  {country:'Various',doc:'Online Job Applications',size:'50KB',fmt:'JPEG'},
];
const faq=[
  {q:'Why do some forms require photos under 50KB?',a:'Many government portals in South Asia and Southeast Asia have strict file size limits due to older server infrastructure. 50KB is a common maximum.'},
  {q:'Will compressing to 50KB reduce photo quality?',a:'For passport photos (head and shoulders), 50KB is sufficient to maintain clear facial details. Our tool uses smart compression to preserve quality.'},
  {q:'What dimensions should my passport photo be?',a:'Standard passport photos are 35×45mm or 2×2 inches depending on the country. Check your specific country\'s requirements.'},
  {q:'Can I compress a photo to exactly 50KB?',a:'Yes. Use Exact KB Mode and enter 48 to safely land under 50KB.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-to-50kb" style={{color:'white',textDecoration:'none'}}>50KB Tool</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}>
          <Link href="/blog" style={{color:'#a5b4fc',textDecoration:'none'}}>Blog</Link> → Compress Passport Photo to 50KB
        </div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>Compress Passport Photo to 50KB<br/><span style={{color:'#818cf8'}}>Free Online — Instant Results</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>Many visa portals and government websites require passport photos under 50KB. Smartphone cameras produce photos of 2–8MB — hundreds of times too large. Our free tool compresses your photo to exactly the size you need in seconds.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Compress Your Passport Photo to 50KB Now</h2>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={48} defaultFormat="jpeg"/></div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Who Needs 50KB Passport Photos?</h2>
        <div style={{overflowX:'auto',marginBottom:'32px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
            <thead><tr style={{background:'rgba(99,102,241,0.15)'}}>
              {['Country / Use','Document','Max Size','Format'].map(h=><th key={h} style={{padding:'10px 12px',textAlign:'left',border:'1px solid rgba(255,255,255,0.08)',fontWeight:700}}>{h}</th>)}
            </tr></thead>
            <tbody>{uses.map((r,i)=>(
              <tr key={i} style={{background:i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',fontWeight:700,color:'#a5b4fc'}}>{r.country}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.75}}>{r.doc}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',color:'#34d399',fontWeight:700}}>{r.size}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.75}}>{r.fmt}</td>
              </tr>
            ))}</tbody>
          </table>
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
            {([
              ['/compress-to-50kb','Compress to 50KB'],
              ['/compress-for-uscis','USCIS Photo'],
              ['/compress-passport-photo-usa','US Passport'],
              ['/compress-image-for-visa','Visa Photo'],
            ] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
