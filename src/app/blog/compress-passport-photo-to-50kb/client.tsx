"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const portals=[
  {portal:'India UIDAI (Aadhaar)',limit:'20KB',format:'JPEG'},
  {portal:'India Passport Seva',limit:'50KB',format:'JPEG'},
  {portal:'Pakistan NADRA',limit:'20KB',format:'JPEG'},
  {portal:'Philippines DFA',limit:'50KB',format:'JPEG'},
  {portal:'Bangladesh NID',limit:'30KB',format:'JPEG'},
  {portal:'UK HMPO',limit:'50KB',format:'JPEG'},
  {portal:'US USCIS / DS-160',limit:'240KB',format:'JPEG'},
];
const faq=[
  {q:'How do I compress a passport photo to 50KB?',a:'Upload your photo, switch to Exact KB Mode, type 50 in the target field, select JPEG, and click Compress. Your photo will be compressed to exactly 50KB.'},
  {q:'Which countries require passport photos under 50KB?',a:'India Passport Seva, Philippines DFA, UK HMPO, and many other government portals require photos under 50KB. USCIS (USA) allows up to 240KB.'},
  {q:'Will my passport photo look bad at 50KB?',a:'No. A properly compressed 600×600 JPEG at 50KB looks sharp on screen. Government portals review digital images — the quality is more than sufficient.'},
  {q:'What is the difference between 20KB and 50KB passport photo?',a:'India UIDAI requires 20KB, while Passport Seva accepts 50KB. Use our Exact KB Mode to compress to the exact limit required by your specific portal.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}><Link href="/blog" style={{color:'inherit',textDecoration:'none'}}>Blog</Link> → Compress Passport Photo to 50KB</div>
        <div style={{display:'inline-block',background:'rgba(99,102,241,0.1)',border:'1px solid rgba(99,102,241,0.3)',borderRadius:'10px',padding:'6px 14px',fontSize:'12px',marginBottom:'16px',color:'#a5b4fc'}}>🪪 Passport · Global</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>Compress Passport Photo to 50KB<br/><span style={{color:'#818cf8'}}>For Visa Portals Worldwide</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>Many visa and passport portals worldwide require photos under 50KB. Use our Exact KB Mode to compress your passport photo to exactly 50KB — or any other target size.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Photo Size Limits by Portal</h2>
        <div style={{overflowX:'auto',marginBottom:'32px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
            <thead><tr style={{background:'rgba(99,102,241,0.15)'}}>
              {['Portal','Size Limit','Format'].map(h=><th key={h} style={{padding:'10px 12px',textAlign:'left',border:'1px solid rgba(255,255,255,0.08)',fontWeight:700}}>{h}</th>)}
            </tr></thead>
            <tbody>{portals.map((r,i)=>(
              <tr key={i} style={{background:i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',fontWeight:600}}>{r.portal}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',color:'#34d399',fontWeight:700}}>{r.limit}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.7}}>{r.format}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'12px'}}>Compress to Exactly 50KB (Free)</h2>
        <p style={{fontSize:'14px',opacity:0.6,marginBottom:'20px'}}>Switch to Exact KB Mode and type your target size. Works for 20KB, 50KB, 100KB, 240KB — any portal requirement.</p>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={50} defaultFormat="jpeg"/></div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>FAQ</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'13px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'36px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([['/compress-passport-photo-usa','US Passport Tool'],['/compress-for-uscis','USCIS Tool'],['/compress-to-20kb','Compress to 20KB'],['/blog/dv-lottery-photo-requirements','DV Lottery']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
