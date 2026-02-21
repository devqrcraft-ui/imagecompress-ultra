"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const forms=[
  {form:'N-400',name:'Application for Naturalization',maxKB:'240KB',dim:'600×600 px',fmt:'JPEG'},
  {form:'DS-160',name:'Nonimmigrant Visa Application',maxKB:'240KB',dim:'600×600 px',fmt:'JPEG'},
  {form:'I-485',name:'Adjustment of Status',maxKB:'240KB',dim:'2×2 inches',fmt:'JPEG'},
  {form:'US Passport Online',name:'US Passport Renewal',maxKB:'240KB',dim:'600×600 px',fmt:'JPEG'},
  {form:'I-130',name:'Petition for Alien Relative',maxKB:'240KB',dim:'2×2 inches',fmt:'JPEG'},
];
const faq=[
  {q:'What is the photo size requirement for USCIS forms?',a:'USCIS requires photos in JPEG format, 2×2 inches (600×600 pixels), under 240KB for online forms like N-400, DS-160, and I-485.'},
  {q:'How do I compress a photo to under 240KB for USCIS?',a:'Upload your photo, switch to Exact KB Mode, type 200 (safely under 240KB), choose JPEG format, and compress.'},
  {q:'Can I use this for DS-160 visa photo compression?',a:'Yes. DS-160 requires a JPEG under 240KB at 600×600 pixels. Upload your photo and compress to 200KB using our tool.'},
  {q:'Is my passport photo safe using this tool?',a:'Completely. All processing happens in your browser. Your photo is never uploaded to any server.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-passport-photo-usa" style={{color:'white',textDecoration:'none'}}>Passport</Link>
          <Link href="/compress-image-for-visa" style={{color:'white',textDecoration:'none'}}>Visa</Link>
        </div>
      </nav>
      <div style={{textAlign:'center',padding:'48px 16px 24px'}}>
        <div style={{display:'inline-block',background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.3)',borderRadius:'10px',padding:'8px 16px',fontSize:'13px',marginBottom:'20px',color:'#fca5a5'}}>
          ⚠️ USCIS requires: JPEG · 2×2 inches (600×600 px) · Under 240KB · White background
        </div>
        <h1 style={{fontSize:'clamp(24px,4vw,42px)',fontWeight:900,margin:'0 0 16px'}}>Compress Photo for USCIS Forms<br/><span style={{color:'#818cf8'}}>N-400 · DS-160 · I-485 · US Passport</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,maxWidth:'580px',margin:'0 auto 32px',lineHeight:1.6}}>Meet USCIS photo requirements in seconds. Pre-set to 200KB JPEG — safely under the 240KB limit. 100% private, no upload.</p>
      </div>
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'0 16px 40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={200} defaultFormat="jpeg"/></div>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'0 16px 40px'}}>
        <h2 style={{fontSize:'22px',fontWeight:800,marginBottom:'16px'}}>USCIS Form Photo Requirements</h2>
        <div style={{overflowX:'auto',marginBottom:'32px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
            <thead><tr style={{background:'rgba(99,102,241,0.15)'}}>
              {['Form','Purpose','Max Size','Dimensions','Format'].map(h=><th key={h} style={{padding:'10px 12px',textAlign:'left',border:'1px solid rgba(255,255,255,0.08)',fontWeight:700}}>{h}</th>)}
            </tr></thead>
            <tbody>{forms.map((r,i)=>(
              <tr key={i} style={{background:i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',fontWeight:700,color:'#a5b4fc'}}>{r.form}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.75}}>{r.name}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',color:'#34d399',fontWeight:700}}>{r.maxKB}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.75}}>{r.dim}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.75}}>{r.fmt}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <h2 style={{fontSize:'22px',fontWeight:800,marginBottom:'16px'}}>FAQ</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'13px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'32px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([['/', '20KB'],['/compress-to-50kb','50KB'],['/compress-passport-photo-usa','US Passport'],['/compress-image-for-visa','Visa Photo']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · Not affiliated with USCIS · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
