"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const visas=[
  {country:'🇺🇸 US Visa (DS-160)',size:'Under 240KB',format:'JPEG',dim:'600×600 px'},
  {country:'🇪🇺 Schengen Visa',size:'Under 500KB',format:'JPEG',dim:'35×45 mm'},
  {country:'🇬🇧 UK Visa',size:'Under 6MB',format:'JPEG / PNG',dim:'354×472 px'},
  {country:'🇨🇦 Canada Visa',size:'Under 4MB',format:'JPEG',dim:'420×540 px'},
  {country:'🇦🇺 Australia Visa',size:'Under 5MB',format:'JPEG',dim:'35×45 mm'},
  {country:'🇮🇳 India Visa',size:'Under 20KB',format:'JPEG',dim:'200×200 px'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-for-uscis" style={{color:'white',textDecoration:'none'}}>USCIS</Link>
          <Link href="/compress-passport-photo-usa" style={{color:'white',textDecoration:'none'}}>US Passport</Link>
        </div>
      </nav>
      <div style={{textAlign:'center',padding:'48px 16px 24px'}}>
        <h1 style={{fontSize:'clamp(24px,4vw,42px)',fontWeight:900,margin:'0 0 16px'}}>Compress Photo for <span style={{color:'#818cf8'}}>Visa Application</span><br/>US · Schengen · UK · Canada</h1>
        <p style={{fontSize:'16px',opacity:0.65,maxWidth:'580px',margin:'0 auto 32px',lineHeight:1.6}}>Compress your visa photo to meet exact KB requirements for any country. Free, instant, no upload needed.</p>
      </div>
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'0 16px 40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={200} defaultFormat="jpeg"/></div>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'0 16px 40px'}}>
        <h2 style={{fontSize:'22px',fontWeight:800,marginBottom:'16px'}}>Visa Photo Requirements by Country</h2>
        <div style={{overflowX:'auto',marginBottom:'32px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
            <thead><tr style={{background:'rgba(99,102,241,0.15)'}}>
              {['Country / Visa','Max File Size','Format','Dimensions'].map(h=><th key={h} style={{padding:'10px 12px',textAlign:'left',border:'1px solid rgba(255,255,255,0.08)',fontWeight:700}}>{h}</th>)}
            </tr></thead>
            <tbody>{visas.map((r,i)=>(
              <tr key={i} style={{background:i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',fontWeight:600}}>{r.country}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',color:'#34d399',fontWeight:700}}>{r.size}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.75}}>{r.format}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.75}}>{r.dim}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <div style={{padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([['/', '20KB'],['/compress-to-50kb','50KB'],['/compress-for-uscis','USCIS'],['/compress-passport-photo-usa','US Passport']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
